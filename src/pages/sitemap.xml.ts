import type { APIRoute } from 'astro';
import { homeUrl, locales } from '../i18n/utils';

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const alternates = locales
    .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(homeUrl(l))}"/>`)
    .join('\n');
  const urls = locales
    .map((l) => `  <url>\n    <loc>${abs(homeUrl(l))}</loc>\n${alternates}\n  </url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
