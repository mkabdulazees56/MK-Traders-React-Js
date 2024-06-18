import React from 'react';

const Product = ({ imageUrl, title, description }) => {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-4 transform transition-transform hover:scale-105">
            <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Product;
