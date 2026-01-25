import { motion } from 'framer-motion';
import { useState } from 'react';

const TelemedicinePage = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const specialties = [
    'General Physician',
    'Cardiologist',
    'Dermatologist',
    'Pediatrician',
    'Gynecologist',
    'Psychiatrist',
    'Nutritionist',
    'Physiotherapist',
  ];

  const steps = [
    {
      number: '1',
      title: 'Pick Specialty',
      description: 'Choose the type of doctor you need',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'Pick Time',
      description: 'Select a convenient date and time',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Book & Connect',
      description: 'Confirm booking and connect with your doctor',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const benefits = [
    {
      icon: '⏱️',
      title: 'Save Time',
      description: 'No travel, no waiting rooms',
    },
    {
      icon: '👨‍⚕️',
      title: 'Expert Access',
      description: 'Connect with certified specialists',
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'HIPAA-compliant consultations',
    },
    {
      icon: '💵',
      title: 'Affordable',
      description: 'Lower costs than in-person visits',
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
            Connect With a Professional,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              From Anywhere
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality healthcare at your fingertips. Consult with certified doctors via video call, anytime, anywhere.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <div className="text-purple-600 mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Booking Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Book Your Consultation
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Select Specialty</label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition"
              >
                <option value="">Choose a specialty...</option>
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Time</label>
                <input
                  type="time"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-full font-semibold text-lg shadow-lg"
            >
              Book Your Telemedicine Consultation
            </motion.button>

            <p className="text-center text-gray-600 text-sm">
              * Consultations available 7 days a week, 8 AM - 10 PM
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TelemedicinePage;
