import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import ServicesNew from '../components/ServicesNew';
import Doctors from '../components/Doctors';
import Ecommerce from '../components/Ecommerce';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingActionButton from '../components/FloatingActionButton';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesNew />
        <Doctors />
        <Ecommerce />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default HomePage;
