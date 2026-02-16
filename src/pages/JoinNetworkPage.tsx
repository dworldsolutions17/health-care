import { motion } from 'framer-motion';
import { useState } from 'react';
import { sendToGoogleSheets, getCurrentTimestamp, type JoinNetworkData } from '../utils/googleSheets';

const JoinNetworkPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    partnerType: '',
    email: '',
    phone: '',
    city: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send to Google Sheets
    const sheetData: JoinNetworkData = {
      type: 'join-network',
      timestamp: getCurrentTimestamp(),
      name: formData.name,
      partnerType: formData.partnerType,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      description: formData.description,
    };

    await sendToGoogleSheets(sheetData);

    setShowSuccess(true);
    setFormData({
      name: '',
      partnerType: '',
      email: '',
      phone: '',
      city: '',
      description: '',
    });
    setIsSubmitting(false);
    
    // Auto-hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    {
      icon: '📈',
      title: 'Quality patients',
      description: 'Not just volume. Patients who need you.',
    },
    {
      icon: '💡',
      title: 'Fair partnership',
      description: 'Transparent referrals. No hidden costs.',
    },
    {
      icon: '💰',
      title: 'Verified profile',
      description: 'We promote only credible healthcare providers.',
    },
    {
      icon: '🤝',
      title: 'Ecosystem access',
      description: 'Join a connected network of care providers.',
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
      {/* Success Toast Notification */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: showSuccess ? 1 : 0, y: showSuccess ? 0 : -50 }}
        className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4"
        style={{ pointerEvents: showSuccess ? 'auto' : 'none' }}
      >
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4">
          <div className="text-3xl">🎉</div>
          <div className="flex-1">
            <p className="font-bold text-lg">Application Submitted!</p>
            <p className="text-sm opacity-90">We'll review and contact you soon.</p>
          </div>
          <button
            onClick={() => setShowSuccess(false)}
            className="text-white hover:bg-white/20 rounded-full p-1 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </motion.div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Pakistan's Fastest-Growing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Healthcare Network
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For doctors, clinics, labs, and pharmacies who value quality, ethics, and sustainable patient volume.
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
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name / Organization Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Partner Type</label>
                <select 
                  name="partnerType"
                  value={formData.partnerType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition"
                >
                  <option value="">Select type...</option>
                  <option value="Doctor / Specialist">Doctor / Specialist</option>
                  <option value="Clinic / Hospital">Clinic / Hospital</option>
                  <option value="Diagnostic Lab">Diagnostic Lab</option>
                  <option value="Pharmacy">Pharmacy</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition"
                  placeholder="+92 300 1234567"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition"
                placeholder="Enter city"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Tell us about yourself</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition"
                placeholder="Qualifications, experience, services offered..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-full font-semibold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '📤 Submitting...' : 'Submit Application'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinNetworkPage;
