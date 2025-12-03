import Link from 'next/link';

export default function Footer() {
  const links = [
    { label: 'Email', href: 'mailto:omraanalshibany@gmail.com' },
    { label: 'WhatsApp', href: 'https://wa.me/963996905457' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
  ];

  return (
    <footer className="border-t border-[rgba(255,255,255,0.1)] bg-[#0A0A0A] py-10 md:py-10 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center text-center gap-3">
        <p className="text-[14px] text-[#AFAFAF]">
          © 2024 omraan shibani. AI systems that scale.
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[14px]">
          {links.map((link, index) => (
            <div key={link.label} className="flex items-center">
              <Link
                href={link.href}
                className="text-[#F5F1E6] hover:text-[#5D9CEC] hover:underline focus:outline-none focus:ring-2 focus:ring-[#5D9CEC] transition-colors duration-150"
              >
                {link.label}
              </Link>
              {index < links.length - 1 && (
                <span className="ml-4 text-[#AFAFAF] hidden sm:inline">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
