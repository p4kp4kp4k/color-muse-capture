import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Phone, Mail, Clock, MessageCircle, Wallet } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* CTA Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
            Tenha sua documentação hoje mesmo!
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Entre em contato com nossa equipe e tire todas as suas dúvidas.
            Atendimento 24 horas pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-card/90 transition-colors"
          >
            <MessageCircle size={24} />
            Chamar no WhatsApp
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-heading">
              <span className="text-primary">Central</span> do Diploma
            </h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Somos especializados em documentação acadêmica. Nossa missão é
              facilitar o acesso à educação de qualidade para todos os
              brasileiros.
            </p>
            <div className="flex items-center gap-4">
              <Wallet className="w-8 h-8 text-primary-foreground/60" />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg/80px-Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg.png" 
                alt="PIX" 
                className="h-5 opacity-80"
              />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 font-heading">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  Cursos Disponíveis
                </Link>
              </li>
              <li>
                <Link to="/estados" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  Escolha seu Estado
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 font-heading">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp 24h
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>contato@centraldodiploma.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} />
                <span>Seg. à Sáb. 8:00h às 21:00h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Policies & Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/60">
              <Link to="/politica-privacidade" className="hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <span className="hidden md:inline">|</span>
              <Link to="/termos-uso" className="hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <span className="hidden md:inline">|</span>
              <Link to="/politica-reembolso" className="hover:text-primary transition-colors">
                Política de Reembolso
              </Link>
            </div>
            <p className="text-primary-foreground/60 text-sm text-center">
              © 2025 Central do Diploma. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;