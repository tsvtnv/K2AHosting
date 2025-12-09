import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { VPSPricing } from '../components/VPSPricing';
import { CustomServerCTA } from '../components/CustomServerCTA';
import { Terminal, Database, Globe, Gamepad2, Shield, Zap, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VPSHosting: React.FC = () => {
  const useCases = [
    {
      title: 'Web Hosting',
      icon: Globe,
      description: 'Host high-traffic WordPress sites, E-commerce stores, or custom React/Node.js applications with NGINX or Apache.',
      recommended: 'VPS-2 or VPS-3',
    },
    {
      title: 'Game Servers',
      icon: Gamepad2,
      description: 'Run private game servers for Minecraft, Rust, or FiveM. Our high-clock Ryzen cores ensure lag-free TPS.',
      recommended: 'VPS-3 or VPS-4',
    },
    {
      title: 'Databases',
      icon: Database,
      description: 'Deploy MongoDB, PostgreSQL, or Redis clusters. NVMe storage provides the IOPS needed for fast queries.',
      recommended: 'VPS-3',
    },
    {
      title: 'Development & CI/CD',
      icon: Terminal,
      description: 'Host Docker containers, Jenkins pipelines, or Gitlab instances for your development team.',
      recommended: 'VPS-4 or VPS-5',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 selection:text-black flex flex-col">
      <Helmet>
        <title>Cloud VPS Hosting | K2A Hosting</title>
        <meta name="description" content="High-performance KVM VPS Hosting in the UK. NVMe storage, DDR4/DDR5 RAM, and 10Gbps networking. Starting at £6/mo." />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-royal-900/30 via-black to-black" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-royal-500 to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-royal-500/30 bg-royal-900/10 backdrop-blur-sm mb-8">
            <Zap className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-bold text-gray-300 tracking-wide uppercase">Ryzen Powered KVM Cloud</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Scalable <span className="text-royal-500">Cloud VPS</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Deploy root-access virtual servers in seconds. Built on enterprise NVMe storage and 
            protected by our Tbps-capacity DDoS mitigation shield.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
            <div className="flex items-center gap-2">
                <Shield className="text-green-500" size={18} /> Always-on DDoS Protection
            </div>
            <div className="flex items-center gap-2">
                <Layers className="text-gold-400" size={18} /> KVM Virtualization
            </div>
            <div className="flex items-center gap-2">
                <Zap className="text-royal-400" size={18} /> Instant Provisioning
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Grid */}
      <section className="py-20 bg-neutral-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-white mb-4">What can you host?</h2>
                <p className="text-gray-400">Our infrastructure is agnostic. If it runs on Linux or Windows, it runs on K2A.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {useCases.map((useCase, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-black border border-white/10 hover:border-royal-500/50 transition-all hover:-translate-y-1 group">
                        <div className="w-12 h-12 rounded-xl bg-royal-900/20 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                            <useCase.icon className="text-royal-400 group-hover:text-gold-400" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed h-20">
                            {useCase.description}
                        </p>
                        <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                            <span className="text-xs text-gray-500 uppercase font-bold">Recommended</span>
                            <span className="text-sm font-bold text-gold-400">{useCase.recommended}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Pricing Section (Reused) */}
      <VPSPricing />

      {/* Technical Deep Dive */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        The <span className="text-gold-400">Hardware</span> Behind The Cloud
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        We don't oversell, and we don't use old hardware. Every VPS node is powered by high-frequency AMD Ryzen or EPYC processors and enterprise-grade NVMe SSDs in RAID arrays.
                    </p>
                    
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 p-1 rounded-full bg-royal-900/50 text-gold-400"><ArrowRight size={14} /></div>
                            <div>
                                <strong className="text-white block">AMD Ryzen 9 & EPYC Genoa</strong>
                                <span className="text-gray-500 text-sm">Up to 5.7GHz burst speeds for single-core dominance.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 p-1 rounded-full bg-royal-900/50 text-gold-400"><ArrowRight size={14} /></div>
                            <div>
                                <strong className="text-white block">DDR5 ECC Memory</strong>
                                <span className="text-gray-500 text-sm">Error-correcting code RAM for maximum stability.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 p-1 rounded-full bg-royal-900/50 text-gold-400"><ArrowRight size={14} /></div>
                            <div>
                                <strong className="text-white block">10Gbps Network Uplinks</strong>
                                <span className="text-gray-500 text-sm">Massive throughput capacity for every node.</span>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-10">
                        <Link to="/status" className="text-white underline decoration-gold-400 underline-offset-4 hover:text-gold-400 transition-colors">
                            View Network Status &rarr;
                        </Link>
                    </div>
                </div>
                
                <div className="relative">
                    <div className="absolute inset-0 bg-royal-600/20 blur-[100px] rounded-full"></div>
                    <div className="relative bg-neutral-900 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                        <h3 className="font-bold text-white mb-6">Performance Benchmark (Geekbench 6)</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-white font-bold">K2A Hosting (Ryzen 7950X)</span>
                                    <span className="text-gold-400">3,100</span>
                                </div>
                                <div className="h-4 bg-neutral-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gold-500 w-full"></div>
                                </div>
                            </div>
                            
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-400">Competitor A (Xeon Gold)</span>
                                    <span className="text-gray-500">1,450</span>
                                </div>
                                <div className="h-4 bg-neutral-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-royal-800 w-[45%]"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-400">Competitor B (Standard Cloud)</span>
                                    <span className="text-gray-500">980</span>
                                </div>
                                <div className="h-4 bg-neutral-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gray-700 w-[30%]"></div>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-6 text-center">Single-core performance score. Higher is better.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <CustomServerCTA />
      <Footer />
    </div>
  );
};