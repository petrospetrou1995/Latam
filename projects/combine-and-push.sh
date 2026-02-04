#!/bin/bash

# Script to combine all projects into one repository with separate folders
GITHUB_USER="petrospetrou1995"
REPO_NAME="latam-broker-projects"
SOURCE_DIR="/Users/petrospetrou/latam-projects"
TARGET_DIR="/Users/petrospetrou/latam-projects-combined"

# Project directories
projects=(
    "rankingbrokerslatam"
    "inversionistadigital"
    "zonatradinglatam"
    "brokersconfiables"
    "rutadetrading"
    "comparativaforex"
    "plataformasdeinversion"
    "guiadebrokerssudamerica"
    "topbrokersmexicoymas"
    "capitallatamreviews"
)

echo "🚀 Combining all projects into single repository..."
echo "Target: $TARGET_DIR"
echo ""

# Create target directory
mkdir -p "$TARGET_DIR"
cd "$TARGET_DIR"

# Remove existing git if any
if [ -d ".git" ]; then
    echo "⚠️  Existing .git found, removing..."
    rm -rf .git
fi

# Copy each project to its own folder
for project in "${projects[@]}"; do
    source_path="$SOURCE_DIR/$project"
    target_path="$TARGET_DIR/$project"
    
    if [ ! -d "$source_path" ]; then
        echo "⚠️  Source not found: $source_path"
        continue
    fi
    
    echo "📁 Copying: $project"
    
    # Remove .git from source before copying
    if [ -d "$source_path/.git" ]; then
        rm -rf "$source_path/.git"
    fi
    
    # Copy project
    cp -r "$source_path" "$target_path"
    
    echo "   ✅ Copied to: $target_path"
done

# Create main README
cat > README.md << 'EOF'
# LATAM Broker Review Projects

This repository contains 10 different broker review websites, each with unique themes, colors, and focus areas.

## Projects

1. **RankingBrokersLatam** - Leaderboard/Top 10 style
2. **InversionistaDigital** - Modern tech-forward
3. **ZonaTradingLatam** - Active trading zone
4. **BrokersConfiables** - Safety/trust focused
5. **RutaDeTrading** - Educational journey
6. **ComparativaForex** - Forex niche
7. **PlataformasDeInversion** - Broad investment
8. **GuiadeBrokersSudamerica** - Southern Cone specific
9. **TopBrokersMexicoYMas** - Mexico focused
10. **CapitalLatamReviews** - Institutional/professional

## Setup

Each project is independent and can be built separately:

```bash
cd [project-name]
npm install
npm run build:static
```

## Deployment

Each project can be deployed independently to Cloudflare Pages or any static hosting service.
EOF

# Initialize git repository
echo ""
echo "🔧 Initializing git repository..."
git init
git add .
git commit -m "Initial commit: Combined LATAM broker projects

- Added 10 projects with unique themes
- Each project in its own folder
- Ready for deployment"

# Add remote
echo ""
echo "🔗 Configuring GitHub remote..."
git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git" 2>/dev/null || git remote set-url origin "https://github.com/$GITHUB_USER/$REPO_NAME.git"

echo ""
echo "✅ Repository prepared!"
echo ""
echo "📝 Next steps:"
echo "1. Create repository on GitHub: https://github.com/new"
echo "   Repository name: $REPO_NAME"
echo "   DO NOT initialize with README"
echo ""
echo "2. Push to GitHub:"
echo "   cd $TARGET_DIR"
echo "   git push -u origin main"
echo ""
echo "Or run: ./push-combined.sh"



