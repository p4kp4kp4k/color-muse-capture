import { WHATSAPP_LINK } from "@/lib/constants";
import { GraduationCap, Heart, Briefcase, Monitor, Wrench, Scale } from "lucide-react";

interface CourseCardProps {
  name: string;
  category: string;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Saúde": Heart,
  "Gestão": Briefcase,
  "Tecnologia": Monitor,
  "Engenharia": Wrench,
  "Direito": Scale,
};

const CourseCard = ({ name, category }: CourseCardProps) => {
  const IconComponent = CATEGORY_ICONS[category] || GraduationCap;
  
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card hover:bg-primary hover:text-primary-foreground border border-border rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="mb-3 flex justify-center">
        <IconComponent className="w-10 h-10 text-primary group-hover:text-primary-foreground" />
      </div>
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
        {category}
      </p>
    </a>
  );
};

export default CourseCard;