# 📊 Google Sheets Integration Setup Guide

This guide will help you connect your healthcare website to Google Sheets to automatically track all user interactions.

## 🎯 What Data Gets Tracked?

Your website will automatically save the following data to Google Sheets:

1. **Contact Form Submissions** → "Contact Forms" sheet
2. **AI Health Assessment Results** → "AI Assessments" sheet
3. **Join Network Applications** → "Network Applications" sheet
4. **Guest User Tracking** → "Guest User Tracking" sheet (automatically tracks visitors who accept cookies)
5. **Preventive Checkup Bookings** → "Preventive Checkups" sheet
6. **Telemedicine Bookings** → "Telemedicine Bookings" sheet
7. **Customer Information Forms** → "Customer Information" sheet
8. **Newsletter Subscriptions** → "Newsletter Subscriptions" sheet

---

## 📝 Step-by-Step Setup (10 minutes)

### Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a **new blank spreadsheet**
3. Name it: **"Health Care Website Data"**
4. Keep this tab open

---

### Step 2: Open Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy and paste the code below:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Route to appropriate sheet based on data type
    let sheet;
    let row = [];
    let emailSent = false;
    
    switch(data.type) {
      case 'contact':
        sheet = ss.getSheetByName('Contact Forms') || ss.insertSheet('Contact Forms');
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message']);
        }
        row = [data.timestamp, data.name, data.email, data.phone, data.subject, data.message];
        
        // Send confirmation email
        sendContactConfirmationEmail(data);
        emailSent = true;
        break;
        
      case 'ai-assessment':
        sheet = ss.getSheetByName('AI Assessments') || ss.insertSheet('AI Assessments');
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Email', 'Age', 'Gender', 'Symptoms', 'Lifestyle', 'Results']);
          // Format header row
          var headerRange = sheet.getRange(1, 1, 1, 9);
          headerRange.setFontWeight('bold');
          headerRange.setBackground('#4CAF50');
          headerRange.setFontColor('#FFFFFF');
        }
        row = [data.timestamp, data.name, data.phone, data.email || 'N/A', data.age, data.gender, data.symptoms || 'None', data.lifestyle, data.results];
        
        // Send AI assessment email if email provided
        if (data.email) {
          sendAIAssessmentEmail(data);
          emailSent = true;
        }
        break;
        
      case 'preventive-checkup':
        sheet = ss.getSheetByName('Preventive Checkups') || ss.insertSheet('Preventive Checkups');
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Preferred Date']);
        }
        row = [data.timestamp, data.name, data.email, data.phone, data.preferredDate || 'N/A'];
        break;
        
      case 'telemedicine-booking':
        sheet = ss.getSheetByName('Telemedicine Bookings') || ss.insertSheet('Telemedicine Bookings');
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Specialty', 'Preferred Time']);
        }
        row = [data.timestamp, data.name, data.email, data.phone, data.specialty || 'N/A', data.preferredTime || 'N/A'];
        break;
        
      case 'join-network':
        sheet = ss.getSheetByName('Network Applications') || ss.insertSheet('Network Applications');
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Name', 'Partner Type', 'Email', 'Phone', 'City', 'Description']);
        }
        row = [data.timestamp, data.name, data.partnerType, data.email, data.phone, data.city, data.description];
        break;
        
      case 'guest-user-tracking':
        sheet = ss.getSheetByName('Guest User Tracking') || ss.insertSheet('Guest User Tracking');
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Email', 'Phone', 'Source', 'First Visit', 'Last Visit', 'Page Views', 'User Agent', 'Referrer', 'Current Page']);
          // Format header row
          var headerRange = sheet.getRange(1, 1, 1, 10);
          headerRange.setFontWeight('bold');
          headerRange.setBackground('#9C27B0');
          headerRange.setFontColor('#FFFFFF');
        }
        row = [data.timestamp, data.email, data.phone, data.source, data.firstVisit, data.lastVisit, data.pageViews, data.userAgent, data.referrer, data.currentPage];
        break;
        
      case 'customer-information':
        sheet = ss.getSheetByName('Customer Information') || ss.insertSheet('Customer Information');
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Full Name', 'Date of Birth', 'Age', 'Gender', 'CNIC/Passport', 'Contact Number', 'Email', 'Product Category', 'Referred By']);
        }
        row = [data.timestamp, data.fullName, data.dateOfBirth, data.age, data.gender, data.cnicPassport, data.contactNumber, data.email, data.productCategory, data.referredBy];
        
        // Send customer registration email
        sendCustomerInformationEmail(data);
        emailSent = true;
        break;
        
      case 'newsletter-subscription':
        sheet = ss.getSheetByName('Newsletter Subscriptions') || ss.insertSheet('Newsletter Subscriptions');
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Email', 'Source']);
        }
        row = [data.timestamp, data.email, data.source];
        
        // Send newsletter welcome email
        sendNewsletterWelcomeEmail(data);
        emailSent = true;
        break;
        
      default:
        return ContentService.createTextOutput(JSON.stringify({
          status: 'error',
          message: 'Unknown data type'
        })).setMimeType(ContentService.MimeType.JSON);
    }
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully',
      emailSent: emailSent
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================================
// EMAIL SENDING FUNCTIONS
// ============================================================

