// GCC city-level SEO landing data — Dubai, Abu Dhabi, Riyadh, Jeddah, Doha.
// Bilingual (EN/AR), schema-ready, written for high-intent city queries.

export type GccCityLang = "en" | "ar";

export interface GccCityFAQ {
  q: string;
  a: string;
}

export interface GccCityContent {
  title: string;
  description: string;
  keywords: string;
  eyebrow: string;
  h1: string;
  subhead: string;
  intro: string[];
  servicesTitle: string;
  services: { title: string; body: string }[];
  whyTitle: string;
  why: string[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  faqTitle: string;
  faqs: GccCityFAQ[];
}

export interface GccCity {
  slug: "dubai" | "abu-dhabi" | "riyadh" | "jeddah" | "doha";
  countrySlug: "uae" | "saudi-arabia" | "qatar";
  isoCountry: "AE" | "SA" | "QA";
  en: GccCityContent;
  ar: GccCityContent;
}

export const gccCities: GccCity[] = [
  {
    slug: "dubai",
    countrySlug: "uae",
    isoCountry: "AE",
    en: {
      title: "Luxury Event Planner in Dubai | Maranasi",
      description:
        "Maranasi plans luxury weddings, gala dinners, conferences and brand activations in Dubai — produced end-to-end by an in-house team from Amman, Jordan across the UAE.",
      keywords:
        "luxury event planner Dubai, wedding planner Dubai, gala dinner Dubai, corporate event company Dubai, brand activation Dubai, event management Dubai, MICE Dubai, destination wedding planner Dubai",
      eyebrow: "Dubai · United Arab Emirates",
      h1: "Luxury Event Planning in Dubai",
      subhead:
        "Weddings, gala dinners, conferences and brand activations across Dubai — produced by Maranasi, an in-house team working between Amman and the UAE.",
      intro: [
        "Maranasi plans events in Dubai for clients who care about restraint as much as scale — couples hosting a multi-day wedding at a Palm Jumeirah villa, corporates running a regional summit at a DIFC venue, brands launching across the Emirates. The aesthetic is quiet luxury; the production is exact.",
        "We deliver inside Dubai with our own team and a vetted local supplier network — venues, catering, design, florals, entertainment, AV and run-of-show. For Dubai-based couples and corporates, we also produce destination programmes in Jordan at Petra, Wadi Rum and the Dead Sea.",
      ],
      servicesTitle: "What we plan in Dubai",
      services: [
        {
          title: "Luxury weddings in Dubai",
          body: "Multi-day weddings, henna nights, welcome dinners, receptions and after-parties. Venue sourcing across Palm Jumeirah, Downtown, DIFC, beachfront resorts and private estates.",
        },
        {
          title: "Gala dinners & awards nights",
          body: "Concept, set design, talent, catering, run-of-show. We produce gala dinners for corporates, foundations and family offices.",
        },
        {
          title: "Conferences, summits & MICE",
          body: "Multi-day conferences, executive summits, incentive programmes and brand events for UAE corporates and regional HQs.",
        },
        {
          title: "Brand activations & launches",
          body: "Product launches, pop-ups and immersive activations for regional and international brands entering or scaling in the UAE.",
        },
      ],
      whyTitle: "Why Dubai clients choose Maranasi",
      why: [
        "In-house team — concept, design and production under one roof",
        "Network of vetted Dubai venues and suppliers",
        "Discreet by default — private logistics for high-profile guests",
        "Cross-border delivery: events in Dubai or destinations in Jordan",
      ],
      ctaTitle: "Plan an event in Dubai",
      ctaBody:
        "Tell us about the brief. We respond personally to every enquiry within one working day.",
      ctaButton: "Start a Conversation",
      faqTitle: "Questions from Dubai clients",
      faqs: [
        {
          q: "Do you plan weddings in Dubai?",
          a: "Yes — multi-day weddings, henna nights, welcome dinners and receptions across Palm Jumeirah, Downtown Dubai, DIFC, beachfront resorts and private estates.",
        },
        {
          q: "Can you produce a Dubai corporate event end-to-end?",
          a: "Yes. Conferences, summits, gala dinners, brand activations and MICE programmes — from concept and design through full production on the night.",
        },
        {
          q: "Does the team travel to Dubai for events?",
          a: "Yes. We bring in the production team for delivery. Pre-production, supplier coordination and design are managed between Amman and Dubai.",
        },
        {
          q: "How early should we book a Dubai wedding?",
          a: "For peak-season Dubai venues, 9–12 months gives us room for considered design and supplier choice. Shorter timelines are possible — start the conversation early.",
        },
      ],
    },
    ar: {
      title: "تخطيط فعاليات فاخرة في دبي | مرناسي",
      description:
        "مرناسي لتخطيط الأعراس الفاخرة، حفلات العشاء، المؤتمرات والفعاليات الترويجية في دبي — من إنتاج فريق داخلي بين عمّان والإمارات.",
      keywords:
        "منظم فعاليات فاخرة دبي, منظم أعراس دبي, حفلات عشاء دبي, شركة تنظيم فعاليات دبي, فعاليات ترويجية دبي, تنظيم مؤتمرات دبي",
      eyebrow: "دبي · الإمارات",
      h1: "تخطيط فعاليات فاخرة في دبي",
      subhead:
        "أعراس، حفلات عشاء، مؤتمرات وفعاليات ترويجية في دبي — من إنتاج مرناسي، فريق داخلي يعمل بين عمّان والإمارات.",
      intro: [
        "تنظّم مرناسي فعاليات في دبي لعملاء يهتمون بالهدوء بقدر اهتمامهم بالضخامة — أعراس ممتدة في فلل النخلة، قمم إقليمية في قاعات DIFC، إطلاقات علامات تجارية عبر الإمارات. الذائقة فخامة هادئة، والإنتاج دقيق.",
        "ننفّذ داخل دبي عبر فريقنا وشبكة مورّدين محليين موثوقين. كما نستضيف عملاء دبي في الأردن للأعراس وملتقيات الشركات في البتراء ووادي رم والبحر الميت.",
      ],
      servicesTitle: "ما ننظمه في دبي",
      services: [
        {
          title: "أعراس فاخرة في دبي",
          body: "أعراس ممتدة، حفلات حنّاء، عشاء ترحيبي واستقبال. قاعات وفلل في النخلة ووسط دبي و DIFC وعلى الشاطئ.",
        },
        {
          title: "حفلات العشاء والغالا",
          body: "فكرة، تصميم، فنانون، ضيافة وإدارة كاملة. ننتج حفلات غالا للشركات والمؤسسات والعائلات.",
        },
        {
          title: "مؤتمرات وقمم وبرامج MICE",
          body: "مؤتمرات ممتدة، قمم تنفيذية، برامج تحفيزية وفعاليات علامات تجارية لشركات الإمارات والمقرات الإقليمية.",
        },
        {
          title: "فعاليات ترويجية وإطلاقات",
          body: "إطلاقات منتجات، نقاط تجريبية وتجارب غامرة للعلامات الإقليمية والدولية.",
        },
      ],
      whyTitle: "لماذا يختارنا عملاء دبي",
      why: [
        "فريق داخلي — فكرة وتصميم وإنتاج تحت سقف واحد",
        "شبكة قاعات ومورّدين موثوقين في دبي",
        "سرية بشكل افتراضي للضيوف الرفيعين",
        "تنفيذ في دبي أو وجهات في الأردن",
      ],
      ctaTitle: "نظّم فعاليتك في دبي",
      ctaBody: "شارك التفاصيل معنا. نردّ شخصيًا على كل طلب خلال يوم عمل واحد.",
      ctaButton: "ابدأ المحادثة",
      faqTitle: "أسئلة من عملاء دبي",
      faqs: [
        {
          q: "هل تنظّمون أعراسًا في دبي؟",
          a: "نعم — أعراس ممتدة وحفلات حنّاء واستقبال في النخلة ووسط دبي و DIFC والشاطئ والفلل الخاصة.",
        },
        {
          q: "هل تنتجون فعاليات شركات في دبي بالكامل؟",
          a: "نعم. مؤتمرات وقمم وحفلات غالا وفعاليات ترويجية وبرامج MICE — من الفكرة حتى الإنتاج النهائي.",
        },
        {
          q: "هل ينتقل الفريق إلى دبي؟",
          a: "نعم. نأتي بفريق الإنتاج للتنفيذ. التحضير والتنسيق والتصميم يتم بين عمّان ودبي.",
        },
        {
          q: "متى يجب حجز عرس في دبي؟",
          a: "من 9 إلى 12 شهرًا لقاعات الذروة. الفترات الأقصر ممكنة — كلما تواصلت أبكر بقيت خيارات أكثر.",
        },
      ],
    },
  },
  {
    slug: "abu-dhabi",
    countrySlug: "uae",
    isoCountry: "AE",
    en: {
      title: "Luxury Event Planner in Abu Dhabi | Maranasi",
      description:
        "Maranasi plans luxury weddings, gala dinners and corporate events in Abu Dhabi — produced by an in-house team between Amman, Jordan and the UAE.",
      keywords:
        "luxury event planner Abu Dhabi, wedding planner Abu Dhabi, gala dinner Abu Dhabi, corporate event company Abu Dhabi, MICE Abu Dhabi, brand activation Abu Dhabi",
      eyebrow: "Abu Dhabi · United Arab Emirates",
      h1: "Luxury Event Planning in Abu Dhabi",
      subhead:
        "Weddings, gala dinners, conferences and brand activations in Abu Dhabi — produced by Maranasi, working between Amman and the Emirates.",
      intro: [
        "Maranasi plans events in Abu Dhabi for couples, corporates and government clients who prefer a quieter standard of luxury. Multi-day weddings on Saadiyat, gala dinners at Emirates Palace, summits in the cultural district — concept, design and production are kept inside one in-house team.",
        "Discretion is the default. Vendor NDAs, controlled guest lists and private logistics for high-profile attendees are standard on request. For Abu Dhabi clients, we also produce destination programmes in Jordan at Petra, Wadi Rum and the Dead Sea.",
      ],
      servicesTitle: "What we plan in Abu Dhabi",
      services: [
        {
          title: "Luxury weddings in Abu Dhabi",
          body: "Multi-day weddings, henna nights and receptions across Saadiyat, Yas Island and Corniche venues. Design, florals, entertainment and full production in-house.",
        },
        {
          title: "Gala dinners & state-occasion events",
          body: "Awards nights, philanthropic galas, milestone celebrations and protocol-sensitive evenings.",
        },
        {
          title: "Corporate events, conferences & MICE",
          body: "Summits, conferences, executive retreats and incentive programmes for UAE corporates and government entities.",
        },
        {
          title: "Brand activations & cultural events",
          body: "Launches, immersive activations and cultural-sector events with discreet production standards.",
        },
      ],
      whyTitle: "Why Abu Dhabi clients choose Maranasi",
      why: [
        "In-house production team, no outsourced delivery",
        "Standard of discretion suited to high-profile guest lists",
        "Network of Abu Dhabi venues, suppliers and protocol partners",
        "Cross-border delivery to Jordan when destinations are needed",
      ],
      ctaTitle: "Plan an event in Abu Dhabi",
      ctaBody:
        "Tell us the brief. We respond personally to every enquiry within one working day.",
      ctaButton: "Start a Conversation",
      faqTitle: "Questions from Abu Dhabi clients",
      faqs: [
        {
          q: "Do you plan weddings in Abu Dhabi?",
          a: "Yes — multi-day weddings, henna nights and receptions across Saadiyat, Yas Island, Corniche venues and private estates.",
        },
        {
          q: "Can you handle protocol-sensitive events?",
          a: "Yes. Vendor NDAs, controlled guest lists, no-photography policies and private logistics are standard on request.",
        },
        {
          q: "Do you produce corporate events for Abu Dhabi entities?",
          a: "Yes — conferences, summits, gala dinners, MICE programmes and brand activations for corporates and government entities.",
        },
        {
          q: "How early should we book an Abu Dhabi wedding?",
          a: "9–12 months is a comfortable lead time for a multi-day wedding. Shorter is possible — start the conversation as early as you can.",
        },
      ],
    },
    ar: {
      title: "تخطيط فعاليات فاخرة في أبوظبي | مرناسي",
      description:
        "مرناسي لتخطيط الأعراس الفاخرة، حفلات العشاء وفعاليات الشركات في أبوظبي — من إنتاج فريق داخلي بين عمّان والإمارات.",
      keywords:
        "منظم فعاليات فاخرة أبوظبي, منظم أعراس أبوظبي, حفلات عشاء أبوظبي, شركة تنظيم فعاليات أبوظبي, فعاليات ترويجية أبوظبي",
      eyebrow: "أبوظبي · الإمارات",
      h1: "تخطيط فعاليات فاخرة في أبوظبي",
      subhead:
        "أعراس، حفلات عشاء، مؤتمرات وفعاليات ترويجية في أبوظبي — من إنتاج مرناسي بين عمّان والإمارات.",
      intro: [
        "تنظّم مرناسي فعاليات في أبوظبي للعرسان والشركات والجهات الرسمية الذين يفضّلون فخامة هادئة. أعراس ممتدة في السعديات، حفلات غالا في قصر الإمارات، قمم في الحي الثقافي — كل ذلك من فريق داخلي واحد.",
        "السرية هي الإعداد الافتراضي. اتفاقيات سرية مع المورّدين، قوائم ضيوف مغلقة، ولوجستيات خاصة للضيوف الرفيعين. كما نستضيف عملاء أبوظبي في الأردن للأعراس وملتقيات الشركات في البتراء ووادي رم والبحر الميت.",
      ],
      servicesTitle: "ما ننظمه في أبوظبي",
      services: [
        {
          title: "أعراس فاخرة في أبوظبي",
          body: "أعراس ممتدة وحفلات حنّاء واستقبال في السعديات وياس والكورنيش والفلل الخاصة.",
        },
        {
          title: "حفلات الغالا والمناسبات الرسمية",
          body: "حفلات تكريم وغالا خيرية واحتفالات بمحطات كبرى وأمسيات حساسة بروتوكوليًا.",
        },
        {
          title: "مؤتمرات وقمم وبرامج MICE",
          body: "قمم ومؤتمرات وملتقيات تنفيذية وبرامج تحفيزية للشركات والجهات الحكومية.",
        },
        {
          title: "فعاليات ترويجية وثقافية",
          body: "إطلاقات وتجارب غامرة وفعاليات قطاع ثقافي بمعايير إنتاج هادئة.",
        },
      ],
      whyTitle: "لماذا يختارنا عملاء أبوظبي",
      why: [
        "فريق إنتاج داخلي بدون تنفيذ خارجي",
        "أسلوب سرية يناسب القوائم الرفيعة",
        "شبكة قاعات ومورّدين وشركاء بروتوكول في أبوظبي",
        "تنفيذ في الأردن عند الحاجة",
      ],
      ctaTitle: "نظّم فعاليتك في أبوظبي",
      ctaBody: "شارك التفاصيل معنا. نردّ شخصيًا على كل طلب خلال يوم عمل واحد.",
      ctaButton: "ابدأ المحادثة",
      faqTitle: "أسئلة من عملاء أبوظبي",
      faqs: [
        {
          q: "هل تنظّمون أعراسًا في أبوظبي؟",
          a: "نعم — أعراس ممتدة وحفلات حنّاء واستقبال في السعديات وياس والكورنيش والفلل الخاصة.",
        },
        {
          q: "هل تتعاملون مع الفعاليات الحساسة بروتوكوليًا؟",
          a: "نعم. اتفاقيات سرية ومجموعات ضيوف مغلقة ولوجستيات خاصة عند الطلب.",
        },
        {
          q: "هل تنتجون فعاليات لجهات أبوظبي؟",
          a: "نعم — مؤتمرات وقمم وغالا وبرامج MICE وفعاليات ترويجية للشركات والجهات الحكومية.",
        },
        {
          q: "متى يجب حجز عرس أبوظبي؟",
          a: "من 9 إلى 12 شهرًا فترة مناسبة. الفترات الأقصر ممكنة — تواصل في أقرب وقت.",
        },
      ],
    },
  },
  {
    slug: "riyadh",
    countrySlug: "saudi-arabia",
    isoCountry: "SA",
    en: {
      title: "Luxury Event Planner in Riyadh | Maranasi",
      description:
        "Maranasi plans luxury weddings, gala dinners, conferences and brand activations in Riyadh — produced end-to-end by an in-house team from Amman, Jordan.",
      keywords:
        "luxury event planner Riyadh, wedding planner Riyadh, gala dinner Riyadh, corporate event company Riyadh, MICE Riyadh, brand activation Riyadh, event management Riyadh",
      eyebrow: "Riyadh · Saudi Arabia",
      h1: "Luxury Event Planning in Riyadh",
      subhead:
        "Multi-day weddings, gala dinners, conferences and brand activations in Riyadh — produced by Maranasi, working across the Kingdom and from Amman, Jordan.",
      intro: [
        "Riyadh is the heart of how the Kingdom hosts. Maranasi plans events here for Saudi families, corporates, ministries and international brands operating in the capital — multi-day weddings at private estates, gala dinners at Diriyah, conferences in KAFD, brand activations across the city.",
        "Our team works inside Riyadh with vetted local suppliers and our own production leads. Confidentiality is the default — vendor NDAs, closed guest lists and private logistics for high-profile attendees are standard on request.",
      ],
      servicesTitle: "What we plan in Riyadh",
      services: [
        {
          title: "Luxury weddings in Riyadh",
          body: "Multi-day weddings, mileh, henna nights and receptions at private estates, hotel ballrooms and Diriyah venues. Design, florals and entertainment in-house.",
        },
        {
          title: "Gala dinners & awards nights",
          body: "Concept, set design, talent and run-of-show. Awards nights, philanthropic galas and milestone celebrations across Riyadh.",
        },
        {
          title: "Conferences, summits & MICE",
          body: "Multi-day conferences, executive summits and incentive programmes for Saudi corporates, ministries and international HQs.",
        },
        {
          title: "Brand activations & launches",
          body: "360 campaign activations and launch events for brands entering or scaling in the Saudi market.",
        },
      ],
      whyTitle: "Why Riyadh clients choose Maranasi",
      why: [
        "In-house team — concept, design and production under one roof",
        "Trusted for high-profile, low-publicity events",
        "Vetted network across Riyadh venues and suppliers",
        "Cross-border delivery to Jordan when destinations are needed",
      ],
      ctaTitle: "Plan an event in Riyadh",
      ctaBody:
        "Share the brief. We respond personally to every enquiry within one working day.",
      ctaButton: "Start a Conversation",
      faqTitle: "Questions from Riyadh clients",
      faqs: [
        {
          q: "Do you plan weddings in Riyadh?",
          a: "Yes — multi-day weddings, mileh, henna nights and receptions across private estates, hotel ballrooms and Diriyah venues.",
        },
        {
          q: "Can you handle confidentiality for Riyadh events?",
          a: "Yes. Vendor NDAs, controlled guest lists, no-photography policies and private logistics are standard on request.",
        },
        {
          q: "Do you produce corporate events for Saudi entities?",
          a: "Yes — conferences, summits, gala dinners and MICE programmes for Saudi corporates, ministries and international brands.",
        },
        {
          q: "How early should we book a Riyadh wedding?",
          a: "For a multi-day Riyadh wedding, 9–12 months is a healthy lead time. Shorter is possible — start the conversation as early as you can.",
        },
      ],
    },
    ar: {
      title: "تخطيط فعاليات فاخرة في الرياض | مرناسي",
      description:
        "مرناسي لتخطيط الأعراس الفاخرة، حفلات العشاء، المؤتمرات والفعاليات الترويجية في الرياض — من إنتاج فريق داخلي من عمّان، الأردن.",
      keywords:
        "منظم فعاليات فاخرة الرياض, منظم أعراس الرياض, حفلات عشاء الرياض, شركة تنظيم فعاليات الرياض, فعاليات ترويجية الرياض, تنظيم مؤتمرات الرياض",
      eyebrow: "الرياض · السعودية",
      h1: "تخطيط فعاليات فاخرة في الرياض",
      subhead:
        "أعراس ممتدة، حفلات عشاء، مؤتمرات وفعاليات ترويجية في الرياض — من إنتاج مرناسي عبر المملكة ومن عمّان، الأردن.",
      intro: [
        "الرياض قلب الاستضافة في المملكة. تنظّم مرناسي هنا للعائلات والشركات والوزارات والعلامات الدولية — أعراس ممتدة في الفلل الخاصة، حفلات غالا في الدرعية، مؤتمرات في KAFD، وفعاليات ترويجية عبر المدينة.",
        "نعمل داخل الرياض مع مورّدين محليين موثوقين وفريق إنتاج خاص. السرية هي الإعداد الافتراضي عند الطلب.",
      ],
      servicesTitle: "ما ننظمه في الرياض",
      services: [
        {
          title: "أعراس فاخرة في الرياض",
          body: "أعراس ممتدة، مِلكة، حفلات حنّاء واستقبال في الفلل والقاعات الفندقية وقاعات الدرعية.",
        },
        {
          title: "حفلات العشاء والغالا",
          body: "حفلات تكريم وغالا خيرية واحتفالات كبرى في الرياض.",
        },
        {
          title: "مؤتمرات وقمم وبرامج MICE",
          body: "مؤتمرات ممتدة وقمم تنفيذية وبرامج تحفيزية للشركات والوزارات والمقرات الدولية.",
        },
        {
          title: "فعاليات ترويجية وإطلاقات",
          body: "حملات 360 وإطلاقات للعلامات الداخلة إلى السوق السعودي.",
        },
      ],
      whyTitle: "لماذا يختارنا عملاء الرياض",
      why: [
        "فريق داخلي — فكرة وتصميم وإنتاج",
        "موثوقون في الفعاليات الرفيعة منخفضة الإعلام",
        "شبكة قاعات ومورّدين في الرياض",
        "تنفيذ في الأردن عند الحاجة",
      ],
      ctaTitle: "نظّم فعاليتك في الرياض",
      ctaBody: "شارك التفاصيل معنا. نردّ شخصيًا على كل طلب خلال يوم عمل واحد.",
      ctaButton: "ابدأ المحادثة",
      faqTitle: "أسئلة من عملاء الرياض",
      faqs: [
        {
          q: "هل تنظّمون أعراسًا في الرياض؟",
          a: "نعم — أعراس ممتدة ومِلكة وحفلات حنّاء واستقبال في الفلل والقاعات الفندقية والدرعية.",
        },
        {
          q: "هل تضمنون السرية لفعاليات الرياض؟",
          a: "نعم. اتفاقيات سرية مع المورّدين وقوائم ضيوف مغلقة ولوجستيات خاصة عند الطلب.",
        },
        {
          q: "هل تنتجون فعاليات لجهات سعودية؟",
          a: "نعم — مؤتمرات وقمم وحفلات غالا وبرامج MICE للشركات والوزارات والعلامات الدولية.",
        },
        {
          q: "متى يجب حجز عرس الرياض؟",
          a: "من 9 إلى 12 شهرًا للعرس الممتد. الفترات الأقصر ممكنة — تواصل في أقرب وقت.",
        },
      ],
    },
  },
  {
    slug: "jeddah",
    countrySlug: "saudi-arabia",
    isoCountry: "SA",
    en: {
      title: "Luxury Event Planner in Jeddah | Maranasi",
      description:
        "Maranasi plans luxury weddings, gala dinners and corporate events in Jeddah — produced end-to-end by an in-house team from Amman, Jordan.",
      keywords:
        "luxury event planner Jeddah, wedding planner Jeddah, gala dinner Jeddah, corporate event company Jeddah, MICE Jeddah, brand activation Jeddah",
      eyebrow: "Jeddah · Saudi Arabia",
      h1: "Luxury Event Planning in Jeddah",
      subhead:
        "Weddings, gala dinners, conferences and brand activations in Jeddah — produced by Maranasi, working between the Kingdom and Amman, Jordan.",
      intro: [
        "Jeddah weddings carry a particular kind of generosity — large guest lists, long evenings, considered design. Maranasi plans multi-day weddings, gala dinners and corporate events here for families, corporates and brands working on the Red Sea coast.",
        "We bring our in-house production team into Jeddah with vetted local suppliers and venue partners. Confidentiality, protocol and bilingual run-of-show are standard.",
      ],
      servicesTitle: "What we plan in Jeddah",
      services: [
        {
          title: "Luxury weddings in Jeddah",
          body: "Multi-day weddings, henna nights, mileh and receptions at Jeddah hotels, palaces and private estates.",
        },
        {
          title: "Gala dinners & corporate celebrations",
          body: "Awards nights, fundraising galas and milestone celebrations along the Red Sea coast.",
        },
        {
          title: "Conferences & MICE",
          body: "Conferences, summits and incentive programmes for corporates and international brands operating in Jeddah.",
        },
        {
          title: "Brand activations",
          body: "Launches and immersive brand experiences across Jeddah.",
        },
      ],
      whyTitle: "Why Jeddah clients choose Maranasi",
      why: [
        "In-house team, no outsourced delivery",
        "Trusted for high-profile family and corporate events",
        "Network of Jeddah venues, hotels and suppliers",
        "Cross-border delivery to Jordan when destinations are needed",
      ],
      ctaTitle: "Plan an event in Jeddah",
      ctaBody:
        "Share the brief. We respond personally to every enquiry within one working day.",
      ctaButton: "Start a Conversation",
      faqTitle: "Questions from Jeddah clients",
      faqs: [
        {
          q: "Do you plan weddings in Jeddah?",
          a: "Yes — multi-day weddings, mileh, henna nights and receptions at hotels, palaces and private estates.",
        },
        {
          q: "Can you handle large guest lists?",
          a: "Yes. We routinely produce weddings and galas for large guest counts with full production, hospitality and run-of-show.",
        },
        {
          q: "Do you produce corporate events for Jeddah companies?",
          a: "Yes — conferences, summits, gala dinners and brand activations for corporates and international HQs.",
        },
        {
          q: "How early should we book a Jeddah wedding?",
          a: "9–12 months is a healthy lead time for a multi-day wedding. Shorter timelines are possible — start early.",
        },
      ],
    },
    ar: {
      title: "تخطيط فعاليات فاخرة في جدة | مرناسي",
      description:
        "مرناسي لتخطيط الأعراس الفاخرة، حفلات العشاء وفعاليات الشركات في جدة — من إنتاج فريق داخلي من عمّان، الأردن.",
      keywords:
        "منظم فعاليات فاخرة جدة, منظم أعراس جدة, حفلات عشاء جدة, شركة تنظيم فعاليات جدة, فعاليات ترويجية جدة",
      eyebrow: "جدة · السعودية",
      h1: "تخطيط فعاليات فاخرة في جدة",
      subhead:
        "أعراس، حفلات عشاء، مؤتمرات وفعاليات ترويجية في جدة — من إنتاج مرناسي بين المملكة وعمّان، الأردن.",
      intro: [
        "أعراس جدة لها كرم خاص — قوائم ضيوف كبيرة، أمسيات ممتدة، تصميم مدروس. تنظّم مرناسي هنا الأعراس الممتدة وحفلات الغالا وفعاليات الشركات للعائلات والشركات والعلامات على ساحل البحر الأحمر.",
        "نأتي بفريق الإنتاج الداخلي إلى جدة مع مورّدين محليين موثوقين وشركاء قاعات. السرية والبروتوكول وإدارة الليلة ثنائية اللغة معيار قياسي.",
      ],
      servicesTitle: "ما ننظمه في جدة",
      services: [
        {
          title: "أعراس فاخرة في جدة",
          body: "أعراس ممتدة وحفلات حنّاء ومِلكة واستقبال في الفنادق والقصور والفلل الخاصة في جدة.",
        },
        {
          title: "حفلات العشاء والاحتفالات",
          body: "حفلات تكريم وغالا خيرية واحتفالات كبرى على ساحل البحر الأحمر.",
        },
        {
          title: "مؤتمرات وبرامج MICE",
          body: "مؤتمرات وقمم وبرامج تحفيزية للشركات والعلامات الدولية في جدة.",
        },
        {
          title: "فعاليات ترويجية",
          body: "إطلاقات وتجارب غامرة للعلامات التجارية في جدة.",
        },
      ],
      whyTitle: "لماذا يختارنا عملاء جدة",
      why: [
        "فريق داخلي بدون تنفيذ خارجي",
        "موثوقون في فعاليات العائلات والشركات الرفيعة",
        "شبكة قاعات وفنادق ومورّدين في جدة",
        "تنفيذ في الأردن عند الحاجة",
      ],
      ctaTitle: "نظّم فعاليتك في جدة",
      ctaBody: "شارك التفاصيل معنا. نردّ شخصيًا على كل طلب خلال يوم عمل واحد.",
      ctaButton: "ابدأ المحادثة",
      faqTitle: "أسئلة من عملاء جدة",
      faqs: [
        {
          q: "هل تنظّمون أعراسًا في جدة؟",
          a: "نعم — أعراس ممتدة ومِلكة وحفلات حنّاء واستقبال في الفنادق والقصور والفلل.",
        },
        {
          q: "هل تتعاملون مع القوائم الكبيرة؟",
          a: "نعم. ننتج باستمرار أعراسًا وغالا لأعداد كبيرة بإنتاج وضيافة وإدارة كاملة.",
        },
        {
          q: "هل تنتجون فعاليات لشركات جدة؟",
          a: "نعم — مؤتمرات وقمم وغالا وفعاليات ترويجية للشركات والمقرات الدولية.",
        },
        {
          q: "متى يجب حجز عرس جدة؟",
          a: "من 9 إلى 12 شهرًا فترة مناسبة. الفترات الأقصر ممكنة — تواصل مبكرًا.",
        },
      ],
    },
  },
  {
    slug: "doha",
    countrySlug: "qatar",
    isoCountry: "QA",
    en: {
      title: "Luxury Event Planner in Doha | Maranasi",
      description:
        "Maranasi plans luxury weddings, gala dinners and corporate events in Doha — produced end-to-end by an in-house team from Amman, Jordan.",
      keywords:
        "luxury event planner Doha, wedding planner Doha, gala dinner Doha, corporate event company Doha, MICE Doha, brand activation Doha, event management Qatar",
      eyebrow: "Doha · Qatar",
      h1: "Luxury Event Planning in Doha",
      subhead:
        "Weddings, gala dinners, conferences and brand activations in Doha — produced by Maranasi, working between Qatar and Amman, Jordan.",
      intro: [
        "Maranasi plans events in Doha for families, corporates and international brands working in Qatar. The aesthetic is restrained; the production is precise — multi-day weddings, gala dinners at Museum of Islamic Art-area venues, conferences in West Bay, brand activations across the city.",
        "Our in-house team travels into Doha for delivery alongside vetted local suppliers. Discretion, protocol and bilingual run-of-show are standard.",
      ],
      servicesTitle: "What we plan in Doha",
      services: [
        {
          title: "Luxury weddings in Doha",
          body: "Multi-day weddings, henna nights, mileh and receptions at Doha hotels, private estates and waterfront venues.",
        },
        {
          title: "Gala dinners & state-occasion events",
          body: "Awards nights, philanthropic galas and milestone celebrations with protocol-aware production.",
        },
        {
          title: "Conferences, summits & MICE",
          body: "Conferences, summits and incentive programmes for Qatari corporates, ministries and international HQs.",
        },
        {
          title: "Brand activations",
          body: "Launches and immersive activations for regional and international brands operating in Qatar.",
        },
      ],
      whyTitle: "Why Doha clients choose Maranasi",
      why: [
        "In-house production, no outsourced delivery",
        "Standard of discretion suited to high-profile guests",
        "Network of Doha venues, hotels and suppliers",
        "Cross-border delivery to Jordan when destinations are needed",
      ],
      ctaTitle: "Plan an event in Doha",
      ctaBody:
        "Share the brief. We respond personally to every enquiry within one working day.",
      ctaButton: "Start a Conversation",
      faqTitle: "Questions from Doha clients",
      faqs: [
        {
          q: "Do you plan weddings in Doha?",
          a: "Yes — multi-day weddings, mileh, henna nights and receptions at hotels, private estates and waterfront venues.",
        },
        {
          q: "Can you handle protocol-sensitive events?",
          a: "Yes. Vendor NDAs, controlled guest lists and private logistics are standard on request.",
        },
        {
          q: "Do you produce corporate events for Qatari entities?",
          a: "Yes — conferences, summits, gala dinners and brand activations for corporates, ministries and international HQs.",
        },
        {
          q: "How early should we book a Doha wedding?",
          a: "9–12 months is a comfortable lead time. Shorter is possible — start the conversation early.",
        },
      ],
    },
    ar: {
      title: "تخطيط فعاليات فاخرة في الدوحة | مرناسي",
      description:
        "مرناسي لتخطيط الأعراس الفاخرة، حفلات العشاء وفعاليات الشركات في الدوحة — من إنتاج فريق داخلي من عمّان، الأردن.",
      keywords:
        "منظم فعاليات فاخرة الدوحة, منظم أعراس الدوحة, حفلات عشاء الدوحة, شركة تنظيم فعاليات الدوحة, فعاليات ترويجية الدوحة",
      eyebrow: "الدوحة · قطر",
      h1: "تخطيط فعاليات فاخرة في الدوحة",
      subhead:
        "أعراس، حفلات عشاء، مؤتمرات وفعاليات ترويجية في الدوحة — من إنتاج مرناسي بين قطر وعمّان، الأردن.",
      intro: [
        "تنظّم مرناسي فعاليات في الدوحة للعائلات والشركات والعلامات الدولية العاملة في قطر. الذائقة هادئة والإنتاج دقيق — أعراس ممتدة، حفلات غالا قرب متحف الفن الإسلامي، مؤتمرات في West Bay، وفعاليات ترويجية في المدينة.",
        "ينتقل فريقنا الداخلي إلى الدوحة للتنفيذ مع مورّدين محليين موثوقين. السرية والبروتوكول والإدارة ثنائية اللغة معيار قياسي.",
      ],
      servicesTitle: "ما ننظمه في الدوحة",
      services: [
        {
          title: "أعراس فاخرة في الدوحة",
          body: "أعراس ممتدة وحفلات حنّاء ومِلكة واستقبال في الفنادق والفلل والقاعات على الواجهة المائية.",
        },
        {
          title: "حفلات الغالا والمناسبات الرسمية",
          body: "حفلات تكريم وغالا خيرية ومحطات كبرى بإنتاج يراعي البروتوكول.",
        },
        {
          title: "مؤتمرات وقمم وبرامج MICE",
          body: "مؤتمرات وقمم وبرامج تحفيزية لشركات قطر والوزارات والمقرات الدولية.",
        },
        {
          title: "فعاليات ترويجية",
          body: "إطلاقات وتجارب غامرة للعلامات الإقليمية والدولية.",
        },
      ],
      whyTitle: "لماذا يختارنا عملاء الدوحة",
      why: [
        "إنتاج داخلي بدون تنفيذ خارجي",
        "أسلوب سرية يناسب الضيوف الرفيعين",
        "شبكة قاعات وفنادق ومورّدين في الدوحة",
        "تنفيذ في الأردن عند الحاجة",
      ],
      ctaTitle: "نظّم فعاليتك في الدوحة",
      ctaBody: "شارك التفاصيل معنا. نردّ شخصيًا على كل طلب خلال يوم عمل واحد.",
      ctaButton: "ابدأ المحادثة",
      faqTitle: "أسئلة من عملاء الدوحة",
      faqs: [
        {
          q: "هل تنظّمون أعراسًا في الدوحة؟",
          a: "نعم — أعراس ممتدة ومِلكة وحفلات حنّاء واستقبال في الفنادق والفلل والواجهة المائية.",
        },
        {
          q: "هل تتعاملون مع الفعاليات الحساسة بروتوكوليًا؟",
          a: "نعم. اتفاقيات سرية وقوائم مغلقة ولوجستيات خاصة عند الطلب.",
        },
        {
          q: "هل تنتجون فعاليات لجهات قطرية؟",
          a: "نعم — مؤتمرات وقمم وغالا وفعاليات ترويجية للشركات والوزارات والمقرات الدولية.",
        },
        {
          q: "متى يجب حجز عرس الدوحة؟",
          a: "من 9 إلى 12 شهرًا فترة مناسبة. الفترات الأقصر ممكنة — تواصل في أقرب وقت.",
        },
      ],
    },
  },
];

export function getGccCity(slug: string): GccCity | undefined {
  return gccCities.find((c) => c.slug === slug);
}
