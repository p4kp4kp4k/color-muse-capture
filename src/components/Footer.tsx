import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* CTA Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
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
            📱 Chamar no WhatsApp
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Central</span> do Diploma
            </h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Somos especializados em documentação acadêmica. Nossa missão é
              facilitar o acesso à educação de qualidade para todos os
              brasileiros.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-2xl">💳</span>
              <span className="text-2xl">📱</span>
              <span className="text-2xl">🏦</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
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
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <span>📱</span>
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
                <span>📧</span>
                <span>contato@centraldodiploma.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Atendimento 24 horas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© 2024 Central do Diploma. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;