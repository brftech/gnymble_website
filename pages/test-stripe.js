import React, { useState } from 'react';

export default function TestStripe() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState('');

  const testCheckout = async () => {
    setIsProcessing(true);
    setResult('');

    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform: 'gnymble',
          customerEmail: 'test@example.com',
          successUrl: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
          cancelUrl: 'http://localhost:3000/test-stripe'
        }),
      });

      const data = await response.json();

      if (data.url) {
        setResult(`✅ Success! Checkout URL: ${data.url}`);
        // Optionally redirect to Stripe
        // window.location.href = data.url;
      } else {
        setResult(`❌ Error: ${data.message || 'No checkout URL received'}`);
      }
    } catch (error) {
      setResult(`❌ Error: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Stripe Integration Test</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Checkout Session</h2>
          <p className="text-gray-300 mb-4">
            This will create a test checkout session with Stripe.
          </p>
          
          <button
            onClick={testCheckout}
            disabled={isProcessing}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-6 py-3 rounded-lg font-semibold"
          >
            {isProcessing ? 'Processing...' : 'Test Checkout'}
          </button>
        </div>

        {result && (
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Result:</h3>
            <pre className="text-sm text-gray-300 whitespace-pre-wrap">{result}</pre>
          </div>
        )}

        <div className="bg-gray-800 p-6 rounded-lg mt-6">
          <h2 className="text-xl font-semibold mb-4">Test Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Click "Test Checkout" to create a checkout session</li>
            <li>If successful, you'll get a Stripe checkout URL</li>
            <li>You can visit the URL to test the full payment flow</li>
            <li>Use test card: 4242 4242 4242 4242</li>
          </ol>
        </div>
      </div>
    </div>
  );
} 