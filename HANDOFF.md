# HANDOFF — تسليم للمحادثة/الحساب التالي

آخر تحديث: 13 نوفمبر 2026 · الحالة: **المرحلة 1 (تدقيق) منتهية. بانتظار موافقة المستخدم. المرحلة 2 لم تبدأ.**

> تعليمات للمنفّذ التالي: لا تعدّل ولا تحذف ولا تنشر ولا تعمل Commit/Push قبل موافقة صريحة. اقرأ هذا الملف ثم `PROJECT_AUDIT.md` و`MASTER_PLAN.md` و`IMAGE_INDEX.md`. لا تفترض أن أي ادعاء في README القديم صحيح (لم يُتحقق منه بالبناء).

## 1. المشروع

- **الاسم:** Muhammad Fadli Personal Portfolio (`fadli-portfolio`)
- **التقنية:** Astro ^7.4.7، TypeScript ^6.0.3 (strict)، CSS مخصص، Manrope Variable + IBM Plex Sans Arabic (Fontsource)، بلا إطار واجهات. **Node ≥ 22.23.4** مطلوب.
- **اللغات:** `/en/` (افتراضية) و`/ar/` (RTL)، والجذر يحوّل إلى `/en/`.
- **النشر المخطط:** GitHub Pages، المستودع `https://github.com/MouhammadFadli/mouhammadfadli.github.io`، الفرع `main`، الموقع `https://mouhammadfadli.github.io` (`BASE_PATH=/`). يُستخدم المستودع الحالي ولا يُحذف تاريخه دون موافقة. لم يُنشر شيء بعد.
- **الملفات المرفقة:** `fadli-portfolio-final_1.zip` (المشروع، مطابق بالـ MD5 لـ `fadli-portfolio-final.zip`) و`fadli-new-photo.zip` (13 صورة في `Fadlinew/`).

## 2. الهدف النهائي (من المستخدم)

Portfolio عالمي المستوى بثلاثة محاور: **Athletics** (تايكواندو)، **Technology** (دراسة ومشاريع)، **Entrepreneurship** (Fadli Sport). هوية: Premium Dark Editorial، سينمائي، Sports Performance، فحمي/أسود/عنابي، شعار هندسي **MF**، العبارة **Built Through Discipline**.

الميزات: Intro سينمائي قصير قابل للتخطي، Hero سينمائي، نبذة قصيرة، Interactive Athletic Timeline، Competition Modals، Project Cards + Modals، Media & Gallery + Filters + Lightbox، Language Switcher، Portfolio PDF، Contact بلا نموذج، SEO، Responsive، Accessibility، أداء.
**ممنوع:** أقسام مستقلة للمهارات/التعليم/الفلسفة، عدادات الإنجازات، نموذج مراسلة، موقع المتجر الجغرافي وقصة تأسيسه، رقم الهاتف.

## 3. الحقائق المعتمدة (من المستخدم حرفياً، لا تضف عليها)

**الرياضة:** لاعب تايكواندو **Kyorugi** ومنافس، **ليس مدرباً حالياً**. بدأ المنافسة **2014**.
**الأحزمة:** 14 July 2017 Black Belt 1st Dan · 20 February 2022 Black Belt 3rd Dan.

| التاريخ | البطولة | النتيجة |
|---|---|---|
| 17 Feb 2016 | Provincial Championship | 2nd |
| 3 Nov 2016 | Tishreen Team Championship | 1st |
| 26 Feb 2017 | Provincial Championship | 1st |
| 11 Mar 2017 | Republic Championship | 1st |
| 26 Nov 2017 | Tishreen Championship | 1st |
| 15 Jan 2018 | National Team Trials | 1st |
| 8 Feb 2018 | Final National Team Trials | 1st |
| 17 Feb 2018 | Fujairah International Championship | Gold Medal |
| 26 Jul 2018 | La'younak Ya Sham Championship | 1st |
| 29 Jun 2019 | National Team Trials | 1st |
| 29 Dec 2019 | National Team Trials | 1st |
| 1 Nov 2020 | National Team Trials | 1st |
| 22 Aug 2021 | Republic Championship | 2nd |
| 3 Mar 2024 | Republic Championship | 1st |
| 26 Sep 2026 | Republic Championship – Men's Division | 1st |

