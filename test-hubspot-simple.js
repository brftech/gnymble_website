#!/usr/bin/env node

// Simple test script to verify HubSpot integration
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
  console.log('🧪 Testing HubSpot Integration...\n');

  const env = loadEnv();
  
  // Check environment variables
  const hubspotApiKey = env.HUBSPOT_API_KEY;
  const hubspotPortalId = env.HUBSPOT_PORTAL_ID;
  const hubspotFormId = env.HUBSPOT_FORM_ID;

  console.log('📋 Environment Variables:');
  console.log('HUBSPOT_API_KEY:', hubspotApiKey ? '✅ Set' : '❌ Not set');
  console.log('HUBSPOT_PORTAL_ID:', hubspotPortalId ? `✅ Set (${hubspotPortalId})` : '❌ Not set');
  console.log('HUBSPOT_FORM_ID:', hubspotFormId ? `✅ Set (${hubspotFormId})` : '❌ Not set');

  if (!hubspotApiKey) {
    console.log('\n❌ HubSpot API key not configured');
    console.log('💡 Please set HUBSPOT_API_KEY in your .env.local file');
    return;
  }

  // Test HubSpot API connection
  console.log('\n🔗 Testing HubSpot API connection...');
  
  try {
    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${hubspotApiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('✅ HubSpot API connection successful');
      const data = await response.json();
      console.log(`📊 Found ${data.results?.length || 0} contacts in HubSpot`);
    } else {
      console.log('❌ HubSpot API connection failed');
      console.log('Status:', response.status);
      const errorText = await response.text();
      console.log('Error:', errorText);
    }
  } catch (error) {
    console.log('❌ HubSpot API connection error:', error.message);
  }

  // Test creating a contact
  console.log('\n👤 Testing contact creation...');
  
  const testContact = {
    properties: {
      firstname: 'Test',
      lastname: 'User',
      email: `test-${Date.now()}@example.com`,
      company: 'Test Company',
      phone: '(555) 123-4567',
      industry: 'Healthcare',
      use_case: 'Testing HubSpot integration',
      team_size: '11-50 employees',
      timeline: 'Next quarter',
      hs_lead_status: 'NEW',
      lifecyclestage: 'lead',
      lead_type: 'demo_request'
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

  console.log('\n🎯 HubSpot Integration Test Complete!');
}

testHubSpotIntegration().catch(console.error); 