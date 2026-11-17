import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SunlightField } from '@/components/SunlightField'
import { headers } from 'next/headers'

const translations = {
  nl: {
    badge: 'Onze Inzet',
    title: 'Sociale Verantwoordelijkheid',
    subtitle: 'Een positieve impact maken op onze gemeenschap en de wereld om ons heen',
    charitiesTitle: 'Goede Doelen',
    charitiesIntro1: 'Naast het leveren van rankingdiensten, vinden we het belangrijk om bij te dragen aan een betere samenleving. We proberen ons steentje bij te dragen door verschillende goede doelen wereldwijd te ondersteunen. We hebben deze gekozen op basis van de doelen die ze nastreven en omdat we denken dat ze wat extra hulp verdienen.',
    charitiesIntro2: 'We zijn ons bewust van onze bevoorrechte positie in de maatschappij. Niet iedereen heeft het geluk gehad om gezond te zijn en in een welvarend land te leven zoals de meesten van ons.',
    annualDonationsTitle: 'Jaarlijkse Donaties aan Goede Doelen',
    annualDonationsText: 'Elk jaar doneren we geld aan goede doelen in Nederland en daarbuiten. We selecteren zorgvuldig organisaties die aansluiten bij onze waarden en een echt verschil maken in het leven van mensen.',
    charityCallout: 'Beheert u een goed doel dat geschikt is om door ons ondersteund te worden? Laat het ons weten en we nemen zo snel mogelijk contact met u op!',
    bloggerSupportTitle: 'Ondersteuning van Lokale Bloggers',
    bloggerSupportText: 'We ondersteunen lokale bloggers in en buiten Nederland door ze te sponsoren, wedstrijden te organiseren of ze op andere manieren te helpen. We geloven in het empoweren van content creators om hun stem te delen en hun publiek te laten groeien.',
    scholarshipsTitle: 'Onderwijsbeurzen',
    scholarshipsText: 'We bieden beurzen aan in Nederland en daarbuiten om studenten een kans te geven om te studeren op manieren die normaal gesproken niet mogelijk voor hen zouden zijn. Onderwijs is een krachtig instrument voor verandering, en we zijn trots om studenten te helpen hun dromen te verwezenlijken.',
    microCreditsTitle: 'Microkrediet Investeringen',
    microCreditsText: 'REBEL Internet BV investeert in microkredieten om kleine ondernemers in opkomende markten te helpen toegang te krijgen tot het kapitaal dat ze nodig hebben om hun bedrijven te laten groeien. Deze investeringen bieden cruciale financiële ondersteuning aan mensen in regio\'s met beperkte toegang tot traditionele bankleningen, en helpen levensonderhoud te verbeteren en economische groei te bevorderen in onderbediende gemeenschappen.',
    impactTitle: 'Onze Impact in Cijfers',
    stat1Number: '100%',
    stat1Label: 'Remote Werknemers',
    stat2Number: '12+',
    stat2Label: 'Vertegenwoordigde Landen',
    stat3Number: '15+',
    stat3Label: 'Jaar in Bedrijf',
    stat4Number: '100%',
    stat4Label: 'Papierloos Werken',
    commitmentTitle: 'Onze Blijvende Inzet',
    commitmentText: 'Sociale verantwoordelijkheid is geen eenmalig initiatief—het is een blijvende inzet die verweven is in alles wat we doen. Terwijl we groeien, blijven we nieuwe manieren vinden om een positieve impact te maken op onze gemeenschap, onze industrie en de wereld.',
    joinTeam: 'Word Lid van Ons Team',
    getInTouch: 'Neem Contact Op'
  },
  en: {
    badge: 'Our Commitment',
    title: 'Social Responsibility',
    subtitle: 'Making a positive impact on our community and the world around us',
    charitiesTitle: 'Charities',
    charitiesIntro1: 'Besides providing ranking services, we believe it\'s important to make our contribution to improve society. We try to do our part by supporting several charities across the globe. We\'ve chosen those based on the aims they support and because we believe they deserve a little extra help.',
    charitiesIntro2: 'We are aware of our privileged position in society. Not everyone has had the fortunate position to be healthy and to live in a wealthy country like most of us do.',
    annualDonationsTitle: 'Annual Charity Donations',
    annualDonationsText: 'Each year, we donate money to charities in the Netherlands and abroad. We carefully select organizations that align with our values and make a real difference in people\'s lives.',
    charityCallout: 'Are you running a charity which is suited to be supported by us? Let us know and we\'ll contact you as soon as possible!',
    bloggerSupportTitle: 'Supporting Local Bloggers',
    bloggerSupportText: 'We support local bloggers in and outside the Netherlands by sponsoring them, organizing competitions, or helping them in other ways. We believe in empowering content creators to share their voices and grow their audiences.',
    scholarshipsTitle: 'Educational Scholarships',
    scholarshipsText: 'We\'ve been offering scholarships in the Netherlands and abroad to give students a chance to study in ways that normally would not be possible for them. Education is a powerful tool for change, and we\'re proud to help students achieve their dreams.',
    microCreditsTitle: 'Micro-Credit Investments',
    microCreditsText: 'REBEL Internet BV is investing in micro-credits to help small entrepreneurs in emerging markets access the capital they need to grow their businesses. These investments provide crucial financial support to individuals in regions with limited access to traditional bank loans, helping to improve livelihoods and foster economic growth in underserved communities.',
    impactTitle: 'Our Impact by Numbers',
    stat1Number: '100%',
    stat1Label: 'Remote Workforce',
    stat2Number: '12+',
    stat2Label: 'Countries Represented',
    stat3Number: '15+',
    stat3Label: 'Years in Business',
    stat4Number: '100%',
    stat4Label: 'Paperless Operations',
    commitmentTitle: 'Our Ongoing Commitment',
    commitmentText: 'Social responsibility isn\'t a one-time initiative—it\'s an ongoing commitment woven into everything we do. As we grow, we continue to find new ways to make a positive impact on our community, our industry, and the world.',
    joinTeam: 'Join Our Team',
    getInTouch: 'Get In Touch'
  }
};

