import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CookieConsent from '../../components/feature/CookieConsent';

export default function HomePage() {
  const navigate = useNavigate();
  const [showContactForm, setShowContactForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [showPromoModal, setShowPromoModal] = useState(false);

  // Add Schema.org JSON-LD
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
    
    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "Gym",
      "name": "Maioral Tucuju Academia",
      "description": "Academia completa com equipamentos modernos, profissionais qualificados e aulas em grupo em Macapá",
      "url": siteUrl,
      "telephone": "(96) 99202-7788",
      "email": "contato@maioraltucuju.com.br",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Tancredo Neves, 224",
        "addressLocality": "Macapá",
        "addressRegion": "AP",
        "postalCode": "68908-530",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 0.0389,
        "longitude": -51.0664
      },
      "openingHours": [
        "Mo-Fr 05:00-23:00",
        "Sa 06:00-18:00"
      ],
      "priceRange": "R$ 109,90 - R$ 149,90",
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Training Groups"
        },
        {
          "@type": "LocationFeatureSpecification", 
          "name": "Group Classes"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Modern Equipment"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quais são os horários de funcionamento da academia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Funcionamos de segunda a quinta feira das 5h às 23h, sexta feira das 5h às 22h aos sábados das 9h às 18h também estamos abertos nos domingos e feriados das 9h às 14h."
          }
        },
        {
          "@type": "Question",
          "name": "Quais planos estão disponíveis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oferecemos plano mensal (R$ 149,90), plano recorrente (R$ 129,90) e plano anual (R$ 109,90) com diferentes benefícios."
          }
        },
        {
          "@type": "Question",
          "name": "A academia oferece uma estrutura para seus treinos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, oferecemos amplos espaços e equipamentos modernos nos planos recorrente e anual, além de profissionais qualificados disponíveis."
          }
        }
      ]
    };

    // Remove existing schema scripts
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(script => script.remove());

    // Add new schemas
    const businessScript = document.createElement('script');
    businessScript.type = 'application/ld+json';
    businessScript.textContent = JSON.stringify(businessSchema);
    document.head.appendChild(businessScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const schemas = document.querySelectorAll('script[type="application/ld+json"]');
      schemas.forEach(script => script.remove());
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('nome', formData.nome);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('telefone', formData.telefone);
    formDataToSend.append('mensagem', formData.mensagem);

    try {
      const response = await fetch('https://readdy.ai/api/form/d44l0g1eds0ugd974840', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
        setShowContactForm(false);
      } else {
        alert('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openMatricula = () => {
    window.open('https://evo-totem.w12app.com.br/maioraltucuju/1/site/QhXXzoY7OMy%5BPLUS%5DFpULG15Wrw%5BEQUAL%5D%5BEQUAL%5D', '_blank');
  };

  const openPromoMatricula = () => {
    window.open('https://evo-totem.w12app.com.br/maioraltucuju/1/site/uRcgN1BLXvcYzmC%5BBAR%5DZHe3rg%5BEQUAL%5D%5BEQUAL%5D', '_blank');
  };


  const openGeneralWhatsApp = (department: string) => {
    const messages: Record<string, string> = {
      sac: 'Olá! Preciso de atendimento do SAC.',
      vendas: 'Olá! Gostaria de informações sobre planos e matrículas.',
      ouvidoria: 'Olá! Gostaria de falar com a Ouvidoria.'
    };
    window.open(`https://wa.me/5596992027788?text=${encodeURIComponent(messages[department])}`, '_blank');
  };

  const openAlunoArea = () => {
    window.open('https://evo-totem.w12app.com.br/maioraltucuju/1/page/landing-page/login', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Cookie Consent Banner */}
      <CookieConsent />

      {/* Promotional Banner */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 text-white py-3 px-4 z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex items-center gap-3 flex-1 justify-center">
            <div className="flex items-center gap-2 animate-bounce">
              <i className="ri-gift-line text-2xl text-white"></i>
            </div>
            <span className="text-sm sm:text-base font-bold text-center">
              🎁 PLANO PROMOÇÃO PRESENTE DA MAIORAL 2025 - RECORRENTE 🎁
            </span>
            <button
              onClick={() => setShowPromoModal(true)}
              className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Ver Oferta
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-12 z-40" role="banner">
        <nav className="px-6 py-4" role="navigation" aria-label="Navegação principal">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <a href="/" className="flex items-center space-x-2" aria-label="Página inicial">
              <img 
                src="https://static.readdy.ai/image/2050551fbb19c229cf27f3c804633125/13af43590acd2c927cbc2f8095d26490.png" 
                alt="Maioral Tucuju Academia"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('planos')}
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-0"
              >
                Planos
              </button>
              <button 
                onClick={() => scrollToSection('modalidades')}
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-0"
              >
                Modalidades
              </button>
              <button 
                onClick={() => navigate('/unidades')}
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-0"
              >
                Unidades
              </button>
              <button 
                onClick={() => navigate('/quem-somos')}
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-0"
              >
                Quem Somos
              </button>
              <button 
                onClick={openAlunoArea}
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-0 flex items-center"
                aria-label="Acessar área do aluno"
              >
                <i className="ri-user-line mr-2"></i>
                Área do Aluno
              </button>
              <button 
                onClick={() => scrollToSection('planos')}
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer"
                aria-label="Ir para seção de planos"
              >
                Matricule-se
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
                <button 
                  onClick={() => scrollToSection('planos')}
                  className="text-left text-gray-700 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-0 py-3 px-4 rounded-lg hover:bg-purple-50"
                >
                  Planos
                </button>
                <button 
                  onClick={() => scrollToSection('modalidades')}
                  className="text-left text-gray-700 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-0 py-3 px-4 rounded-lg hover:bg-purple-50"
                >
                  Modalidades
                </button>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/unidades');
                  }}
                  className="text-left text-gray-700 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-0 py-3 px-4 rounded-lg hover:bg-purple-50"
                >
                  Unidades
                </button>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/quem-somos');
                  }}
                  className="text-left text-gray-700 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-0 py-3 px-4 rounded-lg hover:bg-purple-50"
                >
                  Quem Somos
                </button>
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
                    scrollToSection('planos');
                  }}
                  className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer text-center"
                >
                  Matricule-se
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center mt-12"
        style={{
          backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.8), rgba(147, 51, 234, 0.6)), url('src/assets/IMG_1255.jpeg')`
        }}
        aria-labelledby="hero-title"
      >
        <div className="container mx-auto px-6 text-center text-white">
          <h2 id="hero-title" className="text-5xl md:text-7xl font-bold mb-6">
            Transforme Seu Corpo,<br />
            <span className="text-yellow-400">Transforme Sua Vida</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Na Maioral Tucuju Academia, oferecemos equipamentos de última geração, 
            treinos personalizados e o melhor ambiente para você alcançar seus objetivos fitness em Macapá.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#planos" 
              className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
            >
              Ver Planos
            </a>
            <button 
              onClick={() => scrollToSection('app-download')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              App de Treino
            </button>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Escolha Seu Plano Ideal</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos diferentes opções de pagamento para que você possa escolher a que melhor se adapta ao seu orçamento
            </p>
          </div>

          {/* Plan Cards - Side by Side */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Plano Mensal */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border-2 border-purple-200 flex flex-col">
              <div className="text-center flex-grow">
                <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Plano Purple Mensal</h4>
                <p className="text-gray-600 mb-6 text-sm lg:text-base">Flexibilidade total para seu treino</p>
                <div className="mb-6 lg:mb-8">
                  <span className="text-3xl lg:text-5xl font-bold text-purple-600">R$ 149,90</span>
                  <span className="text-gray-600 text-sm lg:text-base">/mês</span>
                </div>
                <div className="mb-6 lg:mb-8">
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm">
                    <i className="ri-check-line mr-2"></i>
                    Pagamento via PIX ou Dinheiro
                  </div>
                </div>
                <ul className="text-left space-y-3 lg:space-y-4 mb-6 lg:mb-8 text-sm lg:text-base">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Acesso completo à academia</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Todos os equipamentos disponíveis</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Aulas em grupo incluídas</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Avaliação física gratuita</span>
                  </li>
                   <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Acesso ao nosso APP de treino</span>
                  </li>
                </ul>
              </div>
              <button 
                //onClick={openMatricula}
                className="w-full bg-purple-600 text-white py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer mt-auto"
              >
                Assinar somente na recepção
              </button>
            </div>

            {/* Plano Recorrente */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border-2 border-purple-600 relative flex flex-col">
              <div className="absolute -top-3 lg:-top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 lg:px-6 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-semibold">
                  MAIS MAIORAL
                </span>
              </div>
              <div className="text-center flex-grow">
                <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Plano Purple Recorrente</h4>
                <p className="text-gray-600 mb-6 text-sm lg:text-base">Economia garantida com comodidade</p>
                <div className="mb-6 lg:mb-8">
                  <span className="text-3xl lg:text-5xl font-bold text-purple-600">R$ 129,90</span>
                  <span className="text-gray-600 text-sm lg:text-base">/mês</span>
                  <div className="text-xs lg:text-sm text-green-600 font-semibold mt-2">
                    Economize R$ 20,00 por mês!
                  </div>
                </div>
                <div className="mb-6 lg:mb-8">
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm">
                    <i className="ri-credit-card-line mr-2"></i>
                    Cobrança mensal recorrente no cartão de crédito
                  </div>
                </div>
                <ul className="text-left space-y-3 lg:space-y-4 mb-6 lg:mb-8 text-sm lg:text-base">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Acesso completo à academia</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Todos os equipamentos disponíveis</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Aulas em grupo incluídas</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Avaliação física gratuita</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Acesso ao nosso APP de treino</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={openMatricula}
                className="w-full bg-purple-600 text-white py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer mt-auto"
              >
                Assinar Agora
              </button>
            </div>

            {/* Plano Anual */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border-2 border-yellow-400 flex flex-col">
              <div className="text-center flex-grow">
                <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Plano Purple Anual</h4>
                <p className="text-gray-600 mb-6 text-sm lg:text-base">Máxima economia para seu fitness</p>
                <div className="mb-6 lg:mb-8">
                  <span className="text-3xl lg:text-5xl font-bold text-purple-600">R$ 109,90</span>
                  <span className="text-gray-600 text-sm lg:text-base">/mês</span>
                  <div className="text-xs lg:text-sm text-green-600 font-semibold mt-2">
                    Economize R$ 40,00 por mês!
                  </div>
                </div>
                <div className="mb-6 lg:mb-8">
                  <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm">
                    <i className="ri-calendar-line mr-2"></i>
                    R$1.318,80 de 12x no cartão de crédito
                  </div>
                </div>
                <ul className="text-left space-y-3 lg:space-y-4 mb-6 lg:mb-8 text-sm lg:text-base">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Acesso completo à academia</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Todos os equipamentos disponíveis</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Aulas em grupo incluídas</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Avaliação física gratuita</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Acesso ao App de Treino</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Todas unidades</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={openMatricula}
                className="w-full bg-purple-600 text-white py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer mt-auto"
              >
                Assinar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades Section */}
      <section id="modalidades" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossas Modalidades</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diversas opções de treino para você alcançar seus objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Musculação */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20gym%20weight%20training%20area%20with%20dumbbells%2C%20barbells%2C%20strength%20equipment%2C%20people%20doing%20bodybuilding%20exercises%2C%20modern%20fitness%20center%20with%20purple%20lighting%2C%20motivational%20atmosphere&width=400&height=300&seq=musculacao-modal&orientation=landscape"
                  alt="Musculação - Treino de força e hipertrofia"
                  title="Musculação na Maioral Tucuju Academia"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-body-scan-line text-white text-2xl" aria-hidden="true"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Musculação</h4>
                <p className="text-gray-600 mb-4">
                  Equipamentos de última geração para treino de força e Hipertrofia. 
                  Desenvolva massa muscular com orientação profissional e treinos personalizados.
                </p>
                <div className="text-sm text-purple-600 font-semibold">
                  Disponível em todas as unidades
                </div>
              </div>
            </div>

            {/* Maioral Dance */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Energetic%20dance%20fitness%20class%20with%20people%20dancing%2C%20zumba%20style%20workout%2C%20group%20exercise%20studio%20with%20mirrors%2C%20fun%20and%20dynamic%20atmosphere%2C%20purple%20accent%20lighting%2C%20professional%20dance%20instructor&width=400&height=300&seq=dance-modal&orientation=landscape"
                  alt="Maioral Dance - Aulas de dança fitness"
                  title="Maioral Dance - Aulas de dança"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-music-2-line text-white text-2xl" aria-hidden="true"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Maioral Dance</h4>
                <p className="text-gray-600 mb-4">
                  Queime calorias dançando! Aulas dinâmicas e divertidas com ritmos variados. 
                  Melhore condicionamento físico, coordenação motora e se divirta ao mesmo tempo.
                </p>
                <div className="text-sm text-purple-600 font-semibold">
                  Disponível em todas as unidades
                </div>
              </div>
            </div>

            {/* Maioral Cross */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=CrossFit%20functional%20training%20zone%20with%20battle%20ropes%2C%20kettlebells%2C%20box%20jumps%2C%20intense%20workout%20atmosphere%2C%20athletes%20doing%20high-intensity%20exercises%2C%20industrial%20gym%20design%20with%20purple%20accents&width=400&height=300&seq=cross-modal&orientation=landscape"
                  alt="Maioral Cross - Treino funcional de alta intensidade"
                  title="Maioral Cross - CrossFit e treino funcional"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-fire-line text-white text-2xl" aria-hidden="true"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Maioral Cross</h4>
                <p className="text-gray-600 mb-4">
                  Treino funcional de alta intensidade. Desenvolva força, resistência e agilidade 
                  com exercícios variados. Supere seus limites em cada treino!
                </p>
                <div className="text-sm text-purple-600 font-semibold">
                  Disponível em todas as unidades
                </div>
              </div>
            </div>

            {/* Maioral Cardio */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20cardio%20training%20zone%20with%20treadmills%2C%20exercise%20bikes%2C%20ellipticals%2C%20people%20doing%20cardio%20workout%2C%20bright%20fitness%20center%20with%20large%20windows%2C%20energetic%20atmosphere%20with%20purple%20lighting&width=400&height=300&seq=cardio-modal&orientation=landscape"
                  alt="Maioral Cardio - Treino cardiovascular"
                  title="Maioral Cardio - Zona de cardio"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-heart-pulse-line text-white text-2xl" aria-hidden="true"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Maioral Cardio</h4>
                <p className="text-gray-600 mb-4">
                  Zona exclusiva de cardio com esteiras, bicicletas e elípticos modernos. 
                  Melhore seu condicionamento cardiovascular e queime gordura de forma eficiente.
                </p>
                <div className="text-sm text-purple-600 font-semibold">
                  Disponível em todas as unidades
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="app-download" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Baixe Nosso App de Treino
                </h3>
                <p className="text-lg mb-6 text-purple-100">
                  Tenha acesso a treinos personalizados, acompanhamento de evolução, 
                  agendamento de aulas e muito mais, tudo na palma da sua mão!
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="ri-check-line mr-3 text-yellow-400 text-xl" aria-hidden="true"></i>
                    <span>Treinos personalizados pelo seu personal</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line mr-3 text-yellow-400 text-xl" aria-hidden="true"></i>
                    <span>Acompanhamento de evolução e resultados</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line mr-3 text-yellow-400 text-xl" aria-hidden="true"></i>
                    <span>Agendamento de aulas em grupo</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line mr-3 text-yellow-400 text-xl" aria-hidden="true"></i>
                    <span>Vídeos demonstrativos dos exercícios</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line mr-3 text-yellow-400 text-xl" aria-hidden="true"></i>
                    <span>Historórico completo de treinos</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line mr-3 text-yellow-400 text-xl" aria-hidden="true"></i>
                    <span>Notificações de treino e lembretes</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://play.google.com/store" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Baixar na Google Play Store"
                  >
                    <i className="ri-google-play-fill text-2xl mr-3" aria-hidden="true"></i>
                    <div className="text-left">
                      <div className="text-xs">Disponível no</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </a>
                  <a 
                    href="https://www.apple.com/app-store/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Baixar na App Store"
                  >
                    <i className="ri-apple-fill text-2xl mr-3" aria-hidden="true"></i>
                    <div className="text-left">
                      <div className="text-xs">Baixar na</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hidden md:flex justify-center items-center">
                <div className="w-64 lg:w-80">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Modern%20fitness%20mobile%20app%20interface%20showing%20workout%20tracking%2C%20exercise%20videos%2C%20progress%20charts%2C%20clean%20UI%20design%20with%20purple%20theme%2C%20smartphone%20mockup%20displaying%20gym%20training%20application&width=400&height=600&seq=app-mockup-home&orientation=portrait"
                    alt="Interface do aplicativo de treino Maioral Tucuju"
                    title="App de treino personalizado Maioral Tucuju"
                    className="rounded-2xl shadow-2xl object-contain w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Por que escolher a Maioral Tucuju em Macapá?</h3>
              <p className="text-lg text-gray-600 mb-8">
                Somos mais que uma academia - somos seu parceiro na jornada de transformação em Macapá. 
                Com equipamentos modernos, profissionais qualificados e ambiente motivador, 
                garantimos que você alcance seus objetivos fitness no coração do Amapá.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-award-line text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Profissionais Qualificados</h4>
                    <p className="text-gray-600">Equipe de educadores físicos e nutricionistas prontos para te ajudar</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-tools-line text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Equipamentos Modernos</h4>
                    <p className="text-gray-600">Aparelhos de última geração para treinos mais eficientes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-time-line text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Horários Flexíveis</h4>
                    <p className="text-gray-600">Funcionamos de segunda a sábado para se adaptar à sua rotina</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20fitness%20trainers%20helping%20clients%20in%20modern%20gym%2C%20personal%20training%20session%2C%20motivational%20coaching%2C%20diverse%20group%20of%20people%20exercising%20with%20guidance%2C%20bright%20and%20welcoming%20gym%20environment%20with%20purple%20accent%20lighting&width=600&height=800&seq=trainers-helping&orientation=portrait"
                alt="Profissionais da Maioral Tucuju Academia"
                title="Profissionais qualificados da academia Maioral Tucuju"
                className="rounded-2xl shadow-xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://static.readdy.ai/image/2050551fbb19c229cf27f3c804633125/13af43590acd2c927cbc2f8095d26490.png" 
                  alt="Maioral Tucuju Academia"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400">
                Transformando vidas através do fitness e bem-estar.
              </p>
            </div>
            
            <div>
              <h6 className="text-lg font-semibold mb-4">Canais de Atendimento</h6>
              <ul className="space-y-3">
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
              <h6 className="text-lg font-semibold mb-4">Links Rápidos</h6>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Início</a></li>
                <li>
                  <button 
                    onClick={() => scrollToSection('planos')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0"
                  >
                    Planos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('modalidades')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0"
                  >
                    Modalidades
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/unidades')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0"
                  >
                    Unidades
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('sobre')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0"
                  >
                    Sobre
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-lg font-semibold mb-4">Baixe o App</h6>
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
              <h6 className="text-lg font-semibold mb-3">Redes Sociais</h6>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer" aria-label="Instagram">
                  <i className="ri-instagram-line" aria-hidden="true"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer" aria-label="Facebook">
                  <i className="ri-facebook-fill" aria-hidden="true"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer" aria-label="WhatsApp">
                  <i className="ri-whatsapp-line" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Maioral Tucuju Academia. Todos os direitos reservados. | 
              <a href="mailto:privacidade@maioraltucujuacademia.com.br" className="text-purple-400 hover:text-purple-300 ml-1 cursor-pointer">
                Política de Privacidade
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold text-gray-900">Entre em Contato</h4>
                <button 
                  onClick={() => setShowContactForm(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} data-readdy-form id="contato-academia">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm resize-none"
                      placeholder="Conte-nos sobre seus objetivos ou dúvidas..."
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.mensagem.length}/500 caracteres
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Promotional Modal */}
      {showPromoModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-yellow-400 p-6 text-white text-center relative">
                <button 
                  onClick={() => setShowPromoModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  aria-label="Fechar"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
                <div className="text-5xl mb-3">🎁</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  PLANO PROMOÇÃO<br />PRESENTE DA MAIORAL 2025
                </h3>
                <p className="text-lg font-semibold">RECORRENTE</p>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Price */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                    <i className="ri-star-fill mr-2"></i>
                    OFERTA ESPECIAL 2025
                  </div>
                  <div className="mb-4">
                    <div className="text-gray-400 line-through text-2xl mb-2">R$ 129,90</div>
                    <div className="text-6xl font-bold text-purple-600 mb-2">R$ 89,90</div>
                    <div className="text-lg text-gray-600">/mês</div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full text-base font-bold inline-block">
                    + MATRÍCULA GRÁTIS 🎉
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">O que está incluído:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-3 text-2xl flex-shrink-0"></i>
                      <span className="text-gray-700">Acesso completo à academia</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-3 text-2xl flex-shrink-0"></i>
                      <span className="text-gray-700">Todos os equipamentos disponíveis</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-3 text-2xl flex-shrink-0"></i>
                      <span className="text-gray-700">Aulas coletivas e todas as modalidades</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-3 text-2xl flex-shrink-0"></i>
                      <span className="text-gray-700">Avaliação física gratuita</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-3 text-2xl flex-shrink-0"></i>
                      <span className="text-gray-700">Não tem restrições de horários para treinar</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-gift-line text-purple-600 mr-3 text-2xl flex-shrink-0"></i>
                      <span className="text-gray-700 font-bold"> 2 dois primeiros meses por R$ 89,90</span>
                    </li>
                  </ul>
                </div>

                {/* Payment Info */}
                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-center text-blue-800">
                    <i className="ri-credit-card-line mr-2 text-xl"></i>
                    <span className="font-semibold">Somente pagamento no cartão de crédito</span>
                  </div>
                  <p className="text-sm text-blue-700 text-center mt-2">
                    Economize R$ 80,00 nos dois meses!
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={openPromoMatricula}
                    className="w-full bg-gradient-to-r from-purple-600 to-yellow-400 text-white py-4 rounded-full text-lg font-bold hover:from-purple-700 hover:to-yellow-500 transition-all shadow-lg cursor-pointer flex items-center justify-center"
                  >
                    <i className="ri-gift-line mr-2 text-2xl"></i>
                    Garantir Meu Presente 2025
                  </button>
                  <a
                    href="https://wa.me/5596992027788?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20Plano%20Promoção%20Presente%20da%20Maioral%202025!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 text-white py-4 rounded-full text-lg font-bold hover:bg-green-600 transition-colors cursor-pointer flex items-center justify-center"
                  >
                    <i className="ri-whatsapp-line mr-2 text-2xl"></i>
                    Tirar Dúvidas no WhatsApp
                  </a>
                </div>

                {/* Terms */}
                <p className="text-xs text-gray-500 text-center mt-6">
                  * Promoção válida para novos alunos. Consulte condições e disponibilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}