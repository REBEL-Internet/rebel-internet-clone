# ChartDeck Design System Extraction
## For REBEL Internet Theme Variation

**Source:** https://chartdeck.trade/  
**Extracted:** November 12, 2026  
**Purpose:** Create a dark, professional theme variation for REBEL Internet inspired by ChartDeck's design language

---

## Design Philosophy

ChartDeck uses a **dark-first, data-dense, professional trading terminal aesthetic**:
- Dark backgrounds with high contrast text
- Subtle gradients and glows for depth
- Clean typography with excellent hierarchy
- Professional, technical feel without being intimidating
- Excellent use of whitespace despite information density

---

## Color Palette

### Dark Theme (Primary)
```css
--background-dark: #07090D;        /* Primary dark background */
--background-dark-alt: #0F1419;    /* Slightly lighter panels */
--text-light: #F7F8FB;             /* Primary text on dark */
--text-muted: #8B92A0;             /* Secondary text */

--primary: #4A90E2;                /* Links, CTAs (inferred blue) */
--accent-glow: rgba(74, 144, 226, 0.15); /* Subtle glow effects */

--border-dark: rgba(255, 255, 255, 0.1);  /* Subtle borders */
--border-dark-hover: rgba(255, 255, 255, 0.2);
```

### Light Theme (Secondary)
```css
--background-light: #F7F8FB;       /* Primary light background */
--background-light-alt: #FFFFFF;   /* Pure white panels */
--text-dark: #07090D;              /* Primary text on light */
--text-muted-light: #5A6270;       /* Secondary text on light */
```

### Semantic Colors
```css
--success: #10B981;                /* Green for positive */
--warning: #F59E0B;                /* Amber for caution */
--error: #EF4444;                  /* Red for negative */
--info: #3B82F6;                   /* Blue for information */

--live-indicator: #10B981;         /* Green dot for "Live" badges */
```

---

## Typography

### Font Stack
ChartDeck uses **Sora** as primary font (sans-serif, modern, geometric):

```css
/* Recommended for REBEL Internet */
font-family: 'Sora', 'Inter', system-ui, -apple-system, sans-serif;
```

**Alternative:** Use Inter if Sora licensing is an issue — similar geometric properties.

### Type Scale
```css
/* Headings */
--text-6xl: 3.75rem;     /* 60px - Hero titles */
--text-5xl: 3rem;        /* 48px - Section titles */
--text-4xl: 2.25rem;     /* 36px - Major headings */
--text-3xl: 1.875rem;    /* 30px - Sub-headings */
--text-2xl: 1.5rem;      /* 24px - Card titles */
--text-xl: 1.25rem;      /* 20px - Large body */

/* Body */
--text-base: 1rem;       /* 16px - Body text */
--text-sm: 0.875rem;     /* 14px - Small text */
--text-xs: 0.75rem;      /* 12px - Captions */

/* Line Heights */
--leading-tight: 1.2;    /* Headings */
--leading-normal: 1.5;   /* Body */
--leading-relaxed: 1.625; /* Long-form */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Heading Styles
```css
h1 {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
}

h2 {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
}

h3 {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
}

/* "Kicker" - Small text above headings */
.kicker {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}
```

---

## Spacing & Layout

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;

/* ChartDeck's main container */
.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem; /* 32px */
}
```

### Spacing Scale
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Section Rhythm
```css
.section {
  padding: var(--space-24) 0; /* 96px vertical */
}

.section-tight {
  padding: var(--space-16) 0; /* 64px vertical */
}
```

---

## Components

### Buttons

#### Primary Button (Holographic Effect)
```css
.btn-holo {
  background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.2);
  transition: all 0.2s ease;
}

.btn-holo:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(74, 144, 226, 0.3);
}
```

#### Ghost Button (Secondary)
```css
.btn-ghost {
  background: transparent;
  color: var(--text-light);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
}
```

#### Icon Button
```css
.icon-btn {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: none;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.icon-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-light);
}
```

### Navigation

```css
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(7, 9, 13, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
}

.nav-links a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);
  padding: 0.5rem 0.75rem;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--text-light);
}
```

### Cards

```css
.card {
  background: var(--background-dark-alt);
  border: 1px solid var(--border-dark);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--border-dark-hover);
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card p {
  color: var(--text-muted);
  font-size: 0.875rem;
  line-height: 1.5;
}
```

### Frame (Screenshot Container)
```css
.frame {
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  position: relative;
}

.frame img {
  width: 100%;
  height: auto;
  display: block;
}
```

