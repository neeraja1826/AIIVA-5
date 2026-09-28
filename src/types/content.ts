export type ProductFilter = 'Lighting' | 'Fan' | 'Multi-Channel' | 'Controls';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  capabilities: string[];
  filters: ProductFilter[];
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  image?: string;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  focus: string[];
  photo?: string;
}

export interface Project {
  id: string;
  name: string;
  location?: string;
  type?: string;
  image?: string;
  summary?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context?: string;
}

export interface TextItem {
  title: string;
  description: string;
}

export interface Solution extends TextItem {
  image?: string;
}

export interface Hotspot {
  id: string;
  room: string;
  system: string;
  description: string;
  x: number;
  y: number;
}

export interface Scene {
  id: string;
  title: string;
  actions: string[];
  image: string;
  filter: string;
}

export interface Segment {
  title: string;
  items: string[];
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}