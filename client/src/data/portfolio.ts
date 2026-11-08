export type CategoryId = "all" | "identity" | "campaigns" | "product" | "spaces";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<CategoryId, "all">;
  categoryLabel: string;
  image: string;
  year: string;
  note: string;
};

export const categories: { id: CategoryId; label: string }[] = [
  { id: "all", label: "كل الأعمال" },
  { id: "identity", label: "هوية وإعلان" },
  { id: "campaigns", label: "حملات بصرية" },
  { id: "product", label: "تصوير منتجات" },
  { id: "spaces", label: "مساحات وكتب" },
];

export const projects: Project[] = [
  {
    id: "weam-identity",
    title: "هوية وئام السمرات",
    subtitle: "نظام بصري إداري بلمسة عربية",
    category: "identity",
    categoryLabel: "هوية وإعلان",
    image: "/media/identity.jpg",
    year: "2026",
    note: "تكوين هوية متكاملة يجمع بين الدفء، التنظيم، والوضوح عبر لوحة ألوان ترابية وتفاصيل ذهبية.",
  },
  {
    id: "taj-campaign",
    title: "تاج — لمسة تُكمل أناقتك",
    subtitle: "حملة إطلاق لمنتجات فاخرة",
    category: "campaigns",
    categoryLabel: "حملات بصرية",
    image: "/media/taj-promo.jpg",
    year: "2026",
    note: "معالجة إعلانية هادئة تجعل المنتج هو البطل، مع مزج بين الصورة المولّدة والرسالة العربية الواضحة.",
  },
  {
    id: "jewelry-story",
    title: "أشياء تحتفظ بالضوء",
    subtitle: "سلسلة صور لمنتجات مجوهرات",
    category: "product",
    categoryLabel: "تصوير منتجات",
    image: "/media/jewelry.jpg",
    year: "2026",
    note: "مشهد منتج ناعم يوازن بين التكوين الفاخر والمساحة البيضاء ليمنح القطع حضورًا بصريًا راقيًا.",
  },
  {
    id: "gold-watch",
    title: "تفكيك ساعة ذهبية",
    subtitle: "لوحة منتج + إنفوجرافيك",
    category: "product",
    categoryLabel: "تصوير منتجات",
    image: "/media/watch.jpg",
    year: "2026",
    note: "تحويل تفاصيل منتج معقّدة إلى لغة بصرية سهلة القراءة، مع توزيع معلوماتي يشبه صفحات المجلات.",
  },
  {
    id: "office-before-after",
    title: "المكتب — قبل وبعد",
    subtitle: "تصوّر بصري لمساحة عمل",
    category: "spaces",
    categoryLabel: "مساحات وكتب",
    image: "/media/office.jpg",
    year: "2026",
    note: "سرد بصري واضح يشرح أثر الإضاءة، المواد، والفراغ على تجربة مساحة العمل.",
  },
  {
    id: "book-cover",
    title: "غلاف في لون البرغندي",
    subtitle: "اتجاه فني لغلاف كتاب",
    category: "spaces",
    categoryLabel: "مساحات وكتب",
    image: "/media/book.jpg",
    year: "2026",
    note: "غلاف ذو حضور سينمائي يثبت كيف يمكن للصورة المولّدة أن تصنع مزاجًا قبل أن تبدأ القراءة.",
  },
  {
    id: "mirror-campaign",
    title: "انعكاس زهري",
    subtitle: "بوستر حملة موسمية",
    category: "campaigns",
    categoryLabel: "حملات بصرية",
    image: "/media/mirror.jpg",
    year: "2026",
    note: "ملصق تجريبي يترك مساحات للتنفس، ويستخدم المرآة كفكرة بصرية عن الهوية والتحوّل.",
  },
  {
    id: "warm-interior",
    title: "غرفة تُرحّب بالفكرة",
    subtitle: "مشهد داخلي دافئ",
    category: "spaces",
    categoryLabel: "مساحات وكتب",
    image: "/media/interior.jpg",
    year: "2026",
    note: "تصميم مزاجي لمساحة داخلية يوظف الخامات الطبيعية والضوء الذهبي لبناء إحساس هادئ.",
  },
];