export default async function SocialResponsibility() {
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

      {/* Main Content Section */}
      <section className="py-[120px] px-4">
        <div className="max-w-[1150px] mx-auto">
          
          {/* Introduction */}
          <div className="text-center mb-[120px] max-w-[800px] mx-auto">
            <h2 className="text-heading text-[#5d524b] mb-6">
              {t.charitiesTitle}
            </h2>
            <p className="text-body text-[#5d524b]/80 mb-4">
              {t.charitiesIntro1}
            </p>
            <p className="text-body text-[#5d524b]/80">
              {t.charitiesIntro2}
            </p>
          </div>

          {/* Initiatives as Capability Rows */}
          <div className="space-y-[21.7px]">
            
            {/* Charity Support */}
            <div className="capability-row">
              <div className="watercolor-symbol flex-shrink-0 text-6xl flex items-center justify-center">
                💝
              </div>
              <div className="flex-1 px-8">
                <h3 className="text-heading text-[#5d524b] mb-2">
                  {t.annualDonationsTitle}
                </h3>
              </div>
              <div className="w-[333px] flex-shrink-0">
                <p className="text-body text-[#5d524b]/80 mb-4">
                  {t.annualDonationsText}
                </p>
                <div className="bg-[#f7f1e3] p-4 rounded-[4.2px] border-l-2 border-[#D62D3A]">
                  <p className="text-caption text-[#5d524b]">
                    {t.charityCallout}
                  </p>
                </div>
              </div>
            </div>

            {/* Blogger Support */}
            <div className="capability-row">
              <div className="watercolor-symbol flex-shrink-0 text-6xl flex items-center justify-center">
                ✍️
              </div>
              <div className="flex-1 px-8">
                <h3 className="text-heading text-[#5d524b] mb-2">
                  {t.bloggerSupportTitle}
                </h3>
              </div>
              <div className="w-[333px] flex-shrink-0">
                <p className="text-body text-[#5d524b]/80">
                  {t.bloggerSupportText}
                </p>
              </div>
            </div>

            {/* Scholarships */}
            <div className="capability-row">
              <div className="watercolor-symbol flex-shrink-0 text-6xl flex items-center justify-center">
                🎓
              </div>
              <div className="flex-1 px-8">
                <h3 className="text-heading text-[#5d524b] mb-2">
                  {t.scholarshipsTitle}
                </h3>
              </div>
              <div className="w-[333px] flex-shrink-0">
                <p className="text-body text-[#5d524b]/80">
                  {t.scholarshipsText}
                </p>
              </div>
            </div>

            {/* Micro-Credits */}
            <div className="capability-row">
              <div className="watercolor-symbol flex-shrink-0 text-6xl flex items-center justify-center">
                🌍
              </div>
              <div className="flex-1 px-8">
                <h3 className="text-heading text-[#5d524b] mb-2">
                  {t.microCreditsTitle}
                </h3>
              </div>
              <div className="w-[333px] flex-shrink-0">
                <p className="text-body text-[#5d524b]/80">
                  {t.microCreditsText}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-[120px] px-4 bg-[#f7f1e3]">
        <div className="max-w-[1150px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-heading text-[#5d524b] mb-4">
              {t.impactTitle}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: t.stat1Number, label: t.stat1Label },
              { number: t.stat2Number, label: t.stat2Label },
              { number: t.stat3Number, label: t.stat3Label },
              { number: t.stat4Number, label: t.stat4Label }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-[56.9px] leading-none font-serif text-[#D62D3A] mb-3">{stat.number}</div>
                <div className="text-eyebrow text-[#5d524b]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-[120px] px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-heading text-[#5d524b] mb-6">
            {t.commitmentTitle}
          </h2>
          <p className="text-body text-[#5d524b]/80 mb-12">
            {t.commitmentText}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/career" className="btn-dark text-action">
              {t.joinTeam}
            </a>
            <a href="/contact-us" className="btn-light text-action">
              {t.getInTouch}
            </a>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
