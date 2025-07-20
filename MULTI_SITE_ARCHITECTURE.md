# PercyTech Multi-Site Architecture

## 🏗️ **Overview**

This architecture allows you to build multiple PercyTech sites (PercyTech, PercyText, PercyMD, Gnymble) that share:

- ✅ **Consistent branding** and design
- ✅ **Shared components** and styling
- ✅ **Centralized configuration**
- ✅ **Easy maintenance** and updates
- ✅ **True shared package** with proper dependency management

## 📁 **File Structure**

```
/Users/bryan/Desktop/PT/Websites/
├── percytech/                    # Main PercyTech site (port 3000)
├── percytext/                    # PercyText site (port 3002)
├── percymd/                      # PercyMD site (port 3003)
├── gnymble/                      # Gnymble site (port 3004)
├── cigar-gnymble/                # Cigar Gnymble site
└── shared-package/               # 🆕 True shared package
    ├── src/
    │   ├── components/
    │   │   └── PercyTechTheme.jsx # Shared React components
    │   ├── config/
    │   │   └── PercyTechConfig.js # Site configurations
    │   ├── styles/
    │   │   └── PercyTechGlobal.css # Shared styles
    │   ├── types/
    │   │   └── index.ts           # TypeScript type definitions
    │   └── index.ts               # Main exports
    ├── dist/                      # Built files
    ├── package.json               # Package configuration
    ├── tsconfig.json              # TypeScript config
    ├── rollup.config.js           # Build configuration
    └── README.md                  # Package documentation
```

## 🎯 **How It Works**

### **1. Shared Package (`shared-package/`)**

The new shared package provides:

- **Proper dependency management** with npm package structure
- **TypeScript support** with type definitions
- **Build system** using Rollup for optimal bundling
- **Version control** and semantic versioning
- **Easy installation** via npm link or file dependencies

### **2. Shared Components (`shared-package/src/components/PercyTechTheme.jsx`)**

- **PercyTechLayout**: Consistent header, navigation, and footer
- **PercyTechHero**: Reusable hero section with customizable content
- **PercyTechSolutions**: Standardized solutions grid
- **PercyTechTheme**: Design tokens and configuration

### **3. Centralized Configuration (`shared-package/src/config/PercyTechConfig.js`)**

- **Site-specific content**: Each site has its own hero, solutions, features
- **Shared theme**: Colors, fonts, animations used across all sites
- **Helper functions**: `getSiteConfig()`, `getThemeConfig()`

### **4. Type Definitions (`shared-package/src/types/index.ts`)**

- **ContactFormData**: Contact form interface
- **DemoFormData**: Demo form interface
- **SiteConfig**: Site configuration interface
- **ApiResponse**: API response interface
- **NextApiRequest/Response**: Next.js API types

## 🚀 **Creating a New Site**

### **Step 1: Create New Site Directory**

```bash
# Create new site
mkdir your-new-site
cd your-new-site
npm init -y
```

### **Step 2: Install Dependencies**

```bash
# Install Next.js and other dependencies
npm install next react react-dom

# Install shared package
npm install file:../shared-package
```

### **Step 3: Configure Site Content**

Edit `shared-package/src/config/PercyTechConfig.js` to add your site:

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

### **Step 4: Create Homepage**

```javascript
import { PercyTechLayout, PercyTechHero } from "@percytech/shared";
import { getSiteConfig } from "@percytech/shared";

export default function YourNewSiteHome() {
  const config = getSiteConfig("yournewsite");

  return (
    <PercyTechLayout
      siteName={config.name}
      siteDescription={config.description}
    >
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

### **Step 5: Start Development**

```bash
npm run dev -- -p 3005  # Use different port
```

## 🔄 **Maintenance Workflow**

### **Updating Shared Components**

1. **Edit** files in `shared-package/src/`
2. **Build** the package: `cd shared-package && npm run build`
3. **Changes apply** to all sites automatically
4. **Test** each site to ensure compatibility

### **Updating Site Content**

1. **Edit** `shared-package/src/config/PercyTechConfig.js`
2. **Changes apply** to specific sites
3. **No code changes** needed in individual sites

### **Adding New Features**

1. **Create** new shared component in `shared-package/src/components/`
2. **Add** configuration in `shared-package/src/config/PercyTechConfig.js`
3. **Export** from `shared-package/src/index.ts`
4. **Build** the package: `npm run build`
5. **Import** and use in individual sites

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

- **URL**: http://localhost:3004
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
# Build shared package
cd shared-package
npm run build

# Start all sites
cd ../percytech && npm run dev                    # PercyTech (3000)
cd ../percytext && npm run dev -- -p 3002         # PercyText
cd ../percymd && npm run dev -- -p 3003           # PercyMD
cd ../gnymble && npm run dev -- -p 3004           # Gnymble

# Update shared package in all sites
cd ../shared-package && npm run build
cd ../percytech && npm install file:../shared-package
cd ../percytext && npm install file:../shared-package
cd ../percymd && npm install file:../shared-package
cd ../gnymble && npm install file:../shared-package
```

## 📝 **Best Practices**

1. **Always use shared components** for consistency
2. **Configure content in shared config** rather than hardcoding
3. **Test all sites** when updating shared components
4. **Use semantic naming** for site configurations
5. **Keep individual sites lightweight** by leveraging shared resources
6. **Build shared package** before testing changes
7. **Use TypeScript** for better type safety

## 🚀 **Benefits of New Architecture**

- ✅ **True dependency management** with proper package structure
- ✅ **Type safety** with TypeScript definitions
- ✅ **Optimized builds** with Rollup bundling
- ✅ **Version control** and semantic versioning
- ✅ **Easy installation** and updates
- ✅ **Better IDE support** with proper imports
- ✅ **Reduced bundle size** with tree shaking
- ✅ **Consistent API** across all sites

## 🔄 **Migration from Old Architecture**

### **For Existing Sites**

1. **Install shared package**:

   ```bash
   npm install file:../shared-package
   ```

2. **Update imports**:

   ```javascript
   // Before
   import { PercyTechLayout } from "../shared/components/PercyTechTheme";
   import { getSiteConfig } from "../shared/config/PercyTechConfig";

   // After
   import { PercyTechLayout, getSiteConfig } from "@percytech/shared";
   ```

3. **Remove local shared folders**:

   ```bash
   rm -rf shared/
   ```

4. **Test the site** to ensure everything works

### **For New Sites**

1. **Create site directory**
2. **Install dependencies** including shared package
3. **Use shared components** from the start
4. **Configure site content** in shared config

## 📋 **Available Exports**

### **Components**

- `PercyTechLayout` - Main layout component
- `PercyTechHero` - Hero section component

### **Configuration**

- `getSiteConfig(siteName)` - Get site configuration
- `getThemeConfig()` - Get theme configuration

### **Types**

- `SiteConfig` - Site configuration interface
- `ContactFormData` - Contact form data interface
- `DemoFormData` - Demo form data interface
- `ApiResponse` - API response interface
- `NextApiRequest/Response` - Next.js API types

## 🎯 **Future Enhancements**

- **Monorepo setup** with Lerna or Nx
- **Automated testing** for shared components
- **Storybook** for component documentation
- **CI/CD pipeline** for automated builds
- **Private npm registry** for production deployment
