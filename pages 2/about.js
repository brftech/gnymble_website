import React from 'react';

export default function About() {
  return (
    <div className="font-sans text-white bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-orange-900/20">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="/" className="text-2xl font-bold">
            <span className="text-orange-700">Percy</span>
            <span className="text-white">Tech</span>
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="text-white hover:text-orange-700 transition-colors">Home</a>
            <div className="relative group">
              <a href="/solutions" className="text-white hover:text-orange-700 cursor-pointer transition-colors">Solutions</a>
              <div className="absolute left-0 mt-2 bg-black/80 backdrop-blur-md shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-100 border border-orange-700/20">
                <a href="https://percymd.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-orange-700/10 text-white hover:text-orange-700 transition-colors">PercyMD</a>
                <a href="https://cigar.gnymble.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-orange-700/10 text-white hover:text-orange-700 transition-colors">Gnymble</a>
                <a href="https://percytext.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-orange-700/10 text-white hover:text-orange-700 transition-colors">PercyText</a>
              </div>
            </div>
            <a href="/pricing" className="text-white hover:text-orange-700 transition-colors">Pricing</a>
            <a href="/about" className="text-orange-700 font-semibold">About</a>
            <a href="/contact" className="text-white hover:text-orange-700 transition-colors">Contact</a>
          </nav>
          <a href="/contact" className="bg-gradient-to-r from-orange-700 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
            Get Started
          </a>
        </div>
      </header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-orange-700 rounded-full flex items-center justify-center">
              <img 
                src="/BFineMD.png" 
                alt="PercyTech Signature" 
                className="w-16 h-16 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-white text-4xl font-bold" style={{display: 'none'}}>F</span>
            </div>
          </div>
          <h1 className="text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-white to-orange-700 bg-clip-text text-transparent">
              About PercyTech
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building the future of business communication, one solution at a time.
          </p>
        </section>

        {/* Founder Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-black text-white mb-6">Meet Our Founder</h2>
                <h3 className="text-2xl font-bold text-orange-700 mb-4">Bryan R. Fine, MD, MPH</h3>
                <p className="text-lg text-gray-300 mb-6">
                  A physician and public health expert with a passion for improving communication in healthcare and beyond.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-3 text-xl">🎓</span>
                    <span>Medical Doctor (MD)</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-3 text-xl">📊</span>
                    <span>Master of Public Health (MPH)</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-3 text-xl">💡</span>
                    <span>Technology Innovator</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-3 text-xl">🏥</span>
                    <span>Healthcare Communication Expert</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-orange-700 mb-4">
                  <img 
                    src="/bfinemd_headshot.png" 
                    alt="Bryan R. Fine, MD, MPH" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why PercyTech Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-12 text-center">Why I Started PercyTech</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-700/20">
                <h3 className="text-2xl font-black text-white mb-4">The Problem I Saw</h3>
                <p className="text-gray-300 leading-relaxed">
                  As a physician working in healthcare, I witnessed firsthand the communication challenges that plague our industry. 
                  Patient engagement was fragmented, compliance was complex, and the tools available were either too basic or too 
                  expensive for most practices to implement effectively.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-700/20">
                <h3 className="text-2xl font-black text-white mb-4">The Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  I envisioned a world where every business—from small medical practices to large enterprises—could communicate 
                  with their customers seamlessly, securely, and in compliance with industry regulations. A world where technology 
                  serves people, not the other way around.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-700/20">
                <h3 className="text-2xl font-black text-white mb-4">The Solution</h3>
                <p className="text-gray-300 leading-relaxed">
                  PercyTech was born from this vision. We're building communication solutions that are powerful enough for 
                  enterprise needs, simple enough for small businesses, and secure enough for healthcare. Every solution we 
                  create is designed with real-world problems in mind, backed by deep industry knowledge and a commitment to 
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-12 text-center">Our Mission & Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-black text-xl mb-3 text-white">Mission</h3>
                <p className="text-gray-300">
                  To democratize secure, compliant communication technology, making it accessible to businesses of all sizes 
                  while maintaining the highest standards of security and reliability.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-black text-xl mb-3 text-white">Security First</h3>
                <p className="text-gray-300">
                  Every solution is built with enterprise-grade security and compliance in mind, because we understand that 
                  trust is the foundation of every successful business relationship.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-black text-xl mb-3 text-white">Customer Success</h3>
                <p className="text-gray-300">
                  Your success is our success. We're not just building technology—we're building partnerships that help 
                  your business grow and thrive in an increasingly digital world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center bg-gradient-to-r from-orange-700 to-orange-600 text-white">
          <h2 className="text-4xl font-black mb-6">Ready to Transform Your Communication?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in building the future of business communication.
          </p>
          <a href="/contact" className="inline-block bg-white text-orange-700 px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300">
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