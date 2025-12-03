import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className = '' }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center h-[24px] rounded-md border border-[rgba(255,255,255,0.2)] bg-transparent px-3 py-0 text-[12px] font-semibold text-secondary transition-all duration-200 hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.05)] ${className}`}
    >
      {children}
    </span>
  );
};
