import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { VPSPlan, OperatingSystem, ControlPanel, Addon } from '../types';
import { Server, ArrowRight, ShieldCheck, HardDrive, Cpu, Terminal, Network, Check } from 'lucide-react';

const vpsPlans: VPSPlan[] = [
  { id: 'vps-1', name: 'VPS-1', price: '6', specs: { vCores: 4, ram: '8GB', storage: '75GB', bandwidth: '400 Mbps', traffic: 'Unlimited', backups: true } },
  { id: 'vps-2', name: 'VPS-2', price: '9', specs: { vCores: 4, ram: '8GB', storage: '100GB', bandwidth: '500 Mbps', traffic: 'Unlimited', backups: true } },
  { id: 'vps-3', name: 'VPS-3', price: '18', specs: { vCores: 8, ram: '16GB', storage: '150GB', bandwidth: '1 Gbps', traffic: 'Unlimited', backups: true } },
  { id: 'vps-4', name: 'VPS-4', price: '32', specs: { vCores: 8, ram: '32GB', storage: '300GB', bandwidth: '2 Gbps', traffic: 'Unlimited', backups: true } },
  { id: 'vps-5', name: 'VPS-5', price: '47', specs: { vCores: 16, ram: '64GB', storage: '500GB', bandwidth: '2 Gbps', traffic: 'Unlimited', backups: true } },
  { id: 'vps-6', name: 'VPS-6', price: '62', specs: { vCores: 16, ram: '64GB', storage: '1TB', bandwidth: '4 Gbps', traffic: 'Unlimited', backups: true } },
];

const operatingSystems: OperatingSystem[] = [
  { id: 'ubuntu-22', name: 'Ubuntu 22.04 LTS', type: 'linux', price: 0 },
  { id: 'debian-12', name: 'Debian 12', type: 'linux', price: 0 },
  { id: 'alma-9', name: 'AlmaLinux 9', type: 'linux', price: 0 },
  { id: 'rocky-9', name: 'Rocky Linux 9', type: 'linux', price: 0 },
  { id: 'windows-2022', name: 'Windows Server 2022', type: 'windows', price: 10 },
  { id: 'custom-iso', name: 'Custom ISO Upload', type: 'linux', price: 0 },
];

const controlPanels: ControlPanel[] = [
  { id: 'none', name: 'No Control Panel', price: 0 },
  { id: 'cyberpanel', name: 'CyberPanel (OpenLiteSpeed)', price: 0 },
  { id: 'cpanel', name: 'cPanel Admin Cloud', price: 14 },
  { id: 'plesk', name: 'Plesk Web Admin', price: 10 },
];

