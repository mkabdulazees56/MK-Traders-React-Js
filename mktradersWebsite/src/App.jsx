import React from 'react';
import './index.css'
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Process from './components/Process';
import WhyUsPage from './components/WhyUsPage';
import ContactUsPage from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero/>
      <Products/>
      <AboutUs/>
      <Process/>
      <WhyUsPage/>
      <ContactUsPage/>
      <Footer/>
    </div>
  );
}

export default App;
