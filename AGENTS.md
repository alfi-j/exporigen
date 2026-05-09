# EXPORIGEN — Project Agent Context

> This file exists so any AI agent, developer, or future session can pick up this project without losing context. Keep it updated after every significant change.

---

## Project Overview

**EXPORIGEN** is a commercial fair and exposition center based in Santo Domingo de los Colorados, Ecuador. The name is a portmanteau of *expo* + *origen* — the brand concept is connecting authentic local entrepreneurs with their community.

**Owner:** Firok (entrepreneur, Santo Domingo de los Colorados)
**Stage:** Landing page in active development. No backend yet.
**Primary use:** Attract exhibitors (expositores) and inform the public about upcoming fair editions.

---

## Tech Stack

- **Framework:** Astro 5 (static output, zero JS by default)
- **Interactive components:** Vue 3 (hydrated with `client:load`)
- **Styling:** Tailwind CSS + scoped component CSS
- **Fonts:** Bebas Neue (display/logo), Space Grotesk (headings/UI), Barlow (body)

---

## File Structure

```
/exporigen/
├── src/
│   ├── components/
│   │   ├── Header.astro        ← Navbar — accepts `links` prop for page context
│   │   ├── Footer.astro
│   │   ├── HeroSection.vue     ← Vue (client:load)
│   │   ├── HeroSection.astro   ← Astro fallback (black hero with SVG logo)
│   │   ├── SectionScrollNav.vue ← Sticky scroll nav pill (client:load)
│   │   ├── NoiseStageSection.astro
│   │   ├── EventCards.astro     ← 3 edition cards + 3 activity cards
│   │   ├── SpeakersShowcaseSection.astro ← Exhibitor carousel
│   │   ├── TestimonialsSection.astro      ← Marquee testimonials
│   │   ├── VenueCarouselSection.astro     ← Fullbleed photo carousel
│   │   ├── PreviousYearsVideoSection.vue ← Pricing / tickets (client:load)
│   │   └── LeadCaptureForm.vue   ← Standalone form (unused/placeholder)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro         ← Pagina principal (scroll sections)
│   │   ├── speakers.astro      ← Exhibitors page
│   │   └── invite.astro        ← Exhibitor registration / invite
│   └── styles/
│       └── global.css          ← Tailwind + CSS custom properties
├── public/
│   └── exporigen/
│       └── exporigen-logo.png  ← Brand logo image
├── astro.config.mjs
├── package.json
├── AGENTS.md                   ← this file
└── README.md
```

**Always work on files in `src/`.** The `public/` folder is served as-is.

---

## Brand Identity

### Color Palette

```css
:root {
  --tierra:     #1f2f14;   /* primary green — nav, sections, headers       */
  --tierra-lt:  #324d1f;   /* medium green — hover states, borders         */
  --crema:      #F4F2EB;   /* ivory — light backgrounds, cards             */
  --crema-dk:   #D9D5C4;   /* dark ivory — dividers, borders              */
  --verde:      #131e0d;   /* very dark green — dark section backgrounds   */
  --verde-lt:   #476e22;   /* bright green — badges, tags                  */
  --dorado:     #B5621A;   /* COPPER — sole warm accent, use sparingly     */
  --dorado-lt:  #D4783A;   /* light copper — hover on copper elements      */
  --negro:      #0c140a;   /* near-black — body text on light backgrounds  */
  --blanco:     #FAFAF5;   /* warm white — card surfaces, backgrounds       */
}
```

**Color hierarchy rule — strictly enforced:**
- Verde `#1f2f14` → **80%** of the page (nav, stats bar, footer, dark section headers)
- Marfil `#F4F2EB` → **15%** (light backgrounds, cards, body text areas)
- Cobre `#B5621A` → **5%** (CTAs, accent lines, active tags) — draws the eye

---

## Contextual Navbar

The `Header.astro` component accepts a `links` prop to customize navigation per page. If omitted, defaults to the index page links.

```astro
// src/pages/index.astro — default links (no prop needed)
<Header />

// src/pages/speakers.astro
<Header links={speakerLinks} />

// src/pages/invite.astro
<Header links={inviteLinks} />
```

Define `links` in the frontmatter:

```js
// Index
const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Ferias', href: '/#lineup' },
  { label: 'Expositores', href: '/#speakers' },
  { label: 'Ubicación', href: '/#venue' },
];

// Speakers
const speakerLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Ferias', href: '/#lineup' },
  { label: 'Expositores', href: '/#speakers' },
  { label: 'Testimonios', href: '/#testimonios' },
  { label: 'Ubicación', href: '/#venue' },
];

// Invite
const inviteLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Ferias', href: '/#lineup' },
  { label: 'Expositores', href: '/#speakers' },
  { label: 'Ubicación', href: '/#venue' },
];
```

---

## Page Sections (index.astro)

| # | Section | ID | Background | Component | Notes |
|---|---|---|---|---|---|
| 1 | Hero | `#inicio` | `#080808` black | `HeroSection.vue` | Vue, scroll marquee images |
| 2 | Stage Intro | `#lineup` | `--tierra` gradient | `NoiseStageSection.astro` | Video embed, category icons |
| 3 | Event Cards | `#tickets` | `--negro` | `EventCards.astro` | 3 editions + 3 activities |
| 4 | Exhibitors | `#speakers` | `--crema` | `SpeakersShowcaseSection.astro` | Carousel, 8 exhibitors |
| 5 | Testimonials | `#testimonios` | `--crema-dk` | `TestimonialsSection.astro` | Auto-scrolling marquee |
| 6 | Venue | `#venue` | fullbleed photos | `VenueCarouselSection.astro` | Photo carousel + venue card |
| 7 | Pricing | `#tickets` | `--tierra` | `PreviousYearsVideoSection.vue` | Vue, 4 tab categories |

---

## Pending / Next Steps

- [ ] Replace gallery placeholders with real photos
- [ ] Connect registration form to backend (Google Forms or similar)
- [ ] Google Maps embed for venue
- [ ] Mobile hamburger menu for Header
- [ ] Real testimonials after first edition runs
- [ ] Separate landing pages per edition (`/gastronomica`, `/tsachila`, `/agro`)
- [ ] SEO: meta description, OG tags, SVG favicon
- [ ] Domain: `exporigen.ec`

---

## Development

```bash
npm install
npm run dev      # development
npm run build    # production
```

---

*Last updated: May 2026*