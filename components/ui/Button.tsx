import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-3 py-[10px] text-[14px] font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#5D9CEC] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]';

  const variants = {
    primary:
      'bg-[#5D9CEC] text-[#F5F1E6] hover:brightness-110 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(93,156,236,0.3)]',
    secondary:
      'bg-transparent text-[#AFAFAF] border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)] hover:text-[#5D9CEC]',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} aria-label={typeof children === 'string' ? children : undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
