export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { 
      webhookType = 'sms',
      provider = 'twilio',
      simulateDelay = false 
    } = req.body;

    // Simulate processing delay if requested
    if (simulateDelay) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Generate test data based on webhook type
    let testData = {};

    switch (webhookType) {
      case 'sms':
        testData = {
          messageId: `msg_${Date.now()}`,
          from: '+1234567890',
          to: '+0987654321',
          body: 'This is a test SMS message from the webhook simulator',
          timestamp: new Date().toISOString(),
          status: 'delivered',
          provider
        };
        break;
      
      case 'delivery_status':
        testData = {
          messageId: `msg_${Date.now()}`,
          status: 'delivered',
          timestamp: new Date().toISOString(),
          provider
        };
        break;
      
      default:
        testData = {
          type: webhookType,
          timestamp: new Date().toISOString(),
          provider
        };
    }

    console.log('🧪 Webhook Simulator:', {
      webhookType,
      provider,
      testData
    });

    // Forward to appropriate webhook endpoint
    try {
      const webhookUrl = `${req.headers.host}/api/webhooks/${webhookType}`;
      
      const response = await fetch(`http://${webhookUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      });

      const result = await response.json();

      return res.status(200).json({
        success: true,
        message: 'Webhook simulation completed',
        simulatedData: testData,
        webhookResponse: result,
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      console.error('❌ Webhook Simulation Error:', error);
      return res.status(500).json({
        success: false,
        error: error.message,
        simulatedData: testData
      });
    }
  }

  // GET method for testing
  if (req.method === 'GET') {
    return res.status(200).json({
      message: 'Webhook Simulator is active',
      availableTypes: ['sms', 'delivery_status'],
      availableProviders: ['twilio', 'messagebird', 'generic'],
      usage: {
        method: 'POST',
        body: {
          webhookType: 'sms',
          provider: 'twilio',
          simulateDelay: false
        }
      }
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
} 