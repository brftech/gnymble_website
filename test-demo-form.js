#!/usr/bin/env node

// Test script for the demo form API
// Using built-in fetch (Node.js 18+)

async function testDemoForm() {
  console.log('🧪 Testing Demo Form API...\n');

  const testData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    company: 'Test Company',
    phone: '(555) 123-4567',
    industry: 'Healthcare',
    useCase: 'Patient appointment reminders and HIPAA-compliant communications',
    teamSize: '11-50 employees',
    timeline: 'Next quarter'
  };

  try {
    console.log('📤 Sending demo request...');
    console.log('Data:', JSON.stringify(testData, null, 2));

    const response = await fetch('http://localhost:3000/api/demo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('\n📥 Response Status:', response.status);
    console.log('Response Headers:', Object.fromEntries(response.headers.entries()));

    const result = await response.json();
    console.log('\n📋 Response Body:', JSON.stringify(result, null, 2));

    if (response.ok) {
      console.log('\n✅ Demo form API test PASSED!');
      console.log('HubSpot configured:', result.hubspotConfigured);
    } else {
      console.log('\n❌ Demo form API test FAILED!');
      console.log('Error:', result.message);
    }

  } catch (error) {
    console.error('\n💥 Test failed with error:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Make sure your development server is running on port 3000');
      console.log('   Run: npm run dev');
    }
  }
}

// Check if server is running first
async function checkServer() {
  try {
    const response = await fetch('http://localhost:3000/api/demo', {
      method: 'OPTIONS'
    });
    return true;
  } catch (error) {
    return false;
  }
}

async function main() {
  console.log('🔍 Checking if server is running...');
  
  const serverRunning = await checkServer();
  
  if (!serverRunning) {
    console.log('❌ Server not running on port 3000');
    console.log('💡 Please start your development server first:');
    console.log('   cd gnymble');
    console.log('   npm run dev');
    process.exit(1);
  }

  console.log('✅ Server is running!\n');
  await testDemoForm();
}

main().catch(console.error); 