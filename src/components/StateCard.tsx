import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import WhatsAppContactDialog from "@/components/WhatsAppContactDialog";

interface StateCardProps {
  name: string;
  abbr: string;
  flagUrl: string;
}

const StateCard = ({ name, abbr, flagUrl }: StateCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setDialogOpen(true)}
        className="group relative bg-card hover:bg-gradient-to-br hover:from-primary hover:to-primary/90 border border-border/50 rounded-2xl p-4 md:p-5 flex flex-col items-center gap-3 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 w-full overflow-hidden"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
        
        {/* Flag container with 3D effect */}
        <div className="relative w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-1">
          <img
            src={flagUrl}
            alt={`Bandeira de ${name}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Overlay on flag */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* State info */}
        <div className="relative text-center z-10">
          <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary-foreground transition-colors duration-300">
            {name}
          </h3>
          <span className="text-xs text-muted-foreground group-hover:text-primary-foreground/80 font-medium transition-colors duration-300">
            {abbr}
          </span>
        </div>
        
        {/* Hover indicator */}
        <div className="relative flex items-center gap-1.5 text-xs font-medium text-primary group-hover:text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <MapPin className="w-3 h-3" />
          <span>Falar agora</span>
          <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </button>
      <WhatsAppContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default StateCard;