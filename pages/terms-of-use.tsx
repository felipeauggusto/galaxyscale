import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
// restante do código...

export default function TermosUso() {
  const sections = [
    {
      icon: Globe,
      title: "Uso do Site",
      content:
        "Ao acessar e usar os serviços da GalaxyScale, você concorda em cumprir estes termos. O uso inadequado, tentativas de hack ou violação das regras resultará no banimento imediato da plataforma.",
    },
    {
      icon: ShoppingCart,
      title: "Compra de Contas",
      content:
        "As contas oferecidas são verificadas e entregues conforme especificado. O prazo de entrega é de até 24 horas. Após a entrega, a responsabilidade pela manutenção da conta é do comprador.",
    },
    {
      icon: Shield,
      title: "Garantia",
      content:
        "Oferecemos garantia de 30 dias para contas com problemas técnicos comprovados. A garantia não cobre banimentos por uso inadequado, violação de políticas das plataformas ou alterações não autorizadas.",
    },
    {
      icon: AlertTriangle,
      title: "Restrições",
      content:
        "É proibido revender nossas contas, usar para atividades ilegais, spam ou qualquer prática que viole os termos das plataformas originais. O descumprimento resulta em perda da garantia.",
    },
    {
      icon: Scale,
      title: "Responsabilidades",
      content:
        "A GalaxyScale não se responsabiliza por perdas decorrentes do uso inadequado das contas. O usuário é responsável por seguir as diretrizes das plataformas e manter as contas em conformidade.",
    },
    {
      icon: Copyright,
      title: "Propriedade Intelectual",
      content:
        "Todo conteúdo do site, incluindo textos, imagens, logos e design são propriedade da GalaxyScale. É proibida a reprodução sem autorização expressa.",
    },
    {
      icon: RefreshCw,
      title: "Atualizações dos Termos",
      content:
        "Estes termos podem ser atualizados a qualquer momento. Continuando a usar nossos serviços após as mudanças, você aceita automaticamente os novos termos.",
    },
    {
      icon: Mail,
      title: "Contato",
      content:
        "Para dúvidas sobre estes termos, entre em contato através do e-mail legal@galaxyscale.com ou pelo WhatsApp disponível em nosso site.",
    },
  ]

  return (
    <div className="min-h-screen bg-galaxy">
      <Header />
      <WhatsAppButton />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-galaxy-gradient mb-6">Termos de Uso</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ao utilizar nossos serviços, você concorda com os termos abaixo.
            </p>
          </div>

          {/* Sections */}
          <div className="grid gap-8 max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <div key={index} className="card-galaxy rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-orbitron font-semibold text-white mb-4">{section.title}</h2>
                    <p className="text-gray-300 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Last Updated */}
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">Última atualização: Janeiro de 2024</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
