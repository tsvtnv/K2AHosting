import { LucideIcon } from 'lucide-react';

export interface Game {
  id: string;
  name: string;
  image: string;
  icon?: LucideIcon;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}