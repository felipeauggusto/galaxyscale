'use client';

import React from 'react';
import { Instagram, ArrowUp, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contas', href: '#catalog' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Comunidade', href: '#community' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <>
      <footer className="bg-galaxy-dark/90 backdrop-blur-md border-t border-galaxy-purple/20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo e Descrição */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-orbitron font-bold galaxy-gradient mb-4">
                GalaxyScale
              </h3>
              <p className="text-galaxy-light/70 font-poppins text-sm leading-relaxed mb-4">
                A estrutura de contingência definitiva para anunciantes que não aceitam limites. 
                Performance, segurança e suporte de outro mundo.
              </p>
              <p className="text-galaxy-light/60 font-poppins text-xs">
                © 2024 GalaxyScale. Todos os direitos reservados.
              </p>
            </div>

            {/* Links Rápidos */}
            <div className="text-center">
              <h4 className="text-lg font-orbitron font-semibold text-galaxy-light mb-4">
                Links Rápidos
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-galaxy-light/70 hover:text-galaxy-cyan transition-colors duration-300 font-poppins text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-orbitron font-semibold text-galaxy-light mb-4">
                Siga-nos
              </h4>
              <div className="flex justify-center md:justify-end items-center space-x-4 mb-4">
                <a
                  href="https://instagram.com/galaxyscale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-galaxy-light hover:text-galaxy-cyan transition-colors duration-300 font-poppins text-sm hover-lift"
                >
                  <Instagram size={20} />
                  <span>@galaxyscale</span>
                </a>
              </div>
              <p className="text-galaxy-light/60 font-poppins text-xs">
                Siga a gente para novidades e dicas exclusivas
              </p>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-galaxy-purple/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-galaxy-light/60 font-poppins text-xs mb-4 sm:mb-0">
              Desenvolvido com 💜 pela equipe GalaxyScale
            </div>
            
            {/* Botão voltar ao topo */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-galaxy-light hover:text-galaxy-cyan transition-colors duration-300 font-poppins text-sm hover-lift"
            >
              <ArrowUp size={16} />
              <span>Voltar ao topo</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Botão WhatsApp Flutuante */}
      <a
        href="https://wa.me/5544999999999?text=Olá!%20Tenho%20interesse%20em%20comprar%20uma%20conta%20Google%20Ads%20da%20GalaxyScale."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </>
  );
};

export default Footer;