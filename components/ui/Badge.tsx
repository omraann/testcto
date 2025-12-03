import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className = '' }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-[rgba(255,255,255,0.15)] bg-transparent px-2.5 py-1.5 text-[12px] font-medium text-[#AFAFAF] transition-colors duration-200 hover:border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.08)] ${className}`}
    >
      {children}
    </span>
  );
};
