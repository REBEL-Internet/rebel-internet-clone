'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HamburgerIcon } from './icons';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full h-24 px-4 md:px-20">
      <div className="max-w-[1280px] mx-auto px-[15px] h-24 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/RI-2023-RED_4dsh9nng.svg"
              alt="REBEL Internet"
              width={120}
              height={46}
              style={{ height: '46px', width: 'auto' }}
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-[#202020] hover:text-[#d62d3a] transition-colors duration-300 text-base font-normal leading-8">
            About Us
          </Link>
          <Link href="/social-responsibility" className="text-[#202020] hover:text-[#d62d3a] transition-colors duration-300 text-base font-normal leading-8">
            Social Responsibility
          </Link>
          <Link href="/contact-us" className="text-[#202020] hover:text-[#d62d3a] transition-colors duration-300 text-base font-normal leading-8">
            Contact Us
          </Link>
          <Link href="/#companies" className="text-[#202020] hover:text-[#d62d3a] transition-colors duration-300 text-base font-normal leading-8">
            Our Companies
          </Link>
          <Link href="/career" className="text-[#202020] hover:text-[#d62d3a] transition-colors duration-300 text-base font-normal leading-8">
            Career
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/" className="hover:opacity-70 transition-opacity duration-200">
            <Image
              src="/images/uk_45npn8ku.png"
              alt="English"
              width={24}
              height={24}
              className="rounded-full w-6 h-6 object-cover"
            />
          </Link>
          <Link href="/nl-home" className="hover:opacity-70 transition-opacity duration-200">
            <Image
              src="/images/flag-netherlands_1f1f3-1f1f1_31muh9wl_yfutokfd.webp"
              alt="Nederlands"
              width={24}
              height={24}
              className="rounded-full w-6 h-6 object-cover"
            />
          </Link>
        </div>

        <button
          className="md:hidden p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <HamburgerIcon className="w-6 h-6 text-[#202020]" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-white shadow-lg z-50">
          <nav className="flex flex-col p-4">
            <Link href="/about" className="py-3 text-[#202020] hover:text-[#d62d3a] transition-colors duration-300">
              About Us
            </Link>
            <Link href="/social-responsibility" className="py-3 text-[#202020] hover:text-[#d62d3a] transition-colors duration-300">
              Social Responsibility
            </Link>
            <Link href="/contact-us" className="py-3 text-[#202020] hover:text-[#d62d3a] transition-colors duration-300">
              Contact Us
            </Link>
            <Link href="/#companies" className="py-3 text-[#202020] hover:text-[#d62d3a] transition-colors duration-300">
              Our Companies
            </Link>
            <Link href="/career" className="py-3 text-[#202020] hover:text-[#d62d3a] transition-colors duration-300">
              Career
            </Link>
            <div className="flex items-center gap-3 pt-4 border-t mt-2">
              <Link href="/" className="hover:opacity-70 transition-opacity duration-200">
                <Image
                  src="/images/uk_45npn8ku.png"
                  alt="English"
                  width={24}
                  height={24}
                  className="rounded-full w-6 h-6 object-cover"
                />
              </Link>
              <Link href="/nl-home" className="hover:opacity-70 transition-opacity duration-200">
                <Image
                  src="/images/flag-netherlands_1f1f3-1f1f1_31muh9wl_yfutokfd.webp"
                  alt="Nederlands"
                  width={24}
                  height={24}
                  className="rounded-full w-6 h-6 object-cover"
                />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
