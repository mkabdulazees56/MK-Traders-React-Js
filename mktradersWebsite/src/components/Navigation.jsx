import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full transition duration-500 z-50 ${isScrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <img src="/images/translogo.png" alt="logo" className="h-12 w-auto mr-2" />
          <div className="w-px h-8 bg-white mx-4"></div>
          <span className="text-3xl font-semibold" style={{ color: '#b5e5e1' }}>mk traders</span>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className={`md:flex md:space-x-8 absolute md:relative top-16 right-0 md:top-auto md:left-auto md:flex-row md:space-x-0 md:space-y-0 md:flex-1 md:items-center md:justify-end ${isOpen ? 'flex flex-col mt-4 bg-gray-800 p-4 rounded-md' : 'hidden'}`}>
          <li><a href="Home" className="block md:inline-block text-white hover:text-green-400 py-2 md:p-0">Home</a></li>
          <li><a href="About Us" className="block md:inline-block text-white hover:text-green-400 py-2 md:p-0">About Us</a></li>
          <li><a href="Our Process" className="block md:inline-block text-white hover:text-green-400 py-2 md:p-0">Our Process</a></li>
          <li><a href="Why Us" className="block md:inline-block text-white hover:text-green-400 py-2 md:p-0">Why Us?</a></li>
          <li><a href="Contact" className="block md:inline-block text-white hover:text-green-400 py-2 md:p-0">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;