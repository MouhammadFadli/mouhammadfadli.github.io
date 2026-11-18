# PROJECT_AUDIT — Muhammad Fadli Portfolio

تاريخ التدقيق: 13 نوفمبر 2026 · المرحلة 1 (تدقيق فقط، لم يُعدَّل أي ملف من ملفات الموقع)

## 0. حدود هذا التدقيق (اقرأها أولاً)

| ما تم فعلاً | ما لم يتم |
|---|---|
| قراءة كل ملفات المصدر الـ 68 في `fadli-portfolio-final_1.zip` (Astro، CSS، i18n، البيانات، الأدوات، الإعدادات) | **لم أشغّل `npm install` ولا `astro check` ولا `astro build`**: شبكة بيئة التنفيذ معطّلة. كل ما يخص نجاح البناء والأداء والـ axe في README هو **ادعاء سابق لم أتحقق منه** |
| فحص بصري للصور الجديدة الـ 13 واحدة تلو الأخرى، مع قراءة EXIF وMD5 وأبعاد كل ملف | لم أفحص **مستودعات GitHub** (لا شبكة). لا أعرف محتواها، ولن أصف وظائفها أو تقنياتها |
| مطابقة الصور الجديدة مع صور الموقع الحالية (17 صورة) | لم أعد فحص كل صور الموقع الحالية بصرياً: شاهدت 6 منها، والباقي معتمد على وصف alt في `photos.ts` |
| التحقق من حدود الاستضافة عبر بحث الويب (GitHub Docs، Cloudflare Docs، وAstro releases) | لم أتحقق من روابط الموقع الخارجية (FADROX، إنستغرام، فيسبوك) ولم أفتحها |

## 1. حالة الموقع الحالية

موقع **Astro 7.4.7 + TypeScript 6 (strict) + CSS مخصص**، صفحة واحدة بسبعة أقسام (Hero، About، Achievements، Journey، Education، Media، Contact) بنسختين `/en/` و`/ar/` ومسار جذر `/` يحوّل إلى `/en/`. لا يوجد إطار واجهات ولا مكتبة حركة. الاعتماديات قليلة جداً: `astro`، خطّان من Fontsource، و`@astrojs/check` وTypeScript للتطوير (360 حزمة في lockfile كلها تقريباً transitive).

**الخلاصة:** الأساس التقني سليم ومنظّم ويستحق البناء عليه. المشكلة الأساسية ليست في الكود، بل في (أ) محتوى لا يطابق الحقائق المعتمدة الآن، و(ب) غياب كل الميزات التفاعلية المطلوبة في المرحلة الثانية.

### هيكل المشروع

```
src/
  components/ Header, Footer, Photo, sections/{Hero,About,Achievements,Journey,Education,Media,Contact}
  layouts/BaseLayout.astro   (SEO + JSON-LD + سكربت reveal وشريط التقدم)
  pages/ index.astro (redirect) · [lang]/index.astro · 404 · sitemap.xml.ts · robots.txt.ts
  i18n/ ui.ts (كل النصوص EN/AR، مفحوصة بـ satisfies) · utils.ts
  data/ photos.ts (سجل الصور + alt + caption ثنائي اللغة) · site.ts (الروابط)
  assets/photos/ 17 ملف WebP  ·  assets/fadli-sport-logo.png
  styles/global.css (رموز اللون والخط والثيمات)
public/ favicon.ico/.svg · apple-touch-icon.png · og/og-{en,ar}.jpg
tools/optimize-photos.mjs · deploy/github-pages.yml.example · README.md
```
لا يوجد: `.git`، `.github/workflows`، `node_modules`، `dist`، `.nvmrc`، `_headers`.

## 2. ما يستحق الحفاظ عليه

