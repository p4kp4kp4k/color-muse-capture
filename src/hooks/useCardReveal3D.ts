import { useRef, useState, useEffect, RefObject } from "react";

interface CardReveal3DOptions {
  staggerDelay?: number;
  duration?: number;
  threshold?: number;
}

interface CardReveal3DResult {
  containerRef: RefObject<HTMLDivElement>;
  isVisible: boolean;
  getCardStyle: (index: number) => React.CSSProperties;
  getCardClassName: (index: number) => string;
}

export const useCardReveal3D = (
  options: CardReveal3DOptions = {}
): CardReveal3DResult => {
  const { staggerDelay = 100, duration = 600, threshold = 0.15 } = options;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold]);

  const getCardStyle = (index: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)"
      : "perspective(1000px) rotateX(15deg) rotateY(-5deg) translateY(80px) scale(0.9)",
    transition: `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${
      isVisible ? index * staggerDelay : 0
    }ms`,
    transformStyle: "preserve-3d" as const,
  });

  const getCardClassName = (index: number): string => {
    return isVisible ? "card-visible" : "card-hidden";
  };

  return { containerRef, isVisible, getCardStyle, getCardClassName };
};
