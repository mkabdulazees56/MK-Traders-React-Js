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
import WhatsAppIcon from './components/WhatsAppIcon'

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
      <WhatsAppIcon phoneNumber="+94777276471" />
    </div>
  );
}

export default App;
