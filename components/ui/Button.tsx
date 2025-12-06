import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'standard' | 'large';
  href?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export const Button = ({
  variant = 'primary',
  size = 'standard',
  href,
  className = '',
  children,
  target,
  rel,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation';

  const sizeStyles = {
    small: 'h-[36px] px-4 text-[13px]',
    standard: 'h-[44px] px-6 text-[14px]',
    large: 'h-[48px] px-8 text-[16px]',
  };

  const variants = {
    primary:
      'bg-accent text-foreground border border-accent shadow-[0_4px_12px_rgba(93,156,236,0.2)] hover:brightness-110 hover:-translate-y-[2px] hover:shadow-[0_12px_24px_rgba(93,156,236,0.25)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] focus-visible:ring-2 focus-visible:ring-accent/50',
    secondary:
      'bg-transparent text-secondary border border-border hover:text-accent hover:border-border-hover hover:brightness-110 hover:-translate-y-[2px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)] focus-visible:ring-2 focus-visible:ring-accent/50',
    ghost:
      'bg-transparent text-foreground hover:bg-fill-subtle hover:text-accent hover:translate-x-1 focus-visible:bg-fill-subtle focus-visible:text-accent focus-visible:translate-x-1',
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`;

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
