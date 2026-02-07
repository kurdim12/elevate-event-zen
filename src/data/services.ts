// Corporate Services Data
export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

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
  galleryImages?: GalleryImage[];
  galleryTitle?: string;
}

export const corporateServices: ServiceData[] = [
  {
    slug: "mice-event-management",
    metaTitle: "MICE Event Management | MaraNasi",
    metaDescription: "MICE event management across Jordan, Egypt, UAE, and Thailand with program control, supplier coordination, production readiness, and onsite execution.",
    h1: "MICE Event Management",
    content: [
      "MaraNasi delivers MICE programs for brands that need structure, speed, and control. We manage meetings, incentives, conferences, and exhibition programs as one operation, from planning through show days. We operate across Jordan, Egypt, the UAE, and Thailand with destination logistics that keep timing, guest flow, and production readiness aligned.",
      "This service exists to remove uncertainty. You get a clear plan, confirmed suppliers, controlled stage flow, and an onsite team that keeps everything moving."
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
      "MaraNasi produces destination corporate events designed around place and delivered with operational discipline. We plan the format, shortlist venues, coordinate hotels and movement, and run production readiness so the experience feels premium and the execution stays clean. We operate across Jordan, Egypt, the UAE, and Thailand, including iconic locations and resort based formats.",
      "This service exists for brands that want an experience worth traveling for, without turning logistics into a risk."
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
      "MaraNasi designs and delivers corporate retreats that balance productivity and premium experience. We build the itinerary, coordinate resorts and meeting spaces, plan movement and dining flow, and run onsite delivery with timing control. We operate across Jordan, Egypt, the UAE, and Thailand, including resort retreats and destination based leadership formats.",
      "This service exists to create alignment without friction. Your team experiences the destination while the operation stays controlled."
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
      "MaraNasi designs and produces exhibition booths that look premium and work commercially. We translate your brand into a clear spatial experience, then coordinate production and finishing so the booth is built to perform, not just to be photographed.",
      "This service exists to protect your brand presence and your build timeline."
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
      "MaraNasi manages brand activations built around real world moments. We plan the activation, coordinate production, and run onsite execution so your brand presence is controlled, premium, and consistent. We operate across Jordan, Egypt, the UAE, and Thailand for corporate campaigns that need physical touchpoints and live audience engagement.",
      "This service exists to make the activation feel intentional and safe for the brand, with clear timing and operational ownership."
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
      "MaraNasi manages exhibitions as a controlled system, not a collection of vendors. We coordinate venue operations, exhibitor flow, production readiness, opening moments, and show day control. We operate across Jordan, Egypt, the UAE, and Thailand for exhibitions that need premium execution and disciplined timing.",
      "This service exists to protect reputation. Exhibitions are high visibility, and operations must look effortless."
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
      "MaraNasi curates and produces entertainment that fits the brand, the audience, and the destination. We coordinate talent, technical needs, rehearsal timing, and show flow so entertainment adds impact without creating chaos. We operate across Jordan, Egypt, the UAE, and Thailand for corporate events, gala dinners, and destination experiences.",
      "This service exists to ensure the moment lands properly, with timing discipline and technical readiness."
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
      "MaraNasi delivers conferences with credibility, timing discipline, and premium production readiness. We manage agenda flow, stage operations, room readiness, and onsite coordination so the event runs on time and feels well produced. We operate across Jordan, Egypt, the UAE, and Thailand for conferences that carry high reputational weight.",
      "This service exists to remove operational noise and keep focus on the content and the brand."
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
      "MaraNasi provides VIP facilitation for delegations, executives, speakers, and high value guests. We plan arrivals, routing, hosting, and movement control so guests feel handled and stakeholders feel protected. We operate across Jordan, Egypt, the UAE, and Thailand with a privacy first mindset and disciplined timing.",
      "This service exists to keep the experience calm while the operation stays sharp."
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
      "MaraNasi coordinates lighting and sound production to protect the guest experience and the brand image. We plan technical requirements, align setup schedules, coordinate rehearsals and checks, and support show readiness so audio is clear and visuals look premium. We operate across Jordan, Egypt, the UAE, and Thailand, including outdoor and destination formats.",
      "This service exists to prevent technical surprises and maintain consistent production quality."
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
      "MaraNasi produces gala dinners with a premium finish and strict timing control. We manage guest flow, seating logic, stage moments, entertainment segments, and production readiness so the night feels polished and moves smoothly. We operate across Jordan, Egypt, the UAE, and Thailand for formal corporate hosting and high profile evenings.",
      "This service exists to deliver elegance with operational discipline."
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
      "MaraNasi provides show calling and stage management for events that need timing discipline. We build the run of show, manage cues, control transitions, and run live timing so the stage feels controlled and the program stays on track. We operate across Jordan, Egypt, the UAE, and Thailand, supporting conferences, gala dinners, and high stakes corporate moments.",
      "This service exists because great events are planned before they go live."
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
      "MaraNasi plans and designs luxury weddings for couples who want beauty with control. We develop the concept, manage suppliers, build the production plan, and run the wedding day with timing discipline and a premium guest experience mindset. We operate across Jordan, Egypt, the UAE, and Thailand, including iconic and destination settings.",
      "This service exists to protect the couple's experience. The wedding looks effortless because the planning is serious."
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
      "MaraNasi delivers destination weddings with premium logistics and a high finish standard. We shortlist venues, coordinate destination planning, manage suppliers, and execute on the ground so the guest journey stays smooth and the visuals stay coherent. We operate across Jordan, Egypt, the UAE, and Thailand, including Petra, Wadi Rum, UAE city venues, and Thailand resort settings.",
      "This service exists for couples who want an iconic location without compromise in execution."
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
    videoTitle: "A Destination Wedding Experience"
  },
  {
    slug: "destination-marriage-proposals",
    metaTitle: "Destination Marriage Proposals | MaraNasi",
    metaDescription: "Destination marriage proposals with concept planning, discreet setup, privacy control, timing discipline, and onsite execution across Jordan, Egypt, UAE, and Thailand.",
    h1: "Destination Marriage Proposals",
    content: [
      "MaraNasi plans destination proposals that feel private, intentional, and cinematic. We design the concept, coordinate the location, control timing and privacy, and run the setup so the moment lands cleanly. We operate across Jordan, Egypt, the UAE, and Thailand, including iconic locations and resort settings.",
      "This service exists because proposals are one take moments. The planning should remove risk, not add pressure."
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
    content: "Jordan is MaraNasi's core operating ground for high value corporate events and destination weddings. It offers historic backdrops, premium hospitality, and rare experiences within a controlled production environment. We operate across Amman, Aqaba, Petra, and Wadi Rum, delivering corporate programs, weddings, and proposals with strong logistics and premium execution.",
    locations: ["Amman", "Amman Citadel", "Roman Theatre", "Qasr Al Mushatta", "Aqaba", "Petra", "Al Khazneh", "Little Petra", "Wadi Rum"],
    ctaText: "Request Jordan Options"
  },
  {
    slug: "destinations-egypt",
    name: "Egypt",
    metaTitle: "Events and Weddings in Egypt | MaraNasi",
    metaDescription: "Destination weddings and corporate events in Egypt including the Pyramids of Giza, North Coast, and Alexandria with premium planning and execution.",
    h1: "Egypt",
    content: "Egypt offers scale and iconic visuals for high profile weddings, proposals, and corporate hosting. We operate across key locations such as the Pyramids of Giza, North Coast, and Alexandria, coordinating venue options and destination logistics to deliver premium experiences with timing control and production readiness.",
    locations: ["Pyramids of Giza", "North Coast, El Sahel", "Alexandria"],
    ctaText: "Request Egypt Options"
  },
  {
    slug: "destinations-uae",
    name: "United Arab Emirates",
    metaTitle: "Events and Weddings in the UAE | MaraNasi",
    metaDescription: "Corporate events and luxury weddings in Dubai, Abu Dhabi, and Sharjah with premium venues, production support, and controlled execution.",
    h1: "United Arab Emirates",
    content: "The UAE offers world class venues and hospitality infrastructure suited for high value corporate events and luxury weddings. We operate across Dubai, Abu Dhabi, and Sharjah, coordinating venue options, production requirements, and guest experience flow with a premium execution standard.",
    locations: ["Dubai", "Abu Dhabi", "Sharjah"],
    ctaText: "Request UAE Options"
  },
  {
    slug: "destinations-thailand",
    name: "Thailand",
    metaTitle: "Events and Weddings in Thailand | MaraNasi",
    metaDescription: "Corporate events and destination weddings in Thailand across Bangkok, Pattaya, and Phi Phi Islands with premium venues and destination execution.",
    h1: "Thailand",
    content: "Thailand offers luxury city venues, resort scale hospitality, and iconic island experiences suitable for corporate hosting, destination weddings, and proposals. We operate across Bangkok, Pattaya, and the Phi Phi Islands, coordinating venue options and on ground execution with timing control and premium production readiness.",
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
      { q: "Do you provide full production?", a: "Yes, including lighting and sound coordination and show flow control." },
      { q: "Can you handle VIP guests and delegations?", a: "Yes, through greet and meet facilitation and routing plans." },
      { q: "Do you manage conferences and exhibitions?", a: "Yes, with full operations planning and onsite execution." },
      { q: "How early should we plan?", a: "Earlier planning improves venue options and supplier availability." }
    ]
  },
  {
    category: "Weddings and Proposals",
    questions: [
      { q: "Do you plan destination weddings end to end?", a: "Yes, including venue coordination, suppliers, and onsite delivery." },
      { q: "Can proposals be private and discreet?", a: "Yes, privacy is planned into timing and routing." },
      { q: "Do you support iconic locations?", a: "Yes, within access rules and logistical feasibility." },
      { q: "Can you plan multi day wedding weekends?", a: "Yes, with controlled movement and timeline planning." },
      { q: "Do you coordinate production?", a: "Yes, aligned with key moments and guest experience." }
    ]
  }
];
