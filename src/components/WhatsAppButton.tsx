import { useState } from "react";
import { MessageCircle } from "lucide-react";
import WhatsAppContactDialog from "@/components/WhatsAppContactDialog";

const WhatsAppButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setDialogOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </button>
      <WhatsAppContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default WhatsAppButton;