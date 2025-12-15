import { useState } from 'react';
import CookieConsent from '../../components/feature/CookieConsent';

export default function QuemSomosPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openWhatsApp = () => {
    window.open('https://wa.me/5596999999999?text=Olá! Gostaria de saber mais sobre a Maioral Tucuju Academia', '_blank');
  };

  const openAlunoArea = () => {
    window.open('https://evo-totem.w12app.com.br/maioraltucuju/1/page/landing-page/login', '_blank');
  };

  const openGeneralWhatsApp = (department: string) => {
    const messages: Record<string, string> = {
      sac: 'Olá! Preciso de atendimento do SAC.',
      vendas: 'Olá! Gostaria de informações sobre planos e matrículas.',
      ouvidoria: 'Olá! Gostaria de falar com a Ouvidoria.'
    };
    window.open(`https://wa.me/5596992027788?text=${encodeURIComponent(messages[department])}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Cookie Consent Banner */}
      <CookieConsent />

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="px-4 md:px-6 py-3 md:py-4" role="navigation" aria-label="Navegação principal">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <a href="/" className="flex items-center space-x-2" aria-label="Voltar para página inicial">
              <img 
                src="https://static.readdy.ai/image/2050551fbb19c229cf27f3c804633125/13af43590acd2c927cbc2f8095d26490.png" 
                alt="Maioral Tucuju Academia"
                className="h-12 md:h-20 w-auto object-contain"
              />
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Início</a>
              <a href="/#planos" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Planos</a>
              <a href="/unidades" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Unidades</a>
              <a href="/quem-somos" className="text-purple-600 font-semibold cursor-pointer" aria-current="page">Quem Somos</a>
              <button 
                onClick={openAlunoArea}
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-0 flex items-center"
                aria-label="Acessar área do aluno"
              >
                <i className="ri-user-line mr-2"></i>
                Área do Aluno
              </button>
              <button 
                onClick={openWhatsApp}
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer"
                aria-label="Fale conosco pelo WhatsApp"
              >
                <i className="ri-whatsapp-line mr-2" aria-hidden="true"></i>
                Fale Conosco
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-purple-600 cursor-pointer"
              aria-label="Menu"
            >
              <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
              <div className="flex flex-col p-4 space-y-3">
                <a 
                  href="/" 
                  className="text-left text-gray-700 hover:text-purple-600 transition-colors cursor-pointer py-3 px-4 rounded-lg hover:bg-purple-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Início
                </a>
                <a 
                  href="/#planos" 
                  className="text-left text-gray-700 hover:text-purple-600 transition-colors cursor-pointer py-3 px-4 rounded-lg hover:bg-purple-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Planos
                </a>
                <a 
                  href="/unidades" 
                  className="text-left text-gray-700 hover:text-purple-600 transition-colors cursor-pointer py-3 px-4 rounded-lg hover:bg-purple-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Unidades
                </a>
                <a 
                  href="/quem-somos" 
                  className="text-left text-purple-600 font-semibold cursor-pointer py-3 px-4 rounded-lg bg-purple-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Quem Somos
                </a>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAlunoArea();
                  }}
                  className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer text-center font-semibold flex items-center justify-center"
                  aria-label="Acessar área do aluno"
                >
                  <i className="ri-user-line mr-2 text-xl"></i>
                  Área do Aluno
                </button>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openWhatsApp();
                  }}
                  className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer text-center"
                >
                  <i className="ri-whatsapp-line mr-2"></i>
                  Fale Conosco
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Quem Somos</h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            Conheça a história e os valores que nos tornam referência em fitness em Macapá
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4">
                A <strong>Maioral Tucuju Academia</strong> nasceu em Macapá com o propósito de transformar vidas através do fitness e bem-estar. 
                Desde o início, nossa missão sempre foi oferecer um ambiente acolhedor, equipamentos de última geração e 
                profissionais altamente qualificados para ajudar nossos alunos a alcançarem seus objetivos.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-4">
                Com o passar dos anos, estamos expandindo nossa presença em Macapá, brevemente inaugurando novas unidades estrategicamente 
                localizadas para atender melhor nossa comunidade. com estruturas modernas e completas, 
                com o que há de melhor em tecnologia fitness.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Mais do que uma academia, somos uma família comprometida em promover saúde, qualidade de vida e 
                autoestima para todos que confiam em nosso trabalho. Cada conquista de nossos alunos é também nossa conquista.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://static.readdy.ai/image/2050551fbb19c229cf27f3c804633125/13af43590acd2c927cbc2f8095d26490.png"
                alt="Fachada da Maioral Tucuju Academia"
                title="Academia Maioral Tucuju em Macapá"
                className="rounded-2xl shadow-xl object-cover w-full h-64 md:h-96"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Missão, Visão e Valores</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Os pilares que guiam nosso trabalho e compromisso com você
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Missão */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-target-line text-white text-3xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Missão</h3>
              <p className="text-base md:text-lg text-gray-600 text-center">
                Promover saúde, bem-estar e qualidade de vida através de serviços de excelência em fitness, 
                oferecendo um ambiente acolhedor, equipamentos modernos e profissionais qualificados que 
                inspiram e apoiam nossos alunos na jornada de transformação física e mental.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-eye-line text-white text-3xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Visão</h3>
              <p className="text-base md:text-lg text-gray-600 text-center">
                Ser reconhecida como a melhor e mais completa rede de academias do Amapá, 
                referência em inovação, qualidade de serviços e resultados, expandindo nossa presença 
                e impactando positivamente a vida de milhares de pessoas através do fitness.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-heart-line text-white text-3xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Valores</h3>
              <ul className="text-base md:text-lg text-gray-600 space-y-3">
                <li className="flex items-start">
                  <i className="ri-check-line text-purple-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true"></i>
                  <span><strong>Excelência:</strong> Busca constante pela qualidade</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-purple-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true"></i>
                  <span><strong>Respeito:</strong> Valorização de cada indivíduo</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-purple-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true"></i>
                  <span><strong>Inovação:</strong> Tecnologia e métodos modernos</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-purple-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true"></i>
                  <span><strong>Compromisso:</strong> Dedicação aos resultados</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-purple-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true"></i>
                  <span><strong>Comunidade:</strong> Ambiente acolhedor e familiar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              O que nos torna únicos e especiais para você
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Diferencial 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-team-line text-purple-600 text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Equipe Especializada</h3>
              <p className="text-base text-gray-600">
                Profissionais de educação física, nutricionistas e personal trainers certificados e 
                em constante atualização para oferecer o melhor atendimento.
              </p>
            </div>

            {/* Diferencial 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-tools-line text-purple-600 text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Equipamentos Modernos</h3>
              <p className="text-base text-gray-600">
                Aparelhos de última geração das melhores marcas do mercado, garantindo treinos 
                eficientes e seguros para todos os níveis.
              </p>
            </div>

            {/* Diferencial 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-map-pin-line text-purple-600 text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Breve novas Unidades em Macapá e também no estado do Amapá</h3>
              <p className="text-base text-gray-600">
                Localizações estratégicas em diferentes bairros de Macapá para você treinar 
                perto de casa ou do trabalho com toda comodidade.
              </p>
            </div>

            {/* Diferencial 4 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-time-line text-purple-600 text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Horários Flexíveis</h3>
              <p className="text-base text-gray-600">
                Funcionamento amplo de segunda a domingo, com alguns feriados abertas em horarios especiais, 
                para se adaptar à sua rotina.
              </p>
            </div>

            {/* Diferencial 5 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-smartphone-line text-purple-600 text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">App Exclusivo</h3>
              <p className="text-base text-gray-600">
                Aplicativo próprio com treinos personalizados, acompanhamento de evolução, 
                agendamento de aulas e muito mais.
              </p>
            </div>

            {/* Diferencial 6 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-star-line text-purple-600 text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Variedade de Modalidades</h3>
              <p className="text-base text-gray-600">
                Musculação, Maioral Dance, Maioral Cross, Maioral Cardio e muito mais para você 
                nunca enjoar dos treinos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Faça Parte da Nossa Família
          </h2>
          <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Venha conhecer nossas unidades e descubra como podemos ajudar você a alcançar seus objetivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/unidades" 
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer inline-block"
            >
              Conheça Nossas Unidades
            </a>
            <button 
              onClick={openWhatsApp}
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
            >
              <i className="ri-whatsapp-line mr-2 text-xl"></i>
              Fale Conosco
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12" role="contentinfo">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://static.readdy.ai/image/2050551fbb19c229cf27f3c804633125/13af43590acd2c927cbc2f8095d26490.png" 
                  alt="Maioral Tucuju Academia"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <p className="text-sm md:text-base text-gray-400">
                Transformando vidas através do fitness e bem-estar.
              </p>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Canais de Atendimento</h4>
              <ul className="space-y-3 text-sm md:text-base">
                <li>
                  <button 
                    onClick={() => openGeneralWhatsApp('sac')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center bg-transparent border-0 p-0"
                  >
                    <i className="ri-customer-service-2-line mr-2 text-lg"></i>
                    SAC
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openGeneralWhatsApp('vendas')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center bg-transparent border-0 p-0"
                  >
                    <i className="ri-shopping-cart-line mr-2 text-lg"></i>
                    Vendas
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openGeneralWhatsApp('ouvidoria')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center bg-transparent border-0 p-0"
                  >
                    <i className="ri-feedback-line mr-2 text-lg"></i>
                    Ouvidoria
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Início</a></li>
                <li><a href="/#planos" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Planos</a></li>
                <li><a href="/unidades" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Unidades</a></li>
                <li><a href="/quem-somos" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Quem Somos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Baixe o App</h4>
              <div className="space-y-3 mb-4">
                <a 
                  href="https://play.google.com/store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg transition-colors cursor-pointer"
                  aria-label="Baixar na Google Play Store"
                >
                  <i className="ri-google-play-fill text-2xl mr-2" aria-hidden="true"></i>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Disponível no</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
                <a 
                  href="https://www.apple.com/app-store/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg transition-colors cursor-pointer"
                  aria-label="Baixar na App Store"
                >
                  <i className="ri-apple-fill text-2xl mr-2" aria-hidden="true"></i>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Baixar na</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
              </div>
              <h4 className="text-base md:text-lg font-semibold mb-3">Redes Sociais</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer" aria-label="Instagram">
                  <i className="ri-instagram-line" aria-hidden="true"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer" aria-label="Facebook">
                  <i className="ri-facebook-fill" aria-hidden="true"></i>
                </a>
                <a href="https://wa.me/5596999999999" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer" aria-label="WhatsApp">
                  <i className="ri-whatsapp-line" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
            <p className="text-xs md:text-sm text-gray-400">
              © 2024 Maioral Tucuju Academia. Todos os direitos reservados. | 
              <a href="https://readdy.ai/?origin=logo" className="text-purple-400 hover:text-purple-300 ml-1 cursor-pointer">
                Powered by Readdy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
