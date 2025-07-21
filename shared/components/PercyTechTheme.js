import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Shared PercyTech theme configuration
export const PercyTechTheme = {
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
    },
    // Gnymble-specific colors
    gnymble: {
      primary: '#FF6B35', // Orange
      dark: '#E55A2B',
      light: '#FF8A65'
    }
  },
  fonts: {
    hero: 'clamp(3rem, 8vw, 5.5rem)',
    heading: '2.5rem',
    body: '1.125rem'
  },
  animations: {
    float: 'float 6s ease-in-out infinite',
    slideIn: 'slideIn 0.5s ease-out forwards',
    slideInUp: 'slideInUp 0.6s ease-out forwards'
  }
};

// Dropdown component for navigation
const Dropdown = ({ label, items, isOpen, onToggle }) => {
  const router = useRouter();
  const isGnymble = true; // This is the Gnymble theme
  const activeColor = 'text-amber-600';
  const hoverColor = 'hover:text-amber-600';
  
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center transition-colors ${isOpen ? `${activeColor} font-semibold` : `text-white ${hoverColor}`}`}
      >
        {label}
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-amber-700/20 rounded-lg shadow-2xl py-2 z-50">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-amber-700/20 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

// Shared layout wrapper
export const PercyTechLayout = ({ children, siteName = 'Gnymble', siteDescription = 'Precision SMS for Regulated Industries', showSolutions = false }) => {
  const router = useRouter();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  
  const isGnymble = siteName === 'Gnymble';
  const primaryColor = 'text-amber-600';
  const borderColor = 'border-amber-700/20';
  const hoverColor = 'hover:text-amber-600';
  const buttonGradient = 'from-amber-700 to-amber-600';
  const activeColor = 'text-amber-600';
  
  // Function to check if current path matches
  const isActive = (path) => {
    if (router && router.pathname) {
      return router.pathname === path;
    }
    return false;
  };

  // Solutions dropdown items
  const solutionsItems = [
    { label: 'PercyMD (Healthcare)', href: '/solutions/percymd' },
    { label: 'Gnymble (Regulated Markets)', href: '/solutions/gnymble' },
    { label: 'PercyText (General Business)', href: '/solutions/percytext' },
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'Financial Services', href: '/industries/financial' },
    { label: 'Regulated Markets', href: '/industries/regulated' }
  ];

  // Resources dropdown items
  const resourcesItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Compliance Guides', href: '/compliance-guides' },
    { label: 'API Documentation', href: '/docs' },
    { label: 'Support Center', href: '/support' }
  ];
  
  return (
    <div className="font-sans text-secondary bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-amber-800/20">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">Gnymble</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="/" 
              className={`transition-colors ${isActive('/') ? `${activeColor} font-semibold` : `text-white ${hoverColor}`}`}
            >
              Home
            </a>
            
            {showSolutions && (
              <Dropdown
                label="Solutions"
                items={solutionsItems}
                isOpen={solutionsOpen}
                onToggle={() => {
                  setSolutionsOpen(!solutionsOpen);
                  setResourcesOpen(false);
                }}
              />
            )}
            
            <a 
              href="/features" 
              className={`transition-colors ${isActive('/features') ? `${activeColor} font-semibold` : `text-white ${hoverColor}`}`}
            >
              Features
            </a>
            
            <a 
              href="/pricing" 
              className={`transition-colors ${isActive('/pricing') ? `${activeColor} font-semibold` : `text-white ${hoverColor}`}`}
            >
              Pricing
            </a>
            
            <Dropdown
              label="Resources"
              items={resourcesItems}
              isOpen={resourcesOpen}
              onToggle={() => {
                setResourcesOpen(!resourcesOpen);
                setSolutionsOpen(false);
              }}
            />
            
            <a 
              href="/about" 
              className={`transition-colors ${isActive('/about') ? `${activeColor} font-semibold` : `text-white ${hoverColor}`}`}
            >
              About
            </a>
            
            <a 
              href="/contact" 
              className={`transition-colors ${isActive('/contact') ? `${activeColor} font-semibold` : `text-white ${hoverColor}`}`}
            >
              Contact
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="/demo" className="text-white hover:text-amber-400 transition-colors">
              Demo
            </a>
            <a href="/signup?platform=gnymble" className={`bg-gradient-to-r ${buttonGradient} text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300`}>
              Get Started
            </a>
          </div>
        </div>
      </header>
      
      <main className="pt-20">{children}</main>
      
      <footer className="bg-black/40 backdrop-blur-sm text-secondary py-12 border-t border-amber-800/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Gnymble</h3>
              <p className="text-gray-300 text-sm">
                Precision SMS for regulated industries. Built for compliance, designed for growth.
              </p>
            </div>
            
            {showSolutions && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/solutions/percymd" className="text-gray-300 hover:text-amber-400 transition-colors">PercyMD</a></li>
                  <li><a href="/solutions/gnymble" className="text-gray-300 hover:text-amber-400 transition-colors">Gnymble</a></li>
                  <li><a href="/solutions/percytext" className="text-gray-300 hover:text-amber-400 transition-colors">PercyText</a></li>
                </ul>
              </div>
            )}
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/blog" className="text-gray-300 hover:text-amber-400 transition-colors">Blog</a></li>
                <li><a href="/case-studies" className="text-gray-300 hover:text-amber-400 transition-colors">Case Studies</a></li>
                <li><a href="/compliance-guides" className="text-gray-300 hover:text-amber-400 transition-colors">Compliance Guides</a></li>
                <li><a href="/support" className="text-gray-300 hover:text-amber-400 transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">About</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
                <li><a href="/privacy" className="text-gray-300 hover:text-amber-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-amber-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-800/20 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Percentric Technologies, LLC (Gnymble). All rights reserved.
            </p>
            <div className="mt-2 text-sm text-gray-400">
              <p>
                Powered by{' '}
                <a 
                  href="https://percytech.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-500 transition-colors"
                >
                  PercyTech
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Shared hero section component
export const PercyTechHero = ({ 
  title, 
  subtitle, 
  ctaText = "Request a Demo",
  ctaLink = "/demo",
  siteName = "Gnymble"
}) => {
  const buttonGradient = 'from-amber-700 to-amber-600';
  const titleGradient = 'from-white to-amber-700';
  
  return (
    <section className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h1 className="text-6xl font-black leading-tight">
          <span className={`bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}>
            {title}
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <a
          href={ctaLink}
          className={`inline-block bg-gradient-to-r ${buttonGradient} text-white px-8 py-4 rounded-lg text-xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300`}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

// Shared solutions grid component
export const PercyTechSolutions = ({ solutions = [] }) => {
  return (
    <section id="solutions" className="py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 text-secondary">Solutions Built for Your Industry</h2>
        <p className="text-xl text-secondary-dark">Choose the solution that fits your needs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {solutions.map((solution, index) => (
          <div key={index} className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-t-4 border-amber-700 shadow-xl">
            <h3 className="text-2xl font-black mb-4 text-secondary">{solution.title}</h3>
            <p className="text-secondary-dark mb-6 leading-relaxed">
              {solution.description}
            </p>
            <a
              href={solution.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 font-semibold hover:text-amber-500 transition-colors inline-flex items-center"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}; 