import React from 'react';

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface BreadcrumbItem {
  name: string;
  path?: string;
}

export interface Brand {
  name: string;
  logoUrl: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductType {
  name: string;
  description: string;
  imageUrl?: string;
  specifications?: { [key: string]: string };
}

export interface Product {
  id: string;
  name: string;
  path: string;
  tagline?: string;
  description: string;
  features: string[];
  imageUrl: string;
  overviewImageUrl?: string;
  featuresImageUrl?: string;
  brands?: Brand[];
  whyChooseUs?: WhyChooseUsItem[];
  faq?: FaqItem[];
  productTypes?: ProductType[];
  icon?: React.ComponentType<{ className?: string }>;
}

export interface ProductCategory {
  id: string;
  name: string;
  path: string;
  shortDescription: string;
  description: string;
  products: Product[];
  icon: React.ComponentType<{ className?: string }>;
  imageUrl: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  whatsapp?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  avatarUrl: string;
}
