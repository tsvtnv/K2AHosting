import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CustomServerCTA } from '../components/CustomServerCTA';
import { Game } from '../types';
import { Search, Gamepad2, Filter } from 'lucide-react';

const allGames: (Game & { category: string })[] = [
  { id: 'fivem', name: 'FiveM (GTA V)', image: 'https://picsum.photos/seed/gta/600/400', category: 'Roleplay' },
  { id: 'minecraft', name: 'Minecraft', image: 'https://picsum.photos/seed/minecraft/600/400', category: 'Sandbox' },
  { id: 'rust', name: 'Rust', image: 'https://picsum.photos/seed/rust/600/400', category: 'Survival' },
  { id: 'ark', name: 'Ark: Survival Ascended', image: 'https://picsum.photos/seed/ark/600/400', category: 'Survival' },
  { id: 'redm', name: 'RedM (RDR2)', image: 'https://picsum.photos/seed/redm/600/400', category: 'Roleplay' },
  { id: 'vrchat', name: 'VRChat', image: 'https://picsum.photos/seed/vrchat/600/400', category: 'Social' },
  { id: 'palworld', name: 'Palworld', image: 'https://picsum.photos/seed/palworld/600/400', category: 'Survival' },
  { id: 'dayz', name: 'DayZ', image: 'https://picsum.photos/seed/dayz/600/400', category: 'Survival' },
  { id: 'valheim', name: 'Valheim', image: 'https://picsum.photos/seed/valheim/600/400', category: 'Survival' },
  { id: 'terraria', name: 'Terraria', image: 'https://picsum.photos/seed/terraria/600/400', category: 'Sandbox' },
  { id: 'project-zomboid', name: 'Project Zomboid', image: 'https://picsum.photos/seed/zomboid/600/400', category: 'Survival' },
  { id: '7dtd', name: '7 Days to Die', image: 'https://picsum.photos/seed/7dtd/600/400', category: 'Survival' },
  { id: 'cs2', name: 'Counter-Strike 2', image: 'https://picsum.photos/seed/cs2/600/400', category: 'FPS' },
  { id: 'garrys-mod', name: "Garry's Mod", image: 'https://picsum.photos/seed/gmod/600/400', category: 'Sandbox' },
];

const categories = ['All', 'Survival', 'Roleplay', 'Sandbox', 'FPS', 'Social'];

export const Games: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGames = allGames.filter(game => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 selection:text-black flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-royal-900/20 to-black z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Choose Your <span className="text-gold-400">Realm</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            We host the world's most popular multiplayer titles with enterprise-grade performance.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search for a game..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-neutral-900/80 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder-gray-500 focus:outline-none focus:border-royal-500 focus:ring-1 focus:ring-royal-500 backdrop-blur-sm"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-royal-600 text-white shadow-lg shadow-royal-600/25'
                    : 'bg-neutral-900 border border-white/5 text-gray-400 hover:bg-neutral-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
        <div className="flex items-center justify-between mb-8">
            <div className="text-gray-400 text-sm">
                Showing {filteredGames.length} games
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Filter size={16} /> Sort by: Popularity
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-gold-500/50 transition-all duration-300 bg-neutral-900"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${game.image})` }}
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gold-400 border border-gold-500/20">
                    {game.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                <div className="absolute -top-8 left-6 w-12 h-12 rounded-xl bg-royal-800 border-2 border-black flex items-center justify-center shadow-lg group-hover:bg-gold-500 group-hover:text-black transition-colors">
                    <Gamepad2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors mt-2 mb-1">
                    {game.name}
                </h3>
                <p className="text-sm text-gray-500">Starting from £5.99/mo</p>
                
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold text-royal-400">Deploy Now</span>
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="text-white">→</span>
                    </span>
                </div>
              </div>
            </div>
          ))}
          
          {filteredGames.length === 0 && (
             <div className="col-span-full text-center py-20 text-gray-500">
                <p>No games found matching your search.</p>
             </div>
          )}
        </div>
      </div>

      <CustomServerCTA />
      <Footer />
    </div>
  );
};