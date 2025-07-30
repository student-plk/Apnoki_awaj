import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/palak-saini-7868b921b', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-cream border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-lime to-deep-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-semibold text-deep-purple">Apno की Awaj</span>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 text-deep-purple hover:text-lime"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Support Email */}
          <div className="flex items-center space-x-2 text-deep-purple">
            <Mail size={18} />
            <a
              href="mailto:support@apnokiawaj.com"
              className="hover:text-lime transition-colors duration-200 font-medium"
            >
              support@apnokiawaj.com
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-8 text-sm text-gray-600">
            <Link to="#" className="hover:text-deep-purple transition-colors duration-200">
              Terms of Use
            </Link>
            <Link to="#" className="hover:text-deep-purple transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 Apno की Awaj. Made with love to heal hearts.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;