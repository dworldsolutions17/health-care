import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto"
      >
        {/* 404 Illustration */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="relative">
            <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-bold text-primary-100 leading-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <svg 
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 text-primary-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-2">
            The page you're looking for seems to have wandered off.
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            Don't worry, even the best healthcare navigators get lost sometimes! 🏥
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold text-base hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
          >
            🏠 Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-base hover:bg-gray-50 hover:border-primary-300 transition-all transform hover:scale-105 active:scale-95"
          >
            ← Go Back
          </button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/services"
              className="px-4 py-2 text-sm font-medium text-primary-700 hover:text-primary-800 hover:bg-primary-50 rounded-lg transition-colors"
            >
              Services
            </Link>
            <Link
              to="/health-plans"
              className="px-4 py-2 text-sm font-medium text-primary-700 hover:text-primary-800 hover:bg-primary-50 rounded-lg transition-colors"
            >
              Health Plans
            </Link>
            <Link
              to="/ai-assessment"
              className="px-4 py-2 text-sm font-medium text-primary-700 hover:text-primary-800 hover:bg-primary-50 rounded-lg transition-colors"
            >
              AI Assessment
            </Link>
            <Link
              to="/telemedicine"
              className="px-4 py-2 text-sm font-medium text-primary-700 hover:text-primary-800 hover:bg-primary-50 rounded-lg transition-colors"
            >
              Telemedicine
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <img src="/images/logo.png" alt="Health Orbit" className="h-16 w-auto opacity-50" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
