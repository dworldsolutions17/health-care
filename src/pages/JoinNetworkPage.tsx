import { motion } from 'framer-motion';

const JoinNetworkPage = () => {
  const benefits = [
    {
      icon: '📈',
      title: 'Grow Your Practice',
      description: 'Access thousands of potential patients',
    },
    {
      icon: '💡',
      title: 'Modern Platform',
      description: 'Use our advanced telemedicine tools',
    },
    {
      icon: '💰',
      title: 'Competitive Earnings',
      description: 'Transparent and fair compensation',
    },
    {
      icon: '🤝',
      title: 'Support Network',
      description: 'Join a community of healthcare professionals',
    },
  ];

  const whoCanJoin = [
    { type: 'Doctors & Specialists', description: 'Licensed medical professionals' },
    { type: 'Clinics & Hospitals', description: 'Healthcare facilities of all sizes' },
    { type: 'Diagnostic Labs', description: 'Pathology and imaging centers' },
    { type: 'Pharmacies', description: 'Retail and online pharmacies' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Healthcare Network
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with us to expand your reach and provide quality healthcare to more people across Pakistan
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Who Can Join */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Who Can Join?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoCanJoin.map((item, index) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.type}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Apply to Join Our Network
          </h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name / Organization Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Partner Type</label>
                <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition">
                  <option>Select type...</option>
                  <option>Doctor / Specialist</option>
                  <option>Clinic / Hospital</option>
                  <option>Diagnostic Lab</option>
                  <option>Pharmacy</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition"
                  placeholder="+92 300 1234567"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">City</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition"
                placeholder="Enter city"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Tell us about yourself</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition"
                placeholder="Qualifications, experience, services offered..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-full font-semibold text-lg shadow-lg"
            >
              Submit Application
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinNetworkPage;
