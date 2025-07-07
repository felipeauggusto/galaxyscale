export default function PoliticaPrivacidade() {
  const sections = [
    {
      iconName: "01",
      title: "Coleta de Informações",
      content:
        "Coletamos informações que você nos fornece diretamente, como nome, e-mail, dados de pagamento e informações de contato. Também coletamos dados automaticamente através de cookies e tecnologias similares para melhorar sua experiência.",
    },
    {
      iconName: "02",
      title: "Uso dos Dados",
      content:
        "Utilizamos suas informações para processar pedidos, fornecer suporte ao cliente, melhorar nossos serviços, enviar comunicações importantes e personalizar sua experiência na plataforma GalaxyScale.",
    },
    {
      iconName: "03",
      title: "Compartilhamento",
      content:
        "Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para processar pagamentos, cumprir obrigações legais ou com seu consentimento explícito.",
    },
    {
      iconName: "04",
      title: "Segurança",
      content:
        "Implementamos medidas de segurança técnicas e organizacionais avançadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição de dados.",
    },
    {
      iconName: "05",
      title: "Cookies",
      content:
        "Utilizamos cookies essenciais para o funcionamento do site, cookies de análise para entender como você usa nossos serviços e cookies de personalização para melhorar sua experiência.",
    },
    {
      iconName: "06",
      title: "Seus Direitos",
      content:
        "Você tem direito de acessar, corrigir, excluir ou portar seus dados pessoais. Também pode revogar consentimentos e se opor ao processamento de dados conforme a LGPD.",
    },
    {
      iconName: "07",
      title: "Atualizações da Política",
      content:
        "Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças significativas por e-mail ou através de avisos em nosso site.",
    },
    {
      iconName: "08",
      title: "Contato",
      content:
        "Para questões sobre privacidade, entre em contato conosco através do e-mail privacy@galaxyscale.com ou pelo WhatsApp disponível em nosso site.",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0B0F1A", padding: "6rem 1rem" }}>
      {/* Header (coloque seu header aqui se quiser) */}

      <main style={{ maxWidth: "768px", margin: "0 auto" }}>
        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              background:
                "linear-gradient(90deg, #7F00FF 0%, #00F2FE 50%, #007CF0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1.5rem",
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            Política de Privacidade
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#CBD5E0", margin: "0 auto", maxWidth: "400px" }}>
            Sua segurança é nossa prioridade.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: "grid", gap: "2rem" }}>
          {sections.map((section, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderRadius: "1rem",
                padding: "2rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                display: "flex",
                gap: "1rem",
              }}
            >
              {/* Ícone - substituído por um círculo com as iniciais */}
              <div
                style={{
                  minWidth: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #7F00FF, #00F2FE)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "700",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1rem",
                  userSelect: "none",
                }}
                aria-label={section.title}
                title={section.title}
              >
                {section.iconName.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <h2
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    fontFamily: "'Poppins', sans-serif",
                    marginBottom: "0.75rem",
                  }}
                >
                  {section.title}
                </h2>
                <p style={{ color: "#CBD5E0", lineHeight: 1.5, fontFamily: "'Poppins', sans-serif" }}>
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Última atualização */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ color: "#94A3B8", fontSize: "0.875rem", fontFamily: "'Poppins', sans-serif" }}>
            Última atualização: 07/07/2025.
          </p>
        </div>
      </main>

      {/* Footer (coloque seu footer aqui se quiser) */}
    </div>
  );
}