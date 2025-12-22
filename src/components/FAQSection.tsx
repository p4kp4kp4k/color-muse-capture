import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o processo de matrícula?",
    answer: "O processo é simples e 100% online. Você escolhe o curso desejado, preenche seus dados e em poucos minutos já está matriculado. Nossa equipe entrará em contato para orientar os próximos passos."
  },
  {
    question: "Os diplomas são reconhecidos pelo MEC?",
    answer: "Sim! Todos os nossos cursos são oferecidos por instituições credenciadas e reconhecidas pelo Ministério da Educação (MEC), garantindo a validade do seu diploma em todo o território nacional."
  },
  {
    question: "Qual a duração dos cursos?",
    answer: "A duração varia de acordo com o tipo de curso. Graduações têm duração média de 2 a 4 anos, enquanto pós-graduações e cursos técnicos podem variar de 6 meses a 2 anos."
  },
  {
    question: "Posso estudar no meu próprio ritmo?",
    answer: "Sim! A modalidade EAD permite que você estude quando e onde quiser, adaptando os estudos à sua rotina. Você tem acesso 24 horas ao ambiente virtual de aprendizagem."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos diversas formas de pagamento: cartão de crédito (parcelado em até 12x), boleto bancário, PIX e financiamento estudantil. Consulte as condições especiais disponíveis."
  },
  {
    question: "Como funciona o suporte ao aluno?",
    answer: "Oferecemos suporte completo via WhatsApp, e-mail e telefone. Nossa equipe está disponível para tirar dúvidas sobre matrículas, pagamentos e orientações acadêmicas."
  }
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
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
