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
    image: '/images/services/mulching-asv.png',
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
