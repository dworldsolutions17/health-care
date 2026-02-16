import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
      {/* Top Navigation Bar */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src="/images/logo" alt="The Health Orbit" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            <Link 
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }} 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/health-plans" 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Health Plans
            </Link>
            <Link 
              to="/preventive-care" 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Preventive Care
            </Link>
            <Link 
              to="/telemedicine" 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Telemedicine
            </Link>
            <Link 
              to="/healthcare-marketing" 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors whitespace-nowrap"
            >
              Marketing
            </Link>
            <Link 
              to="/join-network" 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Partners
            </Link>
            <Link 
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }} 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Contact
            </Link>
            <Link 
              to="/ai-assessment" 
              className="ml-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all font-medium text-sm whitespace-nowrap"
            >
              AI Assessment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
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
          <div className="xl:hidden py-4 border-t border-gray-100 animate-slideDown">
            <div className="space-y-1">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-lg transition-colors font-medium"
              >
                About
              </button>
              <Link 
                to="/services" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-lg transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/health-plans" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-lg transition-colors"
              >
                Health Plans
              </Link>
              <Link 
                to="/preventive-care" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-lg transition-colors"
              >
                Preventive Care
              </Link>
              <Link 
                to="/telemedicine" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-lg transition-colors"
              >
                Telemedicine
              </Link>
              <Link 
                to="/healthcare-marketing" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-lg transition-colors"
              >
                Healthcare Marketing
              </Link>
              <Link 
                to="/join-network" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-lg transition-colors"
              >
                Health Partners
              </Link>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-lg transition-colors font-medium"
              >
                Contact
              </button>
              <Link 
                to="/ai-assessment" 
                onClick={() => setIsMenuOpen(false)} 
                className="block mx-4 mt-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-3 rounded-lg text-center font-medium shadow-md"
              >
                AI Health Assessment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
