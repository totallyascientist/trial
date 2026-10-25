import { useEffect, useRef, useState } from 'react';

type AnimatedNumberProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  format?: 'plain' | 'compact';
  className?: string;
  label: string;
};

function formatValue(value: number, decimals: number, format: 'plain' | 'compact') {
  if (format === 'compact') {
    return new Intl.NumberFormat('en-SG', {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    }).format(value);
  }

  return new Intl.NumberFormat('en-SG', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(value);
}

/** Counts up once the metric enters the viewport. Reduced-motion users see the final value immediately. */
export function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  format = 'plain',
  className = '',
  label,
}: AnimatedNumberProps) {
  const elementRef = useRef<HTMLElementTagNameMap['strong'] | null>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || hasAnimated) {
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    let frameId = 0;
    let startTime = 0;

    const animate = (timestamp: number) => {
      if (startTime === 0) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / 1250, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setDisplayValue(value * easedProgress);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
        setHasAnimated(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        observer.disconnect();
        frameId = window.requestAnimationFrame(animate);
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [hasAnimated, value]);

  return (
    <strong
      ref={elementRef}
      className={className}
      aria-label={label}
    >
      {prefix}
      {formatValue(displayValue, decimals, format)}
      {suffix}
    </strong>
  );
}
