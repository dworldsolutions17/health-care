import { motion } from 'framer-motion';

const TrustSignal = () => {
  const partners = [
    { name: 'Hospitals', icon: '🏥' },
    { name: 'Labs', icon: '🔬' },
    { name: 'Doctors', icon: '👨‍⚕️' },
    { name: 'Pharmacies', icon: '💊' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-8 text-lg font-medium">
            Trusted by Healthcare Partners Across Pakistan
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-soft-bg transition"
              >
                <div className="text-5xl">{partner.icon}</div>
                <p className="font-semibold text-dark-text">{partner.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignal;
