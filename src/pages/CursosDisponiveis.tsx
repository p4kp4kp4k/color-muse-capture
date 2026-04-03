import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppContactDialog from "@/components/WhatsAppContactDialog";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useSiteConfigContext } from "@/contexts/SiteConfigContext";
import { GraduationCap, BookOpen, Monitor, Wrench, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Cursos de Bacharelado
const BACHARELADO_COURSES = [
  "Curso de Administração", "Curso de Administração Pública", "Curso de Agronomia", "Curso de Análise de Sistemas",
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

const CategoryIcon = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="bg-card rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="font-semibold text-base mb-1">{title}</h3>
    <p className="text-xs text-muted-foreground">{description}</p>
  </div>
);

interface CourseListProps {
  courses: string[];
  title: string;
  id: string;
  onCourseClick: (course: string) => void;
}

const CourseList = ({ courses, title, id, onCourseClick }: CourseListProps) => {
  const columns = 4;
  const itemsPerColumn = Math.ceil(courses.length / columns);
  const columnArrays = Array.from({ length: columns }, (_, i) =>
    courses.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
  );

  return (
    <section className="py-8" id={id} aria-labelledby={`${id}-title`}>
      <div className="container mx-auto px-4">
        <div className="bg-primary py-3 px-6 mb-6 rounded-sm">
          <h2 id={`${id}-title`} className="text-xl md:text-2xl font-bold text-center font-heading text-primary-foreground">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-1">
          {columnArrays.map((column, colIndex) => (
            <ul key={colIndex} className="space-y-1" role="list">
              {column.map((course, index) => (
                <li key={index}>
                  <button
                    onClick={() => onCourseClick(course)}
                    className="block text-sm text-primary hover:text-primary/70 hover:underline transition-colors py-0.5 text-left w-full"
                    title={`Adquirir ${course} - Reconhecido pelo MEC`}
                  >
                    {course}
                  </button>
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
  const { siteName } = useSiteConfigContext();
  const brandName = (siteName || "EAD Cursos Nacional").trim();
  const brandUpper = brandName.toUpperCase();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleCourseClick = (course: string) => {
    setSelectedCourse(course);
    setDialogOpen(true);
  };

  const handleContactClick = () => {
    setSelectedCourse("");
    setDialogOpen(true);
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Cursos Disponíveis",
    "description": "Lista de cursos de Bacharelado, Tecnólogo e Técnico reconhecidos pelo MEC",
    "numberOfItems": 300,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Diplomas de Bacharelado" },
      { "@type": "ListItem", "position": 2, "name": "Diplomas de Tecnólogo" },
      { "@type": "ListItem", "position": 3, "name": "Certificados Técnicos" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Cursos Disponíveis - Mais de 300 Opções"
        description="Confira mais de 300 cursos disponíveis: Bacharelado, Tecnólogo e Técnico. Diplomas e certificados reconhecidos pelo MEC. Atendimento 24h via WhatsApp."
        keywords="cursos bacharelado, cursos tecnólogo, cursos técnicos, diploma MEC, certificado profissional, graduação EAD"
        canonicalPath="/cursos"
        structuredData={faqStructuredData}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs uppercase tracking-widest text-primary-foreground/70 mb-2">{brandUpper}</p>
              <h1 className="text-2xl md:text-4xl font-bold mb-4 font-heading">
                Cursos Disponíveis
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/85 max-w-2xl mx-auto mb-6 leading-relaxed">
                A equipe {brandUpper} foi criada para realizar o seu sonho de ter o seu diploma de conclusão superior. 
                Trabalhamos há mais de 10 anos para conseguirmos o melhor resultado no processo de seu diploma superior com maior segurança e transparência!
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Button onClick={handleContactClick} className="bg-card text-primary hover:bg-card/90 font-medium border-0">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Fale Conosco
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <Link to="/estados" aria-label="Escolher seu estado">
                    Escolher o estado
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Icons */}
        <section className="py-8 bg-primary" aria-label="Categorias de cursos">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
              <CategoryIcon 
                icon={GraduationCap} 
                title="Bacharelado" 
                description="Graduação completa de 4 a 6 anos" 
              />
              <CategoryIcon 
                icon={Monitor} 
                title="Tecnólogo" 
                description="Cursos superiores de curta duração" 
              />
              <CategoryIcon 
                icon={Wrench} 
                title="Técnico" 
                description="Formação profissional técnica" 
              />
            </div>
          </div>
        </section>

        {/* Info Text */}
        <section className="py-6 bg-card border-b border-border">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-sm text-muted-foreground">
              Confira todos os Cursos <span className="text-primary font-medium">Reconhecidos pelo MEC</span> ofertados pela nossa equipe. 
              Mais de <strong>300 opções</strong> de diplomas e certificados para você escolher.
            </p>
          </div>
        </section>

        {/* Course Lists */}
        <CourseList courses={BACHARELADO_COURSES} title="Diplomas de Bacharelado" id="bacharelado" onCourseClick={handleCourseClick} />
        <CourseList courses={TECNOLOGO_COURSES} title="Diplomas de Tecnólogo" id="tecnologo" onCourseClick={handleCourseClick} />
        <CourseList courses={TECNICO_COURSES} title="Certificado Técnico" id="tecnico" onCourseClick={handleCourseClick} />

        {/* CTA Section */}
        <section className="py-12 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-6 font-heading">
              TENHA SEU DIPLOMA HOJE MESMO!
            </h2>
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-medium"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com a Equipe
            </Button>
          </div>
        </section>

        {/* Pós-Graduação Section */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="bg-primary py-3 px-6 mb-6 rounded-sm">
              <h2 className="text-xl md:text-2xl font-bold text-center font-heading text-primary-foreground">
                Pós-Graduação
              </h2>
            </div>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground mb-6">
                Cursos de pós-graduação (especialização, mestrado e doutorado) também disponíveis. 
                Entre em contato para mais informações sobre valores e prazos.
              </p>
              <Button
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Consultar Pós-Graduação
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

export default CursosDisponiveis;
