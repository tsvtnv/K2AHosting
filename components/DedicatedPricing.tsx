import React, { useState } from 'react';
import { DedicatedCategory, DedicatedServer } from '../types';
import { Server, Cpu, HardDrive, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories: DedicatedCategory[] = [
  { id: 'rise', name: 'Rise Series', description: 'Cost-effective power for web hosting and small game servers.' },
  { id: 'advance', name: 'Advance Series', description: 'High-frequency processors for demanding workloads.' },
  { id: 'game', name: 'Game Series', description: 'Optimized for the highest single-core performance.' },
  { id: 'scale', name: 'Scale Series', description: 'Scalable infrastructure for large deployments.' },
  { id: 'high-grade', name: 'High-Grade', description: 'Mission-critical hardware with redundancy.' },
];

const servers: DedicatedServer[] = [
  // Rise
  { id: 'r-1', categoryId: 'rise', name: 'Rise-1', cpu: 'Intel Xeon E-2274G', cores: '4c/8t - 4.0GHz', ram: '32GB DDR4', storage: '2x 500GB NVMe', bandwidth: '500 Mbps', price: '£63' },
  { id: 'r-2', categoryId: 'rise', name: 'Rise-2', cpu: 'AMD Ryzen 5 5600X', cores: '6c/12t - 3.7GHz', ram: '64GB DDR4', storage: '2x 500GB NVMe', bandwidth: '500 Mbps', price: '£79' },
  { id: 'r-3', categoryId: 'rise', name: 'Rise-3', cpu: 'AMD Ryzen 7 5800X', cores: '8c/16t - 3.8GHz', ram: '64GB DDR4', storage: '2x 960GB NVMe', bandwidth: '500 Mbps', price: '£95' },

  // Advance
  { id: 'a-1', categoryId: 'advance', name: 'Advance-1', cpu: 'AMD Ryzen 9 7900', cores: '12c/24t - 3.7GHz', ram: '64GB DDR5', storage: '2x 1TB NVMe Gen4', bandwidth: '1 Gbps', price: '£126' },
  { id: 'a-2', categoryId: 'advance', name: 'Advance-2', cpu: 'Intel Core i7-13700K', cores: '16c/24t - 3.4GHz', ram: '64GB DDR5', storage: '2x 1TB NVMe Gen4', bandwidth: '1 Gbps', price: '£145' },

  // Game
  { id: 'g-1', categoryId: 'game', name: 'Game-1', cpu: 'AMD Ryzen 7 5800X3D', cores: '8c/16t - 3.4GHz', ram: '64GB DDR4', storage: '2x 1TB NVMe', bandwidth: '1 Gbps', price: '£135' },
  { id: 'g-2', categoryId: 'game', name: 'Game-2', cpu: 'Intel Core i9-13900K', cores: '24c/32t - 3.0GHz', ram: '128GB DDR5', storage: '2x 2TB NVMe', bandwidth: '1 Gbps', price: '£195' },

  // Scale
  { id: 's-1', categoryId: 'scale', name: 'Scale-1', cpu: 'AMD EPYC 7313P', cores: '16c/32t - 3.0GHz', ram: '128GB DDR4 ECC', storage: '2x 4TB NVMe', bandwidth: '2 Gbps', price: '£250' },
  { id: 's-2', categoryId: 'scale', name: 'Scale-2', cpu: 'AMD EPYC 7443P', cores: '24c/48t - 2.85GHz', ram: '256GB DDR4 ECC', storage: '2x 4TB NVMe', bandwidth: '2 Gbps', price: '£365' },

  // High-Grade
  { id: 'h-1', categoryId: 'high-grade', name: 'HG-1', cpu: 'Dual Intel Xeon Gold 6242R', cores: '40c/80t - 3.1GHz', ram: '512GB DDR4 ECC', storage: '4x 4TB NVMe', bandwidth: '5 Gbps', price: '£645' },
];

export const DedicatedPricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('rise');

  const filteredServers = servers.filter(s => s.categoryId === activeTab);
  const activeCategoryDesc = categories.find(c => c.id === activeTab)?.description;

  return (
    <section id="dedicated" className="py-24 bg-neutral-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Dedicated <span className="text-gold-400">Bare Metal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Single-tenant hardware with 100% resource dedication. No virtualization overhead.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 rounded-lg text-sm md:text-base font-bold transition-all border ${
                activeTab === cat.id
                  ? 'bg-royal-600 border-royal-500 text-white shadow-[0_0_20px_rgba(120,81,169,0.4)]'
                  : 'bg-neutral-900 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-10 animate-fade-in-up">
            <p className="text-gold-400 font-medium bg-gold-500/10 inline-block px-4 py-2 rounded-full border border-gold-500/20">
                {activeCategoryDesc}
            </p>
        </div>

        {/* Server List */}
        <div className="space-y-4">
          {filteredServers.map((server) => (
            <div 
              key={server.id}
              className="group bg-black/40 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-royal-500/50 transition-all duration-300 hover:bg-neutral-900/40"
            >
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors">{server.name}</h3>
                    <div className="hidden md:flex bg-neutral-800 text-xs px-2 py-0.5 rounded text-gray-400 border border-white/5 uppercase tracking-wider">
                        UK London
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-400 justify-center md:justify-start">
                        <Cpu size={16} className="text-royal-400" />
                        <span>{server.cpu}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 justify-center md:justify-start">
                        <Zap size={16} className="text-royal-400" />
                        <span>{server.cores}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 justify-center md:justify-start">
                        <Server size={16} className="text-royal-400" />
                        <span>{server.ram}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 justify-center md:justify-start">
                        <HardDrive size={16} className="text-royal-400" />
                        <span>{server.storage}</span>
                    </div>
                </div>
              </div>

              <div className="flex items-center gap-6 w-full md:w-auto flex-col md:flex-row border-t md:border-t-0 border-white/10 pt-6 md:pt-0">
                <div className="text-center md:text-right">
                    <div className="text-3xl font-display font-bold text-white">{server.price}</div>
                    <div className="text-xs text-gray-500">monthly incl. VAT</div>
                </div>
                <Link 
                  to={`/configure/dedicated?id=${server.id}`}
                  className="w-full md:w-auto px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap text-center"
                >
                    Configure Server
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};