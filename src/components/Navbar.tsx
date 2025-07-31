import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Voice Talk', path: '/voice-talk' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Apno ki Awaj Logo" className="w-8 h-8 rounded-lg object-cover" />
            <span className="text-xl font-semibold text-deep-purple">Apno ki Awaj</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-gray-700 hover:text-deep-purple transition-colors duration-200 font-medium ${
                  location.pathname === link.path ? 'text-deep-purple' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/premium"
              className="px-6 py-2 bg-gradient-to-r from-lime to-deep-purple text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
            >
              Get Premium
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-gray-700 hover:text-deep-purple transition-colors duration-200 font-medium ${
                    location.pathname === link.path ? 'text-deep-purple' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/premium"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-lime to-deep-purple text-white rounded-full hover:shadow-lg transition-all duration-200 font-medium"
              >
                Get Premium
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;