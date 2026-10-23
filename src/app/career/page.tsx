import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function Career() {
  const jobs = [
    {
      title: "Tech VA",
      location: "Remote",
      type: "Full-time",
      href: "/tech-va"
    },
    {
      title: "Python WordPress Developer",
      location: "Remote",
      type: "Full-time",
      href: "/Python-WordPress-Developer"
    },
    {
      title: "Remote HR Operational Manager",
      location: "Remote",
      type: "Full-time",
      href: "/Remote-HR-Operational-Manager"
    }
  ];

  const testimonials = [
    {
      name: "Petros",
      quote: "I have been working with the company since May 2022. Since every task is documented in the SOP, anyone can work on any task by referring to the SOP. The company consists of remote teams from different parts of the world. The team members are polite, dedicated, and communicative to support each other."
    },
    {
      name: "Rhea",
      quote: "Being a part of the Rebel Internet family has been one of the greatest privileges of my years working as a Writer and VA. Bram and the rest of the team have been so kind, generous, and supportive. It's truly a pleasure to count myself as a Rebel."
    },
    {
      name: "Uzair",
      quote: "To be honest without bragging I should give 10/10. REBEL is the first company in my career where I truly think that this is a great place to work, the reason being the smoothness & simplicity of processes and systems. And above all, the most cooperative and responsive team."
    },
    {
      name: "Kenneth",
      quote: "The job description really got me. When I read the job description I was unsure at first but I really wanted to challenge myself and I wanted to go out of my comfort zone. I also knew from the start that joining this company will definitely allow me to learn more about the business."
    },
    {
      name: "Talha",
      quote: "I'm searching for a multi-purpose job because I've already experience in finance but nothing in other fields which I think are also important for my career. One more thing is the remuneration offer that you gave to me at starter and also you employed me as a permanent employee, I don't think so anyone would lose such opportunity."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] bg-gradient-to-br from-[#D62D3A] via-[#E63946] to-[#C72030] text-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider uppercase border border-white/20">
              Join Our Team
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mt-6 mb-6">
              Be Part of Team REBEL Now!
            </h1>
            <p className="text-xl leading-relaxed">
              We are not just a company; we are a fully remote, close-knit team of digital marketing enthusiasts with a global impact. Based in the Netherlands, we have established ourselves as leaders in online marketing, spearheading innovation with multiple brands in digital media, ranking, and beyond. Trust, camaraderie, and a positive work culture define us.
            </p>
          </div>
        </div>
      </section>

      {/* What's Different Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              What's Different About Working at REBEL Internet
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🌍",
                title: "We're Global",
                description: "As part of an international team, you'll get to share your expertise and expand your knowledge with colleagues from around the world. We encourage collaboration across teams and locations because we know how we can bring forward the best ideas."
              },
              {
                icon: "🚀",
                title: "We're Growing Fast",
                description: "Our team is growing rapidly, and we're always looking for the best talent to join us on our mission. You'll be a part of an energetic team that moves quickly to bring outstanding results."
              },
              {
                icon: "👂",
                title: "We Listen",
                description: "Employees have a voice in what we do. We challenge and support each other to find robust solutions that solve problems for our clients and partners."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#FFFBF6] to-white p-8 rounded-2xl shadow-lg hover:shadow-elegant hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#595658] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#D62D3A]/5 to-[#E63946]/5 rounded-3xl p-12">
            <h3 className="text-3xl font-black mb-8 text-center">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: "💎", label: "Radical Transparency" },
                { icon: "📝", label: "Effectively Document It" },
                { icon: "⚡", label: "Be Proactive" },
                { icon: "💬", label: "Efficiently Communicate" },
                { icon: "🧪", label: "Let's Test It" }
              ].map((value, idx) => (
                <div key={idx} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <div className="font-bold text-[#595658]">{value.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="bg-gradient-to-br from-[#FFFBF6] to-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-[#D62D3A]/10 text-[#D62D3A] rounded-full text-sm font-semibold tracking-wider uppercase">
              Open Positions
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-6 mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-[#595658]">
              See our open positions below
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {jobs.map((job, idx) => (
              <Link key={idx} href={job.href}>
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D62D3A] to-[#E63946] rounded-xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                      💼
                    </div>
                    <span className="px-3 py-1 bg-[#D62D3A]/10 text-[#D62D3A] rounded-full text-xs font-semibold">
                      {job.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D62D3A] transition-colors">
                    {job.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-[#595658] mb-6">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-semibold">{job.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[#D62D3A] font-bold group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-[#595658]">
              You could also be eligible for the following benefits as part of the REBEL Internet team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏠", title: "Fully Remote", description: "Work from anywhere in the world" },
              { icon: "⏰", title: "Flexible Hours", description: "Work smart, not long" },
              { icon: "📚", title: "Learning Budget", description: "Continuous growth opportunities" },
              { icon: "🌴", title: "Paid Time Off", description: "Generous vacation policy" },
              { icon: "💻", title: "Equipment", description: "Tools you need to succeed" },
              { icon: "🎯", title: "Clear Goals", description: "Well-documented processes" },
              { icon: "🤝", title: "Great Team", description: "Global, supportive colleagues" },
              { icon: "📈", title: "Growth Path", description: "Career development opportunities" }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#FFFBF6] to-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-[#595658]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="bg-gradient-to-br from-[#FFFBF6] to-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Our Hiring Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Apply for the jobs that match your skills and interest. If you want, link to your portfolio or other examples of work that demonstrate you're the one for the role."
              },
              {
                step: "02",
                title: "Screening Interview",
                description: "Congratulations on making it to the screening interview stage! This is your chance to connect with our HR team. We're eager to learn more about your professional journey, discuss your aspirations, and ensure there's a great fit between your goals and what REBEL has to offer."
              },
              {
                step: "03",
                title: "Skills Assessment",
                description: "We believe in the power of skills, and this step is designed to showcase yours! You'll be given a test task relevant to the position you're applying for. Use this opportunity to demonstrate your expertise and creativity."
              },
              {
                step: "04",
                title: "Final Interview",
                description: "Congratulations on reaching the final interview stage! This is where we delve deeper into your experiences, values, and how you envision contributing to REBEL. It's a two-way conversation, so feel free to ask questions and get to know us better."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D62D3A] to-[#E63946] rounded-xl flex items-center justify-center text-white font-black text-xl">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[#595658] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Here's What the Family Has to Say
            </h2>
            <p className="text-xl text-[#595658]">
              It's not enough that the company says its remote employees are happy working for REBEL Internet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#FFFBF6] to-white p-8 rounded-2xl shadow-lg hover:shadow-elegant hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-4 text-[#D62D3A]">"</div>
                <p className="text-[#595658] leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D62D3A] to-[#E63946] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-[#595658]">Team Member</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#D62D3A] via-[#E63946] to-[#C72030] text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Join Team REBEL?
          </h2>
          <p className="text-xl mb-8">
            Check out our open positions and apply today
          </p>
          <a href="#positions">
            <button className="bg-white text-[#D62D3A] px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
              See Open Positions
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
