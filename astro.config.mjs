import { defineConfig } from 'astro/config';

// Deployment target is GitHub Pages. Override these when the final URL is known:
//   SITE_URL=https://example.com BASE_PATH=/repo-name/ npm run build
const site = process.env.SITE_URL ?? 'https://mouhammadfadli.github.io';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
