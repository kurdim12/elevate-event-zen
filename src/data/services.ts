// Corporate Services Data
export interface ServiceData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle?: string;
  content: string[];
  features: string[];
  ctaText: string;
  videoId?: string;
  videoTitle?: string;
  hasGallery?: boolean;
  galleryTitle?: string;
}

export const corporateServices: ServiceData[] = [
  {
    slug: "mice-event-management",
    metaTitle: "MICE Event Management | MaraNasi",
    metaDescription: "MICE event management across Jordan, Egypt, UAE, and Thailand with program control, supplier coordination, production readiness, and onsite execution.",
    h1: "MICE Event Management",
    content: [
      "Structure. Speed. Control. We manage meetings, incentives, conferences, and exhibition programs as a single operation—from planning through show day. Jordan, Egypt, UAE, Thailand. Destination logistics that keep timing, guest flow, and production aligned.",
      "No uncertainty. A clear plan. Confirmed suppliers. Controlled stage flow. An onsite team that keeps everything moving."
    ],
    features: [
      "Program planning and coordination",
      "Venue coordination and scheduling",
      "Supplier management and timeline control",
      "Run of show planning and onsite timing control",
      "Production readiness coordination for lighting and sound",
      "On ground operations and escalation ownership"
    ],
    ctaText: "Request a MICE Proposal"
  },
  {
    slug: "destination-corporate-events",
    metaTitle: "Destination Corporate Events | MaraNasi",
    metaDescription: "Destination corporate events across Jordan, Egypt, UAE, and Thailand with venue shortlists, logistics planning, production coordination, and onsite control.",
    h1: "Destination Corporate Events",
    content: [
      "Events designed around place. Delivered with discipline. We plan the format, shortlist venues, coordinate hotels and movement, and run production readiness. The experience feels premium. The execution stays clean. Jordan, Egypt, UAE, Thailand—iconic locations and resort formats.",
      "For brands that want an experience worth traveling for. Without turning logistics into a risk."
    ],
    features: [
      "Destination shortlist and venue options",
      "Guest journey planning and movement control",
      "Supplier coordination and timeline ownership",
      "Production planning and technical readiness coordination",
      "Show flow control for key moments",
      "On ground execution and escalation control"
    ],
    ctaText: "Request Destination Options"
  },
  {
    slug: "destination-corporate-retreats",
    metaTitle: "Destination Corporate Retreats | MaraNasi",
    metaDescription: "Corporate retreats across Jordan, Egypt, UAE, and Thailand with itinerary design, resort coordination, sessions setup, hospitality flow, and onsite execution.",
    h1: "Destination Corporate Retreats",
    content: [
      "Productivity and premium experience. In balance. We build the itinerary, coordinate resorts and meeting spaces, plan movement and dining flow, and run onsite delivery with timing control. Jordan, Egypt, UAE, Thailand—resort retreats and destination leadership formats.",
      "Alignment without friction. Your team experiences the destination. The operation stays controlled."
    ],
    features: [
      "Retreat itinerary and program structure",
      "Resort and meeting space coordination",
      "Transport routing and group movement planning",
      "Sessions setup coordination and production readiness",
      "Dining flow and experience planning",
      "On ground execution and escalation control"
    ],
    ctaText: "Design My Retreat"
  },
  {
    slug: "exhibition-booth-design-production",
    metaTitle: "Exhibition Booth Design and Production | MaraNasi",
    metaDescription: "Premium exhibition booth design and production with visitor flow logic, build coordination, branding finishes, and onsite supervision.",
    h1: "Exhibition Booth Design and Production",
    content: [
      "Booths that look premium and work commercially. We translate your brand into a clear spatial experience, then coordinate production and finishing. Built to perform—not just to be photographed.",
      "Protecting your brand presence. And your build timeline."
    ],
    features: [
      "Booth concept direction and layout logic",
      "Visitor flow planning and brand visibility hierarchy",
      "Production coordination and finishing standards",
      "Build schedule control and onsite setup supervision",
      "Dismantle coordination when required"
    ],
    ctaText: "Request a Booth Proposal"
  },
  {
    slug: "360-campaign-management-activations",
    metaTitle: "360 Campaign Management and Brand Activations | MaraNasi",
    metaDescription: "Event led activations with concept planning, production coordination, onsite execution, and controlled brand touchpoints across Jordan, Egypt, UAE, and Thailand.",
    h1: "360 Campaign Management and Brand Activations",
    content: [
      "Activations built around real-world moments. We plan the concept, coordinate production, and run onsite execution. Brand presence that's controlled, premium, and consistent. Jordan, Egypt, UAE, Thailand—campaigns that need physical touchpoints and live engagement.",
      "Intentional. Brand-safe. Clear timing. Operational ownership."
    ],
    features: [
      "Activation concept plan and execution timeline",
      "Supplier coordination and production readiness",
      "Onsite operations plan and escalation ownership",
      "Staffing coordination when required",
      "Content capture coordination when required"
    ],
    ctaText: "Plan an Activation"
  },
  {
    slug: "exhibition-management",
    metaTitle: "Exhibition Management | MaraNasi",
    metaDescription: "Exhibition management with operational planning, venue coordination, exhibitor flow, production readiness, onsite teams, and opening ceremony control.",
    h1: "Exhibition Management",
    content: [
      "A controlled system. Not a collection of vendors. Venue operations, exhibitor flow, production readiness, opening moments, show day control. Jordan, Egypt, UAE, Thailand—exhibitions that need premium execution and disciplined timing.",
      "Protecting reputation. High visibility events. Operations that look effortless."
    ],
    features: [
      "Master timeline and operational plan",
      "Venue coordination and compliance support",
      "Exhibitor coordination flow and onsite support",
      "Build day schedule and show day control",
      "Opening ceremony flow and stage timing",
      "Escalation structure and onsite leadership"
    ],
    ctaText: "Manage My Exhibition"
  },
  {
    slug: "entertainment-programming-production",
    metaTitle: "Entertainment Programming and Production | MaraNasi",
    metaDescription: "Entertainment programming for corporate events and gala dinners including coordination, technical planning, rehearsals, and show flow control.",
    h1: "Entertainment Programming and Production",
    content: [
      "Entertainment that fits the brand, the audience, and the destination. Talent coordination, technical needs, rehearsal timing, show flow. Impact without chaos. Jordan, Egypt, UAE, Thailand—corporate events, gala dinners, destination experiences.",
      "The moment lands properly. Timing discipline. Technical readiness."
    ],
    features: [
      "Entertainment program plan and segment timing",
      "Talent coordination and scheduling",
      "Technical needs planning and rehearsals coordination",
      "Cue alignment and show flow control",
      "Live show support when required"
    ],
    ctaText: "Build an Entertainment Plan"
  },
  {
    slug: "conference-management",
    metaTitle: "Conference Management | MaraNasi",
    metaDescription: "Conference management with agenda control, stage operations, speaker flow support, production readiness, and onsite execution across Jordan, Egypt, UAE, and Thailand.",
    h1: "Conference Management",
    content: [
      "Credibility. Timing discipline. Premium production. Agenda flow, stage operations, room readiness, onsite coordination. On time. Well produced. Jordan, Egypt, UAE, Thailand—conferences with reputational weight.",
      "Removing operational noise. Keeping focus on content and brand."
    ],
    features: [
      "Agenda flow and run of show control",
      "Stage operations and speaker flow support",
      "Production readiness coordination for lighting and sound",
      "Room readiness and onsite logistics coordination",
      "Timing discipline and escalation control"
    ],
    ctaText: "Request a Conference Plan"
  },
  {
    slug: "vip-greet-and-meet-facilitation",
    metaTitle: "VIP Greet and Meet Facilitation | MaraNasi",
    metaDescription: "VIP greet and meet facilitation for delegations and high value guests including routing, hosting, movement control, and privacy focused operations.",
    h1: "VIP Greet and Meet Facilitation",
    content: [
      "Delegations. Executives. Speakers. High-value guests. Arrivals, routing, hosting, movement control. Guests feel handled. Stakeholders feel protected. Jordan, Egypt, UAE, Thailand—privacy-first mindset, disciplined timing.",
      "The experience stays calm. The operation stays sharp."
    ],
    features: [
      "Guest movement plan and routing schedule",
      "Hosting roles and onsite facilitation structure",
      "Timing plan aligned with program requirements",
      "Transport coordination guidance when required",
      "Escalation contacts and onsite ownership"
    ],
    ctaText: "Arrange VIP Facilitation"
  },
  {
    slug: "lighting-and-sound-production",
    metaTitle: "Lighting and Sound Production | MaraNasi",
    metaDescription: "Lighting and sound production coordination with technical planning, setup schedules, rehearsals, show readiness, and live operation support.",
    h1: "Lighting and Sound Production",
    content: [
      "Protecting the guest experience and the brand image. Technical requirements, setup schedules, rehearsals, show readiness. Clear audio. Premium visuals. Jordan, Egypt, UAE, Thailand—outdoor and destination formats.",
      "No technical surprises. Consistent production quality."
    ],
    features: [
      "Technical requirements intake and planning",
      "Supplier coordination and setup schedule control",
      "Sound checks, mic planning, and rehearsal coordination",
      "Show readiness checks and backup planning",
      "Live support when required"
    ],
    ctaText: "Request a Technical Plan"
  },
  {
    slug: "gala-dinner-banquet-production",
    metaTitle: "Gala Dinner and Banquet Production | MaraNasi",
    metaDescription: "Gala dinner production with guest journey planning, seating flow, stage moments, entertainment timing, production coordination, and show control across Jordan, Egypt, UAE, and Thailand.",
    h1: "Gala Dinner and Banquet Production",
    content: [
      "Premium finish. Strict timing. Guest flow, seating logic, stage moments, entertainment segments, production readiness. Polished. Smooth. Jordan, Egypt, UAE, Thailand—formal corporate hosting and high-profile evenings.",
      "Elegance with operational discipline."
    ],
    features: [
      "Guest journey planning and flow control",
      "Seating flow coordination",
      "Stage timeline and key moments planning",
      "Entertainment timing and show flow control",
      "Production readiness coordination",
      "On ground execution and escalation control"
    ],
    ctaText: "Plan a Gala Dinner"
  },
  {
    slug: "show-calling-stage-management",
    metaTitle: "Show Calling and Stage Management | MaraNasi",
    metaDescription: "Show calling and stage management with run of show build, cue sheets, rehearsal control, backstage flow, and live timing control across Jordan, Egypt, UAE, and Thailand.",
    h1: "Show Calling and Stage Management",
    content: [
      "Events that need timing discipline. Run of show, cue management, transitions, live timing. The stage feels controlled. The program stays on track. Jordan, Egypt, UAE, Thailand—conferences, gala dinners, high-stakes corporate moments.",
      "Great events are planned before they go live."
    ],
    features: [
      "Run of show and cue sheet creation",
      "Rehearsal control and timing alignment",
      "Backstage flow and role assignment coordination",
      "Live cue calling and timing control",
      "Closeout notes when required"
    ],
    ctaText: "Add Show Calling"
  }
];

