import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function PythonWordPressDeveloper() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] bg-gradient-to-br from-[#D62D3A] via-[#E63946] to-[#C72030] text-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/career" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Careers
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider uppercase border border-white/20">
                Full-time • Remote
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Python WordPress Developer
            </h1>
            
            <p className="text-xl leading-relaxed">
              Experienced Technical VA with WordPress and Python expertise
            </p>
          </div>
        </div>
      </section>

      {/* Job Content */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* About Us */}
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-6">About Us</h2>
            <div className="prose prose-lg max-w-none text-[#595658]">
              <p className="text-lg leading-relaxed mb-4">
                We are not just a company; we are a fully remote, close-knit team of digital marketing enthusiasts with a global impact. Based in the Netherlands, we have established ourselves as leaders in online marketing, spearheading innovation with multiple brands in digital media, ranking, and beyond. Trust, camaraderie, and a positive work culture define us. Some of our brands are Etsygeeks.org and Webtrafficgeeks.org.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                If you're an A-player passionate about technology, with a keen eye for detail, and you want to be part of a team driving innovation in online marketing, we want you!
              </p>
              <p className="text-lg leading-relaxed">
                Join us on this extraordinary journey as we shape the future of internet concepts. Be a part of a company that values A-players, fosters a positive work culture, and provides boundless opportunities for personal and professional development. Your adventure begins with us!
              </p>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-6">What You'll Do</h2>
            <ul className="space-y-4">
              {[
                "Dive into data entry, research, and website formatting",
                "Lead testing activities by estimating, prioritizing, planning, and coordinating",
                "Unleash your creativity in designing, developing, and executing automation scripts with open-source tools",
                "Handle outreach and communication tasks",
                "Perform basic SEO tasks (we will train you)",
                "WordPress development and customization",
                "Python scripting and automation"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 bg-gradient-to-br from-[#FFFBF6] to-white p-4 rounded-xl">
                  <svg className="w-6 h-6 text-[#D62D3A] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#595658] text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Offer */}
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-6">What We Offer</h2>
            <ul className="space-y-4">
              {[
                "Long-term contract - never worry about constantly finding new clients",
                "Christmas Bonus",
                "Gift Surprises throughout the year",
                "Exciting environment collaborating with colleagues worldwide",
                "Flexible Schedule - work-life balance",
                "Great Culture with an amazing, fun team",
                "Well-being coaching to enhance productivity, reach goals, and conquer challenges",
                "Leadership opportunities to learn and grow within the company",
                "Contribute to a company with a massive vision and growth plan"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 bg-gradient-to-br from-[#FFFBF6] to-white p-4 rounded-xl">
                  <svg className="w-6 h-6 text-[#D62D3A] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#595658] text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-6">We're Looking For</h2>
            <div className="bg-gradient-to-br from-[#FFFBF6] to-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-[#595658] leading-relaxed">
                <strong>A-players</strong> who bring sharp attention to detail, technical expertise in WordPress and Python, and a passion for automation and efficiency. You should be self-motivated, able to work independently in a remote environment, and eager to grow with our team.
              </p>
            </div>
          </div>

          {/* Culture */}
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-6">Our Culture</h2>
            <div className="prose prose-lg max-w-none text-[#595658]">
              <p className="text-lg leading-relaxed">
                Here at REBEL Internet, we like to think of ourselves as a family. As such, we work to make sure that we grow bigger and happier instead of the other way around. Our efforts and methods have resulted in incredibly low turnover rates, with our remote employees enjoying much better job security than in most other companies.
              </p>
            </div>
          </div>

          {/* Apply Section */}
          <div className="bg-gradient-to-br from-[#D62D3A] to-[#E63946] text-white p-12 rounded-3xl text-center">
            <h2 className="text-4xl font-black mb-4">Ready to Join Us?</h2>
            <p className="text-xl mb-8">
              Send us your CV, Portfolio, or LinkedIn Profile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:limbamk@gmail.com">
                <button className="bg-white text-[#D62D3A] px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  Email Your Application
                </button>
              </a>
              <a href="/contact-us">
                <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:bg-white/10 transition-all duration-300">
                  Contact Us
                </button>
              </a>
            </div>
            <p className="text-sm mt-6 opacity-80">
              limbamk@gmail.com
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
