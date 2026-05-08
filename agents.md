# EXPORIGEN — Project Agent Context

> This file exists so any AI agent, developer, or future session can pick up this project without losing context. Keep it updated after every significant change.

---

## Project Overview

**EXPORIGEN** is a commercial fair and exposition center based in Santo Domingo de los Colorados, Ecuador. The name is a portmanteau of *expo* + *origen* — the brand concept is connecting authentic local entrepreneurs with their community.

**Owner:** Firok (entrepreneur, Santo Domingo de los Colorados)
**Stage:** Landing page in active development. No backend yet.
**Primary use:** Attract exhibitors (expositores) and inform the public about upcoming fair editions.

---

## File Structure

```
/exporigen/
├── agents.md                        ← this file
├── index.html                       ← original prototype (archive, do not edit)
├── version-a.html                   ← ACTIVE WORKING FILE — "verde cobre v3"
├── version-b.html                   ← archived demo (logo palette test, rejected)
```

**Always work on `version-a.html`.** The others are reference/archive only.

The output delivered to the client is `exporigen-logo-svg.html` (copy of version-a at last export).

---

## Brand Identity

### Logo
- **Original font:** *Road Race Stamp* — organic serif with stamp/aged texture
- **Icon:** Tree with concentric growth rings (also resembles a fingerprint / laberinto). SVG file: `EXPORIGEN_logo_final.svg` — icon only, no text.
- **Wordmark split:** `EXPO` in crema `#fffcde` · `RIGEN` in cobre `#B5621A`
- **Implementation:** 100% code — inline SVG + HTML text with `Rye` (Google Fonts). No image files used for the logo anywhere in the site.
- The SVG tree icon visually substitutes the "O" in EXPO, matching the original logo design.

### Typography
| Role | Font | Weights |
|---|---|---|
| Display / Logo | `Rye` (Google Fonts) — closest free match to Road Race Stamp | regular |
| Serif / Quotes | `Playfair Display` | 700, italic 400 |
| Body | `Barlow` | 300, 400, 500, 600 |

### Color Palette — APPROVED (verde cobre v3)

```css
:root {
  --tierra:     #1f2f14;   /* verde base — nav, stats, footer, section headers  */
  --tierra-lt:  #324d1f;   /* verde medio — hover states, borders               */
  --crema:      #F4F2EB;   /* marfil neutro — light section backgrounds         */
  --crema-dk:   #D9D5C4;   /* marfil oscuro — borders, dividers                 */
  --verde:      #131e0d;   /* verde muy oscuro — dark section backgrounds       */
  --verde-lt:   #476e22;   /* verde brillante — active badges, tags             */
  --dorado:     #B5621A;   /* COBRE — sole warm accent, use sparingly           */
  --dorado-lt:  #D4783A;   /* cobre claro — hover on copper elements            */
  --negro:      #0c140a;   /* near-black — body text on light backgrounds       */
  --blanco:     #FAFAF5;   /* warm white — card surfaces, main backgrounds      */
}
```

**Color hierarchy rule — strictly enforced:**
- Verde `#1f2f14` → **80%** of the page (nav, stats bar, footer, dark section headers)
- Marfil `#F4F2EB` → **15%** (light backgrounds, cards, body text areas)
- Cobre `#B5621A` → **5%** (CTAs, accent lines, arrows, active tags) — draws the eye

**Rejected — do not revert to:**
- Orange/brown hero radial gradient (`rgba(92, 61, 30, ...)`) — rejected in v1
- Green-tinted black hero/newsletter backgrounds (`#131e0d`, `#0c140a`) — rejected in v2
- Full logo palette version-b — not approved for web

---

## Page Sections (in order)

| # | Section | ID | Background | Notes |
|---|---|---|---|---|
| 1 | Navbar | — | `rgba(#1f2f14, 0.92)` + backdrop-blur, fixed | Inline SVG+text logo, nav links, CTA button |
| 2 | Hero | `#inicio` | **`#080808` pure black** | Large logo, subtitle, 3 meta items, 2 CTAs, scroll indicator |
| 3 | Stats Bar | — | `--tierra` `#1f2f14` | 4 stats: 80+ expositores, 5K+ visitantes, 3 días, 12+ categorías |
| 4 | Sobre la Feria | `#sobre` | `--blanco` | Two-col: text + visual card. 4 pillars (Gastronomía, Artesanía, Innovación, Cultura) |
| 5 | Ediciones | `#ediciones` | `--negro` `#0c140a` | 3 cards: Gastronómica Aug 2025, Tsáchila Nov 2025, Agro Jan 2026 |
| 6 | Categorías | `#categorias` | `--crema` | 5 category cards with emoji icons |
| 7 | Galería | `#galeria` | `--negro` | 5-cell CSS grid — color placeholders, no real photos yet |
| 8 | Registro Expositores | `#registro` | `--tierra` | Left: perks list. Right: registration form (name, biz, category, WhatsApp, email) |
| 9 | Testimonios | — | `--blanco` | 3 placeholder testimonial cards |
| 10 | Newsletter | — | **`#080808` pure black** | Email subscription input + button |
| 11 | Footer | — | `#0e0a05` | 4-col: brand logo, feria links, expositor links, contact |

