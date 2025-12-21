import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Monitor, Wrench, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Cursos organizados por tipo de diploma
const BACHARELADO_COURSES = [
  "Diploma de Administração", "Diploma de Enfermagem", "Diploma de Psicologia", "Diploma de Direito",
  "Diploma de Contabilidade", "Diploma de Economia", "Diploma de Farmácia", "Diploma de Fisioterapia",
  "Diploma de Medicina", "Diploma de Odontologia", "Diploma de Arquitetura", "Diploma de Biomedicina",
  "Diploma de Ciência da Computação", "Diploma de Engenharia Civil", "Diploma de Engenharia Elétrica", "Diploma de Engenharia Mecânica",
  "Diploma de Engenharia de Produção", "Diploma de Engenharia Química", "Diploma de Jornalismo", "Diploma de Publicidade",
  "Diploma de Relações Internacionais", "Diploma de Serviço Social", "Diploma de Nutrição", "Diploma de Medicina Veterinária",
  "Diploma de Design Gráfico", "Diploma de Educação Física", "Diploma de Turismo", "Diploma de Ciências Econômicas",
];

const LICENCIATURA_COURSES = [
  "Diploma de Pedagogia", "Diploma de Letras", "Diploma de Matemática", "Diploma de História",
  "Diploma de Geografia", "Diploma de Biologia", "Diploma de Física", "Diploma de Química",
  "Diploma de Educação Física", "Diploma de Artes", "Diploma de Filosofia", "Diploma de Sociologia",
  "Diploma de Ciências", "Diploma de Música", "Diploma de Teatro", "Diploma de Dança",
  "Diploma de Língua Portuguesa", "Diploma de Língua Inglesa", "Diploma de Língua Espanhola", "Diploma de Libras",
];

const TECNOLOGO_COURSES = [
  "Diploma de Gestão de RH", "Diploma de Gestão Financeira", "Diploma de Marketing", "Diploma de Logística",
  "Diploma de Gestão Comercial", "Diploma de Processos Gerenciais", "Diploma de Gestão Pública", "Diploma de Gestão Hospitalar",
  "Diploma de Análise de Sistemas", "Diploma de Redes de Computadores", "Diploma de Banco de Dados", "Diploma de Desenvolvimento Web",
  "Diploma de Segurança da Informação", "Diploma de Sistemas para Internet", "Diploma de Jogos Digitais", "Diploma de Big Data",
  "Diploma de Design de Interiores", "Diploma de Design de Moda", "Diploma de Fotografia", "Diploma de Gastronomia",
];

const TECNICO_COURSES = [
  "Técnico em Enfermagem", "Técnico em Radiologia", "Técnico em Farmácia", "Técnico em Laboratório",
  "Técnico em Segurança do Trabalho", "Técnico em Edificações", "Técnico em Eletrotécnica", "Técnico em Mecânica",
  "Técnico em Informática", "Técnico em Administração", "Técnico em Contabilidade", "Técnico em Logística",
  "Técnico em Marketing", "Técnico em Recursos Humanos", "Técnico em Secretariado", "Técnico em Vendas",
  "Técnico em Nutrição e Dietética", "Técnico em Estética", "Técnico em Massoterapia", "Técnico em Podologia",
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

const CourseList = ({ courses, title }: { courses: string[]; title: string }) => {
  const columns = 4;
  const itemsPerColumn = Math.ceil(courses.length / columns);
  const columnArrays = Array.from({ length: columns }, (_, i) =>
    courses.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
  );

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="bg-primary py-3 px-6 mb-6 rounded-sm">
          <h2 className="text-xl md:text-2xl font-bold text-center font-heading text-primary-foreground">
            Diplomas de {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-1">
          {columnArrays.map((column, colIndex) => (
            <div key={colIndex} className="space-y-1">
              {column.map((course, index) => (
                <a
                  key={index}
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-primary hover:text-primary/70 hover:underline transition-colors py-0.5"
                >
                  {course}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CursosDisponiveis = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Compact */}
        <section className="bg-gradient-hero text-primary-foreground py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs uppercase tracking-widest text-primary-foreground/70 mb-2">EAD CURSOS NACIONAL</p>
              <h1 className="text-2xl md:text-4xl font-bold mb-4 font-heading">
                Cursos Disponíveis
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/85 max-w-2xl mx-auto mb-6 leading-relaxed">
                A equipe EAD CURSOS NACIONAL foi criada para realizar o seu sonho de ter o seu diploma de conclusão superior. 
                Trabalhamos a mais de 10 anos para conseguirmos o melhor resultado no processo de seu diploma superior com maior segurança e transparência!
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild className="bg-card text-primary hover:bg-card/90 font-medium border-0">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Fale Conosco
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <Link to="/estados">
                    Escolher o estado
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Icons - Compact */}
        <section className="py-8 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
              <CategoryIcon 
                icon={GraduationCap} 
                title="Bacharelado" 
                description="Graduação completa de 4 a 6 anos" 
              />
              <CategoryIcon 
                icon={BookOpen} 
                title="Licenciatura" 
                description="Formação para lecionar" 
              />
              <CategoryIcon 
                icon={Monitor} 
                title="Tecnólogo" 
                description="Cursos de curta duração" 
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
              Trabalhamos apenas com cursos reconhecidos pelo MEC.
            </p>
          </div>
        </section>

        {/* Course Lists */}
        <CourseList courses={BACHARELADO_COURSES} title="Bacharelado" />
        <CourseList courses={LICENCIATURA_COURSES} title="Licenciatura" />
        <CourseList courses={TECNOLOGO_COURSES} title="Tecnólogo" />
        <CourseList courses={TECNICO_COURSES} title="Técnico" />

        {/* CTA Section */}
        <section className="py-12 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-6 font-heading">
              TENHA SEU DIPLOMA HOJE MESMO!
            </h2>
            <Button
              asChild
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-medium"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
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
