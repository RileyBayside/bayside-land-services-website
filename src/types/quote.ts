export type ServiceType =
  | 'forestry_mulching'
  | 'block_clearing'
  | 'firebreak'
  | 'vegetation_management'
  | 'weed_control';

export type SubmissionStatus = 'new' | 'quoted' | 'won' | 'lost';

export interface ForestryMulchingDetails {
  vegetation_density: 'light' | 'medium' | 'heavy';
  large_timber: 'yes' | 'no';
  access_type: 'open' | 'restricted' | 'steep';
}

export interface BlockClearingDetails {
  vegetation_density: 'light' | 'medium' | 'heavy';
  large_timber: 'yes' | 'no';
  access_type: 'open' | 'restricted' | 'steep';
  clearing_purpose: 'house_block' | 'development' | 'farmland' | 'other';
}

export interface FirebreakDetails {
  estimated_length_m: number;
  desired_width_m: number;
  terrain: 'flat' | 'undulating' | 'steep';
  existing_firebreak: 'yes' | 'no';
}

export interface VegetationManagementDetails {
  area_type: 'council' | 'road_corridor' | 'commercial' | 'rural';
  frequency: 'one_off' | 'ongoing';
  vegetation_density: 'light' | 'medium' | 'heavy';
}

export interface WeedControlDetails {
  weed_types: string;
  combined_with_mulching: 'yes' | 'no';
}

export type JobDetails =
  | ForestryMulchingDetails
  | BlockClearingDetails
  | FirebreakDetails
  | VegetationManagementDetails
  | WeedControlDetails;

export interface Submission {
  id: string;
  created_at: string;
  status: SubmissionStatus;
  service: ServiceType;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  property_address: string;
  property_size: string;
  job_details: JobDetails;
  notes: string;
  quote_number: number | null;
  quote_amount: number | null;
  quote_notes: string | null;
  quote_sent_at: string | null;
}

export interface QuoteFormData {
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  property_address: string;
  property_size: string;
  service: ServiceType | '';
  job_details: Partial<JobDetails>;
  notes: string;
}
