// Re-creates src/assets/photos/*.webp from the original photo archive.
//   node tools/optimize-photos.mjs "/path/to/original/photos/Fadli"
// Only the images listed here are used on the site. Other archive photos were
// reviewed and deliberately left out (see README, "Photo selection").
// Astro then generates responsive WebP sizes from these masters at build time.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const src = process.argv[2];
if (!src) throw new Error('Pass the folder that contains the original photos.');
const out = fileURLToPath(new URL('../src/assets/photos/', import.meta.url));
mkdirSync(out, { recursive: true });

// [original file, output name, max width (never enlarged), webp quality]
const jobs = [
  ['1794142250807.jpg', 'hero-portrait', 2000, 82],
  ['lv_0_20261020195353.jpg', 'about-portrait', 1500, 80],
  ['lv_0_20261020195132.jpg', 'contact-portrait', 1400, 80],
  ['IMG-20180217-WA0047.jpg', 'achievements-podium', 960, 82],
  ['#U0662#U0660#U0661#U0669#U0660#U0661#U0660#U0663_#U0661#U0666#U0665#U0661#U0661#U0665.jpg', 'journey-training', 2000, 80],
  ['lv_0_20261107174536.jpg', 'journey-competition', 1280, 82],
  ['lv_0_20261013212931.jpg', 'journey-development-current', 852, 84],
  ['IMG-20180217-WA0043.jpg', 'journey-development-early', 720, 84],
  ['#U0662#U0660#U0661#U0669#U0660#U0662#U0660#U0663_#U0661#U0664#U0661#U0667#U0665#U0661.jpg', 'journey-intl-jacket', 2000, 80],
  ['lv_0_20261107174626.jpg', 'media-athletic-ringside', 1800, 80],
  ['lv_0_20261107174745.jpg', 'media-athletic-action', 1700, 80],
  ['IMG-20180217-WA0044.jpg', 'media-athletic-podium', 960, 82],
  ['Screenshot 2026-11-08 183352.png', 'media-tech-fadrox-shop', 1262, 90],
  ['Screenshot 2026-11-08 183252.png', 'education-fadrox-home', 1917, 90],
  ['1794227266668.jpg', 'media-biz-gear', 1800, 82],
  ['1794228027762.jpg', 'media-biz-supplements', 1024, 82],
  ['1794229519674.jpg', 'media-biz-floor', 1024, 82],
];

for (const [file, name, width, quality] of jobs) {
  const info = await sharp(join(src, file))
    .rotate() // apply EXIF orientation
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(join(out, `${name}.webp`));
  console.log(`${name}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
}
