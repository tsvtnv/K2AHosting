import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowRight, Server, ShieldCheck, Zap } from 'lucide-react';

const servers = [
  { id: 'r-1', name: 'Rise-1', price: 63, spec: 'Xeon E-2274G' },
  { id: 'r-2', name: 'Rise-2', price: 79, spec: 'Ryzen 5 5600X' },
  { id: 'a-1', name: 'Advance-1', price: 126, spec: 'Ryzen 9 7900' },
  { id: 'g-1', name: 'Game-1', price: 135, spec: 'Ryzen 7 5800X3D' },
];

export const DedicatedConfig: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialId = searchParams.get('id') || 'r-1';
  
  // Find server or default to first if not found (simplified for this demo)
  const baseServer = servers.find(s => s.id === initialId) || servers[0];

  const [os, setOs] = useState('ubuntu-22');
  const [raid, setRaid] = useState('soft');
  const [bandwidth, setBandwidth] = useState('default');
  
  // Simple price calc logic for demo
  const bwPrice = bandwidth === 'pro' ? 25 : 0;
  const totalPrice = baseServer.price + bwPrice;

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Helmet>
        <title>Configure Dedicated Server | K2A Hosting</title>
      </Helmet>
      <Navbar />

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
          Configure <span className="text-gold-400">{baseServer.name}</span>
        </h1>
        <p className="text-gray-400 mb-8 flex items-center gap-2">
            <Server size={18} /> {baseServer.spec}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                
                {/* OS */}
                <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Operating System</h3>
                    <select 
                        value={os}
                        onChange={(e) => setOs(e.target.value)}
                        className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:border-royal-500 outline-none"
                    >
                        <option value="ubuntu-22">Ubuntu 22.04 LTS (Recommended)</option>
                        <option value="debian-12">Debian 12 Bookworm</option>
                        <option value="rocky-9">Rocky Linux 9</option>
                        <option value="windows-2022">Windows Server 2022 Standard (License Required)</option>
                        <option value="proxmox">Proxmox VE 8 (Virtualization)</option>
                        <option value="esxi">VMware ESXi 8.0 (Trial)</option>
                    </select>
                </div>

                {/* Disk Config */}
                <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Storage Configuration</h3>
                    <div className="space-y-3">
                         <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer ${raid === 'soft' ? 'bg-royal-900/30 border-gold-500' : 'bg-black/40 border-white/10'}`}>
                            <input type="radio" name="raid" value="soft" checked={raid === 'soft'} onChange={() => setRaid('soft')} className="accent-gold-500" />
                            <div>
                                <div className="font-bold">Software RAID (0/1)</div>
                                <div className="text-xs text-gray-500">Managed by the OS. Flexible and performant.</div>
                            </div>
                         </label>
                         <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer ${raid === 'none' ? 'bg-royal-900/30 border-gold-500' : 'bg-black/40 border-white/10'}`}>
                            <input type="radio" name="raid" value="none" checked={raid === 'none'} onChange={() => setRaid('none')} className="accent-gold-500" />
                            <div>
                                <div className="font-bold">No RAID (JBOD)</div>
                                <div className="text-xs text-gray-500">Use disks individually. Maximum capacity.</div>
                            </div>
                         </label>
                    </div>
                </div>

                 {/* Network */}
                 <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Network & Bandwidth</h3>
                    <div className="space-y-3">
                         <label className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer ${bandwidth === 'default' ? 'bg-royal-900/30 border-gold-500' : 'bg-black/40 border-white/10'}`}>
                            <div className="flex items-center gap-3">
                                <input type="radio" name="bw" value="default" checked={bandwidth === 'default'} onChange={() => setBandwidth('default')} className="accent-gold-500" />
                                <div>
                                    <div className="font-bold">Standard Network</div>
                                    <div className="text-xs text-gray-500">1 Gbps Public / Unlimited Traffic</div>
                                </div>
                            </div>
                            <span className="text-xs text-gray-400">Included</span>
                         </label>
                         <label className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer ${bandwidth === 'pro' ? 'bg-royal-900/30 border-gold-500' : 'bg-black/40 border-white/10'}`}>
                            <div className="flex items-center gap-3">
                                <input type="radio" name="bw" value="pro" checked={bandwidth === 'pro'} onChange={() => setBandwidth('pro')} className="accent-gold-500" />
                                <div>
                                    <div className="font-bold">Pro Network (Premium Routing)</div>
                                    <div className="text-xs text-gray-500">Priority traffic on premium carriers</div>
                                </div>
                            </div>
                            <span className="text-xs text-gold-400 font-bold">+£25/mo</span>
                         </label>
                    </div>
                </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
                 <div className="sticky top-24 bg-neutral-900 border border-white/10 rounded-2xl p-6 shadow-2xl">
                    <h2 className="text-2xl font-bold text-white mb-6">Server Config</h2>
                    <ul className="space-y-4 mb-6 border-b border-white/10 pb-6 text-sm">
                        <li className="flex justify-between">
                            <span className="text-gray-400">Server Model</span>
                            <span className="font-bold">{baseServer.name}</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-400">Location</span>
                            <span className="font-bold">London, UK</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-400">Setup Fee</span>
                            <span className="font-bold text-green-400">Free</span>
                        </li>
                        {bandwidth === 'pro' && (
                             <li className="flex justify-between text-gold-400">
                                <span>Pro Network</span>
                                <span>+£25.00</span>
                            </li>
                        )}
                    </ul>

                     <div className="flex justify-between items-end mb-8">
                        <span className="text-gray-400 font-bold">Total Monthly</span>
                        <span className="text-4xl font-display font-bold text-gold-400">£{totalPrice}<span className="text-lg text-gray-500">.00</span></span>
                     </div>

                    <button className="w-full bg-white text-black font-bold py-4 rounded-xl text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                        Checkout <ArrowRight size={20} />
                    </button>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                        <ShieldCheck size={14} className="text-green-500" />
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