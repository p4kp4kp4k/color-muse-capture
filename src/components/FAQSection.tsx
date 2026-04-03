import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ParticlesBackground from "@/components/ParticlesBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Os documentos são reconhecidos pelo MEC?",
    answer: "Sim. Nossa equipe trabalha apenas com instituições credenciadas pelo MEC, garantindo que toda a documentação acadêmica seja emitida conforme os padrões exigidos."
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
    answer: "Não. Aqui você não paga nada adiantado. Garantimos o acompanhamento seguro de toda sua formação — 100% reconhecida pelo MEC."
  },
  {
    question: "A formação inclui histórico escolar?",
    answer: "Sim. A documentação completa inclui certificação, histórico escolar com toda a grade curricular, carga horária, estágios e trabalho de conclusão de curso (quando aplicável)."
  }
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
      <ParticlesBackground variant="light" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Tire suas dúvidas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos cursos e processo de matrícula.
          </p>
        </div>

        {/* FAQ Accordion */}
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
                className={`bg-card border border-border rounded-xl px-6 overflow-hidden transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale conosco pelo WhatsApp!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
