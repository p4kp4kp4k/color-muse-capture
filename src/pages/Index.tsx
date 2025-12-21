import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import UniversitiesCarousel from "@/components/UniversitiesCarousel";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, COURSES, BENEFITS, TESTIMONIALS } from "@/lib/constants";
import { Link } from "react-router-dom";
import { 
  Star, Shield, Clock, GraduationCap, BookOpen, 
  Truck, MessageCircle, CheckCircle, Lock, Zap, Award,
  Users, Wallet, Trophy, Globe
} from "lucide-react";

const benefitIcons = [
  <GraduationCap key="0" className="w-8 h-8" />,
  <BookOpen key="1" className="w-8 h-8" />,
  <Wallet key="2" className="w-8 h-8" />,
  <Truck key="3" className="w-8 h-8" />,
  <MessageCircle key="4" className="w-8 h-8" />,
  <Shield key="5" className="w-8 h-8" />,
];

const COURSE_IMAGES: Record<string, string> = {
  "Pedagogia": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
  "Letras": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
  "Educação Física": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
  "História": "https://images.unsplash.com/photo-1461360370896-922624d12a74?w=400&h=300&fit=crop",
  "Geografia": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop",
  "Matemática": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
  "Física": "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=300&fit=crop",
  "Química": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
  "Enfermagem": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
  "Administração": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
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
            <div className="absolute top-10 left-10 w-80 h-80 bg-gold/15 rounded-full blur-3xl float-animation" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Logo and Stars */}
              <div className="flex items-center justify-center gap-3 mb-3 animate-fade-in">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-gold" />
                </div>
                <span className="text-2xl font-bold font-heading tracking-wide">
                  Central do <span className="text-gold">Diploma</span>
                </span>
                <CheckCircle className="w-5 h-5 text-gold" />
              </div>
              <div className="flex justify-center gap-1 mb-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 font-heading leading-[1.1] tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Sem tempo para estudar, precisa entrar rapidamente no mercado de trabalho?{" "}
                <span className="text-gold">podemos te ajudar!!!!</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                A equipe <strong className="text-white font-semibold">CENTRAL DO DIPLOMA</strong> foi criada para realizar o seu sonho de ter o seu diploma de conclusão superior. Trabalhamos a mais de 10 anos em virtude de você, para conseguirmos o melhor e mais eficiente resultado no processo de seu diploma superior com maior segurança e transparência!
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-navy text-lg font-bold px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Fale Conosco Agora!
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/60 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 text-lg font-bold px-10 py-6 transition-all duration-300 hover:scale-105 rounded-xl"
                >
                  <Link to="/estados">Escolha o estado</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Universities Carousel */}
        <UniversitiesCarousel />

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

        {/* Benefits Section - New Design */}
        <section className="py-16 bg-primary/10 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Card 1 */}
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">Certificado Reconhecido no MEC</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Todos os diplomas são Reconhecidos pelo MEC e publicados no Diário Oficial, voltados para serem usados em qualquer situação legal, seja profissional!
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">Conheça os Cursos Disponíveis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Então saiba qual é a melhor opção para o seu currículo, escolha o melhor curso para você comprar seu diploma ou certificado de ensino técnico e pós-graduação!
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">Aqui, você não paga nada adiantado!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Garantimos a emissão e entrega segura do seu diploma ou certificado — 100% autêntico, reconhecido pelo MEC e publicado no Diário Oficial.
                </p>
              </div>
            </div>

            {/* Security Section with Image */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-gold/20 rounded-3xl blur-2xl" />
                <img 
                  src="https://centraldodiploma.com/wp-content/uploads/2025/01/1694606550honoriscausa5-1024x755.jpeg"
                  alt="Formandos recebendo diploma"
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                  Mas... é <span className="text-primary">Seguro mesmo?</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com toda certeza é super seguro, pois aqui emitimos e registramos a documentação completa referente ao curso que for escolhido por você, bem como, o certificado de conclusão de curso, o diploma e o histórico completo com toda a grade curricular e carga horária necessária do curso, assim como os estágios e o trabalho de conclusão de curso também.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-12 md:py-16 bg-primary relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            {/* Header Text */}
            <div className="text-center mb-8 text-primary-foreground max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-3 font-heading">
                Escolha seu curso e fale com a <span className="font-extrabold">CENTRAL DO DIPLOMA</span>
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/85 leading-relaxed">
                Confira os valores, prazos e condições para o curso escolhido. Trabalhamos apenas com cursos reconhecidos pelo MEC.
              </p>
            </div>
            
            {/* Course Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {featuredCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-28 md:h-36 overflow-hidden">
                    <img 
                      src={COURSE_IMAGES[course.name] || "/images/courses/pedagogia.jpg"} 
                      alt={course.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 leading-tight">
                      Adquira o Diploma de {course.name}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3 leading-relaxed hidden md:block">
                      Diploma de nível superior bacharelado, licenciatura ou pós-graduação.
                    </p>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-xs md:text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 w-full shadow-sm hover:shadow-md"
                    >
                      <MessageCircle size={14} />
                      Fale Conosco
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button asChild size="default" variant="secondary" className="font-medium shadow-md hover:shadow-lg transition-all hover:scale-105 border border-primary-foreground/20">
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