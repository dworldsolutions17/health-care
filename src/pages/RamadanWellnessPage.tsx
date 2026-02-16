import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RamadanWellnessPage = () => {
  const packages = [
    {
      name: 'Ramadan Smart Care',
      originalPrice: '6,760',
      price: '5,000',
      discountedPrice: '3,700',
      color: 'from-orange-500 to-amber-600',
      description: 'Economical wellness check with powerful insights',
      subtitle: 'Best for: quick risk overview with essential monitoring.',
      features: [
        'Blood sugar monitoring',
        'Cholesterol check',
        'Liver marker analysis',
        'Kidney function test',
        'Urine test',
        'Full body measurements',
        'Digital medical records',
      ],
    },
     {
      name: 'Ramadan Essential Care',
      originalPrice: '9,460',
      price: '7,000',
      discountedPrice: '5,180',
      color: 'from-green-500 to-emerald-600',
      description: 'Advanced health screening for everyday safety',
      subtitle: 'Best for: adults who want clarity before fasting.',
      features: [
        'Diabetes risk assessment',
        'Cholesterol levels check',
        'Thyroid function test',
        'Liver health evaluation',
        'Blood condition analysis',
        'BMI & body composition',
        'Blood pressure & oxygen monitoring',
        'Metabolic indicators',
        'Doctor consultation/teleconsultation for Roza guidance',
      ],
    },
    {
      name: 'Ramadan Executive Platinum Care',
      originalPrice: '20,270',
      price: '15,000',
      discountedPrice: '11,100',
      color: 'from-blue-500 to-indigo-600',
      description: 'Complete evaluation for maximum protection',
      subtitle: 'Best for: executives, elderly, chronic conditions, or total peace of mind.',
      features: [
        'Diabetes & long-term sugar control',
        'Complete lipid profile',
        'Liver & kidney function',
        'Cardiac indicators',
        'Infection screening',
        'PSA testing',
        'Ultrasound & ECG (if indicated)',
        'Dental review',
        'Head-to-toe examination',
        'Risk assessment (diabetes, heart attack & stroke)',
        'Nutrition & medication planning',
        'Lifestyle & gym guidance',
        'Electronic medical record',
        'Dedicated consultation session',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              🌙 Ramadan Special Program
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Fast with Confidence & Protect What Matters Most
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Ramadan is a month of blessings, reflection, and discipline. But fasting can become dangerous when hidden health risks go unnoticed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-left max-w-2xl mx-auto mb-8">
              <div className="flex items-start gap-2">
                <span className="text-red-500 text-2xl">❌</span>
                <span className="text-gray-700">High sugar</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 text-2xl">❌</span>
                <span className="text-gray-700">Uncontrolled blood pressure</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 text-2xl">❌</span>
                <span className="text-gray-700">Silent heart disease</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 text-2xl">❌</span>
                <span className="text-gray-700">Undetected liver or kidney issues</span>
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Many people only discover them after an emergency. The Health Orbit, together with trusted diagnostic partners, brings you structured pre-Ramadan health screening packages.
            </p>
            <motion.a
              href="#packages"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Book Ramadan Screening
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Screening Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              ❤️ Why Screening Before Ramadan is Critical
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-blue-900 mb-4">During fasting, your body experiences:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✔</span>
                    <span className="text-gray-700">Long hours without food & water</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✔</span>
                    <span className="text-gray-700">Medication timing changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✔</span>
                    <span className="text-gray-700">Blood sugar fluctuations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✔</span>
                    <span className="text-gray-700">Dehydration stress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✔</span>
                    <span className="text-gray-700">Heart workload changes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-red-900 mb-4">If undiagnosed, risk of:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">❌</span>
                    <span className="text-gray-700">Fainting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">❌</span>
                    <span className="text-gray-700">Severe weakness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">❌</span>
                    <span className="text-gray-700">Heart events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">❌</span>
                    <span className="text-gray-700">Kidney stress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">❌</span>
                    <span className="text-gray-700">Emergency hospitalization</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl text-center">
              <p className="text-xl text-gray-800 mb-4">
                A simple assessment helps doctors adjust:
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold text-green-700">
                <span>✅ Diet</span>
                <span>✅ Hydration</span>
                <span>✅ Medicines</span>
                <span>✅ Activity levels</span>
              </div>
              <p className="text-gray-700 mt-6 text-lg">
                So fasting becomes safe and sustainable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Question Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              💬 The Question You Should Ask
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Would you rather spend a few thousand today, or risk lakhs in emergency treatment later?
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg mt-8">
              <p className="text-2xl font-bold text-primary-600 mb-4">
                Even more important:
              </p>
              <p className="text-xl text-gray-800 mb-2">
                👉 What is the cost of your family's peace of mind?
              </p>
              <p className="text-xl text-gray-800 mb-6">
                👉 What is the cost of your presence at iftar?
              </p>
              <p className="text-lg text-green-700 font-semibold">
                Prevention is always cheaper than cure.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🧪 Choose Your Ramadan Care Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              All packages include:
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <span className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                Professional diagnostic testing
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                Physical measurements
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                Digital medical record
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                Guidance for Ramadan fasting
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all h-full flex flex-col">
                  <div className={`bg-gradient-to-br ${pkg.color} p-8 text-white`}>
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-white/90 mb-4">{pkg.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold line-through opacity-60">{pkg.originalPrice}</span>
                        <span className="text-lg line-through opacity-60">PKR</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold">{pkg.price}</span>
                        <span className="text-xl">PKR</span>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 mt-2">26% OFF - Ramadan Special Offer</p>
                  </div>
                  
                  <div className="p-8 flex-grow">
                    <p className="text-sm text-gray-600 italic mb-6">{pkg.subtitle}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 pt-0">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 bg-gradient-to-r ${pkg.color} text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all`}
                    >
                      Book This Package
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              🧠 What Makes This Different?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              This is not just testing. This is:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <span className="text-green-500 text-2xl">✔</span>
                <p className="text-lg font-semibold text-gray-800 mt-2">Understanding your risk</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <span className="text-green-500 text-2xl">✔</span>
                <p className="text-lg font-semibold text-gray-800 mt-2">Planning safe fasting</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <span className="text-green-500 text-2xl">✔</span>
                <p className="text-lg font-semibold text-gray-800 mt-2">Preventing emergencies</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <span className="text-green-500 text-2xl">✔</span>
                <p className="text-lg font-semibold text-gray-800 mt-2">Protecting your future</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Should Get Screened */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              👨‍👩‍👧 Who Should Definitely Get Screened?
            </h2>
            <p className="text-xl text-gray-700 mb-8 text-center">
              You should not enter Ramadan without screening if you:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Are above 30',
                'Have diabetes, BP, or cholesterol',
                'Feel fatigue or dizziness',
                'Are overweight',
                'Take regular medication',
                'Have family history of heart disease'
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl"
                >
                  <svg className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-800">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Imagine Section */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ✨ Imagine Ramadan With Confidence
            </h2>
            <div className="space-y-4 text-xl mb-8">
              <p>No panic.</p>
              <p>No emergency visits.</p>
              <p>No uncertainty.</p>
              <p className="text-2xl font-bold mt-6">Just worship, family, and health.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              📅 Limited Ramadan Capacity
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Because consultations & evaluations require physician review, daily slots are limited.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              👉 Early screening = better preparation.
            </p>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-12 rounded-3xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                🟢 Book Your Ramadan Screening Now
              </h3>
              <p className="text-xl text-gray-700 mb-8">
                Take control of your health before Ramadan begins.<br />
                Start with knowledge. Continue with safety.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all"
                >
                  Book Appointment
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RamadanWellnessPage;
