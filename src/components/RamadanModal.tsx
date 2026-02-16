import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const RamadanModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds every time user lands on homepage
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed inset-0 m-auto w-[96%] sm:w-[90%] max-w-2xl h-fit max-h-[90vh] sm:max-h-[85vh] z-[101] flex flex-col"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-full">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors z-20 shadow-lg"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header with gradient - Fixed */}
              <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 text-white p-4 sm:p-6 md:p-8 rounded-t-3xl relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
                </div>
                <div className="relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3 text-center"
                  >
                    🌙
                  </motion.div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2">
                    Ramadan Wellness Program
                  </h2>
                  <p className="text-center text-green-100 text-sm sm:text-base md:text-lg">
                    Fast with Confidence & Protect What Matters Most
                  </p>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1 custom-scrollbar">
                <div className="p-4 sm:p-6 md:p-8">
              {/* Special Offer Badge */}
              <div className="bg-yellow-100 border-2 border-yellow-400 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 text-center">
                <p className="text-base sm:text-xl md:text-2xl font-bold text-yellow-800">
                  🎁 SPECIAL OFFER: <span className="text-xl sm:text-2xl md:text-3xl text-red-600">26% OFF</span>
                </p>
                <p className="text-xs sm:text-sm text-yellow-700 mt-1">Limited time offer on all health screening packages</p>
              </div>

              {/* Key Message */}
              <div className="mb-4 sm:mb-6">
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                  Ramadan is a month of blessings, but fasting can become dangerous when hidden health risks go unnoticed.
                </p>
                <div className="bg-red-50 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4">
                  <p className="text-sm sm:text-base font-semibold text-red-900 mb-2">⚠️ Hidden risks include:</p>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <div>❌ High sugar</div>
                    <div>❌ Undetected liver issues</div>
                    <div>❌ Blood pressure</div>
                    <div>❌ Kidney problems</div>
                    <div>❌ Silent heart disease</div>
                    <div>❌ Cholesterol</div>
                  </div>
                </div>
              </div>

              {/* Packages Overview */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  Choose Your Screening Package
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-white p-2.5 sm:p-3 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm sm:text-base font-semibold text-gray-900">Ramadan Smart Care</span>
                      <span className="text-sm sm:text-base text-green-600 font-bold whitespace-nowrap">PKR 5,000</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Quick risk overview with essential monitoring</p>
                  </div>
                  <div className="bg-white p-2.5 sm:p-3 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm sm:text-base font-semibold text-gray-900">Ramadan Essential Care</span>
                      <span className="text-sm sm:text-base text-green-600 font-bold whitespace-nowrap">PKR 7,000</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Advanced screening for everyday safety</p>
                  </div>
                  <div className="bg-white p-2.5 sm:p-3 rounded-lg shadow-sm border-2 border-blue-300">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm sm:text-base font-semibold text-gray-900">Executive Platinum Care</span>
                      <span className="text-sm sm:text-base text-blue-600 font-bold whitespace-nowrap">PKR 15,000</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Complete evaluation for maximum protection</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-green-50 p-3 sm:p-4 rounded-xl mb-4 sm:mb-6">
                <h4 className="text-sm sm:text-base font-semibold text-green-900 mb-2">✅ What You Get:</h4>
                <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                  <li>• Complete health screening before Ramadan</li>
                  <li>• Doctor consultation for fasting guidance</li>
                  <li>• Personalized diet & medication plan</li>
                  <li>• Digital medical records</li>
                  <li>• Risk assessment reports</li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/ramadan-wellness"
                  onClick={handleClose}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-center text-sm sm:text-base hover:shadow-lg transition-all"
                >
                  Book Screening Now
                </Link>
                <button
                  onClick={handleClose}
                  className="flex-1 bg-gray-200 text-gray-700 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-300 transition-all"
                >
                  Maybe Later
                </button>
              </div>
                </div>
              </div>
            </div>

            {/* Custom scrollbar styles */}
            <style>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #10b981;
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #059669;
              }
            `}</style>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RamadanModal;
