import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  id,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const isCrossoverPanel = className.includes('crossover-panel');

  useEffect(() => {
    const element = elementRef.current;

    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          y: isCrossoverPanel ? 7 : 12,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: isCrossoverPanel ? 0.55 : 0.65,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: isCrossoverPanel ? 'top 70%' : 'top 72%',
            once: true,
            invalidateOnRefresh: true,
          },
        },
      );
    }, element);

    return () => context.revert();
  }, [delay, isCrossoverPanel]);

  return (
    <div ref={elementRef} id={id} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
