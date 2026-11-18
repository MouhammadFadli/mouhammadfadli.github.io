# MUHAMMAD FADLI: Personal Website

Bilingual (English default, Arabic RTL) single-page personal website.
Astro 7 + TypeScript + custom CSS. No UI framework, no animation library.
Routes: `/en/` and `/ar/` (the root `/` redirects to `/en/`).

## Run locally

Requires Node.js 22.23.4 or newer (an Astro 7 requirement).

```bash
npm install
npm run dev        # http://localhost:4321/
```

## Build and preview

```bash
npm run check      # TypeScript / Astro diagnostics (expect 0 errors)
npm run build      # static site in dist/
npm run preview    # serve dist/ locally to test the production build
```

## Deploy later to GitHub Pages (not done yet)

Nothing is deployed and no workflow is active. When you are ready:

1. Create the repository. Two common setups:
   - **User site**: repo named `mouhammadfadli.github.io`. Use `BASE_PATH=/`.
   - **Project site**: any other repo name, for example `portfolio`. Use `BASE_PATH=/portfolio/`
     (the address becomes `https://mouhammadfadli.github.io/portfolio/`).
2. Copy `deploy/github-pages.yml.example` to `.github/workflows/deploy.yml` and set `SITE_URL` and `BASE_PATH`.
3. In the repo: Settings > Pages > Source: **GitHub Actions**. Push to `main`.

To build by hand instead: `SITE_URL=https://mouhammadfadli.github.io BASE_PATH=/ npm run build`
and publish the contents of `dist/`.

`SITE_URL` and `BASE_PATH` drive canonical links, hreflang, Open Graph image URLs, the sitemap and robots.txt.

## Where things live

| Path | Purpose |
| --- | --- |
| `src/i18n/ui.ts` | **All visible copy**, English and Arabic, typed so both stay in sync |
| `src/data/photos.ts` | Photo registry: file, focal point, bilingual alt text and captions |
| `src/data/site.ts` | The confirmed public links and handles |
| `src/assets/photos/` | Optimized WebP masters (Astro builds responsive sizes from these) |
| `src/components/Photo.astro` | Responsive, lazy-loaded image with `srcset` |
| `src/components/sections/` | Hero, About, Achievements, Journey, Education, Media, Contact |
| `src/styles/global.css` | Palette tokens, typography, section themes, motion |
| `public/` | Favicon set, Open Graph images (`og/og-en.jpg`, `og/og-ar.jpg`) |
| `tools/optimize-photos.mjs` | Re-creates the WebP masters from the original archive |

### Changing a photo
Replace the file in `src/assets/photos/` (same name) or point its entry in `src/data/photos.ts` to a new file,
and update the alt text and caption there. Describe only what is visible in the frame.

## Design system

- Palette (unchanged): Charcoal `#111111`, Warm Charcoal `#1C1A1A`, Deep Wine `#741F2B`, Accent Red `#A63A46`, Warm Off-White `#F0ECE7`.
- Fonts, self-hosted via npm (SIL OFL 1.1): Manrope (Latin) and IBM Plex Sans Arabic (Arabic). One font stack serves both
  languages: Arabic characters fall through to IBM Plex Sans Arabic; Latin names and URLs stay in Manrope.
- Accent red is about 3:1 on charcoal, so on dark sections it is used for rules and large marks only.
- Motion: a single hero entrance, a fade-in on headings and large blocks, a thin progress line. All of it is disabled under
  `prefers-reduced-motion`, and content stays visible with JavaScript off.
- RTL uses CSS logical properties and mirrored grids. Names, URLs and handles are isolated with `.ltr` so punctuation stays correct.

## Photo selection

All 23 supplied photos were reviewed visually. 16 are used, each once.

| Used for | Photo role |
| --- | --- |
| Hero | Low-light portrait with red edge light (matches the palette, sharp face, 4:5 fits the half-viewport) |
| About, Contact | Two sunlit editorial portraits |
| Achievements | Gold-medal podium with the Syrian flag |
| Journey (Training, Competition, Development, International) | Training hall, Kyorugi bout, uniform portrait, early championship, Syria jacket |
| Education | FADROX SPORT home page screenshot; Fadli Sport logo (`src/assets/fadli-sport-logo.png`, margins trimmed only) |
| Media | Kyorugi action, competition floor, podium; FADROX product page; three Fadli Sport store photos (store interior, taekwondo gear, supplements and apparel) |

Left out on purpose:
- **Instagram profile screenshot**: shows a phone number in the bio (no phone number may appear on the site).
- **Instagram feed screenshot**: app interface and third-party club kits; not a clean brand image.
- **Two snow photos** (a hooded portrait and a group): low resolution and nothing in the frame shows where they were taken.
  They were not presented as the Russia camp. If they are from the camp, add them to the International Experience chapter.
- **Sunglasses portrait**: redundant with the other portraits and less suited to a professional audience.
- **Bout with an athlete on the floor**: unclear context and not a flattering moment.
- **Second podium photo and second Syria-jacket photo**: near-duplicates of used images.

Images are original photographs only. Nothing is stock or AI-generated, and faces are not retouched or filtered
(only cropping through `object-position`).

## Content rules followed

- Only the four confirmed achievements. No invented years, event names, rankings or victory counts.
- The Russia camp is labeled a training experience, not a competition result. The Asian Championship is not mentioned.
- 2014 is the only date shown.
- FADROX SPORT (website project, founder and developer) and Fadli Sport (supplements and equipment business, founder and owner)
  are always presented separately.
- Contact uses only the five confirmed links. No phone number anywhere.

## QA summary (run against the production build)

- `astro check`: 0 errors, 0 warnings. `astro build`: succeeds (4 pages, 65 responsive WebP variants).
- English and Arabic at 1440, 1280, 820, 390 and 320 px: no horizontal overflow, all 16 images load, all have alt text,
  no console errors or failed requests, no broken in-page anchors.
- axe-core (WCAG 2.0/2.1 A and AA plus best practices), both languages, desktop and mobile: 0 violations.
- Keyboard: skip link first, logical tab order, visible focus. Mobile menu opens, closes on Escape, closes after navigating.
- Language switch keeps the current section (`/en/#journey` and `/ar/#journey`).
- Reduced motion and JavaScript disabled: all content visible.
- Local, unthrottled measurements: about 270 to 360 KB on first load, LCP under 250 ms, CLS 0.

## Not verified / remaining limits

- External links were checked for correct URLs and attributes, not for live reachability (no outside network in the build environment).
- No testing on real iOS Safari or Android devices; testing used Chromium at phone, tablet and desktop sizes.
- Performance numbers are local and unthrottled; real-world figures will depend on the host and network.
- Arabic copy was written from confirmed facts only and should be read by a native speaker before publishing.


## Final polish (latest round)

- About: dark section, portrait edges fade into a soft glow taken from the photo's own tones.
- Education: Fadli Sport card uses the supplied logo on the logo's own near-black; no red background.
- Entrepreneurship (Media > business): old photos removed, three new store photos.
- Contact: portrait fades into the wine background with a soft tint, same size and ratio.
- Hero, Achievements and the rest of Media were not touched. Run `npm install && npm run check && npm run build` to rebuild `dist/`.
