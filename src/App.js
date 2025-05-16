import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Products from './components/Products';
import CSR from './components/CSR';
import Contact from './components/Contact';
import Equestrian from './components/Equestrian';
import LeatherBelts from './components/LeatherBelts';
import Leather from './components/Leather';
import DogCollar from './components/DogCollar';
import KeyChains from './components/KeyChains';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[rgb(0_0_0_/_0.4)]">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Home />
              <About />
              <Gallery />
              <Products />
              <CSR />
              <Contact />
            </main>
          } />
          <Route path="/equestrian" element={<Equestrian />} />
          <Route path="/leather-belts" element={<LeatherBelts />} />
          <Route path="/leather" element={<Leather />} />
          <Route path="/dog-collar" element={<DogCollar />} />
          <Route path="/key-chains" element={<KeyChains />} />
        </Routes>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
