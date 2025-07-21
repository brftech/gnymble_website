import React, { useState } from 'react';
import { PercyTechLayout } from "@percytech/shared";
import { getSiteConfig } from "@percytech/shared";

export default function GnymbleDemo() {
  const config = getSiteConfig("gnymble");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

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
    setValidationErrors({});

    try {
      console.log('Submitting demo form data:', formData);
      
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Demo response status:', response.status);
      
      const responseData = await response.json();
      console.log('Demo response data:', responseData);

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          jobTitle: '',
          message: ''
        });
      } else {
        console.error('Demo form submission failed:', responseData);
        
        // Handle duplicate email case
        if (response.status === 409 && responseData.isDuplicate) {
          setSubmitStatus('duplicate');
        } else {
          setSubmitStatus('error');
          if (responseData.errors) {
            setValidationErrors(responseData.errors);
          }
        }
      }
    } catch (error) {
      console.error('Error submitting demo form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description}>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 text-center relative overflow-hidden">
        {/* Background cigar smoke image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src="/cigar.png" 
            alt="" 
            className="object-contain opacity-10"
            style={{ width: '400px', height: '300px' }}
          />
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10">
          <h1 className="text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-white to-amber-700 bg-clip-text text-transparent">
              See {config.name} in Action
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience how {config.name} transforms SMS communications for regulated industries. 
            Get a personalized demo tailored to your compliance needs.
          </p>
        </div>
      </section>

      {/* Demo Form Section - Horizontal Layout */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
            <h2 className="text-3xl font-black text-white mb-6 text-center">Request Your Demo</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
                <p className="text-green-400 font-semibold">✅ Thank you! We've received your demo request. Our team will contact you within 24 hours to schedule your personalized demo.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-amber-900/20 border border-amber-700/30 rounded-lg">
                <p className="text-amber-400 font-semibold">❌ Please fix the following errors:</p>
                <ul className="mt-2 text-amber-300 text-sm">
                  {Object.entries(validationErrors).map(([field, error]) => (
                    <li key={field}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {submitStatus === 'duplicate' && (
              <div className="mb-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
                <p className="text-blue-400 font-semibold">ℹ️ Email Already Registered</p>
                <p className="text-blue-300 text-sm mt-2">
                  This email address is already registered in our system. You can:
                </p>
                <ul className="mt-2 text-blue-300 text-sm">
                  <li>• Use a different email address</li>
                  <li>• Contact us directly at <a href="mailto:info@gnymble.com" className="text-blue-400 hover:text-blue-300 underline">info@gnymble.com</a></li>
                  <li>• Call us at <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300 underline">(123) 456-7890</a></li>
                </ul>
              </div>
            )}
            
            <p className="text-gray-300 mb-8 text-center">
              Tell us about your needs and we'll customize a demo just for you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              {/* Row 2: Email and Phone */}
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Row 3: Company and Job Title */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-300 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors"
                    placeholder="Your job title"
                  />
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your SMS needs and compliance requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-amber-700 to-amber-600 text-white px-12 py-4 rounded-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Demo Process Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-6">What You'll See</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our personalized demo shows you exactly how {config.name} can work for your specific industry and compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20 text-center">
              <div className="w-16 h-16 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Industry-Specific Setup</h3>
              <p className="text-gray-300 text-sm">See {config.name} configured for your specific industry and compliance needs.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20 text-center">
              <div className="w-16 h-16 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-3xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Integration Walkthrough</h3>
              <p className="text-gray-300 text-sm">See how {config.name} integrates with your existing tools and workflows.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20 text-center">
              <div className="w-16 h-16 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Compliance Dashboard</h3>
              <p className="text-gray-300 text-sm">Explore our compliance monitoring and reporting features in action.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20 text-center">
              <div className="w-16 h-16 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Q&A Session</h3>
              <p className="text-gray-300 text-sm">Get answers to your specific questions about implementation and compliance.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-amber-700/10 to-transparent rounded-xl p-8 border border-amber-700/20 inline-block">
              <h3 className="text-2xl font-bold text-white mb-4">Can't wait for a demo?</h3>
              <p className="text-gray-300 mb-6">
                Start exploring {config.name} right now with our free trial.
              </p>
              <a 
                href={`/signup?platform=${config.name.toLowerCase()}`}
                className="inline-block bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>
    </PercyTechLayout>
  );
} 