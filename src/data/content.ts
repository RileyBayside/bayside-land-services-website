export const BUSINESS = {
  name: 'Bayside Land Services',
  tagline: 'Forestry Mulching & Land Clearing Specialists',
  address: '135 Railway Parade, Thorneside, QLD 4158',
  phone: '3207 3510',
  email: 'riley@baysideslashing.com.au',
  established: '30+',
  region: 'Redlands, Moreton Bay & South-East Queensland',
} as const;

export const SERVICES = [
  {
    title: 'Forestry Mulching',
    description:
      'We take scrub, regrowth, and dense vegetation and grind it into mulch on the spot — one pass, nothing to haul away, no burning. Faster and cleaner than traditional clearing, and leaves the ground covered rather than bare.',
    image: '/images/services/takeuchi.png',
  },
  {
    title: 'Block & Land Clearing',
    description:
      'Whether it\'s a house block, a development site, or farmland with years of regrowth — we\'ll get it cleared. Light scrub to heavy timber, we leave the site clean and ready to work on.',
    image: '/images/services/land-clearing.png',
  },
  {
    title: 'Firebreak Construction',
    description:
      'We build and maintain firebreaks for rural properties, councils, and large landholdings. Cleared to the right width and maintained through the season so they actually work when you need them.',
    image: '/images/services/firebreak.png',
  },
  {
    title: 'Vegetation Management',
    description:
      'Regrowth doesn\'t stop, so neither do we. We manage ongoing vegetation on council land, road corridors, and commercial properties — mulching it back rather than cutting and removing.',
    image: '/images/services/vegetation-management.png',
  },
  {
    title: 'Weed Control & Spraying',
    description:
      'We control invasive weeds and noxious species on cleared and mulched sites. Works best paired with mulching — we can handle both as part of the same job.',
    image: '/images/services/weed-spraying.png',
  },
] as const;

export const CERTIFICATIONS = [
  {
    code: 'ISO 14001',
    name: 'Environmental Management',
    description: 'Certified to international environmental standards — so you can be confident our clearing and mulching work is done with proper care for the land.',
    badge: '/images/iso/ems.jpg',
  },
  {
    code: 'ISO 45001',
    name: 'Occupational Health & Safety',
    description: 'Everyone on our sites works under a certified safety system. No cowboys, no shortcuts — just a crew that goes home safely every day.',
    badge: '/images/iso/45001.jpg',
  },
  {
    code: 'ISO 9001',
    name: 'Quality Management',
    description: 'We document how we work and hold ourselves to it. Jobs get done properly, every time.',
    badge: '/images/iso/qms.jpg',
  },
] as const;

export const NAV_LINKS = ['About', 'Services', 'Gallery', 'Credentials', 'Contact'] as const;

export const STATS = [
  { value: '30+', label: 'Years Experience' },
  { value: 'ISO', label: 'Certified' },
  { value: 'SEQ', label: 'Coverage' },
] as const;

export const ABOUT = {
  paragraph1:
    'We specialise in forestry mulching and land clearing across South-East Queensland. Our machines take dense scrub, thick regrowth, and unwanted vegetation and grind it into mulch on the spot — one pass, nothing to haul away, no burning.',
  paragraph2:
    'We\'ve been doing this for over 30 years, working with councils, developers, and private landowners right across SEQ. Every job — whether it\'s a small block or a large government contract — gets the same crew, the same equipment, and the same level of care.',
} as const;

