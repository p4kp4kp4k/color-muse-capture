import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, AlertCircle, X, FileText, Shield, CreditCard, Building2, MessageCircle, GraduationCap } from "lucide-react";
import { trackWhatsAppClick } from "@/components/Analytics";

interface WhatsAppContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  courseName?: string;
}

const NIVEIS = [
  { value: "graduacao-bacharelado", label: "Superior – Graduação (Bacharelado)" },
  { value: "graduacao-licenciatura", label: "Superior – Licenciatura" },
  { value: "graduacao-tecnologo", label: "Superior – Tecnólogo" },
  { value: "tecnico", label: "Técnico" },
  { value: "pos-especializacao", label: "Pós-Graduação Lato Sensu (Especialização / MBA)" },
  { value: "pos-mestrado", label: "Pós-Graduação Stricto Sensu – Mestrado" },
  { value: "pos-doutorado", label: "Pós-Graduação Stricto Sensu – Doutorado" },
];

const NIVEL_EXAMPLES: Record<string, { placeholder: string; examples: string; avoidList: string[]; specificList: string[] }> = {
  "graduacao-bacharelado": {
    placeholder: "Ex: Direito, Medicina, Enfermagem, Engenharia Civil",
    examples: "Direito, Medicina, Enfermagem, Engenharia Civil, Psicologia, Administração, Arquitetura",
    avoidList: [
      '"Qualquer graduação"',
      '"Algum bacharelado"',
      '"Curso de faculdade"',
      '"Graduação qualquer"',
    ],
    specificList: [
      '"Direito"',
      '"Medicina"',
      '"Engenharia Civil"',
      '"Psicologia"',
      '"Enfermagem"',
    ],
  },
  "graduacao-licenciatura": {
    placeholder: "Ex: Pedagogia, Matemática, Letras, História",
    examples: "Pedagogia, Matemática, Letras, História, Geografia, Educação Física, Biologia",
    avoidList: [
      '"Qualquer licenciatura"',
      '"Alguma licenciatura"',
      '"Curso para professor"',
      '"Licenciatura qualquer"',
    ],
    specificList: [
      '"Pedagogia"',
      '"Matemática"',
      '"Letras - Português"',
      '"História"',
      '"Educação Física"',
    ],
  },
  "graduacao-tecnologo": {
    placeholder: "Ex: Gestão de RH, Marketing, Análise de Sistemas, Logística",
    examples: "Gestão de RH, Marketing, Análise de Sistemas, Logística, Radiologia, Estética",
    avoidList: [
      '"Qualquer tecnólogo"',
      '"Algum curso tecnológico"',
      '"Tecnologia qualquer"',
      '"Curso técnico superior"',
    ],
    specificList: [
      '"Gestão de RH"',
      '"Marketing"',
      '"Análise e Desenvolvimento de Sistemas"',
      '"Logística"',
      '"Radiologia"',
    ],
  },
  "tecnico": {
    placeholder: "Ex: Técnico em Enfermagem, Técnico em Mecânica, Técnico em Segurança do Trabalho",
    examples: "Técnico em Enfermagem, Técnico em Mecânica, Técnico em Segurança do Trabalho, Técnico em Radiologia, Técnico em Informática",
    avoidList: [
      '"Qualquer técnico"',
      '"Algum curso técnico"',
      '"Técnico qualquer"',
      '"Curso profissionalizante"',
    ],
    specificList: [
      '"Técnico em Enfermagem"',
      '"Técnico em Mecânica"',
      '"Técnico em Segurança do Trabalho"',
      '"Técnico em Radiologia"',
      '"Técnico em Edificações"',
    ],
  },
  "pos-especializacao": {
    placeholder: "Ex: MBA em Gestão Empresarial, Especialização em Docência, MBA em Finanças",
    examples: "MBA em Gestão Empresarial, Especialização em Docência do Ensino Superior, MBA em Finanças, Especialização em Direito Tributário",
    avoidList: [
      '"Qualquer pós"',
      '"Alguma especialização"',
      '"MBA qualquer"',
      '"Pós-graduação genérica"',
    ],
    specificList: [
      '"MBA em Gestão Empresarial"',
      '"Especialização em Docência do Ensino Superior"',
      '"MBA em Finanças"',
      '"Especialização em Direito Tributário"',
      '"MBA em Marketing Digital"',
    ],
  },
  "pos-mestrado": {
    placeholder: "Ex: Mestrado em Administração, Mestrado em Educação, Mestrado em Direito",
    examples: "Mestrado em Administração, Mestrado em Educação, Mestrado em Direito, Mestrado em Engenharia, Mestrado em Psicologia",
    avoidList: [
      '"Qualquer mestrado"',
      '"Algum mestrado"',
      '"Mestrado qualquer"',
      '"Mestrado genérico"',
    ],
    specificList: [
      '"Mestrado em Administração"',
      '"Mestrado em Educação"',
      '"Mestrado em Direito"',
      '"Mestrado em Engenharia Civil"',
      '"Mestrado em Psicologia"',
    ],
  },
  "pos-doutorado": {
    placeholder: "Ex: Doutorado em Administração, Doutorado em Educação, Doutorado em Direito",
    examples: "Doutorado em Administração, Doutorado em Educação, Doutorado em Direito, Doutorado em Engenharia, Doutorado em Ciências da Saúde",
    avoidList: [
      '"Qualquer doutorado"',
      '"Algum doutorado"',
      '"Doutorado qualquer"',
      '"PhD genérico"',
    ],
    specificList: [
      '"Doutorado em Administração"',
      '"Doutorado em Educação"',
      '"Doutorado em Direito"',
      '"Doutorado em Engenharia"',
      '"Doutorado em Ciências da Saúde"',
    ],
  },
};

