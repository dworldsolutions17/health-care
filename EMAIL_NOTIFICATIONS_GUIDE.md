# 📧 Email Notifications Setup Guide

## Overview
Your healthcare website automatically sends confirmation emails to users when they submit forms. Emails are sent using Google Apps Script's built-in `MailApp` service.

---

## 📬 What Emails Are Sent?

### 1. **Contact Form Submission**
- **Trigger**: User submits contact form
- **Recipient**: User's email
- **Content**: 
  - Confirmation of receipt
  - Submission details
  - Expected response time (24-48 hours)
  - Quick links to services

### 2. **AI Health Assessment**
- **Trigger**: User completes AI assessment (only if email provided)
- **Recipient**: User's email
- **Content**:
  - Assessment results summary
  - Health recommendations
  - Disclaimer about professional consultation
  - Links to book doctor consultation
  - Next steps and services

### 3. **Newsletter Subscription**
- **Trigger**: User subscribes to newsletter
- **Recipient**: User's email
- **Content**:
  - Welcome message
  - What to expect from newsletter
  - 10% welcome discount code
  - Quick links to services

### 4. **Customer Information Form**
- **Trigger**: User submits customer registration
- **Recipient**: User's email
- **Content**:
  - Registration confirmation
  - Package details
  - Next steps
  - Contact information

---

## 🚀 How to Enable Email Sending

### Step 1: Update Google Apps Script
The email functions are already included in the updated script in [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md).

Simply copy the entire updated script and replace your existing code in Google Apps Script.

### Step 2: No Additional Setup Required!
✅ **MailApp** is built into Google Apps Script - no API keys needed!

The emails will be sent from **your Google account** (the one running the script).

### Step 3: Test Email Sending

1. Go to your website
2. Fill out any form (contact, AI assessment, newsletter, etc.)
3. Check the user's email inbox
4. Check **Google Apps Script Logs** to confirm email was sent:
   - Apps Script Editor → Click "Executions" (left sidebar)
   - Look for ✅ "Confirmation email sent to: email@example.com"

---

## ⚙️ Customization Options

### Customize Email Templates

Edit the email functions in Google Apps Script:

```javascript
function sendContactConfirmationEmail(data) {
  const subject = "Your Custom Subject Here";
  const body = `
Your custom email template here...

Use ${data.name} for user's name
Use ${data.email} for user's email
Use ${data.timestamp} for submission time
  `;
  
  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    body: body
  });
}
```

### Customize by Form Type

Each form has its own email function:
- `sendContactConfirmationEmail(data)` - Contact form
- `sendAIAssessmentEmail(data)` - AI assessment
- `sendNewsletterWelcomeEmail(data)` - Newsletter
- `sendCustomerInformationEmail(data)` - Customer form

### Add HTML Emails (Optional)

Replace `MailApp.sendEmail()` with HTML version:

```javascript
MailApp.sendEmail({
  to: data.email,
  subject: subject,
  htmlBody: `
    <html>
      <body style="font-family: Arial, sans-serif;">
        <h2 style="color: #0066cc;">Thank you, ${data.name}!</h2>
        <p>Your message has been received.</p>
      </body>
    </html>
  `
});
```

### Send Copy to Admin

Add admin notification:

```javascript
// Send confirmation to user
MailApp.sendEmail({
  to: data.email,
  subject: subject,
  body: body
});

// Send copy to admin
MailApp.sendEmail({
  to: "admin@healthorbit.com",
  subject: "New Contact Form Submission from " + data.name,
  body: "You have a new message: " + data.message
});
```

---

## 📊 Email Tracking

### Check Email Logs

1. Open **Google Apps Script**
2. Click **Executions** (left sidebar)
3. View recent executions
4. Check for:
   - ✅ Success messages
   - ❌ Error messages

### Common Log Messages

```
✅ Confirmation email sent to: user@example.com
✅ AI assessment email sent to: user@example.com
✅ Newsletter welcome email sent to: user@example.com
❌ Error sending email: [error details]
```

---

## 🎨 Email Templates Included

