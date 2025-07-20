#!/bin/bash

# Stripe Integration Setup Script
# This script helps you set up the Stripe integration for testing

echo "🚀 Stripe Integration Setup"
echo "=========================="
echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
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
EOF
    echo "✅ Created .env.local file"
else
    echo "✅ .env.local file already exists"
fi

echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔧 Setup Instructions:"
echo "====================="
echo ""
echo "1. Get your Stripe API keys from:"
echo "   https://dashboard.stripe.com/apikeys"
echo ""
echo "2. Create products in Stripe dashboard:"
echo "   https://dashboard.stripe.com/products"
echo "   - Gnymble Onboarding Plan ($179/month)"
echo "   - PercyMD Onboarding Plan ($179/month)"
echo "   - PercyText Onboarding Plan ($179/month)"
echo ""
echo "3. Set up webhook endpoint:"
echo "   https://dashboard.stripe.com/webhooks"
echo "   URL: http://localhost:3000/api/stripe/webhooks"
echo "   Events: checkout.session.completed, customer.subscription.*, invoice.payment_*"
echo ""
echo "4. Update .env.local with your actual values"
echo ""
echo "5. Test the integration:"
echo "   npm run test:stripe"
echo ""
echo "6. Start the development server:"
echo "   npm run dev"
echo ""
echo "7. Visit: http://localhost:3000/signup?platform=gnymble"
echo ""
echo "📚 For detailed instructions, see: STRIPE_TESTING_GUIDE.md"
echo ""
echo "🎯 Test credit card: 4242 4242 4242 4242" 