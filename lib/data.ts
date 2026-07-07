export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  features: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    short: "Full kitchen renovations from design to final fixture.",
    description:
      "We handle complete kitchen transformations across Greater New Orleans, from cabinetry and countertops to plumbing, electrical, and lighting. Most projects complete in 4 to 6 weeks.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80",
    features: [
      "Custom and semi-custom cabinetry",
      "Quartz, granite, and butcher block counters",
      "Full electrical rewiring and lighting design",
      "Plumbing relocation and upgrades",
      "Flooring, tile, and backsplash installation",
      "Appliance installation and venting",
    ],
    faq: [
      {
        q: "How long does a kitchen remodel take?",
        a: "Most full kitchen remodels take 4 to 6 weeks from demolition to final walkthrough. We give you a fixed timeline in your quote and update you daily.",
      },
      {
        q: "Can I use my kitchen during the remodel?",
        a: "We set up a temporary kitchen station with your fridge and microwave in an adjacent room, and we seal the work area to keep dust contained.",
      },
      {
        q: "Do you handle permits?",
        a: "Yes. We pull all required City of New Orleans permits for electrical, plumbing, and structural work, and we schedule the inspections.",
      },
    ],
  },
  {
    slug: "roofing",
    title: "Roofing & Storm Repair",
    short: "Hurricane-rated roofing installs and insurance repair work.",
    description:
      "Louisiana weather is hard on roofs. We install architectural shingle and metal roofing systems rated for high wind, and we work directly with insurers on storm damage claims.",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80",
    features: [
      "Architectural shingle and standing-seam metal",
      "Wind-rated systems for hurricane zones",
      "Full tear-off and deck repair",
      "Insurance claim documentation and adjuster liaison",
      "Emergency tarping within 24 hours",
      "Gutter and flashing replacement",
    ],
    faq: [
      {
        q: "Do you work with my insurance company?",
        a: "Yes. We photograph and document all storm damage, provide the reports your adjuster needs, and can meet the adjuster on site.",
      },
      {
        q: "How fast can you respond after a storm?",
        a: "We offer emergency tarping within 24 hours across Greater New Orleans to prevent further water damage while your claim processes.",
      },
      {
        q: "Metal or shingle, which is better here?",
        a: "Metal lasts longer and handles wind better but costs more upfront. Architectural shingle is the budget-friendly standard. We quote both so you can compare.",
      },
    ],
  },
  {
    slug: "home-additions",
    title: "Home Additions",
    short: "Extra bedrooms, sunrooms, and second-story additions.",
    description:
      "Growing family or working from home? We design and build additions that match your existing structure, handling permits, foundation, framing, and finishing end to end.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    features: [
      "Bedroom, bathroom, and sunroom additions",
      "Second-story additions with structural engineering",
      "Foundation and slab work",
      "Seamless exterior matching to existing structure",
      "All permits and inspections handled",
      "HVAC, electrical, and plumbing extension",
    ],
    faq: [
      {
        q: "Will the addition match my existing house?",
        a: "Matching is the core of our addition work. We source siding, roofing, and trim to blend with your existing structure, especially important in New Orleans' historic districts.",
      },
      {
        q: "Do I need an architect?",
        a: "For most additions we handle design in-house with our structural engineer. Complex second-story additions may need an architect, and we can bring one in.",
      },
      {
        q: "How disruptive is the build?",
        a: "We build the shell before opening any walls into your living space, so the messy phase inside your home is kept as short as possible.",
      },
    ],
  },
  {
    slug: "bathroom-renovation",
    title: "Bathroom Renovation",
    short: "Modern bathrooms built for comfort and resale value.",
    description:
      "From walk-in showers to full primary bath suites, we renovate bathrooms with waterproofing done right the first time. Fixed quotes, no surprises.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80",
    features: [
      "Walk-in showers and freestanding tubs",
      "Full waterproofing and moisture barriers",
      "Custom vanities and storage",
      "Heated floors and towel rails",
      "Accessibility upgrades and grab bar blocking",
      "Ventilation and moisture control",
    ],
    faq: [
      {
        q: "How long does a bathroom renovation take?",
        a: "A standard full bathroom takes 2 to 3 weeks. Primary suite renovations with layout changes run 3 to 5 weeks.",
      },
      {
        q: "What about mold and water damage?",
        a: "We open up and inspect before quoting final scope. Any rot or mold found is documented, priced transparently, and fixed properly, never covered over.",
      },
      {
        q: "Can you make a bathroom wheelchair accessible?",
        a: "Yes. Curbless showers, widened doorways, comfort-height fixtures, and reinforced walls for grab bars are all standard options we build.",
      },
    ],
  },
];

