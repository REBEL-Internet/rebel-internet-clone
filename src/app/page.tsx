import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <HeroSection />
      
      {/* Logo Strip Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <Image src="/images/mps-logo_pdy6y5pa.webp" alt="Marketplace Studio" width={120} height={30} className="h-8 w-auto" />
            <Image src="/images/mrk-logo_zgpxw1wj.png" alt="MrKortingscode" width={120} height={30} className="h-8 w-auto" />
            <Image src="/images/youtube-geeks-logo_ro9wty1v_qn74tjmp.webp" alt="YouTube Geeks" width={120} height={30} className="h-8 w-auto" />
            <Image src="/images/IMAGE_09jluh0z_wzizhlr6.webp" alt="Web Traffic Geeks" width={80} height={30} className="h-8 w-auto" />
          </div>
        </div>
      </section>

      {/* About Section - Born in Alkmaar */}
      <section className="bg-[#FFFBF6] py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-[40px] font-extrabold leading-tight mb-6">
                Born in Alkmaar, matured in Amsterdam!
              </h1>
              <p className="text-base leading-8 text-[#595658]">
                REBEL consists of various digital services which are being created, grown and managed by a 100% remote team of motivated experts. Visit our companies websites and experience the effectiveness of our services today.
              </p>
            </div>
            <div>
              <Image 
                src="/images/Group-8-modified_yfpwu32w.png" 
                alt="REBEL Team" 
                width={600} 
                height={600} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Section - Join our team */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-[40px] font-extrabold mb-4">Join our team</h2>
            <p className="text-base text-[#595658]">See our open positions below</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Job Card 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <Image src="/images/Rectangle-91_mku6xkst.png" alt="Tech VA" width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h5 className="text-lg font-extrabold mb-3">Experienced Technical VA with wordpress experience</h5>
                <a href="/tech-va" className="text-[#D62D3A] hover:underline inline-flex items-center gap-2">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <Image src="/images/Rectangle-92_c1677aaf.png" alt="Python Developer" width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h5 className="text-lg font-extrabold mb-3">Experienced Python and WordPress Developer</h5>
                <a href="/Python-WordPress-Developer" className="text-[#D62D3A] hover:underline inline-flex items-center gap-2">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Job Card 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <Image src="/images/Screenshot-2024-05-22-083634-1-p3bhh.png" alt="HR Manager" width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h5 className="text-lg font-extrabold mb-3">HR Operations Manager</h5>
                <a href="/Remote-HR-Operational-Manager" className="text-[#D62D3A] hover:underline inline-flex items-center gap-2">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Job Card 4 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <Image src="/images/Screenshot20241212174748-CvvBm.png" alt="Data Analyst" width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h5 className="text-lg font-extrabold mb-3">Data Analyst</h5>
                <a href="/" className="text-[#D62D3A] hover:underline inline-flex items-center gap-2">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="bg-[#D62D3A] py-20">
        <div className="container mx-auto px-4 max-w-6xl text-white">
          <h2 className="text-4xl md:text-[40px] font-extrabold text-center mb-12">Our Companies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company 1 */}
            <div className="text-center">
              <a href="https://webgeeks.ly/" className="block mb-4">
                <Image src="/images/WG-logo_jnkwt27z.svg" alt="WebGeeks.ly" width={150} height={150} className="mx-auto h-24 w-auto brightness-0 invert" />
              </a>
              <p className="mb-4 text-sm">Ranking your product or service on any marketplace. The leading SEO no-cure no-pay platform ranking service on the internet.</p>
              <a href="https://webgeeks.ly/" className="font-bold hover:underline">
                <h5 className="text-lg font-extrabold">WebGeeks.ly</h5>
              </a>
            </div>

            {/* Company 2 */}
            <div className="text-center">
              <a href="https://mrkortingscode.nl/" className="block mb-4">
                <Image src="/images/mr-korting_4lnzvsqn.png" alt="MrKortingscode.nl" width={150} height={150} className="mx-auto h-24 w-auto brightness-0 invert" />
              </a>
              <p className="mb-4 text-sm">Quality coupon websites in 6+ countries, serving consumers with valid coupons and offer of 500+ online shops.</p>
              <a href="https://mrkortingscode.nl/" className="font-bold hover:underline">
                <h5 className="text-lg font-extrabold">MrKortingscode.nl</h5>
              </a>
            </div>

            {/* Company 3 */}
            <div className="text-center">
              <div className="block mb-4">
                <Image src="/images/NicheBear-Logo_mx3ea497.svg" alt="NicheBear.com" width={150} height={150} className="mx-auto h-24 w-auto brightness-0 invert" />
              </div>
              <p className="mb-4 text-sm">Small niche-targeted websites focused on providing clients with quality content & comparisons of products and services in The Netherlands.</p>
              <h5 className="text-lg font-extrabold">NicheBear.com</h5>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Say Hi to Bram */}
      <section className="bg-[#FFFBF6] py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-[40px] font-extrabold leading-tight mb-4">Say Hi! to Bram</h2>
              <p className="text-base leading-8 text-[#595658] mb-8">
                Contact Bram our CEO in case of questions or potential partnerships!
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us">
                  <button className="bg-[#D62D3A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-lg transition-all">
                    Contact us
                  </button>
                </a>
                <a href="/about">
                  <button className="bg-white border-2 border-[#D62D3A] text-[#D62D3A] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#D62D3A] hover:text-white transition-all">
                    Find Out More
                  </button>
                </a>
              </div>
            </div>
            <div>
              <Image 
                src="/images/rebel2022-bram-photo_eav1yc77.png" 
                alt="Bram - CEO of REBEL Internet" 
                width={500} 
                height={500} 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
