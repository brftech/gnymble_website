import React, { useState } from 'react';
import { PercyTechLayout } from "../shared/components/PercyTechTheme";
import { getSiteConfig } from "../shared/config/PercyTechConfig";

export default function GnymbleContact() {
  const config = getSiteConfig("gnymble");
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    jobtitle: '',
    message: '',
    solution_interest: 'Gnymble'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          company: '',
          jobtitle: '',
          message: '',
          solution_interest: 'Gnymble'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description}>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 text-center">
        <h1 className="text-6xl font-black leading-tight mb-6">
          <span className="bg-gradient-to-r from-white to-orange-600 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Ready for enterprise-grade SMS? Let's discuss how Gnymble can help your regulated industry meet compliance requirements.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-600/20">
              <h2 className="text-3xl font-black text-white mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
                  <p className="text-green-400">Thank you! Your message has been sent successfully. Our sales team will contact you within 24 hours.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-700/30 rounded-lg">
                  <p className="text-red-400">There was an error sending your message. Please try again or contact us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-semibold text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-600 focus:outline-none transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-semibold text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-600 focus:outline-none transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-600 focus:outline-none transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-600 focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-600 focus:outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="jobtitle" className="block text-sm font-semibold text-gray-300 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobtitle"
                      name="jobtitle"
                      value={formData.jobtitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-600 focus:outline-none transition-colors"
                      placeholder="Your job title"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your compliance requirements and how Gnymble can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Contact Sales Team'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-600/20">
                <h3 className="text-2xl font-black text-white mb-6">Why Choose Gnymble?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Enterprise-grade compliance for regulated industries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">SOC 2 Type II certified security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Multi-level approval workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Complete audit trails and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Dedicated compliance support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-600/20">
                <h3 className="text-2xl font-black text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Sales Team</h4>
                    <p className="text-gray-300">sales@gnymble.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Compliance Support</h4>
                    <p className="text-gray-300">compliance@gnymble.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Emergency Support</h4>
                    <p className="text-gray-300">1-800-GNYMBLE</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-600/20">
                <h3 className="text-2xl font-black text-white mb-6">Industries We Serve</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-orange-600 mr-3">🏦</span>
                    <span className="text-gray-300">Financial Services</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-orange-600 mr-3">🏥</span>
                    <span className="text-gray-300">Healthcare</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-orange-600 mr-3">⚖️</span>
                    <span className="text-gray-300">Legal & Professional</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-orange-600 mr-3">🏭</span>
                    <span className="text-gray-300">Manufacturing</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-orange-600 mr-3">🎯</span>
                    <span className="text-gray-300">Regulated Markets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PercyTechLayout>
  );
} 