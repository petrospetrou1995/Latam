# Project Separation Guide

This guide explains how to ensure each project has completely separate resources and unique pages.

## Overview

Each of the 10 projects should have:
- ✅ **Separate CSS files** - Each project has its own copy of all CSS files
- ✅ **Separate JS files** - Each project has its own copy of all JavaScript files
- ✅ **Separate images** - Each project has its own images directory
- ✅ **Unique pages** - All HTML pages are customized with project-specific branding
- ✅ **Project-specific build scripts** - Each project's build-static.js uses the correct domain
- ✅ **Project-specific package.json** - Each project has its own package configuration

## Running the Separation Script

### For a Single Project

```bash
cd /Users/petrospetrou/latam-broker-reviews
node projects/build-project-separate.js [project-key]
```

Example:
```bash
node projects/build-project-separate.js brokersconfiables
```

### For All Projects

```bash
cd /Users/petrospetrou/latam-broker-reviews
node projects/build-project-separate.js
```

This will process all 10 projects:
1. rankingbrokerslatam
2. inversionistadigital
3. zonatradinglatam
4. brokersconfiables
5. rutadetrading
6. comparativaforex
7. plataformasdeinversion
8. guiadebrokerssudamerica
9. topbrokersmexicoymas
10. capitallatamreviews

## What the Script Does

### 1. Separate CSS Files
- Copies all CSS files from base template to each project
- Ensures `theme.css` exists with project-specific colors
- Each project has its own `/public/css/` directory

### 2. Separate JS Files
- Copies all JavaScript files from base template to each project
- Updates `languages.js` with project-specific branding
- Each project has its own `/public/js/` directory

### 3. Separate Images
- Ensures each project has its own `/public/images/` directory
- Copies images from base template if they don't exist

### 4. Unique Pages
- Updates all HTML files in `/views/` with:
  - Project name (replaces "LatamBrokerReviews")
  - Project title in `<title>` tags
  - Project description in meta tags
  - Project domain in canonical URLs
  - Project domain in Open Graph tags
  - Project domain in Twitter Card tags

### 5. Project-Specific Build Script
- Updates `build-static.js` to use the project's domain
- Updates sitemap generation with correct base URL

### 6. Project-Specific Package.json
- Updates `package.json` with project name and description
- Ensures each project has unique package configuration

## Project Structure

Each project follows this structure:

```
[project-name]/
├── public/
│   ├── css/          # Separate CSS files (not shared)
│   │   ├── style.css
│   │   ├── theme.css # Project-specific theme
│   │   └── ...
│   ├── js/           # Separate JS files (not shared)
│   │   ├── languages.js # Updated with project branding
│   │   └── ...
│   ├── images/       # Separate images directory
│   └── data/
│       └── brokers.json
├── views/            # All HTML pages (unique per project)
│   ├── index.html    # Updated with project branding
│   └── ...
├── build-static.js   # Project-specific build script
├── package.json      # Project-specific configuration
└── dist/             # Build output (separate per project)
```

## Building Each Project

After ensuring separation, build each project:

```bash
cd /Users/petrospetrou/latam-projects/[project-name]
npm install
npm run build:static
```

The `dist/` folder will contain the built static site with:
- Project-specific branding
- Project-specific domain URLs
- Separate resources (CSS, JS, images)

## Verification

To verify separation:

1. **Check CSS files are separate:**
   ```bash
   ls -la /Users/petrospetrou/latam-projects/brokersconfiables/public/css/
   ```

2. **Check JS files are separate:**
   ```bash
   ls -la /Users/petrospetrou/latam-projects/brokersconfiables/public/js/
   ```

3. **Check pages have project branding:**
   ```bash
   grep "BrokersConfiables" /Users/petrospetrou/latam-projects/brokersconfiables/views/index.html
   ```

4. **Check build script has correct domain:**
   ```bash
   grep "brokersconfiables.com" /Users/petrospetrou/latam-projects/brokersconfiables/build-static.js
   ```

## Important Notes

- **No Shared Resources**: Each project has completely separate CSS, JS, and images
- **Unique Branding**: All pages are updated with project-specific names and domains
- **Independent Builds**: Each project can be built and deployed independently
- **Separate Git Repos**: Each project should have its own Git repository

## When to Run

Run the separation script:
- After creating new projects
- After updating base templates
- Before deploying projects
- When ensuring project independence

## Troubleshooting

If resources appear to be shared:

1. Run the separation script again:
   ```bash
   node projects/build-project-separate.js [project-key]
   ```

2. Verify files exist in project directory:
   ```bash
   ls -la /Users/petrospetrou/latam-projects/[project-key]/public/
   ```

3. Check file timestamps to ensure they're separate copies

4. Rebuild the project:
   ```bash
   cd /Users/petrospetrou/latam-projects/[project-key]
   npm run build:static
   ```

