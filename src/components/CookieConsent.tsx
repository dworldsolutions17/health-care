/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendToGoogleSheets, getCurrentTimestamp } from '../utils/googleSheets';

interface GuestUserData {
  email?: string;
  phone?: string;
  source: 'localStorage' | 'sessionStorage' | 'cookies' | 'new-session';
  firstVisit: string;
  lastVisit: string;
  pageViews: number;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

 

  const retrieveUserData = async () => {
    // Try to get user data from various storage methods
    const localStorageData = localStorage.getItem('userContactInfo');
    const sessionStorageData = sessionStorage.getItem('userContactInfo');
    const emailCookie = getCookie('userEmail');
    const phoneCookie = getCookie('userPhone');

    let userData: GuestUserData | null = null;
    // let source: GuestUserData['source'] = 'new-session';

    // Check localStorage first (persistent)
    if (localStorageData && localStorageData !== 'skipped') {
      try {
        const parsed = JSON.parse(localStorageData);
        userData = {
          email: parsed.email,
          phone: parsed.phone,
          source: 'localStorage',
          firstVisit: parsed.firstVisit || getCurrentTimestamp(),
          lastVisit: getCurrentTimestamp(),
          pageViews: (parsed.pageViews || 0) + 1,
        };
        console.log('✅ Retrieved from localStorage:', userData);
      } catch (error) {
        console.error('❌ Error parsing localStorage data:', error);
      }
    } 
    // Check sessionStorage (current session only)
    else if (sessionStorageData && sessionStorageData !== 'skipped') {
      try {
        const parsed = JSON.parse(sessionStorageData);
        userData = {
          email: parsed.email,
          phone: parsed.phone,
          source: 'sessionStorage',
          firstVisit: parsed.firstVisit || getCurrentTimestamp(),
          lastVisit: getCurrentTimestamp(),
          pageViews: (parsed.pageViews || 0) + 1,
        };
        console.log('✅ Retrieved from sessionStorage:', userData);
      } catch (error) {
        console.error('❌ Error parsing sessionStorage data:', error);
      }
    } 
    // Check cookies (if set by other mechanisms)
    else if (emailCookie || phoneCookie) {
      userData = {
        email: emailCookie || undefined,
        phone: phoneCookie || undefined,
        source: 'cookies',
        firstVisit: getCookie('firstVisit') || getCurrentTimestamp(),
        lastVisit: getCurrentTimestamp(),
        pageViews: parseInt(getCookie('pageViews') || '1'),
      };
      console.log('✅ Retrieved from cookies:', userData);
    }
    // New guest user - create initial tracking
    else {
      userData = {
        source: 'new-session',
        firstVisit: getCurrentTimestamp(),
        lastVisit: getCurrentTimestamp(),
        pageViews: 1,
      };
      console.log('🆕 New guest user session started');
    }

    if (userData) {
      // Track user session locally
      trackUserSession(userData);
      
      // Send guest user data to Google Sheets for analytics
      await sendGuestDataToSheets(userData);
    }
  };

  const sendGuestDataToSheets = async (userData: GuestUserData) => {
    try {
      // Create guest user tracking data for Google Sheets
      const guestData = {
        type: 'guest-user-tracking' as const,
        timestamp: getCurrentTimestamp(),
        email: userData.email || 'N/A',
        phone: userData.phone || 'N/A',
        source: userData.source,
        firstVisit: userData.firstVisit,
        lastVisit: userData.lastVisit,
        pageViews: userData.pageViews.toString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct',
        currentPage: window.location.pathname,
      };

      // Send to Google Sheets
      await sendToGoogleSheets(guestData as any);
      console.log('📊 Guest user data sent to Google Sheets');
    } catch (error) {
      console.error('❌ Error sending guest data to Google Sheets:', error);
    }
  };

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
  };

  const trackUserSession = (userData: GuestUserData) => {
    // Update localStorage with latest visit data (persistent across sessions)
    const updatedData = {
      email: userData.email,
      phone: userData.phone,
      firstVisit: userData.firstVisit,
      lastVisit: userData.lastVisit,
      pageViews: userData.pageViews,
    };
    
    localStorage.setItem('userContactInfo', JSON.stringify(updatedData));
    
    // Also store in sessionStorage for current session tracking
    sessionStorage.setItem('sessionTracking', JSON.stringify({
      ...updatedData,
      sessionStart: new Date().toISOString(),
      currentPage: window.location.pathname,
      source: userData.source,
    }));

    // Set cookies (expires in 365 days)
    if (userData.email) {
      document.cookie = `userEmail=${userData.email}; max-age=${365 * 24 * 60 * 60}; path=/`;
    }
    if (userData.phone) {
      document.cookie = `userPhone=${userData.phone}; max-age=${365 * 24 * 60 * 60}; path=/`;
    }
    document.cookie = `firstVisit=${userData.firstVisit}; max-age=${365 * 24 * 60 * 60}; path=/`;
    document.cookie = `pageViews=${userData.pageViews}; max-age=${365 * 24 * 60 * 60}; path=/`;

    console.log('💾 User session tracked:', {
      storage: 'localStorage + sessionStorage + cookies',
      data: updatedData,
    });
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    retrieveUserData();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

   useEffect(() => {
    // Check if user has already responded to cookie consent
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
      // Show banner after 2 seconds for better UX
      setTimeout(() => setShowBanner(true), 2000);
    } else if (cookieConsent === 'accepted') {
      // Silently track user session and retrieve stored data
      retrieveUserData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-[100] bg-white shadow-2xl border-t-2 border-primary-600"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-4xl">🍪</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      We Value Your Privacy
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We use cookies to enhance your experience, provide personalized healthcare recommendations, and keep you updated with our health programs. By accepting, you'll help us serve you better.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDecline}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Decline
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAccept}
                    className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Accept Cookies
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
