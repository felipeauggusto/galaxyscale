import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Database, UserCheck, Share2, Lock, Cookie, Shield, RefreshCw, Mail } from "lucide-react";

export default function PoliticaPrivacidade() {
  const sections = [
    {
      icon: Database,
      title: "Coleta de Informações",
      content:
        "Coletamos informações que você nos fornece diretamente, como nome, e-mail, dados de pagamento e informações de contato. Também coletamos dados automaticamente através de cookies e tecnologias similares para melhorar sua experiência.",
    },
    {
      icon: UserCheck,
      title: "Uso dos Dados",
      content:
        "Utilizamos suas informações para processar pedidos, fornecer suporte ao cliente, melhorar nossos serviços, enviar comunicações importantes e personalizar sua experiência na plataforma GalaxyScale.",
    },
    {
      icon: Share2,
      title: "Compartilhamento",
      content:
        "Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para processar pagamentos, cumprir obrigações legais ou com seu consentimento explícito.",
    },
    {
      icon: Lock,
      title: "Segurança",
      content:
        "Implementamos medidas de segurança técnicas e organizacionais avançadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição de dados.",
    },
    {
      icon: Cookie,
      title: "Cookies",
      content:
        "Utilizamos cookies essenciais para o funcionamento do site, cookies de análise para entender como você usa nossos serviços e cookies de personalização para melhorar sua experiência.",
    },
    {
      icon: Shield,
      title: "Seus Direitos",
      content:
        "Você tem direito de acessar, corrigir, excluir ou portar seus dados pessoais. Também pode revogar consentimentos e se opor ao processamento de dados conforme a LGPD.",
    },
    {
      icon: RefreshCw,
      title: "Atualizações da Política",
      content:
        "Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças significativas por e-mail ou através de avisos em nosso site.",
    },
    {
      icon: Mail,
      title: "Contato",
      content:
        "Para questões sobre privacidade, entre em contato conosco através do e-mail privacy@galaxyscale.com ou pelo WhatsApp disponível em nosso site.",
    },
  ];

  return (
    <div className="min-h-screen bg-galaxy">
      <Header />
      <WhatsAppButton />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-400 mb-6">
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Sua segurança é nossa prioridade.</p>
          </div>

          {/* Sections */}
          <div className="grid gap-8 max-w-4xl mx-auto">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="rounded-2xl p-8 bg-galaxy-dark/80 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" aria-label={section.title} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-orbitron font-semibold text-white mb-4">{section.title}</h2>
                      <p className="text-gray-300 leading-relaxed font-poppins">{section.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Last Updated */}
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm font-poppins">Última atualização: Janeiro de 2024</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}