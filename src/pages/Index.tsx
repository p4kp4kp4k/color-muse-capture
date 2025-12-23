import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import UniversitiesCarousel from "@/components/UniversitiesCarousel";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import WhatsAppContactDialog from "@/components/WhatsAppContactDialog";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import { Button } from "@/components/ui/button";
import { COURSES, BENEFITS, TESTIMONIALS } from "@/lib/constants";
import { useSiteConfigContext } from "@/contexts/SiteConfigContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";
import { Link } from "react-router-dom";
import { 
  Star, Shield, Clock, GraduationCap, BookOpen, 
  Truck, MessageCircle, CheckCircle, Lock, Zap, Award,
  Users, Wallet, Trophy, Globe, Sparkles, ArrowRight
} from "lucide-react";

// Import banner images
import heroMainBanner from "@/assets/banners/hero-main.jpg";
import celebrationBanner from "@/assets/banners/celebration.jpg";
import testimonialBanner from "@/assets/banners/testimonial.png";
import graduateOutdoorBanner from "@/assets/banners/graduate-outdoor.png";
import graduateClassroomBanner from "@/assets/banners/graduate-classroom.png";
import classroomTeacherBanner from "@/assets/banners/classroom-teacher.png";

const benefitIcons = [
  <GraduationCap key="0" className="w-8 h-8" />,
  <BookOpen key="1" className="w-8 h-8" />,
  <Wallet key="2" className="w-8 h-8" />,
  <Truck key="3" className="w-8 h-8" />,
  <MessageCircle key="4" className="w-8 h-8" />,
  <Shield key="5" className="w-8 h-8" />,
];

const COURSE_IMAGES: Record<string, string> = {
  "Pedagogia": "/images/courses/pedagogia.jpg",
  "Letras": "/images/courses/letras.jpg",
  "Educação Física": "/images/courses/educacao-fisica.jpg",
  "História": "/images/courses/historia.jpg",
  "Geografia": "/images/courses/geografia.jpg",
  "Matemática": "/images/courses/matematica.jpg",
  "Física": "/images/courses/fisica.jpg",
  "Química": "/images/courses/quimica.jpg",
  "Enfermagem": "/images/courses/enfermagem.jpg",
  "Administração": "/images/courses/administracao.jpg",
};

