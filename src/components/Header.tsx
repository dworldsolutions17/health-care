import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">HealthCare</h1>
              <p className="text-xs text-gray-600">Excellence in Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary-600 transition">
              About Us
            </button>
            <Link to="/services" className="text-gray-700 hover:text-primary-600 transition">
              Services
            </Link>
            <Link to="/doctors" className="text-gray-700 hover:text-primary-600 transition">
              Doctors
            </Link>
            <Link to="/ecommerce" className="text-gray-700 hover:text-primary-600 transition">
              E-commerce
            </Link>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary-600 transition">
              Contact
            </button>
            <Link to="/doctors" className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition">
              Join Our Network
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-primary-600 py-2">
              About Us
            </button>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-gray-700 hover:text-primary-600 py-2">
              Services
            </Link>
            <Link to="/doctors" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-gray-700 hover:text-primary-600 py-2">
              Doctors
            </Link>
            <Link to="/ecommerce" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-gray-700 hover:text-primary-600 py-2">
              E-commerce
            </Link>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-primary-600 py-2">
              Contact
            </button>
            <Link to="/doctors" onClick={() => setIsMenuOpen(false)} className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition block text-center">
              Join Our Network
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
