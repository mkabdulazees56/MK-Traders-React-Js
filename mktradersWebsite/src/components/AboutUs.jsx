import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-2 md:py-16" id="about-us">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About MK Traders</h2>
          <p className="text-lg text-gray-600">
            MK Traders, based in Sri Lanka since 2020, specializes in global trade, with a focus on importing and exporting high-quality onions and potatoes. We take pride in our commitment to excellence and look forward to continued success in the international marketplace.
          </p>
        </div>
        <div className="flex flex-wrap items-stretch justify-center -mx-4">
          <div className="md:w-1/3 px-4 mb-8 transform transition-transform hover:scale-105">
            <div className="bg-gray-200 rounded-lg p-6 shadow-md h-full">
              <h3 className="text-xl font-bold mb-2 text-center text-gray-800">Our Mission</h3>
              <p className="text-gray-700 text-center">
                At MK Traders, we lead the global agro products industry with superior-quality offerings. We prioritize integrity, transparency, and sustainability, fostering trusted partnerships with growers, suppliers, and customers. Through innovation and efficient supply chain management, we preserve peak freshness and nutritional value, consistently exceeding customer expectations with exceptional service.
              </p>
            </div>
          </div>
          <div className="md:w-1/3 px-4 mb-8 transform transition-transform hover:scale-105">
            <div className="bg-gray-200 rounded-lg p-6 shadow-md h-full">
              <h3 className="text-xl font-bold mb-2 text-center text-gray-800">Our Vision</h3>
              <p className="text-gray-700 text-center">
                To become a globally recognized leader in agro imports, celebrated for our unwavering dedication to quality, sustainability, and customer delight. Our mission is to foster a healthier world by seamlessly connecting consumers worldwide with the freshest and most nutritious agro products sourced from India, Pakistan, and China to Sri Lanka.
              </p>
            </div>
          </div>
          <div className="md:w-1/3 px-4 mb-8 transform transition-transform hover:scale-105">
            <div className="bg-gray-200 rounded-lg p-6 shadow-md h-full">
              <h3 className="text-xl font-bold mb-2 text-center text-gray-800">Our Values</h3>
              <p className="text-gray-700 text-center">
                At MK Traders, we uphold excellence, integrity, and sustainability in global agro product delivery. Transparency is key in operations with growers, suppliers, and customers. We prioritize sustainability, minimize environmental impact, and innovate our supply chain for freshness, nutritional value, and exceeding customer expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
