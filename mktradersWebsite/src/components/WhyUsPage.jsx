import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faLeaf, faUsers, faShippingFast, faAward, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';

const WhyUs = () => {
    const options = [
        { icon: faCertificate, title: 'Uncompromising Quality', description: 'We adhere to stringent quality standards to ensure every product meets and exceeds global expectations.', color: 'bg-green-500' },
        { icon: faLeaf, title: 'Sustainable Practices', description: 'Our commitment to sustainable farming practices ensures minimal environmental impact and maximum freshness.', color: 'bg-blue-500' },
        { icon: faUsers, title: 'Exceptional Service', description: 'Experience unparalleled customer service with dedicated support and timely responses to your needs.', color: 'bg-purple-500' },
        { icon: faShippingFast, title: 'Fast Shipping', description: 'Timely delivery with efficient shipping solutions to ensure products reach you quickly.', color: 'bg-red-500' },
        { icon: faAward, title: 'Award-winning Products', description: 'Recognized for excellence in product innovation and quality, awarded by industry experts.', color: 'bg-yellow-500' },
        { icon: faHeart, title: 'Customer Satisfaction', description: 'Our priority is your satisfaction, ensuring you receive personalized service and support.', color: 'bg-pink-500' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [swipeDirection, setSwipeDirection] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Set mobile view threshold
        };

        handleResize(); // Check initial size
        window.addEventListener('resize', handleResize); // Add resize listener

        return () => window.removeEventListener('resize', handleResize); // Cleanup listener
    }, []);

    const handleSwipeLeft = () => {
        setSwipeDirection('left');
        setCurrentIndex(prevIndex => (prevIndex + 1) % options.length);
    };

    const handleSwipeRight = () => {
        setSwipeDirection('right');
        setCurrentIndex(prevIndex => (prevIndex - 1 + options.length) % options.length);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <section className="bg-gray-100 py-16" id="why-us">
            <div className="container mx-auto px-4" >
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose MK Traders?</h2>
                    <p className="text-lg text-gray-600">
                        Discover why MK Traders stands out as your premier choice for high-quality agricultural products and services.
                    </p>
                </div>

                {isMobile ? (
                    <div {...swipeHandlers} className="overflow-hidden relative">
                        <div
                            key={currentIndex}
                            className={`bg-white rounded-lg p-8 shadow-md text-center transition-transform duration-500 ease-in-out ${swipeDirection === 'left' ? 'animate-slideLeft' : swipeDirection === 'right' ? 'animate-slideRight' : ''}`}
                        >
                            <div className={`mb-6 mx-auto w-20 h-20 ${options[currentIndex].color} text-white rounded-full flex items-center justify-center text-4xl font-bold`}>
                                <FontAwesomeIcon icon={options[currentIndex].icon} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{options[currentIndex].title}</h3>
                            <p className="text-gray-700">{options[currentIndex].description}</p>
                        </div>
                        {/* Dots */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
                            {options.map((_, index) => (
                                <span
                                    key={index}
                                    className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                        {options.map((option, index) => (
                            <div key={index} className="bg-white rounded-lg p-8 shadow-md text-center transform transition-transform hover:scale-105">
                                <div className={`mb-6 mx-auto w-20 h-20 ${option.color} text-white rounded-full flex items-center justify-center text-4xl font-bold `}>
                                    <FontAwesomeIcon icon={option.icon} />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{option.title}</h3>
                                <p className="text-gray-700">{option.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <style jsx>{`
                @keyframes slideLeft {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }

                @keyframes slideRight {
                    from {
                        transform: translateX(-100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }

                .animate-slideLeft {
                    animation: slideLeft 0.5s forwards;
                }

                .animate-slideRight {
                    animation: slideRight 0.5s forwards;
                }
            `}</style>
        </section>
    );
};

export default WhyUs;
