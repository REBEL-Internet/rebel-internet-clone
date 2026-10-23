import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function ContactUs() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] bg-gradient-to-br from-[#D62D3A] via-[#E63946] to-[#C72030] text-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider uppercase border border-white/20">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mt-6">
              Contact Us
            </h1>
            <p className="text-xl mt-6 max-w-2xl mx-auto">
              Have questions or want to work with us? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Let's Talk
                </h2>
                <p className="text-xl text-[#595658] leading-relaxed">
                  Whether you're interested in our services, have a partnership opportunity, or just want to say hello, we're here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D62D3A] to-[#E63946] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email</h3>
                    <a href="mailto:info@rebelinternet.eu" className="text-[#D62D3A] hover:underline">
                      info@rebelinternet.eu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D62D3A] to-[#E63946] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Office</h3>
                    <p className="text-[#595658]">
                      Geestersingel 48<br />
                      1815 BB Alkmaar<br />
                      The Netherlands
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D62D3A] to-[#E63946] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Career</h3>
                    <p className="text-[#595658] mb-2">
                      Looking for opportunities?
                    </p>
                    <a href="/career" className="text-[#D62D3A] hover:underline font-semibold">
                      View Open Positions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-[#FFFBF6] to-white p-6 rounded-2xl border-2 border-[#D62D3A]/10">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8 text-[#D62D3A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold">Quick Response</h3>
                </div>
                <p className="text-[#595658]">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#FFFBF6] to-white p-8 md:p-12 rounded-3xl shadow-xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#595658] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D62D3A] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#595658] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D62D3A] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-[#595658] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D62D3A] focus:outline-none transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#595658] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D62D3A] focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#595658] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D62D3A] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D62D3A] to-[#E63946] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-elegant transition-all duration-300"
                >
                  Send Message
                </button>

                <p className="text-sm text-[#595658] text-center">
                  By submitting this form, you agree to our Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#D62D3A] via-[#E63946] to-[#C72030] text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Prefer to Talk Directly?
          </h2>
          <p className="text-xl mb-8">
            Schedule a call with our team to discuss your needs
          </p>
          <a href="mailto:info@rebelinternet.eu">
            <button className="bg-white text-[#D62D3A] px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Email Us Directly
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
