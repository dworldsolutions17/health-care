import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      label: 'Start Assessment',
      action: () => window.location.href = '/ai-assessment',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Book Consultation',
      action: () => window.location.href = '/telemedicine',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      label: 'Talk to Support',
      action: () => alert('Support chat coming soon!'),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-6 w-72 mb-2"
          >
            <div className="mb-4">
              <h3 className="font-bold text-dark-text mb-1">AI Health Assistant</h3>
              <p className="text-sm text-gray-600">How can I help you today?</p>
            </div>
            <div className="space-y-2">
              {options.map((option, index) => (
                <motion.button
                  key={option.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={option.action}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition text-left group"
                >
                  <div className="w-10 h-10 bg-primary-100 group-hover:bg-primary-200 rounded-full flex items-center justify-center text-primary-600 transition">
                    {option.icon}
                  </div>
                  <span className="font-medium text-dark-text">{option.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-400 rounded-full shadow-2xl flex items-center justify-center text-white overflow-hidden group"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-400 to-primary-500"
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </motion.div>

        {/* Pulse Animation */}
        <motion.div
          className="absolute inset-0 bg-primary-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.5, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.button>

      {/* Label */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-4 right-20 bg-white px-4 py-2 rounded-full shadow-lg whitespace-nowrap text-sm font-semibold text-dark-text"
          >
            AI Health Assistant
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatbot;
