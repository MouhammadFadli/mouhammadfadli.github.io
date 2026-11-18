import type { PhotoKey } from './photos';

export type GalleryCategory = 'athletics' | 'technology' | 'entrepreneurship' | 'personal';

/** Order here is the display order. Only approved photographs (see tools/process-photos.mjs). */
export const gallery: { photo: PhotoKey; category: GalleryCategory }[] = [
  { photo: 'mediaAction', category: 'athletics' },
  { photo: 'galleryBench', category: 'athletics' },
  { photo: 'mediaRingside', category: 'athletics' },
  { photo: 'journeyCompetition', category: 'athletics' },
  { photo: 'galleryMat', category: 'athletics' },
  { photo: 'journeyDevCurrent', category: 'athletics' },
  { photo: 'journeyTraining', category: 'athletics' },
  { photo: 'mediaPodium', category: 'athletics' },
  { photo: 'journeyDevEarly', category: 'athletics' },
  { photo: 'journeyIntl', category: 'athletics' },
  { photo: 'mediaFadroxShop', category: 'technology' },
  { photo: 'educationFadroxHome', category: 'technology' },
  { photo: 'storeFloor', category: 'entrepreneurship' },
  { photo: 'storeGear', category: 'entrepreneurship' },
  { photo: 'storeSupplements', category: 'entrepreneurship' },
  { photo: 'aboutPortrait', category: 'personal' },
  { photo: 'contactPortrait', category: 'personal' },
];
