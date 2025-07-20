export default async function handler(req, res) {
  if (req.method === 'GET') {
    const healthStatus = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      integrations: {
        sms: {
          status: 'active',
          endpoint: '/api/webhooks/sms',
          methods: ['POST', 'GET']
        },
        demo: {
          status: 'active',
          endpoint: '/api/demo',
          methods: ['POST']
        }
      },
      server: {
        host: req.headers.host,
        userAgent: req.headers['user-agent'],
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
      }
    };

    return res.status(200).json(healthStatus);
  }

  return res.status(405).json({ error: 'Method not allowed' });
} 