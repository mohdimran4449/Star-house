import React from 'react';

const CSR = () => {
  return (
    <section id="csr" className="py-24 relative overflow-hidden bg-[rgb(0_0_0_/_0.4)]">
      {/* Using global background from CSS */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white font-serif mb-4">
            Corporate Social Responsibility
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            At STAR HOUSE, we believe in giving back to our community and protecting our environment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Environmental Initiatives */}
          <div className="bg-[#1a0d40]/50 p-6 rounded-sm">
            <div className="text-white mb-4">
              <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white text-center mb-4">Environmental Initiatives</h3>
            <p className="text-white/80 text-center mb-4">
              We're committed to sustainable production practices that minimize our environmental footprint.
            </p>
            <ul className="text-white/80 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Responsible sourcing of raw materials</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Waste reduction and recycling programs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Energy-efficient manufacturing processes</span>
              </li>
            </ul>
          </div>
          
          {/* Community Engagement */}
          <div className="bg-[#1a0d40]/50 p-6 rounded-sm">
            <div className="text-white mb-4">
              <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white text-center mb-4">Community Engagement</h3>
            <p className="text-white/80 text-center mb-4">
              We actively support and engage with our local communities through various initiatives.
            </p>
            <ul className="text-white/80 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Skills development programs for local youth</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Support for local artisans and craftspeople</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Charitable partnerships with local organizations</span>
              </li>
            </ul>
          </div>
          
          {/* Workplace Ethics */}
          <div className="bg-[#1a0d40]/50 p-6 rounded-sm">
            <div className="text-white mb-4">
              <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white text-center mb-4">Workplace Ethics</h3>
            <p className="text-white/80 text-center mb-4">
              We maintain high ethical standards in our workplace and throughout our supply chain.
            </p>
            <ul className="text-white/80 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Fair wages and safe working conditions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Gender equality and diversity initiatives</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Strict adherence to labor laws and regulations</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/80 max-w-3xl mx-auto">
            Our commitment to corporate social responsibility is an integral part of our business philosophy. 
            We believe that sustainable and ethical practices not only benefit our community and environment 
            but also result in superior products that our customers can feel good about.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CSR;
