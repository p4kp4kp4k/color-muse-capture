import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import UniversitiesCarousel from "@/components/UniversitiesCarousel";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import WhatsAppContactDialog from "@/components/WhatsAppContactDialog";
import { Button } from "@/components/ui/button";
import { COURSES, BENEFITS, TESTIMONIALS } from "@/lib/constants";
import { useSiteConfigContext } from "@/contexts/SiteConfigContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";
import { Link } from "react-router-dom";
import { 
  Star, Shield, Clock, GraduationCap, BookOpen, 
  Truck, MessageCircle, CheckCircle, Lock, Zap, Award,
  Users, Wallet, Trophy, Globe, Sparkles
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
  const { ref: securityRef, isVisible: securityVisible } = useScrollAnimation({ threshold: 0.2 });
  const parallaxOffset = useParallax(0.3);
  
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleWhatsAppClick = (courseName?: string) => {
    setSelectedCourse(courseName || "");
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Futuristic */}
        <section className="bg-gradient-hero text-primary-foreground py-20 md:py-32 relative overflow-hidden">
          {/* Cyber Grid Background */}
          <div className="absolute inset-0 cyber-grid opacity-30" />
          
          {/* Background Image with Parallax */}
          <div className="absolute inset-0">
            <img 
              src={celebrationBanner} 
              alt="Celebração de formatura" 
              className="w-full h-full object-cover opacity-10"
              style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
            />
            <div className="absolute inset-0 bg-gradient-hero/95" />
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl float-slow" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl float-slow" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pulse-glow" />
            {/* Floating particles */}
            <div className="absolute top-20 right-20 w-2 h-2 bg-neon-cyan rounded-full animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-32 left-32 w-3 h-3 bg-gold rounded-full animate-ping" style={{ animationDuration: '4s' }} />
            <div className="absolute top-40 left-1/4 w-2 h-2 bg-neon-purple rounded-full animate-ping" style={{ animationDuration: '5s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Logo and Stars */}
              <div className="flex items-center justify-center gap-3 mb-3 animate-fade-in">
                <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-gold/30 glow-primary">
                  <GraduationCap className="w-8 h-8 text-gold" />
                </div>
                <span className="text-2xl md:text-3xl font-bold font-heading tracking-wide">
                  EAD Cursos <span className="text-gold text-gradient-futuristic">Nacional</span>
                </span>
                <CheckCircle className="w-5 h-5 text-gold" />
              </div>
              <div className="flex justify-center gap-1 mb-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 font-heading leading-[1.1] tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Sem tempo para estudar, precisa entrar rapidamente no mercado de trabalho?{" "}
                <span className="text-gold relative inline-block">
                  podemos te ajudar!!!!
                  <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-gold animate-pulse" />
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-12 max-w-3xl mx-auto animate-fade-in glass-card-dark px-6 py-4 rounded-2xl" style={{ animationDelay: '0.2s' }}>
                A equipe <strong className="text-white font-semibold">EAD CURSOS NACIONAL</strong> foi criada para realizar o seu sonho de ter o seu diploma de conclusão superior. Trabalhamos a mais de 10 anos em virtude de você, para conseguirmos o melhor e mais eficiente resultado no processo de seu diploma superior com maior segurança e transparência!
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button
                  size="lg"
                  onClick={() => handleWhatsAppClick()}
                  className="bg-gold hover:bg-gold/90 text-navy text-lg font-bold px-10 py-6 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-105 rounded-xl relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Fale Conosco Agora!
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold via-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/40 bg-white/5 backdrop-blur-md text-white hover:bg-white/15 text-lg font-bold px-10 py-6 transition-all duration-300 hover:scale-105 rounded-xl hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  <Link to="/estados">Escolha o estado</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" className="w-full h-auto">
              <path fill="hsl(var(--background))" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
            </svg>
          </div>
        </section>

        {/* Universities Carousel */}
        <UniversitiesCarousel />

        {/* Stats Section */}
        <StatsSection />

        {/* Payment Methods - PIX Only */}
        <section className="py-10 bg-card border-y border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-purple/5" />
          <div className="absolute inset-0 cyber-grid opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <span className="text-sm font-medium uppercase tracking-wider">Forma de Pagamento:</span>
              <div className="flex items-center gap-4 glass-card px-8 py-4 rounded-2xl hover-lift">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg/120px-Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg.png" 
                  alt="PIX" 
                  className="h-10" 
                />
                <span className="text-foreground font-bold text-lg">PIX com Desconto</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Futuristic */}
        <section className="py-20 bg-gradient-to-b from-primary/5 via-primary/10 to-background relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {/* Card 1 */}
              <div 
                className={`futuristic-card group p-8 text-center hover:-translate-y-3 ${
                  benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: benefitsVisible ? '0ms' : '0ms', transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 relative">
                  <GraduationCap className="w-10 h-10 text-primary" />
                  <div className="absolute inset-0 bg-neon-cyan/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading group-hover:text-primary transition-colors">Certificado Reconhecido no MEC</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Todos os diplomas são Reconhecidos pelo MEC e publicados no Diário Oficial, voltados para serem usados em qualquer situação legal, seja profissional!
                </p>
              </div>
              
              {/* Card 2 */}
              <div 
                className={`futuristic-card group p-8 text-center hover:-translate-y-3 ${
                  benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: benefitsVisible ? '150ms' : '0ms', transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 relative">
                  <BookOpen className="w-10 h-10 text-primary" />
                  <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading group-hover:text-primary transition-colors">Conheça os Cursos Disponíveis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Então saiba qual é a melhor opção para o seu currículo, escolha o melhor curso para você comprar seu diploma ou certificado de ensino técnico e pós-graduação!
                </p>
              </div>
              
              {/* Card 3 */}
              <div 
                className={`futuristic-card group p-8 text-center hover:-translate-y-3 ${
                  benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: benefitsVisible ? '300ms' : '0ms', transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 relative">
                  <Shield className="w-10 h-10 text-primary" />
                  <div className="absolute inset-0 bg-neon-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading group-hover:text-primary transition-colors">Aqui, você não paga nada adiantado!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Garantimos a emissão e entrega segura do seu diploma ou certificado — 100% autêntico, reconhecido pelo MEC e publicado no Diário Oficial.
                </p>
              </div>
            </div>

            {/* Security Section with Image */}
            <div ref={securityRef} className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${securityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-br from-neon-cyan/50 to-neon-purple/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={graduateOutdoorBanner}
                  alt="Diploma certificado pelo MEC"
                  className="relative rounded-3xl shadow-2xl w-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                  Mas... é <span className="text-gradient-futuristic">Seguro mesmo?</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed glass-card-dark p-6 rounded-2xl">
                  Com toda certeza é super seguro, pois aqui emitimos e registramos a documentação completa referente ao curso que for escolhido por você, bem como, o certificado de conclusão de curso, o diploma e o histórico completo com toda a grade curricular e carga horária necessária do curso, assim como os estágios e o trabalho de conclusão de curso também.
                </p>
              </div>
            </div>

            {/* Additional Testimonial Image */}
            <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left order-2 md:order-1">
                <h3 className="text-2xl md:text-4xl font-bold mb-6 font-heading">
                  Realize seu <span className="text-gradient-futuristic">Sonho</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed glass-card-dark p-6 rounded-2xl">
                  Nunca é tarde para conquistar o seu diploma. Milhares de pessoas já realizaram o sonho da formatura com nossa ajuda. Você também pode!
                </p>
              </div>
              <div className="relative order-1 md:order-2 group">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/30 to-primary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-br from-gold/50 to-primary/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={testimonialBanner}
                  alt="Formanda realizando o sonho do diploma"
                  className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses - Futuristic 3D */}
        <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute inset-0">
            <img 
              src={classroomTeacherBanner} 
              alt="Cursos online EAD" 
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Header Text */}
            <div className="text-center mb-12 text-primary-foreground max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 glass-card-dark px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-gold">Cursos em Destaque</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 font-heading">
                Escolha seu curso e fale com a <span className="text-gold">EAD CURSOS NACIONAL</span>
              </h2>
              <p className="text-base md:text-lg text-primary-foreground/85 leading-relaxed">
                Confira os valores, prazos e condições para o curso escolhido. Trabalhamos apenas com cursos reconhecidos pelo MEC.
              </p>
            </div>
            
            {/* Course Cards - 3D Effect */}
            <div ref={coursesRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {featuredCourses.map((course, index) => (
                <div
                  key={index}
                  onClick={() => handleWhatsAppClick(course.name)}
                  className={`group cursor-pointer perspective-1000 ${
                    coursesVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: coursesVisible ? `${index * 100}ms` : '0ms',
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div className="relative transform-gpu transition-all duration-500 group-hover:rotate-y-3 group-hover:-rotate-x-3 group-hover:scale-105">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-gold to-neon-purple rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500" />
                    
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-futuristic">
                      {/* Image container */}
                      <div className="relative h-36 md:h-44 overflow-hidden">
                        <img 
                          src={COURSE_IMAGES[course.name] || "/images/courses/pedagogia.jpg"} 
                          alt={course.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        
                        {/* Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-gold text-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                            {course.category}
                          </span>
                        </div>
                        
                        {/* Floating icon on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-50">
                          <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm">
                            <GraduationCap className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                          Adquira o Diploma de {course.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">Reconhecido MEC</span>
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <MessageCircle className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* See All Button */}
            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold/90 text-navy font-bold px-12 py-6 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-105"
              >
                <Link to="/cursos" className="flex items-center gap-2">
                  Ver Todos os Cursos
                  <Sparkles className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 glass-card-dark px-4 py-2 rounded-full mb-6">
                <Trophy className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-gold">Realize seu Sonho</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                Pronto para conquistar seu <span className="text-gold">Diploma?</span>
              </h2>
              <p className="text-lg text-primary-foreground/85 mb-10">
                Entre em contato agora mesmo e dê o primeiro passo para transformar sua carreira!
              </p>
              <Button
                size="lg"
                onClick={() => handleWhatsAppClick()}
                className="bg-gold hover:bg-gold/90 text-navy text-xl font-bold px-14 py-7 shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:shadow-[0_0_60px_rgba(212,175,55,0.7)] transition-all duration-300 hover:scale-105 rounded-xl"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Fale Conosco Agora!
              </Button>
            </div>
          </div>
        </section>
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