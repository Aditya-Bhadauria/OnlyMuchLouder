import React from 'react';


import Navbar from '../components/Navbar';
import LandingPage from '../components/IntroPage';
import HeroScrollDemo from '../components/CanvaShowcase';

import { LayoutGridDemo } from '../components/Creators';
import { TimelineDemo } from '../components/Brands';
import Cursor from '../components/Cursor';
import { InfiniteMovingCardsDemo } from '../components/Reviews';




const HomePage = () => {
  return (
    <div>
      <Cursor />
      <Navbar />
      <LandingPage />
      <HeroScrollDemo />
      <LayoutGridDemo />
      <TimelineDemo />
      <InfiniteMovingCardsDemo/>
    </div>
  );
};

export default HomePage;
