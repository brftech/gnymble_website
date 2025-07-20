import React from 'react';

export default function Pricing() {
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
            <a href="/pricing" className="text-orange-700 font-semibold">Pricing</a>
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
        <section className="pt-20 pb-16 px-6 text-center">
          <h1 className="text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-white to-orange-700 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everyone starts with our onboarding plan. Then choose the ongoing plan that fits your business.
          </p>
        </section>

        {/* Onboarding Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-2xl border-2 border-orange-700 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-bold">
                  Onboarding Plan
                </span>
              </div>
              <h2 className="text-4xl font-black text-white mb-6">Start Here</h2>
              <div className="mb-8">
                <span className="text-6xl font-black text-orange-700">$179</span>
                <span className="text-2xl text-gray-300">/month</span>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Perfect for established shops ready to grow their customer communications
              </p>
              <ul className="space-y-4 mb-10 text-left max-w-2xl mx-auto">
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-700 mr-3 text-xl">✓</span>
                  <span className="text-lg">All regulatory SMS fees included</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-700 mr-3 text-xl">✓</span>
                  <span className="text-lg">Complete training and onboarding support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-700 mr-3 text-xl">✓</span>
                  <span className="text-lg">1 dedicated phone number</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-700 mr-3 text-xl">✓</span>
                  <span className="text-lg">Up to 500 contacts</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-700 mr-3 text-xl">✓</span>
                  <span className="text-lg">Up to 1,500 messages per month</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-700 mr-3 text-xl">✓</span>
                  <span className="text-lg">Text-centered customer support</span>
                </li>
              </ul>
              <a href="/contact" className="inline-block bg-gradient-to-r from-orange-700 to-orange-600 text-white px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300 mb-4">
                Get Started
              </a>
              <div className="text-sm text-gray-400">
                All new customers start here • Cancel anytime • 30-day money-back guarantee
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Plans Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white mb-6">Choose Your Ongoing Plan</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                During onboarding, you'll select the plan that best fits your business needs and messaging volume.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-700/20 hover:border-orange-700/40 transition-all duration-300">
                <h3 className="text-2xl font-black mb-4 text-white">Starter</h3>
                <p className="text-gray-300 mb-6">
                  Perfect for small shops dipping their toes in customer communications.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-orange-700">$79</span>
                  <span className="text-lg text-gray-300">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-2">✓</span>
                    1 dedicated phone number
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-2">✓</span>
                    Up to 50 contacts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-2">✓</span>
                    Up to 200 messages per month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-2">✓</span>
                    Text-centered customer support
                  </li>
                </ul>
                <a href="/contact" className="block w-full bg-gradient-to-r from-orange-700 to-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started
                </a>
              </div>

              {/* Core Plan */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-2 border-orange-700 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Onboarding Plan
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-4 text-white">Core</h3>
                <p className="text-gray-300 mb-6">
                  For established shops ready to grow their customer communications.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-orange-700">$179</span>
                  <span className="text-lg text-gray-300">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-2">✓</span>
                    1 dedicated phone number
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-2">✓</span>
                    Up to 500 contacts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-2">✓</span>
                    Up to 1,500 messages per month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-2">✓</span>
                    Text-centered customer support
                  </li>
                </ul>
                <a href="/contact" className="block w-full bg-orange-700 text-white text-center py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started
                </a>
              </div>

              {/* Elite Plan */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-700/20 hover:border-orange-700/40 transition-all duration-300">
                <h3 className="text-2xl font-black mb-4 text-white">Elite</h3>
                <p className="text-gray-300 mb-6">
                  The perfect blend for retailers with a thriving customer base.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-orange-700">$349</span>
                  <span className="text-lg text-gray-300">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-2">✓</span>
                    1 dedicated or hosted phone number
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-2">✓</span>
                    Up to 3,000 contacts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-2">✓</span>
                    Up to 8,000 messages per month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-700 mr-2">✓</span>
                    Priority text and video support
                  </li>
                </ul>
                <a href="/contact" className="block w-full bg-gradient-to-r from-orange-700 to-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-white mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-black text-white mb-3">What's included in the $179 onboarding?</h3>
                <p className="text-gray-300">The $179/month includes all regulatory SMS fees, complete training, onboarding support, and everything you need to start texting with compliance and confidence.</p>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-3">How do I choose my ongoing plan?</h3>
                <p className="text-gray-300">During the onboarding process, we'll help you select the plan that best fits your business needs, contact volume, and messaging requirements.</p>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-3">Can I change my plan later?</h3>
                <p className="text-gray-300">Yes! You can upgrade or downgrade your plan at any time. We'll help you find the right fit as your business grows.</p>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-3">Is there a setup fee?</h3>
                <p className="text-gray-300">No setup fees. The $179/month covers everything including all regulatory processes, training, and onboarding support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center bg-gradient-to-r from-orange-700 to-orange-600 text-white">
          <h2 className="text-4xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your onboarding today and get everything you need to begin texting with confidence.
          </p>
          <a href="/contact" className="inline-block bg-white text-orange-700 px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Start Onboarding
          </a>
        </section>
      </main>
      
      <footer className="bg-black/40 backdrop-blur-sm text-white text-center py-6 border-t border-orange-900/20">
        <p>&copy; 2025 Percentric Technologies, LLC. All rights reserved.</p>
      </footer>
    </div>
  );
} 