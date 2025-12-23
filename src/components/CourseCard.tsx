import { useState } from "react";
import WhatsAppContactDialog from "@/components/WhatsAppContactDialog";
import { GraduationCap } from "lucide-react";

interface CourseCardProps {
  name: string;
  category: string;
}

const COURSE_IMAGES: Record<string, string> = {
  // Educação
  "Pedagogia": "/images/courses/pedagogia.jpg",
  "Letras": "/images/courses/letras.jpg",
  "Educação Física": "/images/courses/educacao-fisica.jpg",
  "História": "/images/courses/historia.jpg",
  "Geografia": "/images/courses/geografia.jpg",
  "Matemática": "/images/courses/matematica.jpg",
  "Física": "/images/courses/fisica.jpg",
  "Química": "/images/courses/quimica.jpg",
  "Biologia": "/images/courses/biologia.jpg",
  "Artes": "/images/courses/artes.jpg",
  
  // Saúde
  "Enfermagem": "/images/courses/enfermagem.jpg",
  "Farmácia": "/images/courses/farmacia.jpg",
  "Fisioterapia": "/images/courses/fisioterapia.jpg",
  "Nutrição": "/images/courses/nutricao.jpg",
  "Psicologia": "/images/courses/psicologia.jpg",
  "Odontologia": "/images/courses/odontologia.jpg",
  "Biomedicina": "/images/courses/biomedicina.jpg",
  "Medicina Veterinária": "/images/courses/veterinaria.jpg",
  
  // Negócios
  "Administração": "/images/courses/administracao.jpg",
  "Contabilidade": "/images/courses/contabilidade.jpg",
  "Economia": "/images/courses/economia.jpg",
  "Marketing": "/images/courses/marketing.jpg",
  "Recursos Humanos": "/images/courses/rh.jpg",
  "Logística": "/images/courses/logistica.jpg",
  "Gestão Financeira": "/images/courses/gestao-financeira.jpg",
  "Comércio Exterior": "/images/courses/comercio-exterior.jpg",
  
  // Tecnologia
  "Sistemas de Informação": "/images/courses/sistemas-info.jpg",
  "Ciência da Computação": "/images/courses/ciencia-computacao.jpg",
  "Engenharia de Software": "/images/courses/eng-software.jpg",
  "Análise de Sistemas": "/images/courses/analise-sistemas.jpg",
  "Redes de Computadores": "/images/courses/redes.jpg",
  "Banco de Dados": "/images/courses/banco-dados.jpg",
  
  // Engenharias
  "Engenharia Civil": "/images/courses/eng-civil.jpg",
  "Engenharia Elétrica": "/images/courses/eng-eletrica.jpg",
  "Engenharia Mecânica": "/images/courses/eng-mecanica.jpg",
  "Engenharia de Produção": "/images/courses/eng-producao.jpg",
  "Engenharia Ambiental": "/images/courses/eng-ambiental.jpg",
  "Engenharia Química": "/images/courses/quimica.jpg",
  
  // Direito e Humanas
  "Direito": "/images/courses/direito.jpg",
  "Serviço Social": "/images/courses/servico-social.jpg",
  "Sociologia": "/images/courses/sociologia.jpg",
  "Filosofia": "/images/courses/filosofia.jpg",
  "Jornalismo": "/images/courses/jornalismo.jpg",
  "Publicidade": "/images/courses/publicidade.jpg",
  "Relações Públicas": "/images/courses/relacoes-publicas.jpg",
};

const DEFAULT_IMAGE = "/placeholder.svg";

const CourseCard = ({ name, category }: CourseCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const imageUrl = COURSE_IMAGES[name] || DEFAULT_IMAGE;
  
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    setHasError(true);
    const img = e.currentTarget;

    if (img.dataset.fallbackApplied === "true") return;

    img.dataset.fallbackApplied = "true";
    img.src = DEFAULT_IMAGE;
  };
  
  return (
    <>
      <button
        onClick={() => setDialogOpen(true)}
        className="group perspective-1000 w-full text-left"
      >
        <div className="relative transform-gpu transition-all duration-500 group-hover:rotate-y-3 group-hover:-rotate-x-3 group-hover:scale-105">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-gold to-neon-purple rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500" />
          
          <div className="relative futuristic-card overflow-hidden">
            <div className="relative h-36 overflow-hidden bg-muted">
              {/* Skeleton loader */}
              {isLoading && (
                <div className="absolute inset-0 bg-muted animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted-foreground/10 to-muted shimmer" />
                </div>
              )}
              
              <img 
                src={imageUrl} 
                alt={name}
                loading="lazy"
                decoding="async"
                onLoad={handleImageLoad}
                onError={handleImageError}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Category badge */}
              <span className="absolute bottom-3 left-3 text-xs font-bold text-navy bg-gold px-3 py-1.5 rounded-full shadow-lg">
                {category}
              </span>
              
              {/* Floating icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-50">
                <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
              </div>
            </div>
            
            <div className="p-5 text-center">
              <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors duration-300">
                {name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">Reconhecido pelo MEC</p>
            </div>
            
            {/* Bottom line animation */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        </div>
      </button>
      <WhatsAppContactDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
        courseName={name}
      />
    </>
  );
};

export default CourseCard;