**معسكر:** 7 June 2019، Training Camp مع المنتخب السوري في روسيا. **ليس بطولة.**
**ممنوع تماماً:** إظهار "المركز الثالث في آسيا". لا تضف أي إنجاز أو بطولة أخرى.

**التقنية:** طالب **Information Technology** في **IUST**، **السنة الثالثة** (حسب المعلومات الحالية). المهارات: C++, HTML, CSS, JavaScript. المشاريع: Library Management System، Bank Management System، Rock Paper Scissors. GitHub: `https://github.com/MouhammadFadli`. **لا تخترع وظائف/تقنيات للمشاريع، افحص المستودعات.** بدأ مؤخراً أساسيات Cybersecurity: **لا تصفه بخبير/مهندس أمن سيبراني.** **FADROX SPORT = مشروع برمجي تجريبي، وليس المتجر.**

**التجارة:** **Fadli Sport** متجر رياضي فعلي يملكه ويؤسسه. تأسس **3 November 2025**. الشعار: "كل ما يحتاجه الرياضي في مكان واحد". Instagram: `https://www.instagram.com/fadli.sport1/` · Facebook: `https://www.facebook.com/profile.php?id=61582783426047`. **لا تخلط بين Fadli Sport وFADROX SPORT.**

**الاستضافة:** مجانية بالكامل، بلا نطاق مدفوع. الموقع قابل للنشر من جانب المستخدم.

## 4. ما فُحص

- كل ملفات المشروع الـ 68 قراءةً (بلا بناء، لا شبكة).
- الصور الجديدة الـ 13 بصرياً + EXIF + MD5 + أبعاد، ومطابقتها مع صور الموقع الحالية.
- حدود الاستضافة: GitHub Pages وCloudflare Pages من وثائقهما، Netlify من مصادر ثانوية؛ ومتطلب Node من ملاحظات إصدارات Astro.
- **لم يُفحص:** البناء/الأداء/axe، مستودعات GitHub، روابط الموقع الخارجية، صور الموقع الـ 11 الباقية بصرياً.

## 5. أهم النتائج

1. الأساس التقني سليم؛ **لا إعادة بناء**.
2. **أخطاء محتوى:** الموقع يصف المستخدم **"مدرباً"** (6+ مواضع وJSON-LD)؛ "بطل المحافظة **عدة مرات**" غير مدعومة بقائمته؛ FADROX موصوف كمشروع حي لا كتجريبي؛ لا حزام ولا بطولات ولا مشاريع برمجية ولا Facebook ولا تاريخ تأسيس المتجر.
3. **لا ميزة تفاعلية** من المطلوب موجودة. الشعار نص "MF" فقط.
4. **الصور الجديدة:** كلها من فترة الناشئين، لا شيء من 2020–2026؛ أفضلها `athletics-tishreen-2017-11-26-gold-01.jpg` و`FB_IMG_1794394573842.jpg`؛ 4 ضعيفة؛ تحذيرات خصوصية وسياسية (انظر IMAGE_INDEX).
5. **التوصية:** البقاء على GitHub Pages، مع Cloudflare Pages بديلاً مجانياً.

## 6. معلومات تحتاج تأكيد المستخدم (أسئلة مفتوحة)

