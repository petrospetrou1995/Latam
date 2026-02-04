const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_DIR = path.join(__dirname, '..');
const PROJECTS_DIR = path.join(BASE_DIR, '..', 'latam-projects');
const themeConfigs = require('./theme-configs.json');

/**
 * Ensures each project has completely separate resources and unique pages
 */
function ensureProjectSeparation(projectKey) {
    const config = themeConfigs.projects[projectKey];
    if (!config) {
        console.error(`❌ Project ${projectKey} not found in config`);
        return false;
    }

    const projectDir = path.join(PROJECTS_DIR, projectKey);
    if (!fs.existsSync(projectDir)) {
        console.error(`❌ Project directory not found: ${projectDir}`);
        return false;
    }

    console.log(`\n🔧 Ensuring separation for: ${config.name}`);
    console.log(`📁 Project directory: ${projectDir}\n`);

    // 1. Ensure separate CSS files (not shared)
    ensureSeparateCSS(projectDir, config);
    
    // 2. Ensure separate JS files (not shared)
    ensureSeparateJS(projectDir, config);
    
    // 3. Ensure separate images directory
    ensureSeparateImages(projectDir, config);
    
    // 4. Update all HTML pages to use project-specific branding
    updateAllPages(projectDir, config);
    
    // 5. Update build-static.js to be project-aware
    updateBuildScript(projectDir, config);
    
    // 6. Ensure package.json is project-specific
    ensureProjectPackageJson(projectDir, config);
    
    console.log(`✅ Project ${config.name} separation ensured!\n`);
    return true;
}

function ensureSeparateCSS(projectDir, config) {
    console.log('📝 Ensuring separate CSS files...');
    
    const cssDir = path.join(projectDir, 'public', 'css');
    if (!fs.existsSync(cssDir)) {
        fs.mkdirSync(cssDir, { recursive: true });
    }
    
    // Copy all CSS files from base (they're already separate copies)
    const baseCssDir = path.join(BASE_DIR, 'public', 'css');
    if (fs.existsSync(baseCssDir)) {
        const cssFiles = fs.readdirSync(baseCssDir).filter(f => f.endsWith('.css'));
        cssFiles.forEach(file => {
            const source = path.join(baseCssDir, file);
            const dest = path.join(cssDir, file);
            if (!fs.existsSync(dest)) {
                fs.copyFileSync(source, dest);
                console.log(`  ✓ Copied CSS: ${file}`);
            }
        });
    }
    
    // Ensure theme.css exists and is project-specific
    const themeCssPath = path.join(cssDir, 'theme.css');
    const themeCss = generateThemeCSS(config);
    fs.writeFileSync(themeCssPath, themeCss);
    console.log(`  ✓ Updated theme.css for ${config.name}`);
}

function ensureSeparateJS(projectDir, config) {
    console.log('📝 Ensuring separate JS files...');
    
    const jsDir = path.join(projectDir, 'public', 'js');
    if (!fs.existsSync(jsDir)) {
        fs.mkdirSync(jsDir, { recursive: true });
    }
    
    // Copy all JS files from base (they're already separate copies)
    const baseJsDir = path.join(BASE_DIR, 'public', 'js');
    if (fs.existsSync(baseJsDir)) {
        const jsFiles = fs.readdirSync(baseJsDir).filter(f => f.endsWith('.js'));
        jsFiles.forEach(file => {
            const source = path.join(baseJsDir, file);
            const dest = path.join(jsDir, file);
            if (!fs.existsSync(dest)) {
                fs.copyFileSync(source, dest);
                console.log(`  ✓ Copied JS: ${file}`);
            } else {
                // Update languages.js with project-specific branding
                if (file === 'languages.js') {
                    updateLanguagesJS(dest, config);
                }
            }
        });
    }
}

function ensureSeparateImages(projectDir, config) {
    console.log('📝 Ensuring separate images directory...');
    
    const imagesDir = path.join(projectDir, 'public', 'images');
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
    }
    
    // Copy images from base if they don't exist
    const baseImagesDir = path.join(BASE_DIR, 'public', 'images');
    if (fs.existsSync(baseImagesDir)) {
        copyDirectory(baseImagesDir, imagesDir);
        console.log(`  ✓ Ensured images directory exists`);
    }
}

function updateAllPages(projectDir, config) {
    console.log('📄 Updating all HTML pages with project-specific branding...');
    
    const viewsDir = path.join(projectDir, 'views');
    if (!fs.existsSync(viewsDir)) {
        console.log(`  ⚠️  Views directory not found: ${viewsDir}`);
        return;
    }
    
    const htmlFiles = fs.readdirSync(viewsDir).filter(f => f.endsWith('.html'));
    
    htmlFiles.forEach(file => {
        const filePath = path.join(viewsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let updated = false;
        
        // Update site name
        if (content.includes('LatamBrokerReviews')) {
            content = content.replace(/LatamBrokerReviews/g, config.name);
            updated = true;
        }
        
        // Update title tags
        const titleRegex = /<title[^>]*>.*?<\/title>/i;
        if (titleRegex.test(content)) {
            content = content.replace(titleRegex, `<title>${config.title}</title>`);
            updated = true;
        }
        
        // Update meta descriptions
        const descRegex = /<meta\s+name="description"\s+content="[^"]*">/i;
        if (descRegex.test(content)) {
            content = content.replace(descRegex, `<meta name="description" content="${config.description}">`);
            updated = true;
        }
        
        // Update canonical URLs
        const canonicalRegex = /<link\s+rel="canonical"\s+href="[^"]*">/i;
        if (canonicalRegex.test(content)) {
            content = content.replace(canonicalRegex, `<link rel="canonical" href="https://${config.domain}${getPagePath(file)}">`);
            updated = true;
        }
        
        // Update Open Graph URLs
        content = content.replace(/property="og:url"\s+content="[^"]*"/gi, `property="og:url" content="https://${config.domain}${getPagePath(file)}"`);
        content = content.replace(/property="twitter:url"\s+content="[^"]*"/gi, `property="twitter:url" content="https://${config.domain}${getPagePath(file)}"`);
        
        // Update Open Graph title
        content = content.replace(/property="og:title"\s+content="[^"]*"/gi, `property="og:title" content="${config.title}"`);
        content = content.replace(/property="twitter:title"\s+content="[^"]*"/gi, `property="twitter:title" content="${config.title}"`);
        
        // Update Open Graph description
        content = content.replace(/property="og:description"\s+content="[^"]*"/gi, `property="og:description" content="${config.description}"`);
        content = content.replace(/property="twitter:description"\s+content="[^"]*"/gi, `property="twitter:description" content="${config.description}"`);
        
        if (updated) {
            fs.writeFileSync(filePath, content);
            console.log(`  ✓ Updated: ${file}`);
        }
    });
}

