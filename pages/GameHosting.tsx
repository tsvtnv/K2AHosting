import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Gamepad2, Zap, Shield, Cpu, ArrowRight, Calculator, Sliders, Server, AlertTriangle } from 'lucide-react';

const games = [
    { id: 'minecraft', name: 'Minecraft (Java/Bedrock)', ramPerPlayer: 0.1, baseRam: 2 },
    { id: 'fivem', name: 'FiveM (GTA V)', ramPerPlayer: 0.2, baseRam: 4 },
    { id: 'rust', name: 'Rust', ramPerPlayer: 0.15, baseRam: 8 },
    { id: 'ark', name: 'Ark: Survival Ascended', ramPerPlayer: 0.25, baseRam: 12 },
    { id: 'palworld', name: 'Palworld', ramPerPlayer: 0.2, baseRam: 10 },
    { id: 'cs2', name: 'Counter-Strike 2', ramPerPlayer: 0.05, baseRam: 4 },
];

export const GameHosting: React.FC = () => {
  const navigate = useNavigate();
  
  // Calculator State
  const [selectedGame, setSelectedGame] = useState(games[0]);
  const [playerCount, setPlayerCount] = useState(20);
  const [modLevel, setModLevel] = useState<'vanilla' | 'light' | 'heavy'>('vanilla');
  const [recommendation, setRecommendation] = useState<any>(null);

  // Recalculate recommendation whenever inputs change
  useEffect(() => {
    let modMultiplier = 1;
    if (modLevel === 'light') modMultiplier = 1.5;
    if (modLevel === 'heavy') modMultiplier = 2.5;

    // Estimate RAM Requirement (GB)
    const estimatedRam = (selectedGame.baseRam + (playerCount * selectedGame.ramPerPlayer)) * modMultiplier;
    
    // Determine Plan
    let plan = null;

    if (estimatedRam <= 8) {
        plan = { name: 'Starter', ram: '8GB', price: 6, type: 'vps' };
    } else if (estimatedRam <= 16) {
        plan = { name: 'Pro', ram: '16GB', price: 18, type: 'vps' };
    } else if (estimatedRam <= 32) {
        plan = { name: 'Ultimate', ram: '32GB', price: 32, type: 'vps' };
    } else if (estimatedRam <= 64) {
        plan = { name: 'VPS-6', ram: '64GB', price: 62, type: 'vps' };
    } else {
        plan = { name: 'Dedicated Server', ram: '64GB+', price: 79, type: 'dedicated' };
    }

    setRecommendation({
        ...plan,
        estimatedRam: Math.ceil(estimatedRam)
    });

  }, [selectedGame, playerCount, modLevel]);

  const handleDeploy = () => {
    if (recommendation.type === 'dedicated') {
        navigate('/dedicated-servers');
    } else {
        navigate(`/game-deploy?game=${encodeURIComponent(selectedGame.name)}&plan=${recommendation.name}&price=${recommendation.price}&ram=${recommendation.ram}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Helmet>
        <title>Game Server Hosting | K2A Hosting</title>
        <meta name="description" content="High-performance game hosting for FiveM, Minecraft, Rust, and more. Use our calculator to find the perfect plan." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-16 relative overflow-hidden bg-black">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-royal-900/30 via-black to-black" />
         <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-royal-500/30 bg-royal-900/20 backdrop-blur-sm mb-8">
                <Gamepad2 className="w-4 h-4 text-gold-400" />
                <span className="text-sm font-bold text-white tracking-wide">Powered by K2A VPS Infrastructure</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                Game Hosting <span className="text-royal-500">Evolved</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                Deploy your own world on our enterprise hardware. 
                <br/>Full root access, dedicated resources, and instant setup.
            </p>
         </div>
      </div>

      {/* Calculator Section */}
      <section className="pb-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-neutral-900/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    
                    {/* Controls */}
                    <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-royal-600 flex items-center justify-center text-white">
                                <Calculator size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">Resource Calculator</h2>
                                <p className="text-gray-400 text-sm">Find the perfect plan for your community.</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {/* Game Select */}
                            <div>
                                <label className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">Select Game</label>
                                <select 
                                    className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:border-royal-500 outline-none text-lg"
                                    value={selectedGame.id}
                                    onChange={(e) => setSelectedGame(games.find(g => g.id === e.target.value) || games[0])}
                                >
                                    {games.map(g => (
                                        <option key={g.id} value={g.id}>{g.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Player Slider */}
                            <div>
                                <div className="flex justify-between mb-3">
                                    <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Player Slots</label>
                                    <span className="text-gold-400 font-bold text-lg">{playerCount} Players</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="2" 
                                    max="200" 
                                    step="2"
                                    value={playerCount}
                                    onChange={(e) => setPlayerCount(parseInt(e.target.value))}
                                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>2</span>
                                    <span>200+</span>
                                </div>
                            </div>

                            {/* Mods */}
                            <div>
                                <label className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">Mod/Script Load</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {['vanilla', 'light', 'heavy'].map((level) => (
                                        <button
                                            key={level}
                                            onClick={() => setModLevel(level as any)}
                                            className={`py-3 rounded-lg border font-medium capitalize transition-all ${
                                                modLevel === level 
                                                ? 'bg-royal-600 border-royal-500 text-white shadow-lg' 
                                                : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'
                                            }`}
                                        >
                                            {level}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recommendation */}
                    <div className="p-8 lg:p-12 bg-gradient-to-br from-royal-900/20 to-black flex flex-col justify-center relative">
                        {recommendation && (
                            <div className="text-center animate-fade-in-up">
                                <div className="inline-block p-2 rounded-full bg-gold-500/10 text-gold-400 font-bold text-xs uppercase tracking-widest mb-6 border border-gold-500/20">
                                    Recommended Configuration
                                </div>

                                {recommendation.type === 'dedicated' ? (
                                    <div className="mb-8">
                                        <Server size={64} className="mx-auto text-white mb-4" />
                                        <h3 className="text-3xl font-bold text-white mb-2">Dedicated Server</h3>
                                        <p className="text-gray-400 max-w-xs mx-auto mb-6">
                                            Your requirements exceed standard VPS limits. We recommend dedicated hardware for optimal performance.
                                        </p>
                                        <div className="text-4xl font-display font-bold text-gold-400 mb-2">£79<span className="text-lg text-gray-500">/mo</span></div>
                                    </div>
                                ) : (
                                    <div className="mb-8">
                                        <div className="relative inline-block mb-6">
                                            <div className="absolute inset-0 bg-gold-500 blur-2xl opacity-20"></div>
                                            <Cpu size={80} className="relative z-10 text-white" />
                                        </div>
                                        <h3 className="text-4xl font-bold text-white mb-2">{recommendation.name} Plan</h3>
                                        <div className="flex justify-center gap-4 text-sm text-gray-300 mb-6">
                                            <span className="flex items-center gap-1"><Zap size={14} className="text-gold-400"/> {recommendation.ram} RAM</span>
                                            <span className="flex items-center gap-1"><Shield size={14} className="text-green-400"/> Protected</span>
                                        </div>
                                        <div className="text-5xl font-display font-bold text-gold-400 mb-2">£{recommendation.price}<span className="text-2xl text-gray-500">/mo</span></div>
                                        <p className="text-sm text-gray-500">Estimated Load: {recommendation.estimatedRam}GB RAM</p>
                                    </div>
                                )}

                                <button 
                                    onClick={handleDeploy}
                                    className="w-full max-w-xs bg-white text-black font-bold py-4 rounded-xl text-lg hover:bg-gold-400 transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.1)] hover:shadow-[0_0_50px_rgba(255,215,0,0.4)] hover:-translate-y-1"
                                >
                                    {recommendation.type === 'dedicated' ? 'View Dedicated Servers' : 'Deploy Game Server'}
                                </button>
                                
                                {recommendation.type !== 'dedicated' && (
                                    <p className="mt-6 text-xs text-gray-500">
                                        Includes K2A Game Panel (Pterodactyl) pre-installed.
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
      </section>

      {/* Templates */}
      <div className="py-20 bg-neutral-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-white mb-12">1-Click Game Templates</h2>
              <div className="flex flex-wrap justify-center gap-6">
                  {['Minecraft Java', 'FiveM', 'Rust', 'Ark: SE', 'Palworld', 'CS:2', 'Terraria'].map(game => (
                      <div key={game} className="px-6 py-3 rounded-full border border-white/10 bg-black hover:border-royal-500 text-gray-300 hover:text-white font-medium transition-colors cursor-default">
                          {game}
                      </div>
                  ))}
              </div>
          </div>
      </div>
      
      <Footer />
    </div>
  );
};