export const BUSINESS = {
  name: 'Bayside Land Services',
  tagline: 'Queensland Forestry Mulching Specialists',
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
      'Our core speciality. Specialised Takeuchi mulchers convert dense vegetation, trees, and scrub into fine mulch in a single pass — no burning, no green waste removal, no site damage. Faster, cleaner, and better for the environment than traditional clearing.',
    image: '/images/services/mulching.png',
  },
  {
    title: 'Land Clearing',
    description:
      'Professional site preparation for development, infrastructure, or agricultural use. Precision operators, modern equipment, and full regulatory compliance.',
    image: '/images/services/land-clearing.jpg',
  },
  {
    title: 'Firebreak Maintenance',
    description:
      'Design, construction, and ongoing maintenance of firebreaks. Correctly positioned and maintained for maximum bushfire protection and compliance.',
    image: '/images/services/firebreak.jpg',
  },
  {
    title: 'Open Space Management',
    description:
      'End-to-end management of public and commercial open spaces, from large reserves to roadside corridors. Safe, compliant, and visually appealing at any scale.',
    image: '/images/services/open-space.jpg',
  },
  {
    title: 'Slashing',
    description:
      'Large-scale slashing for councils, developers, and commercial clients. High-capacity equipment manages overgrowth across open fields, road verges, and industrial sites.',
    image: '/images/services/slashing.jpg',
  },
  {
    title: 'Land Clearing',
    description:
      'Professional site preparation for development, infrastructure, or agricultural use. Precision operators, modern equipment, and full regulatory compliance.',
    image: '/images/services/land-clearing.jpg',
  },
  {
    title: 'Firebreak Maintenance',
    description:
      'Design, construction, and ongoing maintenance of firebreaks. Correctly positioned and maintained for maximum bushfire protection and compliance.',
    image: '/images/services/firebreak.jpg',
  },
  {
    title: 'Weed Control & Spraying',
    description:
      'Targeted control of invasive and noxious species using safe, effective methods. Minimised environmental impact with full regulatory compliance.',
    image: '/images/services/weed-control.jpg',
  },
  {
    title: 'Contract Management',
    description:
      'Comprehensive oversight from planning through delivery. A single point of accountability for complex, large-scale vegetation contracts.',
    image: '/images/services/contract.jpg',
  },
  {
    title: 'Mulch, Gravel & Stone',
    description:
      'Supply and installation of quality materials for erosion control, soil health, and durable finishes in high-traffic commercial landscapes.',
    image: '/images/services/stone.jpg',
  },
] as const;

export const CERTIFICATIONS = [
  {
    code: 'ISO 14001',
    name: 'Environmental Management',
    description: 'Certified environmental management systems ensuring minimal ecological impact across all operations.',
    badge: '/images/iso/ems.jpg',
  },
  {
    code: 'ISO 45001',
    name: 'Occupational Health & Safety',
    description: 'Internationally benchmarked workplace health and safety standards for every team member and site.',
    badge: '/images/iso/45001.jpg',
  },
  {
    code: 'ISO 9001',
    name: 'Quality Management',
    description: 'Consistent service delivery and continuous improvement across all areas of operations.',
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
    'Bayside Land Services specialises in forestry mulching across South-East Queensland. Using Takeuchi forestry mulchers, we convert dense scrub, regrowth, and unwanted vegetation into fine mulch in a single pass — no burning, no green waste disposal, minimal ground disturbance.',
  paragraph2:
    'With over 30 years delivering vegetation management for councils, government agencies, and commercial clients, we bring ISO-certified professionalism to every job — from small acreage blocks to large-scale land clearing and firebreak contracts.',
} as const;
