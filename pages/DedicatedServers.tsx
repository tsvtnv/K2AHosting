import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CustomServerCTA } from '../components/CustomServerCTA';
import { Cpu, HardDrive, Zap, Shield, Server, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

// Full catalog matching the homepage logic (Incl. VAT + 40% rounded)
const allServers = [
  // Rise Series
  { id: 'r-1', category: 'Rise', name: 'Rise-1', cpu: 'Intel Xeon E-2274G', cores: '4c/8t - 4.0GHz', ram: '32GB DDR4', storage: '2x 500GB NVMe', bandwidth: '500 Mbps', price: '£63' },
  { id: 'r-2', category: 'Rise', name: 'Rise-2', cpu: 'AMD Ryzen 5 5600X', cores: '6c/12t - 3.7GHz', ram: '64GB DDR4', storage: '2x 500GB NVMe', bandwidth: '500 Mbps', price: '£79' },
  { id: 'r-3', category: 'Rise', name: 'Rise-3', cpu: 'AMD Ryzen 7 5800X', cores: '8c/16t - 3.8GHz', ram: '64GB DDR4', storage: '2x 960GB NVMe', bandwidth: '500 Mbps', price: '£95' },

  // Advance Series
  { id: 'a-1', category: 'Advance', name: 'Advance-1', cpu: 'AMD Ryzen 9 7900', cores: '12c/24t - 3.7GHz', ram: '64GB DDR5', storage: '2x 1TB NVMe Gen4', bandwidth: '1 Gbps', price: '£126' },
  { id: 'a-2', category: 'Advance', name: 'Advance-2', cpu: 'Intel Core i7-13700K', cores: '16c/24t - 3.4GHz', ram: '64GB DDR5', storage: '2x 1TB NVMe Gen4', bandwidth: '1 Gbps', price: '£145' },

  // Game Series
  { id: 'g-1', category: 'Game', name: 'Game-1', cpu: 'AMD Ryzen 7 5800X3D', cores: '8c/16t - 3.4GHz', ram: '64GB DDR4', storage: '2x 1TB NVMe', bandwidth: '1 Gbps', price: '£135' },
  { id: 'g-2', category: 'Game', name: 'Game-2', cpu: 'Intel Core i9-13900K', cores: '24c/32t - 3.0GHz', ram: '128GB DDR5', storage: '2x 2TB NVMe', bandwidth: '1 Gbps', price: '£195' },

  // Scale Series
  { id: 's-1', category: 'Scale', name: 'Scale-1', cpu: 'AMD EPYC 7313P', cores: '16c/32t - 3.0GHz', ram: '128GB DDR4 ECC', storage: '2x 4TB NVMe', bandwidth: '2 Gbps', price: '£250' },
  { id: 's-2', category: 'Scale', name: 'Scale-2', cpu: 'AMD EPYC 7443P', cores: '24c/48t - 2.85GHz', ram: '256GB DDR4 ECC', storage: '2x 4TB NVMe', bandwidth: '2 Gbps', price: '£365' },

  // High-Grade
  { id: 'h-1', category: 'High-Grade', name: 'HG-1', cpu: 'Dual Intel Xeon Gold 6242R', cores: '40c/80t - 3.1GHz', ram: '512GB DDR4 ECC', storage: '4x 4TB NVMe', bandwidth: '5 Gbps', price: '£645' },
];

const categories = ['All', 'Rise', 'Advance', 'Game', 'Scale', 'High-Grade'];

export const DedicatedServers: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServers = allServers.filter(server => 
    activeCategory === 'All' || server.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 selection:text-black flex flex-col">
      <Helmet>
        <title>Dedicated Servers | K2A Hosting</title>
        <meta name="description" content="Rent high-performance dedicated servers. Ryzen 7950X, EPYC 9654, and more with DDoS protection and 1Gbps unmetered bandwidth." />
      </Helmet>
      <Navbar />
      
      {/* Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-royal-900/40 via-black to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 mb-6">
             <Server size={14} className="text-gold-400" />
             <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">Bare Metal Performance</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Extreme <span className="gold-gradient-text">Power</span>.<br />
            Total Control.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Single-tenant bare metal servers deployed in minutes. 
            Experience the raw power of Ryzen 7000 series and EPYC Genoa processors.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                    ? 'bg-royal-600 text-white shadow-lg shadow-royal-600/25'
                    : 'bg-neutral-900 border border-white/5 text-gray-400 hover:bg-neutral-800 hover:text-white'
                }`}
                >
                {cat}
                </button>
            ))}
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServers.map((server) => (
            <div 
              key={server.id}
              className="relative rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-white/10 p-8 transition-all hover:-translate-y-2 hover:border-royal-500/50"
            >
              <div className="absolute top-4 right-4 text-xs font-bold text-gray-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded">
                {server.category} Series
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{server.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gold-400">{server.price}</span>
                  <span className="text-gray-500">/mo</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-royal-900/20 rounded border border-royal-500/20">
                    <Cpu className="text-royal-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Processor</div>
                    <div className="font-medium text-white">{server.cpu}</div>
                    <div className="text-xs text-gray-400">{server.cores}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                   <div className="p-2 bg-royal-900/20 rounded border border-royal-500/20">
                    <Zap className="text-royal-400 w-5 h-5" />
                   </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Memory</div>
                    <div className="font-medium text-white">{server.ram}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                   <div className="p-2 bg-royal-900/20 rounded border border-royal-500/20">
                    <HardDrive className="text-royal-400 w-5 h-5" />
                   </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Storage</div>
                    <div className="font-medium text-white">{server.storage}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                   <div className="p-2 bg-royal-900/20 rounded border border-royal-500/20">
                    <Shield className="text-royal-400 w-5 h-5" />
                   </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Network</div>
                    <div className="font-medium text-white">{server.bandwidth}</div>
                  </div>
                </div>
              </div>

              <Link 
                to={`/configure/dedicated?id=${server.id}`}
                className="w-full block text-center py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Configure Server
              </Link>
            </div>
          ))}
        </div>
      </div>

      <CustomServerCTA />
      <Footer />
    </div>
  );
};