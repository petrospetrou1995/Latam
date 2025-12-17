const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_DIR = path.join(__dirname, '..');
const PROJECTS_DIR = path.join(BASE_DIR, '..', 'latam-projects');

// Theme configurations for each project
const projectConfigs = {
    rankingbrokerslatam: {
        name: "RankingBrokersLatam",
        domain: "rankingbrokerslatam.com",
        title: "Ranking Brokers LATAM - Top 10 Brokers Ranking",
        colors: {
            primary: "#FF6B35",
            secondary: "#004E89",
            accent: "#FFA726",
            background: "#FFFFFF",
            text: "#1A1A1A",
            card: "#F8F9FA"
        },
        focus: "leaderboard"
    },
    inversionistadigital: {
        name: "InversionistaDigital",
        domain: "inversionistadigital.net",
        title: "Inversionista Digital - Digital Investing for LATAM",
        colors: {
            primary: "#6366F1",
            secondary: "#8B5CF6",
            accent: "#EC4899",
            background: "#0F172A",
            text: "#F1F5F9",
            card: "#1E293B"
        },
        focus: "modern-tech"
    },
    zonatradinglatam: {
        name: "ZonaTradingLatam",
        domain: "zonatradinglatam.com",
        title: "Zona Trading LATAM - Active Trading Zone",
        colors: {
            primary: "#00D4FF",
            secondary: "#0099CC",
            accent: "#FF3366",
            background: "#000000",
            text: "#FFFFFF",
            card: "#1A1A1A"
        },
        focus: "active-trading"
    },
    brokersconfiables: {
        name: "BrokersConfiables",
        domain: "brokersconfiables.com",
        title: "Brokers Confiables - Trusted Broker Reviews",
        colors: {
            primary: "#2E7D32",
            secondary: "#1B5E20",
            accent: "#66BB6A",
            background: "#FFFFFF",
            text: "#212121",
            card: "#F5F5F5"
        },
        focus: "safety-trust"
    },
    rutadetrading: {
        name: "RutaDeTrading",
        domain: "rutadetrading.com",
        title: "Ruta de Trading - Your Trading Journey",
        colors: {
            primary: "#1976D2",
            secondary: "#0D47A1",
            accent: "#42A5F5",
            background: "#FAFAFA",
            text: "#263238",
            card: "#FFFFFF"
        },
        focus: "education"
    },
    comparativaforex: {
        name: "ComparativaForex",
        domain: "comparativaforex.com",
        title: "Comparativa Forex - Forex Broker Comparison",
        colors: {
            primary: "#1565C0",
            secondary: "#0D47A1",
            accent: "#42A5F5",
            background: "#FFFFFF",
            text: "#212121",
            card: "#F5F5F5"
        },
        focus: "forex-niche"
    },
    plataformasdeinversion: {
        name: "PlataformasDeInversion",
        domain: "plataformasdeinversion.com",
        title: "Plataformas de Inversión - Investment Platforms",
        colors: {
            primary: "#7B1FA2",
            secondary: "#4A148C",
            accent: "#BA68C8",
            background: "#FFFFFF",
            text: "#212121",
            card: "#F3E5F5"
        },
        focus: "investment"
    },
    guiadebrokerssudamerica: {
        name: "GuiadeBrokersSudamerica",
        domain: "guiadebrokerssudamerica.com",
        title: "Guía de Brokers Sudamérica - Southern Cone Guide",
        colors: {
            primary: "#C62828",
            secondary: "#8E0000",
            accent: "#EF5350",
            background: "#FFFBF0",
            text: "#3E2723",
            card: "#FFF8E1"
        },
        focus: "southern-cone"
    },
    topbrokersmexicoymas: {
        name: "TopBrokersMexicoYMas",
        domain: "topbrokersmexicoymas.com",
        title: "Top Brokers México y Más - Mexico Focused",
        colors: {
            primary: "#006847",
            secondary: "#CE1126",
            accent: "#FFFFFF",
            background: "#FFFFFF",
            text: "#1A1A1A",
            card: "#F5F5F5"
        },
        focus: "mexico"
    },
    capitallatamreviews: {
        name: "CapitalLatamReviews",
        domain: "capitallatamreviews.com",
        title: "Capital LATAM Reviews - Institutional Broker Reviews",
        colors: {
            primary: "#1A237E",
            secondary: "#283593",
            accent: "#5C6BC0",
            background: "#FAFAFA",
            text: "#212121",
            card: "#FFFFFF"
        },
        focus: "institutional"
    }
};

