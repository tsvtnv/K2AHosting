import React from 'react';
import { Game } from '../types';
import { Box, Gamepad2, Layers, Cpu, Globe, Zap, Plus, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const games: Game[] = [
  {
    id: 'gta',
    name: 'GTA / FiveM',
    image: 'https://picsum.photos/seed/gta/600/400', 
  },
  {
    id: 'minecraft',
    name: 'Minecraft',
    image: 'https://picsum.photos/seed/minecraft/600/400',
  },
  {
    id: 'rust',
    name: 'Rust',
    image: 'https://picsum.photos/seed/rust/600/400',
  },
  {
    id: 'ark',
    name: 'Ark: SE/SA',
    image: 'https://picsum.photos/seed/ark/600/400',
  },
  {
    id: 'redm',
    name: 'RedM',
    image: 'https://picsum.photos/seed/redm/600/400',
  },
  {
    id: 'vrchat',
    name: 'VRChat',
    image: 'https://picsum.photos/seed/vrchat/600/400',
  },
];

export const GameGrid: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="games" className="py-24 bg-neutral-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-royal-900 to-transparent"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Supported <span className="text-royal-500">Games</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Deploy your favorite game server in seconds. Optimized for high-performance gaming.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {games.map((game) => (
            <div
              key={game.id}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-gold-500/50 transition-all duration-300"
            >
              {/* Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${game.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5 text-royal-500 group-hover:text-gold-400" />
                    {game.name}
                </h3>
              </div>
            </div>
          ))}

            {/* Custom Server Card */}
            <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border-2 border-dashed border-royal-700 hover:border-gold-500 bg-royal-900/10 flex flex-col items-center justify-center transition-all duration-300 hover:bg-royal-900/20 col-span-1 sm:col-span-2 lg:col-span-2">
                <div className="p-4 rounded-full bg-royal-800/50 group-hover:bg-gold-500/20 mb-4 transition-colors">
                    <Plus className="w-8 h-8 text-royal-400 group-hover:text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Custom Server?</h3>
                <p className="text-gray-400 text-sm">We host anything.</p>
            </div>
        </div>

        <div className="flex justify-center">
            <button 
                onClick={() => {
                    navigate('/games');
                    window.scrollTo(0, 0);
                }}
                className="flex items-center gap-2 px-8 py-3 bg-neutral-900 border border-white/10 hover:border-royal-500 text-white rounded-full font-medium transition-all hover:bg-royal-900/20"
            >
                View Full Catalog
                <ArrowRight className="w-4 h-4" />
            </button>
        </div>
      </div>
    </section>
  );
};