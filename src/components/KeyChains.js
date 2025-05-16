import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from './SliderArrows';
import './sliderStyles.css';

const KeyChains = () => {
  const galleryImages = [
    '/images/KeyChains/KeyChain1.jpeg',
    '/images/KeyChains/KeyChain2.jpeg',
    '/images/KeyChains/KeyChain3.jpeg',
    '/images/KeyChains/KeyChain4.jpeg',
    '/images/KeyChains/KeyChain5.jpeg',
    '/images/KeyChains/KeyChain6.jpeg'
  ];

  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '10%'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '5%'
        }
      }
    ]
  };

  return (
    <div className="bg-[rgb(0_0_0_/_0.4)]">
      {/* Hero Section */}
      <motion.div 
        initial={{ height: '100vh' }}
        animate={{ height: ['100vh', '100vh', '70vh'] }}
        transition={{ 
          duration: 2,
          times: [0, 0.7, 1],
          ease: 'easeInOut'
        }}
        className="relative overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <img 
            src="/images/KeyChains/KeyChainsHome.jpeg" 
            alt="Key Chains Collection" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0.6] }}
          transition={{ 
            duration: 2,
            times: [0, 0.7, 1],
          }}
          className="absolute inset-0 bg-black flex items-center justify-center"
        >
          <div className="text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: [0, 0, 1], y: [50, 50, 0] }}
              transition={{ 
                duration: 2,
                times: [0, 0.7, 1],
              }}
              className="text-6xl font-bold mb-6"
            >
              Key Chains Collection
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: [0, 0, 1], y: [30, 30, 0] }}
              transition={{ 
                duration: 2,
                times: [0, 0.8, 1],
              }}
              className="text-xl max-w-2xl mx-auto"
            >
              Elegant and functional leather key chains that combine style with durability. 
              Small accessories that make a big impression.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Description Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Functional Elegance</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our leather key chains are more than just practical accessories – they're a statement of 
              refined taste and quality craftsmanship. Each piece is handmade from the finest leather, 
              carefully selected for its texture, durability, and natural beauty. The perfect blend of 
              functionality and style, our key chains are designed to add a touch of sophistication to 
              your everyday essentials while standing up to daily use.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-b from-black/20 to-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Our Key Chains</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Premium Materials</h3>
              <p className="text-gray-300">
                Crafted from full-grain leather and fitted with high-quality metal hardware, 
                our key chains are built to last and develop a beautiful patina over time.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Handcrafted Detail</h3>
              <p className="text-gray-300">
                Each key chain is meticulously handmade by our skilled artisans, 
                ensuring exceptional attention to detail and superior craftsmanship.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Versatile Design</h3>
              <p className="text-gray-300">
                Available in various styles and colors, our key chains are perfect for personal use 
                or as thoughtful gifts that make a lasting impression.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-24 bg-gradient-to-b from-black/30 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Product Gallery</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our collection of premium leather key chains
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Slider {...sliderSettings}>
              {galleryImages.map((image, index) => (
                <div key={index} className="px-3">
                  <div className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-white/10 to-white/5 p-2">
                    <img 
                      src={image} 
                      alt={`Gallery ${index + 1}`} 
                      className="w-full h-[350px] object-contain rounded-lg shadow-xl transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KeyChains;
