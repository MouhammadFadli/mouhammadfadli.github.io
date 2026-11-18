export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const dirOf = (lang: Locale): 'ltr' | 'rtl' => (lang === 'ar' ? 'rtl' : 'ltr');
export const otherLocale = (lang: Locale): Locale => (lang === 'en' ? 'ar' : 'en');

/** Prefix a path with the configured base (works for '/' and '/repo/'). */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}

/** URL of the homepage for a locale. */
export const homeUrl = (lang: Locale) => withBase(`${lang}/`);