export const company = {
  name: "Bayou Builders",
  phone: "(504) 555-0147",
  email: "hello@bayoubuilders.com",
  address: "2200 Magazine Street, New Orleans, LA 70130",
  tagline: "New Orleans' trusted general contractor since 2009",
  reviewUrl: "https://g.page/r/bayou-builders/review",
};

export const stats = [
  { value: "17", label: "Years in business" },
  { value: "450+", label: "Projects completed" },
  { value: "4.9", label: "Google rating" },
  { value: "A+", label: "BBB accredited" },
];

export const whyUs = [
  {
    title: "Licensed & insured",
    text: "Fully licensed Louisiana general contractor with comprehensive liability and workers' comp coverage on every job site.",
  },
  {
    title: "Fixed, honest quotes",
    text: "Detailed written quotes before work begins. No hidden costs, no surprise change orders halfway through your project.",
  },
  {
    title: "One crew, start to finish",
    text: "The team that starts your project finishes it. Your dedicated project lead is one phone call away, every day.",
  },
];

export const process = [
  {
    step: "01",
    title: "Free consultation",
    text: "We visit your home, listen to what you want, and take measurements. No cost, no obligation.",
  },
  {
    step: "02",
    title: "Design & quote",
    text: "You get a detailed scope, timeline, and fixed quote within a week. We adjust until it fits.",
  },
  {
    step: "03",
    title: "Build",
    text: "Our crew works clean and communicates daily. You always know what happens next.",
  },
  {
    step: "04",
    title: "Final walkthrough",
    text: "We walk every detail together and don't call it done until you do. Warranty included.",
  },
];

export const testimonials = [
  {
    quote:
      "They gutted and rebuilt our kitchen in five weeks flat. Showed up every day, cleaned up every evening, and the quote never moved. Rare these days.",
    name: "Marie Thibodeaux",
    location: "Garden District",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "After the storm took half our roof, Bayou Builders handled everything including the insurance paperwork. New roof in under two weeks.",
    name: "James Okafor",
    location: "Lakeview",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote:
      "The addition matches our 1940s house so well the neighbors thought it was always there. Permits, foundation, everything handled.",
    name: "Dana Broussard",
    location: "Mid-City",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export const audiences = [
  {
    id: "homeowners",
    label: "Homeowners",
    title: "Your home, treated like ours",
    text: "From a single bathroom to a whole-house renovation, we manage design, permits, and construction so you only deal with one team and one number.",
    points: [
      "Fixed written quotes before work starts",
      "Daily photo updates in our client portal",
      "2-year workmanship warranty on every project",
    ],
  },
  {
    id: "investors",
    label: "Landlords & investors",
    title: "Renovations that pencil out",
    text: "We work to your budget and your timeline, turning units fast and specifying finishes that survive tenants and maximize rent.",
    points: [
      "Unit turns in as little as 10 days",
      "Volume pricing across multiple properties",
      "Direct scheduling around tenant move-outs",
    ],
  },
  {
    id: "insurance",
    label: "Insurance claims",
    title: "Storm damage, handled end to end",
    text: "After a hurricane or flood, the last thing you need is paperwork. We document damage, deal with your adjuster, and rebuild to code.",
    points: [
      "Full photo documentation for your claim",
      "We speak directly with your adjuster",
      "Emergency tarping within 24 hours",
    ],
  },
];

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    alt: "Open-plan living room renovation",
    category: "Full renovation",
    size: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80",
    alt: "Modern white kitchen with island",
    category: "Kitchens",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    alt: "Walk-in shower with glass panel",
    category: "Bathrooms",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&q=80",
    alt: "Metal roofing installation",
    category: "Roofing",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    alt: "Backyard deck and sunroom addition",
    category: "Additions",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    alt: "Primary bedroom suite",
    category: "Additions",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    alt: "Freestanding tub installation",
    category: "Bathrooms",
    size: "small",
  },
];

