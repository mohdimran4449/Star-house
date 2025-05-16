import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[rgb(0_0_0_/_0.4)]">
      {/* Using global background from CSS */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image column */}
          <div className="w-full md:w-1/2 h-96 relative overflow-hidden rounded-sm">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: 'url("/images/About.png")' }}
            ></div>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 border-2 border-white/40 flex items-center justify-center backdrop-blur-sm bg-black/20">
                <h3 className="text-4xl font-serif text-white font-bold drop-shadow-lg">Est. 1985</h3>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-white font-serif">
              <span className="text-white">About</span> STAR HOUSE
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed">
              STAR HOUSE is a premier manufacturer and exporter of fine leather products, dedicated to crafting excellence since 1985. Our commitment to quality and craftsmanship has established us as a trusted name in the leather industry worldwide.
            </p>
            
            <p className="text-lg mb-6 leading-relaxed">
              Each product that leaves our workshop represents our passion for leather craftsmanship and attention to detail. We source only the finest materials and employ skilled artisans who combine traditional techniques with modern innovation.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-white pl-4">
                <h4 className="text-xl font-medium text-white mb-2">Craftsmanship</h4>
                <p className="text-white/80">Meticulous attention to detail in every stitch and fold</p>
                <p className="text-amber-50/80">Meticulous attention to detail in every stitch and fold</p>
              </div>
              
              <div className="border-l-2 border-purple-500 pl-4">
                <h4 className="text-xl font-medium text-amber-50 mb-2">Quality</h4>
                <p className="text-amber-50/80">Premium materials sourced from sustainable suppliers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