export const drive = {
  root: "https://drive.google.com/drive/folders/1nDXOiHrpaygjQcBYDdcr_HE9kbgZV46L",
  cv: "https://docs.google.com/document/d/1c2l5EVdNn2frIXNqX4oFKiBQ9VvAPCkC/edit",
  avatar: "https://drive.google.com/file/d/1vyjD-le0SYqpWIk7_9TrfPu388UYAPkJ/view",
  presentations: [
    {
      title: "فوائد الذكاء الاصطناعي",
      eyebrow: "عرض تقديمي · عربي",
      description: "عرض بصري مبسّط يقدّم أثر الذكاء الاصطناعي وفوائده في الحياة والعمل.",
      href: "https://docs.google.com/presentation/d/1WaBlCbcqdDFUQ7Tc4-YgDu59stcd5bxJ/edit",
      accent: "gold",
    },
    {
      title: "الذكاء الاصطناعي في حياتنا",
      eyebrow: "عرض تقديمي · Presentation",
      description: "نسخة ثانية من المادة التعليمية بصياغة مختلفة ومناسبة للاستعراض السريع.",
      href: "https://docs.google.com/presentation/d/1BwDxSyQQC8JBt-lUt2zgNWfxBjxtA1tP/edit",
      accent: "blue",
    },
  ],
};

export type DriveFile = {
  name: string;
  type: "صورة" | "فيديو" | "صوت" | "مستند" | "عرض" | "أرشيف";
  size: string;
  href: string;
};

export type DriveFolder = {
  name: string;
  description: string;
  href: string;
  files: DriveFile[];
};

const driveFile = (id: string, name: string, type: DriveFile["type"], size: string, kind: "file" | "doc" | "presentation" = "file"): DriveFile => ({
  name,
  type,
  size,
  href: kind === "doc"
    ? `https://docs.google.com/document/d/${id}/edit`
    : kind === "presentation"
      ? `https://docs.google.com/presentation/d/${id}/edit`
      : `https://drive.google.com/file/d/${id}/view`,
});

