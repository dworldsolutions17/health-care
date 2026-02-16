/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

 

  const retrieveUserData = () => {
    // Try to get user data from various storage methods
    const localStorageData = localStorage.getItem('userContactInfo');
    const sessionStorageData = sessionStorage.getItem('userContactInfo');
    const emailCookie = getCookie('userEmail');
    const phoneCookie = getCookie('userPhone');

    let userData = null;

    if (localStorageData && localStorageData !== 'skipped') {
      try {
        userData = JSON.parse(localStorageData);
        console.log('Retrieved from localStorage:', userData);
      } catch (error) {
        console.error('Error parsing localStorage data:', error);
      }
    } else if (sessionStorageData && sessionStorageData !== 'skipped') {
      try {
        userData = JSON.parse(sessionStorageData);
        console.log('Retrieved from sessionStorage:', userData);
      } catch (error) {
        console.error('Error parsing sessionStorage data:', error);
      }
    } else if (emailCookie || phoneCookie) {
      userData = {
        email: emailCookie,
        phone: phoneCookie,
      };
      console.log('Retrieved from cookies:', userData);
    }

    if (userData) {
      // Optional: Send to analytics or backend
      trackUserSession(userData);
    }
  };

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
  };

  const trackUserSession = (userData: any) => {
    // Store session tracking
    sessionStorage.setItem('sessionTracking', JSON.stringify({
      ...userData,
      sessionStart: new Date().toISOString(),
      pageViews: parseInt(sessionStorage.getItem('pageViews') || '0') + 1,
    }));

    // Optional: Send to backend analytics
    // fetch('/api/track-session', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(userData),
    // });

    console.log('User session tracked silently');
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
