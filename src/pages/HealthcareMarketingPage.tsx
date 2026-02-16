import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HealthcareMarketingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-semibold mb-8 border border-white/20">
              B2B Healthcare Growth Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Healthcare Growth Built on<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                Trust & Outcomes
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto">
              We help hospitals, foundations, colleges, and healthcare institutions grow through trust-based systems and measurable outcomes.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
            >
              Talk to Our Strategy Team
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Problem
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Many healthcare institutions invest in promotion but struggle with sustainable growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🤔', title: 'Weak Public Trust', description: 'Audiences are skeptical of healthcare claims' },
                { icon: '📉', title: 'Low Conversion', description: 'Traffic does not turn into patients or admissions' },
                { icon: '💬', title: 'Unclear Communication', description: 'Messages fail to resonate emotionally' },
                { icon: '📊', title: 'Inconsistent Growth', description: 'Results fluctuate without clear systems' }
              ].map((problem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center"
                >
                  <div className="text-5xl mb-4">{problem.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-red-50 border-l-4 border-red-500 p-8 rounded-r-2xl"
            >
              <p className="text-xl text-gray-800">
                <strong className="text-red-700">The Reality:</strong> Marketing activity without systems does not create results. It creates noise.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Health Orbit Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Health Orbit Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We design integrated healthcare growth systems that build lasting relationships
              </p>
            </div>

            <div className="relative">
              {/* Flow Diagram */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {[
                  { step: 'Awareness', description: 'Reach your ideal audience', color: 'from-blue-500 to-blue-600' },
                  { step: 'Trust', description: 'Build credibility through content', color: 'from-green-500 to-green-600' },
                  { step: 'Conversion', description: 'Turn interest into action', color: 'from-orange-500 to-orange-600' },
                  { step: 'Relationships', description: 'Create long-term loyalty', color: 'from-purple-500 to-purple-600' }
                ].map((phase, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex-1 text-center relative"
                  >
                    <div className={`mx-auto w-32 h-32 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl mb-4`}>
                      {idx + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.step}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                    {idx < 3 && (
                      <svg className="hidden md:block absolute top-16 -right-6 w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our System Connects:</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-4xl mb-3">🎯</div>
                  <p className="font-semibold text-gray-800">Strategic Positioning</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-4xl mb-3">📱</div>
                  <p className="font-semibold text-gray-800">Digital Presence</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-4xl mb-3">📈</div>
                  <p className="font-semibold text-gray-800">Data-Driven Optimization</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes We Drive */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Outcomes We Help Drive
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Real results that impact your bottom line and community reach
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Funding Growth',
                  icon: '💰',
                  description: 'Structured storytelling & transparent communication that attracts donors and investors',
                  points: ['Grant applications', 'Donor confidence', 'Impact reporting', 'Transparency systems']
                },
                {
                  title: 'Admissions Growth',
                  icon: '🎓',
                  description: 'Lead systems, counseling flow, and parent confidence for educational healthcare programs',
                  points: ['Student pipeline', 'Parent trust', 'Enrollment systems', 'Career positioning']
                },
                {
                  title: 'Patient & OPD Growth',
                  icon: '🏥',
                  description: 'Preventive positioning & repeat visits through strategic patient engagement',
                  points: ['First-time visits', 'Repeat patients', 'Referral systems', 'Trust building']
                }
              ].map((outcome, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
                >
                  <div className="text-6xl mb-4">{outcome.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{outcome.title}</h3>
                  <p className="text-blue-100 mb-6">{outcome.description}</p>
                  <ul className="space-y-2">
                    {outcome.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why The Health Orbit */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why The Health Orbit
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We bring specialized expertise in healthcare communication and growth systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Healthcare Specialization',
                  description: 'We understand medical ethics, patient psychology, and institutional dynamics',
                  icon: '🏥'
                },
                {
                  title: 'Ecosystem Thinking',
                  description: 'We don\'t just market — we build sustainable patient and partner ecosystems',
                  icon: '🌐'
                },
                {
                  title: 'Conversion Architecture',
                  description: 'Every campaign is designed to move audiences from awareness to action',
                  icon: '🎯'
                },
                {
                  title: 'Data-Driven Improvement',
                  description: 'Continuous optimization based on real performance metrics and feedback',
                  icon: '📊'
                }
              ].map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow"
                >
                  <div className="text-5xl">{reason.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-12 rounded-3xl text-center"
            >
              <h3 className="text-3xl font-bold mb-4">We Do Not Sell Services</h3>
              <p className="text-2xl mb-2">We Build Sustainable Growth Engines</p>
              <p className="text-blue-100 text-lg">
                Systems that generate consistent outcomes over time
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Build Sustainable Growth?
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Let's discuss how we can help your institution achieve its growth objectives through trust, systems, and measurable outcomes.
            </p>
            
            <div className="bg-white p-12 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Talk to Our Strategy Team</h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl mb-3">📞</div>
                  <p className="text-gray-600 font-semibold">Schedule a Call</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">📧</div>
                  <p className="text-gray-600 font-semibold">Send an Email</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">💬</div>
                  <p className="text-gray-600 font-semibold">Start a Conversation</p>
                </div>
              </div>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>

            <p className="mt-12 text-gray-600 italic">
              "Healthcare growth built on trust, not tactics."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareMarketingPage;
