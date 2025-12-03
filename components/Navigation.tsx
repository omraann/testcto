'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/stack', label: 'Stack' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 h-[56px] border-b border-[rgba(255,255,255,0.1)] flex items-center transition-all duration-300 ${
        scrolled 
          ? 'bg-[rgba(10,10,10,0.95)] backdrop-blur-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.2)]' 
          : 'bg-[#0A0A0A]'
      }`}
    >
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
                className={`text-[14px] font-medium transition-colors duration-150 relative px-3 py-1.5 rounded-full ${
                  isActive 
                    ? 'text-[#F5F1E6] bg-[rgba(93,156,236,0.1)]' 
                    : 'text-[#F5F1E6]'
                } hover:text-[#5D9CEC] focus:outline-none focus:ring-2 focus:ring-[#5D9CEC]`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#5D9CEC]" />
                )}
              </Link>
            );
          })}
          
          {/* CTA Button */}
          <a
            href="#contact"
            className="ml-2 h-[40px] px-5 flex items-center justify-center bg-accent text-foreground text-[14px] font-medium rounded-xl hover:brightness-110 hover:-translate-y-[1px] transition-all duration-150 shadow-[0_2px_8px_rgba(93,156,236,0.2)]"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-[#F5F1E6] hover:text-[#5D9CEC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5D9CEC] rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span 
              className={`block w-full h-[2px] bg-current transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-[9px]' : ''
              }`}
            />
            <span 
              className={`block w-full h-[2px] bg-current transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`block w-full h-[2px] bg-current transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-[9px]' : ''
              }`}
            />
          </div>
        </button>

        {/* Mobile Slide-out Panel */}
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black/60 transition-opacity duration-300 md:hidden ${
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
          
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`min-h-[56px] flex items-center px-4 text-[16px] font-medium transition-colors rounded-lg ${
                    isActive 
                      ? 'text-accent bg-[rgba(93,156,236,0.1)]' 
                      : 'text-[#F5F1E6] hover:text-[#5D9CEC] hover:bg-[rgba(255,255,255,0.02)]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            
            <a
              href="#contact"
              className="mt-4 h-[52px] flex items-center justify-center bg-accent text-foreground text-[16px] font-medium rounded-xl hover:brightness-110 transition-all duration-150"
              onClick={() => setIsOpen(false)}
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
