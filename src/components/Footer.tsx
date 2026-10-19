import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#D62D3A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/RI-2023-White_90j390wq.svg"
              alt="REBEL Internet"
              width={150}
              height={40}
              style={{ height: '40px', width: 'auto' }}
            />
          </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-center md:gap-8">
            <Link 
              href="/about" 
              className="text-base font-medium transition-opacity hover:underline hover:opacity-90"
            >
              About
            </Link>
            <Link 
              href="/social-responsibility" 
              className="text-base font-medium transition-opacity hover:underline hover:opacity-90"
            >
              Social Responsibility
            </Link>
            <Link 
              href="/contact" 
              className="text-base font-medium transition-opacity hover:underline hover:opacity-90"
            >
              Contact
            </Link>
            <Link 
              href="/companies" 
              className="text-base font-medium transition-opacity hover:underline hover:opacity-90"
            >
              Companies
            </Link>
            <Link 
              href="/career" 
              className="text-base font-medium transition-opacity hover:underline hover:opacity-90"
            >
              Career
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm font-normal">2026, REBEL Internet</p>
        </div>
      </div>
    </footer>
  );
}
