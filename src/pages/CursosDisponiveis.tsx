import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Monitor, Wrench, MessageCircle, Sparkles, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Cursos de Bacharelado
const BACHARELADO_COURSES = [
  "Diploma de Administração", "Diploma de Administração Pública", "Diploma de Agronomia", "Diploma de Análise de Sistemas",
  "Diploma de Arquitetura e Urbanismo", "Diploma de Arquivologia", "Diploma de Artes", "Diploma de Artes Cênicas",
  "Diploma de Artes Plásticas", "Diploma de Biologia", "Diploma de Biomedicina", "Diploma de Bioquímica",
  "Diploma de Canto", "Diploma de Ciência da Computação", "Diploma de Ciências Contábeis", "Diploma de Ciências Sociais",
  "Diploma de Ciências Agrícolas", "Diploma de Ciências da Natureza", "Diploma de Ciências Exatas", "Diploma de Comunicação e Marketing",
  "Diploma de Comunicação Social", "Diploma de Desenho Industrial", "Diploma de Desenho e Plástica", "Diploma de Design",
  "Diploma de Design de Ambientes", "Diploma de Design de Games", "Diploma de Design de Interiores", "Diploma de Design de Produto",
  "Diploma de Design Digital", "Diploma de Design Gráfico", "Diploma de Direito", "Diploma de Educação do Campo",
  "Diploma de Educação Especial", "Diploma de Educação Física", "Diploma de Enfermagem", "Diploma de Engenharia Acústica",
  "Diploma de Engenharia Aeroespacial", "Diploma de Engenharia Aeronáutica", "Diploma de Engenharia Agrícola", "Diploma de Engenharia Agroindustrial",
  "Diploma de Engenharia Agronômica", "Diploma de Engenharia Ambiental", "Diploma de Engenharia Automotiva", "Diploma de Engenharia Biomédica",
  "Diploma de Engenharia Bioenergética", "Diploma de Engenharia Bioquímica", "Diploma de Engenharia Civil", "Diploma de Engenharia da Computação",
  "Diploma de Engenharia da Mobilidade", "Diploma de Engenharia de Agrimensura", "Diploma de Engenharia de Agronegócios", "Diploma de Engenharia de Alimentos",
  "Diploma de Engenharia de Aquicultura", "Diploma de Engenharia de Bioprocessos", "Diploma de Engenharia de Biossistemas", "Diploma de Engenharia de Biotecnologia",
  "Diploma de Engenharia de Energia", "Diploma de Engenharia de Informação", "Diploma de Engenharia de Instrumentação", "Diploma de Engenharia de Manufatura",
  "Diploma de Engenharia de Materiais", "Diploma de Engenharia de Minas", "Diploma de Engenharia de Pesca", "Diploma de Engenharia de Petróleo",
  "Diploma de Engenharia de Produção", "Diploma de Engenharia de Recursos Hídricos", "Diploma de Engenharia de Saúde e Segurança", "Diploma de Engenharia de Sistemas",
  "Diploma de Engenharia de Software", "Diploma de Engenharia de Telecomunicações", "Diploma de Engenharia de Transporte", "Diploma de Engenharia Elétrica",
  "Diploma de Engenharia Eletrônica", "Diploma de Engenharia em Sistemas Digitais", "Diploma de Engenharia Ferroviária e Metroviária", "Diploma de Engenharia Física",
  "Diploma de Engenharia Florestal", "Diploma de Engenharia Geológica", "Diploma de Engenharia Hídrica", "Diploma de Engenharia Industrial",
  "Diploma de Engenharia Mecânica", "Diploma de Engenharia Mecatrônica", "Diploma de Engenharia Metalúrgica", "Diploma de Engenharia Naval",
  "Diploma de Engenharia Química", "Diploma de Engenharia Têxtil", "Diploma de Estatística", "Diploma de Farmácia",
  "Diploma de Filosofia", "Diploma de Física", "Diploma de Fisioterapia", "Diploma de Fonoaudiologia",
  "Diploma de Geografia", "Diploma de Gestão Ambiental", "Diploma de Gestão da Informação", "Diploma de Gestão de Políticas Públicas",
  "Diploma de Gestão de Serviços de Saúde", "Diploma de Gestão do Agronegócio", "Diploma de Gestão Pública", "Diploma de História",
  "Diploma de Informática", "Diploma de Jornalismo", "Diploma de Letras", "Diploma de Marketing",
  "Diploma de Matemática", "Diploma de Mecânica Industrial", "Diploma de Medicina", "Diploma de Medicina Veterinária",
  "Diploma de Música", "Diploma de Nutrição", "Diploma de Odontologia", "Diploma de Psicologia",
  "Diploma de Publicidade e Propaganda", "Diploma de Química", "Diploma de Segunda Licenciatura", "Diploma de Serviço Social",
  "Diploma de Sistemas de Informação", "Diploma de Teatro",
];

