# REBEL Internet - Strategic Pivot: Next Steps

## ✅ What We've Completed

1. **Strategic Plan Created** (`docs/STRATEGIC_PIVOT_PLAN.md`)
   - 3 target niches identified with rationale
   - GEO (AI Search Visibility) strategy outlined
   - Business model and pricing defined
   - Success metrics and risk mitigation

2. **Keyword Research Script Ready** (`scripts/keyword-research.js`)
   - Automated DataForSEO API integration
   - Researches all 3 niches simultaneously
   - Auto-clusters keywords by intent
   - Generates actionable reports

---

## 🎯 Target Niches Overview

### 1. Detective Agencies (detectivewerk.nl - LIVE)
- **Margins:** €150-300/hour
- **Best for:** Privacy-conscious searches → AI assistants
- **Key advantage:** Low digital competition
- **Primary keywords:** privédetective [city], ontrouw onderzoek, observatie diensten

### 2. Roofing & Contractors (NEW SITE NEEDED)
- **Margins:** €50-150/hour, projects €10k-50k
- **Best for:** Emergency searches ("roof leak near me")
- **Key advantage:** Weak local SEO competition
- **Primary keywords:** dakdekker [city], dak reparatie, daklekkage noodservice

### 3. Mobile Toilet Services (mobieletoilettendenhaag.nl)
- **Margins:** €75-200/unit/day
- **Best for:** Event planners, construction companies
- **Key advantage:** Existing client proves model works
- **Primary keywords:** mobiele toiletten huren [city], festival toiletten, bouwtoiletten

---

## 📋 Immediate Action Items

### 1. Provide DataForSEO API Credentials
To run keyword research, I need:
```bash
export DATAFORSEO_LOGIN="your_login_here"
export DATAFORSEO_PASSWORD="your_password_here"
```

Then run:
```bash
node scripts/keyword-research.js
```

This will:
- Research 500+ keywords across all 3 niches
- Analyze search volume, CPC, competition
- Cluster keywords by intent (transactional, local, emergency, informational)
- Generate city-specific keyword variations
- Save results to `docs/keyword-research-results.json`

### 2. Decide on Website Domain Names
We need domain names for:
- **Roofing/Contractors:** 
  - Option A: `dakdekker-nederland.nl` (generic, scalable)
  - Option B: `betrouwbaredakdekkers.nl` (trust-focused)
  - Option C: `[YourSuggestion].nl`
  
- **Mobile Toilets (expansion):**
  - Already have: `mobieletoilettendenhaag.nl` (The Hague)
  - Expand to: `mobieletoiletten[city].nl` per city?
  - Or: Single national brand like `mobieletoiletten.nl`?

### 3. Clarify Business Model Questions
- **Are we building these sites for clients or for REBEL Internet to own?**
  - Option A: REBEL owns sites, charges leads to service providers
  - Option B: Build custom sites for individual businesses
  
- **For detectivewerk.nl:**
  - Is this REBEL-owned or client-owned?
  - Do they pay monthly retainer or revenue share?

---

## 🚀 Week 1 Roadmap (Once We Have Keywords)

### Day 1-2: Keyword Research & Analysis
- [x] Create strategic plan
- [x] Set up keyword research script
- [ ] Run DataForSEO keyword research
- [ ] Analyze and cluster keywords
- [ ] Identify top 20 keywords per niche

### Day 3-4: Site Architecture Design
- [ ] Design URL structure for each niche
- [ ] Create page hierarchy (homepage → services → locations → FAQ)
- [ ] Map keywords to specific pages
- [ ] Design internal linking strategy

### Day 5: GEO Content Guidelines
- [ ] Create content templates optimized for AI
- [ ] Write schema markup templates
- [ ] Define tone/style per niche
- [ ] Create FAQ format (AI loves Q&A)

### Day 6-7: First Site Build (Roofing)
- [ ] Register domain
- [ ] Set up Next.js project
- [ ] Build homepage + 3 service pages + 2 city pages
- [ ] Implement full schema markup
- [ ] Add contact forms
- [ ] Deploy to production

---

## 📊 Keyword Clustering Strategy (Preview)

Based on the script, keywords will be clustered as:

### **Transactional** (High conversion intent)
- "dakdekker huren amsterdam"
- "privédetective inschakelen"
- "mobiele toiletten bestellen"
→ **Page Type:** Service pages with CTA forms

### **Local** (City-specific)
- "dakdekker rotterdam"
- "detective bureau utrecht"
- "dixie huren den haag"
→ **Page Type:** Location landing pages

### **Emergency** (Urgent need)
- "daklekkage noodservice"
- "spoed dakdekker"
- "directe observatie dienst"
→ **Page Type:** 24/7 emergency service pages with phone CTA

### **Informational** (Research phase)
- "kosten dakdekker per uur"
- "hoe werkt een privédetective"
- "wat kost mobiele toilet huren"
→ **Page Type:** FAQ, guides, pricing pages

