export type Department = 'sales' | 'lettings';
export type PropertyType = 'house' | 'flat' | 'studio' | 'land';
export type PropertyStatus = 'available' | 'let_agreed' | 'sold' | 'under_offer';
export type PriceQualifier = 'OIEO' | 'OIRO' | 'POA' | 'guide_price' | 'fixed';
export type InquiryType = 'viewing' | 'info' | 'general';

export interface Property {
  id: string;
  title: string;
  address_line_1: string;
  address_line_2?: string;
  city: string;
  postcode: string;
  description: string;
  department: Department;
  property_type: PropertyType;
  price: number;
  price_qualifier?: PriceQualifier;
  rent_period?: string;
  status: PropertyStatus;
  bedrooms: number;
  bathrooms: number;
  reception_rooms?: number;
  features: string[];
  images: string[];
  main_image: string;
  floor_plan_url?: string;
  brochure_url?: string;
  epc_rating?: string;
  council_tax_band?: string;
  tenure?: string;
  lease_length?: number;
  service_charge?: number;
  ground_rent?: number;
  latitude?: number;
  longitude?: number;
  featured: boolean;
  created_at: string;
  updated_at: string;
  sold_let_date?: string;
}

export interface Inquiry {
  id: string;
  type: InquiryType;
  property_id?: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  preferred_time?: string;
  created_at: string;
  status: 'new' | 'read' | 'replied' | 'closed';
}

export interface Valuation {
  id: string;
  address: string;
  property_type?: PropertyType;
  bedrooms?: number;
  name: string;
  email: string;
  phone: string;
  best_time?: string;
  additional_info?: string;
  created_at: string;
  status: 'new' | 'contacted' | 'booked' | 'completed';
}

export interface Registration {
  id: string;
  department: Department;
  property_type?: PropertyType;
  min_bedrooms?: number;
  max_bedrooms?: number;
  min_price?: number;
  max_price?: number;
  locations?: string[];
  features?: string[];
  name: string;
  email: string;
  phone?: string;
  created_at: string;
  active: boolean;
}

export interface PropertyFilters {
  department?: Department;
  property_type?: PropertyType;
  min_bedrooms?: number;
  max_bedrooms?: number;
  min_price?: number;
  max_price?: number;
  status?: PropertyStatus;
  sort?: 'newest' | 'price_asc' | 'price_desc';
  page?: number;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
}
