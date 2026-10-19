import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[630px] bg-[#D62D3A] text-white py-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/RI-Background_or3xefls.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 w-full px-20">
        {/* Hero content row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[60px] mb-[60px]">
          {/* Content column */}
          <div className="flex-1 max-w-[600px]">
            <h1 className="font-poppins text-[52px] font-extrabold leading-[62.4px] tracking-[-0.02em] text-white m-0 mb-6">
              Our Holding Company
            </h1>
            <p className="font-poppins text-lg font-normal leading-[28.8px] text-white m-0 mb-8">
              REBEL Internet is a holding company which has created & ran over 30+ unique web concepts worldwide. Ranging from small affiliate marketing websites to marketplace ranking services in China.
            </p>
            <a href="/#companies">
              <button className="font-poppins text-lg font-semibold text-[#D62D3A] bg-white py-4 px-8 rounded-lg border-none cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                Our Companies
              </button>
            </a>
          </div>

          {/* Animation column */}
          <div className="flex-1 max-w-[500px] flex justify-center items-center">
            <div className="w-full h-[400px] flex items-center justify-center">
              {/* Lottie animation placeholder */}
              <div className="text-white/50 text-center">Lottie Animation</div>
            </div>
          </div>
        </div>

        {/* Company logos row */}
        <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
          <a href="https://marketplacestudio.nl/" className="transition-opacity duration-200 hover:opacity-70">
            <Image
              src="/images/mps-logo_pdy6y5pa.webp"
              alt="Marketplace Studio"
              width={200}
              height={50}
              className="h-[50px] w-auto brightness-0 invert"
            />
          </a>
          <a href="https://mrkortingscode.nl/" className="transition-opacity duration-200 hover:opacity-70">
            <Image
              src="/images/mrk-logo_zgpxw1wj.png"
              alt="MR Kortingscode"
              width={200}
              height={50}
              className="h-[50px] w-auto brightness-0 invert"
            />
          </a>
          <a href="https://ytgeeks.org/" className="transition-opacity duration-200 hover:opacity-70">
            <Image
              src="/images/youtube-geeks-logo_ro9wty1v_qn74tjmp.webp"
              alt="YouTube Geeks"
              width={200}
              height={50}
              className="h-[50px] w-auto brightness-0 invert"
            />
          </a>
          <a href="https://new.webtrafficgeeks.org/" className="transition-opacity duration-200 hover:opacity-70">
            <Image
              src="/images/IMAGE_09jluh0z_wzizhlr6.webp"
              alt="Web Traffic Geeks"
              width={200}
              height={50}
              className="h-[50px] w-auto brightness-0 invert"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
