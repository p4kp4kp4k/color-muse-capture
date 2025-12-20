import { WHATSAPP_LINK } from "@/lib/constants";

interface CourseCardProps {
  name: string;
  icon: string;
  category: string;
}

const CourseCard = ({ name, icon, category }: CourseCardProps) => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card hover:bg-primary hover:text-primary-foreground border border-border rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
        {category}
      </p>
    </a>
  );
};

export default CourseCard;