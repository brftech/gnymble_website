import { useState, useEffect } from 'react';
import { PercyTechLayout } from '@percytech/shared';

export default function Account() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [stripeDashboardUrl, setStripeDashboardUrl] = useState('');
  // Temporary hardcoded colors until import issue is resolved
  const colors = {
    primary: "amber",
    gradient: "from-amber-700 to-amber-600",
    border: "border-amber-700/20",
    hover: "hover:text-amber-600",
    active: "text-amber-600",
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/auth/check');
        if (response.ok) {
          const userData = await response.json();
          if (userData.isAuthenticated) {
            setUser(userData.user);
            // Fetch Stripe dashboard URL
            const stripeResponse = await fetch('/api/stripe/dashboard-url');
            if (stripeResponse.ok) {
              const { dashboardUrl } = await stripeResponse.json();
              setStripeDashboardUrl(dashboardUrl);
            }
          } else {
            window.location.href = '/login';
          }
        } else {
          window.location.href = '/login';
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        window.location.href = '/login';
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (isLoading) {
    return (
      <PercyTechLayout siteName="Gnymble">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
        </div>
      </PercyTechLayout>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <PercyTechLayout siteName="Gnymble" user={user}>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-black text-white mb-2">
              Welcome back, {user.firstName}!
            </h1>
            <p className="text-gray-300">
              Manage your Gnymble account and billing
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 mb-8 bg-black/20 backdrop-blur-sm rounded-lg p-1">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'platform', label: 'Platform', icon: '🚀' },
              { id: 'billing', label: 'Billing', icon: '💳' },
              { id: 'settings', label: 'Settings', icon: '⚙️' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={`bg-black/40 backdrop-blur-sm rounded-xl p-8 shadow-xl ${colors.border}`}>
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Account Overview</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className={`bg-gradient-to-br from-${colors.primary}-900/20 to-${colors.primary}-800/10 rounded-lg p-6 border border-${colors.primary}-700/30`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Messages Sent</h3>
                      <span className="text-2xl">📱</span>
                    </div>
                    <p className="text-3xl font-bold text-white mb-2">12,847</p>
                    <p className="text-sm text-gray-300">+23% from last month</p>
                  </div>

                  <div className={`bg-gradient-to-br from-${colors.primary}-900/20 to-${colors.primary}-800/10 rounded-lg p-6 border border-${colors.primary}-700/30`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Delivery Rate</h3>
                      <span className="text-2xl">✅</span>
                    </div>
                    <p className="text-3xl font-bold text-white mb-2">98.7%</p>
                    <p className="text-sm text-gray-300">Industry leading</p>
                  </div>

                  <div className={`bg-gradient-to-br from-${colors.primary}-900/20 to-${colors.primary}-800/10 rounded-lg p-6 border border-${colors.primary}-700/30`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Active Campaigns</h3>
                      <span className="text-2xl">🎯</span>
                    </div>
                    <p className="text-3xl font-bold text-white mb-2">7</p>
                    <p className="text-sm text-gray-300">3 scheduled for today</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                  <div className={`bg-gray-900/50 rounded-lg p-6 border border-gray-700/30`}>
                    <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      {[
                        { action: 'Campaign sent', time: '2 hours ago', status: 'success' },
                        { action: 'New contact added', time: '4 hours ago', status: 'info' },
                        { action: 'Payment processed', time: '1 day ago', status: 'success' },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            activity.status === 'success' ? 'bg-green-500' : 'bg-blue-500'
                          }`}></div>
                          <span className="text-gray-300">{activity.action}</span>
                          <span className="text-gray-500 text-sm ml-auto">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`bg-gray-900/50 rounded-lg p-6 border border-gray-700/30`}>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className={`w-full bg-gradient-to-r ${colors.gradient} text-white py-2 px-4 rounded-lg font-medium hover:scale-105 transition-all`}>
                        Send New Message
                      </button>
                      <button className={`w-full bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all`}>
                        Create Campaign
                      </button>
                      <button className={`w-full bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all`}>
                        View Analytics
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'platform' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Platform Access</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`bg-gradient-to-br from-${colors.primary}-900/20 to-${colors.primary}-800/10 rounded-lg p-6 border border-${colors.primary}-700/30`}>
                    <h3 className="text-xl font-semibold text-white mb-4">Gnymble Dashboard</h3>
                    <p className="text-gray-300 mb-4">
                      Access your SMS platform, manage campaigns, and view analytics.
                    </p>
                    <button className={`bg-gradient-to-r ${colors.gradient} text-white py-2 px-4 rounded-lg font-medium hover:scale-105 transition-all`}>
                      Open Dashboard
                    </button>
                  </div>

                  <div className={`bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-lg p-6 border border-blue-700/30`}>
                    <h3 className="text-xl font-semibold text-white mb-4">Stripe Dashboard</h3>
                    <p className="text-gray-300 mb-4">
                      Manage your billing, view invoices, and update payment methods.
                    </p>
                    {stripeDashboardUrl ? (
                      <a
                        href={stripeDashboardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-all"
                      >
                        Open Stripe Dashboard
                      </a>
                    ) : (
                      <button className="bg-gray-600 text-white py-2 px-4 rounded-lg font-medium cursor-not-allowed">
                        Loading...
                      </button>
                    )}
                  </div>
                </div>

                <div className={`bg-gray-900/50 rounded-lg p-6 border border-gray-700/30 mt-6`}>
                  <h3 className="text-lg font-semibold text-white mb-4">API Access</h3>
                  <p className="text-gray-300 mb-4">
                    Use our API to integrate Gnymble into your existing systems.
                  </p>
                  <div className="flex space-x-3">
                    <button className={`bg-gradient-to-r ${colors.gradient} text-white py-2 px-4 rounded-lg font-medium hover:scale-105 transition-all`}>
                      View API Docs
                    </button>
                    <button className="bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all">
                      Generate API Key
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Billing & Subscription</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`bg-gradient-to-br from-${colors.primary}-900/20 to-${colors.primary}-800/10 rounded-lg p-6 border border-${colors.primary}-700/30`}>
                    <h3 className="text-xl font-semibold text-white mb-4">Current Plan</h3>
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-white">Professional</p>
                      <p className="text-gray-300">$99/month</p>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300 mb-4">
                      <li>✓ 10,000 messages/month</li>
                      <li>✓ Advanced analytics</li>
                      <li>✓ API access</li>
                      <li>✓ Priority support</li>
                    </ul>
                    <button className="bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all">
                      Change Plan
                    </button>
                  </div>

                  <div className={`bg-gray-900/50 rounded-lg p-6 border border-gray-700/30`}>
                    <h3 className="text-xl font-semibold text-white mb-4">Payment Method</h3>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-sm font-bold">V</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Visa ending in 4242</p>
                        <p className="text-gray-300 text-sm">Expires 12/25</p>
                      </div>
                    </div>
                    <button className="bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all">
                      Update Payment Method
                    </button>
                  </div>
                </div>

                <div className={`bg-gray-900/50 rounded-lg p-6 border border-gray-700/30`}>
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Invoices</h3>
                  <div className="space-y-3">
                    {[
                      { date: 'Dec 1, 2024', amount: '$99.00', status: 'Paid' },
                      { date: 'Nov 1, 2024', amount: '$99.00', status: 'Paid' },
                      { date: 'Oct 1, 2024', amount: '$99.00', status: 'Paid' },
                    ].map((invoice, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700/30 last:border-b-0">
                        <span className="text-gray-300">{invoice.date}</span>
                        <span className="text-white font-medium">{invoice.amount}</span>
                        <span className="text-green-400 text-sm">{invoice.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`bg-gray-900/50 rounded-lg p-6 border border-gray-700/30`}>
                    <h3 className="text-lg font-semibold text-white mb-4">Profile Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                        <input
                          type="text"
                          defaultValue={`${user.firstName} ${user.lastName || ''}`}
                          className={`w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-${colors.primary}-500`}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input
                          type="email"
                          defaultValue={user.email}
                          className={`w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-${colors.primary}-500`}
                        />
                      </div>
                      <button className={`bg-gradient-to-r ${colors.gradient} text-white py-2 px-4 rounded-lg font-medium hover:scale-105 transition-all`}>
                        Update Profile
                      </button>
                    </div>
                  </div>

                  <div className={`bg-gray-900/50 rounded-lg p-6 border border-gray-700/30`}>
                    <h3 className="text-lg font-semibold text-white mb-4">Security</h3>
                    <div className="space-y-4">
                      <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all text-left">
                        Change Password
                      </button>
                      <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all text-left">
                        Enable Two-Factor Auth
                      </button>
                      <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all text-left">
                        View Login History
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`bg-red-900/20 border border-red-700/30 rounded-lg p-6`}>
                  <h3 className="text-lg font-semibold text-red-300 mb-4">Danger Zone</h3>
                  <p className="text-red-300 mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <button className="bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-all">
                    Delete Account
                  </button>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleLogout}
                    className="bg-gray-800 text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-700 transition-all"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PercyTechLayout>
  );
} 