import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function TechVA() {
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
              Tech VA
            </h1>
            
            <p className="text-xl leading-relaxed">
              Join our global remote team as a Technical Virtual Assistant
            </p>
          </div>
        </div>
      </section>

      {/* Job Content */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* About the Role */}
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-6">About the Role</h2>
            <div className="prose prose-lg max-w-none text-[#595658]">
              <p className="text-lg leading-relaxed">
                We are looking for a skilled Technical Virtual Assistant to join our remote team. This role combines technical expertise with strong organizational and communication skills to support our digital operations and help our team work more efficiently.
              </p>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-6">Responsibilities</h2>
            <ul className="space-y-4">
              {[
                "Provide technical support for various digital tools and platforms",
                "Manage and maintain documentation using our SOP systems",
                "Assist with website maintenance and basic troubleshooting",
                "Coordinate with team members across different time zones",
                "Handle administrative tasks related to digital projects",
                "Monitor and report on technical issues and project progress",
                "Support content management and digital asset organization",
                "Assist with data entry, analysis, and reporting tasks"
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
            <h2 className="text-4xl font-black mb-6">Requirements</h2>
            <ul className="space-y-4">
              {[
                "Strong technical aptitude and ability to learn new tools quickly",
                "Excellent written and verbal communication skills in English",
                "Experience with digital tools, project management software, and productivity apps",
                "Basic understanding of websites, SEO, or digital marketing (preferred)",
                "Highly organized with strong attention to detail",
                "Self-motivated and able to work independently in a remote environment",
                "Comfortable working with team members across different time zones",
                "Reliable internet connection and professional home office setup"
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
                { icon: "🏠", title: "Fully Remote", description: "Work from anywhere" },
                { icon: "⏰", title: "Flexible Hours", description: "Work-life balance" },
                { icon: "📚", title: "Learning Budget", description: "Continuous growth" },
                { icon: "🌴", title: "Paid Time Off", description: "Generous vacation" },
                { icon: "💻", title: "Equipment", description: "Tools to succeed" },
                { icon: "🤝", title: "Great Team", description: "Global colleagues" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#FFFBF6] to-white p-6 rounded-2xl shadow-md">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-[#595658]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Section */}
          <div className="bg-gradient-to-br from-[#D62D3A] to-[#E63946] text-white p-12 rounded-3xl text-center">
            <h2 className="text-4xl font-black mb-4">Ready to Apply?</h2>
            <p className="text-xl mb-8">
              Join our team and be part of something great
            </p>
            <a href="/contact-us">
              <button className="bg-white text-[#D62D3A] px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:transition-all duration-300">
                Submit Your Application
              </button>
            </a>
            <p className="text-sm mt-6 opacity-80">
              Or email your resume to info@rebelinternet.eu
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
