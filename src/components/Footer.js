import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <footer className="bg-[rgb(0_0_0_/_0.4)] text-white pt-16 pb-8 border-t border-white/10 shadow-lg relative overflow-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-8 transform hover:scale-105 transition-transform duration-300">
              <img src="/PHOTO-2025-05-13-16-20-20.jpg" alt="STAR HOUSE" className="h-20 drop-shadow-lg" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting excellence since 1985. Discover our range of high-quality leather goods 
              made with traditional craftsmanship and premium materials.
            </p>

          </div>

          
          {/* Quick Links */}
          <div className="pl-0 sm:pl-4 md:pl-8 lg:pl-16">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-white/20 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {isHomePage ? (
                <>
                  <li>
                    <ScrollLink to="home" smooth={true} duration={500} className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                      Home
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="about" smooth={true} duration={500} className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                      About Us
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="products" smooth={true} duration={500} className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                      Products
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="gallery" smooth={true} duration={500} className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                      Gallery
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="csr" smooth={true} duration={500} className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                      CSR
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                      Contact
                    </ScrollLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/#about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/#products" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/#gallery" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/#csr" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                      CSR
                    </Link>
                  </li>
                  <li>
                    <Link to="/#contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                      Contact
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-white/20 inline-block">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/equestrian" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                  Equestrian
                </Link>
              </li>
              <li>
                <Link to="/leather-belts" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                  Leather Belts
                </Link>
              </li>
              <li>
                <Link to="/dog-collar" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                  Dog Collars
                </Link>
              </li>
              <li>
                <Link to="/key-chains" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                  Key Chains
                </Link>
              </li>
              <li>
                <Link to="/leather" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                  Leather
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-white/20 inline-block">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-300">Plot No. 57-64 Near Durga Mandir,<br />Wajidpur, Jajmau,<br />Kanpur, U.P. INDIA 208010</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-300">+91 9695100777<br />+91 9559700777<br />+91 9793700777</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-300">info@star-house.in</span>
              </li>

            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <p className="text-center text-gray-400 text-xs sm:text-sm font-light tracking-wide">
            &copy; {currentYear} STAR HOUSE. All rights reserved. Premium leather products since 1985.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;