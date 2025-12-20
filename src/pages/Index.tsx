import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, COURSES, BENEFITS, TESTIMONIALS } from "@/lib/constants";
import { Link } from "react-router-dom";
import { 
  Star, Shield, Clock, GraduationCap, BookOpen, 
  Truck, MessageCircle, CheckCircle, Lock, Zap, Award,
  Users, Trophy, Globe, Heart, Briefcase, Monitor, Wrench, Scale, Wallet
} from "lucide-react";

const benefitIcons = [
  <GraduationCap key="0" className="w-8 h-8" />,
  <BookOpen key="1" className="w-8 h-8" />,
  <Wallet key="2" className="w-8 h-8" />,
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
        <section className="bg-gradient-hero text-primary-foreground py-20 md:py-32 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl float-animation" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-heading">
                  Sua <span className="text-gold">Documentação</span> Acadêmica em Poucos Dias
                </h1>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Diplomas, certificados e documentação completa reconhecida pelo MEC.
                  Atendimento 24 horas e pagamento facilitado via PIX.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-lg font-bold px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Chamar no WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Link to="/cursos">Ver Cursos</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                    <Shield className="text-gold" size={20} />
                    <span className="text-sm font-medium">100% Seguro</span>
                  </div>
                  <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                    <Clock className="text-gold" size={20} />
                    <span className="text-sm font-medium">Entrega Rápida</span>
                  </div>
                  <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                    <MessageCircle className="text-gold" size={20} />
                    <span className="text-sm font-medium">Suporte 24h</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-r from-gold/30 to-primary/30 rounded-full blur-3xl animate-pulse-glow"></div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1627556704302-624286467c65?w=500&h=600&fit=crop" 
                      alt="Estudante com diploma de formatura"
                      className="relative rounded-3xl shadow-2xl object-cover w-full max-w-md glow-primary"
                    />
                    {/* Floating cards */}
                    <div className="absolute -left-8 top-1/4 glass-card rounded-xl p-4 float-animation">
                      <div className="flex items-center gap-2">
                        <Award className="text-gold" size={24} />
                        <span className="text-sm font-semibold">MEC Reconhecido</span>
                      </div>
                    </div>
                    <div className="absolute -right-8 bottom-1/4 glass-card rounded-xl p-4 float-animation" style={{ animationDelay: '1s' }}>
                      <div className="flex items-center gap-2">
                        <Users className="text-gold" size={24} />
                        <span className="text-sm font-semibold">+5000 Clientes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods - PIX Only */}
        <section className="py-8 bg-card border-y border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <span className="text-sm font-medium">Forma de Pagamento:</span>
              <div className="flex items-center gap-4 bg-background/50 rounded-xl px-6 py-3 shadow-sm">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg/120px-Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg.png" 
                  alt="PIX" 
                  className="h-8" 
                />
                <span className="text-foreground font-semibold">PIX com Desconto</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                Por que escolher a <span className="text-primary">Central do Diploma</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Oferecemos a melhor experiência em documentação acadêmica do Brasil
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BENEFITS.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-2xl p-8 hover-3d cursor-pointer gradient-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {benefitIcons[index]}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                Cursos <span className="text-primary">Disponíveis</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Confira alguns dos nossos cursos mais procurados
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {featuredCourses.map((course, index) => (
                <a
                  key={index}
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card hover:bg-primary hover:text-primary-foreground border border-border rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary-foreground/20 group-hover:text-primary-foreground transition-colors">
                    {categoryIcons[course.category]}
                  </div>
                  <h3 className="font-semibold">{course.name}</h3>
                </a>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Link to="/cursos">Ver Todos os Cursos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20 md:py-28 bg-card relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">
                  É <span className="text-primary">Seguro</span>?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Sim! Trabalhamos com total sigilo e segurança em todo o processo.
                  Nossa equipe é formada por profissionais experientes e comprometidos
                  com a sua satisfação.
                </p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-primary" size={18} />
                    </div>
                    <span className="text-lg">Documentação 100% verificável</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-primary" size={18} />
                    </div>
                    <span className="text-lg">Sigilo total das suas informações</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-primary" size={18} />
                    </div>
                    <span className="text-lg">Suporte completo durante todo o processo</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-primary" size={18} />
                    </div>
                    <span className="text-lg">Garantia de satisfação ou seu dinheiro de volta</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-gold/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-gradient-to-br from-primary/10 via-background to-gold/5 rounded-3xl p-10 border border-border">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-card rounded-2xl p-6 text-center shadow-lg hover-3d">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Lock className="w-7 h-7 text-primary" />
                        </div>
                        <span className="font-semibold">Dados Protegidos</span>
                      </div>
                      <div className="bg-card rounded-2xl p-6 text-center shadow-lg hover-3d">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Award className="w-7 h-7 text-primary" />
                        </div>
                        <span className="font-semibold">MEC Reconhecido</span>
                      </div>
                      <div className="bg-card rounded-2xl p-6 text-center shadow-lg hover-3d">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Zap className="w-7 h-7 text-primary" />
                        </div>
                        <span className="font-semibold">Processo Rápido</span>
                      </div>
                      <div className="bg-card rounded-2xl p-6 text-center shadow-lg hover-3d">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Shield className="w-7 h-7 text-primary" />
                        </div>
                        <span className="font-semibold">Satisfação Total</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                O que nossos <span className="text-primary">clientes</span> dizem
              </h2>
              <p className="text-muted-foreground text-lg">
                Milhares de brasileiros já conquistaram seus diplomas conosco
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover-3d"
                >
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 text-lg italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-28 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80')] bg-cover bg-center opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">
              Somos a Equipe Central do Diploma
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Nossa missão é ajudar você a conquistar seus objetivos profissionais
              com documentação acadêmica de qualidade, segurança e agilidade.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="glass-card rounded-2xl px-8 py-4 flex items-center gap-3">
                <Users className="w-8 h-8 text-gold" />
                <span className="font-semibold">Equipe Especializada</span>
              </div>
              <div className="glass-card rounded-2xl px-8 py-4 flex items-center gap-3">
                <Trophy className="w-8 h-8 text-gold" />
                <span className="font-semibold">+5 Anos de Experiência</span>
              </div>
              <div className="glass-card rounded-2xl px-8 py-4 flex items-center gap-3">
                <Globe className="w-8 h-8 text-gold" />
                <span className="font-semibold">Atendemos Todo Brasil</span>
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