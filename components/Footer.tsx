import React from 'react';
import { Server, Twitter, Facebook, Instagram, Disc } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-neutral-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Server className="h-6 w-6 text-gold-400" />
              <span className="font-display font-bold text-xl tracking-wider text-white">
                K2A <span className="text-gold-400">HOSTING</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Your Server. Your World. Hosted the Right Way. Providing premium, high-performance game hosting solutions since 2024.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, Disc].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-royal-400 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/games" className="hover:text-gold-400 transition-colors">Game Hosting</Link></li>
              <li><Link to="/dedicated-servers" className="hover:text-gold-400 transition-colors">Dedicated Servers</Link></li>
              <li><a href="https://tsvweb.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Web Hosting</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Domain Names</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/knowledge-base" className="hover:text-gold-400 transition-colors">Knowledge Base</Link></li>
              <li><Link to="/status" className="hover:text-gold-400 transition-colors">System Status</Link></li>
              <li><Link to="/support" className="hover:text-gold-400 transition-colors">Open Ticket</Link></li>
              <li><a href="https://discord.gg/k2a" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition-colors">Discord Community</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} K2A Hosting. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Legal</a>
            <a href="#" className="hover:text-gray-400">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};