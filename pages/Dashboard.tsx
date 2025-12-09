import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Server as ServerIcon, 
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
  MoreVertical,
  Play,
  Square,
  AlertCircle
} from 'lucide-react';
import { Server, User } from '../types';

type Tab = 'overview' | 'servers' | 'billing' | 'support' | 'settings';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('servers');
  const [servers, setServers] = useState<Server[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedServer, setSelectedServer] = useState<Server | null>(null);
  const [consoleLogs, setConsoleLogs] = useState<string>('');
  
  // Auth check
  useEffect(() => {
    const token = localStorage.getItem('k2a_token');
    const storedUser = localStorage.getItem('k2a_user');
    
    if (!token || !storedUser) {
      navigate('/login');
      return;
    }
    
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  // Fetch servers
  const fetchServers = async () => {
    const token = localStorage.getItem('k2a_token');
    try {
      const res = await fetch('/api/servers', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setServers(data);
      if (data.length > 0 && !selectedServer) {
        setSelectedServer(data[0]);
      }
    } catch (err) {
      console.error('Failed to fetch servers', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchServers();
      const interval = setInterval(fetchServers, 5000); // Poll status every 5s
      return () => clearInterval(interval);
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('k2a_token');
    localStorage.removeItem('k2a_user');
    navigate('/');
  };

  const handlePowerAction = async (serverId: number, action: 'start' | 'stop' | 'restart' | 'kill') => {
    const token = localStorage.getItem('k2a_token');
    try {
      // Optimistic update
      setServers(prev => prev.map(s => 
        s.id === serverId 
        ? { ...s, status: action === 'start' ? 'starting' : action === 'restart' ? 'starting' : 'stopping' } 
        : s
      ));

      await fetch(`/api/server/${serverId}/power`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ signal: action })
      });
      
      // Fetch logs immediately if starting
      if (action === 'start' || action === 'restart') {
        const logRes = await fetch(`/api/server/${serverId}/console`, {
             headers: { 'Authorization': `Bearer ${token}` }
        });
        const logData = await logRes.json();
        setConsoleLogs(logData.logs);
      }
      
      fetchServers();
    } catch (err) {
      console.error('Power action failed', err);
    }
  };
  
  // Console simulation (simple polling for demo)
  useEffect(() => {
      let interval: any;
      if (selectedServer && selectedServer.status !== 'offline') {
          interval = setInterval(() => {
             // In a real app, this would be a websocket or log tail
             setConsoleLogs(prev => prev + `\n[${new Date().toLocaleTimeString()}] [Server thread/INFO]: Server is running tick...`);
          }, 3000);
      }
      return () => clearInterval(interval);
  }, [selectedServer]);

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-gold-400">Loading K2A Panel...</div>;

  return (
    <div className="min-h-screen bg-black text-white font-sans flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900/50 border-r border-white/5 flex flex-col hidden md:flex shrink-0">
        <div className="p-6 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <ServerIcon className="h-6 w-6 text-gold-400" />
          <span className="font-display font-bold text-xl tracking-wider text-white">
            K2A <span className="text-gold-400">PANEL</span>
          </span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {[
            { id: 'overview', name: 'Overview', icon: Activity },
            { id: 'servers', name: 'My Servers', icon: ServerIcon },
            { id: 'billing', name: 'Billing', icon: CreditCard },
            { id: 'support', name: 'Support', icon: LifeBuoy },
            { id: 'settings', name: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as Tab)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full transition-colors ${
                activeTab === item.id 
                  ? 'bg-royal-900/20 text-gold-400 border border-royal-500/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
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
      <main className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-neutral-900/30 border-b border-white/5 flex items-center justify-between px-8 backdrop-blur-sm z-40 shrink-0">
          <h2 className="font-bold text-lg capitalize">{activeTab.replace('-', ' ')}</h2>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-white">{user?.name}</div>
              <div className="text-xs text-gray-500">{user?.email}</div>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-royal-600 to-gold-500 p-[2px]">
              <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                <span className="font-bold text-sm text-white uppercase">{user?.name.substring(0, 2)}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
                    <h3 className="text-gray-400 text-sm font-bold uppercase mb-2">Active Servers</h3>
                    <div className="text-4xl font-display font-bold text-white">{servers.length}</div>
                </div>
                <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
                    <h3 className="text-gray-400 text-sm font-bold uppercase mb-2">Total CPU Usage</h3>
                    <div className="text-4xl font-display font-bold text-gold-400">
                        {servers.reduce((acc, s) => acc + s.cpu, 0)}%
                    </div>
                </div>
                <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
                    <h3 className="text-gray-400 text-sm font-bold uppercase mb-2">Monthly Cost</h3>
                    <div className="text-4xl font-display font-bold text-white">£14.99</div>
                </div>
             </div>
          )}

          {/* SERVERS TAB */}
          {activeTab === 'servers' && (
            <>
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
                        <div className={`w-3 h-3 rounded-full ${server.status === 'online' ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : server.status === 'starting' ? 'bg-yellow-500 animate-pulse' : 'bg-red-500'}`} />
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
                        <button 
                            onClick={() => {
                                setSelectedServer(selectedServer?.id === server.id ? null : server);
                                setConsoleLogs(''); // Reset logs when opening new server
                            }}
                            className={`p-2 rounded-lg border transition-colors ${selectedServer?.id === server.id ? 'bg-royal-600 text-white border-royal-500' : 'bg-neutral-900 text-gray-400 hover:text-white border-white/10'}`} 
                            title="Console"
                        >
                          <Terminal size={18} />
                        </button>
                        
                        <button 
                            onClick={() => handlePowerAction(server.id, 'start')}
                            disabled={server.status !== 'offline'}
                            className="p-2 bg-neutral-900 hover:bg-green-900/20 rounded-lg text-gray-400 hover:text-green-500 border border-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                            title="Start"
                        >
                          <Play size={18} />
                        </button>

                        <button 
                            onClick={() => handlePowerAction(server.id, 'restart')}
                            disabled={server.status === 'offline'}
                            className="p-2 bg-neutral-900 hover:bg-yellow-900/20 rounded-lg text-gray-400 hover:text-yellow-500 border border-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                            title="Restart"
                        >
                          <RefreshCw size={18} />
                        </button>

                        <button 
                            onClick={() => handlePowerAction(server.id, 'stop')}
                            disabled={server.status === 'offline'}
                            className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg text-red-500 border border-red-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                            title="Stop"
                        >
                          <Square size={18} />
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
                          <div className={`text-sm font-bold ${server.status === 'online' ? 'text-green-400' : server.status === 'starting' ? 'text-yellow-400' : 'text-red-400'}`}>
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
                    
                    {/* TERMINAL VIEW */}
                    {selectedServer?.id === server.id && (
                        <div className="mt-6 animate-fade-in-up">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-mono text-gray-400">/home/container/latest.log</span>
                                <span className="flex items-center gap-2 text-xs text-green-500"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/> Live Connection</span>
                            </div>
                            <div className="bg-black border border-white/10 rounded-lg p-4 h-64 overflow-y-auto font-mono text-xs text-gray-300">
                                {server.status === 'offline' ? (
                                    <div className="text-gray-600 italic">Server is offline. Press Start to boot.</div>
                                ) : (
                                    <pre className="whitespace-pre-wrap">{consoleLogs || "Fetching logs..."}</pre>
                                )}
                            </div>
                            <div className="mt-2 flex gap-2">
                                <input type="text" placeholder="Type a command..." className="flex-1 bg-neutral-900 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-gold-500" />
                                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-bold">Send</button>
                            </div>
                        </div>
                    )}
                  </div>
                ))}
                
                {servers.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>No servers found. Deploy one to get started.</p>
                    </div>
                )}
              </div>
            </>
          )}

          {/* BILLING TAB */}
          {activeTab === 'billing' && (
              <div className="space-y-6">
                  <h1 className="text-3xl font-display font-bold text-white mb-6">Billing History</h1>
                  <div className="glass-card rounded-xl overflow-hidden">
                      <table className="w-full text-left">
                          <thead className="bg-white/5 text-gray-400 text-xs uppercase">
                              <tr>
                                  <th className="p-4 font-bold">Invoice ID</th>
                                  <th className="p-4 font-bold">Date</th>
                                  <th className="p-4 font-bold">Amount</th>
                                  <th className="p-4 font-bold">Status</th>
                                  <th className="p-4 font-bold">Action</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-sm">
                              {[1,2,3].map(i => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                      <td className="p-4 font-mono text-gray-300">INV-2024-00{i}</td>
                                      <td className="p-4 text-white">Oct {10 + i}, 2024</td>
                                      <td className="p-4 text-white">£14.99</td>
                                      <td className="p-4"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-bold">Paid</span></td>
                                      <td className="p-4"><button className="text-gold-400 hover:text-white">Download</button></td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
          )}

           {/* SETTINGS TAB */}
           {activeTab === 'settings' && (
              <div className="max-w-2xl">
                  <h1 className="text-3xl font-display font-bold text-white mb-6">Account Settings</h1>
                  <div className="glass-card p-8 rounded-xl space-y-6">
                      <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Display Name</label>
                          <input type="text" value={user?.name} readOnly className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-gray-500 cursor-not-allowed" />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                          <input type="email" value={user?.email} readOnly className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-gray-500 cursor-not-allowed" />
                      </div>
                      <div className="pt-4 border-t border-white/10">
                          <button className="bg-royal-600 hover:bg-royal-500 text-white px-6 py-2 rounded-lg font-bold">Change Password</button>
                      </div>
                  </div>
              </div>
          )}
          
          {/* SUPPORT TAB */}
           {activeTab === 'support' && (
             <div className="flex flex-col items-center justify-center h-full text-center py-20">
                 <LifeBuoy className="w-16 h-16 text-gold-400 mb-6" />
                 <h2 className="text-2xl font-bold text-white mb-2">Need Help?</h2>
                 <p className="text-gray-400 max-w-md mb-8">Our support team is available 24/7. Check the Knowledge Base or open a ticket.</p>
                 <button onClick={() => navigate('/support')} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200">
                     Visit Support Center
                 </button>
             </div>
          )}

        </div>
      </main>
    </div>
  );
};