1. هل تعليمة "Hero وAchievements وMedia معتمدة ولا تتغير" (من محادثة سابقة) ما زالت سارية رغم الميزات الجديدة؟
2. هل فاز بلقب المحافظة أكثر من مرة؟ (القائمة: واحد، 26 Feb 2017).
3. صور المحافظة: (أ) لافتة سياسية بأعلى الصورة: تُقصّ أم تُستبعد؟ (ب) شهادة "شكر وتقدير" بترويسة حزبية: تُستبعد؟
4. الصورة الأعلى جودة (Tishreen): أي لاعب هو؟ هل يجوز نشر القاصرين الآخرين؟ وكذلك بقية الصور التي فيها بالغون/أطفال.
5. تناقض الثلج مع 7 June 2019: هل الصورتان من المعسكر فعلاً؟ هل التاريخ صحيح؟
6. صورة EXIF بتاريخ 20 Sep 2017 لا 26 Feb 2017: أي التاريخين صحيح؟
7. تأكيد: `fadlysyria@gmail.com`، `@fadli.tkd`، `https://mouhammadfadli.github.io/fadrox-sport/`، ووصف "Syrian".
8. مستودعات GitHub: أرسلها (ZIP/README) لأكتب وصف المشاريع.
9. صور 2020–2026 وحزام الدان الثالث؟ ولوغو MF: هل لديه تصور/ملف؟ وإلا يُصمَّم.
10. هل تُعتمد حقيقة "المركز 1" في كل ما فيه "gold" باسم الملف رغم أن الإطار لا يُظهر ذلك؟
11. اتجاه "السنة الثالثة": يُعرض في الموقع أم يبقى خارجه (تتغير كل عام)؟

## 7. خطة المرحلة 2 (ملخص، التفاصيل في MASTER_PLAN.md)

0 خط أساس البناء → 1 تصحيح المحتوى + شعار MF + أدوات الصور → 2 Timeline + Modals → 3 Project Cards (بعد المستودعات) → 4 Gallery/Filters/Lightbox → 5 Hero + Intro → 6 PDF → 7 SEO/أداء/وصول/QA + ZIP. لا تبدأ إلا بموافقة صريحة.

## 8. الملفات المهمة

`src/i18n/ui.ts` (كل النصوص) · `src/data/photos.ts` · `src/data/site.ts` (الروابط) · `src/components/sections/*` · `src/layouts/BaseLayout.astro` (SEO/JSON-LD) · `src/styles/global.css` · `tools/optimize-photos.mjs` (قديم، يحتاج إعادة كتابة) · `astro.config.mjs` (`SITE_URL`/`BASE_PATH`) · `deploy/github-pages.yml.example` · `package.json`.
**ملفات التدقيق الجديدة (هذه المرحلة، لم تمسّ ملفات الموقع):** `PROJECT_AUDIT.md`، `MASTER_PLAN.md`، `IMAGE_INDEX.md`، `HANDOFF.md`.

## 9. تنبيهات تنفيذية

- الصور: دوّر EXIF تلقائياً، **جرّد EXIF**، أعد التسمية على نُسخ (`provinicial` و`tanning` أخطاء إملائية)، ولا تُعدّل ملامح الأشخاص.
- شهادة بترويسة حزبية، ولافتة سياسية: لا تُنشر دون قرار صريح.
- معسكر روسيا: نوع `camp` بلا نتيجة، وبلا كأس/ميدالية في تصميمه.
- الـ Modals: لا محتوى مخترَع. الأحداث بلا صور تُعرض داخل السطر.

---
## 10. تحديث المرحلة 2 (14 نوفمبر 2026)
المرحلة 2 نُفّذت محلياً (لا Commit/Push/نشر). التفاصيل في `FINAL_HANDOFF.md` و`CHANGELOG.md`.
قرارات مطبّقة: "Provincial Champion" فقط؛ لاعب لا مدرب؛ استبعاد صور القاصرين/السياسية/الشهادة الحزبية؛ لا Asia؛ روسيا معسكر؛ بطاقات GitHub: الاسم + اللغة + الرابط فقط (تحقق عبر GitHub API).
ما زال مفتوحاً: D4 (تاريخ صور الثلج)، D5 (تأكيد الإيميل و@fadli.tkd ورابط FADROX وكلمة "Syrian")، D7 (صور 2020–2026)، D11 (السنة الثالثة: غير معروضة).
