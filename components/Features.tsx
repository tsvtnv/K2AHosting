import React from 'react';
import { Feature } from '../types';
import { Cpu, ShieldCheck, Zap, Globe, Gauge, Database, Settings, Headphones } from 'lucide-react';

const features: Feature[] = [
  {
    title: 'Ultra-Fast Ryzen Hardware',
    description: 'Powered by the latest Ryzen 9 processors for extreme single-core performance.',
    icon: Cpu,
  },
  {
    title: 'DDoS Protection',
    description: 'Advanced mitigation strategies keep your server online during attacks.',
    icon: ShieldCheck,
  },
  {
    title: 'Instant Deployment',
    description: 'Your server is online and ready to play seconds after payment.',
    icon: Zap,
  },
  {
    title: 'Global Locations',
    description: 'Low latency servers available in NA, EU, and Asia regions.',
    icon: Globe,
  },
  {
    title: '99.99% Uptime',
    description: 'Enterprise-grade infrastructure ensures your world is always accessible.',
    icon: Gauge,
  },
  {
    title: 'NVMe Storage',
    description: 'Lightning fast read/write speeds for quick map loading and saves.',
    icon: Database,
  },
  {
    title: 'Powerful Control Panel',
    description: 'Manage files, mods, and backups with our custom-built panel.',
    icon: Settings,
  },
  {
    title: '24/7 Expert Support',
    description: 'Our team of gamers and engineers are here to help anytime.',
    icon: Headphones,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-t from-royal-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2 block">Why Choose K2A</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-400 to-royal-200">Dominance</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't settle for lag. We provide the infrastructure you need to run high-population servers seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-royal-500/50 hover:bg-neutral-900/80 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-royal-900/30 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-royal-400 group-hover:text-gold-400 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};