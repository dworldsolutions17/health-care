# 📊 User Tracking & Storage Guide

## Overview
This healthcare application tracks guest users and their contact information using multiple storage mechanisms for data persistence and analytics.

---

## 🔐 Storage Mechanisms Used

### 1. **localStorage** (Persistent Storage)
- **What it is**: Browser storage that persists even after browser closes
- **Used for**: `userContactInfo`
- **Data stored**:
  ```json
  {
    "email": "user@example.com",
    "phone": "+92-300-1234567",
    "name": "John Doe",
    "firstVisit": "02/17/2026, 10:30:45",
    "lastVisit": "02/17/2026, 15:22:10",
    "pageViews": 5
  }
  ```
- **Lifetime**: Permanent (until user clears browser data)

### 2. **sessionStorage** (Temporary Storage)
- **What it is**: Browser storage that clears when tab/window closes
- **Used for**: `sessionTracking`, `userContactInfo` (backup)
- **Data stored**:
  ```json
  {
    "email": "user@example.com",
    "phone": "+92-300-1234567",
    "sessionStart": "2026-02-17T10:30:45.123Z",
    "currentPage": "/services",
    "source": "localStorage",
    "pageViews": 5
  }
  ```
- **Lifetime**: Current browser session only

### 3. **Cookies** (HTTP Cookies)
- **What it is**: Small text files stored by browser, sent with every HTTP request
- **Used for**: Individual fields for server-side access
- **Cookies set**:
  - `userEmail` - User's email address
  - `userPhone` - User's phone number
  - `userName` - User's name
  - `firstVisit` - First visit timestamp
  - `pageViews` - Total page views count
- **Lifetime**: 365 days (1 year)
- **Properties**: `SameSite=Lax`, `path=/`

---

## 📝 How to Use in Your Code

### Import the Utility
```typescript
import { 
  saveUserContactInfo, 
  getUserContactInfo,
  clearUserContactInfo,
  hasUserContactInfo 
} from '../utils/userTracking';
```

### Save User Contact Info
Call this whenever you collect user email/phone (forms, modals, etc.):

```typescript
// Example: After user submits a contact form
const handleSubmit = (formData) => {
  saveUserContactInfo({
    email: formData.email,
    phone: formData.phone,
    name: formData.name,
  });
  
  // Then send to Google Sheets or backend
  // ...
};
```

### Retrieve User Contact Info
```typescript
const userInfo = getUserContactInfo();

if (userInfo) {
  console.log('Returning user:', userInfo.email);
  // Pre-fill form fields
  setEmail(userInfo.email || '');
  setPhone(userInfo.phone || '');
} else {
  console.log('New visitor');
}
```

### Check if User Info Exists
```typescript
if (hasUserContactInfo()) {
  // User has provided contact info before
  showPersonalizedContent();
} else {
  // New visitor - show welcome modal
  setShowWelcomeModal(true);
}
```

### Clear User Data (GDPR Compliance)
```typescript
// Add a "Forget Me" button
const handleForgetMe = () => {
  clearUserContactInfo();
  alert('Your data has been removed from this browser');
};
```

---

## 📊 Google Sheets Integration

### Data Sent to Sheets
When user accepts cookies, their data is automatically sent to Google Sheets:

**Sheet Name**: `Guest User Tracking`

**Columns**:
| Timestamp | Email | Phone | Source | First Visit | Last Visit | Page Views | User Agent | Referrer | Current Page |
|-----------|-------|-------|--------|-------------|------------|------------|------------|----------|--------------|
| 02/17/2026 10:30 | user@example.com | +92-300... | localStorage | 02/15/2026 | 02/17/2026 | 12 | Mozilla/5.0... | google.com | /services |

### How It Works
1. User visits website
2. Cookie consent banner appears
3. User accepts cookies
4. System checks for existing data in localStorage/sessionStorage/cookies
5. Data is retrieved and updated (or new data created)
6. Data is sent to Google Sheets via Apps Script
7. Local storage is updated

---

## 🔄 Storage Priority & Retrieval Order

The system tries to retrieve user data in this order:

1. **localStorage** (highest priority - most reliable)
2. **sessionStorage** (fallback for current session)
3. **Cookies** (fallback if storage APIs unavailable)
4. **New session** (create new tracking if nothing found)

This ensures maximum data persistence across:
- ✅ Page refreshes
- ✅ Browser restarts
- ✅ Different tabs
- ✅ Cookie-only environments

---

## 🎯 Use Cases

### 1. **Pre-fill Contact Forms**
```typescript
const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  useEffect(() => {
    const userInfo = getUserContactInfo();
    if (userInfo) {
      setEmail(userInfo.email || '');
      setPhone(userInfo.phone || '');
    }
  }, []);
  
  // ... rest of form
};
```

### 2. **Track Returning Visitors**
```typescript
const userInfo = getUserContactInfo();

if (userInfo && userInfo.pageViews && userInfo.pageViews > 5) {
  // Show special offer for frequent visitors
  setShowLoyaltyDiscount(true);
}
```

### 3. **Personalized Welcome Messages**
```typescript
const userInfo = getUserContactInfo();

if (userInfo && userInfo.name) {
  return <h1>Welcome back, {userInfo.name}! 👋</h1>;
} else {
  return <h1>Welcome to Health Orbit! 🏥</h1>;
}
```

### 4. **Analytics & Reporting**
All guest user data is automatically sent to Google Sheets for analysis:
- Track repeat visitors
- Measure engagement (page views)
- Identify referral sources
- Analyze user behavior patterns

---

## 🛡️ Privacy & GDPR Compliance

### Cookie Consent
- Users must accept cookies before tracking starts
- Clear explanation of what data is collected
- Option to decline tracking

### Data Stored
- **Personal Data**: Email, Phone, Name (optional)
- **Analytics Data**: Visit timestamps, page views, source
- **Technical Data**: User agent, referrer, current page

### User Rights
- **Right to Access**: Users can see their data in browser DevTools
- **Right to Deletion**: `clearUserContactInfo()` removes all data
- **Right to Object**: Declining cookies prevents tracking

---

## 🔧 Debugging & Testing

### View Stored Data in Browser Console
```javascript
// Check localStorage
console.log('localStorage:', localStorage.getItem('userContactInfo'));

// Check sessionStorage
console.log('sessionStorage:', sessionStorage.getItem('sessionTracking'));

// Check cookies
console.log('cookies:', document.cookie);
```

### Clear All Data (Reset Testing)
```javascript
localStorage.clear();
sessionStorage.clear();
document.cookie.split(";").forEach(c => {
  document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
});
```

---

## 📋 Summary

**Storage Mechanism**: Triple redundancy (localStorage + sessionStorage + cookies)

**Data Fields**: email, phone, name, firstVisit, lastVisit, pageViews

**Persistence**: Up to 1 year (cookies) or until user clears data

**Analytics**: Automatically sent to Google Sheets "Guest User Tracking" tab

**Usage**: Import `userTracking.ts` utility functions anywhere in the app

**Privacy**: GDPR compliant with cookie consent and data deletion options
