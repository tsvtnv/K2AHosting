import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CustomServerCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-royal-900 to-black border-y border-royal-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Need something <span className="text-gold-400">Custom</span>?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          We don't just do standard hosting. K2A Hosting builds ANY server you can imagine. 
          Custom hardware, specific locations, or unique game configs.
        </p>
        <button 
            onClick={() => {
                navigate('/custom-quote');
                window.scrollTo(0,0);
            }}
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors shadow-xl"
        >
            <MessageSquare className="w-5 h-5" />
            Request Custom Server
        </button>
      </div>
    </section>
  );
};