import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { GameGrid } from '../components/GameGrid';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { HowItWorks } from '../components/HowItWorks';
import { CustomServerCTA } from '../components/CustomServerCTA';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 selection:text-black">
      <Helmet>
        <title>K2A Hosting | Premium Game Server Hosting</title>
        <meta name="description" content="Premium Game Server Hosting for GTA, Minecraft, Rust, Ark, and more. K2A Hosting offers enterprise-grade hardware, 99.99% uptime, and 24/7 support." />
        <meta name="keywords" content="game hosting, server hosting, fivem hosting, minecraft server, rust server, ark server, dedicated server" />
        <meta property="og:title" content="K2A Hosting | Premium Game Server Hosting" />
        <meta property="og:description" content="Host your world with K2A Hosting. Extreme performance Ryzen servers for every game." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <Hero />
      <GameGrid />
      <Features />
      <Pricing />
      <HowItWorks />
      <CustomServerCTA />
      <Footer />
    </div>
  );
};