# HubSpot Integration Setup Guide

This guide will help you set up HubSpot integration for the demo form and contact forms.

## 🎯 Overview

The demo form now properly integrates with HubSpot to:

- Create contacts in HubSpot CRM
- Submit form data to HubSpot forms (if configured)
- Track demo requests and contact submissions
- Send notification emails

## 📋 Prerequisites

1. **HubSpot Account**: You need a HubSpot account with API access
2. **Private App**: Create a private app in HubSpot for API access
3. **Form ID** (optional): If you want to submit to a specific HubSpot form

## 🔧 Step-by-Step Setup

### 1. Create HubSpot Private App

1. Go to [HubSpot Settings](https://app.hubspot.com/settings)
2. Navigate to **Account Setup** > **Integrations** > **Private Apps**
3. Click **Create private app**
4. Give it a name (e.g., "Gnymble Website Integration")
5. Select these scopes:
   - **Contacts** > **Read & Write**
   - **Forms** > **Read & Write** (if using forms)
6. Click **Create app**
7. Copy the **Access Token** (this is your `HUBSPOT_API_KEY`)

### 2. Get Your Portal ID

1. Look at your HubSpot account URL: `https://app.hubspot.com/contacts/{PORTAL_ID}`
2. The number in the URL is your `HUBSPOT_PORTAL_ID`

### 3. Create HubSpot Form (Optional)

1. Go to **Marketing** > **Lead Capture** > **Forms**
2. Click **Create form**
3. Add these fields:
   - First Name (required)
   - Last Name (required)
   - Email (required)
   - Company (required)
   - Phone
   - Industry
   - Use Case
   - Team Size
   - Timeline
4. Copy the **Form ID** from the form settings

### 4. Configure Environment Variables

1. Create a `.env.local` file in the `gnymble` directory:

```bash
# HubSpot Configuration
HUBSPOT_API_KEY=your_actual_api_key_here
HUBSPOT_PORTAL_ID=your_portal_id_here
HUBSPOT_FORM_ID=your_form_id_here

# Notification Settings
NOTIFICATION_EMAIL=your_email@company.com

# Application Settings
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

2. Replace the placeholder values with your actual HubSpot credentials

### 5. Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

## 🧪 Testing the Integration

### Test Demo Form API

```bash
# Run the test script
node test-demo-form.js
```

### Test Contact Form API

```bash
# Test the contact form endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstname": "Jane",
    "lastname": "Smith",
    "email": "jane.smith@example.com",
    "company": "Test Corp",
    "message": "Interested in learning more about Gnymble"
  }'
```

## 📊 What Gets Sent to HubSpot

### Demo Form Data

- **Contact Properties**:
  - `firstname`, `lastname`, `email`
  - `phone`, `company`, `industry`
  - `use_case`, `team_size`, `timeline`
  - `hs_lead_status`: "NEW"
  - `lifecyclestage`: "lead"
  - `lead_type`: "demo_request"

### Contact Form Data

- **Contact Properties**:
  - `firstname`, `lastname`, `email`
  - `phone`, `company`, `jobtitle`
  - `message`, `solution_interest`
  - `hs_lead_status`: "NEW"
  - `lifecyclestage`: "lead"

## 🔍 Troubleshooting

### Common Issues

1. **"HubSpot not configured" message**

   - Check that `.env.local` file exists
   - Verify environment variable names are correct
   - Restart the development server

2. **"HubSpot API key not configured"**

   - Ensure `HUBSPOT_API_KEY` is set in `.env.local`
   - Check that the API key is valid and not expired

3. **"HubSpot contact creation failed"**

   - Verify the API key has the correct permissions
   - Check that the contact properties exist in HubSpot
   - Review the error message in the server logs

4. **Form submission works but HubSpot doesn't receive data**
   - Check the server console for HubSpot errors
   - Verify the portal ID is correct
   - Ensure the form ID is valid (if using forms)

### Debug Mode

Enable detailed logging by setting `NODE_ENV=development` in your `.env.local` file.

### Check Server Logs

The server will log all HubSpot interactions. Look for:

- `[INFO] Demo contact created in HubSpot`
- `[ERROR] HubSpot demo contact creation failed`
- `[WARN] HubSpot form submission failed`

## 🚀 Production Deployment

For production deployment:

1. **Set Environment Variables**: Add the HubSpot credentials to your production environment
2. **Update Site URL**: Set `NEXT_PUBLIC_SITE_URL` to your production domain
3. **Test Integration**: Verify the forms work in production
4. **Monitor Logs**: Set up logging to track form submissions

## 📈 Analytics & Tracking

The integration provides:

- Contact creation in HubSpot CRM
- Form submission tracking
- Lead scoring based on form data
- Email notifications for new submissions
- Rate limiting to prevent spam

## 🔒 Security Considerations

- **API Key Security**: Never commit API keys to version control
- **Rate Limiting**: Forms are rate-limited to prevent abuse
- **Input Validation**: All form data is validated and sanitized
- **Error Handling**: Sensitive information is not exposed in error messages

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review server logs for detailed error messages
3. Verify HubSpot API credentials and permissions
4. Test with the provided test scripts

---

**Need help?** Check the server logs or run the test scripts to diagnose issues.
