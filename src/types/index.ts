export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: string;
  image: string;
  category: 'industrial' | 'agricultural' | 'pharmaceutical' | 'specialty';
  specifications: {
    formula?: string;
    purity?: string;
    packaging?: string;
    casNumber?: string;
  };
  applications: string[];
  inStock: boolean;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