const DEFAULT_EXAMPLES = {
  placeholder: "Selecione o nível do curso primeiro",
  examples: "Selecione o nível acima para ver exemplos",
  avoidList: ['"Qualquer curso"', '"Alguma formação"', '"Curso qualquer"'],
  specificList: ['"Enfermagem"', '"Direito"', '"Gestão de RH"'],
};

const WhatsAppContactDialog = ({
  open,
  onOpenChange,
  courseName = "",
}: WhatsAppContactDialogProps) => {
  const [nome, setNome] = useState("");
  const [nivel, setNivel] = useState("");
  const [curso, setCurso] = useState(courseName);
  const [isAnimated, setIsAnimated] = useState(false);
  const [examplesKey, setExamplesKey] = useState(0);

  useEffect(() => {
    if (open) {
      setIsAnimated(false);
      const timer = setTimeout(() => setIsAnimated(true), 50);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    if (courseName) {
      setCurso(courseName);
    }
  }, [courseName]);

  const handleNivelChange = (newNivel: string) => {
    setNivel(newNivel);
    setCurso(""); // Clear course when level changes
    setExamplesKey(prev => prev + 1); // Trigger animation
  };

  const getNivelLabel = (value: string) => {
    const found = NIVEIS.find(n => n.value === value);
    return found ? found.label : value;
  };

  const currentExamples = nivel ? NIVEL_EXAMPLES[nivel] || DEFAULT_EXAMPLES : DEFAULT_EXAMPLES;

  const handleSubmit = (interested: boolean) => {
    if (!nome.trim() || !nivel || !curso.trim()) return;

    const nivelLabel = getNivelLabel(nivel);
    const message = interested
      ? `Olá, meu nome é ${nome}. Tenho interesse em informações sobre o curso de ${curso} (Nível: ${nivelLabel})`
      : `Olá, meu nome é ${nome}. Gostaria de receber mais informações sobre cursos EAD na área de ${curso} (Nível: ${nivelLabel})`;

    // Track conversion when user clicks "Tenho interesse"
    if (interested) {
      trackWhatsAppClick(`${curso} (${nivelLabel})`);
    }

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=447785369424&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
    onOpenChange(false);
    setNome("");
    setNivel("");
    setCurso("");
  };

  const infoCards = [
    {
      icon: FileText,
      title: "Cursos Disponíveis",
      content: (
        <ul className="text-xs text-muted-foreground space-y-1.5 ml-6">
          <li className="flex items-center gap-2">
            <Check className="h-3 w-3 text-foreground" />
            Graduação (Bacharelado e Licenciatura)
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-3 w-3 text-foreground" />
            Tecnólogo e Técnico
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-3 w-3 text-foreground" />
            Pós-Graduação (MBA, Mestrado, Doutorado)
          </li>
        </ul>
      ),
    },
    {
      icon: Shield,
      title: "Garantias",
      content: (
        <p className="text-xs text-muted-foreground ml-6">
          Todos os cursos indicados são de instituições credenciadas pelo MEC.
        </p>
      ),
    },
    {
      icon: CreditCard,
      title: "Consultoria",
      content: (
        <p className="text-xs text-muted-foreground ml-6">
          Orientação gratuita para encontrar o curso ideal para você.
        </p>
      ),
    },
    {
      icon: Building2,
      title: "Instituições Parceiras",
      content: (
        <p className="text-xs text-muted-foreground ml-6">
          Uninter, Estácio, Cruzeiro do Sul, Unopar, UniCesumar, Unip, Anhanguera, UFMG, Uniasselvi, Mackenzie, PUC, Anhembi, Uninove, Senai, Senac e outras.
        </p>
      ),
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto p-0 bg-background border-border shadow-2xl rounded-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-300">
        {/* Header */}
        <DialogHeader 
          className={`p-4 sm:p-6 pb-0 border-b border-border/50 transition-all duration-500 ${
            isAnimated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <DialogTitle className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
            Consultoria Educacional
          </DialogTitle>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Orientação sobre cursos EAD reconhecidos pelo MEC
          </p>
        </DialogHeader>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
          {/* Warning */}
          <div 
            className={`flex items-start gap-3 p-3 sm:p-4 bg-muted/40 border border-border rounded-lg transition-all duration-500 delay-100 ${
              isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
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
            {infoCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div 
                  key={card.title}
                  className={`p-3 sm:p-4 border border-border rounded-lg space-y-2 sm:space-y-3 transition-all duration-500 hover:border-foreground/20 hover:shadow-sm ${
                    isAnimated ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                  }`}
                  style={{ transitionDelay: `${150 + index * 75}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-foreground" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{card.title}</span>
                  </div>
                  {card.content}
                </div>
              );
            })}
          </div>

          {/* Form */}
          <div 
            className={`space-y-3 sm:space-y-4 pt-2 transition-all duration-500 delay-500 ${
              isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="nome" className="text-xs sm:text-sm font-medium text-foreground">
                Nome completo
              </Label>
              <Input
                id="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="h-10 sm:h-11 text-sm bg-background border-border focus:border-foreground/30 focus:ring-foreground/10 transition-all duration-200"
              />
            </div>

            {/* Nível Selection */}
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="nivel" className="text-xs sm:text-sm font-medium text-foreground flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Nível do curso
              </Label>
              <Select value={nivel} onValueChange={handleNivelChange}>
                <SelectTrigger className="h-10 sm:h-11 text-sm bg-background border-border focus:border-foreground/30 focus:ring-foreground/10">
                  <SelectValue placeholder="Selecione o nível do curso" />
                </SelectTrigger>
                <SelectContent>
                  {NIVEIS.map((n) => (
                    <SelectItem key={n.value} value={n.value} className="text-sm">
                      {n.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="curso" className="text-xs sm:text-sm font-medium text-foreground">
                Nome do curso
              </Label>
              <Input
                id="curso"
                placeholder={currentExamples.placeholder}
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
                disabled={!nivel}
                className="h-10 sm:h-11 text-sm bg-background border-border focus:border-foreground/30 focus:ring-foreground/10 transition-all duration-200 disabled:opacity-50"
              />
              <div 
                key={examplesKey}
                className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 mt-1 animate-fade-in"
              >
                <p><span className="font-medium">Exemplos:</span> {currentExamples.examples}</p>
              </div>
            </div>

            {/* Notice */}
            <div 
              key={`notice-${examplesKey}`}
              className="flex items-start gap-2 p-3 bg-muted/30 border border-border rounded-lg transition-all duration-300 animate-fade-in"
            >
              <AlertCircle className="h-3.5 w-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div className="text-xs text-muted-foreground space-y-3">
                <div className="space-y-1.5">
                  <p className="flex items-center gap-1.5 font-medium text-foreground/80">
                    <X className="h-3 w-3 text-destructive" />
                    <span>Evite:</span>
                  </p>
                  <ul className="ml-5 space-y-0.5">
                    {currentExamples.avoidList.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-destructive/60 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-1.5">
                  <p className="flex items-center gap-1.5 font-medium text-foreground/80">
                    <Check className="h-3 w-3 text-foreground" />
                    <span>Seja específico:</span>
                  </p>
                  <ul className="ml-5 space-y-0.5">
                    {currentExamples.specificList.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-primary/60 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div 
          className={`p-4 sm:p-6 pt-0 flex flex-col sm:flex-row gap-2 sm:gap-3 transition-all duration-500 delay-600 ${
            isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            onClick={() => handleSubmit(true)}
            disabled={!nome.trim() || !nivel || !curso.trim()}
            className="flex-1 h-11 sm:h-12 text-xs sm:text-sm font-medium bg-foreground hover:bg-foreground/90 text-background transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:hover:scale-100"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Tenho interesse
          </Button>
          <Button
            onClick={() => handleSubmit(false)}
            disabled={!nome.trim() || !nivel || !curso.trim()}
            variant="outline"
            className="flex-1 h-11 sm:h-12 text-xs sm:text-sm font-medium border-border text-foreground hover:bg-muted/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:hover:scale-100"
          >
            Não tenho interesse
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppContactDialog;
