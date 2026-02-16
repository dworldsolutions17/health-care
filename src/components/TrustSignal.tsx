import { motion } from 'framer-motion';

const TrustSignal = () => {
  const partners = [
    { name: 'Aga Khan University Hospital', icon: '🏥', website: 'https://www.aku.edu' },
    { name: 'Shaukat Khanum Memorial Cancer Hospital', icon: '🏥', website: 'https://www.shaukatkhanum.org.pk' },
    { name: 'Chughtai Lab', icon: '🔬', website: 'https://www.chughtailab.com' },
    { name: 'Dr. Essa Laboratory', icon: '🔬', website: 'https://www.essa.com.pk' },
    { name: 'Indus Hospital & Health Network', icon: '🏥', website: 'https://www.indushospital.org.pk' },
    { name: 'National Institute of Cardiovascular Diseases', icon: '❤️', website: 'https://www.nicvd.org' },
    { name: 'Liaquat National Hospital', icon: '🏥', website: 'https://www.lnh.edu.pk' },
    { name: 'South City Hospital', icon: '🏥', website: 'https://www.southcityhospital.com' },
  ];

  // Duplicate partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-8 text-lg font-medium">
            Trusted by healthcare providers, institutions, and medical professionals across Pakistan.
          </p>
          
          {/* Marquee Container */}
          <div className="relative">
            {/* Gradient Overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <div className="marquee-container group">
              <div className="marquee-content">
                {duplicatedPartners.map((partner, index) => (
                  <a
                    key={`${partner.name}-${index}`}
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="marquee-item flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300 cursor-pointer min-w-[200px]"
                  >
                    <div className="text-5xl">{partner.icon}</div>
                    <p className="font-semibold text-dark-text text-center text-sm leading-tight">{partner.name}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          user-select: none;
        }

        .marquee-content {
          display: flex;
          gap: 2rem;
          animation: marquee 40s linear infinite;
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        .marquee-item {
          flex-shrink: 0;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustSignal;
