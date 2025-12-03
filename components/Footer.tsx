import Link from 'next/link';

export default function Footer() {
  const links = [
    { label: 'Email', href: 'mailto:omraanalshibany@gmail.com' },
    { label: 'WhatsApp', href: 'https://wa.me/963996905457' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
  ];

  return (
    <footer className="mt-32 border-t border-[rgba(255,255,255,0.08)] bg-[#0A0A0A] py-12 md:py-16 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center text-center gap-6">
        <p className="text-[14px] text-secondary">
          © 2024 omraan shibani. AI systems that scale.
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[14px]">
          {links.map((link, index) => (
            <div key={link.label} className="flex items-center">
              <Link
                href={link.href}
                className="text-foreground hover:text-accent animated-underline transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent rounded-sm px-1"
              >
                {link.label}
              </Link>
              {index < links.length - 1 && (
                <span className="ml-6 text-secondary hidden sm:inline">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
