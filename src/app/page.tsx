import React from 'react';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <Benefits />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
