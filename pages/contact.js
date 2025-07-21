import React, { useState, useEffect } from 'react';
import { PercyTechLayout } from "@percytech/shared";
import { getSiteConfig } from "@percytech/shared";

export default function GnymbleContact() {
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
      console.log('Submitting form data:', formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      
      const responseData = await response.json();
      console.log('Response data:', responseData);

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
        console.error('Form submission failed:', responseData);
        
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
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description} user={user}>
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
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We love texting. We believe it's a powerful business communication tool.
          </p>
        </div>
      </section>

      {/* Text Us Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
            <h2 className="text-3xl font-black text-white mb-6">Text Us</h2>
            <p className="text-xl text-gray-300 mb-8">
              The fastest way to get in touch with us is through text messaging.
            </p>
            <a 
              href="sms:757-447-0202" 
              className="inline-block bg-white text-amber-700 px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              TEXT US at 757-447-0202
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Horizontal Layout */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
            <h2 className="text-3xl font-black text-white mb-6 text-center">Send us a message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
                <p className="text-green-400 font-semibold">✅ Thank you! We've received your message. Our team will contact you within 24 hours.</p>
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
              Have questions about our SMS platform? Want to learn more about how we can help your business?
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
                  placeholder="Tell us about your SMS needs and how we can help..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-amber-700 to-amber-600 text-white px-12 py-4 rounded-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PercyTechLayout>
  );
} 