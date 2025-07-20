import { useState, useEffect } from 'react';
import Layout from "../components/Layout";

export default function Integrations() {
  const [healthStatus, setHealthStatus] = useState(null);
  const [webhookLogs, setWebhookLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch health status
  const fetchHealthStatus = async () => {
    try {
      const response = await fetch('/api/integrations/health');
      const data = await response.json();
      setHealthStatus(data);
    } catch (error) {
      console.error('Health check failed:', error);
    }
  };

  // Test webhook
  const testWebhook = async (webhookType, provider) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/test/webhook-simulator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          webhookType,
          provider,
          simulateDelay: false
        })
      });

      const result = await response.json();
      
      setWebhookLogs(prev => [{
        id: Date.now(),
        timestamp: new Date().toISOString(),
        type: webhookType,
        provider,
        success: result.success,
        data: result
      }, ...prev.slice(0, 9)]); // Keep last 10 logs

    } catch (error) {
      console.error('Webhook test failed:', error);
      setWebhookLogs(prev => [{
        id: Date.now(),
        timestamp: new Date().toISOString(),
        type: webhookType,
        provider,
        success: false,
        error: error.message
      }, ...prev.slice(0, 9)]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHealthStatus();
    const interval = setInterval(fetchHealthStatus, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black mb-4 text-secondary">Integration Testing Dashboard</h1>
            <p className="text-xl text-secondary-dark">
              Monitor and test your SMS integrations in real-time
            </p>
          </div>

          {/* Health Status */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-primary/20">
              <h2 className="text-2xl font-black mb-4 text-secondary">System Health</h2>
              {healthStatus ? (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">Status:</span>
                    <span className={`font-semibold ${healthStatus.status === 'healthy' ? 'text-green-400' : 'text-red-400'}`}>
                      {healthStatus.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">Uptime:</span>
                    <span className="text-secondary">{Math.floor(healthStatus.uptime)}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">Environment:</span>
                    <span className="text-secondary">{healthStatus.environment}</span>
                  </div>
                </div>
              ) : (
                <p className="text-secondary-dark">Loading...</p>
              )}
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-primary/20">
              <h2 className="text-2xl font-black mb-4 text-secondary">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={() => testWebhook('sms', 'twilio')}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary to-primary-light text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50"
                >
                  {isLoading ? 'Testing...' : 'Test SMS Webhook'}
                </button>
                <button
                  onClick={() => testWebhook('delivery_status', 'twilio')}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50"
                >
                  {isLoading ? 'Testing...' : 'Test Delivery Status'}
                </button>
                <button
                  onClick={fetchHealthStatus}
                  className="w-full bg-gradient-to-r from-green-500 to-green-400 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Refresh Health
                </button>
              </div>
            </div>
          </div>

          {/* Webhook Logs */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-primary/20">
            <h2 className="text-2xl font-black mb-4 text-secondary">Recent Webhook Activity</h2>
            {webhookLogs.length > 0 ? (
              <div className="space-y-3">
                {webhookLogs.map((log) => (
                  <div key={log.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          log.success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {log.success ? 'SUCCESS' : 'ERROR'}
                        </span>
                        <span className="text-secondary font-semibold">{log.type}</span>
                        <span className="text-secondary-dark text-sm">{log.provider}</span>
                      </div>
                      <span className="text-secondary-dark text-sm">
                        {new Date(log.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    {log.error && (
                      <p className="text-red-400 text-sm">{log.error}</p>
                    )}
                    {log.data && (
                      <details className="mt-2">
                        <summary className="text-secondary-dark text-sm cursor-pointer">View Details</summary>
                        <pre className="mt-2 text-xs text-secondary-dark bg-gray-900 p-2 rounded overflow-x-auto">
                          {JSON.stringify(log.data, null, 2)}
                        </pre>
                      </details>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-secondary-dark">No webhook activity yet. Try testing a webhook!</p>
            )}
          </div>

          {/* API Endpoints */}
          <div className="mt-8 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-primary/20">
            <h2 className="text-2xl font-black mb-4 text-secondary">Available Endpoints</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-secondary mb-2">SMS Webhook</h3>
                <p className="text-secondary-dark text-sm mb-2">POST /api/webhooks/sms</p>
                <p className="text-secondary-dark text-xs">Receives SMS delivery notifications and status updates</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-secondary mb-2">Health Check</h3>
                <p className="text-secondary-dark text-sm mb-2">GET /api/integrations/health</p>
                <p className="text-secondary-dark text-xs">System health and integration status</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-secondary mb-2">Webhook Simulator</h3>
                <p className="text-secondary-dark text-sm mb-2">POST /api/test/webhook-simulator</p>
                <p className="text-secondary-dark text-xs">Test webhooks without external services</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-secondary mb-2">Demo Form</h3>
                <p className="text-secondary-dark text-sm mb-2">POST /api/demo</p>
                <p className="text-secondary-dark text-xs">Process demo request submissions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 