/**
 * Send confirmation email for contact form submission
 */
function sendContactConfirmationEmail(data) {
  try {
    const subject = "Thank you for contacting Health Orbit";
    const body = `
Dear ${data.name},

Thank you for reaching out to Health Orbit. We have received your message and will get back to you shortly.

📋 Your Submission Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subject: ${data.subject}
Message: ${data.message}
Submitted: ${data.timestamp}

Our team typically responds within 24-48 hours. For urgent medical matters, please call our helpline: +92 21 1234 5678

🏥 In the meantime, you can:
• Explore our services: https://thehealthorbit.com/services
• Book a free AI health assessment: https://thehealthorbit.com/ai-assessment
• Learn about our health plans: https://thehealthorbit.com/health-plans

Best regards,
The Health Orbit Team
A Lifecare Global Ecosystem

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated confirmation email. Please do not reply to this email.
For assistance, contact us at support@healthorbit.com
    `;
    
    MailApp.sendEmail({
      to: data.email,
      subject: subject,
      body: body
    });
    
    Logger.log('✅ Confirmation email sent to: ' + data.email);
  } catch (error) {
    Logger.log('❌ Error sending email: ' + error.toString());
  }
}

/**
 * Send AI assessment results email
 */
function sendAIAssessmentEmail(data) {
  try {
    const subject = "Your Health Assessment Results - Health Orbit";
    const body = `
Dear ${data.name},

Thank you for completing your AI Health Assessment with Health Orbit.

📊 Your Assessment Summary:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Age: ${data.age} years
Gender: ${data.gender}
Lifestyle: ${data.lifestyle}
Symptoms: ${data.symptoms || 'None reported'}

🔍 AI Analysis Results:
${data.results}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ IMPORTANT DISCLAIMER:
This is an AI-generated assessment and should NOT replace professional medical advice. Please consult with a qualified healthcare provider for proper diagnosis and treatment.

📞 Next Steps:
• Book a consultation with our doctors: https://thehealthorbit.com/telemedicine
• Explore our preventive care packages: https://thehealthorbit.com/preventive-care
• Call our helpline for immediate assistance: +92 21 1234 5678

🏥 Why Choose Health Orbit?
✓ 24/7 Telemedicine consultations
✓ Expert doctors across specialties
✓ Comprehensive health plans
✓ Free home sample collection

Assessment Date: ${data.timestamp}

Stay healthy and safe!

Best regards,
The Health Orbit Medical Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated email. For questions, contact: support@healthorbit.com
    `;
    
    MailApp.sendEmail({
      to: data.email,
      subject: subject,
      body: body
    });
    
    Logger.log('✅ AI assessment email sent to: ' + data.email);
  } catch (error) {
    Logger.log('❌ Error sending email: ' + error.toString());
  }
}

/**
 * Send newsletter welcome email
 */
