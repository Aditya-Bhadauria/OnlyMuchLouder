import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import TextGenerateEffect from '../components/TextGen';
import Button from './Button';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/StudioLight.json';

const LandingPage = () => {
  const { scrollY } = useViewportScroll();
  const taglineY = useTransform(scrollY, [0, 300], [0, -30]);

  const scrollToContent = () => {
    const target = document.getElementById('content-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="relative flex items-center justify-between h-screen bg-white text-gray-900 p-4 md:p-8 lg:p-16">
      
      {/* Lottie Animation on the Left */}
      <div className="flex-1 flex justify-center items-center z-10 opacity-70">
        <Lottie options={lottieOptions} height="80%" width="80%" />
      </div>

      {/* Text on the Right */}
      <div className="flex-1 flex flex-col items-start lg:items-center justify-center z-20 space-y-4 md:space-y-6 lg:space-y-8 p-4 lg:p-8">
        {/* Main Title */}
        <div className="text-[10vw] md:text-[8vw] lg:text-[6vw] font-bold tracking-tight text-right leading-[1.1] font-sans">
          <TextGenerateEffect
            words="Only Much Louder"
            style={{
              color: '#000',
              fontWeight: '900',
              letterSpacing: '-0.05em',
            }}
          />
        </div>

        {/* Sub-Title with Motion Effect */}
        <motion.div
          className="text-[5vw] md:text-[4vw] lg:text-[3vw] font-medium font-sans text-black tracking-wide leading-tight text-right"
          style={{ y: taglineY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1.2, ease: 'easeOut' }}
        >
          <span style={{ opacity: 0.8 }}>We fuel Pop Culture</span>
        </motion.div>
      
        {/* Scroll Down Button */}
        <div className="pt-4">
          <Button onClick={scrollToContent} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
