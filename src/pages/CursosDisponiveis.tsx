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
  "Curso de Arquitetura e Urbanismo", "Curso de Arquivologia", "Curso de Artes", "Curso de Artes Cênicas",
  "Curso de Artes Plásticas", "Curso de Biologia", "Curso de Biomedicina", "Curso de Bioquímica",
  "Curso de Canto", "Curso de Ciência da Computação", "Curso de Ciências Contábeis", "Curso de Ciências Sociais",
  "Curso de Ciências Agrícolas", "Curso de Ciências da Natureza", "Curso de Ciências Exatas", "Curso de Comunicação e Marketing",
  "Curso de Comunicação Social", "Curso de Desenho Industrial", "Curso de Desenho e Plástica", "Curso de Design",
  "Curso de Design de Ambientes", "Curso de Design de Games", "Curso de Design de Interiores", "Curso de Design de Produto",
  "Curso de Design Digital", "Curso de Design Gráfico", "Curso de Direito", "Curso de Educação do Campo",
  "Curso de Educação Especial", "Curso de Educação Física", "Curso de Enfermagem", "Curso de Engenharia Acústica",
  "Curso de Engenharia Aeroespacial", "Curso de Engenharia Aeronáutica", "Curso de Engenharia Agrícola", "Curso de Engenharia Agroindustrial",
  "Curso de Engenharia Agronômica", "Curso de Engenharia Ambiental", "Curso de Engenharia Automotiva", "Curso de Engenharia Biomédica",
  "Curso de Engenharia Bioenergética", "Curso de Engenharia Bioquímica", "Curso de Engenharia Civil", "Curso de Engenharia da Computação",
  "Curso de Engenharia da Mobilidade", "Curso de Engenharia de Agrimensura", "Curso de Engenharia de Agronegócios", "Curso de Engenharia de Alimentos",
  "Curso de Engenharia de Aquicultura", "Curso de Engenharia de Bioprocessos", "Curso de Engenharia de Biossistemas", "Curso de Engenharia de Biotecnologia",
  "Curso de Engenharia de Energia", "Curso de Engenharia de Informação", "Curso de Engenharia de Instrumentação", "Curso de Engenharia de Manufatura",
  "Curso de Engenharia de Materiais", "Curso de Engenharia de Minas", "Curso de Engenharia de Pesca", "Curso de Engenharia de Petróleo",
  "Curso de Engenharia de Produção", "Curso de Engenharia de Recursos Hídricos", "Curso de Engenharia de Saúde e Segurança", "Curso de Engenharia de Sistemas",
  "Curso de Engenharia de Software", "Curso de Engenharia de Telecomunicações", "Curso de Engenharia de Transporte", "Curso de Engenharia Elétrica",
  "Curso de Engenharia Eletrônica", "Curso de Engenharia em Sistemas Digitais", "Curso de Engenharia Ferroviária e Metroviária", "Curso de Engenharia Física",
  "Curso de Engenharia Florestal", "Curso de Engenharia Geológica", "Curso de Engenharia Hídrica", "Curso de Engenharia Industrial",
  "Curso de Engenharia Mecânica", "Curso de Engenharia Mecatrônica", "Curso de Engenharia Metalúrgica", "Curso de Engenharia Naval",
  "Curso de Engenharia Química", "Curso de Engenharia Têxtil", "Curso de Estatística", "Curso de Farmácia",
  "Curso de Filosofia", "Curso de Física", "Curso de Fisioterapia", "Curso de Fonoaudiologia",
  "Curso de Geografia", "Curso de Gestão Ambiental", "Curso de Gestão da Informação", "Curso de Gestão de Políticas Públicas",
  "Curso de Gestão de Serviços de Saúde", "Curso de Gestão do Agronegócio", "Curso de Gestão Pública", "Curso de História",
  "Curso de Informática", "Curso de Jornalismo", "Curso de Letras", "Curso de Marketing",
  "Curso de Matemática", "Curso de Mecânica Industrial", "Curso de Medicina", "Curso de Medicina Veterinária",
  "Curso de Música", "Curso de Nutrição", "Curso de Odontologia", "Curso de Psicologia",
  "Curso de Publicidade e Propaganda", "Curso de Química", "Curso de Segunda Licenciatura", "Curso de Serviço Social",
  "Curso de Sistemas de Informação", "Curso de Teatro",
];

