import { useEffect, useRef } from "react";

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
];

const UniversitiesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.3; // Velocidade mais lenta

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
  }, []);

  // Duplicate items for seamless loop
  const items = [...UNIVERSITIES, ...UNIVERSITIES];

  return (
    <section className="py-10 bg-card border-y border-border overflow-hidden relative">
      {/* Fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm text-muted-foreground font-medium uppercase tracking-wider">
          Instituições Parceiras Reconhecidas pelo MEC
        </p>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-16 overflow-hidden whitespace-nowrap px-8"
        style={{ scrollBehavior: 'auto' }}
      >
        {items.map((university, index) => (
          <div
            key={`${university.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center h-20 px-6 hover:scale-110 transition-transform duration-300"
          >
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <img
                src={university.logo}
                alt={university.name}
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniversitiesCarousel;