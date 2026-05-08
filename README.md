# ARTHAM AI Summit Theme

This folder contains the Astro frontend for the ARTHAM AI Summit website.
It is structured as a standalone, ready-to-publish theme package for the Astro official theme directory.

## Project Structure

```text
├── public/
│   ├── artham.png
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── EventCards.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HeroSection.vue
│   │   ├── LeadCaptureForm.vue
│   │   ├── NoiseStageSection.astro
│   │   ├── PreviousYearsVideoSection.vue
│   │   ├── SectionScrollNav.vue
│   │   ├── SpeakersShowcaseSection.astro
│   │   ├── TestimonialsSection.astro
│   │   └── VenueCarouselSection.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── invite.astro
│   │   └── speakers.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

## Theme Directory Notes

- This package is frontend-only and does not require a backend application to run.
- Speaker content currently uses local dummy data so the theme works out of the box.
- CMS integration can be added later as an optional enhancement without changing the theme structure.
- Keep the package focused on the Astro site, assets, and reusable components that belong in a theme listing.

## Commands

Run these from the `frontend/` folder:

| Command | Action |
| :-- | :-- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts the local dev server |
| `npm run build` | Builds the production site to `./dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run astro ...` | Runs Astro CLI commands such as `astro check` |

## More Information

For Astro project conventions, see the [Astro documentation](https://docs.astro.build/en/basics/project-structure/).
