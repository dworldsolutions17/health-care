import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendToGoogleSheets, getCurrentTimestamp } from '../utils/googleSheets';

const CustomerInformationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    cnicPassport: '',
    contactNumber: '',
    email: '',
    productCategory: '',
    referredBy: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Auto-calculate age when date of birth changes
    if (name === 'dateOfBirth' && value) {
      const today = new Date();
      const birthDate = new Date(value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setFormData(prev => ({ ...prev, age: age.toString() }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send to Google Sheets
      await sendToGoogleSheets({
        type: 'customer-information',
        timestamp: getCurrentTimestamp(),
        fullName: formData.fullName,
        dateOfBirth: formData.dateOfBirth,
        age: formData.age,
        gender: formData.gender,
        cnicPassport: formData.cnicPassport,
        contactNumber: formData.contactNumber,
        email: formData.email,
        productCategory: formData.productCategory,
        referredBy: formData.referredBy || 'N/A',
      });

      setSubmitStatus('success');
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          dateOfBirth: '',
          age: '',
          gender: '',
          cnicPassport: '',
          contactNumber: '',
          email: '',
          productCategory: '',
          referredBy: '',
        });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-8 sm:py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block mb-4">
            <img src="/images/logo.png" alt="Health Orbit" className="h-16 sm:h-20 w-auto mx-auto" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Patient / Customer Information Form
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Please fill in all required information accurately
          </p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                placeholder="Enter full name"
              />
            </div>

            {/* Date of Birth and Age */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-700 mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                  Age <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="0"
                  max="150"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base bg-gray-50"
                  placeholder="Auto-calculated"
                  readOnly
                />
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm sm:text-base text-gray-700">Male</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm sm:text-base text-gray-700">Female</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === 'Other'}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm sm:text-base text-gray-700">Other</span>
                </label>
              </div>
            </div>

            {/* CNIC / Passport No */}
            <div>
              <label htmlFor="cnicPassport" className="block text-sm font-semibold text-gray-700 mb-2">
                CNIC / Passport No <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="cnicPassport"
                name="cnicPassport"
                value={formData.cnicPassport}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                placeholder="e.g., 12345-1234567-1 or AB1234567"
              />
            </div>

            {/* Contact Number and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                  placeholder="+92-300-1234567"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            {/* Product Category */}
            <div>
              <label htmlFor="productCategory" className="block text-sm font-semibold text-gray-700 mb-2">
                Product Category <span className="text-red-500">*</span>
              </label>
              <select
                id="productCategory"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base bg-white"
              >
                <option value="">Select a category</option>
                <option value="Platinum">Platinum</option>
                <option value="Titanium">Titanium</option>
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
                <option value="Bronze">Bronze</option>
              </select>
            </div>

            {/* Customer Referred By */}
            <div>
              <label htmlFor="referredBy" className="block text-sm font-semibold text-gray-700 mb-2">
                Customer Referred By (Optional)
              </label>
              <input
                type="text"
                id="referredBy"
                name="referredBy"
                value={formData.referredBy}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                placeholder="Enter referrer name or leave blank"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 rounded-lg font-bold text-base sm:text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Information'
                )}
              </button>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm sm:text-base"
              >
                ✅ Form submitted successfully! Thank you for your information.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm sm:text-base"
              >
                ❌ Error submitting form. Please try again or contact support.
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Footer */}
        <div className="text-center mt-6 sm:mt-8 space-y-3">
          <div className="flex items-center justify-center gap-2 text-gray-600">
             <p className="text-xs mt-1">Powered by <a href="https://dworldsolutions.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition">D-World Solutions</a></p>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Health Orbit. All rights reserved. | Your information is secure and confidential.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomerInformationPage;
