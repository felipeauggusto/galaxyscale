'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Clock, HeartHandshake, Globe, Users } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Verificação Completa',
      description: 'Todas as contas passam por rigoroso processo de verificação com documentação autêntica',
      color: 'text-galaxy-purple'
    },
    {
      icon: Globe,
      title: 'IP Dedicado',
      description: 'Cada conta possui IP dedicado para máxima segurança e performance',
      color: 'text-galaxy-cyan'
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Receba suas contas em até 24 horas após a confirmação do pagamento',
      color: 'text-galaxy-purple'
    },
    {
      icon: HeartHandshake,
      title: 'Garantia 7 Dias',
      description: 'Garantia total de 7 dias para qualquer problema técnico',
      color: 'text-galaxy-cyan'
    },
    {
      icon: Users,
      title: 'Suporte Técnico',
      description: 'Equipe especializada disponível 24/7 para suporte completo',
      color: 'text-galaxy-purple'
    },
    {
      icon: Zap,
      title: 'Performance Otimizada',
      description: 'Contas configuradas para máxima performance e conversão',
      color: 'text-galaxy-cyan'
    }
  ];

  const guarantees = [
    'Contas 100% verificadas',
    'IPs dedicados exclusivos',
    'Documentação completa',
    'Suporte técnico especializado',
    'Garantia de 7 dias',
    'Entrega em 24h'
  ];

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold galaxy-gradient mb-6">
            Benefícios & Garantias
          </h2>
          <p className="text-xl sm:text-2xl text-galaxy-light font-poppins font-light max-w-4xl mx-auto">
            Tudo que você precisa para escalar com segurança e performance
          </p>
        </motion.div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl p-6 hover:border-galaxy-purple hover:shadow-lg hover:shadow-galaxy-purple/25 transition-all duration-300 hover-lift"
            >
              <div className="flex items-center justify-center mb-4">
                <div className={`w-16 h-16 ${benefit.color} bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl flex items-center justify-center`}>
                  <benefit.icon size={32} />
                </div>
              </div>
              <h3 className="text-xl font-orbitron font-semibold text-galaxy-light mb-3 text-center">
                {benefit.title}
              </h3>
              <p className="text-galaxy-light/70 font-poppins text-sm text-center leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Seção de Garantias */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-orbitron font-bold text-galaxy-light mb-6">
                Nossas Garantias
              </h3>
              <p className="text-galaxy-light/80 font-poppins text-lg mb-6 leading-relaxed">
                Na <span className="galaxy-gradient font-medium">GalaxyScale</span>, sua segurança 
                e sucesso são nossa prioridade. Oferecemos garantias sólidas para que você possa 
                escalar com total tranquilidade.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guarantees.map((guarantee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-galaxy-cyan rounded-full flex-shrink-0"></div>
                    <span className="text-galaxy-light font-poppins text-sm">{guarantee}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-64 h-64 bg-gradient-to-br from-galaxy-purple/20 to-galaxy-cyan/20 rounded-full flex items-center justify-center backdrop-blur-md border border-galaxy-purple/30 pulse-glow">
                  <div className="w-48 h-48 bg-galaxy-dark/80 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-orbitron font-bold galaxy-gradient mb-2">
                        7
                      </div>
                      <div className="text-galaxy-light font-poppins text-lg font-medium">
                        Dias de
                      </div>
                      <div className="text-galaxy-light font-poppins text-lg font-medium">
                        Garantia
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;