import React from 'react';
// import Navbar from './Navbar';
// import LandingPage from '../IntroPage';
// import BrandShowcase from '../BrandShowcase';

import Navbar from '../components/Navbar';
import LandingPage from '../components/IntroPage';
import BrandShowcase from '../components/BrandShowcase';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <BrandShowcase/>
    </div>
  );
};

export default HomePage;
