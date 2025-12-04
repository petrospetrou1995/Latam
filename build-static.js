const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

// Import models
const Broker = require('./models/Broker');
const Review = require('./models/Review');

// Configuration
const OUTPUT_DIR = path.join(__dirname, 'dist');
const PUBLIC_DIR = path.join(__dirname, 'public');
const VIEWS_DIR = path.join(__dirname, 'views');

async function buildStatic() {
  console.log('🚀 Starting static site build...\n');

  // Connect to database
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/latam-broker-reviews', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to database');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('⚠️  Continuing with static pages only (no broker data)...\n');
  }

  // Create output directory
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log('✅ Created output directory\n');

  // Copy public assets
  console.log('📁 Copying public assets...');
  copyDirectory(PUBLIC_DIR, path.join(OUTPUT_DIR, 'public'));
  console.log('✅ Public assets copied\n');

  // Copy all HTML files from views (excluding admin/login pages)
  console.log('📄 Copying HTML pages...');
  const htmlFiles = fs.readdirSync(VIEWS_DIR).filter(file => 
    file.endsWith('.html') && 
    !file.includes('.backup') && 
    file !== 'admin.html' && 
    file !== 'login.html'
  );
  
  htmlFiles.forEach(file => {
    const source = path.join(VIEWS_DIR, file);
    let content = fs.readFileSync(source, 'utf8');
    
    // Update script paths for static deployment (if not already absolute)
    content = content.replace(/src="\/js\//g, 'src="/public/js/');
    content = content.replace(/href="\/css\//g, 'href="/public/css/');
    content = content.replace(/href="\/images\//g, 'href="/public/images/');
    
    // Fix broker detail page links to use .html extension
    content = content.replace(/href="\/broker\/([^"]+)"/g, 'href="/broker/$1.html"');
    
    // Fix blog post links
    content = content.replace(/href="\/blog\/([^"]+)"/g, 'href="/blog/$1.html"');
    
    // Add static brokers loader if brokers.js is included
    if (content.includes('brokers.js') && !content.includes('static-brokers.js')) {
      content = content.replace(
        /(<script src="[^"]*brokers\.js"><\/script>)/,
        '<script src="/public/js/static-brokers.js"></script>\n    $1'
      );
    }
    
    const dest = path.join(OUTPUT_DIR, file);
    fs.writeFileSync(dest, content);
    console.log(`  ✓ ${file}`);
  });
  console.log(`✅ Copied ${htmlFiles.length} HTML files\n`);

  // Generate broker data JSON
  if (mongoose.connection.readyState === 1) {
    console.log('📊 Generating broker data...');
    try {
      const brokers = await Broker.find({ isActive: true }).lean();
      const brokersData = {
        brokers: brokers,
        generatedAt: new Date().toISOString()
      };
      
      const brokersJsonPath = path.join(OUTPUT_DIR, 'public', 'data', 'brokers.json');
      fs.mkdirSync(path.dirname(brokersJsonPath), { recursive: true });
      fs.writeFileSync(brokersJsonPath, JSON.stringify(brokersData, null, 2));
      console.log(`✅ Generated brokers.json (${brokers.length} brokers)\n`);

      // Generate reviews data
      console.log('📝 Generating reviews data...');
      const reviews = await Review.find({ isApproved: true }).populate('broker', 'name slug').lean();
      const reviewsData = {
        reviews: reviews,
        generatedAt: new Date().toISOString()
      };
      
      const reviewsJsonPath = path.join(OUTPUT_DIR, 'public', 'data', 'reviews.json');
      fs.mkdirSync(path.dirname(reviewsJsonPath), { recursive: true });
      fs.writeFileSync(reviewsJsonPath, JSON.stringify(reviewsData, null, 2));
      console.log(`✅ Generated reviews.json (${reviews.length} reviews)\n`);

      // Generate static sitemap.xml
      console.log('🗺️  Generating sitemap.xml...');
      generateSitemap(brokers);
      console.log('✅ Generated sitemap.xml\n');

      // Generate broker detail pages
      console.log('📄 Generating broker detail pages...');
      await generateBrokerPages(brokers);
      console.log(`✅ Generated ${brokers.length} broker detail pages\n`);

    } catch (error) {
      console.error('❌ Error generating data:', error.message);
    }
  } else {
    console.log('⚠️  Skipping data generation (no database connection)\n');
    
    // Create empty data files
    fs.mkdirSync(path.join(OUTPUT_DIR, 'public', 'data'), { recursive: true });
    fs.writeFileSync(path.join(OUTPUT_DIR, 'public', 'data', 'brokers.json'), JSON.stringify({ brokers: [], generatedAt: new Date().toISOString() }));
    fs.writeFileSync(path.join(OUTPUT_DIR, 'public', 'data', 'reviews.json'), JSON.stringify({ reviews: [], generatedAt: new Date().toISOString() }));
    
    // Generate static sitemap without broker pages
    generateSitemap([]);
  }

  // Create index.html redirect (if needed)
  const indexPath = path.join(OUTPUT_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    // Copy from views if it exists
    const viewsIndex = path.join(VIEWS_DIR, 'index.html');
    if (fs.existsSync(viewsIndex)) {
      fs.copyFileSync(viewsIndex, indexPath);
    }
  }

  // Create _redirects file for SPA routing (if using Netlify/Cloudflare Pages)
  const redirectsPath = path.join(OUTPUT_DIR, '_redirects');
  fs.writeFileSync(redirectsPath, `/*    /index.html   200\n`);

  // Create .htaccess for Apache (if needed)
  const htaccessPath = path.join(OUTPUT_DIR, '.htaccess');
  const htaccessContent = `RewriteEngine On
RewriteBase /
RewriteRule ^index\\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
`;
  fs.writeFileSync(htaccessPath, htaccessContent);

  console.log('✨ Static site build complete!');
  console.log(`📦 Output directory: ${OUTPUT_DIR}`);
  console.log('\n📋 Next steps:');
  console.log('   1. Deploy the "dist" folder to your static hosting');
  console.log('   2. Update API calls in JavaScript to use /public/data/brokers.json');
  console.log('   3. Test the site locally by serving the dist folder\n');

  // Close database connection
  if (mongoose.connection.readyState === 1) {
    await mongoose.connection.close();
  }
}

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function generateSitemap(brokers) {
  const baseUrl = 'https://latambrokerreviews.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/brokers', priority: '0.9', changefreq: 'daily' },
    { url: '/reviews', priority: '0.9', changefreq: 'daily' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/forex-trading', priority: '0.8', changefreq: 'weekly' },
    { url: '/stocks-trading', priority: '0.8', changefreq: 'weekly' },
    { url: '/crypto-trading', priority: '0.8', changefreq: 'weekly' },
    { url: '/cfd-trading', priority: '0.8', changefreq: 'weekly' },
    { url: '/commodities-trading', priority: '0.8', changefreq: 'weekly' },
    { url: '/education-training', priority: '0.8', changefreq: 'weekly' },
    { url: '/broker-comparison', priority: '0.9', changefreq: 'weekly' },
    { url: '/how-to-choose-broker', priority: '0.9', changefreq: 'monthly' },
    { url: '/regulated-brokers-latam', priority: '0.9', changefreq: 'monthly' },
    { url: '/trading-platforms-latam', priority: '0.9', changefreq: 'monthly' },
    { url: '/payment-methods-latam', priority: '0.9', changefreq: 'monthly' },
    { url: '/brokers-spei', priority: '0.8', changefreq: 'monthly' },
    { url: '/brokers-pse', priority: '0.8', changefreq: 'monthly' },
    { url: '/brokers-cbu-alias', priority: '0.8', changefreq: 'monthly' },
    { url: '/brokers-webpay', priority: '0.8', changefreq: 'monthly' },
    { url: '/compare-brokers', priority: '0.9', changefreq: 'weekly' },
    { url: '/libertex-vs-etoro', priority: '0.8', changefreq: 'monthly' },
    { url: '/etoro-vs-xtb', priority: '0.8', changefreq: 'monthly' },
    { url: '/interactive-brokers-vs-etoro', priority: '0.8', changefreq: 'monthly' },
    { url: '/avatrade-vs-xtb', priority: '0.8', changefreq: 'monthly' },
    { url: '/cmc-markets-vs-plus500', priority: '0.8', changefreq: 'monthly' },
    { url: '/admirals-vs-ic-markets', priority: '0.8', changefreq: 'monthly' },
    { url: '/best-brokers-beginners', priority: '0.9', changefreq: 'monthly' },
    { url: '/best-brokers-advanced', priority: '0.9', changefreq: 'monthly' },
    { url: '/best-crypto-brokers', priority: '0.9', changefreq: 'monthly' },
    { url: '/best-day-trading-brokers', priority: '0.9', changefreq: 'monthly' },
    { url: '/best-futures-brokers', priority: '0.8', changefreq: 'monthly' },
    { url: '/best-low-fee-brokers', priority: '0.9', changefreq: 'monthly' },
    { url: '/best-mobile-trading-apps', priority: '0.9', changefreq: 'monthly' },
    { url: '/best-no-minimum-deposit-brokers', priority: '0.9', changefreq: 'monthly' },
    { url: '/best-options-brokers', priority: '0.8', changefreq: 'monthly' },
    { url: '/best-scalping-brokers', priority: '0.9', changefreq: 'monthly' },
    { url: '/best-stock-trading-brokers', priority: '0.9', changefreq: 'monthly' },
    { url: '/best-swing-trading-brokers', priority: '0.9', changefreq: 'monthly' }
  ];
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add static pages
  staticPages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  // Add broker pages
  brokers.forEach(broker => {
    const lastmod = broker.updatedAt ? new Date(broker.updatedAt).toISOString().split('T')[0] : currentDate;
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}/broker/${broker.slug}</loc>\n`;
    sitemap += `    <lastmod>${lastmod}</lastmod>\n`;
    sitemap += '    <changefreq>weekly</changefreq>\n';
    sitemap += '    <priority>0.7</priority>\n';
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemap);
}

async function generateBrokerPages(brokers) {
  const brokerDetailTemplate = fs.readFileSync(path.join(VIEWS_DIR, 'broker-detail.html'), 'utf8');
  
  for (const broker of brokers) {
    // Get reviews for this broker
    const reviews = await Review.find({ 
      broker: broker._id, 
      isApproved: true 
    }).sort({ createdAt: -1 }).limit(10).lean();
    
    // Create broker directory
    const brokerDir = path.join(OUTPUT_DIR, 'broker');
    if (!fs.existsSync(brokerDir)) {
      fs.mkdirSync(brokerDir, { recursive: true });
    }
    
    // For static site, we'll use the same template
    // The JavaScript will load broker data from JSON
    fs.writeFileSync(path.join(brokerDir, `${broker.slug}.html`), brokerDetailTemplate);
  }
}

// Run build
buildStatic().catch(console.error);

