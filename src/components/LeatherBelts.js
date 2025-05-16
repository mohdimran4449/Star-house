import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LeatherBelts = () => {
  const galleryImages = [
    '/images/LeatherBelt/Belt1.jpeg',
    '/images/LeatherBelt/Belt2.jpeg',
    '/images/LeatherBelt/Belt3.jpeg',
    '/images/LeatherBelt/Belt4.jpeg',
    '/images/LeatherBelt/Belt5.jpeg',
    '/images/LeatherBelt/Belt6.jpeg',
    '/images/LeatherBelt/Belt7.jpeg',
    '/images/LeatherBelt/Belt8.jpeg'
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
            src="/images/LeatherBelt/LeatherBeltHome.webp" 
            alt="Leather Belts Collection" 
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
              Leather Belts Collection
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
              Discover our premium range of handcrafted leather belts, 
              each piece meticulously crafted with the finest materials and expert craftsmanship.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Crafted to Perfection</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our leather belts represent the pinnacle of quality and style. Each belt is carefully 
              handcrafted using premium leather, ensuring durability and timeless elegance. From 
              classic designs to contemporary styles, our collection offers the perfect blend of 
              functionality and sophistication.
            </p>
          </motion.div>
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
              Explore our collection of premium leather belts
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

export default LeatherBelts;
