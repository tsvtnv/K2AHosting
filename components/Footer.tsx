import React from 'react';
import { Server, Twitter, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Server className="h-6 w-6 text-gold-400" />
              <span className="font-display font-bold text-xl tracking-wider text-white">
                K2A <span className="text-gold-400">HOSTING</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Premium UK-based infrastructure provider. Delivering high-performance VPS and Dedicated Server solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Hosting */}
          <div>
            <h4 className="text-white font-bold mb-6">Hosting Services</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="/#vps" className="hover:text-gold-400 transition-colors">Cloud VPS</a></li>
              <li><a href="/#dedicated" className="hover:text-gold-400 transition-colors">Dedicated Servers</a></li>
              <li><a href="/game-hosting" className="hover:text-gold-400 transition-colors">Game Hosting</a></li>
              <li><a href="https://tsvweb.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Web Development</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">About K2A</a></li>
              <li><a href="/status" className="hover:text-gold-400 transition-colors">Network Status</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Datacentres</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal & Support</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="/support" className="hover:text-gold-400 transition-colors">Support Centre</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">SLA</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {currentYear} K2A Hosting Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};