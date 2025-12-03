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
        <div className="w-[40px] h-[4px] bg-accent mb-3" />
      )}
      <h2
        className={`text-[40px] md:text-[44px] font-bold text-foreground font-space ${className}`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {children}
      </h2>
    </div>
  );
};
