import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/ui/About';
import Services from '@/components/Services';
import Contact from '@/components/Contract';
import { InfiniteMovingCardsDemo } from '@/components/carousel';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
     <About />   
      <Services />
      <InfiniteMovingCardsDemo/>
      <Contact />
    </div>
  );
};

export default Home;
