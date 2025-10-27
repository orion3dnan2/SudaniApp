export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  photoURL?: string;
  role: 'user' | 'merchant' | 'admin';
}

export interface Store {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  category: string;
  imageUrl: string;
  bannerUrl?: string;
  ownerId: string;
  rating: number;
  location: Location;
  phone: string;
  whatsapp?: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  storeId: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  inStock: boolean;
  createdAt: Date;
}

export interface Job {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  company: string;
  location: Location;
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  type: 'full-time' | 'part-time' | 'contract';
  postedBy: string;
  contactPhone: string;
  createdAt: Date;
}

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
  addressAr: string;
  city: string;
  country: string;
}

export interface Service {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  category: string;
  imageUrl: string;
  providerId: string;
  contactPhone: string;
  whatsapp?: string;
  createdAt: Date;
}