// Cursos de Tecnólogo
const TECNOLOGO_COURSES = [
  "Diploma de Acupuntura", "Diploma de Agrimensura", "Diploma de Agrocomputação", "Diploma de Agroecologia",
  "Diploma de Agroindústria", "Diploma de Agronegócio", "Diploma de Agropecuária", "Diploma de Alimentos",
  "Diploma de Análise de Dados", "Diploma de Análise e Desenvolvimento", "Diploma de Apicultura e Meliponicultura", "Diploma de Aquicultura",
  "Diploma de Arqueologia", "Diploma de Arquitetura de Dados", "Diploma de Artes do Espetáculo", "Diploma de Artes e Mídias Digitais",
  "Diploma de Assessoria Executiva Digital", "Diploma de Atividades de Inteligência e Gestão", "Diploma de Automação de Escritórios", "Diploma de Automação e Manufatura Digital",
  "Diploma de Automação Industrial", "Diploma de Banco de Dados", "Diploma de Big Data e Inteligência Analítica", "Diploma de Big Data no Agronegócio",
  "Diploma de Biocombustíveis", "Diploma de Bioenergia", "Diploma de Bioinformática", "Diploma de Biotecnologia",
  "Diploma de Blockchain e Criptografia Digital", "Diploma de Cibersegurança", "Diploma de Ciência de Dados", "Diploma de Cinema e Audiovisual",
  "Diploma de Coach Digital", "Diploma de Coaching e Mentoring", "Diploma de Coding", "Diploma de Comércio Exterior",
  "Diploma de Computação em Nuvem", "Diploma de Comunicação Assistiva", "Diploma de Comunicação Digital", "Diploma de Comunicação em Computação",
  "Diploma de Comunicação Institucional", "Diploma de Conservação e Restauro", "Diploma de Construção Civil", "Diploma de Construção de Edifícios",
  "Diploma de Construção Naval", "Diploma de Controle Ambiental", "Diploma de Controle de Obras", "Diploma de Cosmetologia e Estética",
  "Diploma de Cozinha Contemporânea", "Diploma de Data Science", "Diploma de Defesa Cibernética", "Diploma de Defesa Médica Hospitalar",
  "Diploma de Desenho de Animação", "Diploma de Desenvolvimento Back-End", "Diploma de Desenvolvimento de Aplicativos", "Diploma de Desenvolvimento de Produtos",
  "Diploma de Desenvolvimento de Sistemas", "Diploma de Desenvolvimento e Gestão", "Diploma de Desenvolvimento Mobile", "Diploma de Desenvolvimento para Internet",
  "Diploma de Desenvolvimento para Web", "Diploma de Design", "Diploma de Design Comercial", "Diploma de Design de Animação",
  "Diploma de Design de Aplicações", "Diploma de Design de Experiência e de Serviços", "Diploma de Design de Games", "Diploma de Design de Interiores",
  "Diploma de Design de Moda", "Diploma de Design de Produto", "Diploma de Design Editorial", "Diploma de Design Educacional",
  "Diploma de Design Gráfico", "Diploma de Devops", "Diploma de Digital Influencer", "Diploma de Digital Security",
  "Diploma de E-Commerce", "Diploma de Educador Social", "Diploma de Eletrônica Automotiva", "Diploma de Eletrônica Industrial",
  "Diploma de Eletrotécnica Industrial", "Diploma de Empreendedorismo", "Diploma de Energias Renováveis", "Diploma de Escrita Criativa",
  "Diploma de Estética e Cosmética", "Diploma de Estilismo", "Diploma de Fabricação Mecânica", "Diploma de Fitoterapia",
  "Diploma de Gastronomia", "Diploma de Geoprocessamento", "Diploma de Gestão Ambiental", "Diploma de Gestão Comercial",
  "Diploma de Gestão da Produção Industrial", "Diploma de Gestão da Qualidade", "Diploma de Gestão da Tecnologia", "Diploma de Gestão de Negócios",
  "Diploma de Gestão de Pessoas", "Diploma de Gestão de Recursos Humanos", "Diploma de Gestão de Saúde Pública", "Diploma de Gestão Financeira",
  "Diploma de Gestão Pública", "Diploma de Hotelaria", "Diploma de Informática", "Diploma de Marketing",
  "Diploma de Mecânica", "Diploma de Mecatrônica Industrial",
];

