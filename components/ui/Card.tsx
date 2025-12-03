import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true, ...props }: CardProps) => {
  return (
    <div
      className={`rounded-[20px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.02)] p-7 transition-all duration-200 ${
        hover
          ? 'hover:border-[rgba(255,255,255,0.25)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:scale-[1.02] hover:-translate-y-[2px]'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
