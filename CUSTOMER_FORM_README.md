# 📋 Customer Information Form - Standalone Page

## Overview
A dedicated standalone form page for collecting patient/customer information without any navigation to the main website.

## 🌐 Access URL
```
https://yourdomain.com/customer-information
```

## ✨ Features

### Form Fields
- **Full Name** (Required)
- **Date of Birth** (Required) - Auto-calculates age
- **Age** (Auto-filled)
- **Gender** (Required) - Male / Female / Other
- **CNIC / Passport No** (Required)
- **Contact Number** (Required)
- **Email Address** (Required)
- **Product Category** (Required) - Platinum / Titanium / Gold / Silver / Bronze
- **Customer Referred By** (Optional)

### Design
- ✅ Fully mobile responsive
- ✅ Clean, professional healthcare design
- ✅ No header or footer (standalone form)
- ✅ Auto-submit to Google Sheets
- ✅ Success/Error notifications
- ✅ Form validation
- ✅ Age auto-calculation from DOB

### Technical Details
- **Route**: `/customer-information`
- **Layout**: Standalone (no Header/Footer)
- **Data Storage**: Google Sheets → "Customer Information" sheet
- **Validation**: All required fields enforced

## 📊 Google Sheets Integration

### Sheet Name
`Customer Information`

### Columns
| Timestamp | Full Name | Date of Birth | Age | Gender | CNIC/Passport | Contact Number | Email | Product Category | Referred By |
|-----------|-----------|---------------|-----|--------|---------------|----------------|-------|------------------|-------------|

### Google Apps Script Update Required
Add this case to your Apps Script:

```javascript
case 'customer-information':
  sheet = ss.getSheetByName('Customer Information') || ss.insertSheet('Customer Information');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Full Name', 'Date of Birth', 'Age', 'Gender', 'CNIC/Passport', 'Contact Number', 'Email', 'Product Category', 'Referred By']);
  }
  row = [data.timestamp, data.fullName, data.dateOfBirth, data.age, data.gender, data.cnicPassport, data.contactNumber, data.email, data.productCategory, data.referredBy];
  break;
```

## 🔗 How to Share This Form

### Option 1: Direct Link
Share this URL with patients/customers:
```
https://yourdomain.com/customer-information
```

### Option 2: QR Code
Generate a QR code pointing to `/customer-information` for easy mobile access

### Option 3: Email Template
```
Dear Customer,

Please fill out our customer information form:
https://yourdomain.com/customer-information

Thank you,
Health Orbit Team
```

## 📱 Usage Scenarios

1. **New Patient Registration**: Send link to new patients before their first visit
2. **Health Plan Sign-ups**: Collect customer info for Platinum/Gold/etc. plans
3. **Referral Tracking**: Track which customers were referred by whom
4. **Mobile Sign-ups**: Easy form access via QR code at reception

## 🛡️ Privacy & Security

- ✅ Secure HTTPS connection
- ✅ Data stored in YOUR Google Sheets only
- ✅ No third-party data sharing
- ✅ CNIC/Passport info protected
- ✅ Email validation enforced

## 🔧 Customization

### Add More Product Categories
Edit line in `CustomerInformationPage.tsx`:
```typescript
<option value="Diamond">Diamond</option>
<option value="Premium">Premium</option>
```

### Change Required Fields
Remove/add `required` attribute from form inputs

### Modify Success Message
Edit the success message in the form component

---

**File Location**: `src/pages/CustomerInformationPage.tsx`

**Last Updated**: February 18, 2026
