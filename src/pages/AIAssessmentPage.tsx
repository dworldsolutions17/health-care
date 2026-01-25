import { motion } from 'framer-motion';
import { useState } from 'react';

const AIAssessmentPage = () => {
  const [step, setStep] = useState(1);
  // const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    { id: 'age', question: 'What is your age?', type: 'number' },
    { id: 'gender', question: 'What is your gender?', type: 'select', options: ['Male', 'Female', 'Other'] },
    { id: 'symptoms', question: 'Are you experiencing any symptoms?', type: 'textarea' },
    { id: 'lifestyle', question: 'How would you describe your lifestyle?', type: 'select', options: ['Sedentary', 'Moderate', 'Active', 'Very Active'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Health{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Assessment
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized health insights and recommendations powered by artificial intelligence
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-600">Step {step} of 4</span>
                <span className="text-sm font-semibold text-primary-600">{Math.round((step / 4) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {questions[step - 1]?.question}
              </h2>
              
              {questions[step - 1]?.type === 'number' && (
                <input
                  type="number"
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition text-lg"
                  placeholder="Enter your age"
                />
              )}

              {questions[step - 1]?.type === 'select' && (
                <div className="space-y-3">
                  {questions[step - 1]?.options?.map((option) => (
                    <motion.button
                      key={option}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-primary-600 hover:bg-primary-50 transition text-left font-semibold"
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              )}

              {questions[step - 1]?.type === 'textarea' && (
                <textarea
                  rows={4}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition"
                  placeholder="Describe any symptoms..."
                />
              )}
            </motion.div>

            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStep(step - 1)}
                  className="px-8 py-4 rounded-full border-2 border-gray-300 font-semibold hover:bg-gray-50 transition"
                >
                  Back
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => step < 4 ? setStep(step + 1) : alert('Assessment Complete!')}
                className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 rounded-full font-semibold shadow-lg"
              >
                {step < 4 ? 'Next' : 'Get Results'}
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-6 text-center"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-2">🤖</div>
              <h3 className="font-bold text-gray-900">AI-Powered</h3>
              <p className="text-gray-600 text-sm">Advanced algorithms</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-bold text-gray-900">Instant Results</h3>
              <p className="text-gray-600 text-sm">Get insights immediately</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-2">🔒</div>
              <h3 className="font-bold text-gray-900">Private & Secure</h3>
              <p className="text-gray-600 text-sm">Your data is protected</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIAssessmentPage;
