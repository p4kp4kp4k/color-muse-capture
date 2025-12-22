import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { GraduationCap, Users, Clock, Award } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const StatItem = ({ icon, end, suffix = "", label, delay = 0 }: StatItemProps) => {
  const { count, ref, isVisible } = useAnimatedCounter({ end, duration: 2500, delay });

  return (
    <div 
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-black text-white mb-2 font-heading">
        {count.toLocaleString('pt-BR')}{suffix}
      </div>
      <p className="text-primary-foreground/80 font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-gold" />,
      end: 10,
      suffix: "+",
      label: "Anos de Experiência",
      delay: 0
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      end: 49085,
      suffix: "+",
      label: "Cursos Disponíveis",
      delay: 150
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-gold" />,
      end: 10000,
      suffix: "+",
      label: "Alunos Formados",
      delay: 300
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      end: 50,
      suffix: "+",
      label: "Cursos Disponíveis",
      delay: 450
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Números que <span className="text-gold">Inspiram Confiança</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Nossa trajetória é marcada por resultados concretos e milhares de sonhos realizados.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
