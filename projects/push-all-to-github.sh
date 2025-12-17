#!/bin/bash

# Script to push all 10 projects to GitHub
GITHUB_USER="petrospetrou1995"
PROJECTS_DIR="/Users/petrospetrou/latam-projects"

# Project list: directory_name:github_repo_name
projects=(
    "rankingbrokerslatam:rankingbrokerslatam"
    "inversionistadigital:inversionistadigital"
    "zonatradinglatam:zonatradinglatam"
    "brokersconfiables:brokersconfiables"
    "rutadetrading:rutadetrading"
    "comparativaforex:comparativaforex"
    "plataformasdeinversion:plataformasdeinversion"
    "guiadebrokerssudamerica:guiadebrokerssudamerica"
    "topbrokersmexicoymas:topbrokersmexicoymas"
    "capitallatamreviews:capitallatamreviews"
)

echo "🚀 Pushing all projects to GitHub..."
echo "GitHub Username: $GITHUB_USER"
echo ""

for project_info in "${projects[@]}"; do
    IFS=':' read -r project_dir repo_name <<< "$project_info"
    full_path="$PROJECTS_DIR/$project_dir"
    
    if [ ! -d "$full_path" ]; then
        echo "⚠️  Directory not found: $full_path"
        continue
    fi
    
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📦 Processing: $project_dir"
    echo "   Repo: $repo_name"
    echo ""
    
    cd "$full_path" || continue
    
    # Check if git repo exists
    if [ ! -d ".git" ]; then
        echo "   ⚠️  Not a git repository, initializing..."
        git init
        git add .
        git commit -m "Initial commit: $project_dir"
    fi
    
    # Check if remote exists
    if git remote get-url origin > /dev/null 2>&1; then
        echo "   ℹ️  Remote already configured:"
        git remote -v | grep origin | head -1
    else
        echo "   🔗 Adding remote: https://github.com/$GITHUB_USER/$repo_name.git"
        git remote add origin "https://github.com/$GITHUB_USER/$repo_name.git" 2>/dev/null
    fi
    
    # Push to GitHub
    echo "   📤 Pushing to GitHub..."
    if git push -u origin main 2>&1 | tee /tmp/git_push_output.txt; then
        echo "   ✅ Successfully pushed: $project_dir"
    else
        if grep -q "repository.*not found" /tmp/git_push_output.txt || grep -q "remote.*not found" /tmp/git_push_output.txt || grep -q "ERROR: Repository not found" /tmp/git_push_output.txt; then
            echo "   ⚠️  Repository doesn't exist on GitHub yet"
            echo "   📝 Create it at: https://github.com/new"
            echo "   📝 Repository name: $repo_name"
        else
            echo "   ❌ Push failed. Check error above."
        fi
    fi
    
    echo ""
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ All projects processed!"
echo ""
echo "📝 To create missing repositories:"
echo "   1. Go to: https://github.com/new"
echo "   2. Create repositories with these names:"
for project_info in "${projects[@]}"; do
    IFS=':' read -r project_dir repo_name <<< "$project_info"
    echo "      - $repo_name"
done
echo "   3. Run this script again: ./push-all-to-github.sh"