export const team = [
  {
    name: "Ray Fontenot",
    role: "Founder & Master Builder",
    bio: "Third-generation New Orleans builder. Started Bayou Builders in 2009 after 15 years framing houses across the Gulf Coast.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  },
  {
    name: "Denise Alcee",
    role: "Project Manager",
    bio: "Runs every job's schedule, budget, and daily client updates. If you hire us, Denise is the voice on the phone.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  },
  {
    name: "Marcus Batiste",
    role: "Lead Carpenter",
    bio: "Twenty years of finish carpentry. The reason our cabinetry photos don't need retouching.",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=600&q=80",
  },
  {
    name: "Tom Landry",
    role: "Roofing Foreman",
    bio: "Certified in wind-rated systems. Has re-roofed half of Lakeview since Ida and answers the 24/7 storm line himself.",
    image:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=600&q=80",
  },
];

export const values = [
  {
    title: "The quote is the price",
    text: "We measure twice and quote once. Change orders only happen when you change the scope, never because we missed something.",
  },
  {
    title: "Clean sites, clear updates",
    text: "We treat your home like we live there. Daily photo updates, sealed work areas, and a broom-clean site every evening.",
  },
  {
    title: "Built for Louisiana",
    text: "Hurricane straps, moisture barriers, wind-rated everything. We build for the weather this city actually gets.",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Kitchens" | "Roofing" | "Additions" | "Bathrooms";
  location: string;
  year: string;
  duration: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "garden-district-kitchen",
    title: "Garden District shotgun kitchen",
    category: "Kitchens",
    location: "Garden District",
    year: "2026",
    duration: "5 weeks",
    description:
      "Full gut renovation of a 1920s shotgun kitchen. Custom cabinetry, quartz counters, rewired and re-plumbed, delivered two days ahead of schedule.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    featured: true,
  },
  {
    slug: "lakeview-storm-roof",
    title: "Lakeview post-storm re-roof",
    category: "Roofing",
    location: "Lakeview",
    year: "2026",
    duration: "9 days",
    description:
      "Complete tear-off and wind-rated architectural shingle system after storm damage, with full insurance documentation handled in-house.",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80",
  },
  {
    slug: "metairie-second-story",
    title: "Metairie second-story addition",
    category: "Additions",
    location: "Metairie",
    year: "2025",
    duration: "14 weeks",
    description:
      "Two bedrooms and a full bath added above the garage, engineered, permitted, and matched seamlessly to the original 1960s brick ranch.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
  },
  {
    slug: "uptown-primary-bath",
    title: "Uptown primary bath suite",
    category: "Bathrooms",
    location: "Uptown",
    year: "2025",
    duration: "4 weeks",
    description:
      "Curbless walk-in shower, freestanding tub, heated floors, and a custom double vanity in a reworked primary suite layout.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80",
  },
  {
    slug: "bywater-galley-kitchen",
    title: "Bywater galley kitchen opening",
    category: "Kitchens",
    location: "Bywater",
    year: "2025",
    duration: "6 weeks",
    description:
      "Removed a load-bearing wall to open a cramped galley kitchen into the living space, with new beam, island, and lighting plan.",
    image:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1200&q=80",
  },
  {
    slug: "gretna-metal-roof",
    title: "Gretna standing-seam metal roof",
    category: "Roofing",
    location: "Gretna",
    year: "2025",
    duration: "2 weeks",
    description:
      "Standing-seam metal system on a raised Creole cottage, rated for 140mph wind and warrantied for 40 years.",
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1200&q=80",
  },
  {
    slug: "midcity-sunroom",
    title: "Mid-City sunroom addition",
    category: "Additions",
    location: "Mid-City",
    year: "2024",
    duration: "8 weeks",
    description:
      "Glass-wrapped sunroom off the rear elevation with mini-split climate control and a deck tie-in, permitted through HDLC review.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
  },
  {
    slug: "kenner-hall-bath",
    title: "Kenner accessible hall bath",
    category: "Bathrooms",
    location: "Kenner",
    year: "2024",
    duration: "3 weeks",
    description:
      "Full accessibility conversion: curbless entry, widened doorway, comfort-height fixtures, and reinforced walls for grab bars.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=80",
  },
];