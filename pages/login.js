import { useState, useEffect } from 'react';
import { PercyTechLayout } from '@percytech/shared';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isStripeAuth, setIsStripeAuth] = useState(false);
  // Temporary hardcoded colors until import issue is resolved
  const colors = {
    primary: "amber",
    gradient: "from-amber-700 to-amber-600",
    border: "border-amber-700/20",
    hover: "hover:text-amber-600",
    active: "text-amber-600",
  };

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        if (response.ok) {
          const user = await response.json();
          if (user.isAuthenticated) {
            window.location.href = '/account';
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };

    checkAuth();
  }, []);

  // Handle Stripe authentication
  const handleStripeAuth = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/auth/stripe-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to Stripe's hosted authentication
        if (data.authUrl) {
          window.location.href = data.authUrl;
        } else {
          // Direct login successful
          window.location.href = '/account';
        }
      } else {
        setError(data.error || 'Authentication failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle regular login
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = '/account';
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PercyTechLayout siteName="Gnymble">
      <div className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-300">
              Sign in to your Gnymble account
            </p>
          </div>

          <div className={`bg-black/40 backdrop-blur-sm rounded-xl p-8 shadow-xl ${colors.border}`}>
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className={`bg-red-900/20 border border-red-700/30 text-red-300 px-4 py-3 rounded-lg text-sm`}>
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-900/50 border ${colors.border} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-${colors.primary}-500 focus:border-transparent transition-all`}
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-900/50 border ${colors.border} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-${colors.primary}-500 focus:border-transparent transition-all`}
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="stripe-auth"
                    name="stripe-auth"
                    type="checkbox"
                    checked={isStripeAuth}
                    onChange={(e) => setIsStripeAuth(e.target.checked)}
                    className={`h-4 w-4 text-${colors.primary}-600 focus:ring-${colors.primary}-500 border-gray-600 rounded bg-gray-900`}
                  />
                  <label htmlFor="stripe-auth" className="ml-2 block text-sm text-gray-300">
                    Use Stripe account credentials
                  </label>
                </div>
              </div>

              <button
                type="submit"
                onClick={isStripeAuth ? handleStripeAuth : undefined}
                disabled={isLoading}
                className={`w-full bg-gradient-to-r ${colors.gradient} text-white py-3 px-4 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Don't have an account?{' '}
                <a
                  href="/signup"
                  className={`text-${colors.primary}-400 hover:text-${colors.primary}-300 transition-colors font-medium`}
                >
                  Sign up
                </a>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700/30">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-3">
                  Secure authentication powered by Stripe
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.831 3.47 1.426 3.47 2.338 0 .914-.796 1.431-2.127 1.431-1.72 0-4.516-.924-6.378-2.168l-.9 5.555C6.203 22.99 9.077 24 12.165 24c2.469 0 4.543-.624 5.988-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.892z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400">
                    Single Sign-On with Stripe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PercyTechLayout>
  );
} 