// Cursos de Tecnólogo
const TECNOLOGO_COURSES = [
  "Curso de Acupuntura", "Curso de Agrimensura", "Curso de Agrocomputação", "Curso de Agroecologia",
  "Curso de Agroindústria", "Curso de Agronegócio", "Curso de Agropecuária", "Curso de Alimentos",
  "Curso de Análise de Dados", "Curso de Análise e Desenvolvimento", "Curso de Apicultura e Meliponicultura", "Curso de Aquicultura",
  "Curso de Arqueologia", "Curso de Arquitetura de Dados", "Curso de Artes do Espetáculo", "Curso de Artes e Mídias Digitais",
  "Curso de Assessoria Executiva Digital", "Curso de Atividades de Inteligência e Gestão", "Curso de Automação de Escritórios", "Curso de Automação e Manufatura Digital",
  "Curso de Automação Industrial", "Curso de Banco de Dados", "Curso de Big Data e Inteligência Analítica", "Curso de Big Data no Agronegócio",
  "Curso de Biocombustíveis", "Curso de Bioenergia", "Curso de Bioinformática", "Curso de Biotecnologia",
  "Curso de Blockchain e Criptografia Digital", "Curso de Cibersegurança", "Curso de Ciência de Dados", "Curso de Cinema e Audiovisual",
  "Curso de Coach Digital", "Curso de Coaching e Mentoring", "Curso de Coding", "Curso de Comércio Exterior",
  "Curso de Computação em Nuvem", "Curso de Comunicação Assistiva", "Curso de Comunicação Digital", "Curso de Comunicação em Computação",
  "Curso de Comunicação Institucional", "Curso de Conservação e Restauro", "Curso de Construção Civil", "Curso de Construção de Edifícios",
  "Curso de Construção Naval", "Curso de Controle Ambiental", "Curso de Controle de Obras", "Curso de Cosmetologia e Estética",
  "Curso de Cozinha Contemporânea", "Curso de Data Science", "Curso de Defesa Cibernética", "Curso de Defesa Médica Hospitalar",
  "Curso de Desenho de Animação", "Curso de Desenvolvimento Back-End", "Curso de Desenvolvimento de Aplicativos", "Curso de Desenvolvimento de Produtos",
  "Curso de Desenvolvimento de Sistemas", "Curso de Desenvolvimento e Gestão", "Curso de Desenvolvimento Mobile", "Curso de Desenvolvimento para Internet",
  "Curso de Desenvolvimento para Web", "Curso de Design", "Curso de Design Comercial", "Curso de Design de Animação",
  "Curso de Design de Aplicações", "Curso de Design de Experiência e de Serviços", "Curso de Design de Games", "Curso de Design de Interiores",
  "Curso de Design de Moda", "Curso de Design de Produto", "Curso de Design Editorial", "Curso de Design Educacional",
  "Curso de Design Gráfico", "Curso de Devops", "Curso de Digital Influencer", "Curso de Digital Security",
  "Curso de E-Commerce", "Curso de Educador Social", "Curso de Eletrônica Automotiva", "Curso de Eletrônica Industrial",
  "Curso de Eletrotécnica Industrial", "Curso de Empreendedorismo", "Curso de Energias Renováveis", "Curso de Escrita Criativa",
  "Curso de Estética e Cosmética", "Curso de Estilismo", "Curso de Fabricação Mecânica", "Curso de Fitoterapia",
  "Curso de Gastronomia", "Curso de Geoprocessamento", "Curso de Gestão Ambiental", "Curso de Gestão Comercial",
  "Curso de Gestão da Produção Industrial", "Curso de Gestão da Qualidade", "Curso de Gestão da Tecnologia", "Curso de Gestão de Negócios",
  "Curso de Gestão de Pessoas", "Curso de Gestão de Recursos Humanos", "Curso de Gestão de Saúde Pública", "Curso de Gestão Financeira",
  "Curso de Gestão Pública", "Curso de Hotelaria", "Curso de Informática", "Curso de Marketing",
  "Curso de Mecânica", "Curso de Mecatrônica Industrial",
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
      { "@type": "ListItem", "position": 1, "name": "Cursos de Bacharelado" },
      { "@type": "ListItem", "position": 2, "name": "Cursos de Tecnólogo" },
      { "@type": "ListItem", "position": 3, "name": "Certificados Técnicos" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Cursos Disponíveis - Mais de 300 Opções"
        description="Confira mais de 300 cursos disponíveis: Bacharelado, Tecnólogo e Técnico. Cursos e certificados reconhecidos pelo MEC. Atendimento 24h via WhatsApp."
        keywords="cursos bacharelado, cursos tecnólogo, cursos técnicos, certificação MEC, certificado profissional, graduação EAD"
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
                A equipe {brandUpper} foi criada para realizar o seu sonho de conquistar sua formação superior. 
                Trabalhamos há mais de 10 anos para garantir o melhor resultado no seu processo de formação com maior segurança e transparência!
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
              Mais de <strong>300 opções</strong> de cursos e certificações para você escolher.
            </p>
          </div>
        </section>

        {/* Course Lists */}
        <CourseList courses={BACHARELADO_COURSES} title="Cursos de Bacharelado" id="bacharelado" onCourseClick={handleCourseClick} />
        <CourseList courses={TECNOLOGO_COURSES} title="Cursos de Tecnólogo" id="tecnologo" onCourseClick={handleCourseClick} />
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
