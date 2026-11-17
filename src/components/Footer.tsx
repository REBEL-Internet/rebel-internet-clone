import Link from 'next/link'
import Image from 'next/image'

const translations = {
  nl: {
    tagline: 'We creëren en beheren 30+ unieke webconcepten wereldwijd sinds onze oprichting.',
    quickLinks: 'Snelle Links',
    about: 'Over Ons',
    career: 'Carrière',
    projects: 'Projecten',
    contact: 'Contact',
    resources: 'Bronnen',
    socialResponsibility: 'Sociale Verantwoordelijkheid',
    privacy: 'Privacybeleid',
    terms: 'Servicevoorwaarden',
    cookies: 'Cookiebeleid',
    stayUpdated: 'Blijf Op de Hoogte',
    newsletter: 'Ontvang het laatste nieuws en updates van REBEL Internet.',
    emailPlaceholder: 'Jouw e-mailadres',
    subscribe: 'Abonneren',
    allRights: 'Alle rechten voorbehouden.',
    privacyShort: 'Privacy',
    termsShort: 'Voorwaarden',
    sitemap: 'Sitemap'
  },
  en: {
    tagline: 'Creating & running 30+ unique web concepts worldwide since our foundation.',
    quickLinks: 'Quick Links',
    about: 'About Us',
    career: 'Career',
    projects: 'Projects',
    contact: 'Contact',
    resources: 'Resources',
    socialResponsibility: 'Social Responsibility',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookies: 'Cookie Policy',
    stayUpdated: 'Stay Updated',
    newsletter: 'Get the latest news and updates from REBEL Internet.',
    emailPlaceholder: 'Your email',
    subscribe: 'Subscribe',
    allRights: 'All rights reserved.',
    privacyShort: 'Privacy',
    termsShort: 'Terms',
    sitemap: 'Sitemap'
  }
};

export function Footer({ lang = 'nl' }: { lang?: 'nl' | 'en' }) {
  const currentYear = 2026
  const t = translations[lang];

  return (
    <footer className="bg-[#fef9ed] border-t border-[#5d524b]/10 py-16 px-4">
      <div className="mx-auto max-w-[1383px]">
        <div className="grid grid-cols-12 gap-[16.7px] mb-12">
          {/* Brand - 4 columns */}
          <div className="col-span-12 md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/RI-2023-RED_4dsh9nng.svg"
                alt="REBEL Internet"
                width={120}
                height={46}
                style={{ height: '46px', width: 'auto' }}
              />
            </Link>
            <p className="text-footer-link text-[#5d524b]/70">
              {t.tagline}
            </p>
          </div>

          {/* Quick Links - 3 columns */}
          <div className="col-span-6 md:col-span-3">
            <nav className="flex flex-col gap-2">
              {[
                { href: '/about', label: t.about },
                { href: '/career', label: t.career },
                { href: '/projects', label: t.projects },
                { href: '/contact-us', label: t.contact }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-footer-link text-[#5d524b] hover:underline underline-offset-2 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources - 3 columns */}
          <div className="col-span-6 md:col-span-3">
            <nav className="flex flex-col gap-2">
              {[
                { href: '/social-responsibility', label: t.socialResponsibility },
                { href: '/privacy', label: t.privacy },
                { href: '/cookies', label: t.cookies }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-footer-link text-[#5d524b] hover:underline underline-offset-2 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Information block - 2 columns offset */}
          <div className="col-span-12 md:col-span-2 md:col-start-11">
            <p className="text-footer-link text-[#5d524b]/70">
              Geboren in Alkmaar, volwassen geworden in Amsterdam.
            </p>
          </div>
        </div>

        {/* Bottom row - Locale and privacy */}
        <div className="pt-8 border-t border-[#5d524b]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-footer-link text-[#5d524b]/70">
            © {currentYear} REBEL Internet. {t.allRights}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-footer-link text-[#5d524b] hover:underline underline-offset-2">
              {t.privacyShort}
            </Link>
            <Link href="/terms" className="text-footer-link text-[#5d524b] hover:underline underline-offset-2">
              {t.termsShort}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
