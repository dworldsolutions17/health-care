import { motion } from 'framer-motion';

const PreventiveCarePage = () => {
  const benefits = [
    {
      icon: '🔍',
      title: 'Early Detection',
      description: 'Catch health issues before they become serious',
    },
    {
      icon: '💰',
      title: 'Cost Savings',
      description: 'Prevention is more affordable than treatment',
    },
    {
      icon: '💪',
      title: 'Better Quality of Life',
      description: 'Stay healthy and active longer',
    },
    {
      icon: '📊',
      title: 'Track Your Health',
      description: 'Monitor trends and make informed decisions',
    },
  ];

  const screenings = [
    {
      name: 'Basic Health Screening',
      includes: ['Blood pressure', 'Blood sugar', 'Cholesterol', 'BMI assessment'],
      ideal: 'Adults 18-40',
      frequency: 'Annually',
    },
    {
      name: 'Comprehensive Screening',
      includes: ['All basic tests', 'Liver function', 'Kidney function', 'Thyroid', 'Vitamin D'],
      ideal: 'Adults 40+',
      frequency: 'Annually',
    },
    {
      name: 'Cardiac Screening',
      includes: ['ECG', 'Echo', 'Lipid profile', 'Stress test'],
      ideal: 'High-risk individuals',
      frequency: 'As recommended',
    },
    {
      name: 'Cancer Screening',
      includes: ['Age-appropriate tests', 'Early detection protocols', 'Risk assessment'],
      ideal: 'Based on age & risk',
      frequency: 'As per guidelines',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Preventive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Healthcare
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your health is your wealth. Invest in preventive care today for a healthier tomorrow.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
          >
            Book Preventive Checkup
          </motion.button>
        </motion.div>

        {/* Why It Matters */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Preventive Care Matters
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Screening Packages */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Health Screening Packages
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {screenings.map((screening, index) => (
              <motion.div
                key={screening.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{screening.name}</h3>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Includes:</h4>
                  <ul className="space-y-2">
                    {screening.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Ideal for:</span>
                    <p className="text-gray-600">{screening.ideal}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Frequency:</span>
                    <p className="text-gray-600">{screening.frequency}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Take Control of Your Health?</h3>
          <p className="text-xl mb-8 opacity-90">Book your preventive health checkup or take our AI Health Assessment</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold"
            >
              Book Preventive Checkup
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/ai-assessment'}
              className="bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-full font-semibold border-2 border-white"
            >
              Take AI Health Assessment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PreventiveCarePage;
