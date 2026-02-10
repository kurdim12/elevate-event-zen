// Corporate Services Data
export interface ServiceData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords?: string;
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
    metaTitle: "MICE Event Management in Jordan | MaraNasi",
    metaDescription: "MICE event management in Jordan and Amman with program control, supplier coordination, production readiness, and onsite execution. Also serving Egypt, UAE, and Thailand.",
    metaKeywords: "MICE event planner Amman, MICE event management Jordan, incentive travel Jordan, meetings incentives conferences exhibitions Amman, MICE planner Middle East, MICE event organizer Jordan",
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
    metaTitle: "Destination Corporate Events in Jordan | MaraNasi",
    metaDescription: "Destination corporate events in Jordan and Amman with venue shortlists, logistics planning, production coordination, and onsite control. Also serving Egypt, UAE, and Thailand.",
    metaKeywords: "destination corporate events Jordan, corporate event planner Amman, corporate event organizer Jordan, destination event management Amman, corporate events Middle East",
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
    metaTitle: "Destination Corporate Retreats in Jordan | MaraNasi",
    metaDescription: "Corporate retreats in Jordan with itinerary design, resort coordination, sessions setup, hospitality flow, and onsite execution. Also serving Egypt, UAE, and Thailand.",
    metaKeywords: "corporate retreat Jordan, team retreat Amman, leadership retreat Jordan, corporate retreat Dead Sea, destination retreat planner Jordan, corporate offsite Amman",
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
    metaTitle: "Exhibition Booth Design and Production in Jordan | MaraNasi",
    metaDescription: "Premium exhibition booth design and production in Jordan and Amman with visitor flow logic, build coordination, branding finishes, and onsite supervision.",
    metaKeywords: "exhibition booth design Jordan, booth production Amman, exhibition stand Jordan, booth builder Amman, trade show booth design Jordan, exhibition booth contractor Amman",
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
    metaTitle: "360 Campaign Management and Brand Activations in Jordan | MaraNasi",
    metaDescription: "Event-led brand activations in Jordan and Amman with concept planning, production coordination, onsite execution, and controlled brand touchpoints. Also serving Egypt, UAE, and Thailand.",
    metaKeywords: "brand activation Jordan, campaign management Amman, event activation Jordan, brand experience planner Amman, 360 campaign Jordan, experiential marketing Jordan",
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
    metaTitle: "Exhibition Management in Jordan | MaraNasi",
    metaDescription: "Exhibition management in Jordan and Amman with operational planning, venue coordination, exhibitor flow, production readiness, onsite teams, and opening ceremony control.",
    metaKeywords: "exhibition management Jordan, exhibition organizer Amman, trade show management Jordan, exhibition planner Amman, expo management Jordan, exhibition operations Amman",
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
    metaTitle: "Entertainment Programming and Production in Jordan | MaraNasi",
    metaDescription: "Entertainment programming and production in Jordan for corporate events and gala dinners including coordination, technical planning, rehearsals, and show flow control.",
    metaKeywords: "entertainment production Jordan, event entertainment Amman, live entertainment planner Jordan, show production Amman, corporate entertainment Jordan, event show producer Amman",
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
    metaTitle: "Conference Management in Jordan | MaraNasi",
    metaDescription: "Conference management in Jordan and Amman with agenda control, stage operations, speaker flow support, production readiness, and onsite execution. Also serving Egypt, UAE, and Thailand.",
    metaKeywords: "conference management Jordan, conference organizer Amman, conference planner Jordan, summit management Amman, conference production Jordan, event conference planner Amman",
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
    metaTitle: "VIP Greet and Meet Facilitation in Jordan | MaraNasi",
    metaDescription: "VIP greet and meet facilitation in Jordan for delegations and high-value guests including routing, hosting, movement control, and privacy-focused operations.",
    metaKeywords: "VIP facilitation Jordan, VIP hosting Amman, delegation management Jordan, VIP greet meet Amman, executive hosting Jordan, VIP event services Amman",
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
    metaTitle: "Lighting and Sound Production in Jordan | MaraNasi",
    metaDescription: "Lighting and sound production in Jordan and Amman with technical planning, setup schedules, rehearsals, show readiness, and live operation support.",
    metaKeywords: "lighting production Jordan, sound production Amman, AV production Jordan, event lighting Amman, sound engineer Jordan, stage lighting production Amman",
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
    metaTitle: "Gala Dinner and Banquet Production in Jordan | MaraNasi",
    metaDescription: "Gala dinner and banquet production in Jordan and Amman with guest journey planning, seating flow, stage moments, entertainment timing, and show control. Also serving Egypt, UAE, and Thailand.",
    metaKeywords: "gala dinner Jordan, banquet production Amman, gala dinner organizer Jordan, banquet planner Amman, corporate dinner production Jordan, formal dinner event Amman",
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
    metaTitle: "Show Calling and Stage Management in Jordan | MaraNasi",
    metaDescription: "Show calling and stage management in Jordan with run of show build, cue sheets, rehearsal control, backstage flow, and live timing control. Also serving Egypt, UAE, and Thailand.",
    metaKeywords: "show calling Jordan, stage management Amman, stage manager Jordan, show caller Amman, event stage management Jordan, cue management Amman",
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
    metaTitle: "Luxury Wedding Design and Planning in Jordan | MaraNasi",
    metaDescription: "Luxury wedding design and planning in Jordan with concept direction, supplier management, production planning, timelines, and onsite control. Also serving Egypt, UAE, and Thailand.",
    metaKeywords: "luxury wedding planner Jordan, wedding designer Amman, wedding planning Jordan, luxury wedding organizer Amman, premium wedding planner Jordan, bespoke wedding Amman",
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
    metaTitle: "Destination Luxury Weddings in Jordan | MaraNasi",
    metaDescription: "Destination luxury weddings in Jordan including Petra, Dead Sea, and Amman Citadel with venue sourcing, logistics planning, production coordination, and onsite execution. Also serving Egypt, UAE, and Thailand.",
    metaKeywords: "destination wedding Jordan, luxury wedding Petra, wedding planner Dead Sea, destination wedding Amman Citadel, luxury wedding planner Jordan, destination wedding Wadi Rum",
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
    metaTitle: "Destination Marriage Proposals in Jordan | MaraNasi",
    metaDescription: "Destination marriage proposals in Jordan with concept planning, discreet setup, privacy control, timing discipline, and onsite execution. Also serving Egypt, UAE, and Thailand.",
    metaKeywords: "marriage proposal Jordan, proposal planner Amman, destination proposal Petra, proposal planning Jordan, romantic proposal Dead Sea, surprise proposal Wadi Rum Jordan",
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
    slug: "destinations-thailand",
    name: "Thailand",
    metaTitle: "Events and Weddings in Thailand | MaraNasi",
    metaDescription: "Corporate events and destination weddings in Thailand across Bangkok, Pattaya, and Phi Phi Islands with premium venues and destination execution.",
    h1: "Thailand",
    content: "Luxury city venues, resort hospitality, iconic island experiences. Corporate hosting, destination weddings, proposals. Bangkok, Pattaya, Phi Phi Islands—venue coordination, on-ground execution, timing control, premium production readiness.",
    locations: ["Bangkok", "Pattaya", "Phi Phi Islands"],
    ctaText: "Request Thailand Options"
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
      { q: "Which destinations do you operate in?", a: "Jordan, Egypt, UAE, and Thailand." },
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
