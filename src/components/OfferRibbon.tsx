import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OfferRibbon = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 text-white py-2 px-4 shadow-lg relative overflow-hidden"
      style={{ marginTop: '80px' }} // Offset for fixed header
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xl md:text-2xl font-bold"
          >
            🌙 RAMADAN SPECIAL OFFER
          </motion.span>
          <span className="text-lg md:text-xl font-semibold">
            Get <span className="text-yellow-300 font-bold text-2xl md:text-3xl">26% OFF</span> on All Health Screening Packages!
          </span>
          <Link
            to="/ramadan-wellness"
            className="bg-white text-green-600 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 hover:text-green-700 transition-all shadow-lg hover:shadow-xl"
          >
            Book Now →
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </motion.div>
  );
};

export default OfferRibbon;
