import { motion } from 'framer-motion';

const WhyHealthOrbit = () => {
  const reasons = [
    {
      icon: '🛡️',
      title: 'Prevent before treatment becomes expensive',
      description: 'Early detection saves lives and costs',
    },
    {
      icon: '💚',
      title: 'Ethical and affordable healthcare access',
      description: 'Quality care accessible to everyone',
    },
    {
      icon: '🤖',
      title: 'AI-supported decision tools',
      description: 'Smart technology for better decisions',
    },
    {
      icon: '✅',
      title: 'Verified medical partners',
      description: 'Only certified and trusted professionals',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-soft-bg">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-dark-text mb-4">
            Healthcare Built on Trust, Technology & Prevention
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            We're changing how Pakistan thinks about healthcare
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg transition text-center"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">{reason.icon}</div>
              <h3 className="font-semibold text-dark-text mb-2 text-base md:text-lg">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHealthOrbit;
