#!/bin/bash

# Script to create 10 separate project repositories from template

BASE_DIR="/Users/petrospetrou/latam-broker-reviews"
PROJECTS_DIR="$BASE_DIR/../latam-projects"

# Create projects directory
mkdir -p "$PROJECTS_DIR"

# Array of project names
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

# Create each project
for project in "${projects[@]}"; do
    echo "Creating project: $project"
    
    PROJECT_DIR="$PROJECTS_DIR/$project"
    
    # Create project directory
    mkdir -p "$PROJECT_DIR"
    
    # Copy base template files (excluding node_modules, .git, etc.)
    rsync -av --exclude='node_modules' --exclude='.git' --exclude='dist' \
        --exclude='projects' --exclude='*.md' \
        "$BASE_DIR/" "$PROJECT_DIR/"
    
    echo "✅ Created $project"
done

echo "All projects created in $PROJECTS_DIR"

