import { Link } from "react-router-dom";
import { Menu, X, MessageCircle, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSiteConfigContext } from "@/contexts/SiteConfigContext";
import WhatsAppContactDialog from "@/components/WhatsAppContactDialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { bannerText } = useSiteConfigContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Cursos", href: "/cursos" },
    { name: "Estados", href: "/estados" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Banner with shimmer effect */}
      <div className="relative bg-gradient-to-r from-primary via-primary to-navy py-2.5 text-center text-sm font-medium overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" 
             style={{ backgroundSize: '200% 100%' }} />
        <div className="relative flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-gold animate-pulse" />
          <span className="text-primary-foreground">{bannerText}</span>
          <Sparkles className="w-4 h-4 text-gold animate-pulse" />
        </div>
      </div>

      {/* Main Header with glass effect */}
      <div className={`transition-all duration-500 ${
        isScrolled 
          ? 'bg-card/80 backdrop-blur-xl shadow-lg border-b border-border/50' 
          : 'bg-card/95 backdrop-blur-md border-b border-border'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo with glow effect */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <span className="text-xl md:text-2xl font-bold text-primary font-heading transition-all duration-300 group-hover:text-primary/80">
                  EAD Cursos
                </span>
                <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-foreground font-heading">Nacional</span>
            </Link>

            {/* Desktop Navigation with hover effects */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="relative text-foreground/80 hover:text-primary font-medium transition-all duration-300 py-2 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA Button with glow effect */}
            <div className="hidden md:block">
              <Button
                onClick={() => setDialogOpen(true)}
                className="relative bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-semibold flex items-center gap-2 overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-whatsapp/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <MessageCircle size={18} className="relative z-10" />
                <span className="relative z-10">Fale Conosco</span>
              </Button>
            </div>

            {/* Mobile Menu Button with animation */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu de navegação"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-foreground transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
                <span className={`absolute block h-0.5 w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-3'}`} />
                <span className={`absolute block h-0.5 w-6 bg-foreground transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with slide animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2 bg-card/95 backdrop-blur-xl border-t border-border/50">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-foreground/80 hover:text-primary font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/5 transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              onClick={() => {
                setDialogOpen(true);
                setIsMenuOpen(false);
              }}
              className={`bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-semibold w-full flex items-center justify-center gap-2 mt-2 transform transition-all duration-300 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <MessageCircle size={18} />
              Fale Conosco
            </Button>
          </nav>
        </div>
      </div>
      <WhatsAppContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </header>
  );
};

export default Header;