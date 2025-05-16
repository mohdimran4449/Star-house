import React from 'react';

const Gallery = () => {

  // Gallery images with Factory, Creative Workers, and Production Machine
  const galleryImages = [
    { 
      id: 1, 
      title: 'Our Factory', 
      category: 'facility',
      image: '/images/Factory.png',
      description: "At STAR HOUSE, our factory is more than just a production space — it's where craftsmanship, innovation, and precision come together. Spread across a vertically constructed G+2 facility, each floor boasts 15,000 sq. ft. of state-of-the-art manufacturing space.\n\nEquipped with modern machinery and skilled artisans, our unit is capable of handling everything from raw leather processing to finished product assembly. Whether it's crafting durable equestrian gear, refined belts, or stylish dog collars, every item is produced under stringent quality control to meet global standards.\n\nOur commitment to excellence ensures that every product reflects the authenticity and durability that STAR HOUSE stands for."
    },
    { 
      id: 2, 
      title: 'Creative Workers', 
      category: 'people',
      image: '/images/CreativeWorker.png',
      description: "At STAR HOUSE, teamwork is at the heart of everything we do. Our operations are powered by a highly skilled workforce of over 100 dedicated men and women, each contributing their expertise across various stages of production.\n\nMany of our products are brought to life by talented handcrafting professionals, ensuring a unique blend of tradition and precision. To maintain quality, efficiency, and transparency, our entire facility is monitored with CCTV surveillance, helping us stay organized and focused on delivering exceptional leather goods."
    },
    { 
      id: 3, 
      title: 'Production Machine', 
      category: 'equipment',
      image: '/images/ProductionMachine.png',
      description: "Our facility is equipped with cutting-edge machinery imported from Italy and Taiwan, ensuring precision, efficiency, and superior craftsmanship.\n\nWe continuously invest in trend-driven product development to meet the evolving demands of the global fashion industry. By combining innovation with cost-effective production, we deliver high-quality leather goods that strike the perfect balance between style, performance, and value."
    },
  ];



  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[rgb(0_0_0_/_0.4)]">
      {/* Using global background from CSS */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white font-serif mb-4">
            Our Manufacturing Excellence
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore our factory, creative workforce, and production machinery that bring our premium leather products to life
          </p>
        </div>
        
        {/* Gallery Items */}
        <div className="space-y-16">
          {galleryImages.map((image) => (
            <div key={image.id} className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Image Column */}
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-sm h-[400px]">
                <img 
                  src={image.image} 
                  alt={image.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white text-sm uppercase tracking-wider mb-1">{image.category}</span>
                  <h3 className="text-white text-2xl font-medium">{image.title}</h3>
                </div>
              </div>
              
              {/* Content Column */}
              <div className="w-full lg:w-1/2 p-6 bg-[#1a0d40]/50 rounded-sm">
                {image.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-white/90 mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      

    </section>
  );
};

export default Gallery;
