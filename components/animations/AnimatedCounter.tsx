'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter = ({
  value,
  duration = 1200,
  className = '',
}: AnimatedCounterProps) => {
  const { ref, isInView } = useInView({ threshold: 0.5, triggerOnce: true });
  const [displayValue, setDisplayValue] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract numeric value from string
    const match = value.match(/(\d+(?:,\d+)*)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numericPart = match[1].replace(/,/g, '');
    const targetNumber = parseInt(numericPart, 10);
    
    if (isNaN(targetNumber)) {
      setDisplayValue(value);
      return;
    }

    const prefix = value.substring(0, match.index);
    const suffix = value.substring((match.index || 0) + match[0].length);
    
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutQuad
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = Math.floor(targetNumber * eased);
      
      // Format with commas
      const formatted = current.toLocaleString();
      setDisplayValue(`${prefix}${formatted}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    
    animate();
  }, [isInView, value, duration]);

  return (
    <span ref={ref as any} className={className}>
      {displayValue}
    </span>
  );
};
