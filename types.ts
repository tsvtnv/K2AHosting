import { LucideIcon } from 'lucide-react';

export interface Game {
  id: string;
  name: string;
  image: string;
  icon?: LucideIcon;
  category?: string;
}

export interface VPSPlan {
  id: string;
  name: string;
  price: string;
  specs: {
    vCores: number;
    ram: string;
    storage: string;
    bandwidth: string;
    traffic: string;
    backups: boolean;
  };
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
}

export interface DedicatedCategory {
  id: string;
  name: string;
  description: string;
}

export interface DedicatedServer {
  id: string;
  categoryId: string;
  name: string;
  cpu: string;
  cores: string;
  ram: string;
  storage: string;
  bandwidth: string;
  price: string;
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

// Configuration Types
export interface OperatingSystem {
  id: string;
  name: string;
  type: 'linux' | 'windows' | 'game';
  price: number;
}

export interface ControlPanel {
  id: string;
  name: string;
  price: number;
}

export interface Addon {
  id: string;
  name: string;
  description: string;
  price: number;
  selected?: boolean;
}

// Game Calculator
export interface GameConfig {
    gameId: string;
    players: number;
    modLevel: 'vanilla' | 'light' | 'heavy';
}