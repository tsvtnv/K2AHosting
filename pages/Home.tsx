import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { VPSPricing } from '../components/VPSPricing';
import { DedicatedPricing } from '../components/DedicatedPricing';
import { FAQ } from '../components/FAQ';
import { WebDesignCTA } from '../components/WebDesignCTA';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 selection:text-black">
      <Helmet>
        <title>K2A Hosting | Enterprise VPS & Dedicated Servers</title>
        <meta name="description" content="Premium UK-based hosting provider offering high-performance VPS and dedicated servers. Instant deployment, DDoS protection, and 24/7 support." />
        <meta name="keywords" content="vps hosting, dedicated servers, uk hosting, ryzen server, epyc server, bare metal" />
        <meta property="og:title" content="K2A Hosting | UK Infrastructure Provider" />
        <meta property="og:description" content="Enterprise-grade VPS and Dedicated Servers hosted in the UK. Low latency and high performance guaranteed." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navbar />
      <Hero />
      <Features />
      <VPSPricing />
      <DedicatedPricing />
      <WebDesignCTA />
      <FAQ />
      <Footer />
    </div>
  );
};