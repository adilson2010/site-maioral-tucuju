import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 md:p-6 shadow-2xl z-50 border-t-4 border-purple-600">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-3">
                <i className="ri-shield-check-line text-3xl text-purple-400 flex-shrink-0 mt-1"></i>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    🍪 Política de Cookies e Privacidade (LGPD)
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência, 
                    personalizar conteúdo e analisar o tráfego do site. Seus dados são tratados 
                    conforme a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>. 
                    Ao continuar navegando, você concorda com nossa política.
                  </p>
                  <button
                    onClick={() => setShowPolicy(true)}
                    className="text-purple-400 hover:text-purple-300 underline text-sm mt-2 cursor-pointer bg-transparent border-0 p-0"
                  >
                    Ler Política Completa de Privacidade
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleReject}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-sm md:text-base"
              >
                Recusar
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-sm md:text-base flex items-center justify-center"
              >
                <i className="ri-check-line mr-2 text-xl"></i>
                Aceitar e Continuar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPolicy && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Política de Privacidade e Cookies
              </h2>
              <button
                onClick={() => setShowPolicy(false)}
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer bg-transparent border-0"
                aria-label="Fechar"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <div className="p-6 md:p-8 space-y-6 text-gray-700">
              {/* Introdução */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Introdução</h3>
                <p className="leading-relaxed">
                  A <strong>Maioral Tucuju Academia</strong> está comprometida com a proteção da sua privacidade 
                  e segurança dos seus dados pessoais. Esta política descreve como coletamos, usamos, 
                  armazenamos e protegemos suas informações, em conformidade com a 
                  <strong> Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.
                </p>
              </section>

              {/* Dados Coletados */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Dados Coletados</h3>
                <p className="mb-3">Coletamos os seguintes tipos de informações:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Dados de Identificação:</strong> Nome, CPF, RG, data de nascimento</li>
                  <li><strong>Dados de Contato:</strong> E-mail, telefone, endereço</li>
                  <li><strong>Dados de Navegação:</strong> Endereço IP, cookies, páginas visitadas</li>
                  <li><strong>Dados de Saúde:</strong> Avaliação física, histórico médico (quando aplicável)</li>
                  <li><strong>Dados Financeiros:</strong> Informações de pagamento e transações</li>
                </ul>
              </section>

              {/* Finalidade */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Finalidade do Uso dos Dados</h3>
                <p className="mb-3">Utilizamos seus dados para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Processar matrículas e gerenciar sua conta de aluno</li>
                  <li>Fornecer serviços personalizados de treino e acompanhamento</li>
                  <li>Processar pagamentos e emitir notas fiscais</li>
                  <li>Enviar comunicações sobre aulas, eventos e promoções</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </section>

              {/* Cookies */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Uso de Cookies</h3>
                <p className="mb-3">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento do site</li>
                  <li><strong>Cookies de Desempenho:</strong> Analisam como você usa o site</li>
                  <li><strong>Cookies de Funcionalidade:</strong> Lembram suas preferências</li>
                  <li><strong>Cookies de Marketing:</strong> Personalizam anúncios e conteúdo</li>
                </ul>
                <p className="mt-3">
                  Você pode gerenciar cookies através das configurações do seu navegador.
                </p>
              </section>

              {/* Compartilhamento */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. Compartilhamento de Dados</h3>
                <p className="mb-3">Seus dados podem ser compartilhados com:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Processadores de pagamento (para transações financeiras)</li>
                  <li>Prestadores de serviços de TI e hospedagem</li>
                  <li>Autoridades governamentais (quando exigido por lei)</li>
                  <li>Profissionais de saúde (com seu consentimento)</li>
                </ul>
                <p className="mt-3">
                  <strong>Nunca vendemos seus dados pessoais a terceiros.</strong>
                </p>
              </section>

              {/* Direitos do Titular */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">6. Seus Direitos (LGPD)</h3>
                <p className="mb-3">Você tem direito a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Confirmação:</strong> Saber se tratamos seus dados</li>
                  <li><strong>Acesso:</strong> Solicitar cópia dos seus dados</li>
                  <li><strong>Correção:</strong> Atualizar dados incompletos ou incorretos</li>
                  <li><strong>Anonimização:</strong> Solicitar anonimização dos dados</li>
                  <li><strong>Portabilidade:</strong> Transferir dados para outro fornecedor</li>
                  <li><strong>Eliminação:</strong> Solicitar exclusão dos dados</li>
                  <li><strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
                  <li><strong>Oposição:</strong> Opor-se ao tratamento dos dados</li>
                </ul>
              </section>

              {/* Segurança */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">7. Segurança dos Dados</h3>
                <p className="leading-relaxed">
                  Implementamos medidas técnicas e organizacionais para proteger seus dados contra 
                  acesso não autorizado, perda, destruição ou alteração. Isso inclui criptografia, 
                  controles de acesso, firewalls e monitoramento contínuo de segurança.
                </p>
              </section>

              {/* Retenção */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">8. Retenção de Dados</h3>
                <p className="leading-relaxed">
                  Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas 
                  nesta política ou conforme exigido por lei. Após esse período, os dados são 
                  excluídos ou anonimizados de forma segura.
                </p>
              </section>

              {/* Contato */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">9. Contato e DPO</h3>
                <p className="mb-3">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Maioral Tucuju Academia</p>
                  <p>E-mail: <a href="mailto:privacidade@maioraltucujuacademia.com.br" className="text-purple-600 hover:underline">privacidade@maioraltucujuacademia.com.br</a></p>
                  <p>WhatsApp: <a href="https://wa.me/5596992027788" className="text-purple-600 hover:underline">+55 96 99202-7788</a></p>
                  <p>Endereço: Rua Tancredo Neves, 224 - São Lázaro, Macapá - AP</p>
                </div>
              </section>

              {/* Alterações */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">10. Alterações na Política</h3>
                <p className="leading-relaxed">
                  Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças 
                  significativas através do site ou por e-mail. A versão mais recente estará sempre 
                  disponível em nosso site.
                </p>
                <p className="mt-3 text-sm text-gray-600">
                  <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
                </p>
              </section>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowPolicy(false);
                  handleReject();
                }}
                className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                Recusar
              </button>
              <button
                onClick={() => {
                  setShowPolicy(false);
                  handleAccept();
                }}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center"
              >
                <i className="ri-check-line mr-2 text-xl"></i>
                Aceitar e Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
