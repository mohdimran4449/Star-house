import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow } from './SliderArrows';
import './sliderStyles.css';

const Equestrian = () => {
  const sliderRef = useRef(null);

  const products = [
    {
      name: 'Bridle',
      description: 'Premium quality leather bridles crafted with precision and care. Our bridles feature superior stitching, durable hardware, and are designed for both comfort and control.',
      image: '/images/products/Bridle_.jpg'
    },
    {
      name: 'Halter',
      description: 'Expertly crafted leather halters combining durability with elegance. Perfect fit and adjustability for various horse sizes.',
      image: '/images/products/Halter_.webp'
    },
    {
      name: 'Girth',
      description: 'High-quality leather girths designed for optimal comfort and security. Features reinforced stitching and premium buckles.',
      image: '/images/products/Girth_.jpg'
    },
    {
      name: 'Rugs',
      description: 'Durable and comfortable horse rugs made with premium materials. Weather-resistant and designed for all seasons.',
      image: '/images/products/Rugs_.webp'
    },
    {
      name: 'Breastplate',
      description: 'Premium leather breastplates designed for stability and freedom of movement. Features adjustable straps and quality hardware.',
      image: '/images/products/BreastPlate_.jpeg'
    },
    {
      name: 'Horse Boot',
      description: 'Protective horse boots crafted with durable materials. Provides excellent support and protection during riding and training.',
      image: '/images/products/HorseBoot_.jpg'
    },
    {
      name: 'Saddle Pad',
      description: 'High-quality saddle pads designed for comfort and protection. Features moisture-wicking materials and ergonomic design.',
      image: '/images/products/SaddlePad_.avif'
    }
  ];

  const galleryImages = [
    '/images/gallery/Bridle.jpg',
    '/images/gallery/Halter.jpg',
    '/images/gallery/Girth.jpg',
    '/images/gallery/Rugs.jpg',
    '/images/gallery/BreastPlate.jpg',
    '/images/gallery/HorseBoot.jpg',
    '/images/gallery/SaddlePad.jpg'
  ];

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
    arrows: false, // Disable default arrows
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
      {/* Hero Section with Curved Bottom */}
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
            src="/images/products/Equestrian_home_page.jpg" 
            alt="Equestrian Collection" 
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
              Equestrian Collection
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
              Discover our premium range of handcrafted leather equestrian products, 
              made with the finest materials and expert craftsmanship.
            </motion.p>
          </div>
        </motion.div>
        {/* Curved Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute bottom-0 left-0 w-full overflow-hidden"
        >
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-16"
            style={{ transform: 'rotate(180deg)' }}
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-[rgb(0_0_0_/_0.4)]"
            />
          </svg>
        </motion.div>
      </motion.div>

      <div className="py-20">
        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Our Premium Collection
          </motion.h2>
          <div className="space-y-24">
            {products.map((product, index) => (
              <motion.div 
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="w-full md:w-1/2 group">
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-white/10 to-white/5 p-2">
                    <motion.img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-[450px] object-contain rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 text-white">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      {product.name}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">{product.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
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
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">Explore our complete collection of premium equestrian products</p>
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
    </div>
  );
};

export default Equestrian;
