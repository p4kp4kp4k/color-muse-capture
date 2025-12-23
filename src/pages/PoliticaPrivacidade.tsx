import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Política de Privacidade"
        description="Conheça nossa Política de Privacidade. Saiba como coletamos, usamos e protegemos suas informações pessoais de acordo com a LGPD."
        keywords="política de privacidade, LGPD, proteção de dados, privacidade EAD Cursos"
        canonicalPath="/politica-privacidade"
      />
      <Header />

      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 font-heading text-primary">
            Política de Privacidade
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p className="text-muted-foreground">
              Última atualização: 21 de dezembro de 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                A EAD Cursos Nacional está comprometida em proteger a privacidade dos usuários do nosso site. 
                Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações 
                pessoais quando você visita nosso site ou utiliza nossos serviços.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">2. Informações que Coletamos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos coletar os seguintes tipos de informações:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Informações de Identificação Pessoal:</strong> nome, endereço de e-mail, número de telefone, CPF e endereço quando você nos contata ou solicita nossos serviços.</li>
                <li><strong>Informações de Navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e outras informações de uso.</li>
                <li><strong>Cookies e Tecnologias Similares:</strong> utilizamos cookies para melhorar sua experiência de navegação.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">3. Como Usamos Suas Informações</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Processar suas solicitações e transações</li>
                <li>Comunicar-nos com você sobre nossos serviços</li>
                <li>Personalizar sua experiência no site</li>
                <li>Cumprir obrigações legais</li>
                <li>Proteger nossos direitos e prevenir fraudes</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">4. Compartilhamento de Informações</h2>
              <p className="text-muted-foreground leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Quando necessário para fornecer nossos serviços</li>
                <li>Para cumprir obrigações legais</li>
                <li>Para proteger nossos direitos e segurança</li>
                <li>Com seu consentimento expresso</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">5. Segurança dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações 
                pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos 
                criptografia SSL para proteger dados transmitidos através do nosso site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">6. Seus Direitos (LGPD)</h2>
              <p className="text-muted-foreground leading-relaxed">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a anonimização ou eliminação de dados</li>
                <li>Solicitar a portabilidade dos dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">7. Retenção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos 
                descritos nesta política, a menos que um período de retenção mais longo seja exigido por lei.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">8. Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre 
                quaisquer alterações publicando a nova política nesta página e atualizando a data de 
                "última atualização".
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">9. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, 
                entre em contato conosco através do WhatsApp ou e-mail disponíveis em nosso site.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PoliticaPrivacidade;
