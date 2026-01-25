import { motion } from 'framer-motion';

const AIHighlight = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="inline-block px-4 py-2 bg-accent-100 rounded-full text-accent-600 font-semibold text-sm mb-2">
                  AI-Powered
                </div>
                <h2 className="font-heading text-3xl md:text-4xl text-dark-text">
                  AI Health Assessment
                </h2>
                <p className="text-gray-600 text-lg">
                  Get a personalized health report in minutes
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No cost
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No spam
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Doctor-reviewed logic
                  </li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/ai-assessment'}
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition mt-4"
                >
                  Start Assessment
                </motion.button>
              </motion.div>
            </div>

            {/* Right Visual */}
            <div className="relative bg-gradient-to-br from-accent-100 to-primary-100 p-8 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="relative"
              >
                <svg className="w-64 h-64 text-accent-400/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-8 shadow-2xl">
                    <svg className="w-16 h-16 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIHighlight;
