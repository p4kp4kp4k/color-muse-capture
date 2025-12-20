import { WHATSAPP_LINK } from "@/lib/constants";

interface StateCardProps {
  name: string;
  abbr: string;
  flagUrl: string;
}

const StateCard = ({ name, abbr, flagUrl }: StateCardProps) => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card hover:bg-primary border border-border rounded-xl p-4 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <img
        src={flagUrl}
        alt={`Bandeira de ${name}`}
        className="w-16 h-12 object-cover rounded shadow-md"
      />
      <div className="text-center">
        <h3 className="font-semibold text-foreground group-hover:text-primary-foreground">
          {name}
        </h3>
        <span className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
          {abbr}
        </span>
      </div>
    </a>
  );
};

export default StateCard;