export const driveFolders: DriveFolder[] = [
  {
    name: "Images",
    description: "كل الصور والتجارب البصرية المولّدة من مجلد Images.",
    href: "https://drive.google.com/drive/folders/17AwTmK4I8f7kIScqB0ag0gYK_8cYPpc6",
    files: [
      driveFile("1cKeGrM0Y4hp_I_VJfWOsXk66APTG16YN", "Office Makeover — Before and After.png", "صورة", "1.9 MB"),
      driveFile("1IUVqT06Q7H24_AketStcVvhdsdfNyGKk", "Elegant Arabic Luxury Brand Identity Board.png", "صورة", "2.1 MB"),
      driveFile("1IyC_9uSx4uLd5bHXhqA09lZbefALCzlK", "Elegant Gold Jewelry Still Life.png", "صورة", "2.1 MB"),
      driveFile("1k9hDH9n_qAjzMrxd9ffM00TMTjShHkLq", "TAJ product card QR updated.png", "صورة", "1.7 MB"),
      driveFile("1gdmOMcmSrwKeqChNy10YIj85tKsoX2gw", "Gemini Generated Image z9dfa.jpg", "صورة", "654 KB"),
      driveFile("1Dp2lQBEN0YlF6R6a69s8-Ji4pnYaDv_n", "Taj Accessories — Timeless Elegance.png", "صورة", "1.8 MB"),
      driveFile("1sxWeMKBRxIavAfsU9lSqOj6cVBdoTNLk", "Elegant Neutral Interior Portrait.png", "صورة", "1.9 MB"),
      driveFile("1-w_gaADBqxzHAykgFLsLAKOlyctRK2--", "1792998670764_ojt4xc.webp", "صورة", "61 KB"),
      driveFile("1RKfwzo4rTCkeDigJtiXXVgjOri9Sh-so", "designarena_image_p0xrz9rb.png", "صورة", "2.8 MB"),
      driveFile("1FLxc12zqz9SxKV42tz4-smqt5PO-WzyL", "Luxury Gold Watch Design Board.png", "صورة", "2.3 MB"),
      driveFile("1plozQv-MBZSs9DPgxKZHycnyVPEBSeoP", "Gold Watch Technical Infographic.png", "صورة", "2.3 MB"),
      driveFile("10PdJv65LVVYtmwcXejvggC7yr1cklPe3", "ساعة ذهبية — تحليل وتشريح تقني.png", "صورة", "1.9 MB"),
      driveFile("1N4RdnDoNSNhI9llUIhGkHvkVFBtWoedN", "Burgundy book cover design 01.jpg", "صورة", "1.5 MB"),
      driveFile("1cY4x-TgXOtFbpW8aVOBMeOmibB7KXPPp", "Burgundy book cover design 02.jpg", "صورة", "1.7 MB"),
      driveFile("14jkqwN_7Agq7UwmzE5qviIwOjrjAWzhA", "Luxury brand identity grid.jpg", "صورة", "2.4 MB"),
      driveFile("1WyRzuvT4AOa8db8dA-xJoSfkB7LNeWKA", "WhatsApp Image — visual study.jpg", "صورة", "2.3 MB"),
      driveFile("1WwK_hdTUxSKIlKJGJbNScfJGlVevcYxh", "مرحبا — تصميم ديكور.webp", "صورة", "1.3 MB"),
      driveFile("1N2_f7rwbkShDhhkCPfDcc6O5qF4M2zQu", "Gemini Generated Interior.jpg", "صورة", "652 KB"),
      driveFile("1WaH6vP65kfBpvVFmIuHVDNPQstvwNc1-", "Warm Minimalist Office with Wood Accents.png", "صورة", "1.9 MB"),
      driveFile("1_arPiHTh3ZO6u9juknHTxY7gGCVVj7pp", "أنت مصمم رائع — لوحة 01.webp", "صورة", "1.5 MB"),
      driveFile("1qiWNJcsWjaDKjTBGk90-OLGPir8M3tmY", "Gemini Generated Image 3elz.jpg", "صورة", "709 KB"),
      driveFile("1-pKG8G4Pu8W5yNiclkdklCpiWEQQSYdd", "Luxury TAJ Accessories Promo.png", "صورة", "2.2 MB"),
      driveFile("1chXYI2CdNskIwrD8b-eipn2xWxCN2iuJ", "أنت مصمم رائع — لوحة 02.webp", "صورة", "4.8 MB"),
      driveFile("1FFOmp8bFgJpacDfkgXgrecUx7_uqu6BW", "أنت مصمم رائع — لوحة 03.webp", "صورة", "1.2 MB"),
      driveFile("1dcUJTNDMrOHdkuoRrXSnUPyc6KcDOlbm", "Gemini Generated Image zgzog.jpg", "صورة", "753 KB"),
      driveFile("1otbdmVPUO6mTRh86SzBzxhCK7fc2nI7t", "صورة إعلانية للمجوهرات.webp", "صورة", "2.3 MB"),
      driveFile("1xMiUhT71sJScySi2cgsU0-1jmmlhLyjl", "Personalized Floral Mirror Poster.png", "صورة", "1.9 MB"),
      driveFile("1MMAQU2UQHjS_cL68kmHcEzHqMiGtckC_", "مرحبا — تصميم احترافي.webp", "صورة", "4.2 MB"),
      driveFile("1YX2soXTsTxPd84Rjc9EepLUSqweh8x_K", "Gemini Generated Image q4wx.jpg", "صورة", "727 KB"),
      driveFile("1KEBMoTYvA8v9leObYeP7jUkiRFWxt6lr", "تاج — لمسة تكمل أناقتك.png", "صورة", "2.1 MB"),
      driveFile("1jaF49ObHKeuGtfAHI7lE_oCPUgzb-g9h", "Gemini Generated Image q4wx 02.jpg", "صورة", "727 KB"),
    ],
  },
  {
    name: "Videos",
    description: "المقاطع والـ storyboards المرئية للمشاريع والحملات.",
    href: "https://drive.google.com/drive/folders/104fMrgSLwauRlBT9R7jTwa9OBeMF0Wnx",
    files: [
      driveFile("1K9P0kI1kUg7hxzbb42KgVbnDXyWML0b8", "Italian gold jewelry on silk.mp4", "فيديو", "1.5 MB"),
      driveFile("1qZ0IGNlyLVo1xD88cTJWDCN1B6acNAP1", "Storyboard 1.mp4", "فيديو", "70.3 MB"),
      driveFile("13ox5nJEsVWzIqzAN9hJZ7uJ7UiIN9ixy", "فيديو بدون عنوان 01.mp4", "فيديو", "6.1 MB"),
      driveFile("1NCag47QEbMjXyppEITejN_v0YJ6g2w3g", "فيديو بدون عنوان 03.mp4", "فيديو", "4.6 MB"),
      driveFile("1SrBPzk334c6BYtzMBzat3BfgzUWc8tCP", "Storyboard 1 — نسخة 02.mp4", "فيديو", "24.6 MB"),
    ],
  },
  {
    name: "Presentation",
    description: "العروض التقديمية الجاهزة للاستعراض أو الفتح في Google Slides.",
    href: "https://drive.google.com/drive/folders/11Haw1QKUdcln_KjMXSWCDO5eww_fzC3R",
    files: [
      driveFile("1WaBlCbcqdDFUQ7Tc4-YgDu59stcd5bxJ", "فوائد الذكاء الاصطناعي.pptx", "عرض", "11.0 MB", "presentation"),
      driveFile("1BwDxSyQQC8JBt-lUt2zgNWfxBjxtA1tP", "الذكاء الاصطناعي في حياتنا.pptx", "عرض", "10.7 MB", "presentation"),
    ],
  },
  {
    name: "Marketing Plan",
    description: "وثيقة الخطة الترويجية لحملة تاج لمدة 30 يومًا.",
    href: "https://drive.google.com/drive/folders/1TwnaOzPihUflyrj8ET9nl-Olx5pP3dhF",
    files: [driveFile("13x7XrZkXXOxHFuGCMi-SmCywmfw9ZD8O", "خطة ترويجية تاج للإكسسوارات — 30 يوم.docx", "مستند", "39 KB", "doc")],
  },
  {
    name: "Avatar",
    description: "فيديو الافتار المستخدم في التقديم البصري للموقع.",
    href: "https://drive.google.com/drive/folders/1DNUXeLd3jL-CpM3y9dApctAjqfnsm08E",
    files: [driveFile("1vyjD-le0SYqpWIk7_9TrfPu388UYAPkJ", "فيديو بدون عنوان — Avatar.mp4", "فيديو", "1.1 MB")],
  },
  {
    name: "Website",
    description: "حزمة تصميم الموقع المرجعية كاملة كما وردت في Drive.",
    href: "https://drive.google.com/drive/folders/1me5yWD6WvUb2dIhD5AEq7ZM0C-64uEcz",
    files: [driveFile("1Un6ZyZ--x8umZSqkG74uv5QeIIzkZY2A", "taj-accessories-website-design.zip", "أرشيف", "2.6 MB")],
  },
  {
    name: "QR",
    description: "ملفات QR والمرجع البصري المرافق لها.",
    href: "https://drive.google.com/drive/folders/1-EDCeVetI76H1Ew1oBW5iF2TZ7SF-Cb7",
    files: [
      driveFile("1KTrtZIXqpsbEcCIe19OpeXcnfiUsThWESkNPQ-N_GLw", "رابط ال QR", "مستند", "1 KB", "doc"),
      driveFile("1NDCCw4aKAFbJ2oH7zmfU-L4kuiNq3AVP", "IMG_9006.png", "صورة", "28 KB"),
    ],
  },
  {
    name: "CV",
    description: "نسخ السيرة الذاتية العربية والإنجليزية.",
    href: "https://drive.google.com/drive/folders/1jktgKIT9h8TptoL8JlmYU6Lv1sb36ZTy",
    files: [
      driveFile("1DnmaA48tHj7qqz9StPm0__-aM4gM2Bna", "Weam Alsmerat ATS CV.docx", "مستند", "37 KB", "doc"),
      driveFile("1c2l5EVdNn2frIXNqX4oFKiBQ9VvAPCkC", "Weam Alsmerat CV Bilingual.docx", "مستند", "38 KB", "doc"),
    ],
  },
  {
    name: "Sounds",
    description: "ملفات صوتية محفوظة في Drive — تظهر هنا كأرشيف فقط ولا يتم تشغيلها تلقائيًا.",
    href: "https://drive.google.com/drive/folders/1ip5_jY0Y0FtKC07gTQmby-Z9zx89nQaR",
    files: [
      driveFile("1cNu3iSvY0f-6l0xbF1cq3vGqSGGbUBMT", "Lauren — Friendly, Comforting and Soft.mp3", "صوت", "441 KB"),
      driveFile("1RxkWBXilyeaoII2yAWrskxJ1iiU4CNul", "Mohammad — Warm Arabic Commercial.mp3", "صوت", "101 KB"),
    ],
  },
];

export const profile = {
  name: "وئام لورانس محمد السمرات",
  shortName: "وئام السمرات",
  role: "مصممة ذكاء اصطناعي توليدي",
  location: "إربد، الأردن",
  email: "alsmeratw9@gmail.com",
  phone: "0785217520",
  bio: "أجمع بين الحس البصري والتنظيم الإداري لأحوّل الأفكار إلى صور، هويات، وحكايات واضحة. أعمل بأدوات الذكاء الاصطناعي التوليدي لصناعة اتجاهات بصرية عملية، مع خلفية في إدارة الأعمال وإدخال البيانات وتدريب عملي لدى شركة كهرباء إربد.",
};

export const skills = [
  "تصميم بصري بالذكاء الاصطناعي",
  "بناء الهوية والاتجاه الفني",
  "Microsoft Office",
  "إدخال البيانات وتنظيم الملفات",
];
