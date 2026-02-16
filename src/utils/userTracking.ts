/**
 * User Tracking Utility
 * 
 * This utility helps track and store user contact information across the application.
 * It uses multiple storage mechanisms for redundancy and persistence.
 */

import { getCurrentTimestamp } from './googleSheets';

export interface UserContactInfo {
  email?: string;
  phone?: string;
  name?: string;
  firstVisit?: string;
  lastVisit?: string;
  pageViews?: number;
}

/**
 * Save user contact information to all storage mechanisms
 * Call this function whenever you collect user email/phone (forms, popups, etc.)
 * 
 * Storage mechanisms used:
 * - localStorage: Persistent across sessions (stays even after browser close)
 * - sessionStorage: Only for current session (cleared when tab closes)
 * - Cookies: Accessible by server and client, expires in 1 year
 * 
 * @param contactInfo - User's contact information
 */
export const saveUserContactInfo = (contactInfo: UserContactInfo): void => {
  try {
    // Get existing data to preserve firstVisit and pageViews
    const existingData = getUserContactInfo();
    
    const updatedData: UserContactInfo = {
      email: contactInfo.email || existingData?.email,
      phone: contactInfo.phone || existingData?.phone,
      name: contactInfo.name || existingData?.name,
      firstVisit: existingData?.firstVisit || getCurrentTimestamp(),
      lastVisit: getCurrentTimestamp(),
      pageViews: (existingData?.pageViews || 0) + 1,
    };

    // 1. Save to localStorage (persistent)
    localStorage.setItem('userContactInfo', JSON.stringify(updatedData));
    
    // 2. Save to sessionStorage (current session)
    sessionStorage.setItem('userContactInfo', JSON.stringify(updatedData));
    
    // 3. Save to cookies (expires in 365 days)
    const maxAge = 365 * 24 * 60 * 60; // 1 year in seconds
    
    if (updatedData.email) {
      document.cookie = `userEmail=${updatedData.email}; max-age=${maxAge}; path=/; SameSite=Lax`;
    }
    if (updatedData.phone) {
      document.cookie = `userPhone=${updatedData.phone}; max-age=${maxAge}; path=/; SameSite=Lax`;
    }
    if (updatedData.name) {
      document.cookie = `userName=${updatedData.name}; max-age=${maxAge}; path=/; SameSite=Lax`;
    }
    
    console.log('✅ User contact info saved successfully:', {
      storage: 'localStorage + sessionStorage + cookies',
      data: { ...updatedData, email: updatedData.email ? '***' : undefined }, // Hide email in logs
    });
  } catch (error) {
    console.error('❌ Error saving user contact info:', error);
  }
};

/**
 * Retrieve user contact information from storage
 * Tries localStorage first, then sessionStorage, then cookies
 * 
 * @returns UserContactInfo or null if not found
 */
export const getUserContactInfo = (): UserContactInfo | null => {
  try {
    // Try localStorage first
    const localData = localStorage.getItem('userContactInfo');
    if (localData && localData !== 'skipped') {
      return JSON.parse(localData);
    }
    
    // Try sessionStorage
    const sessionData = sessionStorage.getItem('userContactInfo');
    if (sessionData && sessionData !== 'skipped') {
      return JSON.parse(sessionData);
    }
    
    // Try cookies
    const email = getCookie('userEmail');
    const phone = getCookie('userPhone');
    const name = getCookie('userName');
    
    if (email || phone) {
      return { email, phone, name };
    }
    
    return null;
  } catch (error) {
    console.error('❌ Error retrieving user contact info:', error);
    return null;
  }
};

/**
 * Clear all user contact information from all storage mechanisms
 */
export const clearUserContactInfo = (): void => {
  try {
    // Clear localStorage
    localStorage.removeItem('userContactInfo');
    
    // Clear sessionStorage
    sessionStorage.removeItem('userContactInfo');
    sessionStorage.removeItem('sessionTracking');
    
    // Clear cookies (set max-age to 0)
    document.cookie = 'userEmail=; max-age=0; path=/';
    document.cookie = 'userPhone=; max-age=0; path=/';
    document.cookie = 'userName=; max-age=0; path=/';
    document.cookie = 'firstVisit=; max-age=0; path=/';
    document.cookie = 'pageViews=; max-age=0; path=/';
    
    console.log('🗑️ User contact info cleared from all storage');
  } catch (error) {
    console.error('❌ Error clearing user contact info:', error);
  }
};

/**
 * Helper function to get cookie value by name
 */
const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(';').shift();
    return cookieValue || undefined;
  }
  return undefined;
};

/**
 * Check if user has provided contact information
 */
export const hasUserContactInfo = (): boolean => {
  const userInfo = getUserContactInfo();
  return !!(userInfo?.email || userInfo?.phone);
};
