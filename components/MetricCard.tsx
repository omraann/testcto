'use client';

import React from 'react';
import { AnimatedCounter } from './animations/AnimatedCounter';

interface MetricCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export const MetricCard = ({ value, label, icon }: MetricCardProps) => {
  return (
    <div className="rounded-[20px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.02)] p-6 transition-all duration-200 hover:border-[rgba(255,255,255,0.25)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-accent text-[20px]">{icon}</span>}
        <div className="text-[42px] font-bold text-accent leading-none">
          <AnimatedCounter value={value} />
        </div>
      </div>
      <div className="text-[13px] uppercase tracking-wider text-secondary">{label}</div>
    </div>
  );
};
