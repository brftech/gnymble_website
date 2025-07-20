# PercyTech Site Changelog

## Recent Changes

### [2025-01-19] - Multi-Site Server Fix

- ✅ **Fixed server startup issues** - All sites now run from their correct directories
- ✅ **Copied shared components** to each site directory for proper imports
- ✅ **Created start-all-sites.sh** script for easy multi-site management
- ✅ **Verified PercyText and Gnymble** are now showing correct content instead of template

### [2025-01-19] - Gnymble Site Launch

- ✅ **Created Gnymble site** on port 3003
- ✅ **Enterprise-focused design** for regulated industries
- ✅ **Enhanced shared configuration** with industries and security features
- ✅ **Compliance-first messaging** for FINRA, SEC, FDA, and other regulatory bodies
- ✅ **Dynamic content rendering** using shared configuration

### [2025-01-19] - Hero Section Update

- ✅ **Removed phone mockup** from hero section
- ✅ **Changed layout** from asymmetrical to full-width centered
- ✅ **Simplified design** for cleaner, more professional appearance
- ✅ **Improved mobile experience** without complex visual elements

### Template Management

- ✅ Created `percytech-template/` directory
- ✅ Added `setup.sh` script for project customization
- ✅ Added `sync-template.sh` script for updates
- ✅ Template runs on port 3001, main site on port 3000

## Current Sites Status

### ✅ **Live Sites:**

- **PercyTech (Main)**: http://localhost:3000
- **Template**: http://localhost:3001
- **PercyText**: http://localhost:3002
- **Gnymble**: http://localhost:3003

### 🚧 **Next Steps:**

- [ ] Create PercyMD site (port 3004)
- [ ] Add more interactive elements
- [ ] Create individual product pages

## Commands

### **Easy Multi-Site Management:**

```bash
# Start all sites at once
./start-all-sites.sh

# Or start individually:
```

### **Individual Site Commands:**

```bash
# Start main site
cd percytech_fullsite && npm run dev

# Start template site
cd percytech-template && npm run dev -- -p 3001

# Start PercyText site
cd percytext && npm run dev -- -p 3002

# Start Gnymble site
cd gnymble && npm run dev -- -p 3003

# Sync changes to template
./sync-template.sh

# Create new project from template
cp -r percytech-template your-project
cd your-project
./setup.sh your-project-name
npm install
npm run dev -- -p 3005
```
