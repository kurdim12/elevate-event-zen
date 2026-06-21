export type GccLang = "en" | "ar";

export interface GccFAQ {
  q: string;
  a: string;
}

export interface GccCountryContent {
  // SEO
  title: string;
  description: string;
  keywords: string;
  // Page
  eyebrow: string;
  h1: string;
  subhead: string;
  intro: string[]; // paragraphs
  servicesTitle: string;
  services: { title: string; body: string }[];
  whyTitle: string;
  why: string[]; // bullets
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  faqTitle: string;
  faqs: GccFAQ[];
}

export interface GccCountry {
  slug: "saudi-arabia" | "uae" | "qatar";
  isoCountry: string; // "SA" | "AE" | "QA"
  en: GccCountryContent;
  ar: GccCountryContent;
}

export const gccCountries: GccCountry[] = [
  {
    slug: "saudi-arabia",
    isoCountry: "SA",
    en: {
      title: "Luxury Event Planner for Saudi Arabia | Maranasi",
      description:
        "Maranasi plans luxury weddings, corporate events, galas and brand activations for Saudi Arabia — Riyadh, Jeddah, AlUla — produced from Amman, Jordan across MENA.",
      keywords:
        "luxury event planner Saudi Arabia, wedding planner Riyadh, wedding planner Jeddah, corporate event company KSA, gala dinner Riyadh, brand activation Saudi Arabia, destination wedding Jordan for Saudi clients, AlUla wedding planner",
      eyebrow: "Saudi Arabia · KSA",
      h1: "Luxury Event Planning for Saudi Arabia",
      subhead:
        "Weddings, corporate events, gala dinners and brand activations for Riyadh, Jeddah and AlUla — produced by Maranasi, an Amman-based agency working across the Kingdom and wider MENA.",
      intro: [
        "Maranasi works with Saudi families, corporates and agencies on events that demand a quieter kind of luxury — considered design, exact production, complete discretion. Whether the brief is a multi-day Riyadh wedding, a Jeddah gala dinner, an AlUla destination celebration or a regional brand activation, our team handles concept, design, logistics and on-the-night production end-to-end.",
        "We bring the team in for events inside the Kingdom, and we host Saudi clients in Jordan for destination weddings at Petra, Wadi Rum and the Dead Sea. Either direction, the same in-house team takes the project from first conversation to final guest leaving the room.",
      ],
      servicesTitle: "What we plan in Saudi Arabia",
      services: [
        {
          title: "Luxury weddings — Riyadh, Jeddah, AlUla",
          body: "Multi-day wedding programmes, henna nights, mileh, receptions and after-parties. We coordinate venues, hospitality, design, florals, entertainment and full production.",
        },
        {
          title: "Corporate events & MICE",
          body: "Conferences, summits, executive retreats and incentive programmes for Saudi corporates and government bodies, in-Kingdom or in Jordan.",
        },
        {
          title: "Gala dinners",
          body: "Awards nights, philanthropic galas and milestone celebrations — concept, set design, talent and run-of-show.",
        },
        {
          title: "Brand activations",
          body: "360 campaign activations, launch events and immersive experiences for regional and international brands entering the Saudi market.",
        },
      ],
      whyTitle: "Why Saudi clients choose Maranasi",
      why: [
        "In-house team, no outsourced production",
        "Trusted for high-profile, low-publicity events",
        "Network across Riyadh, Jeddah, AlUla and Amman",
        "Producers of TEDxAmman and work for global brands across MENA",
      ],
      ctaTitle: "Plan an event in Saudi Arabia",
      ctaBody:
        "Tell us what you have in mind. We respond personally to every brief within one working day.",
      ctaButton: "Start a Conversation",
      faqTitle: "Questions from Saudi clients",
      faqs: [
        {
          q: "Do you plan weddings inside Saudi Arabia?",
          a: "Yes — we plan and produce weddings in Riyadh, Jeddah, AlUla and other cities across the Kingdom. We can also host Saudi couples in Jordan for destination weddings at Petra, Wadi Rum or the Dead Sea.",
        },
        {
          q: "Can you handle confidentiality for high-profile events?",
          a: "Yes. Discretion is part of how we work. Vendor NDAs, controlled guest lists, no-photography policies and private logistics are standard on request.",
        },
        {
          q: "Do you produce corporate events for Saudi companies?",
          a: "Yes — conferences, summits, gala dinners, MICE programmes and brand activations for Saudi corporates, ministries and international brands operating in the Kingdom.",
        },
        {
          q: "How early should we contact you for a Saudi wedding?",
          a: "For a multi-day wedding in Riyadh, Jeddah or AlUla, 9–12 months gives us room for considered design and venue access. Shorter timelines are possible — start the conversation as soon as you can.",
        },
      ],
    },
    ar: {
      title: "تخطيط فعاليات فاخرة في السعودية | مرناسي",
      description:
        "مرناسي لتخطيط الأعراس الفاخرة، فعاليات الشركات، حفلات العشاء والفعاليات الترويجية في المملكة العربية السعودية — الرياض، جدة، العلا — من عمّان، الأردن وعبر منطقة الشرق الأوسط.",
      keywords:
        "منظم فعاليات فاخرة السعودية, منظم أعراس الرياض, منظم أعراس جدة, شركة تنظيم فعاليات الشركات السعودية, حفلات عشاء الرياض, فعاليات ترويجية السعودية, أعراس فاخرة في الأردن للعملاء السعوديين, تخطيط أعراس العلا",
      eyebrow: "المملكة العربية السعودية",
      h1: "تخطيط فعاليات فاخرة في المملكة العربية السعودية",
      subhead:
        "أعراس، فعاليات شركات، حفلات عشاء وفعاليات ترويجية في الرياض وجدة والعلا — من إنتاج مرناسي، وكالة من عمّان تعمل في المملكة ومنطقة الشرق الأوسط.",
      intro: [
        "تعمل مرناسي مع العائلات والشركات والوكالات السعودية على فعاليات تتطلب فخامة هادئة — تصميمًا مدروسًا، إنتاجًا دقيقًا، وسرية كاملة. سواء كان المطلوب عرسًا ممتدًا على أيام في الرياض، حفل عشاء في جدة، احتفالًا في العلا أو فعالية ترويجية إقليمية، فريقنا يتولى الفكرة والتصميم واللوجستيات والإنتاج من البداية إلى النهاية.",
        "نأتي بفريقنا لتنفيذ الفعاليات داخل المملكة، ونستضيف العملاء السعوديين في الأردن للأعراس الوجهات في البتراء ووادي رم والبحر الميت. في الحالتين، نفس الفريق الداخلي يتابع المشروع من أول حديث حتى مغادرة آخر ضيف.",
      ],
      servicesTitle: "ما ننظمه في المملكة",
      services: [
        {
          title: "أعراس فاخرة — الرياض، جدة، العلا",
          body: "برامج زفاف ممتدة على أيام، حفلات حنّاء ومِلكة وزفاف وما بعدها. ننسّق القاعات والضيافة والتصميم والزهور والترفيه والإنتاج الكامل.",
        },
        {
          title: "فعاليات الشركات و MICE",
          body: "مؤتمرات وقمم وبرامج تحفيزية للشركات والجهات الحكومية السعودية، داخل المملكة أو في الأردن.",
        },
        {
          title: "حفلات العشاء والغالا",
          body: "حفلات تكريم وغالا خيرية واحتفالات بالمحطات الكبرى — الفكرة، تصميم القاعة، الفنانون، وإدارة الليلة.",
        },
        {
          title: "الفعاليات الترويجية للعلامات التجارية",
          body: "حملات 360 وإطلاقات وتجارب غامرة للعلامات الإقليمية والعالمية الداخلة إلى السوق السعودي.",
        },
      ],
      whyTitle: "لماذا يختارنا العملاء السعوديون",
      why: [
        "فريق داخلي، دون إنتاج خارجي",
        "موثوقون في الفعاليات الرفيعة منخفضة الإعلام",
        "شبكة بين الرياض وجدة والعلا وعمّان",
        "منتجو TEDxAmman وأعمال لعلامات عالمية في المنطقة",
      ],
      ctaTitle: "نظّم فعاليتك في السعودية",
      ctaBody:
        "أخبرنا بفكرتك. نردّ شخصيًا على كل طلب خلال يوم عمل واحد.",
      ctaButton: "ابدأ المحادثة",
      faqTitle: "أسئلة من العملاء السعوديين",
      faqs: [
        {
          q: "هل تنظّمون أعراسًا داخل المملكة؟",
          a: "نعم — ننظّم الأعراس في الرياض وجدة والعلا ومدن أخرى. كما نستضيف العرسان السعوديين في الأردن للاحتفال في البتراء ووادي رم والبحر الميت.",
        },
        {
          q: "هل تضمنون السرية للفعاليات الرفيعة؟",
          a: "نعم. السرية جزء من أسلوبنا. اتفاقيات سرية مع المورّدين، قوائم ضيوف مغلقة، وسياسات تصوير محدودة عند الطلب.",
        },
        {
          q: "هل تنتجون فعاليات شركات سعودية؟",
          a: "نعم — مؤتمرات وقمم وحفلات غالا وبرامج MICE وفعاليات ترويجية للشركات والوزارات والعلامات الدولية العاملة في المملكة.",
        },
        {
          q: "متى يجب التواصل لتنظيم عرس سعودي؟",
          a: "للعرس الممتد في الرياض أو جدة أو العلا، 9 إلى 12 شهرًا يمنحنا مساحة للتصميم المدروس وتأمين القاعات. الجداول الأقصر ممكنة — تواصل في أقرب وقت.",
        },
      ],
    },
  },
  {
    slug: "uae",
    isoCountry: "AE",
    en: {
      title: "Luxury Event Planner for the UAE | Maranasi",
      description:
        "Maranasi plans luxury weddings, corporate events, galas and brand activations for the UAE — Dubai and Abu Dhabi — produced from Amman, Jordan across MENA.",
      keywords:
        "luxury event planner UAE, wedding planner Dubai, wedding planner Abu Dhabi, corporate event company UAE, gala dinner Dubai, brand activation Dubai, destination wedding Jordan for UAE clients, event management Dubai",
      eyebrow: "United Arab Emirates",
      h1: "Luxury Event Planning for the UAE",
      subhead:
        "Weddings, corporate events, gala dinners and brand activations for Dubai and Abu Dhabi — produced by Maranasi from Amman, with full delivery across the Emirates.",
      intro: [
        "Maranasi works with UAE-based couples, corporates and agencies on events designed for a discerning audience. The aesthetic is restrained — material, light, silence used as carefully as colour. The production is exact: every supplier briefed, every moment rehearsed.",
        "We deliver inside the UAE for clients hosting in Dubai or Abu Dhabi, and we host UAE clients in Jordan for destination weddings and corporate retreats at Petra, Wadi Rum and the Dead Sea. The same in-house team owns the project from concept to wrap.",
      ],
      servicesTitle: "What we plan in the UAE",
      services: [
        {
          title: "Luxury weddings — Dubai & Abu Dhabi",
          body: "Multi-day weddings, henna nights, receptions and welcome dinners. Venues, design, florals, entertainment, hospitality and production handled in-house.",
        },
        {
          title: "Corporate events & conferences",
          body: "Summits, conferences, executive retreats and incentive programmes for UAE corporates and regional HQs.",
        },
        {
          title: "Gala dinners",
          body: "Awards nights, fundraising galas and milestone celebrations across Dubai and Abu Dhabi.",
        },
        {
          title: "Brand activations",
          body: "Launch events, immersive experiences and 360 campaign activations for regional and international brands.",
        },
      ],
      whyTitle: "Why UAE clients choose Maranasi",
      why: [
        "In-house production team, no outsourced delivery",
        "Discreet, low-publicity standard of working",
        "Network across Dubai, Abu Dhabi and Amman",
        "Producers of TEDxAmman and work for global brands across MENA",
      ],
      ctaTitle: "Plan an event in the UAE",
      ctaBody:
        "Share the brief. We respond personally to every enquiry within one working day.",
      ctaButton: "Start a Conversation",
      faqTitle: "Questions from UAE clients",
      faqs: [
        {
          q: "Do you plan weddings in Dubai and Abu Dhabi?",
          a: "Yes — multi-day weddings, henna nights and receptions across both emirates. We can also host UAE couples in Jordan for destination weddings at Petra, Wadi Rum or the Dead Sea.",
        },
        {
          q: "Do you work on corporate events for UAE companies?",
          a: "Yes — conferences, summits, gala dinners, MICE and brand activations for UAE corporates and regional HQs, delivered in-Emirate or in Jordan.",
        },
        {
          q: "Can the team travel to Dubai?",
          a: "Yes. For UAE-based events we bring the production team in. Pre-production, supplier coordination and design are handled remotely between Amman and your venue.",
        },
        {
          q: "How early should we book a Dubai wedding?",
          a: "Peak-season Dubai venues book well ahead — 9 to 12 months is a healthy lead time. Shorter is possible; the sooner we talk the more options remain.",
        },
      ],
    },
    ar: {
      title: "تخطيط فعاليات فاخرة في الإمارات | مرناسي",
      description:
        "مرناسي لتخطيط الأعراس الفاخرة، فعاليات الشركات، حفلات العشاء والفعاليات الترويجية في الإمارات — دبي وأبوظبي — من عمّان، الأردن وعبر منطقة الشرق الأوسط.",
      keywords:
        "منظم فعاليات فاخرة الإمارات, منظم أعراس دبي, منظم أعراس أبوظبي, شركة تنظيم فعاليات الإمارات, حفلات عشاء دبي, فعاليات ترويجية دبي, أعراس فاخرة في الأردن لعملاء الإمارات",
      eyebrow: "الإمارات العربية المتحدة",
      h1: "تخطيط فعاليات فاخرة في الإمارات",
      subhead:
        "أعراس، فعاليات شركات، حفلات عشاء وفعاليات ترويجية في دبي وأبوظبي — من إنتاج مرناسي من عمّان وتنفيذ كامل عبر الإمارات.",
      intro: [
        "تعمل مرناسي مع العرسان والشركات والوكالات في الإمارات على فعاليات مصممة لجمهور رفيع. الذائقة هادئة — المواد والضوء والصمت تُستخدم بالعناية ذاتها التي تُستخدم بها الألوان. والإنتاج دقيق: كل مورّد مُحاط بالتفاصيل، وكل لحظة مدروسة.",
        "ننفّذ داخل الإمارات للعملاء الذين يستضيفون في دبي أو أبوظبي، ونستضيف عملاء الإمارات في الأردن للأعراس وملتقيات الشركات في البتراء ووادي رم والبحر الميت. نفس الفريق الداخلي يتولى المشروع من البداية حتى نهايته.",
      ],
      servicesTitle: "ما ننظمه في الإمارات",
      services: [
        {
          title: "أعراس فاخرة — دبي وأبوظبي",
          body: "أعراس ممتدة على أيام، حفلات حنّاء واستقبال وعشاء ترحيبي. القاعات والتصميم والزهور والترفيه والضيافة والإنتاج كله من فريقنا.",
        },
        {
          title: "فعاليات الشركات والمؤتمرات",
          body: "قمم ومؤتمرات وملتقيات تنفيذية وبرامج تحفيزية لشركات الإمارات والمقرات الإقليمية.",
        },
        {
          title: "حفلات العشاء والغالا",
          body: "حفلات تكريم وحفلات خيرية واحتفالات كبرى في دبي وأبوظبي.",
        },
        {
          title: "الفعاليات الترويجية للعلامات التجارية",
          body: "حفلات إطلاق وتجارب غامرة وحملات 360 للعلامات الإقليمية والدولية.",
        },
      ],
      whyTitle: "لماذا يختارنا عملاء الإمارات",
      why: [
        "فريق إنتاج داخلي بدون تنفيذ خارجي",
        "أسلوب عمل هادئ ومنخفض الإعلام",
        "شبكة بين دبي وأبوظبي وعمّان",
        "منتجو TEDxAmman وأعمال لعلامات عالمية في المنطقة",
      ],
      ctaTitle: "نظّم فعاليتك في الإمارات",
      ctaBody:
        "شارك التفاصيل معنا. نردّ شخصيًا على كل طلب خلال يوم عمل واحد.",
      ctaButton: "ابدأ المحادثة",
      faqTitle: "أسئلة من عملاء الإمارات",
      faqs: [
        {
          q: "هل تنظّمون أعراسًا في دبي وأبوظبي؟",
          a: "نعم — أعراس ممتدة وحفلات حنّاء واستقبال في الإمارتين. كما نستضيف العرسان من الإمارات في الأردن للاحتفال في البتراء ووادي رم والبحر الميت.",
        },
        {
          q: "هل تعملون على فعاليات الشركات الإماراتية؟",
          a: "نعم — مؤتمرات وقمم وغالا وبرامج MICE وفعاليات ترويجية للشركات الإماراتية والمقرات الإقليمية، داخل الإمارات أو في الأردن.",
        },
        {
          q: "هل ينتقل الفريق إلى دبي؟",
          a: "نعم. للفعاليات داخل الإمارات نأتي بفريق الإنتاج. التحضير وتنسيق المورّدين والتصميم يتم عن بُعد بين عمّان وموقع الفعالية.",
        },
        {
          q: "متى يجب حجز عرس في دبي؟",
          a: "قاعات دبي في الموسم تُحجز مبكرًا — من 9 إلى 12 شهرًا فترة مناسبة. الفترات الأقصر ممكنة؛ كلما تواصلت أبكر بقيت خيارات أكثر.",
        },
      ],
    },
  },
  {
    slug: "qatar",
    isoCountry: "QA",
    en: {
      title: "Luxury Event Planner for Qatar | Maranasi",
      description:
        "Maranasi plans luxury weddings, corporate events, galas and brand activations for Qatar — Doha and beyond — produced from Amman, Jordan across MENA.",
      keywords:
        "luxury event planner Qatar, wedding planner Doha, corporate event company Qatar, gala dinner Doha, brand activation Qatar, destination wedding Jordan for Qatari clients, event management Doha",
      eyebrow: "Qatar",
      h1: "Luxury Event Planning for Qatar",
      subhead:
        "Weddings, corporate events, gala dinners and brand activations for Doha — produced by Maranasi from Amman, with full delivery across Qatar.",
      intro: [
        "Maranasi works with Qatari families, corporates and agencies on events that hold themselves to a high quiet standard. Restrained design, exact production, complete discretion — and a single in-house team owning every detail from concept to wrap.",
        "We bring the team to Doha for in-country events, and we host Qatari clients in Jordan for destination weddings and corporate retreats at Petra, Wadi Rum and the Dead Sea. One agency, one team, end-to-end either way.",
      ],
      servicesTitle: "What we plan in Qatar",
      services: [
        {
          title: "Luxury weddings — Doha",
          body: "Multi-day weddings, henna nights, receptions and welcome dinners. Venue, design, florals, entertainment, hospitality and production handled in-house.",
        },
        {
          title: "Corporate events & conferences",
          body: "Summits, conferences, executive retreats and incentive programmes for Qatari corporates and government bodies.",
        },
        {
          title: "Gala dinners",
          body: "Awards nights, philanthropic galas and milestone celebrations across Doha.",
        },
        {
          title: "Brand activations",
          body: "Launch events, immersive experiences and 360 campaign activations for regional and international brands.",
        },
      ],
      whyTitle: "Why Qatari clients choose Maranasi",
      why: [
        "In-house production team, no outsourced delivery",
        "Trusted for high-profile, low-publicity events",
        "Network between Doha and Amman",
        "Producers of TEDxAmman and work for global brands across MENA",
      ],
      ctaTitle: "Plan an event in Qatar",
      ctaBody:
        "Share the brief. We respond personally to every enquiry within one working day.",
      ctaButton: "Start a Conversation",
      faqTitle: "Questions from Qatari clients",
      faqs: [
        {
          q: "Do you plan weddings in Doha?",
          a: "Yes — multi-day weddings, henna nights and receptions in Doha. We can also host Qatari couples in Jordan for destination weddings at Petra, Wadi Rum or the Dead Sea.",
        },
        {
          q: "Do you produce corporate events for Qatari companies?",
          a: "Yes — conferences, summits, gala dinners, MICE programmes and brand activations for Qatari corporates, ministries and international brands operating in Qatar.",
        },
        {
          q: "Can the team travel to Doha?",
          a: "Yes. For Qatar-based events we bring the production team in. Pre-production, supplier coordination and design are handled remotely between Amman and Doha.",
        },
        {
          q: "How early should we book a Doha wedding?",
          a: "9 to 12 months is a healthy lead time for a multi-day Doha wedding. Shorter is possible — the sooner we talk, the more options remain.",
        },
      ],
    },
    ar: {
      title: "تخطيط فعاليات فاخرة في قطر | مرناسي",
      description:
        "مرناسي لتخطيط الأعراس الفاخرة، فعاليات الشركات، حفلات العشاء والفعاليات الترويجية في قطر — الدوحة وما حولها — من عمّان، الأردن وعبر منطقة الشرق الأوسط.",
      keywords:
        "منظم فعاليات فاخرة قطر, منظم أعراس الدوحة, شركة تنظيم فعاليات قطر, حفلات عشاء الدوحة, فعاليات ترويجية قطر, أعراس فاخرة في الأردن للعملاء القطريين",
      eyebrow: "قطر",
      h1: "تخطيط فعاليات فاخرة في قطر",
      subhead:
        "أعراس، فعاليات شركات، حفلات عشاء وفعاليات ترويجية في الدوحة — من إنتاج مرناسي من عمّان وتنفيذ كامل في قطر.",
      intro: [
        "تعمل مرناسي مع العائلات والشركات والوكالات القطرية على فعاليات تلتزم بمعيار هادئ ورفيع. تصميم متّزن، إنتاج دقيق، سرية كاملة — وفريق داخلي واحد يمسك كل تفصيلة من الفكرة حتى الإنهاء.",
        "نأتي بفريقنا إلى الدوحة للفعاليات داخل البلاد، ونستضيف العملاء القطريين في الأردن للأعراس وملتقيات الشركات في البتراء ووادي رم والبحر الميت. وكالة واحدة، فريق واحد، من البداية إلى النهاية.",
      ],
      servicesTitle: "ما ننظمه في قطر",
      services: [
        {
          title: "أعراس فاخرة — الدوحة",
          body: "أعراس ممتدة، حفلات حنّاء واستقبال وعشاء ترحيبي. القاعة والتصميم والزهور والترفيه والضيافة والإنتاج كله من فريقنا.",
        },
        {
          title: "فعاليات الشركات والمؤتمرات",
          body: "قمم ومؤتمرات وملتقيات تنفيذية وبرامج تحفيزية للشركات والجهات الحكومية القطرية.",
        },
        {
          title: "حفلات العشاء والغالا",
          body: "حفلات تكريم وغالا خيرية واحتفالات كبرى في الدوحة.",
        },
        {
          title: "الفعاليات الترويجية للعلامات التجارية",
          body: "حفلات إطلاق وتجارب غامرة وحملات 360 للعلامات الإقليمية والدولية.",
        },
      ],
      whyTitle: "لماذا يختارنا العملاء القطريون",
      why: [
        "فريق إنتاج داخلي بدون تنفيذ خارجي",
        "موثوقون في الفعاليات الرفيعة منخفضة الإعلام",
        "شبكة بين الدوحة وعمّان",
        "منتجو TEDxAmman وأعمال لعلامات عالمية في المنطقة",
      ],
      ctaTitle: "نظّم فعاليتك في قطر",
      ctaBody:
        "شارك التفاصيل معنا. نردّ شخصيًا على كل طلب خلال يوم عمل واحد.",
      ctaButton: "ابدأ المحادثة",
      faqTitle: "أسئلة من العملاء القطريين",
      faqs: [
        {
          q: "هل تنظّمون أعراسًا في الدوحة؟",
          a: "نعم — أعراس ممتدة وحفلات حنّاء واستقبال في الدوحة. كما نستضيف العرسان القطريين في الأردن للاحتفال في البتراء ووادي رم والبحر الميت.",
        },
        {
          q: "هل تنتجون فعاليات شركات قطرية؟",
          a: "نعم — مؤتمرات وقمم وغالا وبرامج MICE وفعاليات ترويجية للشركات والوزارات والعلامات الدولية في قطر.",
        },
        {
          q: "هل ينتقل الفريق إلى الدوحة؟",
          a: "نعم. للفعاليات في قطر نأتي بفريق الإنتاج. التحضير وتنسيق المورّدين والتصميم يتم عن بُعد بين عمّان والدوحة.",
        },
        {
          q: "متى يجب حجز عرس في الدوحة؟",
          a: "من 9 إلى 12 شهرًا فترة مناسبة لعرس ممتد في الدوحة. الفترات الأقصر ممكنة — كلما تواصلت أبكر بقيت خيارات أكثر.",
        },
      ],
    },
  },
];

export function getGccCountry(slug: string): GccCountry | undefined {
  return gccCountries.find((c) => c.slug === slug);
}