1. **نظام i18n**: ملف واحد لكل النصوص، والعربية مقيّدة بنفس شكل الإنجليزية عبر `satisfies typeof en`. يمنع نقصان مفاتيح بين اللغتين. أضف إليه فقط.
2. **RTL حقيقي**: خصائص CSS منطقية (`inline-start`…)، `:root:lang(ar)` يلغي letter-spacing ويرفع line-height، وكلاس `.ltr` يعزل الأسماء والروابط. هذا نادر وجيد.
3. **مكوّن `Photo`**: `astro:assets` + `srcset` + lazy/eager + `object-position` لكل صورة. يصلح مباشرة للمعرض.
4. **سجل الصور `photos.ts`** مع alt وcaption ثنائيي اللغة يصف المرئي فقط. ممارسة صحيحة.
5. **الحركة**: reveal واحد، يُعطَّل تحت `prefers-reduced-motion`، والمحتوى ظاهر بدون JavaScript. التزم به في الميزات الجديدة.
6. **SEO الأساسي**: canonical وhreflang وx-default وOG/Twitter وsitemap وrobots مولَّدة من `SITE_URL/BASE_PATH`.
7. **إمكانية الوصول الأساسية**: skip link، `:focus-visible` واضح، زر قائمة بـ `aria-expanded` ويُغلق بـ Escape، تبديل لغة يحافظ على القسم.
8. **لوحة الألوان** (Charcoal `#111`، Wine `#741F2B`، Red `#A63A46`، Paper `#F0ECE7`) تطابق الهوية المطلوبة (Dark/Burgundy). لا حاجة لتغييرها.
9. **ملف نشر جاهز غير مفعّل** `deploy/github-pages.yml.example`، ومحتوى README دقيق في توثيق الملفات.

## 3. المشاكل (مرتبة بالخطورة)

### 3.1 أخطاء محتوى تخالف الحقائق المعتمدة (يجب إصلاحها قبل أي شيء)

| # | الموضع | المشكلة | المطلوب |
|---|---|---|---|
| C1 | `ui.ts` (title/description EN+AR، `hero.intro` EN، `about.lead` EN+AR، `about.paths[0]` EN+AR) و`BaseLayout.astro` (JSON-LD `jobTitle: "Taekwondo athlete and coach"`) | الموقع يصفك **"مدرباً"** في 6+ مواضع. الحقيقة المعتمدة: **لاعب ومنافس، ولست مدرباً حالياً** | إزالة "coach/مدرب" من كل النصوص وبيانات schema |
| C2 | `achievements.items[0]` | "Multiple-time Governorate Champion / بطل المحافظة عدة مرات". القائمة المعتمدة فيها **بطولة محافظة واحدة بالمركز الأول** (26 Feb 2017) ومركز ثانٍ (17 Feb 2016) | **تحتاج تأكيدك**: هل فُزتَ بلقب المحافظة أكثر من مرة؟ إن لا، تصبح "Provincial Champion" |
| C3 | `hero.achievement` / `achievements.items[1]` | "Multiple-Time Syrian Republic Champion": مدعوم (ثلاثة مراكز أولى: 11 Mar 2017 و3 Mar 2024 و26 Sep 2026) | مقبول، مع ربطه بالتايم لاين |
| C4 | قسم Achievements كله | أربع بطاقات فقط، مقابل **15 بطولة** و**حزامين** معتمدة الآن (README القديم كان يقول إن 4 إنجازات فقط مؤكدة) | يُستبدل/يُغذّى بالتايم لاين التفاعلي |
| C5 | `education.fadrox`، `about.paragraphs[1]`، `media.categories[1]` | FADROX SPORT موصوف "Founder & Developer… visit the live website". الحقيقة: **مشروع برمجي تجريبي**، وصور الموقع تُظهر واجهة متجر بعروض وبانرات، فيلتبس بـ Fadli Sport | وسم صريح "Experimental project / مشروع تجريبي" في كل مواضعه |
| C6 | `education`/`about` | `cybersecurity` تُعرض كـ "area of interest" فقط. مقبول، لكن لا شيء يقول إنك **في مرحلة البداية** | صياغة "Building cybersecurity fundamentals" لا أكثر. لا "expert/engineer" |
| C7 | غياب | لا السنة الدراسية (الثالثة)، ولا C++/HTML/CSS/JavaScript، ولا مشاريع Library/Bank/Rock Paper Scissors، ولا تاريخ تأسيس Fadli Sport (3 Nov 2025)، ولا الشعار "كل ما يحتاجه الرياضي في مكان واحد"، ولا رابط Facebook | تُضاف داخل Project Cards ومقطع Fadli Sport (دون أقسام مهارات/تعليم مستقلة، وفق طلبك) |

