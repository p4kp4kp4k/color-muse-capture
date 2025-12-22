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
import { CheckCircle2, AlertTriangle, X } from "lucide-react";
import { useSiteConfigContext } from "@/contexts/SiteConfigContext";

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
  const { getWhatsAppLink } = useSiteConfigContext();

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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-bold text-center text-foreground">
            Documentação Completa - Valores sob Consulta
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 grid md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Warning Box */}
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-orange-700">
                    ATENÇÃO - VALOR VARIÁVEL
                  </h3>
                  <p className="text-sm text-orange-600">
                    O valor final pode variar conforme o curso e a instituição
                    escolhida.
                  </p>
                </div>
              </div>
            </div>

            {/* Documentation */}
            <div className="bg-muted/30 border border-border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Documentação Completa
                </h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                <li>• Diploma</li>
                <li>• Declaração de Conclusão</li>
                <li>• Histórico Escolar (com notas e carga horária)</li>
                <li>• Certificado de Conclusão</li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-green-700">
                  Benefícios e Garantias
                </h3>
              </div>
              <p className="text-sm text-green-600 ml-7">
                Válido para todos os fins legais: participação em concursos
                públicos, processos seletivos, registros em conselhos
                profissionais, entre outras finalidades oficiais
              </p>
            </div>

            {/* Payment */}
            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-purple-700">
                    O pagamento pode ser feito por meio tradicional:
                  </h3>
                  <p className="text-sm text-purple-600">
                    Pix, transferência bancária, boleto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Institutions */}
            <div className="bg-muted/30 border border-border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Instituições disponíveis:
                </h3>
              </div>
              <p className="text-sm text-muted-foreground ml-7">
                Uniasselvi, Unicesumar, Estácio, Uninter, Anhanguera, Mackenzie,
                UFRN, UNIP, Unisul, Cruzeiro do Sul, entre outras.{" "}
                <span className="text-primary font-medium">
                  Verificar instituição e valores de acordo com o curso
                  desejado.
                </span>
              </p>
            </div>

            {/* Security */}
            <div className="bg-muted/30 border border-border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Segurança e credibilidade:
                </h3>
              </div>
              <p className="text-sm text-muted-foreground ml-7">
                Documentação chancelada, autenticada e homologada com
                reconhecimento oficial pelo MEC.
              </p>
            </div>

            {/* Form */}
            <div className="bg-muted/30 border border-border p-4 rounded-lg space-y-4">
              <h3 className="font-semibold text-foreground">
                Dados para Atendimento
              </h3>

              <div className="space-y-2">
                <Label htmlFor="nome">Nome completo *</Label>
                <Input
                  id="nome"
                  placeholder="Digite seu nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="curso">Nome exato do curso *</Label>
                <Input
                  id="curso"
                  placeholder="Ex: Técnico em Enfermagem, Técnico em Informática para Int"
                  value={curso}
                  onChange={(e) => setCurso(e.target.value)}
                  className="bg-background"
                />
              </div>

              {/* Important Notice */}
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-700">IMPORTANTE!</h4>
                    <div className="text-sm space-y-2 mt-2">
                      <p className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          Respostas genéricas como{" "}
                          <span className="text-red-500 font-medium">
                            "Qualquer técnico"
                          </span>
                          ,{" "}
                          <span className="text-red-500 font-medium">
                            "Curso na área de saúde"
                          </span>{" "}
                          NÃO serão aceitas.
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          Seja claro e específico:{" "}
                          <span className="text-green-600 font-medium">
                            "Técnico em Enfermagem"
                          </span>
                          ,{" "}
                          <span className="text-green-600 font-medium">
                            "Técnico em Informática para Internet"
                          </span>
                          .
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 pt-0 grid md:grid-cols-2 gap-4">
          <Button
            onClick={() => handleSubmit(true)}
            disabled={!nome.trim() || !curso.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold"
          >
            Sim! Tenho real interesse em atendimento
          </Button>
          <Button
            onClick={() => handleSubmit(false)}
            disabled={!nome.trim() || !curso.trim()}
            variant="outline"
            className="border-2 border-destructive text-destructive hover:bg-destructive/10 py-6 text-base font-semibold"
          >
            Não. Achei o valor muito alto
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppContactDialog;