const Index = () => {
  const { getWhatsAppLink } = useSiteConfigContext();
  const whatsappLink = getWhatsAppLink();
  const featuredCourses = COURSES.slice(0, 8);
  const { ref: coursesRef, isVisible: coursesVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: securityRef, isVisible: securityVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: trustRef, isVisible: trustVisible } = useScrollAnimation({ threshold: 0.1 });
  const parallaxOffset = useParallax(0.3);
  const parallaxOffset2 = useParallax(0.2);
  const parallaxOffset3 = useParallax(0.15);
  
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleWhatsAppClick = (courseName?: string) => {
    setSelectedCourse(courseName || "");
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section with enhanced effects */}
        <section className="bg-gradient-hero text-primary-foreground py-24 md:py-36 relative overflow-hidden">
          {/* Background Image with Parallax */}
          <div className="absolute inset-0">
            <img 
              src={celebrationBanner} 
              alt="Celebração de formatura" 
              className="w-full h-full object-cover opacity-15"
              style={{ transform: `translateY(${parallaxOffset * 0.5}px) scale(1.1)` }}
            />
            <div className="absolute inset-0 bg-gradient-hero/90" />
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-80 h-80 bg-gold/15 rounded-full blur-3xl float-animation" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
            {/* Cyber grid effect */}
            <div className="absolute inset-0 cyber-grid opacity-20" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Logo and Stars */}
              <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in">
                <div className="relative w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gold/30">
                  <GraduationCap className="w-8 h-8 text-gold" />
                  <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-xl opacity-50" />
                </div>
                <span className="text-2xl md:text-3xl font-bold font-heading tracking-wide">
                  EAD Cursos <span className="text-gold">Nacional</span>
                </span>
                <CheckCircle className="w-6 h-6 text-gold" />
              </div>
              
              <div className="flex justify-center gap-1.5 mb-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold drop-shadow-lg" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>

              {/* Main Heading with gradient */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 font-heading leading-[1.1] tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Sem tempo para estudar, precisa entrar rapidamente no mercado de trabalho?{" "}
                <span className="text-gold relative">
                  podemos te ajudar!
                  <Sparkles className="absolute -top-4 -right-8 w-8 h-8 text-gold animate-pulse" />
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                A equipe <strong className="text-white font-semibold">EAD CURSOS NACIONAL</strong> foi criada para realizar o seu sonho de ter o seu diploma de conclusão superior. Trabalhamos a mais de 10 anos em virtude de você, para conseguirmos o melhor e mais eficiente resultado no processo de seu diploma superior com maior segurança e transparência!
              </p>

              {/* Buttons with enhanced effects */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button
                  size="lg"
                  onClick={() => handleWhatsAppClick()}
                  className="group relative bg-gold hover:bg-gold/90 text-navy text-lg font-bold px-10 py-7 shadow-2xl hover:shadow-gold/40 transition-all duration-300 hover:scale-105 rounded-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Fale Conosco Agora!
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group border-2 border-white/60 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 text-lg font-bold px-10 py-7 transition-all duration-300 hover:scale-105 rounded-2xl hover:border-white"
                >
                  <Link to="/estados" className="flex items-center gap-2">
                    Escolha o estado
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Universities Carousel */}
        <UniversitiesCarousel />

        {/* Stats Section */}
        <StatsSection />

        {/* Payment Methods - PIX Only with enhanced design */}
        <section className="py-10 bg-card border-y border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <span className="text-sm font-medium uppercase tracking-wider">Forma de Pagamento:</span>
              <div className="flex items-center gap-4 bg-background/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg/120px-Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg.png" 
                  alt="PIX" 
                  className="h-10" 
                />
                <div className="h-8 w-px bg-border" />
                <span className="text-foreground font-bold">PIX com Desconto</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section with 3D cards */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 via-background to-primary/10 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
              {/* Card 1 */}
              <div 
                className={`group bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-10 text-center transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 ${
                  benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: benefitsVisible ? '0ms' : '0ms' }}
              >
                <div className="relative w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap className="w-10 h-10 text-primary" />
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 font-heading group-hover:text-primary transition-colors">Certificado Reconhecido no MEC</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Todos os diplomas são Reconhecidos pelo MEC e publicados no Diário Oficial, voltados para serem usados em qualquer situação legal, seja profissional!
                </p>
              </div>
              
              {/* Card 2 */}
              <div 
                className={`group bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-10 text-center transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 ${
                  benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: benefitsVisible ? '150ms' : '0ms' }}
              >
                <div className="relative w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                  <BookOpen className="w-10 h-10 text-primary" />
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 font-heading group-hover:text-primary transition-colors">Conheça os Cursos Disponíveis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Então saiba qual é a melhor opção para o seu currículo, escolha o melhor curso para você comprar seu diploma ou certificado de ensino técnico e pós-graduação!
                </p>
              </div>
              
              {/* Card 3 */}
              <div 
                className={`group bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-10 text-center transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 ${
                  benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: benefitsVisible ? '300ms' : '0ms' }}
              >
                <div className="relative w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Shield className="w-10 h-10 text-primary" />
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 font-heading group-hover:text-primary transition-colors">Aqui, você não paga nada adiantado!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Garantimos a emissão e entrega segura do seu diploma ou certificado — 100% autêntico, reconhecido pelo MEC e publicado no Diário Oficial.
                </p>
              </div>
            </div>

        {/* Security Section with Image and Parallax */}
            <div ref={securityRef} className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className={`relative group transition-all duration-1000 ${securityVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-gold/30 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative rounded-3xl shadow-2xl w-full overflow-hidden h-[300px] md:h-[400px]">
                  <img 
                    src={graduateOutdoorBanner}
                    alt="Diploma certificado pelo MEC"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className={`text-center md:text-left transition-all duration-1000 delay-200 ${securityVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">100% Seguro</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading">
                  Mas... é <span className="text-primary">Seguro mesmo?</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com toda certeza é super seguro, pois aqui emitimos e registramos a documentação completa referente ao curso que for escolhido por você, bem como, o certificado de conclusão de curso, o diploma e o histórico completo com toda a grade curricular e carga horária necessária do curso, assim como os estágios e o trabalho de conclusão de curso também.
                </p>
              </div>
            </div>

            {/* Additional Testimonial Image with Parallax */}
            <div ref={trustRef} className="mt-20 md:mt-28 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className={`text-center md:text-left order-2 md:order-1 transition-all duration-1000 delay-200 ${trustVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-gold">Realize seu sonho</span>
                </div>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading">
                  Realize seu <span className="text-primary">Sonho</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nunca é tarde para conquistar o seu diploma. Milhares de pessoas já realizaram o sonho da formatura com nossa ajuda. Você também pode!
                </p>
              </div>
              <div className={`relative order-1 md:order-2 group transition-all duration-1000 ${trustVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <div className="absolute -inset-6 bg-gradient-to-br from-gold/30 to-primary/30 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto overflow-hidden h-[350px] md:h-[450px]">
                  <img 
                    src={testimonialBanner}
                    alt="Formanda realizando o sonho do diploma"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses with 3D hover effects and Parallax */}
        <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
          {/* Background Banner with Parallax */}
          <div className="absolute inset-0">
            <img 
              src={classroomTeacherBanner} 
              alt="Cursos online EAD" 
              className="w-full h-full object-cover opacity-10 scale-110"
              style={{ transform: `translateY(${parallaxOffset2 * 0.2}px) scale(1.1)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary/95" />
          </div>
          <div className="absolute inset-0 cyber-grid opacity-10" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Header Text */}
            <div className="text-center mb-12 text-primary-foreground max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6 border border-white/20">
                <GraduationCap className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">Cursos Disponíveis</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-heading">
                Escolha seu curso e fale com a <span className="text-gold font-extrabold">EAD CURSOS NACIONAL</span>
              </h2>
              <p className="text-base md:text-lg text-primary-foreground/85 leading-relaxed">
                Confira os valores, prazos e condições para o curso escolhido. Trabalhamos apenas com cursos reconhecidos pelo MEC.
              </p>
            </div>
            
            {/* Course Cards */}
            <div ref={coursesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {featuredCourses.map((course, index) => (
                <div
                  key={index}
                  className={`group ${
                    coursesVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: coursesVisible ? `${index * 100}ms` : '0ms',
                    transitionProperty: 'opacity, transform',
                    transitionDuration: '700ms'
                  }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    {/* Compact Image */}
                    <div className="relative overflow-hidden p-4 pb-0">
                      <div className="rounded-xl overflow-hidden">
                        <img 
                          src={COURSE_IMAGES[course.name] || "/images/courses/pedagogia.jpg"} 
                          alt={course.name}
                          className="w-full h-28 md:h-32 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 pt-3 flex flex-col flex-1">
                      <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 leading-tight">
                        Adquira o Diploma de {course.name}
                      </h3>
                      <p className="text-xs text-gray-600 mb-4 leading-relaxed flex-1">
                        Dentre as graduações disponíveis, você pode escolher diploma de nível superior bacharelado, licenciatura ou pós-graduação.
                      </p>
                      <button
                        onClick={() => handleWhatsAppClick(course.name)}
                        className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-navy text-xs md:text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 w-full"
                      >
                        Fale Conosco
                        <MessageCircle size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="secondary" className="font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 border border-primary-foreground/20 px-8 py-6 rounded-xl group">
                <Link to="/cursos" className="flex items-center gap-2">
                  Ver Todos os Cursos
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Security Section with enhanced styling and Parallax */}
        <section className="py-24 md:py-32 bg-card relative overflow-hidden">
          {/* Banner Image with Parallax */}
          <div className="absolute inset-0">
            <img 
              src={graduateClassroomBanner} 
              alt="Segurança e confiança" 
              className="w-full h-full object-cover opacity-5 scale-110"
              style={{ transform: `translateY(${parallaxOffset3 * 0.25}px) scale(1.1)` }}
            />
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute inset-0 cyber-grid opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Lock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Segurança Garantida</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-heading">
                  É <span className="text-primary">Seguro</span>?
                </h2>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                  Sim! Trabalhamos com total sigilo e segurança em todo o processo.
                  Nossa equipe é formada por profissionais experientes e comprometidos
                  com a sua satisfação.
                </p>
                <ul className="space-y-5">
                  {[
                    "Documentação 100% verificável",
                    "Sigilo total das suas informações",
                    "Suporte completo durante todo o processo",
                    "Garantia de satisfação ou seu dinheiro de volta"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <CheckCircle className="text-primary group-hover:text-primary-foreground" size={20} />
                      </div>
                      <span className="text-lg group-hover:text-primary transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-gold/20 rounded-3xl blur-3xl" />
                  <div className="relative bg-gradient-to-br from-primary/10 via-background to-gold/5 rounded-3xl p-8 md:p-12 border border-border/50 backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { icon: Lock, label: "Dados Protegidos" },
                        { icon: Award, label: "MEC Reconhecido" },
                        { icon: Zap, label: "Processo Rápido" },
                        { icon: Shield, label: "Satisfação Total" }
                      ].map((item, index) => (
                        <div key={index} className="group bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-border/50 hover:border-primary/30">
                          <div className="relative w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                          </div>
                          <span className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section with glass morphism and Parallax */}
        <section className="py-24 md:py-32 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroMainBanner} 
              alt="Formandos celebrando" 
              className="w-full h-full object-cover opacity-20 scale-110"
              style={{ transform: `translateY(${parallaxOffset * 0.15}px) scale(1.1)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-primary/70 to-navy/80" />
          </div>
          <div className="absolute inset-0 cyber-grid opacity-10" />
          
          <div ref={teamRef} className="container mx-auto px-4 text-center relative z-10">
            <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 border border-white/20 transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <Users className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium">Nossa Equipe</span>
            </div>
            
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-heading transition-all duration-700 delay-100 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Somos a Equipe <span className="text-gold">Ead Cursos Nacional</span>
            </h2>
            <p className={`text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-14 leading-relaxed transition-all duration-700 delay-200 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Nossa missão é ajudar você a conquistar seus objetivos profissionais
              com documentação acadêmica de qualidade, segurança e agilidade.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Users, label: "Equipe Especializada" },
                { icon: Trophy, label: "+5 Anos de Experiência" },
                { icon: Globe, label: "Atendemos Todo Brasil" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`group glass-card rounded-2xl px-8 py-5 flex items-center gap-4 hover:bg-white/20 hover:scale-105 transition-all duration-500 cursor-default ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: teamVisible ? `${300 + index * 100}ms` : '0ms' }}
                >
                  <item.icon className="w-8 h-8 text-gold group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-lg">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>

      <Footer />
      <WhatsAppButton />
      <WhatsAppContactDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
        courseName={selectedCourse}
      />
    </div>
  );
};

export default Index;