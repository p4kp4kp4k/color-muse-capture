import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";

const UNIVERSITIES = [
  { name: "Universidade 1", logo: "/images/universities/uni-1.png" },
  { name: "Universidade 2", logo: "/images/universities/uni-2.png" },
  { name: "Universidade 3", logo: "/images/universities/uni-3.png" },
  { name: "Universidade 4", logo: "/images/universities/uni-4.png" },
  { name: "Universidade 5", logo: "/images/universities/uni-5.png" },
  { name: "Universidade 6", logo: "/images/universities/uni-6.png" },
  { name: "Universidade 7", logo: "/images/universities/uni-7.png" },
  { name: "Universidade 8", logo: "/images/universities/uni-8.png" },
  { name: "Unicesumar", logo: "/images/universities/unicesumar.png" },
  { name: "Instituto Federal", logo: "/images/universities/instituto-federal.png" },
  { name: "Anhembi Morumbi", logo: "/images/universities/anhembi-morumbi.png" },
  { name: "UNIFACS", logo: "/images/universities/unifacs.png" },
  { name: "USP", logo: "/images/universities/usp.png" },
  { name: "UNICAMP", logo: "/images/universities/unicamp.png" },
  { name: "UnB", logo: "/images/universities/unb.png" },
  { name: "UFMG", logo: "/images/universities/ufmg.png" },
  { name: "SENAC", logo: "/images/universities/senac.png" },
  { name: "SENAI", logo: "/images/universities/senai.png" },
];

const UniversitiesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Use CSS animation on mobile for better performance
    if (isMobile) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) return;
    }

    let animationId: number;
    let scrollPosition = 0;
    const speed = isMobile ? 0.3 : 0.4; // Slower on mobile

    const scroll = () => {
      scrollPosition += speed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isMobile]);

  const items = [...UNIVERSITIES, ...UNIVERSITIES];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-card to-background border-y border-border overflow-hidden relative">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-card via-card/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-card via-card/80 to-transparent z-10 pointer-events-none" />
      
      {/* Header */}
      <div className="container mx-auto px-4 mb-8 md:mb-10">
        <div className="flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Parceiros</span>
          </div>
          <p className="text-center text-sm md:text-base text-muted-foreground font-medium">
            Instituições Parceiras Reconhecidas pelo MEC
          </p>
        </div>
      </div>
      
      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-8 md:gap-12 overflow-hidden whitespace-nowrap px-8"
        style={{ scrollBehavior: 'auto' }}
      >
        {items.map((university, index) => (
          <div
            key={`${university.name}-${index}`}
            className="flex-shrink-0 group"
          >
            <div className="relative h-16 md:h-24 px-4 md:px-8 flex items-center justify-center md:transition-all md:duration-500 md:group-hover:scale-110">
              {/* Glow effect on hover - desktop only */}
              <div className="hidden md:block absolute inset-0 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-card rounded-xl p-3 md:p-5 shadow-sm border border-border/50 md:group-hover:border-primary/30 md:group-hover:shadow-lg md:group-hover:shadow-primary/5 md:transition-all md:duration-300">
                <img
                  src={university.logo}
                  alt={university.name}
                  width="48"
                  height="48"
                  className="h-6 md:h-12 w-auto object-contain filter grayscale md:group-hover:grayscale-0 md:transition-all md:duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniversitiesCarousel;