import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center p-4">
      <div className="text-center">
        <div className="inline-flex p-4 rounded-full bg-royal-900/30 text-gold-400 mb-6 border border-royal-500/30">
            <AlertTriangle size={48} />
        </div>
        <h1 className="text-6xl font-display font-bold text-white mb-2">404</h1>
        <h2 className="text-2xl font-bold text-gray-300 mb-6">Page Not Found</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
            The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <button 
            onClick={() => navigate('/')}
            className="bg-royal-600 hover:bg-royal-500 text-white font-bold py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2 mx-auto"
        >
            <Home size={20} /> Return Home
        </button>
      </div>
    </div>
  );
};