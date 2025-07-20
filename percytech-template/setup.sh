#!/bin/bash

# PercyTech Template Setup Script
# Usage: ./setup.sh <project-name>

if [ $# -eq 0 ]; then
    echo "Usage: ./setup.sh <project-name>"
    echo "Example: ./setup.sh percymd"
    exit 1
fi

PROJECT_NAME=$1
PROJECT_NAME_CAPITALIZED=$(echo $PROJECT_NAME | sed 's/./\U&/')

echo "Setting up $PROJECT_NAME project..."

# Update package.json
sed -i '' "s/\"name\": \"percytech-site\"/\"name\": \"$PROJECT_NAME\"/" package.json
sed -i '' "s/\"version\": \"1.0.0\"/\"version\": \"0.1.0\"/" package.json

# Update page titles and content (basic replacements)
find pages/ -name "*.js" -exec sed -i '' "s/PercyTech/$PROJECT_NAME_CAPITALIZED/g" {} \;
find components/ -name "*.js" -exec sed -i '' "s/PercyTech/$PROJECT_NAME_CAPITALIZED/g" {} \;

echo "✅ Setup complete for $PROJECT_NAME!"
echo "Next steps:"
echo "1. Run 'npm install' to install dependencies"
echo "2. Run 'npm run dev' to start development"
echo "3. Customize content in pages/ and components/ directories" 