import React from 'react';


import Navbar from '../components/Navbar';
import LandingPage from '../components/IntroPage';
import HeroScrollDemo from '../components/CanvaShowcase';

import { LayoutGridDemo } from '../components/Creators';
import { TimelineDemo } from '../components/Brands';



const HomePage = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <HeroScrollDemo />
      <LayoutGridDemo />
      {/* <HeroScrollDemo /> */}
      <TimelineDemo />
      
    </div>
  );
};

export default HomePage;
