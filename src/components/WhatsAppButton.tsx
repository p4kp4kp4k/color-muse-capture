import { MessageCircle } from "lucide-react";
import { useSiteConfigContext } from "@/contexts/SiteConfigContext";

const WhatsAppButton = () => {
  const { getWhatsAppLink } = useSiteConfigContext();
  const whatsappLink = getWhatsAppLink();

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;