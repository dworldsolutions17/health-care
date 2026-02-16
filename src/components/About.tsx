const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-primary-50 to-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              To provide compassionate, innovative, and accessible healthcare for all. We believe everyone deserves quality medical care that combines clinical excellence with genuine human connection.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              To be a trusted leader in healthcare in Pakistan and globally, improving lives through excellence and empathy. We envision a future where quality healthcare is accessible to everyone, everywhere.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-6 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Story</h3>
              <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  The Health Orbit was born from frustration with Pakistan's broken healthcare system.
                </p>
                <p className="text-base md:text-lg">
                  We saw families pay lakhs for diseases that could have been prevented for thousands. We saw patients confused by too many options and no guidance. We saw medical professionals working in isolation instead of collaboration.
                </p>
                <p className="text-base md:text-lg">
                  We realized Pakistan doesn't need more hospitals. It needs better systems, better connections, and better priorities.
                </p>
                <p className="text-base md:text-lg">
                  So we built The Health Orbit — not as another clinic or doctor directory, but as an integrated healthcare ecosystem that puts prevention first, uses technology intelligently, and ensures ethical care for all.
                </p>
              </div>

              {/* Values */}
              <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800 text-sm md:text-base">Excellence</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800 text-sm md:text-base">Compassion</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800 text-sm md:text-base">Innovation</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800 text-sm md:text-base">Integrity</span>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[300px] md:min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800" 
                alt="Healthcare Team"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
