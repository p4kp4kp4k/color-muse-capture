import { useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

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
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative h-32 overflow-hidden bg-muted">
        {/* Skeleton loader */}
        {isLoading && (
          <div className="absolute inset-0 bg-muted animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted-foreground/10 to-muted animate-[shimmer_1.5s_infinite]" />
          </div>
        )}
        
        <img 
          src={imageUrl} 
          alt={name}
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute bottom-2 left-3 text-xs font-medium text-white/90 bg-primary/80 px-2 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
      </div>
    </a>
  );
};

export default CourseCard;
