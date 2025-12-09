import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Server, MessageSquare, ArrowRight, CheckCircle2, Cpu, HardDrive, Shield } from 'lucide-react';

export const CustomQuote: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    requirements: '',
    budget: '',
    location: 'uk'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1000);
  };

  if (submitted) {
    return (
        <div className="min-h-screen bg-black text-white font-sans flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="text-center max-w-lg">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                        <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <h1 className="text-3xl font-display font-bold text-white mb-4">Request Received</h1>
                    <p className="text-gray-400 mb-8">
                        Our sales engineering team analyzes every custom request personally. 
                        We will send a formal quote to <span className="text-white font-bold">{formData.email}</span> within 24 hours.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="text-gold-400 hover:text-white underline">
                        Submit another request
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Helmet>
        <title>Custom Server Quote | K2A Hosting</title>
      </Helmet>
      <Navbar />

      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-royal-900/20 via-black to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Info */}
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 mb-6">
                    <Server size={14} className="text-gold-400" />
                    <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">K2A Enterprise Solutions</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                    Build Your <span className="text-royal-500">Perfect</span> Server
                </h1>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                    Need 1TB of RAM? GPU acceleration? Multi-node private clusters? 
                    We build custom infrastructure that standard cloud providers can't match.
                </p>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="p-3 bg-neutral-900 rounded-xl border border-white/10 h-fit">
                            <Cpu className="text-royal-400" size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Specific Hardware</h3>
                            <p className="text-gray-400 text-sm">Request specific CPU models (Threadripper, EPYC 9004, Xeon Scalable) or GPU cards (H100, A6000).</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-3 bg-neutral-900 rounded-xl border border-white/10 h-fit">
                            <HardDrive className="text-royal-400" size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Custom Storage Arrays</h3>
                            <p className="text-gray-400 text-sm">Design your own RAID configurations with up to 24x NVMe drives per chassis.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-3 bg-neutral-900 rounded-xl border border-white/10 h-fit">
                            <Shield className="text-royal-400" size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Private Networking</h3>
                            <p className="text-gray-400 text-sm">Isolated VLANs, dedicated racks, and dark fiber options available in London.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <MessageSquare className="text-gold-400" /> Request Quote
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-2">Name</label>
                            <input 
                                required
                                type="text" 
                                className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 outline-none"
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                         <div>
                            <label className="block text-sm font-bold text-gray-400 mb-2">Company (Optional)</label>
                            <input 
                                type="text" 
                                className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 outline-none"
                                value={formData.company}
                                onChange={e => setFormData({...formData, company: e.target.value})}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2">Email Address</label>
                        <input 
                            required
                            type="email" 
                            className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 outline-none"
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2">Hardware Requirements</label>
                        <textarea 
                            required
                            className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 outline-none h-32"
                            placeholder="e.g. I need a server with 512GB RAM and 4x 4TB NVMe drives for a database cluster..."
                            value={formData.requirements}
                            onChange={e => setFormData({...formData, requirements: e.target.value})}
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                         <div>
                            <label className="block text-sm font-bold text-gray-400 mb-2">Approx. Budget</label>
                            <select 
                                className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 outline-none"
                                value={formData.budget}
                                onChange={e => setFormData({...formData, budget: e.target.value})}
                            >
                                <option value="">Select Range</option>
                                <option value="low">£100 - £300 /mo</option>
                                <option value="mid">£300 - £600 /mo</option>
                                <option value="high">£600 - £1500 /mo</option>
                                <option value="enterprise">£1500+ /mo</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-2">Preferred Location</label>
                            <select 
                                className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 outline-none"
                                value={formData.location}
                                onChange={e => setFormData({...formData, location: e.target.value})}
                            >
                                <option value="uk">London, UK</option>
                                <option value="de">Frankfurt, DE</option>
                                <option value="any">No Preference</option>
                            </select>
                        </div>
                    </div>

                    <button className="w-full bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-xl text-lg transition-all flex items-center justify-center gap-2 mt-4">
                        Send Request <ArrowRight size={20} />
                    </button>
                </form>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};