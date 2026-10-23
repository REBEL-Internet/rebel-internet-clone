import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function SocialResponsibility() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] bg-gradient-to-br from-[#D62D3A] via-[#E63946] to-[#C72030] text-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider uppercase border border-white/20">
              Our Commitment
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mt-6 mb-6">
              Social Responsibility
            </h1>
            <p className="text-xl leading-relaxed">
              Making a positive impact on our community and the world around us
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Charities
              </h2>
              <p className="text-xl text-[#595658] leading-relaxed">
                Besides providing ranking services, we believe it's important to make our contribution to improve society. We try to do our part by supporting several charities across the globe. We've chosen those based on the aims they support and because we believe they deserve a little extra help.
              </p>
              <p className="text-xl text-[#595658] leading-relaxed mt-4">
                We are aware of our privileged position in society. Not everyone has had the fortunate position to be healthy and to live in a wealthy country like most of us do.
              </p>
            </div>

            {/* Charity Support */}
            <div className="bg-gradient-to-br from-[#FFFBF6] to-white p-12 rounded-3xl shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D62D3A] to-[#E63946] rounded-2xl flex items-center justify-center text-white text-3xl">
                  💝
                </div>
                <h3 className="text-3xl font-black">Annual Charity Donations</h3>
              </div>
              <p className="text-lg text-[#595658] leading-relaxed mb-6">
                Each year, we donate money to charities in the Netherlands and abroad. We carefully select organizations that align with our values and make a real difference in people's lives.
              </p>
              <div className="bg-[#D62D3A]/5 p-6 rounded-xl border-l-4 border-[#D62D3A]">
                <p className="text-[#595658] leading-relaxed">
                  <strong>Are you running a charity which is suited to be supported by us?</strong> Let us know and we'll contact you as soon as possible!
                </p>
              </div>
            </div>

            {/* Blogger Support */}
            <div className="bg-gradient-to-br from-[#FFFBF6] to-white p-12 rounded-3xl shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D62D3A] to-[#E63946] rounded-2xl flex items-center justify-center text-white text-3xl">
                  ✍️
                </div>
                <h3 className="text-3xl font-black">Supporting Local Bloggers</h3>
              </div>
              <p className="text-lg text-[#595658] leading-relaxed mb-6">
                We support local bloggers in and outside the Netherlands by sponsoring them, organizing competitions, or helping them in other ways. We believe in empowering content creators to share their voices and grow their audiences.
              </p>
            </div>

            {/* Scholarships */}
            <div className="bg-gradient-to-br from-[#FFFBF6] to-white p-12 rounded-3xl shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D62D3A] to-[#E63946] rounded-2xl flex items-center justify-center text-white text-3xl">
                  🎓
                </div>
                <h3 className="text-3xl font-black">Educational Scholarships</h3>
              </div>
              <p className="text-lg text-[#595658] leading-relaxed mb-6">
                We've been offering scholarships in the Netherlands and abroad to give students a chance to study in ways that normally would not be possible for them. Education is a powerful tool for change, and we're proud to help students achieve their dreams.
              </p>
            </div>

            {/* Micro-Credits */}
            <div className="bg-gradient-to-br from-[#FFFBF6] to-white p-12 rounded-3xl shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D62D3A] to-[#E63946] rounded-2xl flex items-center justify-center text-white text-3xl">
                  🌍
                </div>
                <h3 className="text-3xl font-black">Micro-Credit Investments</h3>
              </div>
              <p className="text-lg text-[#595658] leading-relaxed mb-6">
                REBEL Internet BV is investing in micro-credits to help small entrepreneurs in emerging markets access the capital they need to grow their businesses. These investments provide crucial financial support to individuals in regions with limited access to traditional bank loans, helping to improve livelihoods and foster economic growth in underserved communities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-[#D62D3A] via-[#E63946] to-[#C72030] text-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our Impact by Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "100%", label: "Remote Workforce" },
              { number: "12+", label: "Countries Represented" },
              { number: "15+", label: "Years in Business" },
              { number: "100%", label: "Paperless Operations" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-5xl md:text-6xl font-black mb-3">{stat.number}</div>
                <div className="text-lg font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Our Ongoing Commitment
            </h2>
            <p className="text-xl text-[#595658] leading-relaxed mb-8">
              Social responsibility isn't a one-time initiative—it's an ongoing commitment woven into everything we do. As we grow, we continue to find new ways to make a positive impact on our community, our industry, and the world.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="/career">
                <button className="bg-gradient-to-r from-[#D62D3A] to-[#E63946] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-elegant transition-all duration-300">
                  Join Our Team
                </button>
              </a>
              <a href="/contact-us">
                <button className="bg-white text-[#D62D3A] px-8 py-4 rounded-xl font-bold text-lg border-2 border-[#D62D3A] hover:scale-105 hover:shadow-lg transition-all duration-300">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
