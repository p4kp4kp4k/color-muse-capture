import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, COURSES, BENEFITS, TESTIMONIALS } from "@/lib/constants";
import { Link } from "react-router-dom";
import { 
  Star, Shield, Clock, CreditCard, GraduationCap, BookOpen, 
  Truck, MessageCircle, CheckCircle, Lock, Zap, Award,
  Users, Trophy, Globe, Heart, Briefcase, Monitor, Wrench, Scale
} from "lucide-react";

const benefitIcons = [
  <GraduationCap key="0" className="w-8 h-8" />,
  <BookOpen key="1" className="w-8 h-8" />,
  <CreditCard key="2" className="w-8 h-8" />,
  <Truck key="3" className="w-8 h-8" />,
  <MessageCircle key="4" className="w-8 h-8" />,
  <Shield key="5" className="w-8 h-8" />,
];

const categoryIcons: Record<string, React.ReactNode> = {
  "Educação": <GraduationCap className="w-8 h-8" />,
  "Saúde": <Heart className="w-8 h-8" />,
  "Negócios": <Briefcase className="w-8 h-8" />,
  "Tecnologia": <Monitor className="w-8 h-8" />,
  "Engenharias": <Wrench className="w-8 h-8" />,
  "Direito e Humanas": <Scale className="w-8 h-8" />,
};

const Index = () => {
  const featuredCourses = COURSES.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-block bg-gold text-accent-foreground px-4 py-2 rounded-full text-sm font-bold">
                  PROMOÇÃO LIMITADA
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-heading">
                  Sua <span className="text-gold">Documentação</span> Acadêmica em Poucos Dias
                </h1>
                <p className="text-xl text-primary-foreground/90">
                  Diplomas, certificados e documentação completa reconhecida pelo MEC.
                  Atendimento 24 horas e pagamento facilitado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-lg font-bold px-8"
                  >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Chamar no WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg"
                  >
                    <Link to="/cursos">Ver Cursos</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <Shield className="text-gold" size={20} />
                    <span className="text-sm">100% Seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-gold" size={20} />
                    <span className="text-sm">Entrega Rápida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="text-gold" size={20} />
                    <span className="text-sm">12x sem juros</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gold/20 rounded-full blur-3xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=600&fit=crop" 
                    alt="Formandos celebrando conquista acadêmica"
                    className="relative rounded-3xl shadow-2xl object-cover w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-8 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <span className="text-sm font-medium">Formas de Pagamento:</span>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-foreground">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg/120px-Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg.png" alt="PIX" className="h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium">Cartão</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/100px-Visa_Inc._logo.svg.png" alt="Visa" className="h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/100px-MasterCard_Logo.svg.png" alt="Mastercard" className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Por que escolher a <span className="text-primary">Central do Diploma</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Oferecemos a melhor experiência em documentação acadêmica do Brasil
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BENEFITS.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-primary mb-4">{benefitIcons[index]}</div>
                  <h3 className="text-xl font-bold mb-2 font-heading">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Cursos <span className="text-primary">Disponíveis</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Confira alguns dos nossos cursos mais procurados
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featuredCourses.map((course, index) => (
                <a
                  key={index}
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card hover:bg-primary hover:text-primary-foreground border border-border rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="text-primary group-hover:text-primary-foreground mb-3 flex justify-center">
                    {categoryIcons[course.category]}
                  </div>
                  <h3 className="font-semibold">{course.name}</h3>
                </a>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/cursos">Ver Todos os Cursos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                  É <span className="text-primary">Seguro</span>?
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Sim! Trabalhamos com total sigilo e segurança em todo o processo.
                  Nossa equipe é formada por profissionais experientes e comprometidos
                  com a sua satisfação.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Documentação 100% verificável</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Sigilo total das suas informações</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Suporte completo durante todo o processo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Garantia de satisfação ou seu dinheiro de volta</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card rounded-xl p-4 text-center shadow-md">
                      <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium">Dados Protegidos</span>
                    </div>
                    <div className="bg-card rounded-xl p-4 text-center shadow-md">
                      <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium">MEC Reconhecido</span>
                    </div>
                    <div className="bg-card rounded-xl p-4 text-center shadow-md">
                      <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium">Processo Rápido</span>
                    </div>
                    <div className="bg-card rounded-xl p-4 text-center shadow-md">
                      <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium">Satisfação Total</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                O que nossos <span className="text-primary">clientes</span> dizem
              </h2>
              <p className="text-muted-foreground text-lg">
                Milhares de brasileiros já conquistaram seus diplomas conosco
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Somos a Equipe Central do Diploma
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Nossa missão é ajudar você a conquistar seus objetivos profissionais
              com documentação acadêmica de qualidade, segurança e agilidade.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <Users className="w-8 h-8" />
                <span>Equipe Especializada</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-8 h-8" />
                <span>+5 Anos de Experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-8 h-8" />
                <span>Atendemos Todo Brasil</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;