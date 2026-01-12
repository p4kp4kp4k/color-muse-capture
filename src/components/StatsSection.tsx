import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { useScrollReveal3D } from "@/hooks/useParallax";
import ParticlesBackground from "@/components/ParticlesBackground";
import { GraduationCap, Users, Clock, Award, TrendingUp } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const StatItem = ({ icon, end, suffix = "", label, delay = 0 }: StatItemProps) => {
  const { count, ref, isVisible } = useAnimatedCounter({ end, duration: 2000, delay });

  return (
    <div 
      ref={ref}
      className={`group text-center p-4 md:p-8 rounded-2xl transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon - simplified for mobile */}
      <div className="relative w-12 h-12 md:w-20 md:h-20 mx-auto mb-3 md:mb-6 md:group-hover:scale-110 md:transition-transform md:duration-500">
        {/* Glow - desktop only */}
        <div className="hidden md:block absolute inset-0 bg-gold/20 rounded-2xl blur-xl" />
        
        {/* Icon container */}
        <div className="relative w-full h-full bg-gradient-to-br from-gold/30 via-gold/20 to-gold/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-gold/30 md:group-hover:border-gold/60 md:transition-all md:duration-500">
          {icon}
        </div>
      </div>
      
      {/* Number */}
      <div className="text-2xl md:text-5xl lg:text-6xl font-black mb-1 md:mb-2 font-heading">
        <span className="text-gold md:bg-gradient-to-r md:from-white md:via-gold md:to-white md:bg-clip-text md:text-transparent">
          {count.toLocaleString('pt-BR')}{suffix}
        </span>
      </div>
      
      {/* Label */}
      <p className="text-primary-foreground/70 font-medium text-xs md:text-base">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const { ref: sectionRef, animationStyle } = useScrollReveal3D<HTMLElement>({ threshold: 0.1 });

  const stats = [
    {
      icon: <Clock className="w-8 h-8 md:w-10 md:h-10 text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />,
      end: 10,
      suffix: "+",
      label: "Anos de Experiência",
      delay: 0
    },
    {
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />,
      end: 49085,
      suffix: "+",
      label: "Cursos Disponíveis",
      delay: 150
    },
    {
      icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />,
      end: 10000,
      suffix: "+",
      label: "Alunos Formados",
      delay: 300
    },
    {
      icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />,
      end: 50,
      suffix: "+",
      label: "Instituições Parceiras",
      delay: 450
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-28 bg-gradient-hero relative overflow-hidden" style={animationStyle}>
      {/* Particles Background - hidden on mobile via component */}
      <ParticlesBackground />
      
      {/* Decorative elements - simplified for mobile */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with animation */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10">
            <TrendingUp className="w-4 h-4 text-gold animate-bounce" />
            <span className="text-sm font-medium text-primary-foreground/90">Nossos Resultados</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
            Números que <span className="text-gold relative">
              Inspiram Confiança
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 0 150 8 200 4" stroke="rgb(212 175 55)" strokeWidth="2" className="animate-[dash_2s_ease-in-out_infinite]" strokeDasharray="200" strokeDashoffset="200" />
              </svg>
            </span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Nossa trajetória é marcada por resultados concretos e milhares de sonhos realizados.
          </p>
        </div>

        {/* Stats grid with glass effect and 3D cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 hover:border-gold/40 transition-all duration-500 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] group"
              style={{
                transform: 'perspective(1000px)',
                transformStyle: 'preserve-3d'
              }}
            >
              <StatItem {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;