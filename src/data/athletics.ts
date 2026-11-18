// Verified athletic record. Source: HANDOFF.md section 3 (facts supplied by the athlete).
// Add nothing here that is not in that list. Type-only imports keep this file
// loadable from plain Node (tools/build-pdf.mjs) as well as from Astro.
import type { Locale } from '../i18n/utils';

type Text = Record<Locale, string>;
export type EventKind = 'start' | 'competition' | 'belt' | 'camp';

export interface AthleticEvent {
  id: string;
  kind: EventKind;
  /** ISO date, or just a year for the start of the career. */
  date: string;
  name: Text;
  /** Result text. Never set for `camp` (a training camp has no result). */
  result?: Text;
  /** Optional photo key from photos.ts. Only set for approved, event-matched photos. */
  photo?: string;
}

const first: Text = { en: '1st', ar: 'المركز الأول' };
const second: Text = { en: '2nd', ar: 'المركز الثاني' };
const gold: Text = { en: 'Gold Medal', ar: 'ميدالية ذهبية' };

const provincial: Text = { en: 'Provincial Championship', ar: 'بطولة المحافظة' };
const republic: Text = { en: 'Republic Championship', ar: 'بطولة الجمهورية' };
const trials: Text = { en: 'National Team Trials', ar: 'تجارب المنتخب الوطني' };

const rawEvents: AthleticEvent[] = [
  { id: 'start-2014', kind: 'start', date: '2014', name: { en: 'Starts competing', ar: 'بداية المنافسة' } },
  { id: 'provincial-2016', kind: 'competition', date: '2016-02-17', name: provincial, result: second },
  { id: 'tishreen-team-2016', kind: 'competition', date: '2016-11-03', name: { en: 'Tishreen Team Championship', ar: 'بطولة تشرين للفرق' }, result: first },
  { id: 'provincial-2017', kind: 'competition', date: '2017-02-26', name: provincial, result: first },
  { id: 'republic-2017', kind: 'competition', date: '2017-03-11', name: republic, result: first },
  { id: 'belt-1st-dan', kind: 'belt', date: '2017-07-14', name: { en: 'Black Belt', ar: 'الحزام الأسود' }, result: { en: '1st Dan', ar: 'دان 1' } },
  { id: 'tishreen-2017', kind: 'competition', date: '2017-11-26', name: { en: 'Tishreen Championship', ar: 'بطولة تشرين' }, result: first },
  { id: 'trials-2018-01', kind: 'competition', date: '2018-01-15', name: trials, result: first },
  { id: 'trials-final-2018', kind: 'competition', date: '2018-02-08', name: { en: 'Final National Team Trials', ar: 'التجارب النهائية للمنتخب الوطني' }, result: first },
  { id: 'fujairah-2018', kind: 'competition', date: '2018-02-17', name: { en: 'Fujairah International Championship', ar: 'بطولة الفجيرة الدولية' }, result: gold },
  { id: 'layounak-2018', kind: 'competition', date: '2018-07-26', name: { en: "La'younak Ya Sham Championship", ar: 'بطولة عيونك يا شام' }, result: first },
  { id: 'trials-2019-06', kind: 'competition', date: '2019-06-29', name: trials, result: first },
  { id: 'camp-russia-2019', kind: 'camp', date: '2019-06-07', name: { en: 'Training camp in Russia with the Syrian National Team', ar: 'معسكر تدريبي في روسيا مع المنتخب الوطني السوري' } },
  { id: 'trials-2019-12', kind: 'competition', date: '2019-12-29', name: trials, result: first },
  { id: 'trials-2020', kind: 'competition', date: '2020-11-01', name: trials, result: first },
  { id: 'republic-2021', kind: 'competition', date: '2021-08-22', name: republic, result: second },
  { id: 'belt-3rd-dan', kind: 'belt', date: '2022-02-20', name: { en: 'Black Belt', ar: 'الحزام الأسود' }, result: { en: '3rd Dan', ar: 'دان 3' } },
  { id: 'republic-2024', kind: 'competition', date: '2024-03-03', name: republic, result: first },
  { id: 'republic-2026', kind: 'competition', date: '2026-09-26', name: { en: "Republic Championship – Men's Division", ar: 'بطولة الجمهورية – فئة الرجال' }, result: first },
];

export const athleticEvents: AthleticEvent[] = [...rawEvents].sort((a, b) => a.date.localeCompare(b.date));

export const eventYear = (e: AthleticEvent) => e.date.slice(0, 4);

export function formatEventDate(e: AthleticEvent, lang: Locale): string {
  if (e.date.length === 4) return e.date;
  const d = new Date(`${e.date}T12:00:00Z`);
  return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-u-nu-latn' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(d);
}
