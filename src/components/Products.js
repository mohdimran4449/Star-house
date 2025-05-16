import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, image, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-sm shadow-lg transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a0d40]/90 z-10"></div>
      
      {/* Product Image */}
      <div className={`h-80 transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      {/* Product Info */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-20">
        <h3 className="text-2xl font-medium text-white mb-2 font-serif">{title}</h3>
        <p className={`text-white/80 transition-all duration-500 overflow-hidden ${isHovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
          {description}
        </p>
        <div className={`mt-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {category === 'Equestrian' ? (
            <Link to="/equestrian" className="inline-block px-4 py-2 bg-[#1a0d40] text-white rounded-sm hover:bg-[#120a2e] transition-all text-sm">
              View Collection
            </Link>
          ) : category === 'Belts' ? (
            <Link to="/leather-belts" className="inline-block px-4 py-2 bg-[#1a0d40] text-white rounded-sm hover:bg-[#120a2e] transition-all text-sm">
              View Collection
            </Link>
          ) : category === 'Leather' ? (
            <Link to="/leather" className="inline-block px-4 py-2 bg-[#1a0d40] text-white rounded-sm hover:bg-[#120a2e] transition-all text-sm">
              View Collection
            </Link>
          ) : category === 'Dog Collars' ? (
            <Link to="/dog-collar" className="inline-block px-4 py-2 bg-[#1a0d40] text-white rounded-sm hover:bg-[#120a2e] transition-all text-sm">
              View Collection
            </Link>
          ) : category === 'Key Rings' ? (
            <Link to="/key-chains" className="inline-block px-4 py-2 bg-[#1a0d40] text-white rounded-sm hover:bg-[#120a2e] transition-all text-sm">
              View Collection
            </Link>
          ) : (
            <Link to="#" className="inline-block px-4 py-2 bg-[#1a0d40] text-white rounded-sm hover:bg-[#120a2e] transition-all text-sm">
              View Collection
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      title: 'Equestrian',
      description: 'Premium leather products for equestrian enthusiasts. Handcrafted with attention to detail and durability.',
      image: '/images/Equestrian.jpeg',
      category: 'Equestrian'
    },
    {
      title: 'Belts',
      description: 'Elegant leather belts for all occasions. Crafted with precision and finished with premium hardware.',
      image: '/images/LeatherBelts.jpeg',
      category: 'Belts'
    },
    {
      title: 'Dog Collars',
      description: 'Stylish and durable leather collars for your canine companions. Comfort meets craftsmanship.',
      image: '/images/DogCollor.jpeg',
      category: 'Dog Collars'
    },
    {
      title: 'Key Rings',
      description: 'Functional and stylish leather key rings. Small accessories that make a big impression.',
      image: '/images/KeyChains.jpeg',
      category: 'Key Rings'
    },
    {
      title: 'Leather',
      description: 'Premium quality leather in various finishes and colors. The foundation of all our products.',
      image: '/images/Leather.jpeg',
      category: 'Leather'
    },
  ];
  
  return (
    <section id="products" className="py-24 relative overflow-hidden bg-[rgb(0_0_0_/_0.4)]">
      {/* Using global background from CSS */}
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-white">Our Premium Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.title} {...product} category={product.category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
