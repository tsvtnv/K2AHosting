import { LucideIcon } from 'lucide-react';

export interface Game {
  id: string;
  name: string;
  image: string;
  icon?: LucideIcon;
  category?: string;
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

export interface User {
  id: number;
  name: string;
  email: string;
  token?: string;
}

export interface Server {
  id: number;
  name: string;
  game: string;
  status: 'online' | 'offline' | 'starting' | 'stopping';
  ip: string;
  cpu: number;
  ram: number;
  disk: number;
}

export interface ServerStats {
  memory_bytes: number;
  cpu_absolute: number;
  disk_bytes: number;
  state: string;
}