import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { SunlightField } from '@/components/SunlightField'
import { headers } from 'next/headers'

const translations = {
  nl: {
    badge: 'Neem Contact Op',
    title: 'Contact',
    subtitle: 'Heeft u vragen of wilt u met ons werken? We horen graag van u.',
    letsTalk: 'Laten we praten',
    intro: 'Of u nu geïnteresseerd bent in onze diensten, een partnerschapsmogelijkheid heeft, of gewoon hallo wilt zeggen, we zijn er om te helpen.',
    email: 'E-mail',
    office: 'Kantoor',
    career: 'Carrière',
    careerText: 'Op zoek naar mogelijkheden?',
    viewPositions: 'Bekijk Open Posities →',
    quickResponse: 'Snelle Reactie',
    responseTime: 'We reageren doorgaans binnen 24 uur op werkdagen.',
    yourName: 'Uw Naam *',
    emailAddress: 'E-mailadres *',
    company: 'Bedrijf',
    subject: 'Onderwerp *',
    message: 'Bericht *',
    sendMessage: 'Verstuur Bericht',
    privacyNotice: 'Door dit formulier in te dienen, gaat u akkoord met ons Privacybeleid',
    ctaTitle: 'Liever Direct Praten?',
    ctaSubtitle: 'Plan een gesprek met ons team om uw behoeften te bespreken',
    emailDirectly: 'E-mail Ons Direct',
    namePlaceholder: 'Jan Jansen',
    emailPlaceholder: 'jan@voorbeeld.nl',
    companyPlaceholder: 'Uw Bedrijfsnaam',
    subjectPlaceholder: 'Hoe kunnen we helpen?',
    messagePlaceholder: 'Vertel ons meer over uw vraag...'
  },
  en: {
    badge: 'Get In Touch',
    title: 'Contact Us',
    subtitle: 'Have questions or want to work with us? We\'d love to hear from you.',
    letsTalk: 'Let\'s Talk',
    intro: 'Whether you\'re interested in our services, have a partnership opportunity, or just want to say hello, we\'re here to help.',
    email: 'Email',
    office: 'Office',
    career: 'Career',
    careerText: 'Looking for opportunities?',
    viewPositions: 'View Open Positions →',
    quickResponse: 'Quick Response',
    responseTime: 'We typically respond within 24 hours during business days.',
    yourName: 'Your Name *',
    emailAddress: 'Email Address *',
    company: 'Company',
    subject: 'Subject *',
    message: 'Message *',
    sendMessage: 'Send Message',
    privacyNotice: 'By submitting this form, you agree to our Privacy Policy',
    ctaTitle: 'Prefer to Talk Directly?',
    ctaSubtitle: 'Schedule a call with our team to discuss your needs',
    emailDirectly: 'Email Us Directly',
    namePlaceholder: 'John Doe',
    emailPlaceholder: 'john@example.com',
    companyPlaceholder: 'Your Company Name',
    subjectPlaceholder: 'How can we help?',
    messagePlaceholder: 'Tell us more about your inquiry...'
  }
};

export default async function ContactUs() {
  const headersList = await headers();
  const referer = headersList.get('referer') || '';
  const lang = referer.includes('/en') ? 'en' : 'nl';
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#fef9ed]">
      <Header lang={lang} />
      
      {/* Hero Section with Sunlight */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <SunlightField />
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="text-eyebrow text-[#fef9ed] mb-4">{t.badge}</p>
            <h1 className="text-section-statement text-[#fef9ed] mb-6">
              {t.title}
            </h1>
            <p className="text-hero-support text-[#fef9ed]">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-[120px] px-4">
        <div className="max-w-[1150px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-heading text-[#5d524b] mb-6">
                  {t.letsTalk}
                </h2>
                <p className="text-body text-[#5d524b]/80">
                  {t.intro}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-[#D62D3A] text-2xl">→</div>
                  <div>
                    <h3 className="text-eyebrow text-[#5d524b] mb-1">{t.email}</h3>
                    <a href="mailto:contact@rebelinternet.eu" className="text-body text-[#D62D3A] hover:underline">
                      contact@rebelinternet.eu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[#D62D3A] text-2xl">→</div>
                  <div>
                    <h3 className="text-eyebrow text-[#5d524b] mb-1">{t.office}</h3>
                    <p className="text-body text-[#5d524b]/80">
                      Overhoeksplein 1<br />
                      1031 KS Amsterdam<br />
                      Work.Adam, The Netherlands
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[#D62D3A] text-2xl">→</div>
                  <div>
                    <h3 className="text-eyebrow text-[#5d524b] mb-1">{t.career}</h3>
                    <p className="text-body text-[#5d524b]/80 mb-2">
                      {t.careerText}
                    </p>
                    <a href="/career" className="text-body text-[#D62D3A] hover:underline">
                      {t.viewPositions}
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-[#f7f1e3] p-6 rounded-[4.2px]">
                <h3 className="text-eyebrow text-[#5d524b] mb-3">{t.quickResponse}</h3>
                <p className="text-body text-[#5d524b]/80">
                  {t.responseTime}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm translations={t} />
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
