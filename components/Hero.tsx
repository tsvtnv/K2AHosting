import React from 'react';
import { ArrowRight, Server, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black border-b border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-royal-900/20 via-black to-black opacity-80" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150" />
        {/* Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-royal-500/30 bg-royal-900/10 backdrop-blur-sm mb-8 animate-fade-in-up">
          <ShieldCheck className="w-4 h-4 text-gold-400" />
          <span className="text-sm font-bold text-gray-300 tracking-wide uppercase">UK-Based Enterprise Infrastructure</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-2xl">
          High-Performance <span className="text-white">UK Hosting</span><br />
          <span className="gold-gradient-text">VPS & Dedicated Servers</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400 font-light mb-12 leading-relaxed">
          Low latency, powerful hardware, fully backed up, and DDoS-protected.
          <br className="hidden md:block" />
          Deploy your workload on K2A Hosting's premium UK network today.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('vps')}
            className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold text-lg rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] flex items-center justify-center gap-2"
          >
            View VPS Plans
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => scrollToSection('dedicated')}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:border-royal-500 hover:bg-white/10 text-white font-bold text-lg rounded-lg transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <Server className="w-5 h-5 text-royal-400" />
            View Dedicated Servers
          </button>
        </div>
      </div>
    </div>
  );
};