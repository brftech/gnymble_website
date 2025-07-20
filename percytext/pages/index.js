import React from 'react';

export default function PercyTextHome() {
  return (
    <div className="font-sans text-white bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-orange-800/20">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="/" className="text-2xl font-bold">
            <span className="text-orange-600">Percy</span>
            <span className="text-white">Text</span>
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="text-white hover:text-orange-600 transition-colors">Home</a>
            <a href="/pricing" className="text-white hover:text-orange-600 transition-colors">Pricing</a>
            <a href="/contact" className="text-white hover:text-orange-600 transition-colors">Contact</a>
          </nav>
          <a href="/trial" className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
            Start Free Trial
          </a>
        </div>
      </header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <h1 className="text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white to-orange-600 bg-clip-text text-transparent">
                Simple SMS for Every Business
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              PercyText takes the complexity out of SMS messaging. Whether you're sending notifications, 
              running campaigns, or building customer relationships, we make it easy and affordable.
            </p>
            <a
              href="/trial"
              className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Start Free Trial
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-white">Why Choose PercyText?</h2>
            <p className="text-xl text-gray-300">Built for businesses that value simplicity and results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-black text-xl mb-3 text-white">Easy Setup</h3>
              <p className="text-gray-300">
                Get started in minutes, not days. No complex configurations required.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-black text-xl mb-3 text-white">Affordable Pricing</h3>
              <p className="text-gray-300">
                Pay only for what you use with transparent, predictable pricing.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛟</div>
              <h3 className="font-black text-xl mb-3 text-white">24/7 Support</h3>
              <p className="text-gray-300">
                Our team is here to help you succeed, whenever you need us.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-black text-xl mb-3 text-white">99.9% Uptime</h3>
              <p className="text-gray-300">
                Reliable delivery you can count on for your business communications.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 text-center bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <h2 className="text-4xl font-black mb-6">Ready to Simplify Your SMS?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses using PercyText to connect with their customers.
          </p>
          <a
            href="/trial"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Start Free Trial
          </a>
        </section>
      </main>
      
      <footer className="bg-black/40 backdrop-blur-sm text-white text-center py-6 border-t border-orange-800/20">
        <p>&copy; 2025 Percentric Technologies, LLC (PercyText). All rights reserved.</p>
      </footer>
    </div>
  );
} 