// Wedding Services Data
export const weddingServices: ServiceData[] = [
  {
    slug: "luxury-wedding-design-and-planning",
    metaTitle: "Luxury Wedding Design and Planning | MaraNasi",
    metaDescription: "Luxury wedding planning with concept direction, supplier management, production planning, timelines, and onsite control across Jordan, Egypt, UAE, and Thailand.",
    h1: "Luxury Wedding Design and Planning",
    content: [
      "Beauty with control. We develop the concept, manage suppliers, build the production plan, and run the wedding day. Timing discipline. Premium guest experience. Jordan, Egypt, UAE, Thailand—iconic and destination settings.",
      "The wedding looks effortless because the planning is serious."
    ],
    features: [
      "Concept and design direction",
      "Supplier coordination and timeline control",
      "Production planning and setup supervision",
      "Rehearsal planning and key moment timing",
      "Wedding day run of show and onsite control"
    ],
    ctaText: "Start Wedding Planning"
  },
  {
    slug: "destination-luxury-weddings-service",
    metaTitle: "Destination Luxury Weddings | MaraNasi",
    metaDescription: "Destination luxury weddings across Jordan, Egypt, UAE, and Thailand with venue sourcing, logistics planning, production coordination, and onsite execution.",
    h1: "Destination Luxury Weddings",
    content: [
      "Premium logistics. High finish. We shortlist venues, coordinate destination planning, manage suppliers, and execute on the ground. Guest journey stays smooth. Visuals stay coherent. Jordan, Egypt, UAE, Thailand—Petra, Wadi Rum, UAE city venues, Thailand resort settings.",
      "Iconic locations. No compromise in execution."
    ],
    features: [
      "Destination and venue shortlisting",
      "Hospitality and movement planning",
      "Supplier coordination and timeline control",
      "Production readiness coordination",
      "Ceremony and reception flow planning",
      "On ground execution and escalation control"
    ],
    ctaText: "Explore Destination Wedding Options",
    videoId: "1-bWe1RN6Ys",
    videoTitle: "A Destination Wedding Experience",
    hasGallery: true,
    galleryTitle: "Crafted Moments"
  },
  {
    slug: "destination-marriage-proposals",
    metaTitle: "Destination Marriage Proposals | MaraNasi",
    metaDescription: "Destination marriage proposals with concept planning, discreet setup, privacy control, timing discipline, and onsite execution across Jordan, Egypt, UAE, and Thailand.",
    h1: "Destination Marriage Proposals",
    content: [
      "Private. Intentional. Cinematic. We design the concept, coordinate the location, control timing and privacy, and run the setup. The moment lands cleanly. Jordan, Egypt, UAE, Thailand—iconic locations and resort settings.",
      "One-take moments. Planning that removes risk, not adds pressure."
    ],
    features: [
      "Proposal concept and setup plan",
      "Location coordination and timing schedule",
      "Privacy control and discreet execution planning",
      "Production readiness planning for lighting and setup",
      "Contingency planning and onsite delivery"
    ],
    ctaText: "Plan My Proposal"
  }
];