### Template 1: Contact Form
```
Subject: Thank you for contacting Health Orbit

- Confirmation of receipt
- Submission details
- Response timeline
- Quick action links
- Support contact
```

### Template 2: AI Assessment
```
Subject: Your Health Assessment Results - Health Orbit

- Assessment summary
- AI analysis results
- Medical disclaimer
- Next steps (book consultation)
- Service links
```

### Template 3: Newsletter
```
Subject: Welcome to Health Orbit Newsletter! 🎉

- Welcome message
- What to expect
- 10% discount code (WELCOME10)
- Service highlights
- Unsubscribe option
```

### Template 4: Customer Registration
```
Subject: Registration Confirmed - Health Orbit

- Registration confirmation
- Package details
- Next steps
- Contact info
- Welcome message
```

---

## 📧 Email Sending Limits

### Google Apps Script Quotas

| Account Type | Daily Email Limit |
|--------------|-------------------|
| **Free Gmail** | 100 emails/day |
| **Google Workspace** | 1,500 emails/day |

### Quota Monitoring

Check your quota usage:
1. Apps Script → Settings (left sidebar)
2. Scroll to "Quotas"
3. View "Email recipients quota"

---

## ⚠️ Common Issues & Solutions

### Issue 1: Emails Not Sending

**Solutions**:
1. Check Apps Script execution logs for errors
2. Verify email address format is valid
3. Check your daily email quota
4. Ensure script has email sending permissions

### Issue 2: Emails Going to Spam

**Solutions**:
1. Use clear, professional subject lines
2. Avoid spam trigger words (FREE, WIN, CLICK HERE)
3. Include unsubscribe link for newsletters
4. Use your company domain email if possible

### Issue 3: Permission Denied

**Solution**: Re-authorize the script:
1. Apps Script → Run any function manually
2. Click "Review permissions"
3. Allow email sending permission

---

## 🔒 Privacy & Compliance

### GDPR Compliance
✅ Users consent by submitting forms
✅ Clear purpose for each email
✅ Unsubscribe option for newsletters
✅ Data stored in YOUR Google account

### Email Best Practices
✅ Professional tone and branding
✅ Clear call-to-action
✅ Contact information included
✅ Medical disclaimers for health content
✅ No spamming or unsolicited emails

---

## 🎯 Advanced Features

### 1. Add Attachments

```javascript
MailApp.sendEmail({
  to: data.email,
  subject: subject,
  body: body,
  attachments: [
    DriveApp.getFileById('FILE_ID_HERE').getAs(MimeType.PDF)
  ]
});
```

### 2. CC/BCC Support

```javascript
MailApp.sendEmail({
  to: data.email,
  cc: "manager@healthorbit.com",
  bcc: "analytics@healthorbit.com",
  subject: subject,
  body: body
});
```

### 3. Custom Reply-To

```javascript
MailApp.sendEmail({
  to: data.email,
  replyTo: "support@healthorbit.com",
  subject: subject,
  body: body
});
```

### 4. Scheduled Emails

For follow-up emails, use time-based triggers:
1. Apps Script → Triggers (left sidebar)
2. Add trigger → Time-driven
3. Set schedule (daily, weekly, etc.)

---

## 📈 Analytics Tracking

Track email performance in Google Sheets:

```javascript
// Add to your doPost function
const analyticsSheet = ss.getSheetByName('Email Analytics') || ss.insertSheet('Email Analytics');
analyticsSheet.appendRow([
  new Date(),
  data.type,
  data.email,
  'sent', // or 'failed'
  subject
]);
```

---

## 🎉 You're All Set!

Your website now automatically sends professional confirmation emails to users!

**What happens now:**
1. User submits a form
2. Data saves to Google Sheets
3. Email automatically sends to user's email
4. User receives confirmation with next steps

**Benefits:**
- ✅ Instant confirmation to users
- ✅ Professional brand image
- ✅ Clear next steps
- ✅ Improved user engagement
- ✅ Better customer experience

---

**Last Updated**: February 19, 2026
