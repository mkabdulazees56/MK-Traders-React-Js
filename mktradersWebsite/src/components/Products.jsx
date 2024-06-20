import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const products = [
        {
            imageUrl: '/images/product1.jpg',
            title: 'Organic Potato',
            description: 'A delicious, versatile, and affordable ingredient that forms the base of countless dishes around the world. We offer fresh, high-quality potatoes to fuel your culinary creativity.'
        },
        {
            imageUrl: '/images/product2.jpg',
            title: 'Fresh Onions',
            description: 'Onions are the unsung heroes of the kitchen, adding depth, complexity, and a touch of magic to countless recipes. We offer premium-quality onions to elevate your culinary creations.'
        },
        {
            imageUrl: '/images/product3.jpg',
            title: 'Natural Garlic',
            description: 'Our fresh garlic adds a bold, pungent kick to any dish. Elevate your cooking with this essential ingredient.'
        }
    ];

    return (
        <div className={`container mx-auto px-4 py-2 md:py-16 ${isMounted ? 'opacity-100 animate-fade-in' : 'opacity-0'}`} id="products" >
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-14 mt-14 md :text-xl ">MK Traders Products</h2>
            <div className="flex flex-wrap justify-center">
                {products.map((product, index) => (
                    <Product
                        key={index}
                        imageUrl={product.imageUrl}
                        title={product.title}
                        description={product.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
