export default async function handler(req, res) {
  // Handle CORS for webhook testing
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { 
        messageId, 
        from, 
        to, 
        body, 
        timestamp, 
        status,
        provider = 'unknown'
      } = req.body;

      console.log('📱 SMS Webhook Received:', {
        messageId,
        from,
        to,
        body: body?.substring(0, 50) + (body?.length > 50 ? '...' : ''),
        timestamp,
        status,
        provider
      });

      // Log to file for debugging
      const logEntry = {
        timestamp: new Date().toISOString(),
        type: 'sms_webhook',
        data: req.body
      };

      console.log('📝 Log Entry:', JSON.stringify(logEntry, null, 2));

      // Process based on provider
      switch (provider) {
        case 'twilio':
          // Handle Twilio-specific webhook format
          break;
        case 'messagebird':
          // Handle MessageBird-specific webhook format
          break;
        default:
          // Generic webhook processing
          break;
      }

      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: 'Webhook processed successfully',
        receivedAt: new Date().toISOString()
      });

    } catch (error) {
      console.error('❌ SMS Webhook Error:', error);
      return res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  }

  // GET method for testing
  if (req.method === 'GET') {
    return res.status(200).json({
      message: 'SMS Webhook endpoint is active',
      timestamp: new Date().toISOString(),
      methods: ['POST', 'GET'],
      testUrl: `${req.headers.host}${req.url}`
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
} 