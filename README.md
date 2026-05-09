# EXPORIGEN

Centro comercial de ferias y exposiciones en Santo Domingo de los Colorados, Ecuador.

## Descripcion del Proyecto

**EXPORIGEN** (expo + origen) conecta emprendedores locales autenticos con su comunidad. El concepto de marca se basa en la autenticidad e identidad local.

**Propietario:** Firok, Santo Domingo de los Colorados
**Stack:** Astro + Vue (componentes interactivos con `client:load`)
**Uso principal:** Atraer exhibidores (expositores) e informar al publico sobre las proximas ediciones de la feria.

## Estructura de Archivos

```
/exporigen/
├── src/
│   ├── components/
│   │   ├── Header.astro         ← Navbar — acepta prop links para contexto por pagina
│   │   ├── Footer.astro
│   │   ├── HeroSection.vue      ← Componente Vue (cliente)
│   │   ├── SectionScrollNav.vue ← Nav sticky con scroll suave (cliente)
│   │   ├── EventCards.astro
│   │   ├── SpeakersShowcaseSection.astro
│   │   ├── TestimonialsSection.astro
│   │   ├── VenueCarouselSection.astro
│   │   └── PreviousYearsVideoSection.vue
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro          ← Pagina principal (SPA-like con scroll sections)
│   │   ├── speakers.astro       ← Pagina de Expositores
│   │   └── invite.astro         ← Pagina de Invitacion / Registro
│   └── styles/
│       └── global.css
├── public/
├── astro.config.mjs
├── package.json
├── AGENTS.md                    ← Contexto del proyecto para agentes AI
└── README.md                    ← este archivo
```

## Navegacion Contextual

El `Header.astro` acepta una prop `links` para personalizar el navbar segun la pagina:

```astro
// Pagina principal
<Header links={[
  { label: 'Inicio', href: '/' },
  { label: 'Ferias', href: '/#lineup' },
  { label: 'Expositores', href: '/#speakers' },
  { label: 'Ubicación', href: '/#venue' },
]} />

// Pagina Expositores
<Header links={[
  { label: 'Inicio', href: '/' },
  { label: 'Ferias', href: '/#lineup' },
  { label: 'Expositores', href: '/#speakers' },
  { label: 'Testimonios', href: '/#testimonios' },
  { label: 'Ubicación', href: '/#venue' },
]} />

// Pagina Invitacion
<Header links={[
  { label: 'Inicio', href: '/' },
  { label: 'Ferias', href: '/#lineup' },
  { label: 'Expositores', href: '/#speakers' },
  { label: 'Ubicación', href: '/#venue' },
]} />
```

## Stack Tecnologico

- **Framework:** Astro 5
- **Componentes interactivos:** Vue 3 (`client:load`)
- **Estilos:** CSS custom properties, `clamp()` para tipografia fluida
- **Fonts:** Bebas Neue (logo/headers), Space Grotesk (UI/body)
- **Sin backend** — formulario conecta a Google Forms o similar

## Desarrollo

```bash
npm install
npm run dev      # desarrollo
npm run build    # produccion
```

## Pendiente

- [ ] Reemplazar placeholder de fotos con imagenes reales
- [ ] Conectar formulario de registro a backend
- [ ] Google Maps para ubicacion del venue
- [ ] Testimonios reales
- [ ] Paginas separadas por edicion
- [ ] SEO: meta tags, OG, favicon SVG
- [ ] Dominio: exporigen.ec