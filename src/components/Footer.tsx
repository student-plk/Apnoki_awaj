import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const socialLinks = [
    // YouTube removed for now
  ];

  return (
    <footer className="bg-cream border-t border-gray-200 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Apno ki Awaj Logo" className="w-6 h-6 md:w-8 md:h-8 rounded-lg object-cover" />
            <span className="text-lg md:text-xl font-semibold text-deep-purple">Apno ki Awaj</span>
          </div>

          {/* Social Media Links - Currently empty */}
          {/* <div className="flex items-center space-x-4 md:space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 text-deep-purple hover:text-lime"
                aria-label={social.label}
              >
                <social.icon size={18} className="md:w-5 md:h-5" />
              </a>
            ))}
          </div> */}

          {/* Support Email */}
          <div className="flex items-center space-x-2 text-deep-purple">
            <Mail size={16} className="md:w-[18px] md:h-[18px]" />
            <a
              href="mailto:help.apnokiawaj@gmail.com"
              className="hover:text-lime transition-colors duration-200 font-medium text-sm md:text-base"
            >
              help.apnokiawaj@gmail.com
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 md:space-x-8 text-xs md:text-sm text-gray-600">
            <Link to="#" className="hover:text-deep-purple transition-colors duration-200">
              Terms of Use
            </Link>
            <Link to="#" className="hover:text-deep-purple transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs md:text-sm text-gray-500">
            <p>© 2025 Apno ki Awaj. Made with love to heal hearts.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;