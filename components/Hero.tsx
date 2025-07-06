'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Headphones } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold galaxy-gradient mb-6">
            GalaxyScale
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-galaxy-light font-poppins font-light mb-4">
            A <span className="text-galaxy-cyan font-medium">GalaxyScale</span> é para quem quer escalar... ATÉ AS GALÁXIAS!
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-galaxy-light/80 font-poppins font-light mb-8">
            A estrutura de contingência definitiva para anunciantes que não aceitam limites.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-galaxy-light/70 font-poppins font-light">
            Performance, segurança e suporte de outro mundo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#catalog"
            className="bg-gradient-to-r from-galaxy-purple to-galaxy-cyan text-white px-8 py-4 rounded-full font-poppins text-lg font-medium hover:shadow-lg hover:shadow-galaxy-purple/25 transition-all duration-300 hover-lift flex items-center space-x-2"
          >
            <span>Ver Contas Disponíveis</span>
            <ArrowRight size={20} />
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-galaxy-cyan text-galaxy-cyan px-8 py-4 rounded-full font-poppins text-lg font-medium hover:bg-galaxy-cyan hover:text-galaxy-dark transition-all duration-300 hover-lift"
          >
            Falar com Especialista
          </a>
        </motion.div>

        {/* Cards de Destaque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl p-6 hover:border-galaxy-purple hover:shadow-lg hover:shadow-galaxy-purple/25 transition-all duration-300 hover-lift">
            <div className="flex items-center justify-center mb-4">
              <Zap className="text-galaxy-cyan w-8 h-8" />
            </div>
            <h3 className="text-xl font-orbitron font-semibold text-galaxy-light mb-2">
              Performance Extrema
            </h3>
            <p className="text-galaxy-light/70 font-poppins text-sm">
              Contas otimizadas para máxima performance e conversão
            </p>
          </div>

          <div className="bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl p-6 hover:border-galaxy-purple hover:shadow-lg hover:shadow-galaxy-purple/25 transition-all duration-300 hover-lift">
            <div className="flex items-center justify-center mb-4">
              <Shield className="text-galaxy-cyan w-8 h-8" />
            </div>
            <h3 className="text-xl font-orbitron font-semibold text-galaxy-light mb-2">
              Máxima Segurança
            </h3>
            <p className="text-galaxy-light/70 font-poppins text-sm">
              IPs dedicados e verificação completa para sua tranquilidade
            </p>
          </div>

          <div className="bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl p-6 hover:border-galaxy-purple hover:shadow-lg hover:shadow-galaxy-purple/25 transition-all duration-300 hover-lift">
            <div className="flex items-center justify-center mb-4">
              <Headphones className="text-galaxy-cyan w-8 h-8" />
            </div>
            <h3 className="text-xl font-orbitron font-semibold text-galaxy-light mb-2">
              Suporte 24/7
            </h3>
            <p className="text-galaxy-light/70 font-poppins text-sm">
              Atendimento técnico especializado quando você precisar
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;