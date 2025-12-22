import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StateCard from "@/components/StateCard";
import { FAQ_ITEMS, WHATSAPP_LINK } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, MessageCircle, HelpCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import WhatsAppContactDialog from "@/components/WhatsAppContactDialog";

const STATES_WITH_FLAGS = [
  { name: "Acre", abbr: "AC", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bandeira_do_Acre.svg/45px-Bandeira_do_Acre.svg.png" },
  { name: "Alagoas", abbr: "AL", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bandeira_de_Alagoas.svg/45px-Bandeira_de_Alagoas.svg.png" },
  { name: "Amapá", abbr: "AP", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bandeira_do_Amap%C3%A1.svg/45px-Bandeira_do_Amap%C3%A1.svg.png" },
  { name: "Amazonas", abbr: "AM", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bandeira_do_Amazonas.svg/45px-Bandeira_do_Amazonas.svg.png" },
  { name: "Bahia", abbr: "BA", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Bandeira_da_Bahia.svg/45px-Bandeira_da_Bahia.svg.png" },
  { name: "Ceará", abbr: "CE", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bandeira_do_Cear%C3%A1.svg/45px-Bandeira_do_Cear%C3%A1.svg.png" },
  { name: "Distrito Federal", abbr: "DF", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg/45px-Bandeira_do_Distrito_Federal_%28Brasil%29.svg.png" },
  { name: "Espírito Santo", abbr: "ES", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg/45px-Bandeira_do_Esp%C3%ADrito_Santo.svg.png" },
  { name: "Goiás", abbr: "GO", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_Goi%C3%A1s.svg/45px-Flag_of_Goi%C3%A1s.svg.png" },
  { name: "Maranhão", abbr: "MA", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandeira_do_Maranh%C3%A3o.svg/45px-Bandeira_do_Maranh%C3%A3o.svg.png" },
  { name: "Mato Grosso", abbr: "MT", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Bandeira_de_Mato_Grosso.svg/45px-Bandeira_de_Mato_Grosso.svg.png" },
  { name: "Mato Grosso do Sul", abbr: "MS", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg/45px-Bandeira_de_Mato_Grosso_do_Sul.svg.png" },
  { name: "Minas Gerais", abbr: "MG", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bandeira_de_Minas_Gerais.svg/45px-Bandeira_de_Minas_Gerais.svg.png" },
  { name: "Pará", abbr: "PA", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bandeira_do_Par%C3%A1.svg/45px-Bandeira_do_Par%C3%A1.svg.png" },
  { name: "Paraíba", abbr: "PB", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bandeira_da_Para%C3%ADba.svg/45px-Bandeira_da_Para%C3%ADba.svg.png" },
  { name: "Paraná", abbr: "PR", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bandeira_do_Paran%C3%A1.svg/45px-Bandeira_do_Paran%C3%A1.svg.png" },
  { name: "Pernambuco", abbr: "PE", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bandeira_de_Pernambuco.svg/45px-Bandeira_de_Pernambuco.svg.png" },
  { name: "Piauí", abbr: "PI", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bandeira_do_Piau%C3%AD.svg/45px-Bandeira_do_Piau%C3%AD.svg.png" },
  { name: "Rio de Janeiro", abbr: "RJ", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg/45px-Bandeira_do_estado_do_Rio_de_Janeiro.svg.png" },
  { name: "Rio Grande do Norte", abbr: "RN", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bandeira_do_Rio_Grande_do_Norte.svg/45px-Bandeira_do_Rio_Grande_do_Norte.svg.png" },
  { name: "Rio Grande do Sul", abbr: "RS", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bandeira_do_Rio_Grande_do_Sul.svg/45px-Bandeira_do_Rio_Grande_do_Sul.svg.png" },
  { name: "Rondônia", abbr: "RO", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bandeira_de_Rond%C3%B4nia.svg/45px-Bandeira_de_Rond%C3%B4nia.svg.png" },
  { name: "Roraima", abbr: "RR", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Bandeira_de_Roraima.svg/45px-Bandeira_de_Roraima.svg.png" },
  { name: "Santa Catarina", abbr: "SC", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bandeira_de_Santa_Catarina.svg/45px-Bandeira_de_Santa_Catarina.svg.png" },
  { name: "São Paulo", abbr: "SP", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg/45px-Bandeira_do_estado_de_S%C3%A3o_Paulo.svg.png" },
  { name: "Sergipe", abbr: "SE", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bandeira_de_Sergipe.svg/45px-Bandeira_de_Sergipe.svg.png" },
  { name: "Tocantins", abbr: "TO", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandeira_do_Tocantins.svg/45px-Bandeira_do_Tocantins.svg.png" },
];

const EscolhaEstado = () => {
  const { ref: statesRef, isVisible: statesVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation({ threshold: 0.1 });
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero with futuristic design */}
        <section className="bg-gradient-hero text-primary-foreground py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-80 h-80 bg-gold/15 rounded-full blur-3xl float-animation" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6 border border-white/20">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium">27 Estados</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading animate-fade-in">
              Escolha seu <span className="text-gold">Estado</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Atendemos em todos os 27 estados do Brasil. Selecione o seu estado
              e fale com nossa equipe especializada.
            </p>
          </div>
        </section>

        {/* States Grid with animations */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 relative">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div 
              ref={statesRef}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
            >
              {STATES_WITH_FLAGS.map((state, index) => (
                <div
                  key={state.abbr}
                  className={`transition-all duration-500 ${
                    statesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: statesVisible ? `${index * 30}ms` : '0ms' }}
                >
                  <StateCard
                    name={state.name}
                    abbr={state.abbr}
                    flagUrl={state.flagUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section with enhanced styling */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden" ref={faqRef}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center mb-12 transition-all duration-700 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6 border border-primary/20">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
                Dúvidas e <span className="text-primary">Perguntas Frequentes</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Tire suas dúvidas sobre nossos serviços
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {FAQ_ITEMS.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={`group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl px-6 hover:border-primary/30 transition-all duration-500 ${
                      faqVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: faqVisible ? `${200 + index * 100}ms` : '0ms' }}
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className={`text-center mt-12 transition-all duration-700 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
              <p className="text-muted-foreground mb-6 text-lg">
                Ainda tem dúvidas? Fale diretamente com nossa equipe!
              </p>
              <Button
                onClick={() => setDialogOpen(true)}
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-whatsapp/30"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chamar no WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <WhatsAppContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default EscolhaEstado;