function sendNewsletterWelcomeEmail(data) {
  try {
    const subject = "Welcome to Health Orbit Newsletter! 🎉";
    const body = `
Dear Subscriber,

Welcome to the Health Orbit family! 🏥

Thank you for subscribing to our newsletter. You're now part of a community committed to better health and wellness.

📬 What to Expect:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Weekly health tips and wellness advice
✓ Exclusive offers on health packages (up to 50% off)
✓ Early access to new services and features
✓ Expert medical insights and preventive care guides
✓ Ramadan wellness programs and seasonal health tips

🎁 WELCOME BONUS:
As a thank you for subscribing, get 10% OFF on your first health package!
Use code: WELCOME10

🏥 Explore Our Services:
• AI Health Assessment (FREE): https://thehealthorbit.com/ai-assessment
• Telemedicine Consultations: https://thehealthorbit.com/telemedicine
• Comprehensive Health Plans: https://thehealthorbit.com/health-plans
• Preventive Care Packages: https://thehealthorbit.com/preventive-care

📞 Need Assistance?
Call: +92 21 1234 5678
Email: support@healthorbit.com
Website: https://thehealthorbit.com

Subscribed: ${data.timestamp}

Stay healthy, stay informed!

Best regards,
The Health Orbit Team
A Lifecare Global Ecosystem

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You can unsubscribe at any time by clicking here: [Unsubscribe Link]
    `;
    
    MailApp.sendEmail({
      to: data.email,
      subject: subject,
      body: body
    });
    
    Logger.log('✅ Newsletter welcome email sent to: ' + data.email);
  } catch (error) {
    Logger.log('❌ Error sending email: ' + error.toString());
  }
}

/**
 * Send customer information form confirmation
 */
function sendCustomerInformationEmail(data) {
  try {
    const subject = "Registration Confirmed - Health Orbit";
    const body = `
Dear ${data.fullName},

Your registration with Health Orbit has been successfully completed!

📋 Registration Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full Name: ${data.fullName}
Product Category: ${data.productCategory}
Registration Date: ${data.timestamp}
${data.referredBy !== 'N/A' ? 'Referred By: ' + data.referredBy : ''}

✅ What's Next?
Our team will contact you within 24 hours to:
• Complete your enrollment process
• Explain your ${data.productCategory} package benefits
• Schedule your initial health screening
• Answer any questions you may have

📞 Contact Information:
Phone: ${data.contactNumber}
Email: ${data.email}

🎁 Your ${data.productCategory} Package Includes:
✓ Comprehensive health screenings
✓ 24/7 telemedicine access
✓ Free home sample collection
✓ Digital health records
✓ Priority doctor consultations

For immediate assistance, call: +92 21 1234 5678

Welcome to better healthcare!

Best regards,
The Health Orbit Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated confirmation. For queries: support@healthorbit.com
    `;
    
    MailApp.sendEmail({
      to: data.email,
      subject: subject,
      body: body
    });
    
    Logger.log('✅ Customer information email sent to: ' + data.email);
  } catch (error) {
    Logger.log('❌ Error sending email: ' + error.toString());
  }
}

/**
 * Simple function to authorize email permissions
 * Run this ONCE to grant email sending permissions
 */
function authorizeEmailPermissions() {
  // Send a simple test email to yourself
  MailApp.sendEmail({
    to: Session.getActiveUser().getEmail(),
    subject: "✅ Email Authorization Successful - Health Orbit",
    body: "Great! Your Google Apps Script now has permission to send emails.\n\nYour automated email system is ready to work!"
  });
  
  Logger.log("✅ Authorization successful! Email sent to: " + Session.getActiveUser().getEmail());
}

