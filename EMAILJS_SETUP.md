# EmailJS Setup Guide

This guide will help you set up EmailJS to enable contact form functionality on your Vibha Exim website.

## What is EmailJS?

EmailJS allows you to send emails directly from your website without a backend server. It works by connecting your frontend forms to email services like Gmail, Outlook, or other SMTP providers.

## Setup Steps

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps for your chosen provider
5. Note down the **Service ID** (you'll need this later)

### 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with the following variables:

#### Required Template Variables:
- `{{from_name}}` - Sender's full name
- `{{from_email}}` - Sender's email address
- `{{company_name}}` - Sender's company name
- `{{country}}` - Sender's country
- `{{phone_number}}` - Sender's phone number
- `{{message}}` - Sender's message
- `{{to_name}}` - Recipient name (set to "Vibha Exim Team")

#### Optional Variables (for ContactSection):
- `{{product_interest}}` - Product interest

4. Save the template and note down the **Template ID**

### 4. Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

### 5. Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id_here',
  TEMPLATE_ID: 'your_actual_template_id_here',
  PUBLIC_KEY: 'your_actual_public_key_here',
};
```

### 6. Test the Integration

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the contact form
4. Check your email to confirm the message was received
5. Check the browser console for any error messages

## Email Template Example

Here's a sample email template you can use:

```html
Subject: New Contact Form Submission from {{from_name}}

Hello {{to_name}},

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company_name}}
Country: {{country}}
Phone: {{phone_number}}

Message:
{{message}}

Best regards,
Your Website Contact Form
```

## Troubleshooting

### Common Issues:

1. **"Service ID not found" error**
   - Verify your Service ID in the EmailJS dashboard
   - Make sure the service is active

2. **"Template ID not found" error**
   - Verify your Template ID in the EmailJS dashboard
   - Make sure the template is published

3. **"Public Key invalid" error**
   - Check your Public Key in the Account → API Keys section
   - Make sure you're using the correct key

4. **Emails not being sent**
   - Check browser console for error messages
   - Verify all template variables are properly set
   - Check your email service provider's sending limits

### Testing:

- Use the EmailJS dashboard's "Test" feature to verify your template
- Check the browser's Network tab to see if requests are being made
- Verify that all form fields are being populated correctly

## Security Notes

- The Public Key is safe to expose in your frontend code
- EmailJS handles authentication through your email service
- Consider implementing rate limiting to prevent spam
- Monitor your EmailJS usage to stay within free tier limits

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Community: [https://community.emailjs.com/](https://community.emailjs.com/)
- For project-specific issues, check the project's issue tracker

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Standard support

For higher limits, consider upgrading to a paid plan.
