export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // In a real implementation, you'd verify credentials against your database
    // For now, we'll create a mock user session
    // You should implement proper authentication here

    // Mock user data (replace with database lookup)
    const mockUser = {
      id: 'user_123',
      email: email,
      firstName: 'John',
      lastName: 'Doe',
      company: 'Example Corp',
      stripeCustomerId: 'cus_example123',
      subscription: 'professional'
    };

    // Create session data
    const sessionData = {
      id: mockUser.id,
      email: mockUser.email,
      firstName: mockUser.firstName,
      lastName: mockUser.lastName,
      company: mockUser.company,
      stripeCustomerId: mockUser.stripeCustomerId,
      subscription: mockUser.subscription,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
    };

    // Set session cookie
    const sessionCookie = Buffer.from(JSON.stringify(sessionData)).toString('base64');
    res.setHeader('Set-Cookie', `session=${sessionCookie}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${24 * 60 * 60}`);

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      user: mockUser
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Authentication failed' });
  }
} 