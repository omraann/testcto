import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true, ...props }: CardProps) => {
  return (
    <div
      className={`rounded-[20px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.02)] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-200 ${
        hover
          ? 'hover:border-[rgba(255,255,255,0.25)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:scale-[1.02] origin-center'
          : ''
      } ${className}`}
      style={{ 
        transition: 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
      {...props}
    >
      {children}
    </div>
  );
};
