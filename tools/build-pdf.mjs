// Builds public/downloads/Muhammad-Fadli-Portfolio-{EN,AR}.pdf from the same data the site uses.
//   node tools/build-pdf.mjs
// Needs (maintainer machine only, not for hosting): wkhtmltopdf, python3 + fonttools +
// reportlab + arabic-reshaper + python-bidi, DejaVu fonts, sharp.
// Arabic is shaped by wkhtmltopdf's WebKit. The Plex Arabic web subset lacks the glyph forms WebKit
// emits (first letters of words vanished), so Arabic text uses the system DejaVu Sans; Latin uses Plex.
import sharp from 'sharp';
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const { ui } = await import(pathToFileURL(join(root, 'src/i18n/ui.ts')).href);
const { athleticEvents, formatEventDate } = await import(pathToFileURL(join(root, 'src/data/athletics.ts')).href);
const { codeProjects, fadroxRepo } = await import(pathToFileURL(join(root, 'src/data/projects.ts')).href);
const { links, handles } = await import(pathToFileURL(join(root, 'src/data/site.ts')).href);

const work = join(tmpdir(), 'fadli-pdf');
mkdirSync(work, { recursive: true });
mkdirSync(join(root, 'public/downloads'), { recursive: true });

// 1. Fonts: woff -> ttf (WebKit in wkhtmltopdf can't read woff2).
const fdir = join(root, 'node_modules/@fontsource/ibm-plex-sans-arabic/files');
const py = `
from fontTools.ttLib import TTFont
import sys
for w in (400, 700):
    for sub in ('arabic', 'latin'):
        f = TTFont(f'${fdir}/ibm-plex-sans-arabic-{sub}-{w}-normal.woff')
        f.flavor = None
        f.save(f'${work}/plex-{sub}-{w}.ttf')
`;
execFileSync('python3', ['-c', py]);

// Official MF mark, light-surface variant (ink + burgundy).
await sharp(join(root, 'src/assets/brand/mf-mark-light.png')).resize({ height: 160 }).toFile(join(work, 'mf-light.png'));

// 2. Portrait (EXIF-free JPEG), same approved hero photograph as the site.
await sharp(join(root, 'src/assets/photos/hero-portrait.webp')).resize({ width: 700 }).jpeg({ quality: 82 }).toFile(join(work, 'portrait.jpg'));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const face = (fam, sub, w) => `@font-face{font-family:'${fam}';font-weight:${w};src:url('file://${work}/plex-${sub}-${w}.ttf')}`;

const logo = `<img src="file://${work}/mf-light.png" height="40" alt="" style="display:block">`;

function page(lang) {
  const t = ui[lang];
  const rtl = lang === 'ar';
  const e = t.education;
  const rows = athleticEvents
    .map((ev) => {
      const res = ev.result ? ev.result[lang] : ev.kind === 'camp' ? t.timeline.kinds.camp : '';
      return `<tr><td class="d">${esc(ev.kind === 'start' ? ev.date : formatEventDate(ev, lang))}</td><td>${esc(ev.name[lang])}${ev.kind === 'belt' ? '' : ''}</td><td class="r">${esc(res)}</td></tr>`;
    })
    .join('');
  const proj = codeProjects.map((p) => `<li><b dir="ltr">${esc(p.name)}</b> · <span dir="ltr">${p.language}</span><br><span class="u" dir="ltr">${p.repo}</span></li>`).join('');
  return `<!doctype html><html lang="${lang}" dir="${rtl ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><style>
${face('PL', 'latin', 400)}${face('PL', 'latin', 700)}
body{margin:0;font-family:'PL','DejaVu Sans',sans-serif;font-size:11pt;line-height:${rtl ? 1.9 : 1.55};color:#111;text-align:${rtl ? 'right' : 'left'}}
.top{border-bottom:4px solid #741f2b;padding-bottom:14px;margin-bottom:16px;overflow:hidden}
.top img.p{float:${rtl ? 'left' : 'right'};width:120px;margin-${rtl ? 'right' : 'left'}:18px}
h1{font-size:26pt;margin:6px 0 2px;letter-spacing:${rtl ? 0 : '-0.5px'}}
.tag{font-size:13pt;font-weight:700;color:#741f2b;margin:0 0 8px}
h2{font-size:13pt;margin:20px 0 6px;padding-bottom:3px;border-bottom:1px solid #bbb;color:#741f2b;page-break-after:avoid}
table{width:100%;border-collapse:collapse;font-size:10pt}
td{padding:3px 6px;border-bottom:1px solid #e3ded8;vertical-align:top}
td.d{width:26%;white-space:nowrap}td.r{width:24%;font-weight:700}
tr{page-break-inside:avoid}
ul{margin:0;padding:0;list-style:none}li{margin-bottom:6px}
.u{font-size:9pt;color:#555}.note{font-size:10pt;color:#444}
</style></head><body>
<div class="top"><img class="p" src="file://${work}/portrait.jpg" alt="">${logo}
<h1 dir="ltr" style="text-align:${rtl ? 'right' : 'left'}">${t.hero.name}</h1><p class="tag">${esc(t.hero.headline)}</p>
<div>${esc(t.hero.intro)}</div></div>
<h2>${esc(t.about.title)}</h2><p>${esc(t.about.lead)}</p>${t.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}
<h2>${esc(t.achievements.title)}</h2><ul>${t.achievements.items.map((i) => `<li><b>${esc(i.title)}</b>${i.note ? ` <span class="note">(${esc(i.note)})</span>` : ''}</li>`).join('')}</ul>
<h2>${esc(t.timeline.title)}</h2><table>${rows}</table>
<h2>${esc(e.title)}</h2><p><b>${esc(e.universityName)}</b><br>${esc(e.universityText)}<br>${esc(e.interestsLabel)}: ${e.interests.map(esc).join('، ')}<br>${esc(e.learning.label)}: ${esc(e.learning.text)}</p>
<h2>${esc(e.projectsTitle)}</h2><ul>${proj}
<li><b dir="ltr">${e.fadrox.name}</b> · <span dir="ltr">${fadroxRepo.language}</span> — ${esc(e.fadrox.tag)}<br><span class="u" dir="ltr">${fadroxRepo.repo}</span></li></ul>
<h2>${esc(e.store.name)}</h2><p><b>${esc(e.store.role)}</b> · ${esc(e.store.tag)}<br>${esc(e.store.slogan)}<br>${esc(e.store.text)}<br>${esc(e.store.founded)}<br>${esc(e.store.whatsapp)}: <span dir="ltr">${handles.whatsappStore}</span></p>
<h2>${esc(t.contact.title)}</h2><ul>
<li>${esc(t.contact.emailLabel)}: <span dir="ltr">${links.email}</span></li>
<li>${esc(t.contact.instagramPersonal)}: <span dir="ltr">${handles.instagramPersonal}</span></li>
<li>${esc(t.contact.instagramStore)}: <span dir="ltr">${handles.instagramStore}</span></li>
<li>${esc(t.contact.facebookStore)}: <span class="u" dir="ltr">${links.facebookStore}</span></li>
<li>${esc(t.contact.github)}: <span dir="ltr">${links.github}</span></li></ul>
</body></html>`;
}

