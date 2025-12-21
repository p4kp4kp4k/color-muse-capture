import { useEffect, useRef } from "react";

const UNIVERSITIES = [
  { name: "Universidade 1", logo: "https://centraldodiploma.com/wp-content/uploads/2025/01/logo-22.png" },
  { name: "Universidade 2", logo: "https://centraldodiploma.com/wp-content/uploads/2025/01/logo-2.png" },
  { name: "Universidade 3", logo: "https://centraldodiploma.com/wp-content/uploads/2025/01/logo-5.png" },
  { name: "Universidade 4", logo: "https://centraldodiploma.com/wp-content/uploads/2025/01/logo-1.png" },
  { name: "Universidade 5", logo: "https://centraldodiploma.com/wp-content/uploads/2025/01/logo-3.png" },
  { name: "Universidade 6", logo: "https://centraldodiploma.com/wp-content/uploads/2025/01/logo-4.png" },
  { name: "Universidade 7", logo: "https://centraldodiploma.com/wp-content/uploads/2025/01/logo-6.png" },
  { name: "Universidade 8", logo: "https://centraldodiploma.com/wp-content/uploads/2025/01/logo-9.png" },
  { name: "Cruzeiro do Sul", logo: "https://logospng.org/wp-content/uploads/cruzeiro-do-sul.png" },
  { name: "Anhembi Morumbi", logo: "https://p7.hiclipart.com/preview/129/836/856/anhembi-morumbi-university-student-laureate-international-universities-vestibular-exam-student.jpg" },
  { name: "Unicesumar", logo: "https://logodownload.org/wp-content/uploads/2021/02/unicesumar-logo.png" },
  { name: "Uninove", logo: "https://portal.coren-sp.gov.br/wp-content/uploads/2014/11/logo%20uninove.png" },
  { name: "Mackenzie", logo: "https://w7.pngwing.com/pngs/388/593/png-transparent-universidade-presbiteriana-mackenzie-hd-logo.png" },
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
            <img
              src={university.logo}
              alt={university.name}
              className="h-14 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniversitiesCarousel;