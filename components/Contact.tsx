'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Clock, HelpCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const faqs = [
    {
      question: 'As contas são realmente verificadas?',
      answer: 'Sim, todas as contas passam por rigoroso processo de verificação com documentação autêntica.'
    },
    {
      question: 'Qual é o prazo de entrega?',
      answer: 'Entregamos suas contas em até 24 horas após a confirmação do pagamento.'
    },
    {
      question: 'Existe garantia?',
      answer: 'Oferecemos garantia total de 7 dias para qualquer problema técnico.'
    },
    {
      question: 'Como funciona o suporte?',
      answer: 'Nossa equipe especializada está disponível 24/7 via WhatsApp para suporte técnico.'
    },
    {
      question: 'Posso trocar de conta?',
      answer: 'Sim, dentro do prazo de garantia, você pode solicitar troca por motivos técnicos.'
    },
    {
      question: 'Aceita quais formas de pagamento?',
      answer: 'Aceitamos PIX, cartão de crédito, débito e transferência bancária.'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold galaxy-gradient mb-6">
            Contato & Suporte
          </h2>
          <p className="text-xl sm:text-2xl text-galaxy-light font-poppins font-light max-w-4xl mx-auto">
            Estamos aqui para ajudar você a escalar até as galáxias
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-orbitron font-semibold text-galaxy-light mb-6 flex items-center">
              <MessageSquare className="mr-3 text-galaxy-cyan" />
              Atendimento Direto
            </h3>
            
            <div className="space-y-6">
              <a
                href="https://wa.me/5544999999999?text=Olá!%20Tenho%20interesse%20em%20comprar%20uma%20conta%20Google%20Ads%20da%20GalaxyScale."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-galaxy-dark/50 rounded-lg border border-galaxy-purple/20 hover:border-galaxy-purple transition-colors hover-lift"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-galaxy-light text-lg">WhatsApp</h4>
                  <p className="text-galaxy-light/70 font-poppins text-sm">
                    Atendimento especializado 24/7
                  </p>
                  <p className="text-galaxy-cyan font-poppins text-sm font-medium">
                    Clique para conversar agora
                  </p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-6 bg-galaxy-dark/50 rounded-lg border border-galaxy-purple/20">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-galaxy-cyan rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-galaxy-light text-lg">Horário</h4>
                  <p className="text-galaxy-light/70 font-poppins text-sm">
                    24 horas por dia, 7 dias por semana
                  </p>
                  <p className="text-galaxy-light/70 font-poppins text-sm">
                    Resposta rápida garantida
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-galaxy-purple/20 to-galaxy-cyan/20 backdrop-blur-md border border-galaxy-purple/30 rounded-lg p-6">
                <h4 className="font-poppins font-semibold text-galaxy-light text-lg mb-3">
                  Por que escolher nosso WhatsApp?
                </h4>
                <ul className="space-y-2 text-galaxy-light/80 font-poppins text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-galaxy-cyan rounded-full"></div>
                    <span>Resposta imediata</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-galaxy-cyan rounded-full"></div>
                    <span>Suporte técnico especializado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-galaxy-cyan rounded-full"></div>
                    <span>Atendimento personalizado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-galaxy-cyan rounded-full"></div>
                    <span>Disponível 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-orbitron font-semibold text-galaxy-light mb-6 flex items-center">
              <HelpCircle className="mr-3 text-galaxy-cyan" />
              Perguntas Frequentes
            </h3>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-galaxy-purple/20 pb-4 last:border-b-0">
                  <h4 className="font-poppins font-semibold text-galaxy-light mb-2 text-base">
                    {faq.question}
                  </h4>
                  <p className="text-galaxy-light/70 font-poppins text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-galaxy-purple/10 to-galaxy-cyan/10 rounded-lg border border-galaxy-purple/20">
              <p className="text-galaxy-light/80 font-poppins text-sm text-center">
                Não encontrou sua resposta? 
                <a 
                  href="https://wa.me/5544999999999?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20as%20contas%20Google%20Ads%20da%20GalaxyScale."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-galaxy-cyan hover:text-galaxy-purple transition-colors ml-1 font-medium"
                >
                  Fale conosco no WhatsApp
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;