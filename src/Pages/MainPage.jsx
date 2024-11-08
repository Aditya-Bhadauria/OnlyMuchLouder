import React from 'react';


import Navbar from '../components/Navbar';
import LandingPage from '../components/IntroPage';

import { LayoutGridDemo } from '../components/Creators';



const HomePage = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      
      <LayoutGridDemo />
      
    </div>
  );
};

export default HomePage;
