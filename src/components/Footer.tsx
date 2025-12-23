import { useState } from "react";
import { Link } from "react-router-dom";
import { useSiteConfigContext } from "@/contexts/SiteConfigContext";
import { Phone, Clock, MessageCircle, Wallet, ArrowRight, Sparkles } from "lucide-react";
import WhatsAppContactDialog from "@/components/WhatsAppContactDialog";

const Footer = () => {
  const { siteName } = useSiteConfigContext();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <footer className="bg-navy text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-2xl" />
      </div>

      {/* CTA Section with 3D effect */}
      <div className="relative bg-gradient-to-r from-primary via-primary to-navy py-16 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" 
             style={{ backgroundSize: '200% 100%' }} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium">Atendimento 24 horas</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-heading animate-fade-in">
            Tenha sua documentação <span className="text-gold">hoje mesmo!</span>
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg">
            Entre em contato com nossa equipe e tire todas as suas dúvidas.
          </p>
          <button
            onClick={() => setDialogOpen(true)}
            className="group inline-flex items-center gap-3 bg-card text-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-card/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-whatsapp/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <MessageCircle size={24} className="relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Chamar no WhatsApp</span>
            <ArrowRight className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Footer Content with glass cards */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
              <span className="text-primary">EAD Cursos</span> Nacional
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Somos especializados em documentação acadêmica. Nossa missão é
              facilitar o acesso à educação de qualidade para todos os
              brasileiros.
            </p>
            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 w-fit">
              <Wallet className="w-8 h-8 text-gold" />
              <div>
                <span className="text-xs text-primary-foreground/60 block">Forma de pagamento</span>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg/80px-Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg.png" 
                  alt="PIX" 
                  className="h-5 mt-1"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6 font-heading text-lg">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Início" },
                { to: "/cursos", label: "Cursos Disponíveis" },
                { to: "/estados", label: "Escolha seu Estado" },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="group flex items-center gap-2 text-primary-foreground/80 hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 font-heading text-lg">Contato</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => setDialogOpen(true)}
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-whatsapp transition-colors group"
                >
                  <div className="w-10 h-10 bg-whatsapp/20 rounded-lg flex items-center justify-center group-hover:bg-whatsapp/30 transition-colors">
                    <Phone size={18} className="text-whatsapp" />
                  </div>
                  <span>WhatsApp 24h</span>
                </button>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                  <Clock size={18} className="text-gold" />
                </div>
                <span>Seg. à Sáb. 8:00h às 21:00h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Policies & Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-primary-foreground/60">
              {[
                { to: "/politica-privacidade", label: "Política de Privacidade" },
                { to: "/termos-uso", label: "Termos de Uso" },
                { to: "/politica-cookies", label: "Política de Cookies" },
                { to: "/faq", label: "FAQ" },
              ].map((link, index) => (
                <span key={link.to} className="flex items-center gap-4">
                  <Link to={link.to} className="hover:text-primary transition-colors hover:underline">
                    {link.label}
                  </Link>
                  {index < 3 && <span className="hidden md:inline text-primary-foreground/30">|</span>}
                </span>
              ))}
              <Link to="/admin-login" className="hover:text-primary transition-colors opacity-30 hover:opacity-100">
                ●
              </Link>
            </div>
            <p className="text-primary-foreground/50 text-sm text-center">
              © 2025 {siteName}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
      <WhatsAppContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </footer>
  );
};

export default Footer;