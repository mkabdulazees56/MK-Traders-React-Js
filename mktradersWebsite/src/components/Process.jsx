import React, { useState } from 'react';

const OurProcess = () => {
  const [activeTab, setActiveTab] = useState(0); // State to track active tab index

  // Process steps data
  const steps = [
    {
      title: 'Procurement and Farming',
      description: 'Conduct market research and source high-quality agro products globally.',
      image: '/images/research.jpg',
    },
    {
      title: 'Quality Control and Inspection',
      description: 'Ensure strict quality control measures to maintain product standards.',
      image: '/images/quality-assurance.jpg',
    },
    {
      title: 'Packaging and Preparation',
      description: 'Customize eco-friendly packaging solutions tailored to client needs.',
      image: '/images/packaging.jpg',
    },
    {
      title: 'Cold Storage and Transportation',
      description: 'Manage efficient transportation and logistics for timely delivery.',
      image: '/images/logistics.jpg',
    },
    {
      title: 'Customs Clearance and Documentation',
      description: 'Provide personalized support and ensure customer satisfaction.',
      image: '/images/customer-support.jpg',
    },
    {
      title: 'Shipping and Transit',
      description: 'Build strong partnerships with growers, suppliers, and stakeholders.',
      image: '/images/partnerships.jpg',
    },
    {
      title: 'Delivery and Receipt',
      description: 'Analyze market trends and adapt strategies to meet demands.',
      image: '/images/market-analysis.jpg',
    },
    {
      title: 'Customer Support and Feedback',
      description: 'Seek feedback and innovate processes for ongoing enhancement.',
      image: '/images/continuous-improvement.jpg',
    },
  ];

  // Function to handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index); // Set active tab index
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600">
            Discover our streamlined process that ensures superior quality and service at every step.
          </p>
        </div>
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Titles column (40%) */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => handleTabClick(index)}
                className={`relative cursor-pointer rounded-lg p-4 bg-white shadow-md transition duration-300 ${
                  activeTab === index ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                }`}
              >
                <h3 className="text-lg font-bold">{step.title}</h3>
                <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
          {/* Expanded details column (60%) */}
          <div className="col-span-6 md:col-span-3 bg-white rounded-lg p-6 shadow-md relative">
            <h3 className="text-xl font-bold mb-4">{steps[activeTab].title}</h3>
            <p className="text-gray-700 mb-4">{steps[activeTab].description}</p>
            <img
              src={steps[activeTab].image}
              alt={steps[activeTab].title}
              className="rounded-md shadow-md mx-auto w-full"
            />
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-tl-lg rounded-br-lg">
              {activeTab + 1}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
