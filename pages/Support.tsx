import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LifeBuoy, BookOpen, Activity, MessageSquare, ArrowRight, Disc } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Support: React.FC = () => {
  const supportOptions = [
    {
      title: 'Knowledge Base',
      description: 'Find answers to common questions and setup guides.',
      icon: BookOpen,
      link: '/knowledge-base',
      action: 'Browse Articles'
    },
    {
      title: 'System Status',
      description: 'Check the real-time health of our services and nodes.',
      icon: Activity,
      link: '/status',
      action: 'Check Status'
    },
    {
      title: 'Submit Ticket',
      description: 'Get personalized help from our support engineers.',
      icon: MessageSquare,
      link: '/login', // Typically requires login
      action: 'Open Ticket'
    },
    {
      title: 'Discord Community',
      description: 'Join thousands of other server owners in our chat.',
      icon: Disc,
      link: 'https://discord.gg/k2a',
      action: 'Join Server',
      external: true
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Helmet>
        <title>Support Center | K2A Hosting</title>
        <meta name="description" content="Get help with your game server. Access our knowledge base, check system status, or contact our 24/7 support team." />
      </Helmet>
      <Navbar />

      <div className="pt-32 pb-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-royal-900/30 via-black to-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-16 h-16 bg-royal-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-royal-500/20">
            <LifeBuoy className="w-8 h-8 text-gold-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            How can we <span className="text-gold-400">help</span> you?
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our team is standing by 24/7 to ensure your server runs smoothly.
          </p>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportOptions.map((opt, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-royal-500/50 transition-all hover:bg-neutral-900">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-black rounded-lg border border-white/10 group-hover:border-gold-500/30 transition-colors">
                  <opt.icon className="w-6 h-6 text-royal-400 group-hover:text-gold-400" />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="text-gold-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{opt.title}</h3>
              <p className="text-gray-400 mb-8 h-12">{opt.description}</p>
              
              {opt.external ? (
                <a href={opt.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-white group-hover:text-gold-400 transition-colors">
                  {opt.action}
                </a>
              ) : (
                <Link to={opt.link} className="inline-flex items-center font-bold text-white group-hover:text-gold-400 transition-colors">
                  {opt.action}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-royal-900/20 to-black border border-royal-500/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Still need help?</h3>
            <p className="text-gray-400 mb-6">Our average ticket response time is under 15 minutes.</p>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                Contact Sales
            </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};