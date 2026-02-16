import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ChatSupportModal from './ChatSupportModal';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const actions = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      label: 'AI Health Assessment',
      color: 'from-purple-500 to-indigo-500',
      action: () => window.location.href = '/ai-assessment',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      label: 'Chat Support',
      color: 'from-blue-500 to-cyan-500',
      action: () => {
        setIsOpen(false);
        setIsChatOpen(true);
      },
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Call Us',
      color: 'from-green-500 to-emerald-500',
      action: () => window.location.href = 'tel:+922112345678',
    },
    // {
    //   icon: (
    //     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    //     </svg>
    //   ),
    //   label: 'Book Appointment',
    //   color: 'from-pink-500 to-rose-500',
    //   action: () => {
    //     const contactSection = document.getElementById('contact');
    //     if (contactSection) {
    //       contactSection.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   },
    // },
    // {
    //   icon: (
    //     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    //     </svg>
    //   ),
    //   label: 'Emergency',
    //   color: 'from-red-500 to-orange-500',
    //   action: () => window.location.href = 'tel:1122',
    // },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-20 right-0 space-y-3 mb-2"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { delay: index * 0.05 }
                }}
                exit={{ 
                  opacity: 0, 
                  y: 20, 
                  scale: 0.5,
                  transition: { delay: (actions.length - index) * 0.05 }
                }}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={action.action}
                className="flex items-center gap-3 cursor-pointer group"
              >
                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white px-4 py-2 rounded-full shadow-lg text-gray-700 font-medium text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {action.label}
                </motion.div>
                
                {/* Button */}
                <div className={`relative w-14 h-14 bg-gradient-to-br ${action.color} rounded-full shadow-lg flex items-center justify-center text-white`}>
                  {action.icon}
                  
                  {/* Pulsing Ring */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${action.color} rounded-full`}
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full shadow-2xl flex items-center justify-center text-white overflow-hidden group"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-secondary-600 to-primary-600"
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )}
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full"
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
        
        <motion.div
          className="absolute inset-0 border-4 border-white/30 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Chat Support Modal */}
      <ChatSupportModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default FloatingActionButton;
