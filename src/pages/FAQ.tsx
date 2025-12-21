import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_DATA = [
  {
    question: "Os documentos são reconhecidos pelo MEC?",
    answer: "Sim. Nossa equipe trabalha apenas com documentação reconhecida pelo MEC, de forma que os diplomas são emitidos dentro das próprias instituições de ensino credenciadas."
  },
  {
    question: "A EAD Cursos Nacional consegue documentação de qualquer instituição?",
    answer: "Sim. Continuamente estamos aumentando nossos esforços para oferecer mais opções de instituições reconhecidas pelo MEC, garantindo sempre a documentação completa e reconhecida."
  },
  {
    question: "Posso usar o documento em concursos públicos, RH ou universidades?",
    answer: "Sim. O documento pode ser utilizado em qualquer finalidade legal necessária, seja para fins profissionais, acadêmicos ou pessoais."
  },
  {
    question: "Como é feito o envio da documentação?",
    answer: "A documentação é enviada de forma segura pelos Correios ou transportadora para todo o Brasil. Entre em contato conosco via WhatsApp para mais informações sobre prazos e opções de envio."
  },
  {
    question: "O site é seguro?",
    answer: "Sim! Trabalhamos com total sigilo e segurança. Utilizamos criptografia SSL e seguimos todas as normas de proteção de dados (LGPD). Todos os documentos são emitidos seguindo os padrões exigidos pelo MEC."
  },
  {
    question: "Preciso pagar adiantado?",
    answer: "Não. Aqui você não paga nada adiantado. Garantimos a emissão e entrega segura do seu diploma ou certificado — 100% autêntico, reconhecido pelo MEC e publicado no Diário Oficial."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos diversas formas de pagamento, incluindo PIX, transferência bancária e cartão de crédito. Entre em contato para conhecer todas as opções disponíveis."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "O prazo varia de acordo com o tipo de documentação solicitada. Entre em contato conosco para obter informações específicas sobre prazos para o seu caso."
  },
  {
    question: "Posso acompanhar o andamento do meu pedido?",
    answer: "Sim. Após a confirmação do seu pedido, você receberá atualizações sobre o andamento através do WhatsApp. Nossa equipe está disponível para esclarecer qualquer dúvida."
  },
  {
    question: "O diploma inclui histórico escolar?",
    answer: "Sim. A documentação completa inclui diploma, histórico escolar com toda a grade curricular, carga horária, estágios e trabalho de conclusão de curso (quando aplicável)."
  },
  {
    question: "Como entro em contato com a equipe?",
    answer: "Você pode entrar em contato conosco através do WhatsApp, disponível 24 horas. Clique no botão de WhatsApp em qualquer página do site para iniciar uma conversa."
  },
  {
    question: "Vocês atendem em todo o Brasil?",
    answer: "Sim! Atendemos em todos os estados brasileiros. A documentação é enviada para qualquer cidade do país."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-hero text-primary-foreground py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Perguntas Frequentes
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ_DATA.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-card border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4 font-heading">
              Ainda tem dúvidas?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Nossa equipe está disponível 24 horas para ajudar você. Entre em contato pelo WhatsApp.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-medium"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com a Equipe
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQ;
