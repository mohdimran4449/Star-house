import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine scroll direction and update visibility
      if (currentScrollY > lastScrollY.current + 10) {
        // Scrolling down
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current - 10) {
        // Scrolling up
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-transform duration-300 bg-[rgb(0_0_0_/_0.4)] shadow-lg
        ${!visible ? '-translate-y-full' : 'translate-y-0'}
      `}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <RouterLink to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
          <img src="/PHOTO-2025-05-13-16-20-20.jpg" alt="STAR HOUSE" className="h-16 my-2" />
        </RouterLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {isHomePage ? (
            <>
              <ScrollLink to="home" smooth={true} className="text-white hover:text-white/80 transition-colors cursor-pointer">
                Home
              </ScrollLink>
              <ScrollLink to="about" smooth={true} className="text-white hover:text-white/80 transition-colors cursor-pointer">
                About
              </ScrollLink>
              <ScrollLink to="products" smooth={true} className="text-white hover:text-white/80 transition-colors cursor-pointer">
                Products
              </ScrollLink>
              <ScrollLink to="gallery" smooth={true} className="text-white hover:text-white/80 transition-colors cursor-pointer">
                Gallery
              </ScrollLink>
              <ScrollLink to="csr" smooth={true} className="text-white hover:text-white/80 transition-colors cursor-pointer">
                CSR
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} className="text-white hover:text-white/80 transition-colors cursor-pointer">
                Contact
              </ScrollLink>
            </>
          ) : (
            <RouterLink to="/" className="text-white hover:text-white/80 transition-colors cursor-pointer">
              Back to Home
            </RouterLink>
          )}
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none cursor-pointer">
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/50 md:hidden" onClick={() => setMenuOpen(false)} />
        )}

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[rgb(0_0_0_/_0.4)] transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <div className="flex justify-end mb-8">
              <button onClick={() => setMenuOpen(false)} className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <ScrollLink to="home" smooth={true} className="text-white hover:text-white/80 transition-colors cursor-pointer" onClick={() => setMenuOpen(false)}>
                    Home
                  </ScrollLink>
                  <ScrollLink to="about" smooth={true} className="text-white hover:text-white/80 transition-colors cursor-pointer" onClick={() => setMenuOpen(false)}>
                    About
                  </ScrollLink>
                  <ScrollLink to="products" smooth={true} className="text-white hover:text-white/80 transition-colors cursor-pointer" onClick={() => setMenuOpen(false)}>
                    Products
                  </ScrollLink>
                  <ScrollLink to="gallery" smooth={true} className="text-white hover:text-white/80 transition-colors cursor-pointer" onClick={() => setMenuOpen(false)}>
                    Gallery
                  </ScrollLink>
                  <ScrollLink to="csr" smooth={true} className="text-white hover:text-white/80 transition-colors cursor-pointer" onClick={() => setMenuOpen(false)}>
                    CSR
                  </ScrollLink>
                  <ScrollLink to="contact" smooth={true} className="text-white hover:text-white/80 transition-colors cursor-pointer" onClick={() => setMenuOpen(false)}>
                    Contact
                  </ScrollLink>
                </>
              ) : (
                <RouterLink to="/" className="text-white hover:text-white/80 transition-colors cursor-pointer" onClick={() => setMenuOpen(false)}>
                  Back to Home
                </RouterLink>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
