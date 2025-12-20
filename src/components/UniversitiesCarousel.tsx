import { useEffect, useRef } from "react";

const UNIVERSITIES = [
  { name: "UFSM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/UFSM_-_marca_vertical.png/200px-UFSM_-_marca_vertical.png" },
  { name: "Anhanguera", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Logo_Anhanguera_Educacional.svg/200px-Logo_Anhanguera_Educacional.svg.png" },
  { name: "PUC-SP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Brasao_da_PUCSP.svg/150px-Brasao_da_PUCSP.svg.png" },
  { name: "UNIP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/UNIP_logo.svg/200px-UNIP_logo.svg.png" },
  { name: "UNINTER", logo: "https://www.uninter.com/wp-content/uploads/2021/01/logo-uninter.png" },
  { name: "Unopar", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Unopar_logo.svg/200px-Unopar_logo.svg.png" },
  { name: "Estácio", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Est%C3%A1cio_Participa%C3%A7%C3%B5es.svg/200px-Est%C3%A1cio_Participa%C3%A7%C3%B5es.svg.png" },
  { name: "UNIASSELVI", logo: "https://portal.uniasselvi.com.br/assets/images/logo-uniasselvi.png" },
  { name: "UFMG", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/UFMG_logo.svg/200px-UFMG_logo.svg.png" },
  { name: "USP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Webysther_20160322_-_Logo_USP.svg/200px-Webysther_20160322_-_Logo_USP.svg.png" },
];

const UniversitiesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

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
    <section className="py-8 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-4">
        <p className="text-center text-sm text-muted-foreground font-medium">
          Instituições Parceiras Reconhecidas pelo MEC
        </p>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-12 overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: 'auto' }}
      >
        {items.map((university, index) => (
          <div
            key={`${university.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center h-16 px-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={university.logo}
              alt={university.name}
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniversitiesCarousel;