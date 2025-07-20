import React from 'react';

export default function GnymbleHome() {
  return (
    <div className="font-sans text-white bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-orange-800/20">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="/" className="text-2xl font-bold">
            <span className="text-orange-600">Gnymble</span>
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="text-white hover:text-orange-600 transition-colors">Home</a>
            <a href="/pricing" className="text-white hover:text-orange-600 transition-colors">Pricing</a>
            <a href="/contact" className="text-white hover:text-orange-600 transition-colors">Contact</a>
          </nav>
          <a href="/contact" className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
            Contact Sales
          </a>
        </div>
      </header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <h1 className="text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white to-orange-600 bg-clip-text text-transparent">
                Precision SMS for Regulated Industries
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Built for compliance. Designed for bold brands. Gnymble delivers messaging solutions where every word matters.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 px-6 text-center bg-gradient-to-b from-transparent to-black/20">
          <h2 className="text-4xl font-black mb-6 text-white">Where Every Word Matters</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Gnymble delivers precision SMS solutions for industries where compliance, security, and brand control are non-negotiable. 
            Built for regulated markets that demand excellence.
          </p>
        </section>

        {/* Compliance Features */}
        <section className="py-20 px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-white">Enterprise-Grade Compliance</h2>
            <p className="text-xl text-gray-300">Built for industries where every message counts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-black text-xl mb-3 text-white">Regulatory Compliance</h3>
              <p className="text-gray-300">
                Built-in compliance for FINRA, SEC, FDA, and other regulatory bodies.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-black text-xl mb-3 text-white">Enterprise Security</h3>
              <p className="text-gray-300">
                SOC 2 Type II certified with end-to-end encryption and audit trails.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-black text-xl mb-3 text-white">Message Approval</h3>
              <p className="text-gray-300">
                Multi-level approval workflows with compliance officer oversight.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-black text-xl mb-3 text-white">Audit Trails</h3>
              <p className="text-gray-300">
                Complete message history with timestamp and user tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="py-20 px-6 text-center bg-gradient-to-b from-transparent to-black/20">
          <h2 className="text-4xl font-black mb-6 text-white">Trusted by Regulated Industries</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Gnymble serves industries where precision, compliance, and brand integrity are paramount.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-600/20">
              <h3 className="text-2xl font-black mb-4 text-white">Financial Services</h3>
              <p className="text-gray-300 mb-6">FINRA and SEC compliant messaging for broker-dealers, investment advisors, and financial institutions.</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="text-gray-300">✓ FINRA compliance</li>
                <li className="text-gray-300">✓ SEC recordkeeping</li>
                <li className="text-gray-300">✓ Trade confirmations</li>
                <li className="text-gray-300">✓ Client communications</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-2 border-orange-600 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Premium
              </div>
              <h3 className="text-2xl font-black mb-4 text-white">Healthcare</h3>
              <p className="text-gray-300 mb-6">HIPAA-compliant messaging for pharmaceutical companies, medical device manufacturers, and healthcare providers.</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="text-gray-300">✓ HIPAA compliance</li>
                <li className="text-gray-300">✓ FDA requirements</li>
                <li className="text-gray-300">✓ Clinical trial communications</li>
                <li className="text-gray-300">✓ Patient engagement</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-600/20">
              <h3 className="text-2xl font-black mb-4 text-white">Legal & Professional</h3>
              <p className="text-gray-300 mb-6">Secure messaging for law firms, accounting firms, and professional service providers.</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="text-gray-300">✓ Attorney-client privilege</li>
                <li className="text-gray-300">✓ Bar association compliance</li>
                <li className="text-gray-300">✓ Client confidentiality</li>
                <li className="text-gray-300">✓ Document delivery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enterprise Pricing */}
        <section className="py-20 px-6 text-center bg-gradient-to-b from-transparent to-black/20">
          <h2 className="text-4xl font-black mb-6 text-white">Enterprise Pricing</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Custom solutions for enterprise organizations with dedicated support and compliance guarantees.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-600/20">
              <h3 className="text-2xl font-black mb-4 text-white">Professional</h3>
              <p className="text-3xl font-black text-orange-600 mb-4">$199<span className="text-lg text-gray-300">/month</span></p>
              <p className="text-gray-300 mb-6">For growing regulated businesses</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="text-gray-300">✓ 10,000 SMS/month</li>
                <li className="text-gray-300">✓ Basic compliance features</li>
                <li className="text-gray-300">✓ Email support</li>
                <li className="text-gray-300">✓ Standard audit trails</li>
              </ul>
              <a href="/contact" className="block w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-center">
                Contact Sales
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-2 border-orange-600 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Enterprise
              </div>
              <h3 className="text-2xl font-black mb-4 text-white">Enterprise</h3>
              <p className="text-3xl font-black text-orange-600 mb-4">Custom</p>
              <p className="text-gray-300 mb-6">For large regulated organizations</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="text-gray-300">✓ Unlimited SMS</li>
                <li className="text-gray-300">✓ Full compliance suite</li>
                <li className="text-gray-300">✓ Dedicated support</li>
                <li className="text-gray-300">✓ SLA guarantees</li>
                <li className="text-gray-300">✓ Custom integrations</li>
              </ul>
              <a href="/contact" className="block w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-center">
                Schedule Demo
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 text-center bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <h2 className="text-4xl font-black mb-6">Ready for Enterprise-Grade SMS?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading regulated industries using Gnymble for secure, compliant messaging.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Contact Sales
          </a>
        </section>
      </main>
      
      <footer className="bg-black/40 backdrop-blur-sm text-white text-center py-6 border-t border-orange-800/20">
        <p>&copy; 2025 Percentric Technologies, LLC (Gnymble). All rights reserved.</p>
      </footer>
    </div>
  );
} 