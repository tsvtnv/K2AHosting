import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

export const WebDesignCTA: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden border-y border-white/5 bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-royal-900/40 via-black to-royal-900/40 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-3xl bg-neutral-900/50 border border-royal-500/30 backdrop-blur-xl">
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Code2 size={14} /> Web Development
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Need a Website or <br className="hidden md:block"/>Custom Web App?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Professional UK Web Design & Development — powered by TsvWeb. 
              We build high-performance frontends and complex backend systems.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a 
              href="https://tsvweb.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:-translate-y-1"
            >
              Visit TsvWeb.co.uk
              <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};