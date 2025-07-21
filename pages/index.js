import React, { useState, useEffect } from 'react';
import { PercyTechLayout, PercyTechHero } from "@percytech/shared";
import { getSiteConfig } from "@percytech/shared";

export default function GnymbleHome() {
  const config = getSiteConfig("gnymble");
  // Temporary hardcoded colors until import issue is resolved
  const colors = {
    primary: "amber",
    gradient: "from-amber-700 to-amber-600",
    border: "border-amber-700/20",
    hover: "hover:text-amber-600",
    active: "text-amber-600",
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        if (response.ok) {
          const data = await response.json();
          if (data.isAuthenticated) {
            setUser(data.user);
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };

    checkAuth();
  }, []);

  const features = [
    {
      title: "Never Get Banned Again",
      description: "Built specifically for tobacco businesses. Join 500+ cigar businesses that stopped getting blocked by traditional platforms.",
      icon: "🚬",
      metric: "500+ businesses switched"
    },
    {
      title: "Fill Every Event",
      description: "Promote cigar events, brand launches, and special occasions without restrictions. See 40% higher attendance rates.",
      icon: "📅",
      metric: "40% higher attendance"
    },
    {
      title: "Sell Out Limited Editions Faster",
      description: "Keep customers informed about new arrivals and special releases. Move inventory 3x faster with instant notifications.",
      icon: "📦",
      metric: "3x faster inventory turnover"
    },
    {
      title: "Turn Casual Customers into VIPs",
      description: "Build customer loyalty with exclusive offers and member-only events. Increase customer lifetime value by 65%.",
      icon: "👑",
      metric: "65% higher lifetime value"
    },
    {
      title: "Stay Compliant Automatically",
      description: "Built-in compliance features for tobacco advertising regulations and age verification. Never worry about violations again.",
      icon: "✅",
      metric: "100% compliance guarantee"
    },
    {
      title: "Works with Your Existing Tools",
      description: "Connect with your POS system, CRM, and other business tools seamlessly. Setup in under 24 hours.",
      icon: "🔗",
      metric: "24-hour setup"
    }
  ];

  const clients = [
    { 
      name: "Anstead's Tobacco Co.", 
      industry: "Premium Cigars & Pipes",
      logo: "/clientlogos/logo-ansteads.png",
      description: "Established 1975",
      testimonial: `We'd been turned away by multiple SMS platforms because we sell tobacco. The first time we used ${config.name} to publicize an event? We had a record turnout!`
    },
    { 
      name: "Emerson's Cigars", 
      industry: "Premium Cigars",
      logo: "/clientlogos/logo-emersons.png",
      description: "Established 1975"
    },
    { 
      name: "101 Distributors", 
      industry: "Premium Distribution",
      logo: "/clientlogos/logo-101.png",
      description: "Premium Distribution"
    },
    { 
      name: "R&R Cigars", 
      industry: "The Cigar Mansion",
      logo: "/clientlogos/logo-rr.png",
      description: "Established 2012"
    },
    { 
      name: "Vintage", 
      industry: "Tobacco Retail",
      logo: "/clientlogos/logo-vintage.png",
      description: "Premium Tobacco"
    }
  ];

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description} user={user}>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 relative overflow-hidden">
        {/* Background cigar smoke image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src="/cigar.png" 
            alt="" 
            className="w-full h-full object-cover opacity-10"
            style={{ maxWidth: '800px', maxHeight: '600px' }}
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left space-y-6 md:space-y-8">
              <div className="inline-block">
                <span className={`bg-${colors.primary}-700/20 text-${colors.primary}-400 text-sm font-medium px-3 py-1 rounded-full border border-${colors.primary}-700/30`}>
                  Regulated Industry Approved
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                <span className={`bg-gradient-to-r from-white to-${colors.primary}-700 bg-clip-text text-transparent`}>
                  Text With Confidence.<br />
                  Rise Above Barriers.
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                Launch compliant SMS campaigns for tobacco, alcohol, and other regulated industries—approved 100% of the time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`/signup?platform=${config.name.toLowerCase()}`}
                  className={`inline-block bg-gradient-to-r ${colors.gradient} text-white px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300`}
                >
                  Get Started →
                </a>
                <a
                  href="/demo"
                  className={`inline-block border-2 border-${colors.primary}-700 text-${colors.primary}-600 px-8 py-4 rounded-lg text-xl font-black hover:bg-${colors.primary}-700 hover:text-white transition-all duration-300`}
                >
                  Book a Demo
                </a>
              </div>
            </div>

            {/* Right Column - Phone Mockup */}
            <div className="relative min-h-[280px] md:min-h-[500px] flex justify-center lg:justify-end">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900/70 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] h-[440px] sm:h-[560px] bg-black rounded-[36px] border-[8px] border-gray-700/80 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-6 bg-black flex items-center justify-center">
                    <div className="h-4 w-24 bg-gray-700/90 rounded-b-xl flex items-center justify-center">
                      <div className="w-2 h-2 bg-amber-600/60 rounded-full mr-3" />
                      <div className="w-1.5 h-1.5 bg-gray-400/40 rounded-full" />
                    </div>
                  </div>

                  <div className="absolute inset-0 mt-6">
                    <div className="h-full bg-[#111] p-2">
                      <div className={`h-12 bg-${colors.primary}-700 rounded-t-lg flex items-center px-4`}>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white text-xs">GN</span>
                        </div>
                        <div className="ml-3">
                          <div className="h-2.5 w-24 bg-white/90 rounded-full" />
                          <div className="h-2 w-16 bg-white/60 rounded-full mt-1.5" />
                        </div>
                      </div>

                      <div className="bg-[#161616] h-[calc(100%-48px)] rounded-b-lg p-3 overflow-hidden">
                        <div className="flex justify-end mb-4">
                          <div className={`bg-${colors.primary}-700 text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%] shadow-sm`}>
                            <p className="text-sm">
                              New compliance update: All age verification now automated. Your business stays protected! 🛡️
                            </p>
                            <p className="text-[9px] text-white/70 text-right mt-1">
                              2:34 PM
                            </p>
                          </div>
                        </div>

                        <div className="flex mb-4">
                          <div className="bg-gray-800 text-white rounded-2xl rounded-tl-sm p-3 max-w-[80%] shadow-sm">
                            <p className="text-sm">
                              Perfect! No more manual checks. This saves us hours every week. 👍
                            </p>
                            <p className="text-[9px] text-white/70 text-left mt-1">
                              2:36 PM
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-end mb-4">
                          <div className={`bg-${colors.primary}-700 text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%] shadow-sm`}>
                            <p className="text-sm">
                              Campaign sent to 500+ customers. 98% delivery rate, 0 compliance issues! 📊
                            </p>
                            <p className="text-[9px] text-white/70 text-right mt-1">
                              2:37 PM
                            </p>
                          </div>
                        </div>

                        <div className="flex mb-4">
                          <div className="bg-gray-800 text-white rounded-2xl rounded-tl-sm p-3 max-w-[80%] shadow-sm">
                            <p className="text-sm">
                              Incredible results! Our old platform would have blocked half these messages. 🚀
                            </p>
                            <p className="text-[9px] text-white/70 text-left mt-1">
                              2:38 PM
                            </p>
                          </div>
                        </div>

                        <div className="absolute bottom-3 inset-x-3">
                          <div className="flex items-center bg-gray-900 rounded-full px-4 py-2.5">
                            <div className="h-2 w-32 bg-gray-700 rounded-full" />
                            <div className={`ml-auto h-7 w-7 rounded-full bg-${colors.primary}-700 flex items-center justify-center`}>
                              <svg
                                className="h-3 w-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M3.4 20.4l17.45-7.48a1 1 0 000-1.84L3.4 3.6a.993.993 0 00-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className={`bg-black/40 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-${colors.primary}-700/20 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:border-${colors.primary}-600/40`}>
              <div className={`w-12 h-12 bg-${colors.primary}-700/20 rounded-lg flex items-center justify-center mb-4 border border-${colors.primary}-700/30`}>
                <span className={`text-${colors.primary}-400 text-2xl`}>🛡️</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Compliance Built-In
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Automatic age verification and regulatory compliance for tobacco, alcohol, and other regulated industries.
              </p>
            </div>

            <div className={`bg-black/40 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-${colors.primary}-700/20 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:border-${colors.primary}-600/40`}>
              <div className={`w-12 h-12 bg-${colors.primary}-700/20 rounded-lg flex items-center justify-center mb-4 border border-${colors.primary}-700/30`}>
                <span className={`text-${colors.primary}-400 text-2xl`}>📱</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Industry Approved
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Trusted by 500+ businesses in regulated industries. Never get blocked or banned again.
              </p>
            </div>

            <div className={`bg-black/40 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-${colors.primary}-700/20 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:border-${colors.primary}-600/40`}>
              <div className={`w-12 h-12 bg-${colors.primary}-700/20 rounded-lg flex items-center justify-center mb-4 border border-${colors.primary}-700/30`}>
                <span className={`text-${colors.primary}-400 text-2xl`}>⚡</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Setup in 24 Hours
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Get started immediately with our streamlined onboarding process and dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partnership Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className={`inline-block bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-${colors.primary}-700/20`}>
              <img 
                src="/pca-logo.png" 
                alt="PCA Premium Cigar Association Preferred Partner"
                className="h-16 mx-auto mb-4"
              />
              <h3 className={`text-lg font-semibold text-${colors.primary}-400 mb-2`}>PCA PREMIUM CIGAR ASSOCIATION</h3>
              <p className="text-white font-bold">Preferred Partner</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-black text-white mb-4">Trusted by Leading Cigar Businesses</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            From lounges to retailers to manufacturers - we serve the entire cigar industry
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="group">
                <div className={`bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-${colors.primary}-700/20 hover:border-${colors.primary}-700/40 transition-all duration-300 min-h-[140px] flex flex-col items-center justify-center`}>
                  {/* Client Logo */}
                  <div className="w-20 h-20 mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        // Fallback to letter if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback letter icon */}
                    <div className={`w-16 h-16 bg-${colors.primary}-700/20 rounded-lg flex items-center justify-center hidden`}>
                      <span className={`text-${colors.primary}-400 text-2xl font-bold`}>
                        {client.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold text-sm mb-1 leading-tight">{client.name}</div>
                    <div className="text-gray-400 text-xs mb-1">{client.industry}</div>
                    <div className={`text-${colors.primary}-400 text-xs opacity-75`}>{client.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <a
              href="/contact"
              className={`inline-block text-${colors.primary}-400 hover:text-${colors.primary}-300 transition-colors font-semibold`}
            >
              Join our growing list of satisfied clients →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-white mb-2">Anstead's Tobacco Company</h3>
              <p className="text-gray-400">Premium Cigars & Pipes</p>
            </div>
            <blockquote className="text-xl text-gray-300 text-center italic leading-relaxed">
              "We'd been turned away by multiple SMS platforms because we sell tobacco. The first time we used ${config.name} to publicize an event? We had a <span className="text-amber-400 font-bold">record turnout!</span>"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Real Example Messages Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">Real Messages That Drive Results</h2>
            <p className="text-xl text-gray-300">See how our clients use {config.name} to promote events and drive sales</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-amber-700/20">
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <p className="text-white text-sm">"Check out our Under $9 Cigar Wall at Cigar Barn in Sanford!"</p>
              </div>
              <p className="text-amber-400 text-xs font-semibold">Promotional Campaign</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-amber-700/20">
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <p className="text-white text-sm">"Mark your calendar March 14th at... Cigars..."</p>
              </div>
              <p className="text-amber-400 text-xs font-semibold">Event Announcement</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-amber-700/20">
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <p className="text-white text-sm">"Tomorrow in Garner at The Cigar Barn! Drew Estate is here!"</p>
              </div>
              <p className="text-amber-400 text-xs font-semibold">Brand Event</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-amber-700/20">
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <p className="text-white text-sm">"Ansteads Tobacco- It's almost here!! The 50th Anniversary celebration with Drew Estate and Willy Herrera. June 13th in Fayetteville."</p>
              </div>
              <p className="text-amber-400 text-xs font-semibold">Major Event Promotion</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-amber-700/20">
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <p className="text-white text-sm">"New arrivals this week! Stop by to see our latest premium selections."</p>
              </div>
              <p className="text-amber-400 text-xs font-semibold">Inventory Updates</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-amber-700/20">
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <p className="text-white text-sm">"Happy Hour specials today! 20% off all premium cigars from 4-7pm."</p>
              </div>
              <p className="text-amber-400 text-xs font-semibold">Time-Sensitive Offers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Features Section with Results-Focused Headlines */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Built for the Cigar Industry</h2>
            <p className="text-xl text-gray-300">Every feature designed specifically for cigar lounges, retailers, and manufacturers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20 hover:border-amber-700/40 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center text-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{feature.description}</p>
                <div className="bg-amber-700/10 border border-amber-700/20 rounded-lg p-3">
                  <p className="text-amber-400 text-sm font-semibold">✓ {feature.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Risk-Reversal Guarantee Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-900/20 to-green-800/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Risk-Free Trial - We Guarantee Results
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join hundreds of cigar businesses that stopped getting blocked and started getting results. 
            If you're not completely satisfied, we'll refund every penny.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-green-700/20">
              <div className="w-16 h-16 bg-green-700/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 text-3xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">30-Day Guarantee</h3>
              <p className="text-gray-300">Full refund if you're not completely satisfied. No questions asked.</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-green-700/20">
              <div className="w-16 h-16 bg-green-700/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Setup in 24 Hours</h3>
              <p className="text-gray-300">Start texting your customers immediately. Complete onboarding and training included.</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-green-700/20">
              <div className="w-16 h-16 bg-green-700/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 text-3xl">🚫</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Cancel Anytime</h3>
              <p className="text-gray-300">No long-term contracts. Cancel with 30 days notice if it's not working for you.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-700/20 to-amber-600/20 border border-amber-700/30 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Stop Getting Ghosted by SMS Platforms?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Join the only SMS platform that welcomes cigar businesses with open arms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="inline-block bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                See Live Demo
              </a>
              <a
                href={`/signup?platform=${config.name.toLowerCase()}`}
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-black hover:bg-white hover:text-amber-700 transition-all duration-300"
              >
                Start Free Trial
              </a>
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            Over 500 cigar businesses trust {config.name} • PCA Preferred Partner • SOC 2 Certified
          </p>
        </div>
      </section>
    </PercyTechLayout>
  );
} 