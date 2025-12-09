import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Gamepad2, MapPin, Server, ShieldCheck, CreditCard, ArrowRight, Check } from 'lucide-react';

export const GameDeploy: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const game = searchParams.get('game') || 'Minecraft';
  const planName = searchParams.get('plan') || 'Starter';
  const price = searchParams.get('price') || '6';
  const ram = searchParams.get('ram') || '8GB';

  const [serverName, setServerName] = useState(`${game} Server`);
  const [location, setLocation] = useState('uk');

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Helmet>
        <title>Deploy {game} Server | K2A Hosting</title>
      </Helmet>
      <Navbar />

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
          Finalize <span className="text-gold-400">Deployment</span>
        </h1>
        <p className="text-gray-400 mb-10">Configure your new game server environment.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                
                {/* 1. Server Details */}
                <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-royal-600 flex items-center justify-center text-sm">1</span>
                        Identity
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-2">Server Name</label>
                            <input 
                                type="text" 
                                value={serverName}
                                onChange={(e) => setServerName(e.target.value)}
                                className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:border-royal-500 outline-none"
                                placeholder="My Awesome Server"
                            />
                        </div>
                        <div className="p-4 bg-royal-900/20 border border-royal-500/20 rounded-lg flex items-start gap-3">
                            <Gamepad2 className="text-gold-400 shrink-0 mt-1" />
                            <div>
                                <div className="font-bold text-white">Pre-Installed Software</div>
                                <div className="text-sm text-gray-400">
                                    Latest {game} build + K2A Game Panel (Pterodactyl Mod).
                                    <br/>Full root access included.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Location */}
                <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-royal-600 flex items-center justify-center text-sm">2</span>
                        Datacentre Location
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className={`cursor-pointer border rounded-xl p-4 flex items-center gap-4 transition-all ${location === 'uk' ? 'bg-royal-900/30 border-gold-500' : 'bg-black/40 border-white/10'}`}>
                            <input type="radio" name="loc" className="hidden" checked={location === 'uk'} onChange={() => setLocation('uk')} />
                            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xl">🇬🇧</div>
                            <div>
                                <div className="font-bold text-white">London, UK</div>
                                <div className="text-xs text-gray-500">Test IP: 51.x.x.x</div>
                            </div>
                            {location === 'uk' && <Check className="ml-auto text-gold-400" />}
                        </label>
                        <label className={`cursor-pointer border rounded-xl p-4 flex items-center gap-4 transition-all ${location === 'de' ? 'bg-royal-900/30 border-gold-500' : 'bg-black/40 border-white/10'}`}>
                            <input type="radio" name="loc" className="hidden" checked={location === 'de'} onChange={() => setLocation('de')} />
                            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xl">🇩🇪</div>
                            <div>
                                <div className="font-bold text-white">Frankfurt, DE</div>
                                <div className="text-xs text-gray-500">Test IP: 144.x.x.x</div>
                            </div>
                            {location === 'de' && <Check className="ml-auto text-gold-400" />}
                        </label>
                    </div>
                </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
                <div className="sticky top-24 bg-neutral-900 border border-white/10 rounded-2xl p-6 shadow-2xl">
                    <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                    
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                        <div className="w-16 h-16 rounded-xl bg-royal-600 flex items-center justify-center">
                            <Gamepad2 size={32} className="text-white" />
                        </div>
                        <div>
                            <div className="font-bold text-lg text-white">{planName} Tier</div>
                            <div className="text-gray-400">{game}</div>
                        </div>
                    </div>

                    <ul className="space-y-3 mb-6 text-sm text-gray-300">
                        <li className="flex justify-between">
                            <span>Memory Allocation</span>
                            <span className="font-bold text-white">{ram} Dedicated</span>
                        </li>
                        <li className="flex justify-between">
                            <span>vCPU Allocation</span>
                            <span className="font-bold text-white">High Priority</span>
                        </li>
                         <li className="flex justify-between">
                            <span>Disk Space</span>
                            <span className="font-bold text-white">NVMe SSD</span>
                        </li>
                         <li className="flex justify-between">
                            <span>DDoS Protection</span>
                            <span className="font-bold text-green-400">Included</span>
                        </li>
                    </ul>

                    <div className="flex justify-between items-end mb-8 pt-4 border-t border-white/10">
                        <span className="text-gray-400 font-bold">Total Monthly</span>
                        <span className="text-4xl font-display font-bold text-gold-400">£{price}<span className="text-lg text-gray-500">.00</span></span>
                    </div>

                    <button 
                        onClick={() => alert("Redirecting to stripe...")}
                        className="w-full bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-xl text-lg shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] flex items-center justify-center gap-2"
                    >
                        Checkout <ArrowRight size={20} />
                    </button>
                    
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                        <CreditCard size={14} />
                        Secure Checkout via Stripe
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};