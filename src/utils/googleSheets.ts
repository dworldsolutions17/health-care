// Google Sheets Integration Utility
// Instructions to setup:
// 1. Go to https://script.google.com
// 2. Create a new project
// 3. Paste the Google Apps Script code (see below)
// 4. Deploy as Web App
// 5. Copy the deployment URL and paste it in GOOGLE_SHEETS_URL below

const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || '';

export interface ContactFormData {
  type: 'contact';
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface AIAssessmentData {
  type: 'ai-assessment';
  timestamp: string;
  name: string;
  phone: string;
  email?: string;
  age: string;
  gender: string;
  symptoms: string;
  lifestyle: string;
  results: string;
}

export interface PreventiveCheckupData {
  type: 'preventive-checkup';
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  preferredDate?: string;
}

export interface TelemedicineBookingData {
  type: 'telemedicine-booking';
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  specialty?: string;
  preferredTime?: string;
}

export interface JoinNetworkData {
  type: 'join-network';
  timestamp: string;
  name: string;
  partnerType: string;
  email: string;
  phone: string;
  city: string;
  description: string;
}

export interface GuestUserTrackingData {
  type: 'guest-user-tracking';
  timestamp: string;
  email: string;
  phone: string;
  source: string;
  firstVisit: string;
  lastVisit: string;
  pageViews: string;
  userAgent: string;
  referrer: string;
  currentPage: string;
}

export interface CustomerInformationData {
  type: 'customer-information';
  timestamp: string;
  fullName: string;
  dateOfBirth: string;
  age: string;
  gender: string;
  cnicPassport: string;
  contactNumber: string;
  email: string;
  productCategory: string;
  referredBy: string;
}

export interface NewsletterSubscriptionData {
  type: 'newsletter-subscription';
  timestamp: string;
  email: string;
  source: string;
}

export type SheetData = 
  | ContactFormData 
  | AIAssessmentData 
  | PreventiveCheckupData 
  | TelemedicineBookingData 
  | JoinNetworkData
  | GuestUserTrackingData
  | CustomerInformationData
  | NewsletterSubscriptionData;

/**
 * Send data to Google Sheets via Google Apps Script Web App
 */
export const sendToGoogleSheets = async (data: SheetData): Promise<boolean> => {
  // Skip if no URL configured
  if (!GOOGLE_SHEETS_URL || GOOGLE_SHEETS_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
    console.warn('Google Sheets URL not configured. Data not sent:', data);
    return false;
  }

  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors', // Important for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Note: With 'no-cors' mode, we can't read the response
    // We assume success if no error is thrown
    console.log('✅ Data sent to Google Sheets:', data.type);
    return true;
  } catch (error) {
    console.error('❌ Error sending to Google Sheets:', error);
    return false;
  }
};

/**
 * Helper to create timestamp
 */
export const getCurrentTimestamp = (): string => {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Karachi',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};
