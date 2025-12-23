import { useState } from "react";
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
        className="group futuristic-card p-5 flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2 w-full relative overflow-hidden"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 to-neon-purple/0 group-hover:from-neon-cyan/10 group-hover:to-neon-purple/10 transition-all duration-500" />
        
        {/* Flag with 3D effect */}
        <div className="relative transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-gold/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={flagUrl}
            alt={`Bandeira de ${name}`}
            className="relative w-16 h-12 object-cover rounded shadow-lg"
          />
        </div>
        
        <div className="text-center relative z-10">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <span className="text-sm text-muted-foreground group-hover:text-neon-cyan transition-colors duration-300">
            {abbr}
          </span>
        </div>
        
        {/* Bottom line animation */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </button>
      <WhatsAppContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default StateCard;