import React from 'react';

export default function Solutions() {
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
              <span className="text-orange-700 font-semibold cursor-pointer transition-colors">Solutions</span>
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
        <section className="pt-20 pb-16 px-6 text-center">
          <h1 className="text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-white to-orange-700 bg-clip-text text-transparent">
              Our Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            PercyTech offers three specialized SMS solutions designed for different industries and business needs. 
            Each platform is built with specific compliance requirements and use cases in mind.
          </p>
        </section>

        {/* PercyMD Solution */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <img src="/logo-percymd.png" alt="PercyMD Logo" className="h-16" />
                </div>
                <h2 className="text-5xl font-black text-white mb-6">PercyMD</h2>
                <h3 className="text-2xl text-orange-700 font-bold mb-4">Healthcare-Focused SMS Solutions</h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Built specifically for healthcare providers who need HIPAA-compliant patient communication. 
                  PercyMD ensures your patient messaging meets all regulatory requirements while improving 
                  patient engagement and clinical workflows.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>HIPAA-compliant messaging with end-to-end encryption</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Patient appointment reminders and confirmations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Medication adherence notifications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Secure patient intake and forms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Integration with major EHR systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Audit trails and compliance reporting</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Perfect For</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Medical practices and clinics</li>
                      <li>• Dental offices</li>
                      <li>• Mental health providers</li>
                      <li>• Physical therapy practices</li>
                      <li>• Healthcare networks</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://percymd.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-700 to-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-all duration-300 text-center"
                  >
                    Visit PercyMD
                  </a>
                  <a 
                    href="/contact" 
                    className="border-2 border-orange-700 text-orange-700 px-8 py-4 rounded-lg font-bold hover:bg-orange-700 hover:text-white transition-all duration-300 text-center"
                  >
                    Get Demo
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-700/20">
                <h4 className="text-2xl font-bold text-white mb-6">Compliance & Security</h4>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl mr-4">🔒</div>
                    <div>
                      <h5 className="font-bold text-white">HIPAA Compliant</h5>
                      <p className="text-gray-300 text-sm">Full compliance with healthcare privacy regulations</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl mr-4">🛡️</div>
                    <div>
                      <h5 className="font-bold text-white">End-to-End Encryption</h5>
                      <p className="text-gray-300 text-sm">All messages encrypted in transit and at rest</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl mr-4">📋</div>
                    <div>
                      <h5 className="font-bold text-white">Audit Trails</h5>
                      <p className="text-gray-300 text-sm">Complete logging for compliance reporting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gnymble Solution */}
        <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-700/20">
                  <h4 className="text-2xl font-bold text-white mb-6">Enterprise Features</h4>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-2xl mr-4">⚡</div>
                      <div>
                        <h5 className="font-bold text-white">Message Approval</h5>
                        <p className="text-gray-300 text-sm">Multi-level approval workflows for compliance</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-2xl mr-4">📊</div>
                      <div>
                        <h5 className="font-bold text-white">Advanced Analytics</h5>
                        <p className="text-gray-300 text-sm">Detailed reporting and performance metrics</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-2xl mr-4">🔗</div>
                      <div>
                        <h5 className="font-bold text-white">API Integration</h5>
                        <p className="text-gray-300 text-sm">Seamless integration with existing systems</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="mb-6">
                  <img src="/gnymble-logo-with-tag.png" alt="Gnymble Logo" className="h-16" />
                </div>
                <h2 className="text-5xl font-black text-white mb-6">Gnymble</h2>
                <h3 className="text-2xl text-orange-700 font-bold mb-4">Precision SMS for Regulated Industries</h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Designed for businesses in highly regulated industries that need enterprise-grade 
                  security, compliance, and message approval workflows. Gnymble provides the control 
                  and oversight required for sensitive communications.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Multi-level message approval workflows</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Enterprise-grade security and compliance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Advanced analytics and reporting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Custom API integrations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Role-based access controls</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Comprehensive audit trails</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Perfect For</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Financial services</li>
                      <li>• Legal firms</li>
                      <li>• Insurance companies</li>
                      <li>• Government agencies</li>
                      <li>• Enterprise businesses</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://cigar.gnymble.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-700 to-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-all duration-300 text-center"
                  >
                    Visit Gnymble
                  </a>
                  <a 
                    href="/contact" 
                    className="border-2 border-orange-700 text-orange-700 px-8 py-4 rounded-lg font-bold hover:bg-orange-700 hover:text-white transition-all duration-300 text-center"
                  >
                    Get Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PercyText Solution */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-6">💬</div>
                <h2 className="text-5xl font-black text-white mb-6">PercyText</h2>
                <h3 className="text-2xl text-orange-700 font-bold mb-4">Simple SMS for Every Business</h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  The perfect starting point for businesses looking to add SMS communication to their 
                  customer service toolkit. Easy setup, transparent pricing, and reliable delivery 
                  make PercyText the go-to choice for straightforward messaging needs.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Quick setup - get started in minutes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Transparent, predictable pricing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>24/7 customer support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>99.9% uptime guarantee</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Easy-to-use web interface</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-700 mr-3 mt-1">✓</span>
                        <span>Bulk messaging capabilities</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Perfect For</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Small to medium businesses</li>
                      <li>• Retail stores</li>
                      <li>• Restaurants and food service</li>
                      <li>• Service-based businesses</li>
                      <li>• Startups and growing companies</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://percytext.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-700 to-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-all duration-300 text-center"
                  >
                    Visit PercyText
                  </a>
                  <a 
                    href="/contact" 
                    className="border-2 border-orange-700 text-orange-700 px-8 py-4 rounded-lg font-bold hover:bg-orange-700 hover:text-white transition-all duration-300 text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-700/20">
                <h4 className="text-2xl font-bold text-white mb-6">Why Choose PercyText</h4>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl mr-4">🚀</div>
                    <div>
                      <h5 className="font-bold text-white">Fast Setup</h5>
                      <p className="text-gray-300 text-sm">Get up and running in under 10 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl mr-4">💰</div>
                    <div>
                      <h5 className="font-bold text-white">No Hidden Fees</h5>
                      <p className="text-gray-300 text-sm">Clear, predictable pricing with no surprises</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl mr-4">🎯</div>
                    <div>
                      <h5 className="font-bold text-white">Reliable Delivery</h5>
                      <p className="text-gray-300 text-sm">99.9% uptime with guaranteed message delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white mb-6">Solution Comparison</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the solution that best fits your industry requirements and business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-700/20 hover:border-orange-700/40 transition-all duration-300">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-2xl font-bold text-white mb-4">PercyText</h3>
                <p className="text-gray-300 mb-6">Simple, reliable SMS for everyday business needs.</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>• Quick setup</li>
                  <li>• Transparent pricing</li>
                  <li>• 24/7 support</li>
                  <li>• Web interface</li>
                </ul>
                <div className="text-orange-700 font-bold">Starting at $79/month</div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-2 border-orange-700 shadow-xl">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold text-white mb-4">PercyMD</h3>
                <p className="text-gray-300 mb-6">HIPAA-compliant messaging for healthcare providers.</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>• HIPAA compliance</li>
                  <li>• Patient engagement</li>
                  <li>• EHR integration</li>
                  <li>• Audit trails</li>
                </ul>
                <div className="text-orange-700 font-bold">Starting at $179/month</div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-700/20 hover:border-orange-700/40 transition-all duration-300">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-white mb-4">Gnymble</h3>
                <p className="text-gray-300 mb-6">Enterprise-grade security for regulated industries.</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>• Message approval</li>
                  <li>• Advanced analytics</li>
                  <li>• API integration</li>
                  <li>• Role-based access</li>
                </ul>
                <div className="text-orange-700 font-bold">Custom pricing</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center bg-gradient-to-r from-orange-700 to-orange-600 text-white">
          <h2 className="text-4xl font-black mb-6">Ready to Choose Your Solution?</h2>
          <p className="text-xl mb-8 opacity-90">
            Not sure which solution is right for you? Let's discuss your needs and find the perfect fit.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-orange-700 px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Get Expert Guidance
          </a>
        </section>
      </main>
      
      <footer className="bg-black/40 backdrop-blur-sm text-white text-center py-6 border-t border-orange-900/20">
        <p>&copy; 2025 Percentric Technologies, LLC. All rights reserved.</p>
      </footer>
    </div>
  );
} 