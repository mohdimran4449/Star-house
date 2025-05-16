import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section 
      id="home" 
      className="relative overflow-hidden bg-[rgb(0_0_0_/_0.4)] flex items-center justify-center"
      initial={{ height: '100vh' }}
      animate={{ height: '75vh' }}
      transition={{ 
        duration: 1.5,
        delay: 1,
        ease: 'easeInOut'
      }}
    >
      {/* Home.png background image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        <img src="/images/Home.png" alt="Leather background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1a0d40]/60"></div>
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Premium Leather Products</h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">Crafting excellence since 1985. Discover our range of high-quality leather goods made with traditional craftsmanship.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#products" className="px-8 py-3 bg-[#1a0d40] text-white rounded-sm hover:bg-[#0f0823] transition-all shadow-lg">
            Explore Products
          </a>
          <a href="#about" className="px-8 py-3 border border-white text-white rounded-sm hover:bg-white/20 transition-all">
            Our Story
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
