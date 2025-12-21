import { WHATSAPP_LINK } from "@/lib/constants";

interface CourseCardProps {
  name: string;
  category: string;
}

const COURSE_IMAGES: Record<string, string> = {
  // Educação
  "Pedagogia": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
  "Letras": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
  "Educação Física": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
  "História": "https://images.unsplash.com/photo-1461360370896-922624d12a74?w=400&h=300&fit=crop",
  "Geografia": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop",
  "Matemática": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
  "Física": "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=300&fit=crop",
  "Química": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
  "Biologia": "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=300&fit=crop",
  "Artes": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
  
  // Saúde
  "Enfermagem": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
  "Farmácia": "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop",
  "Fisioterapia": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
  "Nutrição": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
  "Psicologia": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
  "Odontologia": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
  "Biomedicina": "https://images.unsplash.com/photo-1579165466741-7f35e4755182?w=400&h=300&fit=crop",
  "Medicina Veterinária": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400&h=300&fit=crop",
  
  // Negócios
  "Administração": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
  "Contabilidade": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
  "Economia": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
  "Marketing": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop",
  "Recursos Humanos": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
  "Logística": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  "Gestão Financeira": "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=400&h=300&fit=crop",
  "Comércio Exterior": "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&h=300&fit=crop",
  
  // Tecnologia
  "Sistemas de Informação": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  "Ciência da Computação": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
  "Engenharia de Software": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
  "Análise de Sistemas": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
  "Redes de Computadores": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
  "Banco de Dados": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop",
  
  // Engenharias
  "Engenharia Civil": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
  "Engenharia Elétrica": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
  "Engenharia Mecânica": "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=400&h=300&fit=crop",
  "Engenharia de Produção": "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=300&fit=crop",
  "Engenharia Ambiental": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
  "Engenharia Química": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
  
  // Direito e Humanas
  "Direito": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
  "Serviço Social": "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&h=300&fit=crop",
  "Sociologia": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
  "Filosofia": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
  "Jornalismo": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop",
  "Publicidade": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  "Relações Públicas": "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
};

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop";

const CourseCard = ({ name, category }: CourseCardProps) => {
  const imageUrl = COURSE_IMAGES[name] || DEFAULT_IMAGE;
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = DEFAULT_IMAGE;
  };
  
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative h-32 overflow-hidden bg-muted">
        <img 
          src={imageUrl} 
          alt={name}
          loading="lazy"
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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