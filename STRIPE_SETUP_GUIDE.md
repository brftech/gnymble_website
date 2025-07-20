# Stripe Setup Guide for Gnymble

## 🚀 **Step 1: Create Stripe Account**

1. Go to [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register)
2. Fill in your business information:
   - **Business name**: PercyTech / Gnymble
   - **Business type**: Technology / Software
   - **Country**: United States
   - **Email**: Your business email
3. Complete the verification process

## 🔑 **Step 2: Get Your API Keys**

1. Go to [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable key** (starts with `pk_test_` or `pk_live_`)
3. Copy your **Secret key** (starts with `sk_test_` or `sk_live_`)
4. Add these to your `.env.local` file:

```bash
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
```

## 📦 **Step 3: Create Products**

### **Gnymble Product**

1. Go to [https://dashboard.stripe.com/products](https://dashboard.stripe.com/products)
2. Click **"Add product"**
3. Fill in the details:
   - **Name**: Gnymble Onboarding Plan
   - **Description**: Complete SMS platform for regulated industries
   - **Images**: Upload Gnymble logo
   - **Tax behavior**: Tax exclusive

### **PercyMD Product**

1. Create another product:
   - **Name**: PercyMD Onboarding Plan
   - **Description**: HIPAA-compliant SMS for healthcare
   - **Images**: Upload PercyMD logo

### **PercyText Product**

1. Create another product:
   - **Name**: PercyText Onboarding Plan
   - **Description**: Simple SMS for every business
   - **Images**: Upload PercyText logo

## 💰 **Step 4: Create Pricing Plans**

### **For Each Product, Create a Price:**

1. Click on each product
2. Click **"Add price"**
3. Configure the price:
   - **Pricing model**: Recurring price
   - **Billing period**: Monthly
   - **Price**: $179.00 USD
   - **Currency**: USD
   - **Billing cycle**: Monthly
4. Save the price and copy the **Price ID** (starts with `price_`)

### **Add Price IDs to Environment:**

```bash
STRIPE_GNYMBLE_PRICE_ID=price_your_gnymble_price_id
STRIPE_PERCYMD_PRICE_ID=price_your_percymd_price_id
STRIPE_PERCYTEXT_PRICE_ID=price_your_percytext_price_id
```

## 🔗 **Step 5: Set Up Webhooks**

1. Go to [https://dashboard.stripe.com/webhooks](https://dashboard.stripe.com/webhooks)
2. Click **"Add endpoint"**
3. Enter your webhook URL:
   - **Development**: `http://localhost:3000/api/stripe/webhooks`
   - **Production**: `https://yourdomain.com/api/stripe/webhooks`
4. Select these events to listen for:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Click **"Add endpoint"**
6. Copy the **Webhook signing secret** (starts with `whsec_`)
7. Add to your `.env.local`:

```bash
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

## 🧪 **Step 6: Test the Integration**

### **Test Cards (Test Mode Only):**

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Requires Authentication**: `4000 0025 0000 3155`

### **Test the Flow:**

1. Start your development server: `npm run dev`
2. Go to `/signup?platform=gnymble`
3. Enter test email and optional discount code
4. Click "Proceed to Secure Checkout"
5. Use test card `4242 4242 4242 4242`
6. Complete the payment
7. Verify you're redirected to `/success`

## 🔒 **Step 7: Security Best Practices**

### **Environment Variables:**

- Never commit API keys to version control
- Use different keys for development and production
- Rotate keys regularly

### **Webhook Security:**

- Always verify webhook signatures
- Use HTTPS in production
- Monitor webhook failures

### **Error Handling:**

- Log all payment errors
- Provide clear error messages to users
- Have fallback payment methods

## 📊 **Step 8: Monitor and Analytics**

### **Stripe Dashboard:**

- Monitor payments in real-time
- View customer analytics
- Track subscription metrics
- Handle disputes and refunds

### **Key Metrics to Track:**

- Conversion rate
- Payment success rate
- Average order value
- Customer lifetime value

## 🚀 **Step 9: Go Live**

### **When Ready for Production:**

1. Switch to **Live mode** in Stripe dashboard
2. Update environment variables with live keys
3. Update webhook URL to production domain
4. Test with real payment methods
5. Monitor transactions closely

### **Production Environment Variables:**

```bash
STRIPE_SECRET_KEY=sk_live_your_live_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key
STRIPE_WEBHOOK_SECRET=whsec_your_live_webhook_secret
```

## 🆘 **Troubleshooting**

### **Common Issues:**

1. **Webhook not receiving events**: Check URL and secret
2. **Payment declined**: Verify card details and limits
3. **API errors**: Check API key validity and permissions
4. **Redirect issues**: Verify success/cancel URLs

### **Support Resources:**

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com)
- [Stripe Community](https://community.stripe.com)

## ✅ **Checklist**

- [ ] Stripe account created
- [ ] API keys obtained
- [ ] Products created (Gnymble, PercyMD, PercyText)
- [ ] Pricing plans set up ($179/month)
- [ ] Webhook endpoint configured
- [ ] Environment variables updated
- [ ] Test payment completed successfully
- [ ] Success page working
- [ ] Error handling tested
- [ ] Ready for production

---

**Need Help?** Contact Stripe support or refer to their comprehensive documentation at [stripe.com/docs](https://stripe.com/docs)
