import React from 'react';

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

// Shared layout wrapper
export const PercyTechLayout = ({ children, siteName = 'PercyTech', siteDescription = 'Smart SMS for Savvy Businesses' }) => {
  return (
    <div className="font-sans text-secondary bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="/" className="text-2xl font-bold">
            <span className="text-primary">{siteName.split('Percy')[0]}</span>
            <span className="text-secondary">{siteName.split('Percy')[1] || 'Tech'}</span>
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="text-secondary hover:text-primary transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/pricing" className="text-secondary hover:text-primary transition-colors relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/about" className="text-secondary hover:text-primary transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/contact" className="text-secondary hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <a href="/demo" className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300">Get a Demo</a>
        </div>
      </header>
      <main className="pt-20">{children}</main>
      <footer className="bg-black/40 backdrop-blur-sm text-secondary text-center py-6 border-t border-primary/20">
        <p>&copy; 2025 Percentric Technologies, LLC ({siteName}). All rights reserved.</p>
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
  siteName = "PercyTech"
}) => {
  return (
    <section className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h1 className="text-hero font-black gradient-text leading-tight">
          {title}
        </h1>
        <p className="text-xl text-secondary-dark max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <a
          href={ctaLink}
          className="inline-block bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-lg text-xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
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
          <div key={index} className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-t-4 border-primary shadow-xl">
            <h3 className="text-2xl font-black mb-4 text-secondary">{solution.title}</h3>
            <p className="text-secondary-dark mb-6 leading-relaxed">
              {solution.description}
            </p>
            <a
              href={solution.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-primary-light transition-colors inline-flex items-center"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}; 