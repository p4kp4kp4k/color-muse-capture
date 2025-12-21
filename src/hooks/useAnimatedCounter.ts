import { useEffect, useState, useRef } from 'react';

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
}

export const useAnimatedCounter = ({ start = 0, end, duration = 2000, delay = 0 }: UseCounterOptions) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(start + (end - start) * easeOutQuart);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, start, end, duration, delay]);

  return { count, ref, isVisible };
};
