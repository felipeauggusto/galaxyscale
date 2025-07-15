export default function TermosUso() {
  const sections = [
    {
      iconName: "01",
      title: "Uso do Site",
      content:
        "Ao acessar e usar os serviços da GalaxyScale, você concorda em cumprir estes termos. O uso inadequado, tentativas de hack ou violação das regras resultará no banimento imediato da plataforma.",
    },
    {
      iconName: "02",
      title: "Compra de Contas",
      content:
        "As contas oferecidas são verificadas e entregues conforme especificado. O prazo de entrega é de até 24 horas. Após a entrega, a responsabilidade pela manutenção da conta é do comprador.",
    },
    {
      iconName: "03",
      title: "Garantia",
      content:
        "Oferecemos garantia de 30 dias para contas com problemas técnicos comprovados. A garantia não cobre banimentos por uso inadequado, violação de políticas das plataformas ou alterações não autorizadas.",
    },
    {
      iconName: "04",
      title: "Restrições",
      content:
        "É proibido revender nossas contas, usar para atividades ilegais, spam ou qualquer prática que viole os termos das plataformas originais. O descumprimento resulta em perda da garantia.",
    },
    {
      iconName: "05",
      title: "Responsabilidades",
      content:
        "A GalaxyScale não se responsabiliza por perdas decorrentes do uso inadequado das contas. O usuário é responsável por seguir as diretrizes das plataformas e manter as contas em conformidade.",
    },
    {
      iconName: "06",
      title: "Propriedade Intelectual",
      content:
        "Todo conteúdo do site, incluindo textos, imagens, logos e design são propriedade da GalaxyScale. É proibida a reprodução sem autorização expressa.",
    },
    {
      iconName: "07",
      title: "Atualizações dos Termos",
      content:
        "Estes termos podem ser atualizados a qualquer momento. Continuando a usar nossos serviços após as mudanças, você aceita automaticamente os novos termos.",
    },
    {
      iconName: "08",
      title: "Contato",
      content:
        "Para dúvidas sobre estes termos, entre em contato através do e-mail suporte@galaxyscale.com.br ou pelo WhatsApp disponível em nosso site.",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0B0F1A", padding: "6rem 1rem" }}>
      {/* Header (adicione seu Header aqui) */}

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
            Termos de Uso
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#CBD5E0", margin: "0 auto", maxWidth: "400px" }}>
            Ao utilizar nossos serviços, você concorda com os termos abaixo.
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
              {/* Ícone substituído por círculo com iniciais */}
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

      {/* Footer (adicione seu Footer aqui) */}
    </div>
  );
}