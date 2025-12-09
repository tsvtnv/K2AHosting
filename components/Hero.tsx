import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
         {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-royal-900/40 via-black to-black opacity-80" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-royal-500/30 bg-royal-900/20 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500"></span>
          </span>
          <span className="text-sm font-medium text-gold-300 tracking-wide uppercase">Next-Gen Performance</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6 tracking-tight">
          Premium Game Server <br />
          Hosting for <span className="gold-gradient-text">Every Game</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-light mb-10">
          GTA, Minecraft, Rust, Ark, RedM and more — <br className="hidden md:block"/>
          <strong className="text-white">K2A Hosting</strong> powers your world with enterprise-grade hardware.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold text-lg rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] flex items-center gap-2">
            Start Hosting
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-4 bg-transparent border border-neutral-700 hover:border-royal-500 text-white font-medium text-lg rounded-xl transition-all duration-200 hover:bg-royal-900/30 backdrop-blur-sm flex items-center gap-2">
            View Pricing
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
            {[
                { label: 'Uptime', value: '99.99%' },
                { label: 'Support', value: '24/7' },
                { label: 'Locations', value: 'Global' },
                { label: 'Setup', value: 'Instant' },
            ].map((stat) => (
                <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-display font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-royal-400 uppercase tracking-widest">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};