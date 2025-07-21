import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get user session
    const session = req.cookies?.session;
    
    if (!session) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    // Decode session
    let userData;
    try {
      userData = JSON.parse(Buffer.from(session, 'base64').toString());
    } catch (error) {
      return res.status(401).json({ error: 'Invalid session' });
    }

    if (!userData.stripeCustomerId) {
      return res.status(400).json({ error: 'No Stripe customer ID found' });
    }

    try {
      // Create a login link for the customer
      const loginLink = await stripe.accounts.createLoginLink(
        userData.stripeCustomerId,
        {
          redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/account?stripe_auth=success`
        }
      );

      return res.status(200).json({
        dashboardUrl: loginLink.url
      });

    } catch (error) {
      console.error('Stripe dashboard URL creation error:', error);
      
      // Fallback: return a generic Stripe dashboard URL
      return res.status(200).json({
        dashboardUrl: 'https://dashboard.stripe.com'
      });
    }

  } catch (error) {
    console.error('Dashboard URL error:', error);
    return res.status(500).json({ error: 'Failed to generate dashboard URL' });
  }
} 