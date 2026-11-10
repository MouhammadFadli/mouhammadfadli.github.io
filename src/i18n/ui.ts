import type { Locale } from './utils';

/**
 * All visible copy lives here. `ar` must match the shape of `en`
 * (enforced by `satisfies` at the bottom of the file).
 *
 * Content rules: only confirmed facts. No invented years, event names,
 * rankings or victory counts. The Russia camp is a training experience,
 * not a medal. The Asian Championship is not mentioned. FADROX SPORT
 * (website project) and Fadli Sport (business) are always kept apart.
 */
const en = {
  meta: {
    title: 'Muhammad Fadli | Taekwondo Athlete, Coach, IT Student, Founder of Fadli Sport',
    description:
      'Muhammad Fadli is a Syrian Taekwondo Kyorugi athlete and coach, an Information Technology student at IUST, and the founder of Fadli Sport.',
  },
  common: {
    skip: 'Skip to content',
    menu: 'Menu',
    nav: 'Main navigation',
    langLabel: 'Language',
    langName: 'العربية',
    langCode: 'ar',
    newTab: '(opens in a new tab)',
    backToTop: 'Back to top',
    rights: 'All rights reserved.',
  },
  nav: {
    about: 'About',
    achievements: 'Achievements',
    journey: 'Journey',
    education: 'Education & Tech',
    media: 'Media',
    contact: 'Contact',
  },
  hero: {
    name: 'MUHAMMAD FADLI',
    headline: 'Built Through Discipline.',
    intro:
      'A Taekwondo athlete and coach, an IT student, and an entrepreneur driven by continuous growth.',
    supporting:
      'A journey shaped by years on the mat, continuous learning, and building ideas beyond sport.',
    achievement: 'Multiple-Time Syrian Republic Champion · Fujairah International Gold Medalist',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'See the journey',
  },
  about: {
    title: 'About',
    lead: 'A Syrian Taekwondo athlete specializing in Kyorugi. Competing since 2014, still an active competitor, and a coach.',
    paragraphs: [
      'He is studying Information Technology at the International University for Science and Technology (IUST), with interests in technology, software development, and cybersecurity.',
      'He is the founder and owner of Fadli Sport, a sports supplements and sports equipment business, and the founder and developer of the FADROX SPORT website project.',
    ],
    pathsLabel: 'Three paths',
    paths: [
      { title: 'Athletic Performance', text: 'Taekwondo athlete (Kyorugi) and coach.' },
      { title: 'Education & Technology', text: 'IT student at IUST.' },
      { title: 'Entrepreneurship', text: 'Founder and owner of Fadli Sport.' },
    ],
  },
  achievements: {
    title: 'Achievements',
    intro: 'Syrian Taekwondo Kyorugi athlete.',
    items: [
      { tag: 'Title', title: 'Multiple-time Governorate Champion', note: '' },
      { tag: 'Title', title: 'Multiple-time Syrian Republic Champion', note: '' },
      { tag: 'International gold medal', title: 'Fujairah International', note: '' },
      {
        tag: 'Training experience',
        title: 'Training camp in Russia with the Syrian National Team',
        note: 'A training camp, not a competition result.',
      },
    ],
  },
  journey: {
    title: 'Athletic Journey',
    start: { label: '2014', text: 'Starts competing' },
    now: { label: 'Today', text: 'Active competitor' },
    chapters: [
      {
        title: 'Training',
        text: 'The work behind every result starts in the training hall.',
      },
      {
        title: 'Competition',
        text: 'Kyorugi bouts, where the training is tested.',
      },
      {
        title: 'Athletic Development',
        text: 'Growth from youth competition to the athlete today.',
      },
      {
        title: 'International Experience',
        text: 'Competing and training beyond Syria: Fujairah International, and a training camp in Russia with the Syrian National Team.',
      },
    ],
  },
  education: {
    title: 'Education & Technology',
    universityLabel: 'University',
    universityName: 'International University for Science and Technology (IUST)',
    universityText: 'Studying Information Technology.',
    interestsLabel: 'Areas of interest',
    interests: ['Technology', 'Software Development', 'Cybersecurity'],
    brandsTitle: 'Two names, two different things',
    brandsText:
      'FADROX SPORT is a website project. Fadli Sport is a real sports business. They are separate.',
    fadrox: {
      tag: 'Technical project',
      name: 'FADROX SPORT',
      role: 'Founder & Developer',
      text: 'A website project he founded and developed.',
      cta: 'Visit the live website',
    },
    store: {
      tag: 'Sports business',
      logoAlt: 'Fadli Sport logo',
      name: 'Fadli Sport',
      role: 'Founder & Owner',
      text: 'The sports supplements and sports equipment business founded and owned by Muhammad Fadli.',
      cta: 'See Fadli Sport on Instagram',
    },
  },
  media: {
    title: 'Media',
    intro: 'Original photographs from competition, projects, and business.',
    categories: [
      { id: 'athletic', title: 'Athletic Life', text: 'Competition floors and podiums.' },
      { id: 'tech', title: 'Education & Technology', text: 'The FADROX SPORT website project.' },
      { id: 'business', title: 'Entrepreneurship', text: 'Fadli Sport: supplements and equipment.' },
    ],
  },
  contact: {
    title: 'Contact',
    intro: 'Get in touch through any of these channels.',
    emailLabel: 'Email',
    instagramPersonal: 'Instagram, personal',
    instagramStore: 'Instagram, Fadli Sport',
    github: 'GitHub',
  },
};

