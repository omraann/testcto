import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
}

export const MetricCard = ({ value, label }: MetricCardProps) => {
  return (
    <div className="rounded-[20px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.02)] p-6 transition-all duration-200 hover:border-[rgba(255,255,255,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
      <div className="text-[42px] font-bold text-[#5D9CEC]">{value}</div>
      <div className="text-[13px] uppercase tracking-wider text-[#AFAFAF]">{label}</div>
    </div>
  );
};
