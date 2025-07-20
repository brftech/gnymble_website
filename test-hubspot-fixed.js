#!/usr/bin/env node

// Test script to verify the fixed HubSpot integration
const fs = require('fs');
const path = require('path');

// Load environment variables manually
function loadEnv() {
  const envPath = path.join(__dirname, '.env.local');
  if (!fs.existsSync(envPath)) {
    console.log('❌ .env.local file not found');
    return {};
  }

  const envContent = fs.readFileSync(envPath, 'utf8');
  const env = {};
  
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      env[key.trim()] = valueParts.join('=').trim();
    }
  });
  
  return env;
}

async function testHubSpotIntegration() {
  console.log('🧪 Testing Fixed HubSpot Integration...\n');

  const env = loadEnv();
  const hubspotApiKey = env.HUBSPOT_API_KEY;

  if (!hubspotApiKey) {
    console.log('❌ HubSpot API key not configured');
    return;
  }

  // Test creating a contact with standard properties only
  console.log('👤 Testing contact creation with standard properties...');
  
  const testContact = {
    properties: {
      firstname: 'Test',
      lastname: 'User',
      email: `test-${Date.now()}@example.com`,
      company: 'Test Company',
      phone: '(555) 123-4567',
      industry: 'Healthcare',
      hs_lead_status: 'NEW',
      lifecyclestage: 'lead',
      description: 'Use Case: Testing HubSpot integration | Team Size: 11-50 employees | Timeline: Next quarter'
    }
  };

  try {
    const createResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${hubspotApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testContact),
    });

    if (createResponse.ok) {
      const result = await createResponse.json();
      console.log('✅ Contact created successfully in HubSpot');
      console.log('Contact ID:', result.id);
      
      // Clean up - delete the test contact
      console.log('\n🧹 Cleaning up test contact...');
      const deleteResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${result.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${hubspotApiKey}`,
        },
      });
      
      if (deleteResponse.ok) {
        console.log('✅ Test contact deleted successfully');
      } else {
        console.log('⚠️  Could not delete test contact (this is okay)');
      }
    } else {
      console.log('❌ Contact creation failed');
      console.log('Status:', createResponse.status);
      const errorText = await createResponse.text();
      console.log('Error:', errorText);
    }
  } catch (error) {
    console.log('❌ Contact creation error:', error.message);
  }

  console.log('\n🎯 Fixed HubSpot Integration Test Complete!');
}

testHubSpotIntegration().catch(console.error); 