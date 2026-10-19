import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = 2026

  return (
    <footer className="bg-gradient-to-br from-[#1a1a1a] via-[#D62D3A] to-[#C72030] text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/RI-2023-White_90j390wq.svg"
                alt="REBEL Internet"
                width={150}
                height={40}
                style={{ height: '40px', width: 'auto' }}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Creating & running 30+ unique web concepts worldwide since our foundation.
            </p>
            <div className="flex gap-4">
              {['twitter', 'linkedin', 'github'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  aria-label={social}
                >
                  <span className="text-xl">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/career', label: 'Career' },
                { href: '/#companies', label: 'Our Companies' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Resources</h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/social-responsibility', label: 'Social Responsibility' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/cookies', label: 'Cookie Policy' }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Stay Updated</h3>
            <p className="text-white/70 text-sm mb-4">
              Get the latest news and updates from REBEL Internet.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-white text-[#D62D3A] font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70">
            © {currentYear} REBEL Internet. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/sitemap" className="text-white/70 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
