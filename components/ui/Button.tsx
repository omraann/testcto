import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export const Button = ({
  variant = 'primary',
  href,
  className = '',
  children,
  target,
  rel,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-150 ease-out';

  const variants = {
    primary:
      'bg-[#5D9CEC] text-[#F5F1E6] border border-[#5D9CEC] hover:brightness-110 hover:-translate-y-0.5 focus:outline-2 focus:outline-offset-2 focus:outline-[#5D9CEC]',
    secondary:
      'bg-transparent text-[#AFAFAF] border border-[rgba(255,255,255,0.2)] hover:text-[#5D9CEC] hover:border-[rgba(255,255,255,0.4)] focus:outline-2 focus:outline-offset-2 focus:outline-[#5D9CEC]',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
