import React from 'react';

export default function PercyTechHome() {
  return (
    <div className="font-sans text-white bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-orange-900/20">
        <div className="container mx-auto flex items-center p-4">
          <a href="/" className="text-2xl font-bold">
            <span className="text-orange-700">Percy</span>
            <span className="text-white">Tech</span>
          </a>
          <nav className="hidden md:flex gap-8 mx-auto">
            <a href="/" className="text-orange-700 font-semibold">Home</a>
            <div className="relative group">
              <a href="/solutions" className="text-white hover:text-orange-700 cursor-pointer transition-colors">Solutions</a>
              <div className="absolute left-0 mt-2 bg-black/80 backdrop-blur-md shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-100 border border-orange-700/20">
                <a href="https://percymd.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-orange-700/10 text-white hover:text-orange-700 transition-colors">PercyMD</a>
                <a href="https://cigar.gnymble.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-orange-700/10 text-white hover:text-orange-700 transition-colors">Gnymble</a>
                <a href="https://percytext.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-orange-700/10 text-white hover:text-orange-700 transition-colors">PercyText</a>
              </div>
            </div>
            <a href="/pricing" className="text-white hover:text-orange-700 transition-colors">Pricing</a>
            <a href="/about" className="text-white hover:text-orange-700 transition-colors">About</a>
            <a href="/contact" className="text-white hover:text-orange-700 transition-colors">Contact</a>
          </nav>
          <a href="/contact" className="bg-gradient-to-r from-orange-700 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
            Get Started
          </a>
        </div>
      </header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <h1 className="text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white to-orange-700 bg-clip-text text-transparent">
                Smart SMS for<br />
                Savvy Business
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              PercyTech delivers innovative SMS solutions for every business need. From simple messaging to enterprise compliance, 
              we're making communication effortless and secure.
            </p>
            <a
              href="/solutions"
              className="inline-block bg-gradient-to-r from-orange-700 to-orange-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Explore Our Solutions
            </a>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-20 px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-white">Our Solution Suite</h2>
            <p className="text-xl text-gray-300">Tailored solutions for every business need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-700/20 hover:border-orange-700/40 transition-all duration-300">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-black mb-4 text-white">PercyMD</h3>
              <p className="text-gray-300 mb-6">Healthcare-focused messaging solutions. HIPAA compliant, patient-centric communication.</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="text-gray-300">✓ HIPAA compliance</li>
                <li className="text-gray-300">✓ Patient engagement</li>
                <li className="text-gray-300">✓ Clinical workflows</li>
                <li className="text-gray-300">✓ Secure messaging</li>
              </ul>
              <a href="https://percymd.com" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-orange-700 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-center">
                Learn More
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-700/20 hover:border-orange-700/40 transition-all duration-300">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-black mb-4 text-white">Gnymble</h3>
              <p className="text-gray-300 mb-6">Precision SMS for regulated industries. Built for compliance, designed for bold brands.</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="text-gray-300">✓ Regulatory compliance</li>
                <li className="text-gray-300">✓ Enterprise security</li>
                <li className="text-gray-300">✓ Message approval</li>
                <li className="text-gray-300">✓ Audit trails</li>
              </ul>
              <a href="https://cigar.gnymble.com" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-orange-700 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-center">
                Learn More
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-700/20 hover:border-orange-700/40 transition-all duration-300">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-black mb-4 text-white">PercyText</h3>
              <p className="text-gray-300 mb-6">Simple SMS for every business. Easy setup, transparent pricing, and reliable delivery.</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="text-gray-300">✓ Easy setup</li>
                <li className="text-gray-300">✓ Transparent pricing</li>
                <li className="text-gray-300">✓ 24/7 support</li>
                <li className="text-gray-300">✓ 99.9% uptime</li>
              </ul>
              <a href="https://percytext.com" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-orange-700 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-center">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-6 text-center bg-gradient-to-b from-transparent to-black/20">
          <h2 className="text-4xl font-black mb-6 text-white">Why Choose PercyTech?</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            We're building the future of business communication with a focus on simplicity, security, and innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-black text-xl mb-3 text-white">Innovation First</h3>
              <p className="text-gray-300">
                We're constantly pushing the boundaries of what's possible in business communication.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-black text-xl mb-3 text-white">Security by Design</h3>
              <p className="text-gray-300">
                Every solution is built with enterprise-grade security and compliance in mind.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-black text-xl mb-3 text-white">Customer Success</h3>
              <p className="text-gray-300">
                Your success is our success. We're here to help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 text-center bg-gradient-to-r from-orange-700 to-orange-600 text-white">
          <h2 className="text-4xl font-black mb-6">Ready to Transform Your Communication?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses using PercyTech solutions to connect with their customers.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-orange-700 px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Get Started Today
          </a>
        </section>
      </main>
      
      <footer className="bg-black/40 backdrop-blur-sm text-white text-center py-6 border-t border-orange-900/20">
        <p>&copy; 2025 Percentric Technologies, LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
