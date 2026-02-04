// Build script for generating project-specific websites
const fs = require('fs');
const path = require('path');

const themeConfigs = require('./theme-configs.json');

function buildProject(projectKey) {
    const config = themeConfigs.projects[projectKey];
    if (!config) {
        console.error(`Project ${projectKey} not found in config`);
        return;
    }

    console.log(`Building project: ${config.name}`);
    
    // Create project directory structure
    const projectDir = path.join(__dirname, projectKey);
    const viewsDir = path.join(projectDir, 'views');
    const publicDir = path.join(projectDir, 'public');
    const cssDir = path.join(publicDir, 'css');
    
    // Create directories
    [projectDir, viewsDir, publicDir, cssDir].forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });
    
    // Generate CSS with project-specific colors
    generateThemeCSS(config, cssDir);
    
    // Generate index.html with project-specific content
    generateIndexHTML(config, viewsDir);
    
    // Copy shared assets (JS files, images, etc.)
    copySharedAssets(projectDir);
    
    console.log(`✅ Project ${config.name} built successfully!`);
}

function generateThemeCSS(config, cssDir) {
    const css = `
/* ${config.name} Theme Styles */
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

/* Import base styles */
@import url('../../public/css/style.css');

/* Override with theme colors */
body {
    background-color: var(--background-color);
    color: var(--text-color);
}

.navbar {
    background: var(--primary-color);
    color: var(--background-color);
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

.hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: var(--background-color);
}
`;
    
    fs.writeFileSync(path.join(cssDir, 'theme.css'), css);
}

function generateIndexHTML(config, viewsDir) {
    // This would generate a customized index.html
    // For now, we'll create a template that can be customized
    console.log(`Index HTML generation for ${config.name} - template created`);
}

function copySharedAssets(projectDir) {
    // Copy JS files, images, etc. from main project
    console.log('Copying shared assets...');
}

// Build all projects
if (process.argv[2]) {
    buildProject(process.argv[2]);
} else {
    console.log('Usage: node build-project.js <project-key>');
    console.log('Available projects:', Object.keys(themeConfigs.projects).join(', '));
}