// Arabic: reportlab (wkhtmltopdf clips Arabic lines), same data, see tools/pdf_ar.py.
{
  const t = ui.ar;
  const e = t.education;
  const content = {
    title: 'Muhammad Fadli، الملف التعريفي',
    name: t.hero.name,
    headline: t.hero.headline,
    intro: t.hero.intro,
    sections: [
      { title: t.about.title, paras: [t.about.lead, ...t.about.paragraphs] },
      { title: t.achievements.title, items: t.achievements.items.map((i) => ({ text: i.title, bold: true, note: i.note })) },
      {
        title: t.timeline.title,
        rows: athleticEvents.map((ev) => [
          ev.kind === 'start' ? ev.date : formatEventDate(ev, 'ar'),
          ev.name.ar,
          ev.result ? ev.result.ar : ev.kind === 'camp' ? t.timeline.kinds.camp : '',
        ]),
      },
      {
        title: e.title,
        paras: [`${e.universityName}. ${e.universityText}`, `${e.interestsLabel}: ${e.interests.join('، ')}`, `${e.learning.label}: ${e.learning.text}`],
      },
      {
        title: e.projectsTitle,
        items: [
          ...codeProjects.map((p) => ({ text: `${p.name} \u202a(${p.language})\u202c`, bold: true, ltr: [p.repo] })),
          { text: `${e.fadrox.name} \u202a(${fadroxRepo.language})\u202c: ${e.fadrox.tag}`, bold: true, ltr: [fadroxRepo.repo] },
        ],
      },
      { title: e.store.name, paras: [`${e.store.role}، ${e.store.tag}`, e.store.slogan, e.store.text, e.store.founded, `${e.store.whatsapp}: \u202a${handles.whatsappStore}\u202c`] },
      {
        title: t.contact.title,
        items: [
          { text: t.contact.emailLabel, bold: true, ltr: [links.email] },
          { text: t.contact.instagramPersonal, bold: true, ltr: [handles.instagramPersonal] },
          { text: t.contact.instagramStore, bold: true, ltr: [handles.instagramStore] },
          { text: t.contact.facebookStore, bold: true, ltr: [links.facebookStore] },
          { text: t.contact.github, bold: true, ltr: [links.github] },
        ],
      },
    ],
  };
  const json = join(work, 'content-ar.json');
  writeFileSync(json, JSON.stringify(content));
  const out = join(root, 'public/downloads/Muhammad-Fadli-Portfolio-AR.pdf');
  execFileSync('python3', [join(root, 'tools/pdf_ar.py'), json, join(work, 'portrait.jpg'), out]);
  console.log('wrote', out);
}

for (const lang of ['en']) {
  const html = join(work, `portfolio-${lang}.html`);
  writeFileSync(html, page(lang));
  const out = join(root, `public/downloads/Muhammad-Fadli-Portfolio-${lang.toUpperCase()}.pdf`);
  execFileSync('wkhtmltopdf', ['--quiet', '--enable-local-file-access', '--page-size', 'A4', '-T', '16mm', '-B', '16mm', '-L', '16mm', '-R', '16mm', '--title', `Muhammad Fadli, ${lang}`, html, out]);
  console.log('wrote', out);
}
