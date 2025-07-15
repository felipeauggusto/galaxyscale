'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Trophy, Star, Zap, Crown } from 'lucide-react';

const Community: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Networking Exclusivo',
      description: 'Conecte-se com outros anunciantes de sucesso e compartilhe experiências'
    },
    {
      icon: MessageCircle,
      title: 'Grupo VIP',
      description: 'Acesso ao grupo exclusivo com dicas, estratégias e suporte da comunidade'
    },
    {
      icon: Trophy,
      title: 'Cases de Sucesso',
      description: 'Acompanhe casos reais de anunciantes que alcançaram resultados extraordinários'
    },
    {
      icon: Star,
      title: 'Conteúdo Premium',
      description: 'Material exclusivo, webinars e masterclasses com especialistas do mercado'
    },
    {
      icon: Zap,
      title: 'Updates Prioritários',
      description: 'Seja o primeiro a saber sobre novas contas, promoções e novidades'
    },
    {
      icon: Crown,
      title: 'Status Elite',
      description: 'Reconhecimento especial e benefícios exclusivos para membros da elite'
    }
  ];

  const stats = [
    { number: '200+', label: 'Membros Ativos' },
    { number: '10M+', label: 'Investidos pelos Membros' },
    { number: '95%', label: 'Taxa de Sucesso' },
    { number: '24/7', label: 'Suporte Disponível' }
  ];

  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold galaxy-gradient mb-6">
            Comunidade Elite
          </h2>
          <p className="text-xl sm:text-2xl text-galaxy-light font-poppins font-light max-w-4xl mx-auto">
            Faça parte da comunidade exclusiva dos anunciantes que não aceitam limites
          </p>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-orbitron font-bold galaxy-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-galaxy-light/70 font-poppins text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Funcionalidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl p-6 hover:border-galaxy-purple hover:shadow-lg hover:shadow-galaxy-purple/25 transition-all duration-300 hover-lift"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 text-galaxy-cyan bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl flex items-center justify-center">
                  <feature.icon size={32} />
                </div>
              </div>
              <h3 className="text-xl font-orbitron font-semibold text-galaxy-light mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-galaxy-light/70 font-poppins text-sm text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA da Comunidade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-galaxy-purple/20 to-galaxy-cyan/20 backdrop-blur-md border border-galaxy-purple/30 rounded-2xl p-8 lg:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-orbitron font-bold text-galaxy-light mb-6">
              Pronto para fazer parte da Elite?
            </h3>
            <p className="text-galaxy-light/80 font-poppins text-lg mb-8 leading-relaxed">
              Ao adquirir uma conta <span className="galaxy-gradient font-medium">GalaxyScale</span>, 
              você automaticamente se torna membro da nossa comunidade exclusiva. 
              Conecte-se com outros anunciantes, aprenda estratégias avançadas e acelere seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#catalog"
                className="bg-gradient-to-r from-galaxy-purple to-galaxy-cyan text-white px-8 py-4 rounded-full font-poppins text-lg font-medium hover:shadow-lg hover:shadow-galaxy-purple/25 transition-all duration-300 hover-lift"
              >
                Ver Contas Disponíveis
              </a>
              <a
                href="https://wa.me/5544999629411?text=Olá! Gostaria de saber mais sobre a Comunidade Elite da GalaxyScale"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-galaxy-cyan text-galaxy-cyan px-8 py-4 rounded-full font-poppins text-lg font-medium hover:bg-galaxy-cyan hover:text-galaxy-dark transition-all duration-300 hover-lift"
              >
                Saber Mais
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;