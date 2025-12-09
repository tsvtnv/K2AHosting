import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CustomServerCTA } from '../components/CustomServerCTA';
import { Cpu, HardDrive, Zap, Shield, Server, ArrowRight } from 'lucide-react';

const dedicatedPlans = [
  {
    id: 'entry',
    name: 'Ryzen 5950X Entry',
    cpu: 'AMD Ryzen 9 5950X',
    cores: '16 Cores / 32 Threads',
    ram: '64GB DDR4 ECC',
    storage: '2x 1TB NVMe Gen4',
    bandwidth: '1Gbps Unmetered',
    price: '£89.99',
    stock: true
  },
  {
    id: 'mid',
    name: 'Ryzen 7950X Beast',
    cpu: 'AMD Ryzen 9 7950X',
    cores: '16 Cores / 32 Threads',
    ram: '128GB DDR5 ECC',
    storage: '2x 2TB NVMe Gen5',
    bandwidth: '1Gbps Unmetered',
    price: '£149.99',
    stock: true,
    featured: true
  },
  {
    id: 'high',
    name: 'EPYC 9654 Enterprise',
    cpu: 'AMD EPYC 9654',
    cores: '96 Cores / 192 Threads',
    ram: '256GB DDR5 ECC',
    storage: '4x 4TB NVMe Gen5',
    bandwidth: '10Gbps Unmetered',
    price: '£499.99',
    stock: false
  }
];

export const DedicatedServers: React.FC = () => {
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
        </div>
      </div>

      {/* Plans */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dedicatedPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative rounded-2xl bg-neutral-900/50 backdrop-blur-sm border p-8 transition-all hover:-translate-y-2 ${
                plan.featured 
                ? 'border-gold-500 shadow-[0_0_50px_rgba(255,215,0,0.15)]' 
                : 'border-white/10 hover:border-royal-500/50'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gold-400">{plan.price}</span>
                  <span className="text-gray-500">/mo</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Cpu className="text-royal-400 w-5 h-5" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Processor</div>
                    <div className="font-medium text-white">{plan.cpu}</div>
                    <div className="text-xs text-gray-400">{plan.cores}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Zap className="text-royal-400 w-5 h-5" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Memory</div>
                    <div className="font-medium text-white">{plan.ram}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <HardDrive className="text-royal-400 w-5 h-5" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Storage</div>
                    <div className="font-medium text-white">{plan.storage}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Shield className="text-royal-400 w-5 h-5" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Network</div>
                    <div className="font-medium text-white">{plan.bandwidth}</div>
                  </div>
                </div>
              </div>

              <button 
                className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                  plan.stock 
                  ? 'bg-royal-600 hover:bg-royal-500 text-white' 
                  : 'bg-neutral-800 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!plan.stock}
              >
                {plan.stock ? (
                  <>Configure Server <ArrowRight size={16} /></>
                ) : (
                  'Out of Stock'
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      <CustomServerCTA />
      <Footer />
    </div>
  );
};