// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-15 h-15  rounded-full flex items-center justify-center">
                <img src={logo} alt="aca logo" />
              </div>
              <span className="text-xl font-bold">ACAkbou</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering athletes to reach their full potential through dedicated training and community support.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-[#E63946] hover:text-red-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-[#E63946] hover:text-red-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-[#E63946] hover:text-red-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link 
                to="/about" 
                className="block text-gray-300 hover:text-[#974b51]  transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="block text-gray-300 hover:text-[#974b51] transition-colors duration-200"
              >
                Services
              </Link>
              <Link 
                to="/event" 
                className="block text-gray-300 hover:text-[#974b51]  transition-colors duration-200"
              >
                Event
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-[#E63946] flex-shrink-0" size={20} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-[#E63946] flex-shrink-0" size={20} />
                <span className="text-gray-300">acakbou@gmail.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#E63946] flex-shrink-0 mt-1" size={20} />
                <div className="text-gray-300">
                  <div>Stade 1 November 1954 akbou</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-400">
            © 2025 Athelitisme Club Akbou. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;