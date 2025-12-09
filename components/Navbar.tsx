import React, { useState, useEffect } from 'react';
import { Menu, X, Server } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
        // Let normal routing handle it
        return; 
    }
    
    e.preventDefault();
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'VPS Hosting', href: '/vps-hosting' },
    { name: 'Dedicated Servers', href: '/dedicated-servers' },
    { name: 'Game Hosting', href: '/game-hosting' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Server className="h-8 w-8 text-gold-400" />
            <span className="font-display font-bold text-2xl tracking-wider text-white">
              K2A <span className="text-gold-400">HOSTING</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                    <Link
                        key={link.name}
                        to={link.href}
                        className="font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    >
                        {link.name}
                    </Link>
                ) : (
                    <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    >
                    {link.name}
                    </a>
                )
              ))}
              <button 
                onClick={() => navigate('/login')}
                className="bg-royal-600 hover:bg-royal-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 border border-royal-500 shadow-lg shadow-royal-900/50 hover:shadow-royal-500/30"
              >
                Client Area
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
               link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-neutral-800"
                >
                    {link.name}
                </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-neutral-800"
              >
                {link.name}
              </a>
            )
            ))}
            <button
              onClick={() => {
                navigate('/login');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left block px-3 py-2 mt-4 rounded-md text-base font-medium bg-royal-600 text-white hover:bg-royal-700"
            >
              Client Area
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};