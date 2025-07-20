import React from 'react';
import { PercyTechLayout, PercyTechHero } from "../shared/components/PercyTechTheme";
import { getSiteConfig } from "../shared/config/PercyTechConfig";

export default function GnymbleHome() {
  const config = getSiteConfig("gnymble");

  const features = [
    {
      title: "Cigar Industry Approved",
      description: "Built specifically for tobacco businesses. No more getting blocked or banned for mentioning cigars.",
      icon: "🚬"
    },
    {
      title: "Event Promotion",
      description: "Promote cigar events, brand launches, and special occasions without restrictions.",
      icon: "📅"
    },
    {
      title: "Inventory Updates",
      description: "Keep customers informed about new arrivals, limited editions, and special releases.",
      icon: "📦"
    },
    {
      title: "Loyalty Programs",
      description: "Build customer loyalty with exclusive offers, member-only events, and VIP notifications.",
      icon: "👑"
    },
    {
      title: "Compliance Ready",
      description: "Built-in compliance features for tobacco advertising regulations and age verification.",
      icon: "✅"
    },
    {
      title: "Easy Integration",
      description: "Connect with your POS system, CRM, and other business tools seamlessly.",
      icon: "🔗"
    }
  ];

  const clients = [
    { 
      name: "Anstead's Tobacco Co.", 
      industry: "Premium Cigars & Pipes",
      logo: "/clientlogos/logo-ansteads.png",
      description: "Established 1975",
      testimonial: "We'd been turned away by multiple SMS platforms because we sell tobacco. The first time we used Gnymble to publicize an event? We had a record turnout!"
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
    <PercyTechLayout siteName={config.name} siteDescription={config.description}>
      {/* Hero Section */}
      <PercyTechHero
        title="Compliant SMS Cigar Texting"
        subtitle="Finally. A texting platform that won't ghost the cigar industry. Built for lounges, retailers, and manufacturers who've been blocked, banned, and ignored by traditional SMS platforms."
        ctaText="Request Demo"
        ctaLink="/demo"
        siteName={config.name}
      />

      {/* Industry Partnership Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-amber-700/20">
              <img 
                src="/pca-logo.png" 
                alt="PCA Premium Cigar Association Preferred Partner"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-amber-400 mb-2">PCA PREMIUM CIGAR ASSOCIATION</h3>
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
                 <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20 hover:border-amber-700/40 transition-all duration-300 min-h-[140px] flex flex-col items-center justify-center">
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
                     <div className="w-16 h-16 bg-amber-700/20 rounded-lg flex items-center justify-center hidden">
                       <span className="text-amber-400 text-2xl font-bold">
                         {client.name.charAt(0)}
                       </span>
                     </div>
                   </div>
                   <div className="text-center">
                     <div className="text-white font-semibold text-sm mb-1 leading-tight">{client.name}</div>
                     <div className="text-gray-400 text-xs mb-1">{client.industry}</div>
                     <div className="text-amber-400 text-xs opacity-75">{client.description}</div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
          
          <div className="mt-12">
            <a
              href="/contact"
              className="inline-block text-amber-400 hover:text-amber-300 transition-colors font-semibold"
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
              "We'd been turned away by multiple SMS platforms because we sell tobacco. The first time we used Gnymble to publicize an event? We had a <span className="text-amber-400 font-bold">record turnout!</span>"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Real Example Messages Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">Real Messages That Drive Results</h2>
            <p className="text-xl text-gray-300">See how our clients use Gnymble to promote events and drive sales</p>
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

      {/* Features Section */}
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
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-r from-amber-700 to-amber-600 text-white">
        <h2 className="text-4xl font-black mb-6">Ready to Stop Getting Ghosted?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join the cigar businesses already using Gnymble to reach their customers without restrictions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/demo"
            className="inline-block bg-white text-amber-700 px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Request Demo
          </a>
          <a
            href="/signup?platform=gnymble"
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-black hover:bg-white hover:text-amber-700 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </section>
    </PercyTechLayout>
  );
} 