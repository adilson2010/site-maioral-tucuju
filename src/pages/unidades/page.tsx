import { useState } from 'react';
import CookieConsent from '../../components/feature/CookieConsent';

type UnitStatus = 'aberta' | 'em-breve' | 'pre-venda';

interface Unit {
  id: string;
  nome: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  telefone: string;
  whatsapp: string;
  email: string;
  status: UnitStatus;
  preVendaLink?: string;
  horarios: {
    semana: string;
    sabado: string;
    domingo: string;
  };
  coordenadas: {
    lat: number;
    lng: number;
  };
  imagens: string[];
  diferenciais: string[];
  modalidades: string[];
}

export default function UnidadesPage() {
  const [selectedUnit, setSelectedUnit] = useState('tucuju');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<UnitStatus | 'todas'>('todas');

  const unidades: Record<string, Unit> = {
    tucuju: {
      id: 'tucuju',
      nome: 'Unidade Zona norte',
      endereco: 'Rua Tancredo Neves, 224',
      bairro: 'São Lázaro',
      cidade: 'Macapá',
      estado: 'AP',
      cep: '68908-530',
      telefone: '(96) 99202-7788',
      whatsapp: '55969922027788',
      email: 'adm@maioraltucuju.com.br',
      status: 'aberta',
      horarios: {
        semana: 'Segunda a Quinta: 5h às 23h, Quinta Feira: 5h às 22h',
        sabado: 'Sábado: 9h às 18h',
        domingo: 'Domingo e feriados: 9h às 14h'
      },
      coordenadas: {
        lat: 0.0389,
        lng: -51.0664
      },
      imagens: [
        '/src/assets/IMG_1297.jpeg',
        '/src/assets/IMG_1294.jpeg',
        '/src/assets/IMG_1275.jpeg',
        '/src/assets/IMG_1266.jpeg',
        '/src/assets/IMG_1260.jpeg',
        '/src/assets/IMG_1255.jpeg'
      ],
      diferenciais: [
        'Estacionamento gratuito',
        'Wi-Fi liberado',
        'Área de alongamento',
        'Bebedouros com água gelada',
        'Armários rotativos'
      ],
      modalidades: [
        'Musculação',
        'Maioral Cardio',
        'Aulas em grupo',
      ]
    },
    centro: {
      id: 'centro',
      nome: 'Breve',
      endereco: 'Breve',
      bairro: 'Breve',
      cidade: 'Macapá',
      estado: 'AP',
      cep: 'breve',
      telefone: 'breve',
      whatsapp: 'breve',
      email: 'breve',
      status: 'em-breve',
      preVendaLink: '#',
      horarios: {
        semana: 'Segunda a Quinta: 5h às 23h, Quinta Feira: 5h às 22h',
        sabado: 'Sábado: 9h às 18h',
        domingo: 'Domingo e feriado: 9h às 14h'
      },
      coordenadas: {
        lat: 0.0347,
        lng: -51.0660
      },
      imagens: [
        '/src/assets/IMG_1297.jpeg',
        '/src/assets/IMG_1294.jpeg',
        '/src/assets/IMG_1275.jpeg',
        '/src/assets/IMG_1266.jpeg',
        '/src/assets/IMG_1260.jpeg',
        '/src/assets/IMG_1255.jpeg'
      ],
      diferenciais: [
        'Aberto aos domingos e feriados',
        'Aulas de alongamento',
        'Ritbox, funcional e Gap',
    
      ],
      modalidades: [
        'Musculação',
        'Maioral Cardio',
        'Maioral Dance',
        'Maioral Cross',
      ]
    },
    araxa: {
      id: 'araxa',
      nome: 'Breve',
      endereco: 'Breve',
      bairro: 'Breve',
      cidade: 'Macapá',
      estado: 'AP',
      cep: 'breve',
      telefone: 'breve',
      whatsapp: 'breve',
      email: 'breve',
      status: 'em-breve',
      horarios: {
        semana: 'Segunda a Quinta: 5h às 23h, Quinta Feira: 5h às 22h',
        sabado: 'Sábado: 9h às 18h',
        domingo: 'Domingo e Feriados: 9h às 14h'
      },
      coordenadas: {
        lat: 0.0425,
        lng: -51.0580
      },
      imagens: [
        '/src/assets/IMG_1297.jpeg',
        '/src/assets/IMG_1294.jpeg',
        '/src/assets/IMG_1275.jpeg',
        '/src/assets/IMG_1266.jpeg',
        '/src/assets/IMG_1260.jpeg',
        '/src/assets/IMG_1255.jpeg'
      ],
      diferenciais: [
        'Aberto aos domingos e feriados',
        'Aulas de alongamento',
        'Ritbox, funcional e Gap'
      ],
      modalidades: [
        'Musculação',
        'Maioral Cardio',
        'Maioral Dance',
        'Maioral Cross'
      ]
    },
    buritizal: {
      id: 'buritizal',
      nome: 'Breve',
      endereco: 'Breve',
      bairro: 'Breve',
      cidade: 'Macapá',
      estado: 'AP',
      cep: 'breve',
      telefone: 'breve',
      whatsapp: 'breve',
      email: 'breve',
      status: 'em-breve',
      horarios: {
        semana: 'Segunda a Quinta: 5h às 23h, Quinta Feira: 5h às 22h',
        sabado: 'Sábado: 9h às 18h',
        domingo: 'Domingo e Feriados: 9h às 14h'
      },
      coordenadas: {
        lat: 0.0280,
        lng: -51.0450
      },
      imagens: [
        '/src/assets/IMG_1297.jpeg',
        '/src/assets/IMG_1294.jpeg',
        '/src/assets/IMG_1275.jpeg',
        '/src/assets/IMG_1266.jpeg',
        '/src/assets/IMG_1260.jpeg',
        '/src/assets/IMG_1255.jpeg'
      ],
      diferenciais: [
        'Aberto aos domingos e feriados',
        'Aulas de alongamento',
        'Ritbox, funcional e Gap'
      ],
      modalidades: [
        'Musculação',
        'Maioral Cardio',
        'Maioral Cross',
        'Maioral Dance'
      ]
    }
  };

  // Filtrar unidades baseado na busca e status
  const filteredUnits = Object.values(unidades).filter(unit => {
    const searchLower = searchQuery.toLowerCase().trim();
    const matchesSearch = searchQuery === '' || 
      unit.nome.toLowerCase().includes(searchLower) ||
      unit.bairro.toLowerCase().includes(searchLower) ||
      unit.endereco.toLowerCase().includes(searchLower) ||
      unit.cidade.toLowerCase().includes(searchLower) ||
      unit.cep.replace(/\D/g, '').includes(searchQuery.replace(/\D/g, ''));
    
    const matchesStatus = statusFilter === 'todas' || unit.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const unit = unidades[selectedUnit as keyof typeof unidades];

  const getStatusBadge = (status: UnitStatus) => {
    switch (status) {
      case 'aberta':
        return (
          <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
            <i className="ri-check-line mr-1"></i>
            Unidade Aberta
          </span>
        );
      case 'em-breve':
        return (
          <span className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
            <i className="ri-time-line mr-1"></i>
            Em Breve
          </span>
        );
      case 'pre-venda':
        return (
          <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
            <i className="ri-star-line mr-1"></i>
            Pré-venda
          </span>
        );
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % unit.imagens.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + unit.imagens.length) % unit.imagens.length);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${unit.whatsapp}?text=Olá! Gostaria de saber mais sobre a ${unit.nome}`, '_blank');
  };

  const openGeneralWhatsApp = (department: string) => {
    const messages: Record<string, string> = {
      sac: 'Olá! Preciso de atendimento do SAC.',
      vendas: 'Olá! Gostaria de informações sobre planos e matrículas.',
      ouvidoria: 'Olá! Gostaria de falar com a Ouvidoria.'
    };
    window.open(`https://wa.me/5596992027788?text=${encodeURIComponent(messages[department])}`, '_blank');
  };

  const openPreVenda = () => {
    if (unit.preVendaLink) {
      window.open(unit.preVendaLink, '_blank');
    }
  };

  const openAlunoArea = () => {
    window.open('https://evo-totem.w12app.com.br/maioraltucuju/1/page/landing-page/login', '_blank');
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
              <a href="/unidades" className="text-purple-600 font-semibold cursor-pointer" aria-current="page">Unidades</a>
              <a href="/quem-somos" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Quem Somos</a>
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
                  className="text-left text-purple-600 font-semibold cursor-pointer py-3 px-4 rounded-lg bg-purple-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Unidades
                </a>
                <a 
                  href="/quem-somos" 
                  className="text-left text-gray-700 hover:text-purple-600 transition-colors cursor-pointer py-3 px-4 rounded-lg hover:bg-purple-50"
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossas Unidades</h2>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            Conheça nossa estrutura completa e escolha a unidade mais próxima de você
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
              <input
                type="text"
                placeholder="Digite aqui CEP, cidade, bairro..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-base md:text-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  aria-label="Limpar busca"
                >
                  <i className="ri-close-circle-fill text-xl"></i>
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-sm text-gray-600 mt-2 ml-2">
                {filteredUnits.length} {filteredUnits.length === 1 ? 'unidade encontrada' : 'unidades encontradas'}
              </p>
            )}
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setStatusFilter('todas')}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all cursor-pointer text-sm md:text-base ${
                statusFilter === 'todas'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className="ri-list-check mr-2"></i>
              Todas as Unidades
            </button>
            <button
              onClick={() => setStatusFilter('aberta')}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all cursor-pointer text-sm md:text-base ${
                statusFilter === 'aberta'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className="ri-check-line mr-2"></i>
              Unidade Aberta
            </button>
            <button
              onClick={() => setStatusFilter('em-breve')}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all cursor-pointer text-sm md:text-base ${
                statusFilter === 'em-breve'
                  ? 'bg-yellow-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className="ri-time-line mr-2"></i>
              Em Breve
            </button>
            <button
              onClick={() => setStatusFilter('pre-venda')}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all cursor-pointer text-sm md:text-base ${
                statusFilter === 'pre-venda'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className="ri-star-line mr-2"></i>
              Pré-venda
            </button>
          </div>

          {/* Unit Selector */}
          {filteredUnits.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
              {filteredUnits.map((unitItem) => (
                <button
                  key={unitItem.id}
                  onClick={() => {
                    setSelectedUnit(unitItem.id);
                    setCurrentImageIndex(0);
                  }}
                  className={`p-4 md:p-6 rounded-xl transition-all cursor-pointer relative ${
                    selectedUnit === unitItem.id
                      ? 'bg-purple-600 text-white shadow-xl scale-105'
                      : 'bg-white text-gray-700 hover:shadow-lg'
                  }`}
                >
                  {unitItem.status === 'em-breve' && (
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                      EM BREVE
                    </div>
                  )}
                  {unitItem.status === 'pre-venda' && (
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                      PRÉ-VENDA
                    </div>
                  )}
                  <i className="ri-map-pin-fill text-2xl md:text-3xl mb-2" aria-hidden="true"></i>
                  <h3 className="font-bold text-base md:text-lg">{unitItem.nome.replace('Unidade ', '')}</h3>
                  <p className="text-xs md:text-sm mt-1 opacity-90">{unitItem.bairro}</p>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
              <p className="text-xl text-gray-500">Nenhuma unidade encontrada</p>
              <p className="text-gray-400 mt-2">Tente ajustar os filtros ou a busca</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setStatusFilter('todas');
                }}
                className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors cursor-pointer"
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Unit Info Card */}
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 md:mb-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
              {/* Left Column - Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{unit.nome}</h3>
                  {getStatusBadge(unit.status)}
                </div>
                
                {/* Address */}
                <div className="mb-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <i className="ri-map-pin-line text-purple-600 text-lg md:text-xl" aria-hidden="true"></i>
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Endereço</h4>
                      <address className="text-sm md:text-base text-gray-600 not-italic">
                        {unit.endereco}<br />
                        Bairro {unit.bairro} - {unit.cidade}, {unit.estado}<br />
                        CEP: {unit.cep}
                      </address>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="mb-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <i className="ri-phone-line text-purple-600 text-lg md:text-xl" aria-hidden="true"></i>
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Contato</h4>
                      <p className="text-sm md:text-base text-gray-600">
                        <a href={`tel:${unit.telefone}`} className="hover:text-purple-600 transition-colors">
                          {unit.telefone}
                        </a>
                      </p>
                      <p className="text-sm md:text-base text-gray-600">
                        <a href={`mailto:${unit.email}`} className="hover:text-purple-600 transition-colors">
                          {unit.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <i className="ri-time-line text-purple-600 text-lg md:text-xl" aria-hidden="true"></i>
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Horário de Funcionamento</h4>
                      <p className="text-sm md:text-base text-gray-600">{unit.horarios.semana}</p>
                      <p className="text-sm md:text-base text-gray-600">{unit.horarios.sabado}</p>
                      <p className="text-sm md:text-base text-gray-600">{unit.horarios.domingo}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                {unit.status === 'pre-venda' && unit.preVendaLink ? (
                  <div className="space-y-3">
                    <button
                      onClick={openPreVenda}
                      className="w-full bg-blue-600 text-white py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
                      aria-label="Garantir vaga na pré-venda"
                    >
                      <i className="ri-star-fill mr-2 text-xl md:text-2xl" aria-hidden="true"></i>
                      Garantir Vaga na Pré-venda
                    </button>
                    <button
                      onClick={openWhatsApp}
                      className="w-full bg-green-500 text-white py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
                      aria-label="Entrar em contato pelo WhatsApp"
                    >
                      <i className="ri-whatsapp-line mr-2 text-xl md:text-2xl" aria-hidden="true"></i>
                      Falar no WhatsApp
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={openWhatsApp}
                    className="w-full bg-green-500 text-white py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
                    aria-label="Entrar em contato pelo WhatsApp"
                  >
                    <i className="ri-whatsapp-line mr-2 text-xl md:text-2xl" aria-hidden="true"></i>
                    Falar no WhatsApp
                  </button>
                )}
              </div>

              {/* Right Column - Map */}
              <div>
                <div className="bg-gray-100 rounded-xl overflow-hidden h-64 md:h-[500px] mb-4">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d${unit.coordenadas.lng}!3d${unit.coordenadas.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDInMjAuMCJOIDUxwrAwMycwNS4wIlc!5e0!3m2!1spt!2sbr!4v1234567890`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de localização da ${unit.nome}`}
                  ></iframe>
                </div>
                <a 
                  href={`https://www.google.com/maps/dir//${unit.endereco},+${unit.bairro},+${unit.cidade}+-+${unit.estado}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm md:text-base text-purple-600 hover:text-purple-700 font-semibold cursor-pointer"
                >
                  <i className="ri-navigation-line mr-2" aria-hidden="true"></i>
                  Como Chegar - Ver Rotas no Google Maps
                </a>
              </div>
            </div>
          </article>

          {/* Virtual Tour Section */}
          <section className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8 md:mb-12" aria-labelledby="tour-heading">
            <h3 id="tour-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Tour Virtual 360º</h3>
            <p className="text-center text-sm md:text-base text-gray-600 mb-6 md:mb-8">Conheça nossa estrutura completa através das imagens</p>
            
            {/* Image Gallery */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-64 md:h-[500px] rounded-xl overflow-hidden bg-gray-900">
                <img 
                  src={unit.imagens[currentImageIndex]}
                  alt={`Vista ${currentImageIndex + 1} da ${unit.nome}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition-all shadow-lg"
                  aria-label="Imagem anterior"
                >
                  <i className="ri-arrow-left-s-line text-xl md:text-2xl text-gray-900" aria-hidden="true"></i>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition-all shadow-lg"
                  aria-label="Próxima imagem"
                >
                  <i className="ri-arrow-right-s-line text-xl md:text-2xl text-gray-900" aria-hidden="true"></i>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm">
                  {currentImageIndex + 1} / {unit.imagens.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-6 gap-1 md:gap-2 mt-3 md:mt-4">
                {unit.imagens.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-video rounded-lg overflow-hidden cursor-pointer transition-all ${
                      currentImageIndex === index 
                        ? 'ring-2 md:ring-4 ring-purple-600 scale-105' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`Ver imagem ${index + 1}`}
                  >
                    <img 
                      src={img}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Diferenciais */}
          <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 md:mb-12" aria-labelledby="diferenciais-heading">
            <h3 id="diferenciais-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Diferenciais da Unidade</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {unit.diferenciais.map((diferencial, index) => (
                <div key={index} className="flex items-center bg-purple-50 rounded-lg p-3 md:p-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <i className="ri-check-line text-white text-lg md:text-xl" aria-hidden="true"></i>
                  </div>
                  <span className="text-sm md:text-base text-gray-900 font-medium">{diferencial}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Modalidades Section */}
          <section className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8 md:mb-12" aria-labelledby="modalidades-heading">
            <h3 id="modalidades-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Modalidades Disponíveis</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {unit.modalidades.map((modalidade, index) => (
                <div key={index} className="flex items-center bg-white rounded-lg p-3 md:p-4 shadow-md">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <i className="ri-star-fill text-white text-sm md:text-base" aria-hidden="true"></i>
                  </div>
                  <span className="text-sm md:text-base text-gray-900 font-semibold">{modalidade}</span>
                </div>
              ))}
            </div>
          </section>

          {/* App Download Section */}
          <section className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-6 md:p-12 text-white" aria-labelledby="app-heading">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 id="app-heading" className="text-2xl md:text-4xl font-bold mb-4">
                  Baixe Nosso App de Treino
                </h3>
                <p className="text-base md:text-lg mb-6 text-purple-100">
                  Tenha acesso a treinos personalizados, acompanhamento de evolução, 
                  agendamento de aulas e muito mais, tudo na palma da sua mão!
                </p>
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  <li className="flex items-center text-sm md:text-base">
                    <i className="ri-check-line mr-2 md:mr-3 text-yellow-400 text-lg md:text-xl" aria-hidden="true"></i>
                    <span>Treinos personalizados pelo seu personal</span>
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <i className="ri-check-line mr-2 md:mr-3 text-yellow-400 text-lg md:text-xl" aria-hidden="true"></i>
                    <span>Acompanhamento de evolução e resultados</span>
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <i className="ri-check-line mr-2 md:mr-3 text-yellow-400 text-lg md:text-xl" aria-hidden="true"></i>
                    <span>Agendamento de aulas em grupo</span>
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <i className="ri-check-line mr-2 md:mr-3 text-yellow-400 text-lg md:text-xl" aria-hidden="true"></i>
                    <span>Vídeos demonstrativos dos exercícios</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a 
                    href="https://play.google.com/store" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-gray-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Baixar na Google Play Store"
                  >
                    <i className="ri-google-play-fill text-xl md:text-2xl mr-2 md:mr-3" aria-hidden="true"></i>
                    <div className="text-left">
                      <div className="text-xs">Disponível no</div>
                      <div className="text-base md:text-lg font-semibold">Google Play</div>
                    </div>
                  </a>
                  <a 
                    href="https://www.apple.com/app-store/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-gray-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Baixar na App Store"
                  >
                    <i className="ri-apple-fill text-xl md:text-2xl mr-2 md:mr-3" aria-hidden="true"></i>
                    <div className="text-left">
                      <div className="text-xs">Baixar na</div>
                      <div className="text-base md:text-lg font-semibold">App Store</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hidden md:flex justify-center items-center">
                <div className="w-56 lg:w-72">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Modern%20fitness%20mobile%20app%20interface%20showing%20workout%20tracking%2C%20exercise%20videos%2C%20progress%20charts%2C%20clean%20UI%20design%20with%20purple%20theme%2C%20smartphone%20mockup%20displaying%20gym%20training%20application&width=400&height=600&seq=app-mockup-1&orientation=portrait"
                    alt="Interface do aplicativo de treino Maioral Tucuju"
                    className="rounded-2xl shadow-2xl object-contain w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

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
                <li><a href="/#contato" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3">Baixe o App</h4>
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
                <a href={`https://wa.me/${unit.whatsapp}`} className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer" aria-label="WhatsApp">
                  <i className="ri-whatsapp-line" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
            <p className="text-xs md:text-sm text-gray-400">
              © 2024 Maioral Tucuju Academia. Todos os direitos reservados. | 
              <a href="#" className="text-purple-400 hover:text-purple-300 ml-1 cursor-pointer">
                Powered by Maioral Tucuju
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