---

## 💡 GEO (AI Search) Optimization Checklist

For each page we build, implement:

### Content Structure
- [ ] Clear H1 with city + service (e.g., "Dakdekker Amsterdam - 24/7 Spoedservice")
- [ ] First paragraph answers "what, where, how, price" directly
- [ ] Bullet lists for key information (AI loves lists)
- [ ] FAQ section with 5-10 common questions
- [ ] Customer testimonials with full names & cities
- [ ] Contact info repeated multiple times on page

### Technical SEO
- [ ] Schema.org LocalBusiness markup
- [ ] Service schema for each offering
- [ ] Review/Rating schema
- [ ] FAQ schema
- [ ] Breadcrumb schema
- [ ] Organization schema

### Authority Signals
- [ ] Years in business
- [ ] Certifications/licenses
- [ ] Insurance information
- [ ] Number of projects completed
- [ ] Response time guarantees
- [ ] Service area coverage

### Example AI-Optimized Content Block:
```markdown
## Dakdekker Amsterdam - 24/7 Spoedservice

Zoekt u een betrouwbare dakdekker in Amsterdam? 
[Company] helpt u binnen 2 uur bij daklekkage en spoedreparaties.

**Onze diensten:**
- ✓ Spoedreparaties binnen 2 uur
- ✓ Daklekkage verhelpen vanaf €350
- ✓ Compleet dak vervangen vanaf €8.000
- ✓ 5 jaar garantie op alle werkzaamheden
- ✓ 50+ positieve reviews (4.8/5 sterren)

**Contact:** 06-12345678 | info@example.nl
**Locatie:** Amsterdam en omgeving (15km)
**Openingstijden:** 24/7 bereikbaar voor noodgevallen
```

---

## 🎯 Success Metrics to Track

### Traditional Metrics
- Organic traffic
- Keyword rankings (position 1-3)
- Google Business Profile clicks/calls
- Conversion rate (form + phone)

### GEO Metrics (New & Important!)
**Manual Testing (Monthly):**
Test these queries in ChatGPT, Gemini, Perplexity:
- "Vind me een betrouwbare dakdekker in Amsterdam"
- "Welke privédetective kan ik het beste inschakelen in Rotterdam?"
- "Waar kan ik mobiele toiletten huren voor een festival in Utrecht?"

**Track:**
- Is our client mentioned? (Yes/No)
- Position in AI response (1st, 2nd, 3rd+)
- Information accuracy
- Competitor mentions

---

## 💰 Revenue Projections (Conservative)

### Per Niche Website

**Setup Phase (Month 1)**
- Website build: €3,500
- Initial SEO: €1,500
- Google Ads setup: €1,000
**Total:** €6,000 one-time

**Monthly Recurring (Months 2+)**
- SEO maintenance: €750
- Content creation: €500
- Google Ads management: €500 (+ ad spend)
**Total:** €1,750/month

**Expected Client Results (Month 3-6)**
- 20-50 qualified leads/month
- 5-15 conversions (10-30% close rate)
- €10,000-30,000 revenue/month (for client)

**REBEL Revenue per Site:**
- Setup: €6,000
- Monthly retainer: €1,750
- **Year 1 total: €27,000 per site**
- **3 sites = €81,000 first year**

---

## ⚠️ Important Decisions Needed

### 1. Business Model
Choose one:
- **A) Lead Generation Model** - REBEL owns sites, sells leads to service providers
- **B) Agency Model** - Build sites for clients, charge setup + monthly retainer
- **C) Hybrid** - Own some sites, build custom for premium clients

**My Recommendation:** Start with Model B (agency) for cash flow, build Model A sites with profits.

### 2. Geographic Focus
- **Option A:** Start with 1 city per niche, prove model, then expand
- **Option B:** Build national sites with location pages for all major cities
- **Option C:** Focus entirely on Randstad (Amsterdam, Rotterdam, Utrecht, Den Haag)

**My Recommendation:** Option C - Randstad has 40% of Netherlands population, enough volume to scale.

### 3. Client Acquisition Strategy
How will we get the first 3 clients (one per niche)?
- Cold outreach to detective agencies, roofers, toilet rental companies?
- Build sites first, prove they generate leads, then sell?
- Partner with existing businesses we know?

**My Recommendation:** Build detectivewerk.nl fully first (it's live), prove GEO works, use as case study.

---

## 📞 Next Steps - Tell Me:

1. **DataForSEO credentials** - So I can run keyword research immediately
2. **Domain preferences** - For roofing site
3. **Business model choice** - Lead gen, agency, or hybrid?
4. **detectivewerk.nl status** - Is this client-owned or REBEL-owned?
5. **Timeline** - When do you want first roofing site live?

Once you provide these, I'll:
1. Run full keyword research across all niches
2. Build complete site architecture
3. Create GEO-optimized content templates
4. Design and build the first niche site
5. Set up tracking and reporting

---

**Ready to start when you are!** 🚀
