import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Monitor, Wrench, MessageCircle, Star, DollarSign, Users } from "lucide-react";

// Cursos organizados por tipo de diploma
const BACHARELADO_COURSES = [
  "Diploma de Administração", "Diploma de Enfermagem", "Diploma de Psicologia", "Diploma de Direito",
  "Diploma de Contabilidade", "Diploma de Economia", "Diploma de Farmácia", "Diploma de Fisioterapia",
  "Diploma de Medicina", "Diploma de Odontologia", "Diploma de Arquitetura", "Diploma de Biomedicina",
  "Diploma de Ciência da Computação", "Diploma de Engenharia Civil", "Diploma de Engenharia Elétrica", "Diploma de Engenharia Mecânica",
  "Diploma de Engenharia de Produção", "Diploma de Engenharia Química", "Diploma de Jornalismo", "Diploma de Publicidade",
  "Diploma de Relações Internacionais", "Diploma de Serviço Social", "Diploma de Nutrição", "Diploma de Medicina Veterinária",
  "Diploma de Design Gráfico", "Diploma de Educação Física", "Diploma de Turismo", "Diploma de Ciências Econômicas",
  "Diploma de Secretariado", "Diploma de Teologia", "Diploma de Zootecnia", "Diploma de Agronomia",
];

const LICENCIATURA_COURSES = [
  "Diploma de Pedagogia", "Diploma de Letras", "Diploma de Matemática", "Diploma de História",
  "Diploma de Geografia", "Diploma de Biologia", "Diploma de Física", "Diploma de Química",
  "Diploma de Educação Física", "Diploma de Artes", "Diploma de Filosofia", "Diploma de Sociologia",
  "Diploma de Ciências", "Diploma de Música", "Diploma de Teatro", "Diploma de Dança",
  "Diploma de Língua Portuguesa", "Diploma de Língua Inglesa", "Diploma de Língua Espanhola", "Diploma de Libras",
  "Diploma de Educação Especial", "Diploma de Ciências da Religião", "Diploma de Informática", "Diploma de Computação",
];

const TECNOLOGO_COURSES = [
  "Diploma de Gestão de RH", "Diploma de Gestão Financeira", "Diploma de Marketing", "Diploma de Logística",
  "Diploma de Gestão Comercial", "Diploma de Processos Gerenciais", "Diploma de Gestão Pública", "Diploma de Gestão Hospitalar",
  "Diploma de Análise de Sistemas", "Diploma de Redes de Computadores", "Diploma de Banco de Dados", "Diploma de Desenvolvimento Web",
  "Diploma de Segurança da Informação", "Diploma de Sistemas para Internet", "Diploma de Jogos Digitais", "Diploma de Big Data",
  "Diploma de Design de Interiores", "Diploma de Design de Moda", "Diploma de Fotografia", "Diploma de Produção Audiovisual",
  "Diploma de Gastronomia", "Diploma de Estética e Cosmética", "Diploma de Radiologia", "Diploma de Segurança do Trabalho",
  "Diploma de Gestão Ambiental", "Diploma de Comércio Exterior", "Diploma de Negócios Imobiliários", "Diploma de Eventos",
];

const TECNICO_COURSES = [
  "Técnico em Enfermagem", "Técnico em Radiologia", "Técnico em Farmácia", "Técnico em Laboratório",
  "Técnico em Segurança do Trabalho", "Técnico em Edificações", "Técnico em Eletrotécnica", "Técnico em Mecânica",
  "Técnico em Informática", "Técnico em Administração", "Técnico em Contabilidade", "Técnico em Logística",
  "Técnico em Marketing", "Técnico em Recursos Humanos", "Técnico em Secretariado", "Técnico em Vendas",
  "Técnico em Nutrição e Dietética", "Técnico em Estética", "Técnico em Massoterapia", "Técnico em Podologia",
  "Técnico em Prótese Dentária", "Técnico em Saúde Bucal", "Técnico em Veterinária", "Técnico em Agropecuária",
  "Técnico em Meio Ambiente", "Técnico em Química", "Técnico em Automação Industrial", "Técnico em Eletrônica",
];

const CategoryIcon = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const CourseList = ({ courses, title }: { courses: string[]; title: string }) => {
  const columns = 4;
  const itemsPerColumn = Math.ceil(courses.length / columns);
  const columnArrays = Array.from({ length: columns }, (_, i) =>
    courses.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
  );

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-heading">
          Diplomas de <span className="text-primary">{title}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {columnArrays.map((column, colIndex) => (
            <div key={colIndex} className="space-y-2">
              {column.map((course, index) => (
                <a
                  key={index}
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-primary hover:text-primary/80 hover:underline transition-colors py-1"
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
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80')] bg-cover bg-center opacity-10" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-4">EAD CURSOS NACIONAL</p>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-6 font-heading">
                Cursos <span className="text-gold">Disponíveis</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                A equipe EAD CURSOS NACIONAL foi criada para realizar o seu sonho de ter o seu diploma de conclusão superior. 
                Trabalhamos a mais de 10 anos em virtude de você, para conseguirmos o melhor e mais eficiente resultado 
                no processo de comprar seu diploma superior com maior segurança e transparência!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Fale Conosco
                  </a>
                </Button>
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Escolher o estado
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Icons */}
        <section className="py-12 bg-gradient-to-b from-primary to-primary/90 -mt-1">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              <CategoryIcon 
                icon={GraduationCap} 
                title="Bacharelado" 
                description="Cursos de graduação de 4 a 6 anos com formação completa e ampla." 
              />
              <CategoryIcon 
                icon={BookOpen} 
                title="Licenciatura" 
                description="Formação para lecionar em escolas de ensino fundamental e médio." 
              />
              <CategoryIcon 
                icon={Monitor} 
                title="Tecnólogo" 
                description="Cursos superiores de curta duração focados no mercado de trabalho." 
              />
              <CategoryIcon 
                icon={Wrench} 
                title="Técnico" 
                description="Formação profissional técnica para diversas áreas de atuação." 
              />
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold mb-4 font-heading">
              Confira todos os Cursos <span className="text-primary">Reconhecidos pelo MEC</span> ofertados pela nossa equipe
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Confira os valores, prazos e condições para o curso escolhido. Trabalhamos apenas com cursos reconhecidos pelo MEC. 
              Aqui, você não paga nada adiantado! Garantimos a emissão e entrega segura do seu diploma ou certificado — 100% autêntico, 
              reconhecido pelo MEC e publicado no Diário Oficial, profissional com sua confirmação DIGITAL!
            </p>
          </div>
        </section>

        {/* Course Lists */}
        <CourseList courses={BACHARELADO_COURSES} title="Bacharelado" />
        
        <div className="bg-primary/5">
          <CourseList courses={LICENCIATURA_COURSES} title="Licenciatura" />
        </div>
        
        <CourseList courses={TECNOLOGO_COURSES} title="Tecnólogo" />
        
        <div className="bg-primary/5">
          <CourseList courses={TECNICO_COURSES} title="Técnico" />
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 font-heading">
              TENHA SEU DIPLOMA HOJE MESMO!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-3">
                  <DollarSign className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-bold mb-1">Diferencial Competitivo</h3>
                <p className="text-sm text-primary-foreground/80">Preços acessíveis e condições especiais</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-3">
                  <Star className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-bold mb-1">Retorno Financeiro</h3>
                <p className="text-sm text-primary-foreground/80">Investimento que vale a pena</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-bold mb-1">Qualificação</h3>
                <p className="text-sm text-primary-foreground/80">Diploma reconhecido pelo MEC</p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold"
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
