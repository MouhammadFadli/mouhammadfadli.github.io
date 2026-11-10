import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n/utils';

import heroPortrait from '../assets/photos/hero-portrait.webp';
import aboutPortrait from '../assets/photos/about-portrait.webp';
import contactPortrait from '../assets/photos/contact-portrait.webp';
import achievementsPodium from '../assets/photos/achievements-podium.webp';
import journeyTraining from '../assets/photos/journey-training.webp';
import journeyCompetition from '../assets/photos/journey-competition.webp';
import journeyDevCurrent from '../assets/photos/journey-development-current.webp';
import journeyDevEarly from '../assets/photos/journey-development-early.webp';
import journeyIntl from '../assets/photos/journey-intl-jacket.webp';
import mediaRingside from '../assets/photos/media-athletic-ringside.webp';
import mediaAction from '../assets/photos/media-athletic-action.webp';
import mediaPodium from '../assets/photos/media-athletic-podium.webp';
import mediaFadroxShop from '../assets/photos/media-tech-fadrox-shop.webp';
import educationFadroxHome from '../assets/photos/education-fadrox-home.webp';
import storeFloor from '../assets/photos/media-biz-floor.webp';
import storeGear from '../assets/photos/media-biz-gear.webp';
import storeSupplements from '../assets/photos/media-biz-supplements.webp';

type Text = Record<Locale, string>;

export interface Photo {
  src: ImageMetadata;
  /** CSS object-position, used to keep faces and subjects inside the crop. */
  position?: string;
  alt: Text;
  caption?: Text;
}

/**
 * Every photo on the site is an original from the supplied archive.
 * Alt text and captions describe only what is visible in the frame.
 */
