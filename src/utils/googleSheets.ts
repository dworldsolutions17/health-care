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

export type SheetData = 
  | ContactFormData 
  | AIAssessmentData 
  | PreventiveCheckupData 
  | TelemedicineBookingData 
  | JoinNetworkData;

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

// ============================================================
// GOOGLE APPS SCRIPT CODE TO PASTE IN GOOGLE APPS SCRIPT EDITOR
// ============================================================
/*

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
          sheet.appendRow(['Timestamp', 'Age', 'Gender', 'Symptoms', 'Lifestyle', 'Results']);
        }
        row = [data.timestamp, data.age, data.gender, data.symptoms, data.lifestyle, data.results];
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

*/
