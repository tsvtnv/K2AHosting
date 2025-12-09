import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GameGrid } from './components/GameGrid';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { HowItWorks } from './components/HowItWorks';
import { CustomServerCTA } from './components/CustomServerCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 selection:text-black">
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
}

export default App;