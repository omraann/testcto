import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  showAccentBar?: boolean;
}

export const SectionHeading = ({
  children,
  className = '',
  showAccentBar = true,
}: SectionHeadingProps) => {
  return (
    <div className="relative">
      {showAccentBar && (
        <div className="w-10 h-1 bg-accent mb-3" />
      )}
      <h2
        className={`text-h2-mobile md:text-h2-desktop font-bold text-foreground font-space ${className}`}
      >
        {children}
      </h2>
    </div>
  );
};
