import React from 'react';
import { motion } from 'framer-motion';

// List of brand logos - Replace these paths with your actual brand images
const brands = [
  { id: 1, name: 'Brand 1', logo: 'src/assets/images/brand1.png' },
  { id: 2, name: 'Brand 2', logo: 'src/assets/images/brand2.png' },
  { id: 3, name: 'Brand 3', logo: 'src/assets/images/brand3.png' },
  { id: 4, name: 'Brand 4', logo: 'src/assets/images/brand4.png' },
  { id: 5, name: 'Brand 5', logo: 'src/assets/images/brand5.png' },
];

const BrandShowcase = () => {
  return (
    <div id = "content-section"className="py-12 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-purple-600 mb-10">Our Trusted Partners</h2>
      
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {brands.map((brand) => (
          <motion.div
            key={brand.id}
            className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={brand.logo} alt={brand.name} className="object-contain max-w-full max-h-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrandShowcase;
