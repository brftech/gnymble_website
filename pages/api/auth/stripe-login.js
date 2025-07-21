import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // First, try to find the customer in Stripe
    let customer;
    try {
      const customers = await stripe.customers.list({
        email: email,
        limit: 1
      });
      
      customer = customers.data[0];
    } catch (error) {
      console.error('Stripe customer lookup error:', error);
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (!customer) {
      return res.status(401).json({ error: 'No account found with this email' });
    }

    // In a real implementation, you'd verify the password against your database
    // For now, we'll assume the credentials are valid if the customer exists
    // You should implement proper password verification here

    // Create a login link for the customer to access their Stripe dashboard
    try {
      const loginLink = await stripe.accounts.createLoginLink(
        customer.id, // This should be the connected account ID if using Connect
        {
          redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/account?stripe_auth=success`
        }
      );

      // Create a session for the user
      const sessionData = {
        id: customer.id,
        email: customer.email,
        firstName: customer.name?.split(' ')[0] || '',
        lastName: customer.name?.split(' ').slice(1).join(' ') || '',
        company: customer.metadata?.company || '',
        stripeCustomerId: customer.id,
        subscription: customer.metadata?.subscription || 'basic',
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
      };

      // Set session cookie
      const sessionCookie = Buffer.from(JSON.stringify(sessionData)).toString('base64');
      res.setHeader('Set-Cookie', `session=${sessionCookie}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${24 * 60 * 60}`);

      return res.status(200).json({
        success: true,
        authUrl: loginLink.url,
        message: 'Redirecting to Stripe dashboard...'
      });

    } catch (error) {
      console.error('Stripe login link creation error:', error);
      
      // Fallback: create session without Stripe dashboard redirect
      const sessionData = {
        id: customer.id,
        email: customer.email,
        firstName: customer.name?.split(' ')[0] || '',
        lastName: customer.name?.split(' ').slice(1).join(' ') || '',
        company: customer.metadata?.company || '',
        stripeCustomerId: customer.id,
        subscription: customer.metadata?.subscription || 'basic',
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      };

      const sessionCookie = Buffer.from(JSON.stringify(sessionData)).toString('base64');
      res.setHeader('Set-Cookie', `session=${sessionCookie}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${24 * 60 * 60}`);

      return res.status(200).json({
        success: true,
        message: 'Login successful'
      });
    }

  } catch (error) {
    console.error('Stripe login error:', error);
    return res.status(500).json({ error: 'Authentication failed' });
  }
} 