**Hero and Newsletter share `#080808`** — intentional bookend effect, pure black with no green tint.

---

## Logo CSS Implementation

The logo renders in three sizes across the page. All use the same inline SVG with `fill="currentColor"`.

**Navbar** (32px icon):
```html
<div class="nav-logo">
  <span class="nav-logo-icon"><!-- SVG --></span>
  <span class="nav-logo-text">
    <span class="nl-expo">EXPO</span><span class="nl-rigen">RIGEN</span>
  </span>
</div>
```

**Hero** (fluid `clamp(3.2rem, 7vw, 7rem)`):
```html
<div class="hero-logo-svg-name">
  <span class="hln-expo">EXPO</span>
  <span class="hln-icon"><!-- SVG, sized to cap height --></span>
  <span class="hln-rigen">RIGEN</span>
</div>
```

**Footer** (28px icon):
```html
<div class="footer-brand-logo">
  <span class="fbl-icon"><!-- SVG --></span>
  <span class="fbl-expo">EXPO</span><span class="fbl-rigen">RIGEN</span>
</div>
```

**To change logo colors — edit only these lines:**
```css
.hln-expo, .nl-expo   { color: #fffcde; }   /* EXPO — crema */
.hln-rigen, .nl-rigen { color: #B5621A; }   /* RIGEN — cobre */
.hln-icon, .nav-logo-icon, .fbl-icon { color: #fffcde; } /* tree */
```

**Never edit:** the `<path d="...">` data inside the SVG. That is the tree drawing.

---

## Technical Decisions

| Decision | Rationale |
|---|---|
| Single HTML file | No build tools, no dependencies — owner can open and edit anywhere |
| CSS custom properties (`:root`) | All colors in one place — change a token, update the whole site |
| `clamp()` for typography | Fluid sizing without breakpoints — scales from mobile to 4K |
| No JS frameworks | Vanilla JS only: scroll reveal + navbar transparency — zero overhead |
| Inline SVG for logo | Scalable, colorable via CSS, no HTTP requests, no broken image risk |
| `Rye` (Google Fonts) | `Road Race Stamp` is the original — Rye is the closest free alternative |
| `#080808` for hero/newsletter | Pure black bookends, no green tint — rejected in v2, approved in v3 |

---

## Version History

| Version | File exported | Key change |
|---|---|---|
| v1 (index.html) | `exporigen-website.html` | Initial prototype — original brown/gold palette |
| v2 (version-a first) | `exporigen-verde-cobre.html` | Green protagonist + copper accent, green-tinted blacks |
| v3 (version-a current) | `exporigen-logo-svg.html` | **Pure black `#080808` hero + newsletter. Inline SVG logo. `#1f2f14` confirmed as primary green.** |

---

## Pending / Next Steps

- [ ] Replace gallery color placeholders with real venue/event photos
- [ ] Connect registration form to Google Forms or backend endpoint
- [ ] Add Google Maps embed for venue location
- [ ] Mobile nav: hamburger menu (currently hidden below 900px)
- [ ] Real testimonials once first edition runs
- [ ] Separate landing pages per edition (`/gastronomica`, `/tsachila`, `/agro`)
- [ ] SEO: meta description, OG tags, favicon using the tree SVG
- [ ] Domain: `exporigen.ec` (suggested)
- [ ] If Road Race Stamp `.ttf` is available, replace Rye with `@font-face`

---

## Vibe Coding Reference

**How to request changes:**
> *"En la sección [nombre], cambia [qué] por [qué]"*

**The 4 modification levels:**
1. **Content** — edit text between HTML tags. Zero risk.
2. **Color tokens** — edit `:root` variables. One change = whole site updates.
3. **Components** — copy/paste a card block to add new items. Grid adjusts automatically.
4. **Layout** — change `grid-template-columns` value (e.g. `repeat(3, 1fr)` → `repeat(2, 1fr)`).

---

## Asset Files

| File | Type | Use |
|---|---|---|
| `EXPORIGEN_logo_final.svg` | SVG | Tree icon — embed inline, color with `currentColor` via CSS |
| `EXPORIGEN_Logo_final.png` | PNG | Black tree on white — print / documents |
| `EXPORIGEN_Logo_y_nombre_final.png` | PNG | Full logo on light bg — print / documents |
| `2.png` | PNG | Full logo on green bg — social media |
| `3.png` | PNG | Tree icon B&W — print / documents |

---

*Last updated: May 2026 — active version is `version-a.html` · exported as `exporigen-logo-svg.html`*
