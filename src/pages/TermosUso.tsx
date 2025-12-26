import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import { useSiteConfigContext } from "@/contexts/SiteConfigContext";

const TermosUso = () => {
  const { siteName } = useSiteConfigContext();
  const brandName = (siteName || "EAD Cursos Nacional").trim();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Termos de Uso"
        description="Leia nossos Termos de Uso. Conheça as regras e condições para utilização do site e serviços da EAD Cursos Nacional."
        keywords={`termos de uso, condições de uso, regras do site, termos ${brandName}`}
        canonicalPath="/termos-uso"
      />
      <Header />

      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 font-heading text-primary">
            Termos de Uso
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p className="text-muted-foreground">
              Última atualização: 21 de dezembro de 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar o site da {brandName}, você concorda em cumprir e estar 
                vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, 
                não deve utilizar nosso site ou serviços.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">2. Descrição dos Serviços</h2>
              <p className="text-muted-foreground leading-relaxed">
                A {brandName} oferece informações sobre cursos de educação à distância e 
                documentação acadêmica reconhecida pelo MEC. Nossos serviços incluem orientação sobre 
                cursos superiores, técnicos e de pós-graduação.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">3. Uso Permitido</h2>
              <p className="text-muted-foreground leading-relaxed">
                Você concorda em utilizar nosso site apenas para fins legais e de acordo com estes Termos. 
                Você não deve:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Usar o site de forma que viole leis ou regulamentos aplicáveis</li>
                <li>Transmitir material ilegal, difamatório ou ofensivo</li>
                <li>Tentar obter acesso não autorizado a sistemas ou redes</li>
                <li>Interferir no funcionamento normal do site</li>
                <li>Coletar informações de outros usuários sem consentimento</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">4. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo do site, incluindo textos, gráficos, logotipos, imagens e software, 
                é propriedade da {brandName} ou de seus licenciadores e é protegido por leis 
                de direitos autorais e propriedade intelectual.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">5. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                A {brandName} não se responsabiliza por:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Danos diretos, indiretos ou consequenciais decorrentes do uso do site</li>
                <li>Interrupções ou erros no funcionamento do site</li>
                <li>Conteúdo de sites de terceiros vinculados ao nosso site</li>
                <li>Perdas de dados ou informações</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">6. Modificações dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
                As alterações entrarão em vigor imediatamente após a publicação no site. 
                O uso continuado do site após as alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">7. Rescisão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos suspender ou encerrar seu acesso ao site a qualquer momento, sem aviso prévio, 
                por violação destes Termos de Uso ou por qualquer outro motivo que julgarmos apropriado.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">8. Lei Aplicável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
                Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva 
                dos tribunais brasileiros.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">9. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para questões sobre estes Termos de Uso, entre em contato conosco através dos 
                canais disponíveis em nosso site.
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

export default TermosUso;
