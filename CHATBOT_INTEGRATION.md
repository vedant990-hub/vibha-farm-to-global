# Vibha AI Chatbot Integration Guide

## Overview
This guide provides instructions for integrating the AI chatbot into the Vibha Exim Global Services website. The chatbot has been designed with Vibha's green and gold branding and includes all requested features.

## Features Implemented

### ✅ Core Features
- **Floating Chat Icon**: Bottom-right corner with Vibha branding
- **Welcome Message**: Personalized greeting for Vibha visitors
- **Quick Reply Buttons**: 
  - View our export products
  - Contact our team
  - Get a shipping quote
  - Know more about our company
- **AI-Powered Responses**: Context-aware responses to user queries
- **Contact Form**: Collects name, email, and message for human handoff
- **Email Integration**: Sends inquiries to info@vibhaglobaleximservices.com
- **Vibha Branding**: Green and gold color scheme matching website
- **Responsive Design**: Works on mobile and desktop

### ✅ Technical Implementation
- **React Component**: `AIChatbot.tsx` - Full-featured chatbot component
- **Configuration**: `chatbot.ts` - Centralized configuration and responses
- **HTML Embed**: `chatbot-embed.html` - Standalone HTML version
- **EmailJS Integration**: Ready for email service setup
- **TypeScript Support**: Fully typed components

## Integration Methods

### Method 1: React Component (Recommended)
The chatbot is already integrated into the React application:

1. **Component Location**: `src/components/AIChatbot.tsx`
2. **Configuration**: `src/config/chatbot.ts`
3. **Layout Integration**: Already added to `src/components/Layout.tsx`

The chatbot will appear on all pages automatically.

### Method 2: HTML Embed (Alternative)
For non-React websites or quick integration:

1. Copy the contents of `chatbot-embed.html`
2. Add the script to your website's footer
3. Customize the styling as needed

## Configuration

### EmailJS Setup (Required for Contact Form)
To enable the contact form functionality:

1. **Sign up for EmailJS**: https://www.emailjs.com/
2. **Create a Service**: Connect your email provider (Gmail, Outlook, etc.)
3. **Create a Template**: Set up an email template for chatbot inquiries
4. **Update Configuration**: Replace these placeholders in `AIChatbot.tsx`:
   ```typescript
   await emailjs.send(
     'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
     'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
     templateParams,
     'YOUR_PUBLIC_KEY'      // Replace with your EmailJS public key
   );
   ```

### Customizing Responses
Edit `src/config/chatbot.ts` to customize:
- Welcome message
- Quick reply options
- Predefined responses
- Company information
- AI response prompts

## Brand Colors Used
- **Primary Green**: #1B4332 (Dark Forest Green)
- **Secondary Green**: #D8F3DC (Light Sage Green)
- **Accent Gold**: #FFC107 (Gold/Mustard)
- **Text**: Various grays for readability

## Responsive Design
- **Mobile**: 320px width chat window
- **Desktop**: 384px width chat window
- **Touch-friendly**: Minimum 44px touch targets
- **Smooth animations**: Fade in/out, typing indicators

## Testing Checklist

### ✅ Functionality Tests
- [ ] Chat icon appears in bottom-right corner
- [ ] Chat window opens when icon is clicked
- [ ] Welcome message displays correctly
- [ ] Quick reply buttons work
- [ ] Freeform text input works
- [ ] AI responses are appropriate
- [ ] Contact form appears when requested
- [ ] Contact form submits successfully
- [ ] Email notifications work (after EmailJS setup)

### ✅ Responsive Tests
- [ ] Works on mobile devices (320px+)
- [ ] Works on tablets (768px+)
- [ ] Works on desktop (1024px+)
- [ ] Touch interactions work properly
- [ ] Keyboard navigation works

### ✅ Branding Tests
- [ ] Colors match Vibha brand
- [ ] Typography is consistent
- [ ] Logo/branding elements are correct
- [ ] Contact information is accurate

## Advanced Customization

### Adding New Quick Replies
Edit `src/config/chatbot.ts`:
```typescript
quickReplies: [
  // ... existing replies
  { 
    text: 'New Quick Reply', 
    action: 'new_action',
    description: 'Description of what this does'
  }
],
```

### Adding New AI Responses
Edit the `generateAIResponse` function in `src/config/chatbot.ts`:
```typescript
if (lowerMessage.includes('new_keyword')) {
  return "Your custom response here";
}
```

### Custom Styling
The chatbot uses Tailwind CSS classes. To customize:
1. Edit the className attributes in `AIChatbot.tsx`
2. Add custom CSS in `src/index.css`
3. Update the design system variables in `tailwind.config.ts`

## Troubleshooting

### Common Issues
1. **Chatbot not appearing**: Check if `AIChatbot` is imported in `Layout.tsx`
2. **Styling issues**: Ensure Tailwind CSS is properly configured
3. **Email not sending**: Verify EmailJS configuration
4. **Responsive issues**: Check viewport meta tag and CSS media queries

### Debug Mode
Add console logs to track chatbot behavior:
```typescript
console.log('Chatbot state:', { isOpen, messages, inputText });
```

## Support
For technical support or customization requests, contact the development team or refer to the component documentation in the codebase.

## Future Enhancements
Potential improvements for future versions:
- OpenAI API integration for more sophisticated AI responses
- Multi-language support
- Chat history persistence
- Admin dashboard for managing conversations
- Integration with CRM systems
- Voice input/output capabilities

