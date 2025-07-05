# EmailJS Setup Guide

## Steps to configure EmailJS for your contact form:

### 1. Create an EmailJS Account

- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (allows 200 emails/month)

### 2. Set up Email Service

- Go to "Email Services" in your EmailJS dashboard
- Add a new service (Gmail, Outlook, etc.)
- Follow the setup instructions for your email provider

### 3. Create Email Template

- Go to "Email Templates" in your dashboard
- Create a new template with these variables:
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{message}}` - Message content
  - `{{to_name}}` - Your name/company (MBC Laboratory)

Example template:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your MBC Laboratory website contact form.
```

### 4. Get Your Credentials

After setting up service and template, you'll need these 3 values:

- **Service ID**: Found in Email Services (you already have: `service_hnw19s9`)
- **Template ID**: Found in Email Templates:
  1. Go to your EmailJS dashboard
  2. Click on "Email Templates" in the left sidebar
  3. You'll see your created template(s) listed
  4. The Template ID is displayed next to each template (usually starts with "template\_" followed by random characters)
  5. Copy the Template ID of the template you want to use
- **Public Key**: Found in your EmailJS dashboard:
  1. Go to your EmailJS dashboard
  2. Click on "Account" in the left sidebar
  3. Look for "API Keys" or "Public Key" section
  4. Copy the public key (you already have: `xJRRZA4CWFXt-EBwn`)

### 5. Update the Contact Form

Replace the placeholder values in `app/contact/page.tsx`:

```javascript
const serviceId = "service_hnw19s9"; // Replace with your service ID
const templateId = "template_e1p0ums"; // Replace with your template ID
const publicKey = "xJRRZA4CWFXt-EBwn"; // Replace with your public key
```

### 6. Test the Form

- Save the file and test your contact form
- Check your email for test messages
- Monitor the EmailJS dashboard for usage stats

## Security Note

The public key is safe to use in frontend code - it's designed for client-side use.

## Troubleshooting

- Make sure all IDs are correct
- Check EmailJS dashboard for error logs
- Verify email service is properly connected
- Check spam folder for test emails
