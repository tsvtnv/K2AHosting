import React from 'react';
import { VPSPlan } from '../types';
import { Check, Cpu, HardDrive, Network, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const vpsPlans: VPSPlan[] = [
  {
    id: 'vps-1',
    name: 'VPS-1',
    price: '£6',
    specs: {
      vCores: 4,
      ram: '8GB RAM',
      storage: '75GB NVMe',
      bandwidth: '400 Mbps',
      traffic: 'Unlimited',
      backups: true
    }
  },
  {
    id: 'vps-2',
    name: 'VPS-2',
    price: '£9',
    specs: {
      vCores: 4,
      ram: '8GB RAM',
      storage: '100GB NVMe',
      bandwidth: '500 Mbps',
      traffic: 'Unlimited',
      backups: true
    }
  },
  {
    id: 'vps-3',
    name: 'VPS-3',
    price: '£18',
    specs: {
      vCores: 8,
      ram: '16GB RAM',
      storage: '150GB NVMe',
      bandwidth: '1 Gbps',
      traffic: 'Unlimited',
      backups: true
    }
  },
  {
    id: 'vps-4',
    name: 'VPS-4',
    price: '£32',
    specs: {
      vCores: 8,
      ram: '32GB RAM',
      storage: '300GB NVMe',
      bandwidth: '2 Gbps',
      traffic: 'Unlimited',
      backups: true
    }
  },
  {
    id: 'vps-5',
    name: 'VPS-5',
    price: '£47',
    specs: {
      vCores: 16,
      ram: '64GB RAM',
      storage: '500GB NVMe',
      bandwidth: '2 Gbps',
      traffic: 'Unlimited',
      backups: true
    }
  },
  {
    id: 'vps-6',
    name: 'VPS-6',
    price: '£62',
    specs: {
      vCores: 16,
      ram: '64GB RAM',
      storage: '1TB NVMe',
      bandwidth: '4 Gbps',
      traffic: 'Unlimited',
      backups: true
    }
  }
];

export const VPSPricing: React.FC = () => {
  return (
    <section id="vps" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Cloud <span className="text-royal-500">VPS Hosting</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            High-availability virtual private servers hosted in our London datacentre.
            <br />VAT included in all prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vpsPlans.map((plan) => (
            <div 
              key={plan.id}
              className="group relative bg-neutral-900/50 border border-white/10 rounded-2xl p-8 hover:border-royal-500/50 hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                    <span className="text-gray-500 text-sm">/mo</span>
                  </div>
                </div>
                <div className="p-3 bg-royal-900/20 rounded-lg border border-royal-500/20 group-hover:bg-gold-500/10 group-hover:border-gold-500/20 transition-all">
                  <Cpu className="w-6 h-6 text-royal-400 group-hover:text-gold-400" />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-300 font-medium">{plan.specs.vCores} vCores</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="w-4 h-1 bg-gray-600 rounded-full" />
                  </div>
                  <span className="text-gray-300 font-medium">{plan.specs.ram}</span>
                </div>
                <div className="flex items-center gap-3">
                  <HardDrive className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-300 font-medium">{plan.specs.storage}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Network className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-300 font-medium">{plan.specs.bandwidth} Bandwidth</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300 font-medium">{plan.specs.backups ? 'Daily Backups Included' : 'No Backups'}</span>
                </div>
              </div>

              <Link 
                to={`/configure/vps?plan=${plan.id}`}
                className="block w-full text-center py-3 bg-white/5 border border-white/10 hover:bg-royal-600 hover:border-royal-500 text-white font-bold rounded-lg transition-all duration-200 shadow-lg group-hover:shadow-royal-500/20"
              >
                Configure VPS
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};