import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SunlightField } from '@/components/SunlightField'
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
    <div className="min-h-screen bg-[#fef9ed]">
      <Header />
      
      {/* Hero Section with Sunlight */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <SunlightField />
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="text-eyebrow text-[#fef9ed] mb-4">Join Our Team</p>
            <h1 className="text-section-statement text-[#fef9ed] mb-8">
              Be Part of Team REBEL Now!
            </h1>
            <p className="text-statement-support text-[#fef9ed]">
              We are not just a company; we are a fully remote, close-knit team of digital marketing enthusiasts with a global impact.
            </p>
          </div>
        </div>
      </section>

      {/* What's Different Section */}
      <section className="py-[120px] px-4">
        <div className="max-w-[1150px] mx-auto">
          <div className="text-center mb-[120px] max-w-[800px] mx-auto">
            <h2 className="text-heading text-[#5d524b] mb-6">
              What's Different About Working at REBEL Internet
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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
              <div key={idx} className="editorial-card p-8">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-editorial-title text-[#5d524b] mb-3">{item.title}</h3>
                <p className="text-body text-[#5d524b]/80">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#f7f1e3] rounded-[4.2px] p-12">
            <h3 className="text-heading text-[#5d524b] mb-8 text-center">Our Core Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { icon: "💎", label: "Radical Transparency" },
                { icon: "📝", label: "Effectively Document It" },
                { icon: "⚡", label: "Be Proactive" },
                { icon: "💬", label: "Efficiently Communicate" },
                { icon: "🧪", label: "Let's Test It" }
              ].map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <div className="text-caption text-[#5d524b]">{value.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-[120px] px-4 bg-[#f7f1e3]">
        <div className="max-w-[1150px] mx-auto">
          <div className="text-center mb-16 max-w-[800px] mx-auto">
            <p className="text-eyebrow text-[#5d524b] mb-4">Open Positions</p>
            <h2 className="text-heading text-[#5d524b] mb-4">
              Join Our Team
            </h2>
            <p className="text-body text-[#5d524b]/80">
              See our open positions below
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {jobs.map((job, idx) => (
              <Link key={idx} href={job.href}>
                <div className="editorial-card p-8 cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">💼</div>
                    <span className="text-caption text-[#D62D3A] bg-[#D62D3A]/10 px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                  
                  <h3 className="text-editorial-title text-[#5d524b] mb-3 hover:text-[#D62D3A] transition-colors">
                    {job.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-caption text-[#5d524b] mb-6">
                    <span>📍</span>
                    <span>{job.location}</span>
                  </div>

                  <div className="text-body text-[#D62D3A]">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Hiring Process Combined */}
      <section className="py-[120px] px-4">
        <div className="max-w-[1150px] mx-auto">
          
          {/* Benefits */}
          <div className="mb-[120px]">
            <div className="text-center mb-16 max-w-[800px] mx-auto">
              <h2 className="text-heading text-[#5d524b] mb-6">
                What We Offer
              </h2>
              <p className="text-body text-[#5d524b]/80">
                You could also be eligible for the following benefits as part of the REBEL Internet team
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                <div key={idx} className="text-center">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-eyebrow text-[#5d524b] mb-2">{benefit.title}</h3>
                  <p className="text-caption text-[#5d524b]/80">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring Process */}
          <div>
            <div className="text-center mb-16 max-w-[800px] mx-auto">
              <h2 className="text-heading text-[#5d524b] mb-6">
                Our Hiring Process
              </h2>
            </div>

            <div className="space-y-[21.7px]">
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
                <div key={idx} className="capability-row">
                  <div className="flex-shrink-0 w-20">
                    <div className="text-[56.9px] leading-none font-serif text-[#D62D3A] font-semibold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 px-8">
                    <h3 className="text-editorial-title text-[#5d524b] mb-2">{item.title}</h3>
                    <p className="text-body text-[#5d524b]/80">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[120px] px-4 bg-[#f7f1e3]">
        <div className="max-w-[1150px] mx-auto">
          <div className="text-center mb-16 max-w-[800px] mx-auto">
            <h2 className="text-heading text-[#5d524b] mb-6">
              Here's What the Family Has to Say
            </h2>
            <p className="text-body text-[#5d524b]/80">
              It's not enough that the company says its remote employees are happy working for REBEL Internet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="editorial-card p-8">
                <div className="text-4xl mb-4 text-[#D62D3A]">"</div>
                <p className="text-body text-[#5d524b]/80 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#D62D3A] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="text-eyebrow text-[#5d524b]">{testimonial.name}</div>
                    <div className="text-caption text-[#5d524b]/80">Team Member</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[120px] px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-heading text-[#5d524b] mb-4">
            Ready to Join Team REBEL?
          </h2>
          <p className="text-body text-[#5d524b]/80 mb-8">
            Check out our open positions and apply today
          </p>
          <a href="#positions" className="btn-dark text-action">
            See Open Positions
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