export const VPSConfig: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialPlanId = searchParams.get('plan') || 'vps-1';

  const [selectedPlanId, setSelectedPlanId] = useState(initialPlanId);
  const [selectedOS, setSelectedOS] = useState(operatingSystems[0].id);
  const [selectedPanel, setSelectedPanel] = useState(controlPanels[0].id);
  
  // Addons State
  const [extraIpCount, setExtraIpCount] = useState(0);
  const [extraStorageCount, setExtraStorageCount] = useState(0);
  const [addDDoS, setAddDDoS] = useState(false);
  const [addSnapshots, setAddSnapshots] = useState(false);

  // Derived Values
  const selectedPlan = vpsPlans.find(p => p.id === selectedPlanId) || vpsPlans[0];
  const osPrice = operatingSystems.find(os => os.id === selectedOS)?.price || 0;
  const panelPrice = controlPanels.find(cp => cp.id === selectedPanel)?.price || 0;
  
  const totalPrice = 
    parseInt(selectedPlan.price) + 
    osPrice + 
    panelPrice + 
    (extraIpCount * 3) + 
    (extraStorageCount * 4) + 
    (addDDoS ? 7 : 0) + 
    (addSnapshots ? 5 : 0);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 selection:text-black flex flex-col">
      <Helmet>
        <title>Configure VPS | K2A Hosting</title>
      </Helmet>
      <Navbar />

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
          Configure Your <span className="text-gold-400">Instance</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Config Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Plan Selection */}
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-royal-600 text-white flex items-center justify-center text-sm">1</span>
                Choose Size
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {vpsPlans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedPlanId === plan.id 
                        ? 'bg-royal-900/40 border-gold-500 shadow-lg shadow-royal-900/20' 
                        : 'bg-black/40 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className={`font-bold text-lg mb-1 ${selectedPlanId === plan.id ? 'text-gold-400' : 'text-white'}`}>
                      {plan.name}
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">£{plan.price}<span className="text-sm font-normal text-gray-500">/mo</span></div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div>{plan.specs.vCores} vCores</div>
                      <div>{plan.specs.ram} RAM</div>
                      <div>{plan.specs.storage}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. OS Selection */}
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-royal-600 text-white flex items-center justify-center text-sm">2</span>
                Operating System
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {operatingSystems.map((os) => (
                  <button
                    key={os.id}
                    onClick={() => setSelectedOS(os.id)}
                    className={`p-4 rounded-xl border flex justify-between items-center transition-all ${
                      selectedOS === os.id 
                        ? 'bg-royal-900/40 border-gold-500' 
                        : 'bg-black/40 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span className="font-medium">{os.name}</span>
                    {os.price > 0 && <span className="text-xs bg-gold-500 text-black px-2 py-1 rounded font-bold">+£{os.price}</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Add-ons */}
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-royal-600 text-white flex items-center justify-center text-sm">3</span>
                Add-ons & Upgrades
              </h3>
              
              <div className="space-y-4">
                {/* Control Panel */}
                <div>
                   <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Control Panel</label>
                   <select 
                      value={selectedPanel} 
                      onChange={(e) => setSelectedPanel(e.target.value)}
                      className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 outline-none"
                   >
                     {controlPanels.map(cp => (
                       <option key={cp.id} value={cp.id}>
                         {cp.name} {cp.price > 0 ? `(+£${cp.price}/mo)` : '(Free)'}
                       </option>
                     ))}
                   </select>
                </div>

                {/* Extra IP */}
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <Network className="text-royal-400" size={20} />
                    <div>
                      <div className="font-bold">Extra IPv4 Addresses</div>
                      <div className="text-xs text-gray-500">Dedicated IPs for your instance</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setExtraIpCount(Math.max(0, extraIpCount - 1))} className="w-8 h-8 rounded bg-white/10 text-white">-</button>
                    <span className="w-4 text-center">{extraIpCount}</span>
                    <button onClick={() => setExtraIpCount(extraIpCount + 1)} className="w-8 h-8 rounded bg-white/10 text-white">+</button>
                    <span className="text-xs text-gold-400 font-bold ml-2">+£3/ea</span>
                  </div>
                </div>

                {/* Extra Storage */}
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <HardDrive className="text-royal-400" size={20} />
                    <div>
                      <div className="font-bold">Extra NVMe Storage</div>
                      <div className="text-xs text-gray-500">Additional 50GB Blocks</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setExtraStorageCount(Math.max(0, extraStorageCount - 1))} className="w-8 h-8 rounded bg-white/10 text-white">-</button>
                    <span className="w-4 text-center">{extraStorageCount}</span>
                    <button onClick={() => setExtraStorageCount(extraStorageCount + 1)} className="w-8 h-8 rounded bg-white/10 text-white">+</button>
                    <span className="text-xs text-gold-400 font-bold ml-2">+£4/ea</span>
                  </div>
                </div>

                 {/* Toggles */}
                 <label className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5 cursor-pointer hover:border-gold-500/30 transition-all">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center ${addSnapshots ? 'bg-gold-500 border-gold-500' : 'border-gray-500'}`}>
                        {addSnapshots && <Check size={14} className="text-black" />}
                      </div>
                      <div>
                        <div className="font-bold">Daily Snapshot Backups</div>
                        <div className="text-xs text-gray-500">Automated full-disk snapshots retained for 7 days</div>
                      </div>
                    </div>
                    <span className="text-xs text-gold-400 font-bold">+£5/mo</span>
                    <input type="checkbox" className="hidden" checked={addSnapshots} onChange={() => setAddSnapshots(!addSnapshots)} />
                 </label>

                 <label className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5 cursor-pointer hover:border-gold-500/30 transition-all">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-green-500" size={20} />
                      <div>
                        <div className="font-bold">Premium DDoS Protection</div>
                        <div className="text-xs text-gray-500">Layer 7 Game Mitigation (Path.net / CosmicGuard)</div>
                      </div>
                    </div>
                    <span className="text-xs text-gold-400 font-bold">+£7/mo</span>
                    <input type="checkbox" className="hidden" checked={addDDoS} onChange={() => setAddDDoS(!addDDoS)} />
                 </label>

              </div>
            </div>

          </div>

          {/* Sticky Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-neutral-900 border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 border-b border-white/10 pb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Base Plan ({selectedPlan.name})</span>
                  <span className="font-bold">£{selectedPlan.price}.00</span>
                </div>
                {osPrice > 0 && (
                   <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Operating System</span>
                    <span>+£{osPrice}.00</span>
                  </div>
                )}
                {panelPrice > 0 && (
                   <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Control Panel</span>
                    <span>+£{panelPrice}.00</span>
                  </div>
                )}
                {extraIpCount > 0 && (
                   <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{extraIpCount}x Extra IP</span>
                    <span>+£{extraIpCount * 3}.00</span>
                  </div>
                )}
                {extraStorageCount > 0 && (
                   <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{extraStorageCount}x 50GB Storage</span>
                    <span>+£{extraStorageCount * 4}.00</span>
                  </div>
                )}
                {addSnapshots && (
                   <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Daily Snapshots</span>
                    <span>+£5.00</span>
                  </div>
                )}
                {addDDoS && (
                   <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Premium Protection</span>
                    <span>+£7.00</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-gray-400 font-bold">Total Monthly</span>
                <span className="text-4xl font-display font-bold text-gold-400">£{totalPrice}<span className="text-lg text-gray-500">.00</span></span>
              </div>

              <button className="w-full bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-xl text-lg shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] flex items-center justify-center gap-2">
                Deploy Now <ArrowRight size={20} />
              </button>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                By deploying you agree to our Terms of Service.
                <br />Instant setup usually takes less than 60 seconds.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};