function doGet() {
  return ContentService.createTextOutput('Google Sheets Integration Active');
}
```

4. Click **💾 Save** (or Ctrl+S)
5. Name your project: **"Healthcare Data Tracker"**

---

### Step 3: Deploy as Web App

1. Click the **Deploy** button (top right) → **New deployment**
2. Click the ⚙️ gear icon next to "Select type"
3. Choose **Web app**
4. Configure settings:
   - **Description**: "Healthcare Website Data Tracker"
   - **Execute as**: **Me** (your account)
   - **Who has access**: **Anyone** (important!)
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to Healthcare Data Tracker (unsafe)**
9. Click **Allow**
10. **COPY THE WEB APP URL** - it looks like:
    ```
    https://script.google.com/macros/s/AKfycby.../exec
    ```

---

### Step 4: Update Your Website Code

1. Open this file in VS Code:
   ```
   src/utils/googleSheets.ts
   ```

2. Find line 8:
   ```typescript
   const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
   ```

3. Replace it with your actual URL:
   ```typescript
   const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_URL/exec';
   ```

4. **Save the file** (Ctrl+S)

---

### Step 5: Test Your Integration

1. Rebuild your website:
   ```bash
   npm run build
   ```

2. Run your website:
   ```bash
   npm run dev
   ```

3. Go to your website and fill out a contact form or complete an AI assessment

4. Check your Google Sheet - you should see new data appear automatically! 🎉

---

## 📊 Your Google Sheets Structure

After the first submissions, your Google Sheet will automatically create these sheets:

### 1. Contact Forms
| Timestamp | Name | Email | Phone | Subject | Message |
|-----------|------|-------|-------|---------|---------|

### 2. AI Assessments
| Timestamp | Name | Phone | Email | Age | Gender | Symptoms | Lifestyle | Results |
|-----------|------|-------|-------|-----|--------|----------|-----------|---------|

### 3. Network Applications
| Timestamp | Name | Partner Type | Email | Phone | City | Description |
|-----------|------|--------------|-------|-------|------|-------------|

### 4. Guest User Tracking
| Timestamp | Email | Phone | Source | First Visit | Last Visit | Page Views | User Agent | Referrer | Current Page |
|-----------|-------|-------|--------|-------------|------------|------------|------------|----------|--------------|

### 5. Preventive Checkups
| Timestamp | Name | Email | Phone | Preferred Date |
|-----------|------|-------|-------|----------------|

### 6. Telemedicine Bookings
| Timestamp | Name | Email | Phone | Specialty | Preferred Time |
|-----------|------|-------|-------|-----------|----------------|

### 7. Customer Information
| Timestamp | Full Name | Date of Birth | Age | Gender | CNIC/Passport | Contact Number | Email | Product Category | Referred By |
|-----------|-----------|---------------|-----|--------|---------------|----------------|-------|------------------|-------------|

### 8. Newsletter Subscriptions
| Timestamp | Email | Source Page |
|-----------|-------|-------------|

---

## 🔒 Privacy & Security

✅ **Data is stored in YOUR Google Account** (only you have access)
✅ **Secure HTTPS connection** between website and Google Sheets
✅ **No third-party services** involved
✅ **You control all the data** - can export, delete, or backup anytime

---

## ⚠️ Common Issues & Solutions

### Issue 1: "Access Denied" Error
**Solution**: Make sure "Who has access" is set to **Anyone** in deployment settings

### Issue 2: Data Not Appearing
**Solution**: 
1. Check browser console for errors (F12)
2. Verify the URL in `googleSheets.ts` is correct
3. Make sure you saved the file after updating the URL

### Issue 3: "Script Not Found"
**Solution**: Redeploy the Apps Script as a new version:
- Apps Script → Deploy → Manage deployments → New version

---

## 🔄 Updating the Apps Script (After Code Changes)

**⚠️ IMPORTANT**: If you update the Apps Script code (like adding the guest-user-tracking feature), you MUST redeploy:

### Option 1: New Deployment (Recommended)
1. In Apps Script, click **Deploy** → **New deployment**
2. Choose **Web app**
3. Configure settings (same as before)
4. Click **Deploy**
5. **Copy the new URL** and update `src/utils/googleSheets.ts`

### Option 2: Update Existing Deployment
1. In Apps Script, click **Deploy** → **Manage deployments**
2. Click the ✏️ **Edit** icon (pencil) next to your deployment
3. Click **Version** → **New version**
4. Click **Deploy**
5. The URL stays the same - no need to update your code!

**💡 Tip**: Option 2 is faster if you already have the URL configured in your website.

---

## 🎉 You're All Set!

Your website now automatically tracks all user interactions in Google Sheets.

**Benefits:**
- 📊 Real-time data tracking
- 📧 Easy to export for email campaigns
- 📈 Analytics ready (import to Excel/Power BI)
- 🔔 Set up Google Sheets notifications
- 📱 Access from anywhere

---

**Last Updated**: February 15, 2026