// Certificados Técnicos
const TECNICO_COURSES = [
  "Técnico em Agente Comunitário", "Técnico em Análises Clínicas", "Técnico em Biotecnologia", "Técnico em Citopatologia",
  "Técnico em Equipamentos Biomédicos", "Técnico em Estética", "Técnico em Farmácia", "Técnico em Gerência em Saúde",
  "Técnico em Hemoterapia", "Técnico em Saúde Bucal", "Técnico em Imagem Pessoal", "Técnico em Imobilizações Ortopédicas",
  "Técnico em Massoterapia", "Técnico em Meio Ambiente", "Técnico em Meteorologia", "Técnico em Nutrição e Dietética",
  "Técnico em Óptica", "Técnico em Órteses e Próteses", "Técnico em Podologia", "Técnico em Prótese Dentária",
  "Técnico em Radiologia", "Técnico em Segurança do Trabalho", "Técnico em Vigilância em Saúde", "Técnico em Alimentação Escolar",
  "Técnico em Biblioteconomia", "Técnico em Infraestrutura Escolar", "Técnico em Multimeios Didáticos", "Técnico em Geodésia e Cartografia",
  "Técnico em Orientação Comunitária", "Técnico em Secretaria Escolar", "Técnico em Análises Químicas", "Técnico em Automação Industrial",
  "Técnico em Eletroeletrônica", "Técnico em Eletromecânica", "Técnico em Eletrônica", "Técnico em Eletrotécnica",
  "Técnico em Manutenção Automotiva", "Técnico em Máquinas Navais", "Técnico em Mecânica", "Técnico em Mecatrônica",
  "Técnico em Metalurgia", "Técnico em Petroquímica", "Técnico em Química", "Técnico em Refrigeração e Climatização",
  "Técnico em Sistemas a Gás", "Técnico em Administração", "Técnico em Comércio", "Técnico em Comércio Exterior",
  "Técnico em Contabilidade", "Técnico em Cooperativismo", "Técnico em Finanças", "Técnico em Logística",
  "Técnico em Marketing", "Técnico em Qualidade", "Técnico em Recursos Humanos", "Técnico em Secretariado",
  "Técnico em Digital Security", "Técnico em Seguros", "Técnico em Serviços de Condomínio", "Técnico em Serviços Públicos",
  "Técnico em Transações Imobiliárias", "Técnico em Vendas", "Técnico em Agenciamento de Viagem", "Técnico em Cozinha",
  "Técnico em Eventos", "Técnico em Guia de Turismo", "Técnico em Hospedagem", "Técnico em Lazer",
  "Técnico em Serviços de Restaurante e Bar", "Técnico em Informática", "Técnico em Informática para Internet", "Técnico em Suporte em Informática",
  "Técnico em Programação de Jogos", "Técnico em Redes de Computadores", "Técnico em Sistemas de Comutação", "Técnico em Sistemas de Transmissão",
  "Técnico em Telecomunicações", "Técnico Aeroportuário", "Técnico em Agrimensura", "Técnico em Carpintaria",
  "Técnico em Desenho de Construção Civil", "Técnico em Edificações", "Técnico em Estradas", "Técnico em Geoprocessamento",
  "Técnico em Hidrologia", "Técnico em Manutenção de Aeronaves", "Técnico em Portos", "Técnico em Saneamento",
  "Técnico em Trânsito", "Técnico em Transporte Aquaviário", "Técnico em Transporte Dutoviário", "Técnico em Transporte Ferroviário",
  "Técnico em Transporte Rodoviário", "Técnico em Comunicações Aeronáuticas", "Técnico em Controle de Tráfego Aéreo", "Técnico em Desenho Militar",
  "Técnico em Equipamentos de Voo", "Técnico em Fotointeligência", "Técnico em Guarda e Segurança", "Técnico em Hidrografia",
  "Técnico em Informações Aeronáuticas", "Técnico em Material Bélico", "Técnico em Mergulho", "Técnico em Operação de Radar",
  "Técnico em Operação de Sonar", "Técnico em Sinais Navais", "Técnico em Suprimento", "Técnico em Agroindústria",
  "Técnico em Açúcar e Álcool", "Técnico em Biocombustíveis", "Técnico em Enfermagem",
];

