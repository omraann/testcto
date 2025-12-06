import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className = '' }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center h-[24px] rounded-sm border border-fill-subtle bg-transparent px-3 py-0 text-[12px] font-semibold text-secondary transition-all duration-200 hover:border-border hover:bg-fill-subtle ${className}`}
    >
      {children}
    </span>
  );
};