### Live Badge/Indicator
```css
.dot.live {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--live-indicator);
  display: inline-block;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Eyebrow/Kicker Text
```css
.eyebrow {
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
```

---

## Visual Effects

### Background Glow
```css
.hero-glow {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(74, 144, 226, 0.15) 0%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 0;
}
```

### Backdrop Blur (Glassmorphism)
```css
.glass {
  background: rgba(7, 9, 13, 0.7);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.6);

/* Glow shadow for CTAs */
--shadow-glow: 0 4px 20px rgba(74, 144, 226, 0.3);
```

### Border Radius
```css
--radius-sm: 0.375rem;   /* 6px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* Fully rounded */
```

---

## Page Patterns

### Hero Section
```html
<section class="hero">
  <div class="hero-glow"></div>
  <div class="wrap">
    <div class="hero-copy">
      <p class="eyebrow">
        <span class="dot live"></span>
        <span>Your category/kicker</span>
      </p>
      <h1>Your main headline.</h1>
    </div>
    <div class="hero-side">
      <p class="lede">Your value proposition paragraph.</p>
      <div class="cta-row">
        <a class="btn btn-holo" href="#">Primary CTA</a>
        <a class="btn btn-ghost" href="#">Secondary CTA</a>
      </div>
      <p class="hero-note">Small print or additional context</p>
    </div>
  </div>
</section>
```

### Section Header Pattern
```html
<header class="sec-head">
  <p class="kicker">Category</p>
  <h2>Section Title</h2>
  <p class="sec-sub">Supporting description text</p>
</header>
```

### Three-Column Feature Grid
```html
<div class="trio">
  <article class="tri">
    <svg class="tri-i"><!-- Icon SVG --></svg>
    <h3>Feature Title</h3>
    <p>Feature description</p>
  </article>
  <!-- Repeat 3x -->
</div>
```

### Feature Section (Split Layout)
```html
<section class="section feature">
  <div class="wrap feature-in">
    <div class="feature-copy">
      <p class="kicker">Category</p>
      <h2>Feature Title</h2>
      <p class="sec-sub">Description</p>
      <ul class="ticks">
        <li>Bullet point feature</li>
      </ul>
    </div>
    <figure class="frame feature-shot">
      <img src="..." alt="...">
    </figure>
  </div>
</section>
```

---

## Responsive Breakpoints

```css
/* Mobile first approach */
@media (min-width: 640px) {  /* sm */
  /* Tablet styles */
}

@media (min-width: 768px) {  /* md */
  /* Small desktop */
}

@media (min-width: 1024px) { /* lg */
  /* Desktop */
}

@media (min-width: 1280px) { /* xl */
  /* Large desktop */
}

@media (min-width: 1536px) { /* 2xl */
  /* Extra large */
}
```

---

## Content Style Guidelines

### Voice & Tone
- **Direct & Confident:** "The whole market on one screen" not "We help you see markets"
- **Technical but Accessible:** Use precise terms without jargon overload
- **Benefit-First:** Lead with "what you get" not "what we built"
- **Numbers as Proof:** "26 synced charts" "20 exchanges" — specificity builds trust

### Copy Patterns
- **Headlines:** Short, punchy, benefit-focused (5-8 words)
- **Kickers:** Category/feature name in UPPERCASE, 1-3 words
- **Body:** Clear, scannable, 1-2 sentences per paragraph
- **CTAs:** Action-oriented verbs: "Open the terminal" "Start free month"

---

## Implementation for REBEL Internet

### Recommended Changes

1. **Color Swap:**
   - Keep REBEL's red (#D62D3A) as accent color
   - Replace ChartDeck blue with REBEL red in buttons/CTAs
   - Use ChartDeck's dark backgrounds (#07090D) as alternate theme

2. **Typography:**
   - Import Sora from Google Fonts
   - Apply ChartDeck's type scale
   - Use "kicker" pattern for section labels

3. **Component Updates:**
   - Add `.btn-holo` variant with red gradient
   - Implement glassmorphism nav with backdrop-blur
   - Add live indicator dots for "AI Zichtbaarheid" badges

4. **Layout:**
   - Adopt ChartDeck's section rhythm (96px padding)
   - Use `.wrap` container pattern (max-width: 1200px)
   - Implement hero glow effect with red instead of blue

5. **Dark Mode First:**
   - Make dark theme the default
   - Light theme as toggle option
   - Ensure excellent contrast ratios (WCAG AAA)

---

## Example: REBEL Button in ChartDeck Style

```css
.btn-rebel-holo {
  background: linear-gradient(135deg, #D62D3A 0%, #B02030 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(214, 45, 58, 0.3);
  transition: all 0.2s ease;
  font-family: 'Sora', sans-serif;
}

.btn-rebel-holo:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(214, 45, 58, 0.4);
  background: linear-gradient(135deg, #E63946 0%, #D62D3A 100%);
}
```

---

## Assets Needed

1. **Fonts:**
   - Sora (Google Fonts): 400, 500, 600, 700

2. **Icons:**
   - Sun/Moon for theme toggle
   - Play icon for "See in action" CTA
   - Simple geometric icons for features (SVG)

3. **Images:**
   - Hero screenshot/mockup of AI visibility dashboard
   - Feature screenshots showing AI search results
   - Client logo grid (if applicable)

---

## Next Steps

1. Create `chartdeck-theme.css` with these tokens
2. Update `globals.css` to include dark theme variables
3. Create ChartDeck-inspired components in `/components`:
   - `HeroChartDeck.tsx`
   - `SectionHeaderChartDeck.tsx`
   - `FeatureSplitChartDeck.tsx`
   - `ButtonHolo.tsx`
4. Test dark/light theme toggle
5. Ensure all colors meet WCAG AA contrast requirements

---

**Status:** Design system extracted and ready for implementation  
**Confidence:** High — based on HTML analysis and industry standards  
**Recommended Action:** Implement as alternate "Professional/Dark" theme for REBEL Internet