### 3.2 معلومات في الموقع **غير موجودة في الحقائق المعتمدة** (تحتاج تأكيدك)

- إيميل `fadlysyria@gmail.com` و Instagram الشخصي `@fadli.tkd` (من مرحلة سابقة، لم يردا في مهمتك الحالية).
- رابط FADROX: `https://mouhammadfadli.github.io/fadrox-sport/`: لم أستطع التحقق من أنه يعمل.
- وصف "Syrian" (الجنسية) مستخدم في النص كله، والمنطقي أنه صحيح لكنه غير مذكور في حقائق هذه المهمة.

### 3.3 مشاكل تقنية

| # | الشدة | المشكلة |
|---|---|---|
| T1 | عالية | **لا توجد أي ميزة تفاعلية مطلوبة**: لا intro، لا تايم لاين تفاعلي، لا modals، لا فلاتر، لا lightbox، لا تحميل PDF. JavaScript الحالي ≈ 3 سكربتات صغيرة (قائمة/سكوب-سباي/تبديل لغة، reveal، شريط تقدم) |
| T2 | عالية | الشعار **"MF" نص فقط** في الهيدر (حد سفلي أحمر). الـ favicon مربع بحرفين. لا شعار هندسي مميز كما تريد |
| T3 | متوسطة | **عنوان الصفحة الإنجليزي 77 حرفاً** وسيُقتطع في نتائج البحث، ويحمل "Coach" |
| T4 | متوسطة | JSON-LD فيه `Person` فقط: لا `alternateName` (اسم المعرّف "Mouhammad" ≠ "Muhammad" في الموقع)، لا `alumniOf`/`knowsAbout`، ولا كيان لـ Fadli Sport |
| T5 | متوسطة | `tools/optimize-photos.mjs` يعتمد على `sharp` **غير معلن** في `package.json` (يعمل فقط لأن Astro يجلبه كاعتمادية)، وأسماء الملفات الأصلية فيه تخص الأرشيف القديم، فلن يعمل مع الصور الجديدة |
| T6 | متوسطة | **متطلب Node ≥ 22.23.4**. تحققت أنه حقيقي (Astro رفع الحد بسبب إصدارات Node الأمنية في أكتوبر 2026). الـ workflow المقترح يستخدم `node-version: 22` (يأخذ آخر 22.x: مقبول)، لكن Cloudflare/Netlify تحتاج ضبط `NODE_VERSION` يدوياً |
| T7 | منخفضة | الـ workflow المثال يستخدم `checkout@v4` و`upload-pages-artifact@v3` و`deploy-pages@v4`: يجب فحص آخر إصدارات قبل التفعيل (لم أتحقق) |
| T8 | منخفضة | 404 بالإنجليزية فقط بلا خط عربي كامل ولا description |
| T9 | منخفضة | لا `lastmod` في sitemap، ولا `font preload`، ولا LICENSE/`.nvmrc`/`.node-version` |
| T10 | منخفضة | README يقول "16 صورة مستخدمة" وفعلياً `photos.ts` يسجل **17** |
| T11 | معلومة | لا يمكن ضبط ترويسات HTTP (CSP، cache-control) على GitHub Pages. ملف `_headers` يعمل فقط على Cloudflare/Netlify |

### 3.4 الأداء وإمكانية الوصول (نظرياً من الكود)

