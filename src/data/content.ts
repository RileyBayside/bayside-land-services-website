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
      'Our core speciality. Specialised mulchers convert dense scrub, regrowth, and unwanted vegetation into fine mulch in a single pass — no burning, no green waste removal, no site damage. Faster, cleaner, and better for the environment than traditional clearing.',
    image: '/images/services/mulching.png',
  },
  {
    title: 'Block & Land Clearing',
    description:
      'Full site preparation for residential, commercial, and agricultural blocks. We clear everything from light regrowth to heavy scrub and fallen timber, leaving a clean, trafficable site ready for your next stage.',
    image: '/images/services/land-clearing.jpg',
  },
  {
    title: 'Firebreak Construction',
    description:
      'Design, construction, and ongoing maintenance of firebreaks for councils, rural properties, and large estates. Correctly positioned, cleared to regulatory standards, and maintained year-round for maximum bushfire protection.',
    image: '/images/services/firebreak.jpg',
  },
  {
    title: 'Vegetation Management',
    description:
      'Ongoing control of regrowth, invasive scrub, and unwanted vegetation across council reserves, road corridors, and commercial properties — using mulching equipment to leave a clean finish without removal costs.',
    image: '/images/services/open-space.jpg',
  },
  {
    title: 'Weed Control & Spraying',
    description:
      'Targeted control of invasive and noxious species across cleared and mulched sites. Integrated with our mulching services for a complete land management solution with minimal environmental impact.',
    image: '/images/services/weed-control.jpg',
  },
  {
    title: 'Council & Government Contracts',
    description:
      'Experienced in managing long-term vegetation and land clearing contracts for local councils and government agencies. ISO-certified, fully insured, and set up for compliance-heavy procurement processes.',
    image: '/images/services/contract.jpg',
  },
] as const;

export const CERTIFICATIONS = [
  {
    code: 'ISO 14001',
    name: 'Environmental Management',
    description: 'Certified environmental management systems ensuring minimal ecological impact across all mulching and clearing operations.',
    badge: '/images/iso/ems.jpg',
  },
  {
    code: 'ISO 45001',
    name: 'Occupational Health & Safety',
    description: 'Internationally benchmarked workplace health and safety standards for every operator and site we work on.',
    badge: '/images/iso/45001.jpg',
  },
  {
    code: 'ISO 9001',
    name: 'Quality Management',
    description: 'Consistent service delivery and continuous improvement across all forestry mulching and land clearing operations.',
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
    'Bayside Land Services specialises in forestry mulching and land clearing across South-East Queensland. Using purpose-built forestry mulchers, we convert dense scrub, thick regrowth, and unwanted vegetation into fine mulch in a single pass — no burning, no green waste disposal, minimal ground disturbance.',
  paragraph2:
    'With over 30 years delivering land clearing and vegetation management for councils, government agencies, developers, and private landowners, we bring ISO-certified professionalism to every job — from small acreage blocks to large-scale clearing and firebreak contracts across SEQ.',
} as const;
