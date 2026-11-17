import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LottieAnimation } from '@/components/LottieAnimation'
import Image from 'next/image'

export default function NLHome() {
  return (
    <div className="min-h-screen">
      <Header lang="nl" />
      
      {/* Dutch Hero Section */}
      <section className="relative w-full min-h-[630px] bg-gradient-to-br from-[#D62D3A] via-[#E63946] to-[#C72030] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/RI-Background_or3xefls.png"
            alt=""
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>

        <div className="relative z-10 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-[60px] mb-[60px] px-4 md:px-20 max-w-[1440px] mx-auto">
            <div className="flex-1 max-w-[600px] space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Onze Websites & Diensten
              </h1>

              <p className="text-xl leading-relaxed text-white/90">
                We bouwen en beheren onze eigen websites en digitale diensten, waaronder{' '}
                <span className="font-bold text-white">MrKortingscode.nl</span> en specialistische marketplace-rankingdiensten.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#companies">
                  <button className="bg-white text-[#D62D3A] px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-elegant transition-all duration-300">
                    Onze Websites & Diensten
                  </button>
                </a>
                <a href="/about">
                  <button className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-[#D62D3A] transition-all duration-300">
                    Meer Informatie →
                  </button>
                </a>
              </div>
            </div>

            <div className="flex-1 max-w-[500px]">
              <div className="relative w-full h-[400px] animate-float">
                <LottieAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Premium Company Logos Section */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {[
              { src: "/images/mps-logo_pdy6y5pa.webp", alt: "Marketplace Studio", href: "https://marketplacestudio.nl/" },
              { src: "/images/mrkortingscode-logo.png", alt: "MrKortingscode.nl", href: "https://mrkortingscode.nl/" },
              { src: "/images/youtube-geeks-logo_ro9wty1v_qn74tjmp.webp", alt: "YouTube Geeks", href: "https://ytgeeks.org/" },
              { src: "/images/IMAGE_09jluh0z_wzizhlr6.webp", alt: "Web Traffic Geeks", href: "https://new.webtrafficgeeks.org/" }
            ].map((logo) => (
              <a key={logo.alt} href={logo.href} target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={30}
                  className="h-8 w-auto"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Premium About Section */}
      <section className="bg-gradient-to-br from-[#FFFBF6] to-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D62D3A] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E63946] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-[#D62D3A]/10 text-[#D62D3A] rounded-full text-sm font-semibold tracking-wider uppercase">
                  Ons Verhaal
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                Geboren in Alkmaar, volwassen geworden in Amsterdam!
              </h2>

              <p className="text-xl text-[#595658] leading-relaxed">
                REBEL bouwt en beheert eigen websites en digitale diensten met een{' '}
                <span className="font-bold text-[#D62D3A]">100% remote team</span>{' '}
                van gemotiveerde experts. Bekijk onze websites en diensten en ontdek wat we voor je kunnen betekenen.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: "30+", label: "Webconcepten" },
                  { number: "100%", label: "Remote Team" },
                  { number: "Wereldwijd", label: "Bereik" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                    <div className="text-4xl font-black text-[#D62D3A] mb-2">{stat.number}</div>
                    <div className="text-sm text-[#595658] font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D62D3A]/20 to-[#E63946]/20 rounded-3xl blur-2xl" />
              <Image
                src="/images/Group-8-modified_yfpwu32w.png"
                alt="REBEL Team"
                width={600}
                height={600}
                className="w-full h-auto rounded-3xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Careers Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-[#D62D3A]/10 text-[#D62D3A] rounded-full text-sm font-semibold tracking-wider uppercase">
              Vacatures
            </span>
            <h2 className="text-5xl md:text-6xl font-black mt-6 mb-4">
              Word lid van ons team
            </h2>
            <p className="text-xl text-[#595658] max-w-2xl mx-auto">
              Bekijk onze openstaande vacatures hieronder
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {[
              { 
                img: "/images/Screenshot-2024-05-22-083634-1-p3bhh.png", 
                title: "HR Operations Manager", 
                link: "/Remote-HR-Operational-Manager",
                color: "from-purple-500 to-purple-600"
              }
            ].map((job, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={job.img}
                    alt={job.title}
                    width={400}
                    height={224}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${job.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#D62D3A] transition-colors">
                    {job.title}
                  </h3>
                  <a href={job.link} className="inline-flex items-center gap-2 text-[#D62D3A] font-semibold hover:gap-4 transition-all">
                    Meer Informatie 
                    <span className="text-2xl">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Companies Section */}
      <section id="companies" className="bg-gradient-to-br from-[#D62D3A] via-[#E63946] to-[#C72030] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/RI-Background_or3xefls.png')] bg-cover bg-center" />
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl text-white relative z-10">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold tracking-wider uppercase border border-white/30">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-6xl font-black mt-6 mb-4">
              Onze Websites & Diensten
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {[
              {
                logo: "/images/mrkortingscode-logo.png",
                name: "MrKortingscode.nl",
                description: "Hoogwaardige kortingscode websites in 6+ landen, die consumenten voorzien van geldige kortingscodes en aanbiedingen van 500+ online winkels.",
                url: "https://mrkortingscode.nl/"
              }
            ].map((company, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:h-full flex flex-col">
                  <div className="mb-6 h-24 flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={240}
                      height={100}
                      className={company.logo.includes('mrkortingscode')
                        ? 'h-24 w-auto group-hover:scale-110 transition-transform duration-300'
                        : 'h-20 w-auto brightness-0 invert group-hover:scale-110 transition-transform duration-300'}
                    />
                  </div>
                  
                  <p className="mb-6 text-sm leading-relaxed text-white/90 flex-grow">
                    {company.description}
                  </p>
                  
                  {company.url ? (
                    <a href={company.url} className="font-bold text-white hover:text-white/80 transition-colors inline-flex items-center gap-2 group/link">
                      <span className="text-lg">{company.name}</span>
                      <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  ) : (
                    <div className="font-bold text-white text-lg">{company.name}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="bg-gradient-to-br from-[#FFFBF6] to-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="px-4 py-2 bg-[#D62D3A]/10 text-[#D62D3A] rounded-full text-sm font-semibold tracking-wider uppercase">
                Neem Contact Op
              </span>
              
              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                Zeg hoi tegen <span className="text-[#D62D3A]">Bram</span>
              </h2>
              
              <p className="text-xl text-[#595658] leading-relaxed">
                Neem contact op met Bram, onze CEO, voor vragen of mogelijke samenwerkingen!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/contact-us">
                  <button className="bg-gradient-to-r from-[#D62D3A] to-[#E63946] text-white px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-elegant transition-all duration-300">
                    Neem contact op
                  </button>
                </a>
                <a href="/about">
                  <button className="bg-white border-2 border-[#D62D3A] text-[#D62D3A] px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#D62D3A] hover:text-white transition-all duration-300">
                    Meer Informatie
                  </button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D62D3A]/20 to-[#E63946]/20 rounded-3xl blur-2xl" />
              <Image
                src="/images/rebel2022-bram-photo_eav1yc77.png"
                alt="Bram - CEO van REBEL Internet"
                width={350}
                height={350}
                className="w-full h-auto rounded-3xl relative z-10 hover:scale-105 transition-transform duration-500 max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer lang="nl" />
    </div>
  )
}
