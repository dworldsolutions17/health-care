import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FloatingActionButton = () => {
  const [isOpen] = useState(false);

  const actions = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      label: 'Chat Support',
      color: 'from-blue-500 to-cyan-500',
      action: () => console.log('Chat clicked'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Call Us',
      color: 'from-green-500 to-emerald-500',
      action: () => console.log('Call clicked'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Book Appointment',
      color: 'from-purple-500 to-pink-500',
      action: () => console.log('Appointment clicked'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: 'Emergency',
      color: 'from-red-500 to-orange-500',
      action: () => console.log('Emergency clicked'),
    },
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
      {/* <motion.button
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
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
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
      </motion.button> */}

      {/* <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
      >
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          4
        </motion.span>
      </motion.div> */}
    </div>
  );
};

export default FloatingActionButton;
