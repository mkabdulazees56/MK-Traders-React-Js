import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="relative bg-cover bg-center h-screen flex items-center " id="home"
            style={{
                backgroundImage: `url("${images[currentIndex]}")`,
                transition: 'background-image 1s ease-in-out'
            }}
        >
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            <div className="container mx-auto px-4 z-20">
                <div className="text-center text-white relative">
                    <h1 className="text-4xl md:text-7xl font-bold">WELCOME TO MK TRADERS</h1>
                    <p className="mt-4 text-lg md:px-60">
                        Delve into our carefully curated selection of top-tier agricultural offerings, featuring everything from exquisite fresh produce to innovative value-added products. Crafted to meet the exacting standards of global markets, each item promises unparalleled quality and freshness. Elevate your agricultural experience with us today.
                    </p>
                    <button className="mt-6 px-8 py-3 bg-gray-800 text-white rounded-[25px] font-semibold hover:bg-[#b5e5e1] hover:text-black transform hover:scale-110 transition-transform duration-300">
                        Explore
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Hero;