export const SERVICE_DETAILS = [
  {
    title: 'Forestry Mulching',
    image: '/images/services/takeuchi.png',
    video: '/images/services/mulching-video.mp4',
    description:
      'We take scrub, regrowth, and dense vegetation and grind it into mulch on the spot — one pass, nothing to haul away, no burning. The machinery works through heavy timber and thick understorey in a single pass, leaving the ground covered with a layer of fine mulch that protects the soil and suppresses regrowth. Faster and cleaner than traditional clearing methods.',
    bullets: [
      'Dense scrub, regrowth, and thick understorey',
      'Single-pass — nothing to haul away or burn',
      'Suitable for slopes and rough terrain',
      'Leaves ground covered with a protective mulch layer',
    ],
  },
  {
    title: 'Block & Land Clearing',
    image: '/images/services/land-clearing.png',
    video: '/images/services/block-clearing-video.mp4',
    description:
      "Whether it's a development site, farmland with years of regrowth, or a large rural block — we'll get it cleared and leave it ready to work on. Light scrub through to heavy timber, our machines handle it in a single pass with no burning and no green waste removal required.",
    bullets: [
      'Development sites, rural blocks, and farmland',
      'Light scrub to heavy timber',
      'No burning or green waste removal required',
      'Site left clean and ready to build or use',
    ],
  },
  {
    title: 'Firebreak Construction',
    image: '/images/services/firebreak.png',
    video: '/images/services/firebreak-video.mp4',
    description:
      'We build and maintain firebreaks for rural properties, large landholdings, and councils. Cleared to the correct width for your requirements and maintained through the fire season so they actually work when you need them. We understand the regulations and build to them.',
    bullets: [
      'Cleared to regulation width and specification',
      'Rural properties, large landholdings, and councils',
      'Seasonal maintenance programs available',
      'Government and council contract experience',
    ],
  },
  {
    title: 'Vegetation Management',
    image: '/images/services/vegetation-management.png',
    video: '/images/services/vegetation-management-video.mp4',
    description:
      "Regrowth doesn't stop, so neither do we. We manage ongoing vegetation on council land, road corridors, and commercial properties on a recurring basis — mulching it back in place rather than cutting and removing. More efficient, better for the soil, and no green waste to deal with.",
    bullets: [
      'Road corridors and council-managed land',
      'Commercial and industrial properties',
      'Mulching in place — no cut-and-remove',
      'Ongoing management programs available',
    ],
  },
  {
    title: 'Weed Control & Spraying',
    image: '/images/services/weed-spraying.png',
    video: '/images/services/weed-control-video.mp4',
    description:
      "We control invasive weeds and noxious species on cleared and mulched sites using licensed operators and appropriate chemistry. Works best as part of an integrated program with mulching — we can schedule both as part of the same job so you're not paying two mobilisation costs.",
    bullets: [
      'Invasive and noxious weed species',
      'Licensed chemical operators',
      'Works best paired with mulching',
      "Combined jobs available — one mobilisation cost",
    ],
  },
] as const;

export const FAQS = [
  {
    q: 'Do you work on small residential blocks?',
    a: "No — we only service larger blocks. Our machinery is purpose-built for larger-scale clearing work, and the mobilisation costs don't make sense for small suburban jobs. If you have a small residential block, we're not the right fit and would recommend looking for a local garden or yard service.",
  },
  {
    q: "What's the difference between forestry mulching and slashing?",
    a: "Slashing cuts vegetation at the surface and leaves it lying. Mulching grinds it completely — stems, trunks, and near-surface roots — and leaves a layer of fine mulch across the ground. It's far more thorough, suppresses regrowth better, and doesn't leave debris that needs removing or burning.",
  },
  {
    q: 'What happens to the mulch after clearing?',
    a: "It stays on-site. The mulch layer acts as ground cover — protecting the soil from erosion, retaining moisture, and suppressing weed regrowth. There's nothing to haul away and no burning required.",
  },
  {
    q: 'Do you handle council permits or vegetation clearing approvals?',
    a: "No — that's the client's responsibility. If your clearing work requires an approval or vegetation clearing permit, you'll need to have that in place before we start. We're happy to advise on what you might need, but we don't lodge applications on your behalf.",
  },
  {
    q: 'What areas do you service?',
    a: "We work across Redlands, Moreton Bay, and broader South-East Queensland. If you're unsure whether your location is within our service area, give us a call.",
  },
  {
    q: 'Do you work with local councils and government?',
    a: 'Yes. We hold contracts with council and government organisations across SEQ, including Redland City Council, SEQ Water, and the Queensland Government.',
  },
  {
    q: 'How far in advance should I book?',
    a: "It varies by season — demand for firebreak work peaks during dry weather and we get booked up quickly. Get in touch as early as you can and we'll give you a realistic timeframe.",
  },
  {
    q: 'Can you handle weed spraying and mulching in one visit?',
    a: "Yes. Spraying and mulching work well together — we can schedule both as part of the same job so you're not paying for two separate mobilisations.",
  },
] as const;

export const CLIENTS = [
  {
    name: 'Redland City Council',
    logo: '/images/clients/redland-city-council.png',
  },
  {
    name: 'SEQ Water',
    logo: '/images/clients/seq-water.jpg',
  },
  {
    name: 'Queensland Government',
    logo: '/images/clients/queensland-government.png',
  },
] as const;

export const ACCREDITATIONS = [
  {
    title: 'Contractor Accreditation — Placeholder',
    description: 'Accreditation details to be added.',
  },
  {
    title: 'Industry Membership — Placeholder',
    description: 'Industry membership details to be added.',
  },
] as const;
