// import React from 'react';
// import { motion, useViewportScroll, useTransform } from 'framer-motion';
// import Button from './Button'; 


// const LandingPage = () => {
//   const { scrollY } = useViewportScroll();
//   const titleY = useTransform(scrollY, [0, 300], [0, -50]);
//   const taglineY = useTransform(scrollY, [0, 300], [0, -30]);

//   const scrollToContent = () => {
//     const target = document.getElementById('content-section');
//     if (target) {
//       target.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 p-4 md:p-8 lg:p-16">
      
      
//       <motion.h1
//         className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-black tracking-tight text-center leading-tight font-serif z-10"
//         style={{ y: titleY }}
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.2, ease: 'easeInOut' }}
//       >
//         Only Much Louder
//       </motion.h1>

//       <motion.div
//         className="mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold font-serif text-black tracking-tight leading-tight z-10"
//         style={{ y: taglineY }}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.4, duration: 1.2, ease: 'easeOut' }}
//       >
//         We fuel Pop Culture
//       </motion.div>

//       {/* Scroll Down Button */}
//       <div className="absolute bottom-10 z-10">
//         <Button onClick={scrollToContent} />
//       </div>
//     </div>
//   );
// };

// export default LandingPage;



import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import TextGenerateEffect from '../components/TextGen'; // Adjust the path if needed
import Button from './Button';

const LandingPage = () => {
  const { scrollY } = useViewportScroll();
  const taglineY = useTransform(scrollY, [0, 300], [0, -30]);

  const scrollToContent = () => {
    const target = document.getElementById('content-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 p-4 md:p-8 lg:p-16">
      
      
      <div className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-black tracking-tight text-center leading-tight font-serif z-10"> 
      {/* need to change the css directly at the text generate effect component */}

        <TextGenerateEffect words="Only Much Louder" />
      </div>

      <motion.div
        className="mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold font-serif text-black tracking-tight leading-tight z-10"
        style={{ y: taglineY }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1.2, ease: 'easeOut' }}
      >
        We fuel Pop Culture
      </motion.div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-10 z-10">
        <Button onClick={scrollToContent} />
      </div>
    </div>
  );
};

export default LandingPage;


