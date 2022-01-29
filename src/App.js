import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Press from './components/Press';
import Pricing from './components/Pricing';
import Cta from './components/cta';
import Footer from  './components/footer';
function App() {
  return (
    <>
   <Navbar />
          <Hero />
          <Features />
          <Testimonials />
          <Press />
        <Pricing />
        <Cta />
        <Footer /> 

    </>
  );
}

export default App;
