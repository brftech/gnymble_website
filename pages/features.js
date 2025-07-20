import React from 'react';
import { PercyTechLayout } from "../shared/components/PercyTechTheme";
import { getSiteConfig } from "../shared/config/PercyTechConfig";

export default function GnymbleFeatures() {
  const config = getSiteConfig("gnymble");

  const mainFeatures = [
    {
      title: "Cigar Industry Approved",
      description: "Built specifically for tobacco businesses. No more getting blocked or banned for mentioning cigars, events, or promotions.",
      icon: "🚬",
      details: [
        "Tobacco-friendly messaging platform",
        "No content restrictions on cigar-related terms",
        "Industry-specific compliance built-in",
        "Approved by PCA Premium Cigar Association"
      ]
    },
    {
      title: "Event Promotion",
      description: "Promote cigar events, brand launches, and special occasions without restrictions or fear of being flagged.",
      icon: "📅",
      details: [
        "Brand launch announcements",
        "Event invitations and reminders",
        "Special occasion promotions",
        "Limited edition releases"
      ]
    },
    {
      title: "Inventory Updates",
      description: "Keep customers informed about new arrivals, limited editions, and special releases in real-time.",
      icon: "📦",
      details: [
        "New arrival notifications",
        "Limited edition alerts",
        "Restock announcements",
        "Special release countdowns"
      ]
    },
    {
      title: "Loyalty Programs",
      description: "Build customer loyalty with exclusive offers, member-only events, and VIP notifications.",
      icon: "👑",
      details: [
        "VIP member communications",
        "Exclusive offer notifications",
        "Member-only event invites",
        "Loyalty point updates"
      ]
    },
    {
      title: "Compliance Ready",
      description: "Built-in compliance features for tobacco advertising regulations and age verification requirements.",
      icon: "✅",
      details: [
        "Age verification integration",
        "Tobacco advertising compliance",
        "Opt-out management",
        "Regulatory reporting"
      ]
    },
    {
      title: "Easy Integration",
      description: "Connect with your POS system, CRM, and other business tools seamlessly.",
      icon: "🔗",
      details: [
        "POS system integration",
        "CRM connectivity",
        "E-commerce platform sync",
        "API access for custom solutions"
      ]
    }
  ];

  const technicalFeatures = [
    {
      title: "Two-Way Messaging",
      description: "Engage in real conversations with your customers through interactive SMS.",
      icon: "💬"
    },
    {
      title: "Bulk SMS Campaigns",
      description: "Send targeted campaigns to specific customer segments or your entire database.",
      icon: "📢"
    },
    {
      title: "Automated Workflows",
      description: "Set up automated messaging sequences for events, follow-ups, and customer engagement.",
      icon: "⚙️"
    },
    {
      title: "Analytics & Reporting",
      description: "Track message delivery, open rates, and customer engagement with detailed analytics.",
      icon: "📊"
    },
    {
      title: "Contact Management",
      description: "Organize and segment your customer database for targeted messaging campaigns.",
      icon: "👥"
    },
    {
      title: "Mobile App",
      description: "Manage your SMS campaigns on the go with our mobile application.",
      icon: "📱"
    }
  ];

  const useCases = [
    {
      title: "Cigar Lounges",
      description: "Perfect for lounges looking to promote events, new arrivals, and member communications.",
      examples: [
        "Event announcements and reminders",
        "New cigar arrivals",
        "Member-only specials",
        "Happy hour promotions"
      ]
    },
    {
      title: "Tobacco Retailers",
      description: "Ideal for retailers managing inventory, promotions, and customer relationships.",
      examples: [
        "Inventory updates and restocks",
        "Promotional campaigns",
        "Customer loyalty programs",
        "Brand launch events"
      ]
    },
    {
      title: "Cigar Manufacturers",
      description: "Essential for manufacturers launching new products and managing brand events.",
      examples: [
        "New product launches",
        "Limited edition releases",
        "Brand ambassador events",
        "Trade show announcements"
      ]
    }
  ];

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description}>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 text-center">
        <h1 className="text-6xl font-black leading-tight mb-6">
          <span className="bg-gradient-to-r from-white to-amber-700 bg-clip-text text-transparent">
            Built for the Cigar Industry
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Every feature designed specifically for cigar lounges, retailers, and manufacturers. 
          No more getting blocked, banned, or ignored by traditional SMS platforms.
        </p>
      </section>

      {/* Main Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Core Features</h2>
            <p className="text-xl text-gray-300">Everything you need to reach your customers without restrictions</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20 hover:border-amber-700/40 transition-all duration-300">
                <div className="w-16 h-16 bg-amber-700/20 rounded-xl flex items-center justify-center text-3xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-300">
                      <span className="text-amber-400 mr-3">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Technical Features</h2>
            <p className="text-xl text-gray-300">Powerful tools to manage your SMS communications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-amber-700/20 hover:border-amber-700/40 transition-all duration-300">
                <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center text-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Perfect for Your Business</h2>
            <p className="text-xl text-gray-300">Tailored solutions for every type of cigar business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-gray-300 text-sm">
                      <span className="text-amber-400 mr-2">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-r from-amber-700 to-amber-600 text-white">
        <h2 className="text-4xl font-black mb-6">Ready to Get Started?</h2>
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
            Start Free Trial
          </a>
        </div>
      </section>
    </PercyTechLayout>
  );
} 