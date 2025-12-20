import { WHATSAPP_LINK } from "@/lib/constants";

interface CourseCardProps {
  name: string;
  category: string;
}

const CATEGORY_IMAGES: Record<string, string> = {
  "Educação": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
  "Saúde": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
  "Negócios": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
  "Tecnologia": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
  "Engenharias": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  "Direito e Humanas": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
};

const CourseCard = ({ name, category }: CourseCardProps) => {
  const imageUrl = CATEGORY_IMAGES[category] || CATEGORY_IMAGES["Educação"];
  
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative h-32 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={category}
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