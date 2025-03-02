// Common types used across the application
export interface Product {
  name: string;
  tagline: string;
  url: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  price: string;
  features: string[];
}