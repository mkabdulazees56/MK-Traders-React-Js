import React from 'react';
import './index.css'
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Process from './components/Process';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero/>
      <Products/>
      <AboutUs/>
      <Process/>
    </div>
  );
}

export default App;
