import { motion } from 'framer-motion';
import { useState } from 'react';

const HealthPlansPage = () => {
  const [, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'basic',
      name: 'Basic Health Plan',
      whoFor: 'Individuals',
      price: 'PKR 2,500',
      priceDetail: 'per month',
      features: [
        'Annual health screening',
        'Basic lab tests included',
        'Health report & recommendations',
        '10% discount on consultations',
        'Access to partner clinics',
        'Email support',
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false,
    },
    {
      id: 'premium',
      name: 'Premium Health Plan',
      whoFor: 'Families',
      price: 'PKR 7,500',
      priceDetail: 'per month (up to 4 members)',
      features: [
        'Comprehensive health screening',
        'Advanced lab tests & imaging',
        'Personalized health reports',
        '2 free telemedicine consultations/month',
        '20% discount on all services',
        'Priority booking',
        'Family health dashboard',
        'WhatsApp support 24/7',
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true,
    },
    {
      id: 'corporate',
      name: 'Corporate Health Plan',
      whoFor: 'Organizations',
      price: 'Custom Pricing',
      priceDetail: 'based on team size',
      features: [
        'Employee wellness programs',
        'On-site health camps',
        'Quarterly health screenings',
        'Unlimited telemedicine access',
        'Mental health support',
        'Health analytics dashboard',
        'Dedicated account manager',
        'Custom benefits package',
      ],
      color: 'from-green-500 to-emerald-500',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Health Plans for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Everyone
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect health plan for you and your loved ones. Affordable, comprehensive, and designed with your wellness in mind.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                  Most Popular
                </div>
              )}
              <div className={`bg-white rounded-2xl shadow-xl p-8 h-full ${plan.popular ? 'ring-4 ring-primary-300' : ''}`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.whoFor}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                  <div className="text-gray-600">{plan.priceDetail}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-4 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.id === 'corporate' ? 'Request Quote' : 'Get Started'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-secondary-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h4 className="font-bold text-gray-900">Certified Experts</h4>
              <p className="text-gray-600 text-sm">Licensed professionals</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-secondary-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h4 className="font-bold text-gray-900">Payment Secured</h4>
              <p className="text-gray-600 text-sm">100% secure transactions</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-secondary-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="font-bold text-gray-900">24/7 Support</h4>
              <p className="text-gray-600 text-sm">Always here for you</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-secondary-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h4 className="font-bold text-gray-900">Money Back</h4>
              <p className="text-gray-600 text-sm">30-day guarantee</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Not sure which plan is right for you?</h3>
          <p className="text-xl mb-8 opacity-90">Talk to our health advisors for personalized recommendations</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition"
            >
              Schedule a Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-white/30 transition"
            >
              Chat with Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthPlansPage;
