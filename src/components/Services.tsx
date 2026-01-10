import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const healthcareServices = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'General Medicine',
      description: 'Comprehensive primary care for patients of all ages, from routine check-ups to chronic disease management.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Cardiology',
      description: 'Advanced cardiac care with state-of-the-art diagnostics and treatment for heart conditions.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Psychiatry',
      description: 'Expert mental health services with compassionate care for psychological and emotional well-being.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Telemedicine',
      description: 'Access healthcare from the comfort of your home with virtual consultations and remote monitoring.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents with a focus on development and wellness.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Laboratory Services',
      description: 'Comprehensive diagnostic testing with quick results and accurate analysis.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const communityPrograms = [
    {
      icon: '🏥',
      title: 'Health Camps',
      description: 'Free medical camps in rural and underserved areas providing essential healthcare services.'
    },
    {
      icon: '📚',
      title: 'Health Education',
      description: 'Awareness programs on disease prevention, healthy living, and public health initiatives.'
    },
    {
      icon: '💊',
      title: 'Medicine Distribution',
      description: 'Free or subsidized medication programs for low-income families and chronic patients.'
    },
    {
      icon: '🩺',
      title: 'Preventive Screenings',
      description: 'Regular community health screenings for early detection of common diseases.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to meet your needs with excellence and compassion
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mt-6"></div>
        </div>

        {/* Healthcare Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {healthcareServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Community Impact Section */}
        <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Community Impact</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Making a difference through outreach programs and community health initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityPrograms.map((program, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition"
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h4 className="text-xl font-bold mb-3">{program.title}</h4>
                <p className="text-white/90 text-sm leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">
                {statsInView ? <CountUp end={100} duration={2.5} suffix="+" /> : '0'}
              </div>
              <div className="text-white/90">Health Camps Organized</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">
                {statsInView ? <CountUp end={25} duration={2.5} suffix="K+" /> : '0'}
              </div>
              <div className="text-white/90">Community Members Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">
                {statsInView ? <CountUp end={50} duration={2.5} suffix="+" /> : '0'}
              </div>
              <div className="text-white/90">Partner Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
