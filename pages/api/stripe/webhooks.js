import Stripe from 'stripe';
import { logger } from '../../../lib/logger';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Disable body parsing for Stripe webhooks to get raw body
export const config = { 
  api: { 
    bodyParser: false 
  } 
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];

  let event;

  try {
    // Get raw body for webhook verification
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    logger.error('Webhook signature verification failed', { error: err.message });
    return res.status(400).json({ message: 'Webhook signature verification failed' });
  }

  try {
    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        await handleCheckoutSessionCompleted(session);
        break;
      
      case 'customer.subscription.created':
        const subscription = event.data.object;
        await handleSubscriptionCreated(subscription);
        break;
      
      case 'customer.subscription.updated':
        const updatedSubscription = event.data.object;
        await handleSubscriptionUpdated(updatedSubscription);
        break;
      
      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object;
        await handleSubscriptionDeleted(deletedSubscription);
        break;
      
      case 'invoice.payment_succeeded':
        const invoice = event.data.object;
        await handleInvoicePaymentSucceeded(invoice);
        break;
      
      case 'invoice.payment_failed':
        const failedInvoice = event.data.object;
        await handleInvoicePaymentFailed(failedInvoice);
        break;
      
      default:
        logger.info(`Unhandled event type: ${event.type}`);
    }

    res.status(200).json({ received: true });
  } catch (error) {
    logger.error('Webhook handler error', { error, eventType: event.type });
    res.status(500).json({ message: 'Webhook handler error' });
  }
}

// Helper function to get raw body from request
async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      resolve(Buffer.from(data, 'utf8'));
    });
    req.on('error', reject);
  });
}

async function handleCheckoutSessionCompleted(session) {
  logger.info('Checkout session completed', {
    sessionId: session.id,
    customerEmail: session.customer_email,
    platform: session.metadata?.platform,
    amount: session.amount_total
  });

  // Here you would typically:
  // 1. Create or update customer in your database
  // 2. Set up their account access
  // 3. Send welcome email
  // 4. Create HubSpot contact/lead
  // 5. Trigger onboarding workflow

  // For now, we'll just log the event
  console.log('Customer signed up:', {
    email: session.customer_email,
    platform: session.metadata?.platform,
    amount: session.amount_total
  });
}

async function handleSubscriptionCreated(subscription) {
  logger.info('Subscription created', {
    subscriptionId: subscription.id,
    customerId: subscription.customer,
    platform: subscription.metadata?.platform
  });

  // Handle new subscription creation
  // Set up customer access, send welcome materials, etc.
}

async function handleSubscriptionUpdated(subscription) {
  logger.info('Subscription updated', {
    subscriptionId: subscription.id,
    status: subscription.status,
    platform: subscription.metadata?.platform
  });

  // Handle subscription changes (upgrades, downgrades, etc.)
}

async function handleSubscriptionDeleted(subscription) {
  logger.info('Subscription deleted', {
    subscriptionId: subscription.id,
    customerId: subscription.customer,
    platform: subscription.metadata?.platform
  });

  // Handle subscription cancellation
  // Revoke access, send cancellation email, etc.
}

async function handleInvoicePaymentSucceeded(invoice) {
  logger.info('Invoice payment succeeded', {
    invoiceId: invoice.id,
    subscriptionId: invoice.subscription,
    amount: invoice.amount_paid
  });

  // Handle successful payment
  // Update billing status, send receipt, etc.
}

async function handleInvoicePaymentFailed(invoice) {
  logger.info('Invoice payment failed', {
    invoiceId: invoice.id,
    subscriptionId: invoice.subscription,
    attemptCount: invoice.attempt_count
  });

  // Handle failed payment
  // Send dunning emails, update account status, etc.
} 