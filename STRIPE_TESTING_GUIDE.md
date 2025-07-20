# Stripe Integration Testing Guide

## 🚀 Quick Start Testing

### 1. Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
# Application Settings
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Stripe Configuration (Get from https://dashboard.stripe.com/apikeys)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Stripe Price IDs (Create products in Stripe dashboard first)
STRIPE_GNYMBLE_PRICE_ID=price_your_gnymble_price_id_here
STRIPE_PERCYMD_PRICE_ID=price_your_percymd_price_id_here
STRIPE_PERCYTEXT_PRICE_ID=price_your_percytext_price_id_here
```

### 2. Stripe Dashboard Setup

1. **Get API Keys:**

   - Go to [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
   - Copy your test publishable key (`pk_test_...`)
   - Copy your test secret key (`sk_test_...`)

2. **Create Products:**

   - Go to [https://dashboard.stripe.com/products](https://dashboard.stripe.com/products)
   - Create 3 products:
     - **Gnymble Onboarding Plan** - $179/month
     - **PercyMD Onboarding Plan** - $179/month
     - **PercyText Onboarding Plan** - $179/month
   - For each product, create a recurring price of $179/month
   - Copy the price IDs (start with `price_`)

3. **Set Up Webhook:**
   - Go to [https://dashboard.stripe.com/webhooks](https://dashboard.stripe.com/webhooks)
   - Add endpoint: `http://localhost:3000/api/stripe/webhooks`
   - Select events: `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_succeeded`, `invoice.payment_failed`
   - Copy the webhook secret (starts with `whsec_`)

### 3. Start the Development Server

```bash
cd gnymble
npm install
npm run dev
```

### 4. Test the Integration

#### Test URLs:

- **Gnymble:** http://localhost:3000/signup?platform=gnymble
- **PercyMD:** http://localhost:3000/signup?platform=percymd
- **PercyText:** http://localhost:3000/signup?platform=percytext

#### Test Credit Cards:

- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- **Requires Authentication:** `4000 0025 0000 3155`

### 5. Testing Flow

1. **Visit signup page** with platform parameter
2. **Enter email address** (required)
3. **Optionally enter discount code** (will apply $179 discount)
4. **Click "Proceed to Secure Checkout"**
5. **Complete payment** with test card
6. **Verify redirect** to success page
7. **Check webhook logs** in terminal

## 🧪 Advanced Testing

### Test Webhook Simulator

The project includes a webhook simulator for testing:

```bash
# Test webhook endpoint
curl -X GET http://localhost:3000/api/test/webhook-simulator

# Simulate SMS webhook
curl -X POST http://localhost:3000/api/test/webhook-simulator \
  -H "Content-Type: application/json" \
  -d '{"webhookType": "sms", "provider": "twilio"}'
```

### Test Different Scenarios

1. **Successful Payment:**

   - Use card `4242 4242 4242 4242`
   - Should redirect to success page
   - Check webhook logs for `checkout.session.completed`

2. **Failed Payment:**

   - Use card `4000 0000 0000 0002`
   - Should show error message
   - No webhook events should fire

3. **Discount Code:**

   - Enter any discount code
   - Should apply $179 discount to total
   - Verify in Stripe dashboard

4. **Different Platforms:**
   - Test each platform (gnymble, percymd, percytext)
   - Verify correct product/price ID is used
   - Check metadata in Stripe dashboard

## 🔍 Monitoring and Debugging

### Check Logs

The application logs all Stripe events. Watch the terminal for:

```bash
# Successful checkout
INFO: Stripe checkout session created { sessionId: 'cs_...', platform: 'gnymble', customerEmail: 'test@example.com' }

# Webhook events
INFO: Checkout session completed { sessionId: 'cs_...', customerEmail: 'test@example.com', platform: 'gnymble', amount: 17900 }
```

### Stripe Dashboard Monitoring

1. **Checkout Sessions:** [https://dashboard.stripe.com/test/payments](https://dashboard.stripe.com/test/payments)
2. **Subscriptions:** [https://dashboard.stripe.com/test/subscriptions](https://dashboard.stripe.com/test/subscriptions)
3. **Webhook Events:** [https://dashboard.stripe.com/test/webhooks](https://dashboard.stripe.com/test/webhooks)

### Common Issues

1. **"No checkout URL received":**

   - Check STRIPE_SECRET_KEY is correct
   - Verify price IDs exist in Stripe dashboard

2. **Webhook signature verification failed:**

   - Check STRIPE_WEBHOOK_SECRET is correct
   - Ensure webhook URL is accessible

3. **"Method not allowed":**
   - Ensure you're using POST method for API calls
   - Check API endpoint URLs

## 🚀 Production Deployment

When ready for production:

1. **Switch to Live Mode:**

   - Update environment variables with live keys
   - Change webhook URL to production domain
   - Test with real payment methods

2. **Environment Variables:**

```bash
STRIPE_SECRET_KEY=sk_live_your_live_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key
STRIPE_WEBHOOK_SECRET=whsec_your_live_webhook_secret
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

3. **Security Checklist:**
   - [ ] HTTPS enabled
   - [ ] Webhook signature verification working
   - [ ] Error handling tested
   - [ ] Success/failure flows working
   - [ ] Database integration (if applicable)

## 📞 Support

- **Stripe Documentation:** [https://stripe.com/docs](https://stripe.com/docs)
- **Stripe Support:** [https://support.stripe.com](https://support.stripe.com)
- **Test Cards:** [https://stripe.com/docs/testing#cards](https://stripe.com/docs/testing#cards)
