import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import WhatsAppContactDialog from "@/components/WhatsAppContactDialog";

const faqs = [
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
    question: "Preciso pagar adiantado?",
    answer: "Não. Aqui você não paga nada adiantado. Garantimos a emissão e entrega segura do seu diploma ou certificado — 100% autêntico, reconhecido pelo MEC e publicado no Diário Oficial."
  },
  {
    question: "O diploma inclui histórico escolar?",
    answer: "Sim. A documentação completa inclui diploma, histórico escolar com toda a grade curricular, carga horária, estágios e trabalho de conclusão de curso (quando aplicável)."
  }
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 cyber-grid opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm text-primary px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <HelpCircle className="w-4 h-4" />
            <span>Tire suas dúvidas</span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Encontre respostas para as dúvidas mais comuns sobre nossos cursos e processo de matrícula.
          </p>
        </div>

        {/* FAQ Accordion with enhanced styling */}
        <div 
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl px-6 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline group-hover:text-primary transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-sm font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-11">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA with enhanced styling */}
        <div 
          className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-r from-primary/10 via-card to-gold/10 rounded-2xl p-8 md:p-10 border border-border/50 backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-lg text-foreground font-medium mb-6">
              Ainda tem dúvidas? Fale diretamente com nossa equipe!
            </p>
            <Button 
              onClick={() => setDialogOpen(true)}
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-whatsapp/30 group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
      <WhatsAppContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default FAQSection;