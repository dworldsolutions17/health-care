import { motion } from 'framer-motion';

const WhyHealthOrbit = () => {
  const reasons = [
    {
      icon: '🛡️',
      title: 'Prevent before it becomes expensive',
      description: 'Early detection saves lives and costs',
    },
    {
      icon: '💚',
      title: 'Affordable & ethical healthcare',
      description: 'Quality care accessible to everyone',
    },
    {
      icon: '🤖',
      title: 'AI-powered health insights',
      description: 'Smart technology for better decisions',
    },
    {
      icon: '✅',
      title: 'Verified health partners',
      description: 'Only certified and trusted professionals',
    },
  ];

  return (
    <section className="py-20 bg-soft-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-h2 text-dark-text mb-4">
            Why The Health Orbit?
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            We're changing how Pakistan thinks about healthcare
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition text-center"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="font-semibold text-dark-text mb-2 text-lg">
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
