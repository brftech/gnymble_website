// PercyTech Shared Configuration
export const PercyTechConfig = {
  // Main PercyTech site
  percytech: {
    name: 'PercyTech',
    domain: 'percytech.com',
    description: 'Smart SMS for Savvy Businesses',
    hero: {
      title: 'Smart SMS for Savvy Businesses',
      subtitle: 'PercyTech builds custom SMS platforms designed for compliance, customer engagement, and growth—with AI power under the hood.',
      ctaText: 'Request a Demo',
      ctaLink: '/demo'
    },
    solutions: [
      {
        title: 'PercyMD',
        description: 'HIPAA-compliant texting for healthcare. Better access. Better care. Better outcomes.',
        link: 'https://percymd.com'
      },
      {
        title: 'Gnymble',
        description: 'Texting for industries where every word counts. Built for compliance. Designed for bold brands.',
        link: 'https://cigar.gnymble.com'
      },
      {
        title: 'PercyText',
        description: 'Simple, scalable SMS for any business that wants powerful messaging without the complexity.',
        link: 'https://percytext.com'
      }
    ]
  },

  // PercyText site
  percytext: {
    name: 'PercyText',
    domain: 'percytext.com',
    description: 'Simple SMS for Every Business',
    hero: {
      title: 'Simple SMS for Every Business',
      subtitle: 'PercyText delivers powerful SMS messaging without the complexity. Built for businesses that want results, not headaches.',
      ctaText: 'Start Free Trial',
      ctaLink: '/trial'
    },
    solutions: [
      {
        title: 'Business SMS',
        description: 'Send marketing messages, notifications, and alerts to your customers with ease.',
        link: '/features/business-sms'
      },
      {
        title: 'Two-Way Messaging',
        description: 'Engage in real conversations with your customers through interactive SMS.',
        link: '/features/two-way'
      },
      {
        title: 'API Integration',
        description: 'Seamlessly integrate SMS into your existing applications and workflows.',
        link: '/features/api'
      }
    ],
    features: [
      {
        title: 'Easy Setup',
        description: 'Get started in minutes, not days. No complex configurations required.',
        icon: '⚡'
      },
      {
        title: 'Affordable Pricing',
        description: 'Pay only for what you use with transparent, predictable pricing.',
        icon: '💰'
      },
      {
        title: '24/7 Support',
        description: 'Our team is here to help you succeed, whenever you need us.',
        icon: '🛟'
      },
      {
        title: '99.9% Uptime',
        description: 'Reliable delivery you can count on for your business communications.',
        icon: '🔄'
      }
    ]
  },

  // PercyMD site
  percymd: {
    name: 'PercyMD',
    domain: 'percymd.com',
    description: 'HIPAA-Compliant SMS for Healthcare',
    hero: {
      title: 'Better Healthcare Communication',
      subtitle: 'HIPAA-compliant SMS solutions designed specifically for healthcare providers. Improve patient engagement and outcomes.',
      ctaText: 'Schedule Demo',
      ctaLink: '/demo'
    },
    solutions: [
      {
        title: 'Patient Reminders',
        description: 'Automated appointment reminders and follow-up messages that improve attendance rates.',
        link: '/features/reminders'
      },
      {
        title: 'HIPAA Compliance',
        description: 'Built-in compliance features that meet healthcare privacy and security requirements.',
        link: '/features/compliance'
      },
      {
        title: 'Integration Ready',
        description: 'Seamlessly integrate with your existing EHR and practice management systems.',
        link: '/features/integration'
      }
    ]
  },

  // Gnymble site
  gnymble: {
    name: 'Gnymble',
    domain: 'gnymble.com',
    description: 'Texting for Industries Where Every Word Counts',
    hero: {
      title: 'Precision SMS for Regulated Industries',
      subtitle: 'Built for compliance. Designed for bold brands. Gnymble delivers messaging solutions where every word matters.',
      ctaText: 'Learn More',
      ctaLink: '/contact'
    },
    solutions: [
      {
        title: 'Compliance First',
        description: 'Built-in compliance features for highly regulated industries and markets.',
        link: '/features/compliance'
      },
      {
        title: 'Brand Control',
        description: 'Maintain complete control over your messaging and brand voice.',
        link: '/features/brand-control'
      },
      {
        title: 'Enterprise Security',
        description: 'Enterprise-grade security and audit trails for sensitive communications.',
        link: '/features/security'
      }
    ],
    features: [
      {
        title: 'Regulatory Compliance',
        description: 'Built-in compliance for FINRA, SEC, FDA, and other regulatory bodies.',
        icon: '🛡️'
      },
      {
        title: 'Enterprise Security',
        description: 'SOC 2 Type II certified with end-to-end encryption and audit trails.',
        icon: '🔒'
      },
      {
        title: 'Message Approval',
        description: 'Multi-level approval workflows with compliance officer oversight.',
        icon: '📋'
      },
      {
        title: 'Audit Trails',
        description: 'Complete message history with timestamp and user tracking.',
        icon: '📊'
      }
    ],
    industries: [
      {
        title: 'Financial Services',
        description: 'FINRA and SEC compliant messaging for broker-dealers, investment advisors, and financial institutions.',
        features: ['FINRA compliance', 'SEC recordkeeping', 'Trade confirmations', 'Client communications']
      },
      {
        title: 'Healthcare',
        description: 'HIPAA-compliant messaging for pharmaceutical companies, medical device manufacturers, and healthcare providers.',
        features: ['HIPAA compliance', 'FDA requirements', 'Clinical trial communications', 'Patient engagement']
      },
      {
        title: 'Legal & Professional',
        description: 'Secure messaging for law firms, accounting firms, and professional service providers.',
        features: ['Attorney-client privilege', 'Bar association compliance', 'Client confidentiality', 'Document delivery']
      }
    ],
    security: [
      {
        title: 'End-to-End Encryption',
        description: 'All messages encrypted in transit and at rest using AES-256 encryption.',
        icon: '🔐'
      },
      {
        title: 'SOC 2 Type II Certified',
        description: 'Annual security audits ensure your data meets the highest security standards.',
        icon: '🏢'
      },
      {
        title: 'Role-Based Access Control',
        description: 'Granular permissions ensure only authorized users can send and view messages.',
        icon: '👥'
      },
      {
        title: 'Comprehensive Audit Trails',
        description: 'Complete message history with user tracking and timestamp verification.',
        icon: '📝'
      },
      {
        title: 'Real-Time Monitoring',
        description: '24/7 monitoring and alerting for suspicious activity and compliance violations.',
        icon: '⚡'
      },
      {
        title: 'Automated Compliance',
        description: 'Built-in compliance checks and automated reporting for regulatory requirements.',
        icon: '🔄'
      }
    ]
  },

  // Shared theme configuration
  theme: {
    colors: {
      primary: {
        DEFAULT: '#8B4513',
        dark: '#654321',
        light: '#A0522D'
      },
      secondary: {
        DEFAULT: '#FFFFFF',
        dark: '#F5F5F5',
        light: '#FFFFFF'
      },
      dark: {
        DEFAULT: '#0a0a0a',
        light: '#1a1a1a',
        lighter: '#2a2a2a'
      }
    },
    fonts: {
      hero: 'clamp(3rem, 8vw, 5.5rem)',
      heading: '2.5rem',
      body: '1.125rem'
    }
  },

  // Shared navigation
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ],

  // Shared footer
  footer: {
    company: 'Percentric Technologies, LLC',
    year: '2025',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Support', href: '/support' }
    ]
  }
};

// Helper function to get site config
export const getSiteConfig = (siteName) => {
  return PercyTechConfig[siteName.toLowerCase()] || PercyTechConfig.percytech;
};

// Helper function to get theme config
export const getThemeConfig = () => {
  return PercyTechConfig.theme;
}; 