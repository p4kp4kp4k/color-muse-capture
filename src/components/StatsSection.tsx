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
  const { count, ref, isVisible } = useAnimatedCounter({ end, duration: 2500, delay });

  return (
    <div 
      ref={ref}
      className={`group text-center p-6 md:p-8 rounded-2xl transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: isVisible 
          ? 'perspective(1000px) rotateX(0deg) translateZ(0)' 
          : 'perspective(1000px) rotateX(15deg) translateZ(-50px)',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Icon with 3D glow effect */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">
        {/* Animated glow rings */}
        <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-xl animate-pulse" />
        <div className="absolute -inset-2 bg-gold/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" style={{ animationDuration: '2s' }} />
        
        {/* Icon container with 3D effect */}
        <div className="relative w-full h-full bg-gradient-to-br from-gold/30 via-gold/20 to-gold/10 rounded-2xl flex items-center justify-center border border-gold/30 group-hover:border-gold/60 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          style={{ 
            transform: 'translateZ(20px)',
            transformStyle: 'preserve-3d'
          }}
        >
          {icon}
        </div>
      </div>
      
      {/* Number with animated gradient */}
      <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 font-heading relative">
        <span className="bg-gradient-to-r from-white via-gold to-white bg-[length:200%_100%] bg-clip-text text-transparent animate-[gradient-flow_3s_ease-in-out_infinite]">
          {count.toLocaleString('pt-BR')}{suffix}
        </span>
        {/* Glow effect behind number */}
        <div className="absolute inset-0 bg-gold/20 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
      </div>
      
      {/* Label with underline animation */}
      <p className="text-primary-foreground/70 font-medium text-sm md:text-base group-hover:text-primary-foreground transition-colors relative">
        {label}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gold group-hover:w-full group-hover:left-0 transition-all duration-500" />
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden" style={animationStyle}>
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        
        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent animate-pulse" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Cyber grid effect */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
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