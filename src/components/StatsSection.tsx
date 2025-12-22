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
      className={`group text-center p-6 md:p-8 rounded-2xl transition-all duration-700 hover-3d ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon with glow effect */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6">
        <div className="absolute inset-0 bg-gold/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-full h-full bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl flex items-center justify-center border border-gold/20 group-hover:border-gold/40 transition-colors duration-300">
          {icon}
        </div>
      </div>
      
      {/* Number with gradient */}
      <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 font-heading">
        <span className="bg-gradient-to-r from-white via-white to-gold/80 bg-clip-text text-transparent">
          {count.toLocaleString('pt-BR')}{suffix}
        </span>
      </div>
      
      <p className="text-primary-foreground/70 font-medium text-sm md:text-base group-hover:text-primary-foreground/90 transition-colors">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 md:w-10 md:h-10 text-gold" />,
      end: 10,
      suffix: "+",
      label: "Anos de Experiência",
      delay: 0
    },
    {
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-gold" />,
      end: 49085,
      suffix: "+",
      label: "Cursos Disponíveis",
      delay: 150
    },
    {
      icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-gold" />,
      end: 10000,
      suffix: "+",
      label: "Alunos Formados",
      delay: 300
    },
    {
      icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-gold" />,
      end: 50,
      suffix: "+",
      label: "Cursos Disponíveis",
      delay: 450
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        
        {/* Cyber grid effect */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with animation */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">Nossos Resultados</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
            Números que <span className="text-gold">Inspiram Confiança</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Nossa trajetória é marcada por resultados concretos e milhares de sonhos realizados.
          </p>
        </div>

        {/* Stats grid with glass effect */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 hover:border-gold/30 transition-all duration-500">
              <StatItem {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;