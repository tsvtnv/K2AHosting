import React from 'react';
import { Step } from '../types';

const steps: Step[] = [
  {
    number: 1,
    title: 'Choose Your Game',
    description: 'Select from our wide library of supported titles or request a custom setup.',
  },
  {
    number: 2,
    title: 'Select Your Plan',
    description: 'Pick the performance tier that matches your player count and mod needs.',
  },
  {
    number: 3,
    title: 'Instant Deploy',
    description: 'Our automated systems build your container and allocate resources instantly.',
  },
  {
    number: 4,
    title: 'Start Your World',
    description: 'Access the control panel, invite friends, and start playing immediately.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                How It <span className="text-royal-500">Works</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-royal-900 via-royal-600 to-royal-900 -z-10 opacity-30"></div>

          {steps.map((step) => (
            <div key={step.number} className="relative pt-8">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-royal-700 flex items-center justify-center text-2xl font-bold text-gold-400 shadow-[0_0_15px_rgba(120,81,169,0.2)] mb-6 z-10 relative">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};