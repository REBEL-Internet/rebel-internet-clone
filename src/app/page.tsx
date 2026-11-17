import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SunlightField } from '@/components/SunlightField'
import Image from 'next/image'

export default function NLHome() {
  return (
    <div className="min-h-screen bg-[#fef9ed]">
      <Header lang="nl" />
      
      {/* Sunlit Hero Section - First Screen */}
      <section className="relative w-full h-[900px] overflow-hidden">
        <SunlightField />
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-[1150px] mx-auto text-center">
            {/* Two-line literary promise */}
            <h1 className="mb-8">
              <div className="text-display-italic text-[#fef9ed] mb-2">
                SEO & AI
              </div>
              <div className="text-display text-[#fef9ed]">
                Zichtbaarheidsexpert
              </div>
            </h1>
            
            {/* Support line */}
            <p className="text-hero-support text-[#fef9ed] max-w-[800px] mx-auto">
              Verantwoordelijke digitale aanwezigheid die uw bedrijf versterkt
            </p>
          </div>
        </div>
      </section>
      
      {/* About Section - with centered statement */}
      <section className="py-[120px] px-4">
        <div className="max-w-[1150px] mx-auto">
          <div className="max-w-[800px] mx-auto text-center mb-[120px]">
            <h2 className="text-section-statement text-[#5d524b] mb-8">
              Geboren in Alkmaar, volwassen geworden in Amsterdam
            </h2>
            <p className="text-body text-[#5d524b]/80">
              REBEL bouwt en beheert eigen websites en digitale diensten met een 100% remote team van gemotiveerde experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "30+", label: "Webconcepten" },
              { number: "100%", label: "Remote Team" },
              { number: "Wereldwijd", label: "Bereik" }
            ].map((stat, index) => (
              <div key={index} className="p-8">
                <div className="text-[56.9px] leading-none font-serif text-[#D62D3A] mb-4">{stat.number}</div>
                <div className="text-eyebrow text-[#5d524b]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section - Illustrated offering list */}
      <section className="py-[120px] px-4 bg-[#f7f1e3]">
        <div className="max-w-[1150px] mx-auto">
          <div className="max-w-[800px] mx-auto text-center mb-[120px]">
            <p className="text-eyebrow text-[#5d524b] mb-4">Portfolio</p>
            <h2 className="text-section-statement text-[#5d524b] mb-6">
              Onze Websites & Diensten
            </h2>
          </div>

          {/* Capability rows */}
          <div className="space-y-[21.7px]">
            <div className="capability-row">
              <div className="watercolor-symbol flex-shrink-0">
                <Image
                  src="/images/mrkortingscode-logo.png"
                  alt="MrKortingscode"
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
              
              <div className="flex-1 px-8">
                <p className="text-eyebrow text-[#5d524b] mb-2">Kortingscodes</p>
                <h3 className="text-heading text-[#5d524b] mb-4">
                  <a href="https://mrkortingscode.nl/" className="hover:text-[#D62D3A] transition-colors">
                    MrKortingscode.nl
                  </a>
                </h3>
                <a href="https://mrkortingscode.nl/" className="btn-light text-action inline-block">
                  Bezoek website
                </a>
              </div>
              
              <div className="w-[333px] flex-shrink-0">
                <p className="text-body text-[#5d524b]/80">
                  Hoogwaardige kortingscode websites in 6+ landen, die consumenten voorzien van geldige kortingscodes en aanbiedingen.
                </p>
              </div>
            </div>

            <div className="capability-row">
              <div className="watercolor-symbol flex-shrink-0">
                <Image
                  src="/images/mps-logo_pdy6y5pa.webp"
                  alt="Marketplace Studio"
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
              
              <div className="flex-1 px-8">
                <p className="text-eyebrow text-[#5d524b] mb-2">SEO Services</p>
                <h3 className="text-heading text-[#5d524b] mb-4">
                  <a href="https://marketplacestudio.nl/" className="hover:text-[#D62D3A] transition-colors">
                    Marketplace Studio
                  </a>
                </h3>
                <a href="https://marketplacestudio.nl/" className="btn-light text-action inline-block">
                  Meer informatie
                </a>
              </div>
              
              <div className="w-[333px] flex-shrink-0">
                <p className="text-body text-[#5d524b]/80">
                  Gespecialiseerde marketplace ranking diensten voor bedrijven die zichtbaarheid zoeken op platforms zoals Bol.com.
                </p>
              </div>
            </div>
          </div>

          {/* Summary action */}
          <div className="text-center mt-12">
            <a href="/projects" className="btn-dark text-action inline-flex items-center gap-3">
              Bekijk alle projecten
              <span className="inline-block w-[43px] h-[43px] bg-[#5d524b] rounded-sm flex items-center justify-center">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Personal Sign-off Section */}
      <section className="py-[120px] px-4">
        <div className="max-w-[1150px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="w-full md:w-[567px] flex-shrink-0">
              <Image
                src="/images/rebel2022-bram-photo_eav1yc77.png"
                alt="Bram - CEO van REBEL Internet"
                width={567}
                height={649}
                className="w-full h-auto rounded-[4.2px]"
              />
            </div>
            
            <div className="w-full md:w-[450px]">
              <p className="text-signed-statement text-[#5d524b] mb-8 leading-tight">
                Neem contact op met Bram, onze CEO, voor vragen of mogelijke samenwerkingen. We zijn transparant over onze ambities en werkwijze.
              </p>
              
              {/* Handwritten signature placeholder */}
              <div className="mb-4">
                <svg width="120" height="60" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 40 Q 30 20, 50 35 T 90 30" 
                        fill="none" 
                        stroke="#5d524b" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                  <path d="M50 35 L 55 45" 
                        fill="none" 
                        stroke="#5d524b" 
                        strokeWidth="2" 
                        strokeLinecap="round" />
                </svg>
              </div>
              
              <div className="text-caption text-[#5d524b]">
                <div>Bram van der Veer</div>
                <div>CEO, REBEL Internet</div>
              </div>
              
              <div className="mt-8">
                <a href="/contact-us" className="btn-light text-action">
                  Neem contact op
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer lang="nl" />
    </div>
  )
}
