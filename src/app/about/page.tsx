import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] bg-gradient-to-br from-[#D62D3A] via-[#E63946] to-[#C72030] text-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider uppercase border border-white/20">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mt-6">
              Our Story
            </h1>
          </div>
        </div>
      </section>

      {/* How it Started Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D62D3A]/20 to-[#E63946]/20 rounded-3xl blur-2xl" />
              <Image
                src="/images/rebel2022-bram-photo_eav1yc77.png"
                alt="Bram vd Veer - Founder"
                width={500}
                height={500}
                className="w-full h-auto rounded-3xl shadow-2xl relative z-10"
              />
            </div>
            
            <div className="space-y-6">
              <span className="px-4 py-2 bg-[#D62D3A]/10 text-[#D62D3A] rounded-full text-sm font-semibold tracking-wider uppercase">
                How It Got Started
              </span>
              
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Bram van der Veer
              </h2>

              <div className="space-y-4 text-lg text-[#595658]">
                <p>
                  On a cold winter day in January 2009, Bram van der Veer launched his first price comparison website from his bedroom in Alkmaar, The Netherlands. This proved successful pretty quickly, so in the next couple of years a lot of other comparison websites were launched.
                </p>
                
                <p>
                  A few years later the name REBEL Internet BV was adopted and an office in the centre of Amsterdam was opened. From there REBEL Internet has grown into a company with 12+ employees, with digital projects aiming to help business owners across different platforms with ranking their projects, services or video online.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "Search Engine Optimisation",
                  "Affiliate Marketing", 
                  "Digital Concepts",
                  "Marketplace Rankings"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#D62D3A] rounded-full" />
                    <span className="text-sm font-semibold text-[#595658]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gradient-to-br from-[#FFFBF6] to-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-[#D62D3A]/10 text-[#D62D3A] rounded-full text-sm font-semibold tracking-wider uppercase">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-6 mb-4">
              The REBEL Timeline
            </h2>
            <p className="text-xl text-[#595658] max-w-2xl mx-auto">
              "The only constant is change" - Our entrepreneurial journey since 2008
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                year: "2009",
                title: "The Beginning",
                description: "Launched first price comparison website Prijspiraat.nl - importing physical goods from China"
              },
              {
                year: "2010-2012",
                title: "Affiliate Marketing Era",
                description: "Launched product comparison websites for mobile plans, broadband, coupons & more. Grew to over 200 domain names"
              },
              {
                year: "2013",
                title: "REBEL Internet BV",
                description: "Official rebranding and establishment of holding structure with BV (Limited company)"
              },
              {
                year: "2015",
                title: "MrKortingscode.nl Launch",
                description: "Based in Jordaan, Amsterdam with team of 11. Finding and listing 2000+ coupons & offers per year"
              },
              {
                year: "2016-2020",
                title: "Global Expansion",
                description: "MrKortingscode expanded to 16 countries worldwide. Launched various affiliate concepts across Europe"
              },
              {
                year: "2020-Present",
                title: "WebGeeks & Platform SEO",
                description: "Launched digital webmaster services under WebGeeks brand, focusing on marketplace SEO"
              }
            ].map((milestone, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#D62D3A] to-[#E63946] rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-110 transition-transform">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#D62D3A] transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-[#595658] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="px-4 py-2 bg-[#D62D3A]/10 text-[#D62D3A] rounded-full text-sm font-semibold tracking-wider uppercase">
                Our Philosophy
              </span>
              
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Why We Don't Call Ourselves a Startup
              </h2>

              <p className="text-lg text-[#595658]">
                Some would call us a startup, or a collection of startups (a so called startup studio). Besides being active since 2008, there are other reasons why we think we should not be labeled a startup:
              </p>

              <ul className="space-y-4">
                {[
                  "We have never received external funding",
                  "Though we grow fast, we focus on quality over quantity",
                  "We don't do stand-ups and don't pingpong. We are a remote only company",
                  "We lack the startup mentality in the sense that we leave the office at normal hours. We work smart instead of long",
                  "We stay away from big ego's and world changing visions while explaining what we do"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg className="w-6 h-6 text-[#D62D3A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#595658] text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D62D3A]/10 to-[#E63946]/10 rounded-3xl blur-3xl" />
              <div className="relative text-center p-12 bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-[#D62D3A]/20">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-3xl font-black text-[#D62D3A] mb-4">
                  Not a Startup
                </h3>
                <p className="text-xl text-[#595658] font-semibold">
                  A Proven Business<br/>Since 2008
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Are */}
      <section className="bg-gradient-to-br from-[#D62D3A] via-[#E63946] to-[#C72030] text-white py-24">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold tracking-wider uppercase border border-white/30">
              Who We Are
            </span>
            
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              What We Are
            </h2>

            <p className="text-xl leading-relaxed">
              We are a down-to-earth team of experts focused on execution. We help small and medium-sized business owners compete with the big business which dominate marketplaces and with the big platforms itself.
            </p>

            <p className="text-xl leading-relaxed">
              We're based in the beautiful Beurs van Berlage in the center of Amsterdam, but our team is spread all across the globe as we are a remote company.
            </p>

            <div className="flex justify-center gap-8 pt-8">
              {[
                { label: "No-nonsense", icon: "💪" },
                { label: "Down to earth", icon: "🌍" },
                { label: "Remote", icon: "🌐" }
              ].map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl mb-3">{value.icon}</div>
                  <div className="text-lg font-bold">{value.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="px-4 py-2 bg-[#D62D3A]/10 text-[#D62D3A] rounded-full text-sm font-semibold tracking-wider uppercase">
                Our Vision
              </span>
              
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Leveling the Playing Field
              </h2>

              <div className="space-y-4 text-lg text-[#595658]">
                <p>
                  All online business owners should be able to become visible on the giant marketplaces and platforms we are so reliant upon. We feel nobody should be ignored or hidden, and everybody should receive a fair chance at making it.
                </p>
                
                <p>
                  Therefore we help clients big and small improving their rankings on platforms and marketplaces, where they would usually not be able to. We are a unique company with a unique offering, as not one other company is offering the services like we are doing.
                </p>
                
                <p className="font-bold text-[#D62D3A]">
                  We strive to become the leading marketplace & platform SEO agency on all 100m+ international marketplaces.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D62D3A]/20 to-[#E63946]/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-12 text-center">
                <div className="text-7xl mb-6">🎯</div>
                <h3 className="text-3xl font-black mb-4">Our Goal</h3>
                <p className="text-xl text-[#595658] font-semibold">
                  Leading Marketplace &<br/>Platform SEO Agency
                </p>
                <div className="mt-8 text-5xl font-black text-[#D62D3A]">
                  100M+
                </div>
                <p className="text-sm text-[#595658] mt-2">International Marketplaces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
