'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, CreditCard, Truck, Rocket } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Escolha sua Conta',
      description: 'Navegue pelo nosso catálogo e encontre a conta perfeita para seu negócio',
      color: 'text-galaxy-purple'
    },
    {
      icon: CreditCard,
      title: 'Realize o Pagamento',
      description: 'Pagamento seguro via PIX, cartão ou transferência bancária',
      color: 'text-galaxy-cyan'
    },
    {
      icon: Truck,
      title: 'Receba em 24h',
      description: 'Entregamos sua conta verificada com toda documentação necessária',
      color: 'text-galaxy-purple'
    },
    {
      icon: Rocket,
      title: 'Comece a Escalar',
      description: 'Inicie suas campanhas com suporte técnico completo da nossa equipe',
      color: 'text-galaxy-cyan'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold galaxy-gradient mb-6">
            Como Funciona
          </h2>
          <p className="text-xl sm:text-2xl text-galaxy-light font-poppins font-light max-w-4xl mx-auto">
            Processo simples e seguro para você começar a escalar hoje mesmo
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha conectora - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-galaxy-purple via-galaxy-cyan to-galaxy-purple transform -translate-y-1/2"></div>
          
          {/* Linha conectora - Mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-galaxy-purple via-galaxy-cyan to-galaxy-purple"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  {/* Número do passo - Desktop */}
                  <div className="hidden md:flex w-12 h-12 bg-galaxy-dark border-2 border-galaxy-purple rounded-full items-center justify-center text-galaxy-light font-orbitron font-bold text-lg mb-4 relative z-10">
                    {index + 1}
                  </div>
                  
                  {/* Ícone */}
                  <div className={`w-16 h-16 ${step.color} bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl flex items-center justify-center mb-4 hover:shadow-lg hover:shadow-galaxy-purple/25 transition-all duration-300 hover-lift`}>
                    <step.icon size={32} />
                  </div>
                  
                  {/* Número do passo - Mobile */}
                  <div className="md:hidden w-8 h-8 bg-galaxy-dark border-2 border-galaxy-purple rounded-full flex items-center justify-center text-galaxy-light font-orbitron font-bold text-sm mb-4 absolute left-4 top-4 z-10">
                    {index + 1}
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="text-center pl-12 md:pl-0">
                    <h3 className="text-xl font-orbitron font-semibold text-galaxy-light mb-2">
                      {step.title}
                    </h3>
                    <p className="text-galaxy-light/70 font-poppins text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#catalog"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-galaxy-purple to-galaxy-cyan text-white px-8 py-4 rounded-full font-poppins text-lg font-medium hover:shadow-lg hover:shadow-galaxy-purple/25 transition-all duration-300 hover-lift"
          >
            <span>Começar Agora</span>
            <Rocket size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;