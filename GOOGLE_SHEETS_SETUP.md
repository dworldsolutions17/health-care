# 📊 Google Sheets Integration Setup Guide

This guide will help you connect your healthcare website to Google Sheets to automatically track all user interactions.

## 🎯 What Data Gets Tracked?

Your website will automatically save the following data to Google Sheets:

1. **Contact Form Submissions** → "Contact Forms" sheet
2. **AI Health Assessment Results** → "AI Assessments" sheet
3. **Join Network Applications** → "Network Applications" sheet

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
    
    switch(data.type) {
      case 'contact':
        sheet = ss.getSheetByName('Contact Forms') || ss.insertSheet('Contact Forms');
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message']);
        }
        row = [data.timestamp, data.name, data.email, data.phone, data.subject, data.message];
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
        
      default:
        return ContentService.createTextOutput(JSON.stringify({
          status: 'error',
          message: 'Unknown data type'
        })).setMimeType(ContentService.MimeType.JSON);
    }
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
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
