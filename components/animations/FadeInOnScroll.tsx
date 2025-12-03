'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export const FadeInOnScroll = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  duration = 0.6,
}: FadeInOnScrollProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  };

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directions[direction] }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
