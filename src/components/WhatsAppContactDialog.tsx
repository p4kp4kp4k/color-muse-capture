import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, AlertCircle, X, FileText, Shield, CreditCard, Building2, MessageCircle } from "lucide-react";

interface WhatsAppContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  courseName?: string;
}

const WhatsAppContactDialog = ({
  open,
  onOpenChange,
  courseName = "",
}: WhatsAppContactDialogProps) => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState(courseName);

  const handleSubmit = (interested: boolean) => {
    if (!nome.trim() || !curso.trim()) return;

    const message = interested
      ? `Olá, meu nome é ${nome}. Tenho interesse em adquirir a documentação do curso: ${curso}`
      : `Olá, meu nome é ${nome}. Gostaria de saber mais sobre valores para o curso: ${curso}`;

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=447785369424&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
    onOpenChange(false);
    setNome("");
    setCurso("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto p-0 bg-background border-border shadow-2xl rounded-xl">
        {/* Header */}
        <DialogHeader className="p-4 sm:p-6 pb-0 border-b border-border/50">
          <DialogTitle className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
            Documentação Completa
          </DialogTitle>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Valores sob consulta conforme curso e instituição
          </p>
        </DialogHeader>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
          {/* Warning */}
          <div className="flex items-start gap-3 p-3 sm:p-4 bg-muted/40 border border-border rounded-lg">
            <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-medium text-foreground">Valor variável</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                O valor final pode variar conforme o curso e instituição escolhida.
              </p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Documentation */}
            <div className="p-3 sm:p-4 border border-border rounded-lg space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-foreground" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Documentação</span>
              </div>
              <ul className="text-xs text-muted-foreground space-y-1.5 ml-6">
                <li className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-foreground" />
                  Diploma
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-foreground" />
                  Declaração de Conclusão
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-foreground" />
                  Histórico Escolar
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-foreground" />
                  Certificado de Conclusão
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="p-3 sm:p-4 border border-border rounded-lg space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-foreground" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Garantias</span>
              </div>
              <p className="text-xs text-muted-foreground ml-6">
                Válido para concursos públicos, processos seletivos e registros em conselhos profissionais.
              </p>
            </div>

            {/* Payment */}
            <div className="p-3 sm:p-4 border border-border rounded-lg space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-foreground" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Pagamento</span>
              </div>
              <p className="text-xs text-muted-foreground ml-6">
                Pix, transferência bancária ou boleto.
              </p>
            </div>

            {/* Institutions */}
            <div className="p-3 sm:p-4 border border-border rounded-lg space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-foreground" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Instituições</span>
              </div>
              <p className="text-xs text-muted-foreground ml-6">
                Uniasselvi, Unicesumar, Estácio, Anhanguera, Mackenzie e outras.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-3 sm:space-y-4 pt-2">
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="nome" className="text-xs sm:text-sm font-medium text-foreground">
                Nome completo
              </Label>
              <Input
                id="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="h-10 sm:h-11 text-sm bg-background border-border focus:border-foreground/30 focus:ring-foreground/10"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="curso" className="text-xs sm:text-sm font-medium text-foreground">
                Nome do curso
              </Label>
              <Input
                id="curso"
                placeholder="Ex: Técnico em Enfermagem, Direito, Gestão de RH, MBA em Gestão"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
                className="h-10 sm:h-11 text-sm bg-background border-border focus:border-foreground/30 focus:ring-foreground/10"
              />
              <div className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 mt-1">
                <p><span className="font-medium">Técnico:</span> Enfermagem, Radiologia, Segurança do Trabalho</p>
                <p><span className="font-medium">Graduação:</span> Direito, Medicina, Engenharia Civil</p>
                <p><span className="font-medium">Tecnólogo:</span> Gestão de RH, Marketing, Análise de Sistemas</p>
                <p><span className="font-medium">Pós:</span> MBA em Gestão, Docência, Direito Tributário</p>
              </div>
            </div>

            {/* Notice */}
            <div className="flex items-start gap-2 p-3 bg-muted/30 border border-border rounded-lg">
              <AlertCircle className="h-3.5 w-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div className="text-xs text-muted-foreground space-y-1">
                <p className="flex items-center gap-1.5">
                  <X className="h-3 w-3 text-destructive" />
                  <span>Evite respostas genéricas como "Qualquer técnico"</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Check className="h-3 w-3 text-foreground" />
                  <span>Seja específico: "Técnico em Enfermagem"</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 sm:p-6 pt-0 flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button
            onClick={() => handleSubmit(true)}
            disabled={!nome.trim() || !curso.trim()}
            className="flex-1 h-11 sm:h-12 text-xs sm:text-sm font-medium bg-foreground hover:bg-foreground/90 text-background transition-all disabled:opacity-40"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Tenho interesse
          </Button>
          <Button
            onClick={() => handleSubmit(false)}
            disabled={!nome.trim() || !curso.trim()}
            variant="outline"
            className="flex-1 h-11 sm:h-12 text-xs sm:text-sm font-medium border-border text-foreground hover:bg-muted/50 transition-all disabled:opacity-40"
          >
            Saber valores
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppContactDialog;
