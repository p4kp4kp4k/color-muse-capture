import { useEffect, useState, useRef, RefObject } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return offset * speed;
};

interface Parallax3DOptions {
  intensity?: number;
  perspective?: number;
  scale?: number;
}

export const useParallax3D = <T extends HTMLElement>(
  options: Parallax3DOptions = {}
): { ref: RefObject<T>; style: React.CSSProperties } => {
  const { intensity = 0.5, perspective = 1000, scale = 1.05 } = options;
  const ref = useRef<T>(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    translateZ: 0,
    scale: 1,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      // Calculate how far the element is from the center of the viewport
      const distanceFromCenter = (elementCenter - viewportCenter) / windowHeight;
      
      // Apply rotation based on scroll position
      const rotateX = distanceFromCenter * intensity * 15;
      const translateZ = Math.abs(distanceFromCenter) * -50 * intensity;
      const scaleValue = 1 + (1 - Math.abs(distanceFromCenter)) * (scale - 1);

      setTransform({
        rotateX,
        rotateY: 0,
        translateZ,
        scale: Math.max(1, scaleValue),
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity, scale]);

  const style: React.CSSProperties = {
    perspective: `${perspective}px`,
    transform: `perspective(${perspective}px) rotateX(${transform.rotateX}deg) translateZ(${transform.translateZ}px) scale(${transform.scale})`,
    transformStyle: 'preserve-3d',
    transition: 'transform 0.1s ease-out',
  };

  return { ref, style };
};

interface ScrollReveal3DOptions {
  threshold?: number;
  delay?: number;
  duration?: number;
}

export const useScrollReveal3D = <T extends HTMLElement>(
  options: ScrollReveal3DOptions = {}
): { ref: RefObject<T>; isVisible: boolean; animationStyle: React.CSSProperties } => {
  const { threshold = 0.1, delay = 0, duration = 800 } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    observer.observe(element);

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  const animationStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? `perspective(1000px) rotateX(0deg) translateY(0) scale(1)`
      : `perspective(1000px) rotateX(10deg) translateY(60px) scale(0.95)`,
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    transformStyle: 'preserve-3d',
  };

  return { ref, isVisible, animationStyle };
};