export const photos = {
  heroPortrait: {
    src: heroPortrait,
    position: '50% 16%',
    alt: {
      en: 'Portrait of Muhammad Fadli in low light with a warm red edge light',
      ar: 'صورة شخصية لمحمد فضلي بإضاءة خافتة مع ضوء أحمر دافئ على الحافة',
    },
  },
  aboutPortrait: {
    src: aboutPortrait,
    position: '50% 6%',
    alt: {
      en: 'Muhammad Fadli seated in soft window light, looking to the side',
      ar: 'محمد فضلي جالسًا في ضوء نافذة ناعم وينظر إلى الجانب',
    },
  },
  contactPortrait: {
    src: contactPortrait,
    position: '50% 22%',
    alt: {
      en: 'Muhammad Fadli in a dark jacket, seated in side light',
      ar: 'محمد فضلي بسترة داكنة، جالسًا في ضوء جانبي',
    },
  },
  achievementsPodium: {
    src: achievementsPodium,
    position: '50% 40%',
    alt: {
      en: 'An athlete on the top step of the podium holding the Syrian flag, with a gold medal around his neck',
      ar: 'لاعب على أعلى منصة التتويج يحمل العلم السوري وفي عنقه ميدالية ذهبية',
    },
    caption: { en: 'Gold medal podium.', ar: 'منصة الميدالية الذهبية.' },
  },
  journeyTraining: {
    src: journeyTraining,
    position: '50% 50%',
    alt: {
      en: 'A young athlete doing the splits between two bars in a mirrored training hall',
      ar: 'لاعب صغير يؤدي حركة الانشقاق بين عارضتين داخل قاعة تدريب ذات مرايا',
    },
    caption: { en: 'Flexibility work in the training hall.', ar: 'تمارين المرونة داخل قاعة التدريب.' },
  },
  journeyCompetition: {
    src: journeyCompetition,
    position: '60% 50%',
    alt: {
      en: 'Two athletes in a Kyorugi bout, one in red and one in blue, with a referee beside them',
      ar: 'لاعبان في نزال كيوروغي، أحدهما بالأحمر والآخر بالأزرق، وبجانبهما حكم',
    },
    caption: { en: 'A Kyorugi bout.', ar: 'نزال كيوروغي.' },
  },
  journeyDevCurrent: {
    src: journeyDevCurrent,
    position: '50% 30%',
    alt: {
      en: 'Muhammad Fadli in full taekwondo uniform with a red chest protector, holding his helmet',
      ar: 'محمد فضلي بالزي الكامل للتايكواندو مع واقي صدر أحمر ويحمل خوذته',
    },
    caption: { en: 'In uniform.', ar: 'بالزي الرسمي.' },
  },
  journeyDevEarly: {
    src: journeyDevEarly,
    position: '50% 55%',
    alt: {
      en: 'A young athlete in taekwondo gear in front of a championship arena',
      ar: 'لاعب صغير بمعدات التايكواندو أمام ساحة بطولة',
    },
    caption: { en: 'At a championship.', ar: 'في إحدى البطولات.' },
  },
  journeyIntl: {
    src: journeyIntl,
    position: '75% 50%',
    alt: {
      en: 'An athlete in a red Syria jacket, seen from behind, looking out over a waterfront city skyline',
      ar: 'لاعب بسترة حمراء مكتوب عليها سوريا، من الخلف، ينظر إلى أفق مدينة على واجهة مائية',
    },
    caption: { en: 'In the Syria jacket.', ar: 'بسترة سوريا.' },
  },
  mediaRingside: {
    src: mediaRingside,
    position: '55% 20%',
    alt: {
      en: 'Muhammad Fadli in a red chest protector at the edge of the competition floor, looking at the camera',
      ar: 'محمد فضلي بواقي صدر أحمر على حافة أرضية المنافسة وهو ينظر إلى الكاميرا',
    },
    caption: { en: 'On the competition floor.', ar: 'على أرضية المنافسة.' },
  },
  mediaAction: {
    src: mediaAction,
    position: '45% 55%',
    alt: {
      en: 'A Kyorugi exchange between a red and a blue athlete beside a referee',
      ar: 'تبادل ضربات كيوروغي بين لاعب بالأحمر وآخر بالأزرق بجانب حكم',
    },
    caption: { en: 'Kyorugi in action.', ar: 'الكيوروغي أثناء النزال.' },
  },
  mediaPodium: {
    src: mediaPodium,
    position: '35% 50%',
    alt: {
      en: 'A young athlete with the Syrian flag and a medal on the podium, beside an official in white traditional dress',
      ar: 'لاعب صغير يحمل العلم السوري وفي عنقه ميدالية على المنصة، بجانب مسؤول بزي أبيض تقليدي',
    },
    caption: { en: 'On the podium.', ar: 'على منصة التتويج.' },
  },
  mediaFadroxShop: {
    src: mediaFadroxShop,
    position: '50% 0%',
    alt: {
      en: 'FADROX SPORT website product page with a deals carousel and promotional banners',
      ar: 'صفحة المنتجات في موقع FADROX SPORT مع شريط عروض ولافتات ترويجية',
    },
    caption: { en: 'FADROX SPORT, product page.', ar: 'FADROX SPORT، صفحة المنتجات.' },
  },
  educationFadroxHome: {
    src: educationFadroxHome,
    position: '50% 0%',
    alt: {
      en: 'FADROX SPORT website home page with a featured product banner',
      ar: 'الصفحة الرئيسية لموقع FADROX SPORT مع لافتة منتج مميز',
    },
    caption: { en: 'FADROX SPORT, home page.', ar: 'FADROX SPORT، الصفحة الرئيسية.' },
  },
  storeFloor: {
    src: storeFloor,
    position: '35% 50%',
    alt: {
      en: 'Fadli Sport store interior: supplement tubs, sports bags and apparel on wall shelving',
      ar: 'داخل متجر فضلي سبورت: علب مكملات وحقائب رياضية وملابس على رفوف الجدار',
    },
    caption: { en: 'Inside the store.', ar: 'داخل المتجر.' },
  },
  storeGear: {
    src: storeGear,
    position: '50% 50%',
    alt: {
      en: 'Taekwondo protective gear, uniforms, black belts and shoes arranged on lit wooden shelves',
      ar: 'معدات حماية للتايكواندو وبدلات وأحزمة سوداء وأحذية مرتبة على رفوف خشبية مضاءة',
    },
    caption: { en: 'Taekwondo equipment.', ar: 'معدات التايكواندو.' },
  },
  storeSupplements: {
    src: storeSupplements,
    position: '45% 50%',
    alt: {
      en: 'Protein and creatine tubs above sports bags, folded apparel and hanging clothes',
      ar: 'علب بروتين وكرياتين فوق حقائب رياضية وملابس مطوية ومعلقة',
    },
    caption: { en: 'Supplements and apparel.', ar: 'مكملات وملابس رياضية.' },
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
