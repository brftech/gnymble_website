import Stripe from 'stripe';
import { getSiteConfig } from '@percytech/shared';
import logger from '../../../lib/logger';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { 
      platform = 'gnymble',
      discountCode = '',
      customerEmail = '',
      successUrl = '',
      cancelUrl = ''
    } = req.body;

    // Validate required fields
    if (!customerEmail) {
      return res.status(400).json({ message: 'Customer email is required' });
    }

    // Get site config for dynamic naming
    const siteConfig = getSiteConfig(platform);

    // Define pricing based on platform
    const pricing = {
      gnymble: {
        priceId: process.env.STRIPE_GNYMBLE_PRICE_ID || 'price_1OqX8X2eZvKYlo2C1QqX8X2e',
        name: `${getSiteConfig('gnymble').name} Onboarding Plan`,
        description: getSiteConfig('gnymble').description
      },
      percymd: {
        priceId: process.env.STRIPE_PERCYMD_PRICE_ID || 'price_1OqX8X2eZvKYlo2C1QqX8X2e',
        name: `${getSiteConfig('percymd').name} Onboarding Plan`,
        description: getSiteConfig('percymd').description
      },
      percytext: {
        priceId: process.env.STRIPE_PERCYTEXT_PRICE_ID || 'price_1OqX8X2eZvKYlo2C1QqX8X2e',
        name: `${getSiteConfig('percytext').name} Onboarding Plan`,
        description: getSiteConfig('percytext').description
      }
    };

    const planConfig = pricing[platform] || pricing.gnymble;

    // Build line items
    const lineItems = [
      {
        price: planConfig.priceId,
        quantity: 1,
      }
    ];

    // Add discount if provided
    if (discountCode) {
      // For now, we'll just log the discount code and apply it later
      // Stripe doesn't support negative line items in subscription mode
      // We'll need to handle discounts through coupons or price adjustments
      console.log(`Discount code applied: ${discountCode}`);
    }

    // Get the base URL for success/cancel URLs
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                   (req.headers.host ? `https://${req.headers.host}` : 'http://localhost:3000');

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'subscription',
      success_url: successUrl || `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${baseUrl}/signup?platform=${platform}`,
      customer_email: customerEmail,
      metadata: {
        platform,
        discountCode,
        source: 'gnymble_website'
      },
      subscription_data: {
        metadata: {
          platform,
          discountCode,
          source: 'gnymble_website'
        }
      },
      billing_address_collection: 'required',
      allow_promotion_codes: true,
    });

    logger.info('Stripe checkout session created', { 
      sessionId: session.id, 
      platform, 
      customerEmail 
    });

    res.status(200).json({ 
      sessionId: session.id,
      url: session.url 
    });

  } catch (error) {
    logger.error('Stripe checkout session creation failed', { error });
    res.status(500).json({ 
      message: 'Failed to create checkout session',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
} 