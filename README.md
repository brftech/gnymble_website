# Gnymble - SMS Compliance for Regulated Industries

Enterprise-grade SMS platform built for compliance, security, and reliability. Trusted by regulated industries to communicate with confidence.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Start development server
npm run dev
```

The site will be available at `http://localhost:3004`

## 🏗️ Architecture

This is part of the PercyTech multi-site architecture. Key components:

- **Shared Components**: Reusable UI components in `shared/components/`
- **Configuration**: Site-specific config in `shared/config/PercyTechConfig.js`
- **API Routes**: Next.js API routes in `pages/api/`
- **Styling**: Tailwind CSS with custom theme

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality

- ESLint configuration in `.eslintrc.json`
- TypeScript types in `types/index.d.ts`
- Error boundaries for React error handling
- Input validation and sanitization utilities

### Security Features

- Rate limiting on API endpoints
- Input validation and sanitization
- Environment variable validation
- Error boundaries for graceful error handling

## 📁 Project Structure

```
gnymble/
├── components/          # React components
│   ├── ErrorBoundary.js # Error handling
│   └── LazyComponent.js # Code splitting
├── lib/                 # Utility functions
│   ├── env.js          # Environment validation
│   ├── logger.js       # Logging utility
│   ├── rateLimit.js    # Rate limiting
│   └── validation.js   # Input validation
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   ├── _app.js        # App wrapper
│   └── index.js       # Homepage
├── shared/            # Shared resources
│   ├── components/    # Shared components
│   ├── config/        # Site configuration
│   └── styles/        # Shared styles
├── styles/            # Global styles
├── types/             # TypeScript definitions
└── public/            # Static assets
```

## 🔒 Security

### API Security

- Rate limiting: 5 requests per 15 minutes for contact forms
- Input validation and sanitization
- Environment variable validation
- Proper error handling without information leakage

### Environment Variables

Required environment variables:

```bash
HUBSPOT_API_KEY=your_hubspot_api_key
HUBSPOT_PORTAL_ID=your_portal_id
HUBSPOT_FORM_ID=your_form_id
NOTIFICATION_EMAIL=your_email@domain.com
```

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Custom theme** with amber color scheme
- **Responsive design** for all screen sizes
- **Dark mode** optimized design

## 📊 Performance

### Code Splitting

- Lazy loading for heavy components
- Dynamic imports for better bundle splitting
- Suspense boundaries for loading states

### Optimization

- Image optimization (planned)
- Bundle analysis (planned)
- Performance monitoring (planned)

## 🧪 Testing

### Manual Testing Checklist

- [ ] Contact form validation
- [ ] Rate limiting functionality
- [ ] Error boundary behavior
- [ ] Responsive design
- [ ] API endpoint security

### Automated Testing (Planned)

- Unit tests for utilities
- Integration tests for API routes
- E2E tests for user flows

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run start
```

### Environment Setup

1. Set all required environment variables
2. Configure HubSpot integration
3. Set up monitoring and logging
4. Configure CDN for static assets

## 📝 Contributing

1. Follow the existing code style
2. Add TypeScript types for new features
3. Include proper error handling
4. Update documentation as needed
5. Test thoroughly before submitting

## 📄 License

Proprietary - All rights reserved

## 🆘 Support

For technical support or questions:

- Email: support@gnymble.com
- Documentation: [docs.gnymble.com](https://docs.gnymble.com)
- Status: [status.gnymble.com](https://status.gnymble.com)
