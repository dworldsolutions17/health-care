import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const patientTestimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
      text: 'Exceptional care and support! The doctors here truly care about their patients. I received the best treatment for my condition and the staff was incredibly compassionate throughout my journey.',
      rating: 5
    },
    {
      name: 'Muhammad Hassan',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      text: 'The telemedicine service was a game-changer for me. I could consult with specialists from the comfort of my home. Professional, efficient, and caring service.',
      rating: 5
    },
    {
      name: 'Ayesha Khan',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
      text: 'I am grateful for the excellent cardiac care I received. The medical team was knowledgeable and supportive, and the facility was state-of-the-art. Highly recommended!',
      rating: 5
    }
  ];

  const doctorTestimonials = [
    {
      name: 'Dr. Ali Raza',
      specialty: 'Cardiologist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200',
      text: 'Joining this healthcare network was the best decision for my career. The collaborative environment and access to advanced technology have enabled me to provide better care to my patients.',
      rating: 5
    },
    {
      name: 'Dr. Fatima Malik',
      specialty: 'Psychiatrist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200',
      text: 'The support and professional development opportunities here are outstanding. I feel valued and empowered to make a real difference in mental healthcare.',
      rating: 5
    },
    {
      name: 'Dr. Usman Shah',
      specialty: 'Pediatrician',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200',
      text: 'Working with this organization has been incredibly rewarding. The focus on patient care and continuous learning makes it an ideal environment for healthcare professionals.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our patients and healthcare professionals
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mt-6"></div>
        </div>

        {/* Patient Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Patient Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {patientTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-primary-600">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-sm">Verified Patient</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Spotlights */}
        <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Doctor Spotlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {doctorTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-primary-100"
                  />
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-primary-600 font-semibold">{testimonial.specialty}</p>
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed text-center italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">
              {statsInView ? <CountUp end={98} duration={2.5} suffix="%" /> : '0%'}
            </div>
            <div className="text-gray-600 font-semibold">Patient Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">
              {statsInView ? <CountUp end={500} duration={2.5} suffix="+" /> : '0'}
            </div>
            <div className="text-gray-600 font-semibold">Healthcare Professionals</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">
              {statsInView ? <CountUp end={50} duration={2.5} suffix="K+" /> : '0'}
            </div>
            <div className="text-gray-600 font-semibold">Patients Served</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600 font-semibold">Emergency Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
