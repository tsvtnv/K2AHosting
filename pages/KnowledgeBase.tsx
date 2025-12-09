import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Search, Book, Terminal, Settings, Shield } from 'lucide-react';

export const KnowledgeBase: React.FC = () => {
  const categories = [
    { name: 'Getting Started', icon: Book, count: 12 },
    { name: 'Server Configuration', icon: Terminal, count: 24 },
    { name: 'Billing & Account', icon: Settings, count: 8 },
    { name: 'Security & DDoS', icon: Shield, count: 5 },
  ];

  const articles = [
    { title: 'How to connect to your FiveM server', category: 'Getting Started', readTime: '2 min' },
    { title: 'Installing mods on Minecraft', category: 'Server Configuration', readTime: '5 min' },
    { title: 'Setting up whitelist for Rust', category: 'Server Configuration', readTime: '3 min' },
    { title: 'Understanding your invoice', category: 'Billing & Account', readTime: '2 min' },
    { title: 'How to use SFTP', category: 'Getting Started', readTime: '4 min' },
    { title: 'Upgrading your server plan', category: 'Billing & Account', readTime: '1 min' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Helmet>
        <title>Knowledge Base | K2A Hosting</title>
        <meta name="description" content="Tutorials, guides, and documentation for K2A Hosting game servers." />
      </Helmet>
      <Navbar />

      {/* Hero Search */}
      <div className="pt-32 pb-20 bg-royal-900/10 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4 block">Knowledge Base</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                What do you need help with?
            </h1>
            <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                    type="text" 
                    placeholder="Search for articles (e.g. 'how to install plugins')"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-royal-500 focus:ring-1 focus:ring-royal-500 backdrop-blur-sm shadow-xl"
                />
            </div>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Categories */}
            <div className="md:col-span-1 space-y-4">
                <h3 className="font-bold text-gray-400 uppercase text-xs tracking-wider mb-4">Categories</h3>
                {categories.map((cat, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group">
                        <div className="flex items-center gap-3">
                            <cat.icon size={18} className="text-gray-500 group-hover:text-gold-400 transition-colors" />
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white">{cat.name}</span>
                        </div>
                        <span className="text-xs text-gray-600 bg-neutral-900 px-2 py-0.5 rounded border border-white/5">{cat.count}</span>
                    </div>
                ))}
            </div>

            {/* Articles */}
            <div className="md:col-span-3">
                <h3 className="font-bold text-white text-xl mb-6">Popular Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {articles.map((article, idx) => (
                        <div key={idx} className="p-6 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-royal-500/30 hover:bg-neutral-900/50 cursor-pointer transition-all">
                            <div className="text-xs text-gold-400 font-bold mb-2">{article.category}</div>
                            <h4 className="font-bold text-lg text-white mb-2">{article.title}</h4>
                            <div className="text-sm text-gray-500">{article.readTime} read</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};