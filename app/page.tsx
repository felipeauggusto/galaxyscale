'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Catalog from '@/components/Catalog';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Community from '@/components/Community';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-galaxy-gradient">
      <Header />
      <main>
        <Hero />
        <About />
        <Catalog />
        <HowItWorks />
        <Benefits />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}