const CategoryIcon = ({ icon: Icon, title, description, delay }: { icon: React.ElementType; title: string; description: string; delay: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div 
      ref={ref}
      className={`futuristic-card group p-6 text-center transition-all duration-700 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 relative">
        <Icon className="w-8 h-8 text-primary" />
        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const CourseList = ({ courses, title, id, icon: Icon }: { courses: string[]; title: string; id: string; icon: React.ElementType }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const columns = 4;
  const itemsPerColumn = Math.ceil(courses.length / columns);
  const columnArrays = Array.from({ length: columns }, (_, i) =>
    courses.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
  );

  return (
    <section 
      ref={ref}
      className={`py-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
      id={id} 
      aria-labelledby={`${id}-title`}
    >
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary via-primary/90 to-primary py-4 px-8 mb-8 rounded-xl relative overflow-hidden group">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex items-center justify-center gap-3 relative z-10">
            <Icon className="w-6 h-6 text-gold" />
            <h2 id={`${id}-title`} className="text-xl md:text-2xl font-bold text-center font-heading text-primary-foreground">
              {title}
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-2">
          {columnArrays.map((column, colIndex) => (
            <ul key={colIndex} className="space-y-1" role="list">
              {column.map((course, index) => (
                <li key={index}>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-primary hover:text-neon-cyan hover:translate-x-2 transition-all duration-300 py-1 relative group"
                    title={`Adquirir ${course} - Reconhecido pelo MEC`}
                  >
                    <span className="relative">
                      {course}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

const CursosDisponiveis = () => {
  useEffect(() => {
    document.title = "Cursos Disponíveis - Diplomas Reconhecidos pelo MEC | EAD Cursos Nacional";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Confira mais de 300 cursos disponíveis: Bacharelado, Tecnólogo e Técnico. Diplomas e certificados reconhecidos pelo MEC. Atendimento 24h via WhatsApp."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Futuristic */}
        <section className="bg-gradient-hero text-primary-foreground py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 glass-card-dark px-4 py-2 rounded-full mb-6 animate-fade-in">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-xs uppercase tracking-widest text-gold font-medium">EAD CURSOS NACIONAL</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 font-heading animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Cursos <span className="text-gradient-futuristic">Disponíveis</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/85 max-w-2xl mx-auto mb-8 leading-relaxed glass-card-dark p-6 rounded-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                A equipe EAD CURSOS NACIONAL foi criada para realizar o seu sonho de ter o seu diploma de conclusão superior. 
                Trabalhamos há mais de 10 anos para conseguirmos o melhor resultado no processo de seu diploma superior com maior segurança e transparência!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button asChild className="bg-gold text-navy hover:bg-gold/90 font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-105">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Fale Conosco
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-300">
                  <Link to="/estados" aria-label="Escolher seu estado">
                    Escolher o estado
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Wave bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" className="w-full h-auto">
              <path fill="hsl(var(--primary))" d="M0,48L80,42.7C160,37,320,27,480,32C640,37,800,59,960,64C1120,69,1280,59,1360,53.3L1440,48L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
            </svg>
          </div>
        </section>

        {/* Category Icons - Futuristic */}
        <section className="py-12 bg-primary relative overflow-hidden" aria-label="Categorias de cursos">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <CategoryIcon 
                icon={GraduationCap} 
                title="Bacharelado" 
                description="Graduação completa de 4 a 6 anos" 
                delay={0}
              />
              <CategoryIcon 
                icon={Monitor} 
                title="Tecnólogo" 
                description="Cursos superiores de curta duração" 
                delay={150}
              />
              <CategoryIcon 
                icon={Wrench} 
                title="Técnico" 
                description="Formação profissional técnica" 
                delay={300}
              />
            </div>
          </div>
        </section>

        {/* Info Text */}
        <section className="py-8 bg-card border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-purple/5" />
          <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
            <p className="text-base text-muted-foreground">
              Confira todos os Cursos <span className="text-gradient-futuristic font-semibold">Reconhecidos pelo MEC</span> ofertados pela nossa equipe. 
              Mais de <strong className="text-primary">300 opções</strong> de diplomas e certificados para você escolher.
            </p>
          </div>
        </section>

        {/* Course Lists */}
        <div className="bg-background relative">
          <div className="absolute inset-0 cyber-grid opacity-5" />
          <CourseList courses={BACHARELADO_COURSES} title="Diplomas de Bacharelado" id="bacharelado" icon={GraduationCap} />
          <CourseList courses={TECNOLOGO_COURSES} title="Diplomas de Tecnólogo" id="tecnologo" icon={Monitor} />
          <CourseList courses={TECNICO_COURSES} title="Certificado Técnico" id="tecnico" icon={Wrench} />
        </div>

        {/* CTA Section - Futuristic */}
        <section className="py-16 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass-card-dark px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Realize seu Sonho</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 font-heading">
              TENHA SEU DIPLOMA <span className="text-gold">HOJE MESMO!</span>
            </h2>
            <Button
              asChild
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold px-10 py-6 shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 rounded-xl"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Falar com a equipe pelo WhatsApp">
                <MessageCircle className="w-6 h-6 mr-2" />
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

export default CursosDisponiveis;