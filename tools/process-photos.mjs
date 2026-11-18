// Prepares approved new photographs for the site.
//   node tools/process-photos.mjs "/path/to/Fadlinew"
// - auto-rotates from EXIF, then drops ALL metadata (sharp strips it by default)
// - writes WebP masters to src/assets/photos/ (Astro makes responsive sizes at build)
// - never crops, retouches or otherwise alters people; names are neutral and
//   carry no guessed dates or events.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const src = process.argv[2];
if (!src) throw new Error('Pass the folder that contains the new photographs (Fadlinew).');
const out = fileURLToPath(new URL('../src/assets/photos/', import.meta.url));
mkdirSync(out, { recursive: true });

// [source file, output name, max width (never enlarged), webp quality]
const approved = [
  ['FB_IMG_1794394573842.jpg', 'gallery-bench-split', 2000, 82],
  ['FB_IMG_1794390696267.jpg', 'gallery-mat-split', 960, 84],
];

// Reviewed and deliberately NOT published (decisions from the previous session):
//  - photos with other minors: athletics-tishreen-*, athletics-russia-camp-*
//  - political banner / party-branded certificate / opposition flag:
//    athletics-provincial-2017-*-01 and -02, athletics-provinicial-*-01,
//    athletics-provincial-2026-02-26-gold-02
//  - unconfirmed permission or identity, or very low quality:
//    athletics-fujairah-2018-*, athletics-provinicial-*-02, FB_IMG_...389459562,
//    FB_IMG_...389568169, FB_IMG_...390644827

for (const [file, name, width, quality] of approved) {
  const info = await sharp(join(src, file))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(join(out, `${name}.webp`));
  console.log(`${name}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}