function copyDirectory(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        // Skip certain directories
        if (entry.name === 'node_modules' || entry.name === '.git' || 
            entry.name === 'dist' || entry.name === 'projects' ||
            entry.name.startsWith('.')) {
            continue;
        }
        
        if (entry.isDirectory()) {
            copyDirectory(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

function generateThemeCSS(config, projectDir) {
    const cssContent = `/* ${config.name} Theme Styles */
:root {
    --primary-color: ${config.colors.primary};
    --secondary-color: ${config.colors.secondary};
    --accent-color: ${config.colors.accent};
    --background-color: ${config.colors.background};
    --text-color: ${config.colors.text};
    --card-background: ${config.colors.card};
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
    color: ${config.colors.background} !important;
}

.hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: ${config.colors.background};
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
    border: 1px solid rgba(0,0,0,0.1);
}

.broker-card.featured {
    border-color: var(--primary-color);
    border-width: 2px;
}
`;
    
    const cssDir = path.join(projectDir, 'public', 'css');
    if (!fs.existsSync(cssDir)) {
        fs.mkdirSync(cssDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(cssDir, 'theme.css'), cssContent);
}

function updateIndexHTML(config, projectDir) {
    const indexPath = path.join(projectDir, 'views', 'index.html');
    if (!fs.existsSync(indexPath)) return;
    
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // Update title
    content = content.replace(
        /<title[^>]*>.*?<\/title>/,
        `<title>${config.title}</title>`
    );
    
    // Update meta description
    content = content.replace(
        /<meta name="description" content="[^"]*">/,
        `<meta name="description" content="${config.title}">`
    );
    
    // Update site name in navigation
    content = content.replace(
        /LatamBrokerReviews/g,
        config.name
    );
    
    // Add theme CSS link
    if (!content.includes('theme.css')) {
        content = content.replace(
            /<link href="\/css\/style.css" rel="stylesheet">/,
            `<link href="/css/style.css" rel="stylesheet">
    <link href="/css/theme.css" rel="stylesheet">`
        );
    }
    
    fs.writeFileSync(indexPath, content);
}

function updatePackageJSON(config, projectDir) {
    const packagePath = path.join(projectDir, 'package.json');
    if (!fs.existsSync(packagePath)) return;
    
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    packageJson.name = config.name.toLowerCase();
    packageJson.description = config.title;
    
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
}

function createProject(projectKey, config) {
    console.log(`\n🚀 Creating project: ${config.name}`);
    
    const projectDir = path.join(PROJECTS_DIR, projectKey);
    
    // Create project directory
    if (fs.existsSync(projectDir)) {
        console.log(`⚠️  Directory exists, skipping: ${projectKey}`);
        return;
    }
    
    // Copy base template
    console.log('📁 Copying base template...');
    copyDirectory(BASE_DIR, projectDir);
    
    // Generate theme CSS
    console.log('🎨 Generating theme CSS...');
    generateThemeCSS(config, projectDir);
    
    // Update index.html
    console.log('📝 Updating index.html...');
    updateIndexHTML(config, projectDir);
    
    // Update package.json
    console.log('📦 Updating package.json...');
    updatePackageJSON(config, projectDir);
    
    // Create README
    const readme = `# ${config.name}

${config.title}

## Theme
- Primary Color: ${config.colors.primary}
- Secondary Color: ${config.colors.secondary}
- Focus: ${config.focus}

## Setup
\`\`\`bash
npm install
npm run build:static
\`\`\`

## Deploy
This project can be deployed to Cloudflare Pages or any static hosting service.
`;
    
    fs.writeFileSync(path.join(projectDir, 'README.md'), readme);
    
    // Initialize git repository
    console.log('🔧 Initializing git repository...');
    try {
        process.chdir(projectDir);
        execSync('git init', { stdio: 'inherit' });
        execSync('git add .', { stdio: 'inherit' });
        execSync(`git commit -m "Initial commit: ${config.name}"`, { stdio: 'inherit' });
        console.log(`✅ Project ${config.name} created successfully!`);
    } catch (error) {
        console.log(`⚠️  Git initialization skipped: ${error.message}`);
    }
    
    process.chdir(BASE_DIR);
}

// Main execution
console.log('🎯 Starting project generation...\n');

// Create projects directory
if (!fs.existsSync(PROJECTS_DIR)) {
    fs.mkdirSync(PROJECTS_DIR, { recursive: true });
}

// Create each project
Object.keys(projectConfigs).forEach((key, index) => {
    console.log(`\n[${index + 1}/10] Processing: ${key}`);
    createProject(key, projectConfigs[key]);
});

console.log('\n✨ All projects created successfully!');
console.log(`📁 Projects location: ${PROJECTS_DIR}`);

