import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SunlightField } from '@/components/SunlightField'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-[#fef9ed]">
      <Header />
      
      {/* Hero Section with Sunlight */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <SunlightField />
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="text-eyebrow text-[#fef9ed] mb-4">About Us</p>
            <h1 className="text-section-statement text-[#fef9ed]">
              Our Story
            </h1>
          </div>
        </div>
      </section>

      {/* How it Started Section */}
      <section className="py-[120px] px-4">
        <div className="max-w-[1150px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <Image
                src="/images/rebel2022-bram-photo_eav1yc77.png"
                alt="Bram van der Veer - Founder"
                width={567}
                height={649}
                className="w-full h-auto rounded-[4.2px]"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-eyebrow text-[#5d524b]">How It Got Started</p>
              
              <h2 className="text-heading text-[#5d524b]">
                Bram van der Veer
              </h2>

              <div className="space-y-4">
                <p className="text-body text-[#5d524b]/80">
                  On a cold winter day in January 2009, Bram van der Veer launched his first price comparison website from his bedroom in Alkmaar, The Netherlands. This proved successful pretty quickly, so in the next couple of years a lot of other comparison websites were launched.
                </p>
                
                <p className="text-body text-[#5d524b]/80">
                  A few years later the name REBEL Internet BV was adopted and an office in the centre of Amsterdam was opened. From there REBEL Internet has grown into a company with 12+ employees, with digital projects aiming to help business owners across different platforms with ranking their projects, services or video online.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4">
                {[
                  "Search Engine Optimisation",
                  "Affiliate Marketing", 
                  "Digital Concepts",
                  "Marketplace Rankings"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#D62D3A] rounded-full" />
                    <span className="text-caption text-[#5d524b]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-[120px] px-4 bg-[#f7f1e3]">
        <div className="max-w-[1150px] mx-auto">
          <div className="text-center mb-[120px] max-w-[800px] mx-auto">
            <p className="text-eyebrow text-[#5d524b] mb-4">Our Journey</p>
            <h2 className="text-section-statement text-[#5d524b] mb-6">
              The REBEL Timeline
            </h2>
            <p className="text-body text-[#5d524b]/80">
              "The only constant is change" - Our entrepreneurial journey since 2008
            </p>
          </div>

          <div className="space-y-[21.7px] max-w-4xl mx-auto">
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
              <div key={idx} className="capability-row">
                <div className="flex-shrink-0 w-20">
                  <div className="text-[32px] leading-none font-serif text-[#D62D3A] font-semibold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 px-8">
                  <h3 className="text-editorial-title text-[#5d524b] mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-body text-[#5d524b]/80">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different - Centered Statement */}
      <section className="py-[266.7px] px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-eyebrow text-[#5d524b] mb-6">Our Philosophy</p>
          
          <h2 className="text-section-statement text-[#5d524b] mb-8">
            Why We Don't Call Ourselves a Startup
          </h2>

          <p className="text-statement-support text-[#5d524b]/80 mb-12">
            Some would call us a startup, or a collection of startups (a so called startup studio). Besides being active since 2008, there are other reasons why we think we should not be labeled a startup.
          </p>

          <div className="max-w-[600px] mx-auto text-left space-y-3">
            {[
              "We have never received external funding",
              "Though we grow fast, we focus on quality over quantity",
              "We don't do stand-ups and don't pingpong. We are a remote only company",
              "We lack the startup mentality in the sense that we leave the office at normal hours. We work smart instead of long",
              "We stay away from big ego's and world changing visions while explaining what we do"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 text-[#D62D3A]">→</div>
                <span className="text-body text-[#5d524b]/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Are & Vision Combined */}
      <section className="py-[120px] px-4 bg-[#f7f1e3]">
        <div className="max-w-[1150px] mx-auto">
          <div className="max-w-[800px] mx-auto text-center mb-[120px]">
            <p className="text-eyebrow text-[#5d524b] mb-4">Who We Are</p>
            
            <h2 className="text-section-statement text-[#5d524b] mb-8">
              What We Are
            </h2>

            <p className="text-statement-support text-[#5d524b]/80 mb-6">
              We are a down-to-earth team of experts focused on execution. We help small and medium-sized business owners compete with the big business which dominate marketplaces and with the big platforms itself.
            </p>

            <p className="text-statement-support text-[#5d524b]/80">
              We're based in the beautiful Beurs van Berlage in the center of Amsterdam, but our team is spread all across the globe as we are a remote company.
            </p>

            <div className="flex justify-center gap-12 pt-12">
              {[
                { label: "No-nonsense", icon: "💪" },
                { label: "Down to earth", icon: "🌍" },
                { label: "Remote", icon: "🌐" }
              ].map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <div className="text-caption text-[#5d524b]">{value.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="max-w-[800px] mx-auto text-center">
            <p className="text-eyebrow text-[#5d524b] mb-4">Our Vision</p>
            
            <h2 className="text-heading text-[#5d524b] mb-8">
              Leveling the Playing Field
            </h2>

            <div className="space-y-6">
              <p className="text-body text-[#5d524b]/80">
                All online business owners should be able to become visible on the giant marketplaces and platforms we are so reliant upon. We feel nobody should be ignored or hidden, and everybody should receive a fair chance at making it.
              </p>
              
              <p className="text-body text-[#5d524b]/80">
                Therefore we help clients big and small improving their rankings on platforms and marketplaces, where they would usually not be able to. We are a unique company with a unique offering, as not one other company is offering the services like we are doing.
              </p>
              
              <p className="text-signed-statement text-[#D62D3A]">
                We strive to become the leading marketplace & platform SEO agency on all 100m+ international marketplaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