// Destinations Data
export interface DestinationData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string;
  locations: string[];
  ctaText: string;
}

export const destinations: DestinationData[] = [
  {
    slug: "destinations-jordan",
    name: "Jordan",
    metaTitle: "Events and Weddings in Jordan | MaraNasi",
    metaDescription: "Corporate events and destination weddings in Jordan across Amman, Aqaba, Petra, and Wadi Rum with premium planning and controlled execution.",
    h1: "Jordan",
    content: "Our home ground. Historic backdrops, premium hospitality, rare experiences—within a controlled production environment. Amman, Aqaba, Petra, Wadi Rum. Corporate programs, weddings, and proposals delivered with strong logistics and premium execution.",
    locations: ["Amman", "Amman Citadel", "Roman Theatre", "Qasr Al Mushatta", "Aqaba", "Petra", "Al Khazneh", "Little Petra", "Wadi Rum"],
    ctaText: "Request Jordan Options"
  },
  {
    slug: "destinations-saudi-arabia",
    name: "Saudi Arabia",
    metaTitle: "Events and Weddings in Saudi Arabia | MaraNasi",
    metaDescription: "Corporate events, luxury weddings, and brand activations in Saudi Arabia across Riyadh, Jeddah, and AlUla with premium planning and execution.",
    h1: "Saudi Arabia",
    content: "Vision 2030 energy. World-class venues, ambitious formats, premium hospitality. Riyadh, Jeddah, AlUla—corporate programs, gala dinners, brand activations, and destination weddings delivered with scale and precision.",
    locations: ["Riyadh", "Jeddah", "AlUla", "NEOM", "Diriyah"],
    ctaText: "Request Saudi Arabia Options"
  },
  {
    slug: "destinations-egypt",
    name: "Egypt",
    metaTitle: "Events and Weddings in Egypt | MaraNasi",
    metaDescription: "Destination weddings and corporate events in Egypt including the Pyramids of Giza, North Coast, and Alexandria with premium planning and execution.",
    h1: "Egypt",
    content: "Scale and iconic visuals. High-profile weddings, proposals, corporate hosting. Pyramids of Giza, North Coast, Alexandria—venue coordination, destination logistics, timing control, production readiness. Premium experiences delivered.",
    locations: ["Pyramids of Giza", "North Coast, El Sahel", "Alexandria"],
    ctaText: "Request Egypt Options"
  },
  {
    slug: "destinations-uae",
    name: "United Arab Emirates",
    metaTitle: "Events and Weddings in the UAE | MaraNasi",
    metaDescription: "Corporate events and luxury weddings in Dubai, Abu Dhabi, and Sharjah with premium venues, production support, and controlled execution.",
    h1: "United Arab Emirates",
    content: "World-class venues and hospitality infrastructure. High-value corporate events and luxury weddings. Dubai, Abu Dhabi, Sharjah—venue coordination, production requirements, guest experience flow. Premium execution standard.",
    locations: ["Dubai", "Abu Dhabi", "Sharjah"],
    ctaText: "Request UAE Options"
  },
  {
    slug: "destinations-dubai",
    name: "Dubai",
    metaTitle: "Events and Weddings in Dubai | MaraNasi",
    metaDescription: "Luxury corporate events, destination weddings, and brand activations in Dubai with world-class venues, production coordination, and premium execution.",
    h1: "Dubai",
    content: "The global stage. Iconic skyline venues, luxury hospitality, world-class production infrastructure. Corporate galas, destination weddings, product launches, brand activations—Dubai delivers scale with sophistication. Premium venues and controlled execution.",
    locations: ["Downtown Dubai", "Palm Jumeirah", "Dubai Marina", "DIFC", "Jumeirah Beach", "Dubai Creek"],
    ctaText: "Request Dubai Options"
  },
  {
    slug: "destinations-doha",
    name: "Doha",
    metaTitle: "Events and Weddings in Doha, Qatar | MaraNasi",
    metaDescription: "Corporate events, luxury weddings, and premium experiences in Doha, Qatar with world-class venues and controlled execution.",
    h1: "Doha, Qatar",
    content: "Modern ambition meets cultural depth. World-class venues, premium hospitality, and a growing events landscape. Corporate programs, gala dinners, destination weddings—Doha delivers prestige and production quality in a compact, accessible city.",
    locations: ["West Bay", "The Pearl", "Lusail", "Katara Cultural Village", "Souq Waqif"],
    ctaText: "Request Doha Options"
  },
  {
    slug: "destinations-thailand",
    name: "Thailand",
    metaTitle: "Events and Weddings in Thailand | MaraNasi",
    metaDescription: "Corporate events and destination weddings in Thailand across Bangkok, Pattaya, and Phi Phi Islands with premium venues and destination execution.",
    h1: "Thailand",
    content: "Luxury city venues, resort hospitality, iconic island experiences. Corporate hosting, destination weddings, proposals. Bangkok, Pattaya, Phi Phi Islands—venue coordination, on-ground execution, timing control, premium production readiness.",
    locations: ["Bangkok", "Pattaya", "Phi Phi Islands", "Phuket", "Koh Samui"],
    ctaText: "Request Thailand Options"
  },
  {
    slug: "destinations-india",
    name: "India",
    metaTitle: "Events and Weddings in India | MaraNasi",
    metaDescription: "Luxury destination weddings, corporate events, and celebrations in India across Mumbai, Delhi, Udaipur, Goa, and Jaipur with premium execution.",
    h1: "India",
    content: "Grand scale. Rich heritage. Unmatched hospitality. Palace weddings, corporate summits, multi-day celebrations. Mumbai, Delhi, Udaipur, Goa, Jaipur—venues that range from royal palaces to modern luxury resorts. Production coordination with cultural sensitivity.",
    locations: ["Mumbai", "New Delhi", "Udaipur", "Goa", "Jaipur", "Bangalore"],
    ctaText: "Request India Options"
  },
  {
    slug: "destinations-vietnam",
    name: "Vietnam",
    metaTitle: "Events and Weddings in Vietnam | MaraNasi",
    metaDescription: "Destination weddings and corporate events in Vietnam across Ho Chi Minh City, Hanoi, Da Nang, and Phu Quoc with premium venues and execution.",
    h1: "Vietnam",
    content: "Emerging luxury. Stunning coastlines, boutique resorts, vibrant cities. Destination weddings, corporate retreats, intimate celebrations. Ho Chi Minh City, Hanoi, Da Nang, Phu Quoc—a rising destination with exceptional value and visual impact.",
    locations: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Phu Quoc", "Hoi An"],
    ctaText: "Request Vietnam Options"
  },
  {
    slug: "destinations-china",
    name: "China",
    metaTitle: "Events and Weddings in China | MaraNasi",
    metaDescription: "Corporate events, luxury weddings, and brand activations in China across Shanghai, Beijing, Shenzhen, and Hangzhou with premium planning.",
    h1: "China",
    content: "Scale, speed, sophistication. World-class convention centers, luxury hotels, iconic landmarks. Corporate conferences, product launches, gala dinners, destination weddings. Shanghai, Beijing, Shenzhen—production infrastructure that matches ambition.",
    locations: ["Shanghai", "Beijing", "Shenzhen", "Hangzhou", "Guangzhou"],
    ctaText: "Request China Options"
  },
  {
    slug: "destinations-usa",
    name: "United States",
    metaTitle: "Events and Weddings in the United States | MaraNasi",
    metaDescription: "Luxury events, destination weddings, and corporate experiences across the United States including New Jersey, Chicago, Texas, Houston, California, Boston, and Los Angeles.",
    h1: "United States",
    content: "Coast to coast. Premium venues, diverse landscapes, world-class hospitality. Corporate events, destination weddings, brand activations. From New Jersey to California—iconic American cities and resort destinations with full production coordination.",
    locations: ["New Jersey", "Chicago, Illinois", "Houston, Texas", "Dallas, Texas", "California", "Los Angeles", "Boston"],
    ctaText: "Request US Options"
  },
  {
    slug: "destinations-canada",
    name: "Canada",
    metaTitle: "Events and Weddings in Canada | MaraNasi",
    metaDescription: "Luxury events and destination weddings in Canada across Toronto and Ottawa with premium venue coordination and execution.",
    h1: "Canada",
    content: "Refined elegance. World-class venues, multicultural hospitality, stunning natural backdrops. Corporate events, destination weddings, intimate celebrations. Toronto, Ottawa—premium Canadian destinations with sophisticated production standards.",
    locations: ["Toronto", "Ottawa", "Vancouver"],
    ctaText: "Request Canada Options"
  }
];

