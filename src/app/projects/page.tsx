import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SunlightField } from '@/components/SunlightField'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      name: "MrKortingscode.nl",
      logo: "/images/mrkortingscode-logo.png",
      description: "Hoogwaardige kortingscode websites in 6+ landen, die consumenten voorzien van geldige kortingscodes en aanbiedingen van 500+ online winkels.",
      url: "https://mrkortingscode.nl/",
      category: "Kortingscodes"
    },
    {
      name: "Marketplace Studio",
      logo: "/images/mps-logo_pdy6y5pa.webp",
      description: "Gespecialiseerde marketplace ranking diensten voor bedrijven die zichtbaarheid zoeken op platforms zoals Bol.com.",
      url: "https://marketplacestudio.nl/",
      category: "Marketplace SEO"
    },
    {
      name: "Ultimate Web Traffic",
      logo: null,
      description: "Premium web traffic services voor bedrijven die hun online aanwezigheid willen versterken met echte, gerichte bezoekers.",
      url: "https://ultimatewebtraffic.com/",
      category: "Traffic Services"
    },
    {
      name: "Web Traffic Geeks",
      logo: "/images/IMAGE_09jluh0z_wzizhlr6.webp",
      description: "Professionele web traffic oplossingen en ranking services voor digitale marketeers en bedrijven.",
      url: "https://webtrafficgeeks.org/",
      category: "Traffic Services"
    },
    {
      name: "Home Geeks",
      logo: null,
      description: "Gespecialiseerde ranking en visibility services voor de thuisverbetering en vastgoed industrie.",
      url: "https://homegeeks.org/",
      category: "Niche Rankings"
    },
    {
      name: "YouTube Geeks",
      logo: "/images/youtube-geeks-logo_ro9wty1v_qn74tjmp.webp",
      description: "YouTube ranking en visibility services om uw video's te laten groeien en meer views te krijgen.",
      url: "https://ytgeeks.org/",
      category: "Video Rankings"
    },

    {
      name: "BNB Geeks",
      logo: null,
      description: "Ranking en visibility services speciaal ontwikkeld voor Airbnb hosts en vakantieverhuur eigenaren.",
      url: "https://bnbgeeks.org/",
      category: "Hospitality Rankings"
    },
    {
      name: "Skro Studio",
      logo: null,
      description: "Creatieve digitale oplossingen en ranking services voor moderne bedrijven en startups.",
      url: "https://skrostudio.org/",
      category: "Digital Services"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fef9ed]">
      <Header lang="nl" />
      
      {/* Hero Section with Sunlight */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <SunlightField />
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="text-eyebrow text-[#fef9ed] mb-4">Portfolio</p>
            <h1 className="text-section-statement text-[#fef9ed] mb-6">
              Onze Projecten
            </h1>
            <p className="text-hero-support text-[#fef9ed]">
              Een overzicht van onze websites en digitale diensten
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-[120px] px-4">
        <div className="max-w-[1150px] mx-auto">
          
          {/* Introduction */}
          <div className="max-w-[800px] mx-auto text-center mb-[120px]">
            <h2 className="text-heading text-[#5d524b] mb-6">
              Websites & Marketplace Ranking Services
            </h2>
            <p className="text-body text-[#5d524b]/80">
              Van kortingscode websites tot gespecialiseerde marketplace ranking diensten - REBEL Internet bouwt en beheert een divers portfolio van digitale projecten die bedrijven helpen gevonden te worden.
            </p>
          </div>

          {/* Projects as Capability Rows */}
          <div className="space-y-[21.7px]">
            {projects.map((project, idx) => (
              <div key={idx} className="capability-row">
                <div className="watercolor-symbol flex-shrink-0">
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={project.name}
                      width={150}
                      height={60}
                      className="object-contain"
                    />
                  ) : (
                    <div className="text-5xl">🚀</div>
                  )}
                </div>
                
                <div className="flex-1 px-8">
                  <p className="text-eyebrow text-[#5d524b] mb-2">{project.category}</p>
                  <h3 className="text-heading text-[#5d524b] mb-4">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#D62D3A] transition-colors">
                      {project.name}
                    </a>
                  </h3>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-light text-action inline-block">
                    Bezoek website →
                  </a>
                </div>
                
                <div className="w-[333px] flex-shrink-0">
                  <p className="text-body text-[#5d524b]/80">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-[120px]">
            <h2 className="text-heading text-[#5d524b] mb-6">
              Wilt u ook beter gevonden worden?
            </h2>
            <p className="text-body text-[#5d524b]/80 mb-8 max-w-[600px] mx-auto">
              Neem contact op om te ontdekken hoe onze ranking services uw bedrijf kunnen helpen groeien op marketplaces en platforms.
            </p>
            <a href="/contact-us" className="btn-dark text-action">
              Neem contact op
            </a>
          </div>
        </div>
      </section>

      <Footer lang="nl" />
    </div>
  )
}
