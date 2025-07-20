#!/usr/bin/env node

/**
 * Simple Stripe Integration Test Script
 * 
 * This script manually loads environment variables and tests the Stripe integration.
 */

const Stripe = require('stripe');
const fs = require('fs');
const path = require('path');

// Manually load environment variables from .env.local
function loadEnvFile() {
  const envPath = path.join(__dirname, '.env.local');
  if (!fs.existsSync(envPath)) {
    console.log('❌ .env.local file not found');
    process.exit(1);
  }

  const envContent = fs.readFileSync(envPath, 'utf8');
  const lines = envContent.split('\n');
  
  lines.forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith('#')) {
      const [key, ...valueParts] = trimmedLine.split('=');
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=').trim();
        // Remove any trailing characters that might cause issues
        const cleanValue = value.replace(/[\/%]$/, '');
        process.env[key.trim()] = cleanValue;
      }
    }
  });
}

// Load environment variables
loadEnvFile();

// Check if environment variables are set
const requiredEnvVars = [
  'STRIPE_SECRET_KEY',
  'STRIPE_PUBLISHABLE_KEY',
  'STRIPE_GNYMBLE_PRICE_ID'
];

console.log('🔍 Checking environment variables...\n');

const missingVars = [];
requiredEnvVars.forEach(varName => {
  if (!process.env[varName]) {
    missingVars.push(varName);
  } else {
    console.log(`✅ ${varName}: ${process.env[varName].substring(0, 20)}...`);
  }
});

if (missingVars.length > 0) {
  console.log('\n❌ Missing environment variables:');
  missingVars.forEach(varName => console.log(`   - ${varName}`));
  console.log('\nPlease check your .env.local file and ensure these variables are set correctly.');
  process.exit(1);
}

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function testStripeConnection() {
  console.log('\n🔗 Testing Stripe connection...');
  
  try {
    const account = await stripe.accounts.retrieve();
    console.log(`✅ Connected to Stripe account: ${account.business_profile?.name || 'Test Account'}`);
    return true;
  } catch (error) {
    console.log(`❌ Stripe connection failed: ${error.message}`);
    return false;
  }
}

async function testPriceIds() {
  console.log('\n💰 Testing price IDs...');
  
  const priceIds = {
    gnymble: process.env.STRIPE_GNYMBLE_PRICE_ID,
    percymd: process.env.STRIPE_PERCYMD_PRICE_ID,
    percytext: process.env.STRIPE_PERCYTEXT_PRICE_ID
  };

  for (const [platform, priceId] of Object.entries(priceIds)) {
    if (!priceId || priceId.includes('your_') || priceId.includes('placeholder')) {
      console.log(`⚠️  ${platform}: Price ID not configured (using placeholder)`);
      continue;
    }
    
    try {
      const price = await stripe.prices.retrieve(priceId);
      console.log(`✅ ${platform}: ${price.product_data?.name || 'Unknown Product'} - $${(price.unit_amount / 100).toFixed(2)}/${price.recurring?.interval}`);
    } catch (error) {
      console.log(`❌ ${platform}: Invalid price ID - ${error.message}`);
    }
  }
}

async function testCheckoutSession() {
  console.log('\n🛒 Testing checkout session creation...');
  
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: process.env.STRIPE_GNYMBLE_PRICE_ID,
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/signup?platform=gnymble',
      customer_email: 'test@example.com',
      metadata: {
        platform: 'gnymble',
        source: 'test_script'
      }
    });

    console.log(`✅ Checkout session created: ${session.id}`);
    console.log(`   URL: ${session.url}`);
    return session;
  } catch (error) {
    console.log(`❌ Checkout session creation failed: ${error.message}`);
    return null;
  }
}

async function testWebhookEndpoint() {
  console.log('\n🔔 Testing webhook endpoint...');
  
  try {
    const response = await fetch('http://localhost:3000/api/stripe/webhooks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'stripe-signature': 'test_signature'
      },
      body: JSON.stringify({ test: true })
    });

    if (response.status === 400) {
      console.log('✅ Webhook endpoint is accessible (signature verification working)');
    } else {
      console.log(`⚠️  Webhook endpoint responded with status: ${response.status}`);
    }
  } catch (error) {
    console.log(`❌ Webhook endpoint test failed: ${error.message}`);
    console.log('   Make sure your development server is running on port 3000');
  }
}

async function runTests() {
  console.log('🧪 Stripe Integration Test Suite\n');
  console.log('=====================================\n');

  // Test 1: Stripe Connection
  const connectionOk = await testStripeConnection();
  if (!connectionOk) {
    console.log('\n❌ Cannot proceed with tests due to connection failure.');
    process.exit(1);
  }

  // Test 2: Price IDs
  await testPriceIds();

  // Test 3: Checkout Session
  await testCheckoutSession();

  // Test 4: Webhook Endpoint
  await testWebhookEndpoint();

  console.log('\n=====================================');
  console.log('✅ Test suite completed!');
  console.log('\nNext steps:');
  console.log('1. Start your development server: npm run dev');
  console.log('2. Visit: http://localhost:3000/signup?platform=gnymble');
  console.log('3. Test with card: 4242 4242 4242 4242');
  console.log('4. Check the Stripe dashboard for test transactions');
  console.log('\n🎯 Your ngrok webhook URL should be configured in Stripe dashboard');
}

// Run tests
runTests().catch(console.error); 