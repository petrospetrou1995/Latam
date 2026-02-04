#!/bin/bash

# Script to push each project to GitHub
# Usage: ./push-to-github.sh [github-username]

GITHUB_USER=${1:-"petrospetrou1995"}
PROJECTS_DIR="/Users/petrospetrou/latam-projects"

projects=(
    "rankingbrokerslatam:RankingBrokersLatam"
    "inversionistadigital:InversionistaDigital"
    "zonatradinglatam:ZonaTradingLatam"
    "brokersconfiables:BrokersConfiables"
    "rutadetrading:RutaDeTrading"
    "comparativaforex:ComparativaForex"
    "plataformasdeinversion:PlataformasDeInversion"
    "guiadebrokerssudamerica:GuiadeBrokersSudamerica"
    "topbrokersmexicoymas:TopBrokersMexicoYMas"
    "capitallatamreviews:CapitalLatamReviews"
)

echo "🚀 Pushing projects to GitHub..."
echo "GitHub Username: $GITHUB_USER"
echo ""

for project_info in "${projects[@]}"; do
    IFS=':' read -r project_key project_name <<< "$project_info"
    project_dir="$PROJECTS_DIR/$project_key"
    
    if [ ! -d "$project_dir" ]; then
        echo "⚠️  Project directory not found: $project_dir"
        continue
    fi
    
    echo "📦 Processing: $project_name"
    cd "$project_dir"
    
    # Check if remote already exists
    if git remote get-url origin > /dev/null 2>&1; then
        echo "  ℹ️  Remote already exists, skipping..."
    else
        # Add remote (you'll need to create repos on GitHub first)
        repo_name=$(echo "$project_name" | tr '[:upper:]' '[:lower:]')
        git remote add origin "https://github.com/$GITHUB_USER/$repo_name.git" 2>/dev/null || echo "  ⚠️  Could not add remote (repo may not exist)"
    fi
    
    # Push to GitHub
    echo "  📤 Pushing to GitHub..."
    git push -u origin main 2>/dev/null || echo "  ⚠️  Push failed (repo may not exist on GitHub yet)"
    
    echo "  ✅ Done: $project_name"
    echo ""
done

echo "✨ All projects processed!"
echo ""
echo "📝 Next Steps:"
echo "1. Create repositories on GitHub for each project"
echo "2. Run this script again to push"
echo "3. Or manually push each project:"
echo "   cd $PROJECTS_DIR/[project-name]"
echo "   git remote add origin https://github.com/$GITHUB_USER/[repo-name].git"
echo "   git push -u origin main"



