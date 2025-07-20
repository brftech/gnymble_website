#!/bin/bash

# PercyTech Template Sync Script
# Updates template with changes from main site

echo "🔄 Syncing template with main site..."

# Copy source directories (excluding node_modules and .next)
cp -r pages/ percytech-template/
cp -r components/ percytech-template/
cp -r styles/ percytech-template/
cp -r public/ percytech-template/

# Copy configuration files
cp package.json percytech-template/
cp package-lock.json percytech-template/
cp tailwind.config.js percytech-template/
cp postcss.config.js percytech-template/

# Preserve template-specific files
echo "✅ Template updated!"
echo "📝 Template-specific files preserved:"
echo "   - setup.sh"
echo "   - README.md"
echo ""
echo "🔄 Next steps:"
echo "   1. Test the template: cd percytech-template && npm run dev -- -p 3001"
echo "   2. Create new projects from updated template" 