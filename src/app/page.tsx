import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/ui/About';
import Services from '@/components/Services';
import { InfiniteMovingCardsDemo } from '@/components/carousel';
import Digitalmarkating from '@/components/Digitalmarkiting';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
     <About />   
      <Services />
      <Digitalmarkating/>
      <InfiniteMovingCardsDemo/>
      
    </div>
  );
};

export default Home;
