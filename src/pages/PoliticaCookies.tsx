import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Política de Cookies"
        description="Conheça nossa Política de Cookies. Saiba como utilizamos cookies para melhorar sua experiência no site."
        keywords="política de cookies, cookies, navegação, experiência do usuário"
        canonicalPath="/politica-cookies"
      />
      <Header />

      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 font-heading text-primary">
            Política de Cookies
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p className="text-muted-foreground">
              Última atualização: 21 de dezembro de 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">1. O que são Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, 
                tablet ou celular) quando você visita um site. Eles são amplamente utilizados para fazer 
                os sites funcionarem de forma mais eficiente e fornecer informações aos proprietários do site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">2. Como Usamos os Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies para:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Garantir o funcionamento adequado do site</li>
                <li>Lembrar suas preferências e configurações</li>
                <li>Analisar como você usa nosso site para melhorá-lo</li>
                <li>Personalizar conteúdo e anúncios</li>
                <li>Fornecer funcionalidades de redes sociais</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">3. Tipos de Cookies que Utilizamos</h2>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Cookies Essenciais</h3>
                <p className="text-sm text-muted-foreground">
                  Necessários para o funcionamento básico do site. Sem eles, o site não funcionaria corretamente.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Cookies de Desempenho</h3>
                <p className="text-sm text-muted-foreground">
                  Coletam informações sobre como você usa o site, como quais páginas visita. 
                  Usamos essas informações para melhorar o site.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Cookies de Funcionalidade</h3>
                <p className="text-sm text-muted-foreground">
                  Permitem que o site lembre suas escolhas e forneça recursos personalizados.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Cookies de Marketing</h3>
                <p className="text-sm text-muted-foreground">
                  Usados para exibir anúncios relevantes para você com base em seus interesses.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">4. Cookies de Terceiros</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nosso site pode conter cookies de terceiros, incluindo:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Google Analytics:</strong> para análise de tráfego e comportamento do usuário</li>
                <li><strong>Google Ads:</strong> para publicidade personalizada</li>
                <li><strong>Facebook Pixel:</strong> para análise e remarketing</li>
                <li><strong>WhatsApp:</strong> para funcionalidade de chat</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">5. Como Gerenciar Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Você pode controlar e/ou excluir cookies conforme desejar. A maioria dos navegadores 
                permite que você:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Veja quais cookies estão armazenados e os exclua individualmente</li>
                <li>Bloqueie cookies de terceiros</li>
                <li>Bloqueie todos os cookies</li>
                <li>Exclua todos os cookies quando fechar o navegador</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Observe que, se você excluir ou bloquear cookies, algumas funcionalidades do site 
                podem não funcionar corretamente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">6. Configurações do Navegador</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para gerenciar cookies no seu navegador, acesse as configurações:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Chrome:</strong> Configurações {">"} Privacidade e segurança {">"} Cookies</li>
                <li><strong>Firefox:</strong> Opções {">"} Privacidade e Segurança {">"} Cookies</li>
                <li><strong>Safari:</strong> Preferências {">"} Privacidade {">"} Cookies</li>
                <li><strong>Edge:</strong> Configurações {">"} Cookies e permissões do site</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">7. Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Cookies periodicamente. Recomendamos que você 
                revise esta página regularmente para se manter informado sobre como usamos cookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">8. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco 
                através do WhatsApp ou e-mail disponíveis em nosso site.
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

export default PoliticaCookies;
