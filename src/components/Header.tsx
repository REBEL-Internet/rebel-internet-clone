'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HamburgerIcon } from './icons';
import { useState, useEffect } from 'react';

const translations = {
  nl: {
    about: 'Over Ons',
    socialResponsibility: 'Sociale Verantwoordelijkheid',
    contact: 'Contact',
    projects: 'Projecten'
  },
  en: {
    about: 'About Us',
    socialResponsibility: 'Social Responsibility',
    contact: 'Contact Us',
    projects: 'Projects'
  }
};

export function Header({ lang = 'nl' }: { lang?: 'nl' | 'en' }) {
  const t = translations[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-[33px] left-0 right-0 z-50 px-4">
      <div className="max-w-[1383px] mx-auto floating-nav flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="group">
            <Image
              src="/images/RI-2023-RED_4dsh9nng.svg"
              alt="REBEL Internet"
              width={120}
              height={46}
              style={{ height: '46px', width: 'auto' }}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: '/about', label: t.about },
            { href: '/social-responsibility', label: t.socialResponsibility },
            { href: '/contact-us', label: t.contact },
            { href: '/projects', label: t.projects }
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-navigation text-[#5d524b] hover:text-[#D62D3A] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/" className="hover:opacity-70 transition-all duration-200 hover:scale-110">
            <Image
              src="/images/flag-netherlands_1f1f3-1f1f1_31muh9wl_yfutokfd.webp"
              alt="Nederlands"
              width={24}
              height={24}
              className="rounded-full w-6 h-6 object-cover ring-2 ring-transparent hover:ring-[#d62d3a]"
            />
          </Link>
          <Link href="/en" className="hover:opacity-70 transition-all duration-200 hover:scale-110">
            <Image
              src="/images/uk_45npn8ku.png"
              alt="English"
              width={24}
              height={24}
              className="rounded-full w-6 h-6 object-cover ring-2 ring-transparent hover:ring-[#d62d3a]"
            />
          </Link>
        </div>

        <button
          className="md:hidden p-2 bg-transparent border-none cursor-pointer rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <HamburgerIcon className="w-6 h-6 text-[#202020]" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[75px] left-0 right-0 bg-[#fef9ed] shadow-2xl z-50 rounded-[5px] mx-4">
          <nav className="flex flex-col p-6">
            {[
              { href: '/about', label: t.about },
              { href: '/social-responsibility', label: t.socialResponsibility },
              { href: '/contact-us', label: t.contact },
              { href: '/projects', label: t.projects }
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="py-4 text-[#5d524b] hover:text-[#D62D3A] transition-all duration-300 text-navigation border-b border-[#5d524b]/10 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-6 mt-2">
              <Link href="/" className="hover:opacity-70 transition-all duration-200">
                <Image
                  src="/images/flag-netherlands_1f1f3-1f1f1_31muh9wl_yfutokfd.webp"
                  alt="Nederlands"
                  width={32}
                  height={32}
                  className="rounded-full w-8 h-8 object-cover"
                />
              </Link>
              <Link href="/en" className="hover:opacity-70 transition-all duration-200">
                <Image
                  src="/images/uk_45npn8ku.png"
                  alt="English"
                  width={32}
                  height={32}
                  className="rounded-full w-8 h-8 object-cover"
                />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
