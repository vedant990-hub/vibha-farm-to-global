// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{company_name}}, {{country}}, {{phone_number}}, {{message}}, {{to_name}}
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the placeholder values below with your actual credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_12mx634', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_7fo27nf', // Replace with your EmailJS template ID
  PUBLIC_KEY: '6XA0thMRxO5dASABC', // Replace with your EmailJS public key
};

// Template variables that should be available in your EmailJS template:
// - {{from_name}}: Sender's full name
// - {{from_email}}: Sender's email address
// - {{company_name}}: Sender's company name
// - {{country}}: Sender's country
// - {{phone_number}}: Sender's phone number
// - {{message}}: Sender's message
// - {{to_name}}: Recipient name (set to 'Vibha Exim Team')
// - {{product_interest}}: Product interest (only in ContactSection)
