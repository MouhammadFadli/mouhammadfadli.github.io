# Changelog

## Phase 2 (14 Nov 2026), local only, nothing committed or deployed
### Content
- Removed every "coach" description (copy, meta, JSON-LD). He is a competing Kyorugi athlete.
- "Multiple-time Governorate Champion" -> "Provincial Champion" (single title, 26 Feb 2017).
- Added belts (1st Dan 14 Jul 2017, 3rd Dan 20 Feb 2022) and 15 verified championships.
- Russia: training camp only (no result). No Asian-championship mention anywhere.
- FADROX SPORT = experimental software project; Fadli Sport = real business (separate blocks, Facebook link, founded 3 Nov 2025, slogan).
- Cybersecurity shown as "currently learning fundamentals" only.
### Features
- Geometric MF logo (header, favicon.svg/.ico, apple-touch, OG images, intro, PDF).
- Interactive athletic timeline (year nav, legend, per-entry dialog with prev/next).
- Project cards from verified GitHub repos (name, language, link) + FADROX screenshots dialog.
- Media gallery: category filters, `<dialog>` lightbox (keyboard, RTL-aware arrows, focus return, preloading).
- Cinematic hero layer (grain, vignette, scroll cue) and skippable intro (<= 2.4 s, once per session, off for reduced motion).
- Downloadable portfolio PDFs (EN via wkhtmltopdf, AR via reportlab).
- SEO: shorter titles, JSON-LD @graph (Person + Fadli Sport Organization).
### Tooling
- `tools/process-photos.mjs` (EXIF rotate + strip, WebP), `tools/build-pdf.mjs`, `tools/pdf_ar.py`; `sharp` declared; `.nvmrc`.
- Old `tools/optimize-photos.mjs` and `Journey.astro` removed.
### Images
- Added 2 solo training photos (gallery-bench-split, gallery-mat-split), metadata stripped. All other new photos excluded (see tools/process-photos.mjs).

## Final update (18 Nov 2026): new official logo + Fadli Sport WhatsApp
- Replaced the old geometric MF with the supplied logo (cut out unmodified from the brand sheet): `src/assets/brand/mf-mark-dark.png` (cream + burgundy, dark surfaces) and `mf-mark-light.png` (ink + burgundy, light surfaces; same shape, recoloured only).
- `Logo.astro` is now an optimized image. Updated: header, intro (clip-path reveal replaces the old stroke-draw), footer (new small mark), favicon.ico, favicon-32.png, icon-192.png, apple-touch-icon.png, OG images (EN/AR), EN portfolio PDF. Removed `public/favicon.svg`.
- WhatsApp added to the Fadli Sport block (`https://wa.me/963959122991`, shown as +963 959122991, number kept LTR in Arabic). Instagram/Facebook URLs unchanged. Small brand icons (Simple Icons, CC0) added to all three links for visual consistency. Also: JSON-LD `telephone`, both PDFs' Fadli Sport section.
- Fadli Sport's own logo (`fadli-sport-logo.png`) is a different brand and was left untouched.
