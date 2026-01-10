import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const ServicesNew = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Generate random particles once using useState
  const [particles] = useState(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      initialX: Math.random() * 100 + '%',
      initialY: Math.random() * 100 + '%',
      targetY: (Math.random() - 0.5) * 100 + '%',
      duration: Math.random() * 3 + 2,
    }))
  );

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Expert Medical Consultations",
      description: "Access to top medical professionals across various specialties for comprehensive care",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-50 to-cyan-50",
      features: ["24/7 Availability", "Instant Booking", "Multi-Specialty"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Advanced Diagnostic Services",
      description: "State-of-the-art testing and imaging facilities for accurate diagnoses",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgGradient: "from-purple-50 to-pink-50",
      features: ["Latest Technology", "Quick Results", "Expert Analysis"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Preventive Healthcare Programs",
      description: "Comprehensive wellness programs to maintain optimal health and prevent diseases",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-50 to-emerald-50",
      features: ["Personalized Plans", "Regular Monitoring", "Health Coaching"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Telemedicine Services",
      description: "Virtual consultations from the comfort of your home with certified doctors",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-50 to-red-50",
      features: ["Remote Access", "Secure Platform", "E-Prescriptions"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Emergency Care 24/7",
      description: "Round-the-clock emergency medical services with rapid response teams",
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      bgGradient: "from-red-50 to-orange-50",
      features: ["Instant Response", "Ambulance Service", "Critical Care"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Pharmaceutical Services",
      description: "Online pharmacy with home delivery of prescribed medicines",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      bgGradient: "from-indigo-50 to-purple-50",
      features: ["Home Delivery", "Quality Assured", "Easy Refills"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="inline-block"
          >
            <div className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-lg mb-6">
              <span className="text-white font-bold text-sm">🏥 Our Services</span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Healthcare{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 animate-gradient bg-[length:200%_auto]">
              Solutions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From preventive care to advanced treatments, we offer a complete spectrum of medical services tailored to your needs
          </motion.p>
        </motion.div>

        {/* Services Grid with 3D Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Card Container */}
              <div className={`relative h-full bg-gradient-to-br ${service.bgGradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 overflow-hidden`}>
                {/* Animated Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  animate={hoveredCard === index ? { scale: 1.5, rotate: 180 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Icon with Animation */}
                <motion.div
                  className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
                  animate={hoveredCard === index ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                  
                  {/* Pulsing Ring */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl`}
                    animate={hoveredCard === index ? { scale: [1, 1.3, 1.6], opacity: [0.5, 0.2, 0] } : {}}
                    transition={{ duration: 1, repeat: hoveredCard === index ? Infinity : 0 }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                        animate={hoveredCard === index ? { rotate: 360 } : {}}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative w-full py-3 rounded-xl font-semibold overflow-hidden group`}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient}`}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className={`relative z-10 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:text-white transition-colors`}>
                    Learn More →
                  </span>
                </motion.button>

                {/* Corner Decoration */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-bl-full opacity-10`}
                  animate={hoveredCard === index ? { scale: 1.5 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* 3D Shadow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl -z-10`}
                animate={hoveredCard === index ? { scale: 1.05, opacity: 0.3 } : { scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Community Impact Stats */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-[length:200%_auto] animate-gradient rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  initial={{
                    x: particle.initialX,
                    y: particle.initialY,
                  }}
                  animate={{
                    y: [null, particle.targetY],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
              >
                Our Community Impact
              </motion.h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { value: 100, suffix: '+', label: 'Healthcare Facilities', icon: '🏥' },
                  { value: 25, suffix: 'K+', label: 'Lives Touched', icon: '❤️' },
                  { value: 50, suffix: '+', label: 'Medical Specialties', icon: '⚕️' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="text-6xl mb-4"
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                      {inView ? (
                        <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                      ) : '0'}
                    </div>
                    <div className="text-white/90 text-lg font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesNew;
