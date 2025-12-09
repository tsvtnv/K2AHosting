import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CheckCircle2, AlertTriangle, XCircle, RefreshCw } from 'lucide-react';

const services = [
  { name: 'Website & Client Area', status: 'operational', region: 'Global' },
  { name: 'Game Panel (Pterodactyl)', status: 'operational', region: 'Global' },
  { name: 'Authentication Services', status: 'operational', region: 'Global' },
  { name: 'Game Nodes - North America', status: 'operational', region: 'US-East' },
  { name: 'Game Nodes - Europe', status: 'operational', region: 'Germany' },
  { name: 'Game Nodes - Asia', status: 'degraded', region: 'Singapore' },
  { name: 'Database Clusters', status: 'operational', region: 'Global' },
  { name: 'Backup Systems', status: 'operational', region: 'Global' },
];

export const Status: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'operational': return 'text-green-500';
      case 'degraded': return 'text-yellow-500';
      case 'down': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'operational': return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'degraded': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'down': return <XCircle className="w-5 h-5 text-red-500" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Helmet>
        <title>System Status | K2A Hosting</title>
        <meta name="description" content="Real-time status of K2A Hosting services. Check uptime for game nodes, website, and control panel." />
      </Helmet>
      <Navbar />

      <div className="pt-32 pb-12 text-center max-w-7xl mx-auto px-4 w-full">
        <h1 className="text-4xl font-display font-bold text-white mb-6">System Status</h1>
        
        {/* Overall Status */}
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 inline-flex items-center gap-4 mb-12">
            <div className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
            </div>
            <span className="text-green-500 font-bold text-lg">All Systems Operational</span>
        </div>
      </div>

      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
        <div className="bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/40">
                <h3 className="font-bold text-lg">Current Service Status</h3>
                <button className="text-sm text-gray-500 hover:text-white flex items-center gap-1">
                    <RefreshCw size={14} /> Refresh
                </button>
            </div>
            
            <div className="divide-y divide-white/5">
                {services.map((service, idx) => (
                    <div key={idx} className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors">
                        <div>
                            <div className="font-medium text-white mb-1">{service.name}</div>
                            <div className="text-xs text-gray-500">{service.region}</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={`text-sm font-medium capitalize ${getStatusColor(service.status)}`}>
                                {service.status}
                            </span>
                            {getStatusIcon(service.status)}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-12">
            <h3 className="font-bold text-xl mb-6">Past Incidents</h3>
            <div className="space-y-6">
                <div className="border-l-2 border-yellow-500 pl-6 py-2">
                    <div className="text-sm text-gray-500 mb-1">Oct 24, 2024</div>
                    <h4 className="font-bold text-white mb-2">Asia Node Latency Spike</h4>
                    <p className="text-gray-400 text-sm">We observed increased latency on our Singapore node cluster. Issue was resolved by upstream provider.</p>
                </div>
                <div className="border-l-2 border-green-500 pl-6 py-2">
                    <div className="text-sm text-gray-500 mb-1">Oct 10, 2024</div>
                    <h4 className="font-bold text-white mb-2">Scheduled Maintenance</h4>
                    <p className="text-gray-400 text-sm">Completed database upgrades with no downtime.</p>
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};