'use client';

import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contas', href: '#catalog' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Comunidade', href: '#community' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-galaxy-dark/80 backdrop-blur-md border-b border-galaxy-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-orbitron font-bold galaxy-gradient">
              GalaxyScale
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-galaxy-light hover:text-galaxy-cyan transition-colors duration-300 font-poppins text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="bg-gradient-to-r from-galaxy-purple to-galaxy-cyan text-white px-6 py-2 rounded-full font-poppins text-sm font-medium hover:shadow-lg hover:shadow-galaxy-purple/25 transition-all duration-300 hover-lift"
            >
              Falar com Especialista
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-galaxy-light hover:text-galaxy-cyan transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-galaxy-dark/95 backdrop-blur-md border-b border-galaxy-purple/20"
          >
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="block text-galaxy-light hover:text-galaxy-cyan transition-colors duration-300 font-poppins text-base font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              
              {/* Instagram Link */}
              <a
                href="https://instagram.com/galaxyscale.ads"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-galaxy-light hover:text-galaxy-cyan transition-colors duration-300 font-poppins text-base font-medium py-2"
              >
                <Instagram size={20} />
                <span>@galaxyscale.ads</span>
              </a>
              
              {/* CTA Button Mobile */}
              <a
                href="#contact"
                onClick={toggleMenu}
                className="block bg-gradient-to-r from-galaxy-purple to-galaxy-cyan text-white px-6 py-3 rounded-full font-poppins text-base font-medium text-center hover:shadow-lg hover:shadow-galaxy-purple/25 transition-all duration-300 mt-4"
              >
                Falar com Especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;