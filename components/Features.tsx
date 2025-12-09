import React from 'react';
import { Feature } from '../types';
import { ShieldCheck, Server, Globe, Zap, Clock, Lock, Cpu, BarChart3 } from 'lucide-react';

const features: Feature[] = [
  {
    title: 'Advanced DDoS Protection',
    description: 'All services include industry-leading mitigation to keep your infrastructure online during attacks.',
    icon: ShieldCheck,
  },
  {
    title: '24/7 Proactive Monitoring',
    description: 'Our NOC team monitors the network around the clock to ensure stability and performance.',
    icon: BarChart3,
  },
  {
    title: 'Daily Automated Backups',
    description: 'Your data is safe with us. We include daily off-site backups with all VPS plans standard.',
    icon: Clock,
  },
  {
    title: 'UK & EU Datacentres',
    description: 'Hosted in Tier-3+ facilities in London and Frankfurt for optimal European connectivity.',
    icon: Globe,
  },
  {
    title: 'Tier-1 Network Blend',
    description: 'We utilize premium carriers to provide low-latency, high-throughput connectivity.',
    icon: Server,
  },
  {
    title: 'Enterprise Hardware',
    description: 'Powered exclusively by modern AMD Ryzen, EPYC, and Intel Xeon scalable processors.',
    icon: Cpu,
  },
  {
    title: 'Instant Deployment',
    description: 'Automated provisioning means your VPS or Dedicated Server is ready in minutes.',
    icon: Zap,
  },
  {
    title: 'Secure Infrastructure',
    description: 'ISO 27001 certified facilities with biometric access control and redundant power.',
    icon: Lock,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-black relative">
       {/* Background */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-royal-900/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-2 block">The K2A Advantage</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Why Choose <span className="text-royal-500">K2A Hosting?</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We built our network for mission-critical workloads that demand reliability, speed, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-gold-500/30 hover:bg-neutral-900 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-royal-600 transition-colors">
                <feature.icon className="w-6 h-6 text-royal-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
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