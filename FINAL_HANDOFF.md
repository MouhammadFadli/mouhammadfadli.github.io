# FINAL_HANDOFF: Phase 2 (14 Nov 2026)

Nothing was committed, pushed, deployed or published. All work is in this folder.

## Implemented
- **Content corrections** (EN + AR, meta, JSON-LD, PDF): no "coach"; "Provincial Champion" only; no Asian achievement; Russia = training camp (no result); FADROX SPORT (experimental software project) kept apart from Fadli Sport (real business).
- **MF logo**: `src/components/ui/Logo.astro`, `public/favicon.svg/.ico`, `apple-touch-icon.png`, OG images (EN/AR).
- **Timeline** (`Timeline.astro`, data in `src/data/athletics.ts`): 15 championships, 2 belts, Russia camp, 2014 start; year navigation, legend, dialog per entry with prev/next. Every fact is copied from HANDOFF.md section 3. No event photos are attached, because the only event-labelled photos contain other minors or were excluded.
- **Projects** (`Education.astro`, `src/data/projects.ts`): Library Management System, Bank Management System (repo `Bank-System`), Rock Paper Scissors (repo `CPP-RockPaperScissors`), all C++; FADROX SPORT (repo language HTML) with a screenshots dialog. Read from the GitHub API on 14 Nov 2026: name, language, link only. The repos `BrainQuiz` and `HTML-And-Css-Design-Leon` exist but were not on your list, so they are not shown.
- **Fadli Sport block**: slogan, founded 3 Nov 2025, Instagram + Facebook. No location, no founding story.
- **Gallery** (`Media.astro`, `src/data/gallery.ts`): 17 photos, 4 category filters (`aria-pressed`), `<dialog>` lightbox with Esc, arrow keys (reversed in RTL), focus return, next-image preload.
- **Hero + intro**: grain/vignette layer, scroll cue; intro <= 2.4 s, skip button, once per session, disabled for reduced motion and without JS.
- **PDF**: `public/downloads/Muhammad-Fadli-Portfolio-{EN,AR}.pdf`, linked from Contact and the footer.
- **SEO**: titles under 60 characters, JSON-LD `@graph` (Person + Organization), hreflang kept.
- **Images**: 2 new solo photos (`gallery-bench-split`, `gallery-mat-split`), EXIF-rotated and metadata-stripped. Excluded: every photo with other minors, the political banner / opposition flag / party certificate images, unverified-permission and low-quality ones (listed in `tools/process-photos.mjs`).

## Verified (actually run)
- Node 22.23.4, `npm ci`, `npx astro check`: 0 errors, 0 warnings, 0 hints (final run).
- `npm run build`: succeeds, 4 pages, `dist` about 7.6 MB.
- Scan of built HTML for coach / مدرب / governorate / Asia terms: none.
- Both PDFs rendered to images and read; Arabic shaping and C++ ordering checked.

## NOT verified (no browser was available in this environment)
- Visual layout, responsive behaviour (320-1440), RTL appearance, animations and the intro, **timeline dialog, gallery filters and lightbox in a real browser**.
- Lighthouse, axe, keyboard-only walkthrough, no-JS view, link checking.
- The live FADROX URL and the email / `@fadli.tkd` handle (open question D5).
Please open `npm run dev` and click through both languages before publishing.

## Limitations / decisions for you
- GitHub project cards have no modal: there is no verified content to put in one. Only FADROX has a screenshots dialog.
- "Syrian" wording kept from the existing site (D5 unresolved).
- Provincial 2017 photo (#2) excluded because of the political banner; a cropped version would need your explicit approval.
- No photos for 2020-2026 (D7). The "third year" of study is not displayed.
- The Arabic PDF uses DejaVu Sans (no Plex Arabic glyph forms for reportlab); the EN PDF is wkhtmltopdf-rendered. Regenerate with `node tools/build-pdf.mjs` (needs wkhtmltopdf, python3 with fonttools, reportlab, arabic-reshaper, python-bidi).
- `npm` reported no vulnerabilities at install time; I did not run a separate audit.

## Run locally
```
nvm use            # Node >= 22.23.4 (.nvmrc)
npm ci
npm run dev        # http://localhost:4321/en/ and /ar/
npm run check && npm run build && npm run preview
```

## Publish yourself (GitHub Pages)
1. Review the site locally and the files above.
2. `git add -A && git commit -m "Portfolio phase 2"` then `git push origin main` in your repository (`MouhammadFadli/mouhammadfadli.github.io`).
3. Settings -> Pages -> Source: GitHub Actions. Copy `deploy/github-pages.yml.example` to `.github/workflows/deploy.yml`, update the action versions, and use `node-version: 22`.
4. Build uses `SITE_URL=https://mouhammadfadli.github.io BASE_PATH=/` (defaults already set in `astro.config.mjs`).

---
## Update 18 Nov 2026: new logo + WhatsApp
See CHANGELOG.md "Final update". Verified by running: `astro check` 0/0/0, `npm run build` OK, built HTML contains the three Fadli Sport URLs (EN + AR), no remnants of the old logo in src/public/tools/dist, PDFs and icons rendered and inspected.
Not verified (no browser): on-screen look of the logo at all sizes, intro animation, and actually opening the links on a phone.
Note: the logo source is a 1280x714 JPEG sheet, so the marks are about 376 px wide (sharp up to roughly 2x at header size, not for large print). Send an SVG or high-res PNG if you want to replace them later (same file names).