function updateLanguagesJS(jsPath, config) {
    let content = fs.readFileSync(jsPath, 'utf8');
    
    // Update site name in translations
    content = content.replace(/LatamBrokerReviews/g, config.name);
    
    // Update title translations
    content = content.replace(/title:\s*['"](.*?)['"]/g, (match, title) => {
        if (title.includes('LatamBrokerReviews') || title.includes('Latin America Broker Reviews')) {
            return `title: '${config.title}'`;
        }
        return match;
    });
    
    fs.writeFileSync(jsPath, content);
    console.log(`  ✓ Updated languages.js for ${config.name}`);
}

function updateBuildScript(projectDir, config) {
    console.log('🔧 Updating build-static.js to be project-aware...');
    
    const buildScriptPath = path.join(projectDir, 'build-static.js');
    if (!fs.existsSync(buildScriptPath)) {
        // Copy from base
        const baseBuildScript = path.join(BASE_DIR, 'build-static.js');
        if (fs.existsSync(baseBuildScript)) {
            fs.copyFileSync(baseBuildScript, buildScriptPath);
        }
    }
    
    let content = fs.readFileSync(buildScriptPath, 'utf8');
    
    // Update base URL in sitemap generation
    content = content.replace(/const baseUrl = 'https:\/\/latambrokerreviews\.com'/g, `const baseUrl = 'https://${config.domain}'`);
    content = content.replace(/latambrokerreviews\.com/g, config.domain);
    
    fs.writeFileSync(buildScriptPath, content);
    console.log(`  ✓ Updated build-static.js for ${config.name}`);
}

function ensureProjectPackageJson(projectDir, config) {
    console.log('📦 Ensuring project-specific package.json...');
    
    const packagePath = path.join(projectDir, 'package.json');
    if (!fs.existsSync(packagePath)) {
        // Copy from base
        const basePackage = path.join(BASE_DIR, 'package.json');
        if (fs.existsSync(basePackage)) {
            fs.copyFileSync(basePackage, packagePath);
        }
    }
    
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    packageJson.name = config.name.toLowerCase().replace(/\s+/g, '-');
    packageJson.description = config.description;
    packageJson.version = '1.0.0';
    
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
    console.log(`  ✓ Updated package.json for ${config.name}`);
}

function generateThemeCSS(config) {
    return `/* ${config.name} Theme Styles */
:root {
    --primary-color: ${config.colors.primary};
    --secondary-color: ${config.colors.secondary};
    --accent-color: ${config.colors.accent};
    --background-color: ${config.colors.background};
    --text-color: ${config.colors.text};
    --card-background: ${config.colors.card};
    --border-color: ${config.colors.border};
    --success-color: ${config.colors.success};
    --warning-color: ${config.colors.warning};
    --danger-color: ${config.colors.danger};
}

/* Override base styles with theme */
body {
    background-color: var(--background-color);
    color: var(--text-color);
}

.navbar {
    background: var(--primary-color) !important;
}

.navbar .nav-link {
    color: ${config.colors.background === '#FFFFFF' || config.colors.background === '#FAFAFA' ? '#333' : '#fff'} !important;
}

.hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: ${config.colors.background === '#FFFFFF' || config.colors.background === '#FAFAFA' ? '#fff' : config.colors.text};
}

.btn-primary {
    background: var(--primary-color);
    border-color: var(--primary-color);
}

.btn-primary:hover {
    background: var(--secondary-color);
    border-color: var(--secondary-color);
}

.broker-card {
    background: var(--card-background);
    border: 1px solid var(--border-color);
}

.broker-card.featured {
    border-color: var(--primary-color);
    border-width: 2px;
}

.content-section {
    background: ${config.colors.background === '#FFFFFF' || config.colors.background === '#FAFAFA' ? 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 50%, #a5b4fc 100%)' : `var(--card-background)`};
}

.category-hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
}
`;
}

function getPagePath(file) {
    if (file === 'index.html') return '/';
    return '/' + file.replace('.html', '');
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
            if (!fs.existsSync(destPath)) {
                fs.copyFileSync(srcPath, destPath);
            }
        }
    }
}

// Main execution
const projectKey = process.argv[2];

if (!projectKey) {
    console.log('📋 Ensuring separation for all projects...\n');
    
    Object.keys(themeConfigs.projects).forEach((key, index) => {
        console.log(`\n[${index + 1}/${Object.keys(themeConfigs.projects).length}] Processing: ${key}`);
        ensureProjectSeparation(key);
    });
    
    console.log('\n✨ All projects separation ensured!');
} else {
    ensureProjectSeparation(projectKey);
}

