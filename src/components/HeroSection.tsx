import Image from 'next/image'
import { LottieAnimation } from './LottieAnimation'

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[630px] bg-gradient-to-br from-[#D62D3A] via-[#E63946] to-[#C72030] text-white py-20 overflow-hidden">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
      
      {/* Background image with overlay */}
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
        {/* Hero content row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[60px] mb-[60px] px-4 md:px-20 max-w-[1440px] mx-auto">
          {/* Content column */}
          <div className="flex-1 max-w-[600px] space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider uppercase border border-white/20">
                Global Digital Excellence
              </span>
            </div>
            
            <h1 className="font-poppins text-[56px] md:text-[64px] font-black leading-[1.1] tracking-tight text-white m-0 mb-6 drop-shadow-2xl">
              Our Holding
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Company
              </span>
            </h1>

            <p className="font-poppins text-xl font-light leading-relaxed text-white/90 m-0 mb-8 max-w-[540px]">
              REBEL Internet is a holding company which has created & ran over{' '}
              <span className="font-bold text-white">30+ unique web concepts</span> worldwide. 
              Ranging from small affiliate marketing websites to marketplace ranking services in China.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#companies" className="group">
                <button className="relative font-poppins text-lg font-bold text-[#D62D3A] bg-white py-5 px-10 rounded-xl border-none cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 overflow-hidden">
                  <span className="relative z-10">Our Companies</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </a>
              
              <a href="/about" className="group">
                <button className="font-poppins text-lg font-semibold text-white bg-white/10 backdrop-blur-sm py-5 px-10 rounded-xl border-2 border-white/30 cursor-pointer transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105">
                  Learn More →
                </button>
              </a>
            </div>
          </div>

          {/* Animation column */}
          <div className="flex-1 max-w-[500px] flex justify-center items-center">
            <div className="w-full h-[400px] flex items-center justify-center drop-shadow-2xl">
              <LottieAnimation />
            </div>
          </div>
        </div>

        {/* Company logos row with enhanced styling */}
        <div className="flex flex-wrap justify-center items-center gap-12 mt-16 px-4 md:px-20 max-w-[1440px] mx-auto">
          <div className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-4 w-full text-center">
            Trusted by Leading Brands
          </div>
          
          {[
            { src: "/images/mps-logo_pdy6y5pa.webp", alt: "Marketplace Studio", url: "https://marketplacestudio.nl/" },
            { src: "/images/mrk-logo_zgpxw1wj.png", alt: "MR Kortingscode", url: "https://mrkortingscode.nl/" },
            { src: "/images/youtube-geeks-logo_ro9wty1v_qn74tjmp.webp", alt: "YouTube Geeks", url: "https://ytgeeks.org/" },
            { src: "/images/IMAGE_09jluh0z_wzizhlr6.webp", alt: "Web Traffic Geeks", url: "https://new.webtrafficgeeks.org/" }
          ].map((logo) => (
            <a 
              key={logo.alt}
              href={logo.url} 
              className="group transition-all duration-300 hover:scale-110 p-4 rounded-xl hover:bg-white/5 backdrop-blur-sm"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={50}
                className="brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                style={{ height: '50px', width: 'auto' }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