// FAQs Data
export interface FAQData {
  category: string;
  questions: { q: string; a: string }[];
}

export const faqs: FAQData[] = [
  {
    category: "Corporate",
    questions: [
      { q: "Which destinations do you operate in?", a: "Middle East (Jordan, Saudi Arabia, Egypt, UAE, Dubai, Doha), Asia (Thailand, India, Vietnam, China), and North America (US, Canada)." },
      { q: "Do you provide full production?", a: "Yes. Lighting, sound coordination, and show flow control." },
      { q: "Can you handle VIP guests and delegations?", a: "Yes. Greet and meet facilitation with routing plans." },
      { q: "Do you manage conferences and exhibitions?", a: "Yes. Full operations planning and onsite execution." },
      { q: "How early should we plan?", a: "Earlier planning improves venue options and supplier availability." }
    ]
  },
  {
    category: "Weddings and Proposals",
    questions: [
      { q: "Do you plan destination weddings end to end?", a: "Yes. Venue coordination, suppliers, onsite delivery." },
      { q: "Can proposals be private and discreet?", a: "Yes. Privacy planned into timing and routing." },
      { q: "Do you support iconic locations?", a: "Yes. Within access rules and logistical feasibility." },
      { q: "Can you plan multi-day wedding weekends?", a: "Yes. Controlled movement and timeline planning." },
      { q: "Do you coordinate production?", a: "Yes. Aligned with key moments and guest experience." }
    ]
  }
];
