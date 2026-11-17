import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function RemoteHROperationalManager() {
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
              Remote HR Operational Manager
            </h1>
            
            <p className="text-xl leading-relaxed">
              Join our global team and help us build a world-class remote work culture
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
                We are not just a company; we are a fully remote, close-knit team of digital marketing enthusiasts with a global impact. Based in the Netherlands, we have established ourselves as leaders in online marketing, spearheading innovation with multiple brands in digital media, ranking, and beyond.
              </p>
              <p className="text-lg leading-relaxed">
                Trust, camaraderie, and a positive work culture define us. We're looking for an HR Operational Manager who shares our values and can help us continue building an exceptional remote team.
              </p>
            </div>
          </div>

          {/* Role Overview */}
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-6">The Role</h2>
            <div className="prose prose-lg max-w-none text-[#595658]">
              <p className="text-lg leading-relaxed">
                As our Remote HR Operational Manager, you'll be the backbone of our people operations. You'll manage the full employee lifecycle, from recruitment to onboarding to retention, ensuring our remote team feels supported, connected, and empowered to do their best work.
              </p>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-6">What You'll Do</h2>
            <ul className="space-y-4">
              {[
                "Manage end-to-end recruitment processes for remote positions across multiple countries",
                "Coordinate onboarding programs for new team members",
                "Maintain and improve HR documentation, policies, and SOPs",
                "Handle employee relations and serve as a point of contact for HR inquiries",
                "Coordinate performance review processes and career development programs",
                "Manage employee benefits, contracts, and compliance across different regions",
                "Support team culture initiatives and remote engagement activities",
                "Track HR metrics and provide regular reports to leadership",
                "Coordinate with external partners for payroll and legal compliance",
                "Continuously improve HR processes and systems"
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
            <h2 className="text-4xl font-black mb-6">What We're Looking For</h2>
            <ul className="space-y-4">
              {[
                "3+ years of HR experience, preferably in a remote or distributed team environment",
                "Strong understanding of international employment laws and compliance",
                "Excellent organizational and project management skills",
                "Outstanding written and verbal communication in English",
                "Experience with HR systems and tools (HRIS, ATS, etc.)",
                "Proven ability to build relationships and trust with remote team members",
                "Self-motivated with ability to work independently across time zones",
                "Empathetic, diplomatic, and solutions-oriented approach",
                "Experience with remote onboarding and culture building",
                "Bachelor's degree in HR, Business Administration, or related field (preferred)"
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
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "🏠", title: "Fully Remote", description: "Work from anywhere in the world" },
                { icon: "⏰", title: "Flexible Hours", description: "Work-life balance that works for you" },
                { icon: "💰", title: "Competitive Salary", description: "Fair compensation for your expertise" },
                { icon: "🎁", title: "Christmas Bonus", description: "Extra appreciation at year-end" },
                { icon: "🎉", title: "Gift Surprises", description: "Thoughtful surprises throughout the year" },
                { icon: "🌍", title: "Global Team", description: "Collaborate with amazing colleagues worldwide" },
                { icon: "📚", title: "Learning Budget", description: "Continuous professional development" },
                { icon: "🌴", title: "Generous PTO", description: "Time to recharge and enjoy life" },
                { icon: "🚀", title: "Career Growth", description: "Leadership opportunities as we scale" },
                { icon: "💪", title: "Great Culture", description: "Family atmosphere with low turnover" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#FFFBF6] to-white p-6 rounded-2xl shadow-md">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-[#595658]">{benefit.description}</p>
                </div>
              ))}
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
            <h2 className="text-4xl font-black mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8">
              We'd love to hear from you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact-us">
                <button className="bg-white text-[#D62D3A] px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:transition-all duration-300">
                  Submit Your Application
                </button>
              </a>
            </div>
            <p className="text-sm mt-6 opacity-80">
              Send your CV and cover letter to info@rebelinternet.eu
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
