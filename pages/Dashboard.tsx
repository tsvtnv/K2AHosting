import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Server, 
  Settings, 
  CreditCard, 
  LifeBuoy, 
  LogOut, 
  Activity, 
  Cpu, 
  HardDrive, 
  Power,
  RefreshCw,
  Terminal,
  MoreVertical
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const servers = [
    {
      id: 1,
      name: 'FiveM RP Main',
      game: 'GTA V / FiveM',
      status: 'online',
      ip: '192.168.1.1:30120',
      cpu: 45,
      ram: 62,
    },
    {
      id: 2,
      name: 'Minecraft Survival',
      game: 'Minecraft Java',
      status: 'offline',
      ip: '192.168.1.1:25565',
      cpu: 0,
      ram: 0,
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900/50 border-r border-white/5 flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-2">
          <Server className="h-6 w-6 text-gold-400" />
          <span className="font-display font-bold text-xl tracking-wider text-white">
            K2A <span className="text-gold-400">PANEL</span>
          </span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-royal-900/20 text-gold-400 rounded-lg border border-royal-500/20">
            <Server size={20} />
            <span className="font-medium">My Servers</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <CreditCard size={20} />
            <span className="font-medium">Billing</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <LifeBuoy size={20} />
            <span className="font-medium">Support</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <Settings size={20} />
            <span className="font-medium">Settings</span>
          </a>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg w-full transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Topbar */}
        <header className="h-16 bg-neutral-900/30 border-b border-white/5 flex items-center justify-between px-8 backdrop-blur-sm sticky top-0 z-40">
          <h2 className="font-bold text-lg">Overview</h2>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-white">Admin User</div>
              <div className="text-xs text-gray-500">client@k2ahosting.com</div>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-royal-600 to-gold-500 p-[2px]">
              <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                <span className="font-bold text-sm">AU</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-display font-bold text-white mb-2">My Servers</h1>
              <p className="text-gray-400">Manage your active instances</p>
            </div>
            <button className="bg-gold-500 hover:bg-gold-400 text-black px-6 py-2 rounded-lg font-bold transition-colors shadow-lg shadow-gold-500/20">
              Deploy New Server
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {servers.map((server) => (
              <div key={server.id} className="glass-card rounded-xl p-6 transition-all hover:border-royal-500/30">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${server.status === 'online' ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-red-500'}`} />
                    <div>
                      <h3 className="text-xl font-bold text-white">{server.name}</h3>
                      <div className="text-sm text-gray-400 flex items-center gap-2">
                        <span>{server.game}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span className="font-mono text-xs bg-neutral-900 px-2 py-0.5 rounded border border-white/10">{server.ip}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg text-gray-400 hover:text-white border border-white/10 transition-colors" title="Console">
                      <Terminal size={18} />
                    </button>
                    <button className="p-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg text-gray-400 hover:text-white border border-white/10 transition-colors" title="Restart">
                      <RefreshCw size={18} />
                    </button>
                    <button className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg text-red-500 border border-red-500/20 transition-colors" title="Stop">
                      <Power size={18} />
                    </button>
                    <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-black/40 rounded-lg border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-royal-900/20 text-royal-400">
                      <Activity size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Status</div>
                      <div className={`text-sm font-bold ${server.status === 'online' ? 'text-green-400' : 'text-red-400'}`}>
                        {server.status.charAt(0).toUpperCase() + server.status.slice(1)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-royal-900/20 text-royal-400">
                      <Cpu size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">CPU Load</div>
                        <div className="text-xs text-white">{server.cpu}%</div>
                      </div>
                      <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-royal-500 rounded-full transition-all duration-1000" style={{ width: `${server.cpu}%` }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-royal-900/20 text-royal-400">
                      <HardDrive size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">RAM Usage</div>
                        <div className="text-xs text-white">{server.ram}%</div>
                      </div>
                      <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gold-500 rounded-full transition-all duration-1000" style={{ width: `${server.ram}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};