import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import WhatsAppContactDialog from "@/components/WhatsAppContactDialog";

const WhatsAppButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip */}
        <div className={`bg-card text-foreground px-4 py-2.5 rounded-xl shadow-xl border border-border/50 text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
          isHovered ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse" />
            Fale conosco agora!
          </div>
        </div>
        
        {/* Button with enhanced effects */}
        <button
          onClick={() => setDialogOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-whatsapp to-whatsapp/90 text-whatsapp-foreground rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-whatsapp/50"
          aria-label="Contato via WhatsApp"
        >
          {/* Animated pulse rings */}
          <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-25" />
          <span className="absolute inset-[-4px] rounded-full border-2 border-whatsapp/30 animate-pulse" />
          <span className="absolute inset-[-8px] rounded-full border border-whatsapp/20 animate-pulse" style={{ animationDelay: '0.3s' }} />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-whatsapp/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          
          {/* Icon with animation */}
          <MessageCircle 
            size={28} 
            fill="currentColor" 
            className="relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" 
          />
        </button>
      </div>
      <WhatsAppContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default WhatsAppButton;