const ar = {
  meta: {
    title: 'MUHAMMAD FADLI | رياضي تايكواندو، مدرب، طالب تكنولوجيا معلومات، مؤسس فضلي سبورت',
    description:
      'رياضي تايكواندو سوري متخصص في الكيوروغي (Kyorugi) ومدرب، وطالب تكنولوجيا معلومات في الجامعة الدولية للعلوم والتكنولوجيا (IUST)، ومؤسس فضلي سبورت.',
  },
  common: {
    skip: 'انتقل إلى المحتوى',
    menu: 'القائمة',
    nav: 'التنقل الرئيسي',
    langLabel: 'اللغة',
    langName: 'English',
    langCode: 'en',
    newTab: '(يفتح في تبويب جديد)',
    backToTop: 'العودة إلى الأعلى',
    rights: 'جميع الحقوق محفوظة.',
  },
  nav: {
    about: 'نبذة',
    achievements: 'الإنجازات',
    journey: 'المسيرة',
    education: 'التعليم والتقنية',
    media: 'الوسائط',
    contact: 'تواصل',
  },
  hero: {
    name: 'MUHAMMAD FADLI',
    headline: 'صُنعت بالانضباط.',
    intro: 'لاعب تايكواندو ومدرب · طالب تكنولوجيا معلومات · مؤسس متجر فضلي سبورت',
    supporting: 'رحلة صنعتها سنوات من التدريب، والتعلم المستمر، وتحويل الأفكار إلى مشاريع واقعية.',
    achievement: 'بطل الجمهورية السورية عدة مرات · حاصل على ذهبية الفجيرة الدولية',
    ctaPrimary: 'تواصل معي',
    ctaSecondary: 'تعرّف على المسيرة',
  },
  about: {
    title: 'نبذة',
    lead: 'رياضي تايكواندو سوري متخصص في الكيوروغي (Kyorugi). ينافس منذ عام 2014، ولا يزال لاعبًا منافسًا نشطًا، ويعمل مدرّبًا.',
    paragraphs: [
      'يدرس تكنولوجيا المعلومات في الجامعة الدولية للعلوم والتكنولوجيا (IUST)، ويهتم بالتقنية وتطوير البرمجيات والأمن السيبراني.',
      'وهو مؤسس ومالك فضلي سبورت، النشاط التجاري المتخصص في المكملات الرياضية والمعدات الرياضية، ومؤسس ومطوّر مشروع الموقع الإلكتروني FADROX SPORT.',
    ],
    pathsLabel: 'ثلاثة مسارات',
    paths: [
      { title: 'الأداء الرياضي', text: 'لاعب تايكواندو (كيوروغي) ومدرب.' },
      { title: 'التعليم والتقنية', text: 'طالب تكنولوجيا معلومات في IUST.' },
      { title: 'ريادة الأعمال', text: 'مؤسس ومالك فضلي سبورت.' },
    ],
  },
  achievements: {
    title: 'الإنجازات',
    intro: 'رياضي تايكواندو سوري في الكيوروغي.',
    items: [
      { tag: 'لقب', title: 'بطل المحافظة عدة مرات', note: '' },
      { tag: 'لقب', title: 'بطل الجمهورية السورية عدة مرات', note: '' },
      { tag: 'ميدالية ذهبية دولية', title: 'الفجيرة الدولية', note: '' },
      {
        tag: 'خبرة تدريبية',
        title: 'معسكر تدريبي في روسيا مع المنتخب الوطني السوري',
        note: 'معسكر تدريبي، وليس نتيجة منافسة.',
      },
    ],
  },
  journey: {
    title: 'المسيرة الرياضية',
    start: { label: '2014', text: 'بداية المنافسة' },
    now: { label: 'اليوم', text: 'لاعب منافس نشط' },
    chapters: [
      { title: 'التدريب', text: 'العمل وراء كل نتيجة يبدأ في قاعة التدريب.' },
      { title: 'المنافسة', text: 'نزالات الكيوروغي، حيث يُختبر التدريب.' },
      { title: 'التطور الرياضي', text: 'نمو من منافسات الفئات الصغيرة إلى اللاعب اليوم.' },
      {
        title: 'الخبرة الدولية',
        text: 'منافسة وتدريب خارج سوريا: الفجيرة الدولية، ومعسكر تدريبي في روسيا مع المنتخب الوطني السوري.',
      },
    ],
  },
  education: {
    title: 'التعليم والتقنية',
    universityLabel: 'الجامعة',
    universityName: 'الجامعة الدولية للعلوم والتكنولوجيا (IUST)',
    universityText: 'دراسة تكنولوجيا المعلومات.',
    interestsLabel: 'مجالات الاهتمام',
    interests: ['التقنية', 'تطوير البرمجيات', 'الأمن السيبراني'],
    brandsTitle: 'اسمان مختلفان، وشيئان مختلفان',
    brandsText: 'FADROX SPORT مشروع موقع إلكتروني. أما فضلي سبورت فهو نشاط تجاري رياضي حقيقي. وهما منفصلان.',
    fadrox: {
      tag: 'مشروع تقني',
      name: 'FADROX SPORT',
      role: 'المؤسس والمطوّر',
      text: 'مشروع موقع إلكتروني أسسه وطوّره.',
      cta: 'زيارة الموقع المباشر',
    },
    store: {
      tag: 'نشاط تجاري رياضي',
      logoAlt: 'شعار فضلي سبورت',
      name: 'فضلي سبورت',
      role: 'المؤسس والمالك',
      text: 'النشاط التجاري في المكملات الرياضية والمعدات الرياضية الذي أسسه محمد فضلي ويملكه.',
      cta: 'فضلي سبورت على إنستغرام',
    },
  },
  media: {
    title: 'الوسائط',
    intro: 'صور أصلية من المنافسات والمشاريع والعمل التجاري.',
    categories: [
      { id: 'athletic', title: 'الحياة الرياضية', text: 'أرضيات المنافسة ومنصات التتويج.' },
      { id: 'tech', title: 'التعليم والتقنية', text: 'مشروع الموقع الإلكتروني FADROX SPORT.' },
      { id: 'business', title: 'ريادة الأعمال', text: 'فضلي سبورت: مكملات ومعدات.' },
    ],
  },
  contact: {
    title: 'تواصل',
    intro: 'يمكنك التواصل عبر أي من هذه القنوات.',
    emailLabel: 'البريد الإلكتروني',
    instagramPersonal: 'إنستغرام، الحساب الشخصي',
    instagramStore: 'إنستغرام، فضلي سبورت',
    github: 'غيت هاب',
  },
} satisfies typeof en;

export const ui: Record<Locale, typeof en> = { en, ar };
