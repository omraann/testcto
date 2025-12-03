'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/stack', label: 'Stack' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[56px] border-b border-[rgba(255,255,255,0.1)] bg-[#0A0A0A] flex items-center">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 flex items-center justify-between h-full">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#F5F1E6] font-semibold text-lg hover:text-[#5D9CEC] transition-colors duration-150"
        >
          omraan
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-medium transition-colors duration-150 relative ${
                  isActive ? 'text-[#F5F1E6]' : 'text-[#F5F1E6]'
                } hover:text-[#5D9CEC] focus:outline-none focus:ring-2 focus:ring-[#5D9CEC] rounded-sm`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-[20px] left-0 right-0 h-[2px] bg-[#5D9CEC]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-[#F5F1E6] hover:text-[#5D9CEC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5D9CEC]"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <div className="space-y-[4px]">
            <span className="block w-6 h-[2px] bg-current"></span>
            <span className="block w-6 h-[2px] bg-current"></span>
            <span className="block w-6 h-[2px] bg-current"></span>
          </div>
        </button>

        {/* Mobile Slide-out Panel */}
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-[300px] max-w-[90vw] bg-[#0F0F0F] z-50 transform transition-transform duration-300 md:hidden p-6 border-l border-[rgba(255,255,255,0.1)] ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#F5F1E6] hover:text-[#5D9CEC] transition-colors"
              aria-label="Close menu"
            >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[16px] font-medium text-[#F5F1E6] hover:text-[#5D9CEC] transition-colors py-2 border-b border-[rgba(255,255,255,0.05)]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
