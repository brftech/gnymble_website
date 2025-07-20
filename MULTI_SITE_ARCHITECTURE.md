# PercyTech Multi-Site Architecture

## 🏗️ **Overview**

This architecture allows you to build multiple PercyTech sites (PercyTech, PercyText, PercyMD, Gnymble) that share:

- ✅ **Consistent branding** and design
- ✅ **Shared components** and styling
- ✅ **Centralized configuration**
- ✅ **Easy maintenance** and updates

## 📁 **File Structure**

```
/Users/bryan/Desktop/PT/Websites/
├── percytech_fullsite/          # Main PercyTech site (port 3000)
├── percytech-template/          # Template (port 3001)
├── percytext/                   # PercyText site (port 3002)
├── percymd/                     # PercyMD site (port 3003)
├── gnymble/                     # Gnymble site (port 3004)
└── shared/                      # Shared resources
    ├── components/
    │   └── PercyTechTheme.js    # Shared React components
    ├── config/
    │   └── PercyTechConfig.js   # Site-specific configurations
    └── styles/
        └── PercyTechGlobal.css  # Shared styles
```

## 🎯 **How It Works**

### **1. Shared Components (`shared/components/PercyTechTheme.js`)**

- **PercyTechLayout**: Consistent header, navigation, and footer
- **PercyTechHero**: Reusable hero section with customizable content
- **PercyTechSolutions**: Standardized solutions grid
- **PercyTechTheme**: Design tokens and configuration

### **2. Centralized Configuration (`shared/config/PercyTechConfig.js`)**

- **Site-specific content**: Each site has its own hero, solutions, features
- **Shared theme**: Colors, fonts, animations used across all sites
- **Helper functions**: `getSiteConfig()`, `getThemeConfig()`

### **3. Shared Styles (`shared/styles/PercyTechGlobal.css`)**

- **Consistent styling**: Same Tailwind classes and custom CSS
- **Animations**: Shared keyframes and transitions
- **Responsive design**: Unified breakpoints and layouts

## 🚀 **Creating a New Site**

### **Step 1: Create from Template**

```bash
# Create new site
cp -r percytech-template your-new-site
cd your-new-site
./setup.sh your-new-site-name
npm install
```

### **Step 2: Configure Site Content**

Edit `shared/config/PercyTechConfig.js` to add your site:

```javascript
yournewsite: {
  name: 'YourNewSite',
  domain: 'yournewsite.com',
  description: 'Your site description',
  hero: {
    title: 'Your Hero Title',
    subtitle: 'Your hero subtitle',
    ctaText: 'Your CTA',
    ctaLink: '/your-cta-link'
  },
  solutions: [
    // Your solutions array
  ]
}
```

### **Step 3: Create Homepage**

```javascript
import {
  PercyTechLayout,
  PercyTechHero,
  PercyTechSolutions,
} from "../../shared/components/PercyTechTheme";
import { getSiteConfig } from "../../shared/config/PercyTechConfig";

export default function YourNewSiteHome() {
  const config = getSiteConfig("yournewsite");

  return (
    <PercyTechLayout siteName={config.name}>
      <PercyTechHero
        title={config.hero.title}
        subtitle={config.hero.subtitle}
        ctaText={config.hero.ctaText}
        ctaLink={config.hero.ctaLink}
        siteName={config.name}
      />
      {/* Add your custom sections */}
    </PercyTechLayout>
  );
}
```

### **Step 4: Start Development**

```bash
npm run dev -- -p 3005  # Use different port
```

## 🔄 **Maintenance Workflow**

### **Updating Shared Components**

1. **Edit** `shared/components/PercyTechTheme.js`
2. **Changes apply** to all sites automatically
3. **Test** each site to ensure compatibility

### **Updating Site Content**

1. **Edit** `shared/config/PercyTechConfig.js`
2. **Changes apply** to specific sites
3. **No code changes** needed in individual sites

### **Adding New Features**

1. **Create** new shared component in `shared/components/`
2. **Add** configuration in `shared/config/PercyTechConfig.js`
3. **Import** and use in individual sites

## 🌐 **Current Sites**

### **PercyTech (Main)**

- **URL**: http://localhost:3000
- **Purpose**: Main company site, overview of all solutions
- **Content**: Company info, all three product solutions

### **PercyText**

- **URL**: http://localhost:3002
- **Purpose**: Simple SMS for general businesses
- **Content**: Easy setup, affordable pricing, basic features

### **PercyMD**

- **URL**: http://localhost:3003 (when created)
- **Purpose**: HIPAA-compliant healthcare SMS
- **Content**: Healthcare-specific features, compliance focus

### **Gnymble**

- **URL**: http://localhost:3004 (when created)
- **Purpose**: Regulated industry SMS
- **Content**: Compliance, brand control, enterprise security

## 🎨 **Customization Options**

### **Site-Specific Customization**

- **Colors**: Override theme colors per site
- **Layout**: Custom sections and components
- **Content**: Unique messaging and features
- **Navigation**: Site-specific menu items

### **Shared Elements**

- **Branding**: Consistent logo and visual identity
- **Typography**: Same font hierarchy and sizing
- **Animations**: Unified hover effects and transitions
- **Components**: Reusable UI patterns

## 🔧 **Development Commands**

```bash
# Start all sites
npm run dev                    # PercyTech (3000)
cd percytech-template && npm run dev -- -p 3001  # Template
cd percytext && npm run dev -- -p 3002           # PercyText
cd percymd && npm run dev -- -p 3003             # PercyMD
cd gnymble && npm run dev -- -p 3004             # Gnymble

# Sync template with main site
./sync-template.sh

# Create new site
cp -r percytech-template your-site
cd your-site
./setup.sh your-site-name
npm install
npm run dev -- -p 3005
```

## 📝 **Best Practices**

1. **Always use shared components** for consistency
2. **Configure content in shared config** rather than hardcoding
3. **Test all sites** when updating shared components
4. **Use semantic naming** for site configurations
5. **Keep individual sites lightweight** by leveraging shared resources

## 🚀 **Benefits**

- ✅ **Consistent branding** across all sites
- ✅ **Faster development** with reusable components
- ✅ **Easier maintenance** with centralized configuration
- ✅ **Scalable architecture** for adding new sites
- ✅ **Cost-effective** development and hosting
