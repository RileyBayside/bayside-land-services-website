import type { ServiceType } from '@/types/quote';

export interface FieldOption {
  value: string;
  label: string;
}

export interface QuoteField {
  key: string;
  label: string;
  type: 'radio' | 'number' | 'textarea';
  options?: FieldOption[];
  placeholder?: string;
  unit?: string;
  required: boolean;
}

export interface AreaOption {
  key: string;
  label: string;
  description: string;
}

export interface TerrainOption {
  key: string;
  label: string;
  description: string;
  image: string;
}

export const SERVICE_LABELS: Record<ServiceType, string> = {
  forestry_mulching: 'Forestry Mulching',
  block_clearing: 'Block & Land Clearing',
  firebreak: 'Firebreak Construction',
  vegetation_management: 'Vegetation Management',
  weed_control: 'Weed Control & Spraying',
};

export const SERVICE_DESCRIPTIONS: Record<ServiceType, string> = {
  forestry_mulching:
    'Dense scrub and regrowth ground into mulch on the spot — one pass, nothing to haul away.',
  block_clearing:
    'House blocks, development sites, or farmland with years of regrowth — cleared and ready.',
  firebreak:
    'Firebreaks built and maintained for rural properties, councils, and large landholdings.',
  vegetation_management:
    'Ongoing vegetation management for council land, road corridors, and commercial properties.',
  weed_control:
    'Invasive weed and noxious species control — works best paired with mulching.',
};

export const SERVICE_IMAGES: Record<ServiceType, string> = {
  forestry_mulching: '/images/services/mulching-new.jpg',
  block_clearing: '/images/services/block-clearing-new.jpg',
  firebreak: '/images/services/firebreak-new.jpg',
  vegetation_management: '/images/services/vegetation-management-new.jpg',
  weed_control: '/images/services/weed-control-new.jpg',
};

export const AREA_OPTIONS: AreaOption[] = [
  { key: '500_2000',  label: '500 – 2,000 sqm', description: 'A large suburban or semi-rural block' },
  { key: '2000_1ha',  label: '2,000 sqm – 1 ha', description: 'A small rural allotment' },
  { key: '1ha_5ha',   label: '1 ha – 5 ha',       description: 'A medium-sized rural property' },
  { key: '5ha_plus',  label: '5 ha +',             description: 'A large landholding or station' },
];

export const TERRAIN_OPTIONS: TerrainOption[] = [
  {
    key: 'flat',
    label: 'Flat',
    description: 'Level ground, easy machine access',
    image: '/images/quote/terrain-flat.jpg',
  },
  {
    key: 'undulating',
    label: 'Undulating',
    description: 'Rolling or sloped, manageable terrain',
    image: '/images/quote/terrain-undulating.jpg',
  },
  {
    key: 'steep',
    label: 'Steep',
    description: 'Significant incline or rough ground',
    image: '/images/quote/terrain-steep.jpg',
  },
  {
    key: 'restricted',
    label: 'Restricted',
    description: 'Obstacles, narrow access or tight entry',
    image: '/images/quote/terrain-restricted.jpg',
  },
];

export const SERVICE_FIELDS: Record<ServiceType, QuoteField[]> = {
  forestry_mulching: [
    {
      key: 'vegetation_density',
      label: 'Vegetation density',
      type: 'radio',
      options: [
        { value: 'light',  label: 'Light — grasses, low scrub' },
        { value: 'medium', label: 'Medium — established scrub, regrowth' },
        { value: 'heavy',  label: 'Heavy — dense vegetation, thick stems' },
      ],
      required: true,
    },
    {
      key: 'large_timber',
      label: 'Large timber present (trees over ~200mm diameter)?',
      type: 'radio',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no',  label: 'No' },
      ],
      required: true,
    },
  ],
  block_clearing: [
    {
      key: 'vegetation_density',
      label: 'Vegetation density',
      type: 'radio',
      options: [
        { value: 'light',  label: 'Light — grasses, low scrub' },
        { value: 'medium', label: 'Medium — established scrub, regrowth' },
        { value: 'heavy',  label: 'Heavy — dense vegetation, thick stems' },
      ],
      required: true,
    },
    {
      key: 'large_timber',
      label: 'Large timber present (trees over ~200mm diameter)?',
      type: 'radio',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no',  label: 'No' },
      ],
      required: true,
    },
    {
      key: 'clearing_purpose',
      label: 'What is the block being cleared for?',
      type: 'radio',
      options: [
        { value: 'house_block',  label: 'House block / residential build' },
        { value: 'development', label: 'Development / subdivision' },
        { value: 'farmland',    label: 'Farmland / rural use' },
        { value: 'other',       label: 'Other' },
      ],
      required: true,
    },
  ],
  firebreak: [
    {
      key: 'estimated_length_m',
      label: 'Estimated firebreak length',
      type: 'number',
      placeholder: 'e.g. 500',
      unit: 'metres',
      required: true,
    },
    {
      key: 'desired_width_m',
      label: 'Required cleared width',
      type: 'number',
      placeholder: 'e.g. 6',
      unit: 'metres',
      required: true,
    },
    {
      key: 'existing_firebreak',
      label: 'Is this an existing firebreak requiring maintenance?',
      type: 'radio',
      options: [
        { value: 'yes', label: 'Yes — existing firebreak' },
        { value: 'no',  label: 'No — new construction' },
      ],
      required: true,
    },
  ],
  vegetation_management: [
    {
      key: 'area_type',
      label: 'Area type',
      type: 'radio',
      options: [
        { value: 'council',       label: 'Council land' },
        { value: 'road_corridor', label: 'Road corridor' },
        { value: 'commercial',    label: 'Commercial property' },
        { value: 'rural',         label: 'Rural / private land' },
      ],
      required: true,
    },
    {
      key: 'frequency',
      label: 'Frequency',
      type: 'radio',
      options: [
        { value: 'one_off',  label: 'One-off job' },
        { value: 'ongoing', label: 'Ongoing / scheduled maintenance' },
      ],
      required: true,
    },
    {
      key: 'vegetation_density',
      label: 'Current vegetation density',
      type: 'radio',
      options: [
        { value: 'light',  label: 'Light — grasses, low scrub' },
        { value: 'medium', label: 'Medium — established scrub, regrowth' },
        { value: 'heavy',  label: 'Heavy — dense vegetation, thick stems' },
      ],
      required: true,
    },
  ],
  weed_control: [
    {
      key: 'weed_types',
      label: 'Describe the weeds / species to be treated',
      type: 'textarea',
      placeholder: 'e.g. lantana, camphor laurel, cats claw creeper...',
      required: true,
    },
    {
      key: 'combined_with_mulching',
      label: 'Will this be combined with a mulching job?',
      type: 'radio',
      options: [
        { value: 'yes', label: 'Yes — part of a mulching job' },
        { value: 'no',  label: 'No — weed control only' },
      ],
      required: true,
    },
  ],
};
