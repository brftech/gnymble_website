export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // For now, we'll use a simple session check
    // In production, you'd want to use NextAuth.js or a similar solution
    const session = req.cookies?.session;
    
    if (!session) {
      return res.status(200).json({ 
        isAuthenticated: false,
        user: null 
      });
    }

    // Decode session (in production, use proper JWT verification)
    let userData;
    try {
      userData = JSON.parse(Buffer.from(session, 'base64').toString());
    } catch (error) {
      return res.status(200).json({ 
        isAuthenticated: false,
        user: null 
      });
    }

    // Check if session is expired
    if (userData.expiresAt && new Date() > new Date(userData.expiresAt)) {
      return res.status(200).json({ 
        isAuthenticated: false,
        user: null 
      });
    }

    return res.status(200).json({
      isAuthenticated: true,
      user: {
        id: userData.id,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        company: userData.company,
        stripeCustomerId: userData.stripeCustomerId,
        subscription: userData.subscription
      }
    });

  } catch (error) {
    console.error('Auth check error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      isAuthenticated: false,
      user: null 
    });
  }
} 