import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true, ...props }: CardProps) => {
  return (
    <div
      className={`rounded-md border border-fill-subtle bg-fill-subtle p-6 shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-200 ${
        hover
          ? 'hover:border-border hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:scale-[1.01] origin-center'
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