- **جيد بالتصميم**: كل الصور WebP عبر `astro:assets` مع `srcset` وlazy ماعدا الـ Hero؛ لا مكتبات JS؛ CSS صغير (≈7 KB عام + CSS معزول لكل قسم). مجموع ملفات الصور الأصلية 2.27 MB قبل التصغير.
- **لا أستطيع تأكيد** أرقام README (270–360 KB، LCP < 250 ms، axe = 0). تحتاج تشغيل بناء ومراجعة Lighthouse فعلية في المرحلة 2.
- نقاط ينبغي مراقبتها عند الإضافة: التركيز داخل modal (focus trap)، اتجاه أسهم الـ lightbox في RTL، تباين اللون الأحمر `#A63A46` على الخلفية الداكنة (README نفسه يقول 3:1 → للخطوط الكبيرة والخطوط الفاصلة فقط)، وحركة الـ intro.

## 4. هل التقنية الحالية مناسبة؟

**نعم، وأوصي بعدم إعادة البناء.** كل الميزات المطلوبة قابلة للتنفيذ بـ Astro + TypeScript + JavaScript خام:

| الميزة | الطريقة | تعقيد |
|---|---|---|
| Modals (منافسات/مشاريع) | عنصر `<dialog>` الأصلي + `showModal()`، فيه focus وEscape مدمجان | منخفض |
| Lightbox | نفس `<dialog>` + تنقل بالأسهم (معكوس في RTL) + تحميل مسبق للمجاور | متوسط |
| فلاتر المعرض | أزرار `aria-pressed` + `data-category`، بلا مكتبة | منخفض |
| Timeline تفاعلي | `<ol>` دلالي من ملف بيانات typed، تحسين تدريجي (يعمل بلا JS) | متوسط |
| Intro قصير | overlay CSS فوق Hero مرسوم أصلاً، زر تخطي، مرة لكل جلسة، معطّل مع reduced-motion | منخفض-متوسط |
| تحميل PDF | ملف PDF ثابت لكل لغة في `public/` (انظر المخاطر) | **متوسط-عالٍ** |
| تبديل اللغة | موجود | — |

## 5. الاستضافة

**لا حاجة لتغيير الاستضافة.** المستودع `mouhammadfadli.github.io` (فرع main) موجود أصلاً. التفاصيل والمقارنة في `MASTER_PLAN.md` §6.

## 6. ملخص الصور

13 صورة جديدة: **كلها تقريباً من فترة الطفولة/الناشئين (2017–2019 حسب الأسماء)**، ولا صورة منها تغطي 2020–2026 (بطولة الجمهورية 2024 و2026، وحزام الدان الثالث 2022). 5 صور بلا أي تسمية (`FB_IMG_*`). لا تكرار حرفي (MD5 مختلف). **التفاصيل والتصنيف في `IMAGE_INDEX.md`**، وأهم نقاطها:

1. صورة نُسبت لـ "Provincial 26 Feb 2017" **تاريخها في EXIF هو 20 Sep 2017** (كاميرا Samsung GT-N7100)، فيجب عدم الاعتماد على التاريخ الموجود في اسم الملف.
2. شهادة في إحدى الصور هي **شهادة شكر وتقدير** صادرة عن فرع حزبي، وليست وثيقة نتيجة بطولة.
3. صورة المحافظة الأقوى فيها **لافتة سياسية** في أعلى الإطار (تحتاج قصاً).
4. صور "معسكر روسيا" تظهر **ثلجاً كثيفاً وملابس شتوية** بينما تاريخ المعسكر المعتمد 7 يونيو. لا أفترض أيهما خاطئ، لكن لا يجوز تعليق الصورة بذلك التاريخ قبل التأكد.
5. أغلب الصور تضم **قاصرين آخرين وبالغين** (مدربين/عائلة/طفل رضيع): قرار خصوصية مطلوب منك.

## 7. أسئلة تحتاج إجابتك قبل المرحلة 2

هي نفسها في `HANDOFF.md` §6.
