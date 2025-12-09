import React from 'react';
import { Plan } from '../types';
import { Check, Star } from 'lucide-react';

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '£5.99',
    features: ['4GB RAM', '2 vCPU Cores', '50GB NVMe Storage', 'Standard Support', 'Daily Backups'],
    recommended: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '£14.99',
    features: ['12GB RAM', '4 vCPU Cores (High Priority)', '100GB NVMe Storage', 'Priority Support', 'Hourly Backups', 'Free Dedicated IP'],
    recommended: true,
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: '£29.99',
    features: ['32GB RAM', '8 vCPU Cores (Extreme)', 'Unlimited NVMe Storage', '24/7 Dedicated Agent', 'Real-time Backups', 'Free Dedicated IP', 'DDoS Advanced Shield'],
    recommended: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Simple, Transparent <span className="text-gold-400">Pricing</span>
          </h2>
          <p className="text-gray-400">Scale up or down anytime. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.recommended
                  ? 'bg-royal-900/20 border-2 border-gold-500 shadow-[0_0_40px_rgba(255,215,0,0.1)] scale-105 z-10'
                  : 'bg-neutral-900/30 border border-white/10 hover:border-royal-500/50 hover:bg-neutral-900/50'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                  <Star size={14} fill="black" /> BEST VALUE
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.recommended ? 'text-gold-400' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 p-1 rounded-full ${plan.recommended ? 'bg-gold-500/20' : 'bg-royal-800/30'}`}>
                        <Check size={14} className={plan.recommended ? 'text-gold-400' : 'text-royal-300'} />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.recommended
                    ? 'bg-gold-500 text-black hover:bg-gold-400 shadow-lg shadow-gold-500/20'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};