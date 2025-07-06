'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, Clock, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold galaxy-gradient mb-6">
            Sobre a GalaxyScale
          </h2>
          <p className="text-xl sm:text-2xl text-galaxy-light font-poppins font-light max-w-4xl mx-auto">
            Somos especialistas em fornecer a infraestrutura perfeita para anunciantes que buscam resultados extraordinários
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto Principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-orbitron font-semibold text-galaxy-light">
              A Estrutura de Contingência Definitiva
            </h3>
            <p className="text-galaxy-light/80 font-poppins text-lg leading-relaxed">
              A <span className="galaxy-gradient font-medium">GalaxyScale</span> nasceu da
              experiência de quem vive o tráfego todos os dias. A gente sabe como é frustrante
              lidar com contas bloqueadas, instabilidade e limitações, por isso criamos a 
              estrutura ideal pra quem quer escalar de verdade.
            </p>
            <p className="text-galaxy-light/80 font-poppins text-lg leading-relaxed">
              Cada conta é cuidadosamente verificada, configurada com IPs dedicados e entregue com 
              toda a documentação necessária para garantir sua tranquilidade e máxima performance.
            </p>
            <p className="text-galaxy-light/80 font-poppins text-lg leading-relaxed">
              Além disso, nossa equipe está sempre por perto. Seja pra configurar sua conta,
              tirar dúvidas ou te ajudar a otimizar suas campanhas, o suporte é real e funciona 24 horas por dia, 7 dias por semana.
            </p>
          </motion.div>

          {/* Vantagens */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl p-8">
              <h4 className="text-xl font-orbitron font-semibold text-galaxy-light mb-6">
                Por que escolher a <span className="galaxy-gradient">GalaxyScale</span>?
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-galaxy-cyan w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-poppins font-semibold text-galaxy-light">Verificação Completa</h5>
                    <p className="text-galaxy-light/70 font-poppins text-sm">
                      Todas as contas passam por rigoroso processo de verificação
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="text-galaxy-cyan w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-poppins font-semibold text-galaxy-light">IPs Dedicados</h5>
                    <p className="text-galaxy-light/70 font-poppins text-sm">
                      Cada conta possui IP dedicado para máxima segurança
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-galaxy-cyan w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-poppins font-semibold text-galaxy-light">Entrega Rápida</h5>
                    <p className="text-galaxy-light/70 font-poppins text-sm">
                      Receba suas contas após o pagamento
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="text-galaxy-cyan w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-poppins font-semibold text-galaxy-light">Suporte Técnico</h5>
                    <p className="text-galaxy-light/70 font-poppins text-sm">
                      Equipe especializada disponível para ajudar você
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;