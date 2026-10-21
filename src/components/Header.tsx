'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HamburgerIcon } from './icons';
import { useState, useEffect } from 'react';

export function Header() {
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
    <header className={`sticky top-0 z-50 w-full h-20 px-4 md:px-20 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1280px] mx-auto px-[15px] h-20 flex items-center justify-between">
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
            { href: '/about', label: 'About Us' },
            { href: '/social-responsibility', label: 'Social Responsibility' },
            { href: '/contact-us', label: 'Contact Us' },
            { href: '/#companies', label: 'Our Companies' },
            { href: '/career', label: 'Career' }
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="relative text-[#202020] hover:text-[#d62d3a] transition-colors duration-300 text-base font-medium leading-8 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d62d3a] transition-all duration-300 group-hover:w-full" />
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
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-2xl z-50 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6">
            {[
              { href: '/about', label: 'About Us' },
              { href: '/social-responsibility', label: 'Social Responsibility' },
              { href: '/contact-us', label: 'Contact Us' },
              { href: '/#companies', label: 'Our Companies' },
              { href: '/career', label: 'Career' }
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="py-4 text-[#202020] hover:text-[#d62d3a] transition-all duration-300 text-lg font-medium border-b border-gray-100 last:border-0 hover:pl-2"
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
