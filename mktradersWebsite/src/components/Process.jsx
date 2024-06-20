import React, { useState } from 'react';

const OurProcess = () => {
  const [activeTab, setActiveTab] = useState(0); // State to track active tab index

  // Process steps data
  const steps = [
    {
      title: 'Procurement and Farming',
      description: [
        { heading: 'Sourcing:', text: 'We procure vegetables from trusted growers and suppliers who adhere to our strict quality and sustainability standards.' },
        { heading: 'Farming Practices:', text: 'Our partner farms employ sustainable farming practices, carefully nurturing crops to ensure optimal quality and flavor.' }
      ],
      image: '/images/2.jpg',
    },
    {
      title: 'Quality Control and Inspection',
      description: [
        { heading: 'Initial Inspection:', text: 'Upon arrival at our facilities, vegetables undergo thorough inspection to ensure freshness and quality.' },
        { heading: 'Sorting and Grading:', text: ' Our team sorts and grades the vegetables based on size, color, and quality, discarding any items that do not meet our standards.' }
      ],
      image: '/images/s1.jpg',
    },
    {
      title: 'Packaging and Preparation',
      description: [
        { heading: 'Packaging:', text: 'Vegetables are carefully packed in specialized containers or packaging materials designed to preserve freshness and prevent damage during transit.' },
        { heading: 'Labeling and Documentation:', text: 'Each package is labeled with detailed information, including product specifications, batch numbers, and expiration dates. All necessary export documentation is prepared accurately and efficiently.' }
      ],
      image: '/images/s2.jpg',
    },
    {
      title: 'Cold Storage and Transportation',
      description: [
        { heading: 'Cold Storage:', text: 'Packed vegetables are stored in temperature-controlled facilities to maintain freshness and extend shelf life.' },
        { heading: 'Transportation:', text: 'Our logistics team coordinates the transportation of vegetables, ensuring they are loaded onto refrigerated trucks or shipping containers for transport to ports or airports.' }
      ],
      image: '/images/s3.png',
    },
    {
      title: 'Customs Clearance and Documentation',
      description: [
        { heading: 'Customs Procedures:', text: 'Our team manages all customs clearance procedures, including documentation submission and compliance with regulatory requirements.' },
        { heading: 'Import Documentation:', text: 'We ensure all import documentation, including certificates of origin, phytosanitary certificates, and commercial invoices, is accurate and complete.' }
      ],
      image: '/images/s4.jpg',
    },
    {
      title: 'Shipping and Transit',
      description: [
        { heading: 'Shipping Coordination:', text: 'We work closely with shipping companies to schedule timely departures and monitor the progress of shipments.' },
        { heading: 'Transit Monitoring:', text: 'Our team tracks shipments throughout transit, providing regular updates to customers on the status and estimated arrival time.' }
      ],
      image: '/images/s5.jpg',
    },
    {
      title: 'Delivery and Receipt',
      description: [
        { heading: 'Final Mile Delivery', text: 'Upon arrival at the destination port or airport, vegetables are transferred to local distribution centres for final mile delivery.' },
        { heading: 'Customer Receipt', text: 'Customers receive their vegetable shipments at their designated delivery locations, ensuring they are promptly informed and prepared to receive their orders.' }
      ],
      image: '/images/s6.jpg',
    },
    {
      title: 'Customer Support and Feedback',
      description: [
        { heading: 'Support Services:', text: 'Our customer support team is available to assist customers throughout the export process, addressing any inquiries or concerns promptly and professionally.' },
        { heading: 'Feedback Collection', text: 'We value customer feedback and encourage customers to provide input on their experience with our products and services, allowing us to continually improve and enhance our export process.' }
      ],
      image: '/images/s7.jpg',
    },
  ];

  // Function to handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index); // Set active tab index
  };

  return (
    <section className="bg-gray-100 py-16 relative" id="our-process">
      <div className="container mx-auto px-4 " >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600">
            At MK Traders, we are dedicated to delivering the finest quality vegetables to our customers around the globe. Our meticulous import process guarantees that every product arrives in pristine condition, reflecting our commitment to excellence. Here’s an in-depth look at how we achieve this:
          </p>
        </div>
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Titles column (40% on large screens, 100% on mobile) */}
          <div className="col-span-1 md:col-span-2 space-y-4 relative md:w-40%">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => handleTabClick(index)}
                className={`relative cursor-pointer rounded-lg p-4 shadow-md transition duration-300 ${activeTab === index ? 'bg-gray-800 text-white' : 'bg-white text-black hover:bg-gray-800 hover:text-white'
                  }`}
              >
                <h3 className="text-lg font-bold px-8">{step.title}</h3>
                <div className="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg">
                  {index + 1}
                </div>
                {/* Add arrow only when tab is active */}
                {activeTab === index && (
                  <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 translate-x-4">
                    <div className="arrow"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Expanded details column (60%) */}
          <div className="col-span-1 md:col-span-3 bg-white rounded-lg p-6 shadow-md relative">
            <div className="h-full flex flex-col justify-center items-center">
              <div className="relative z-10 w-full">
                <h3 className="text-xl font-bold mb-4 text-center">{steps[activeTab].title}</h3>
                <ul className="text-gray-700 mb-4 list-disc list-inside">
                  {steps[activeTab].description.map((desc, index) => (
                    <li key={index} className="pl-4">
                      <strong>{desc.heading}</strong> {desc.text}
                    </li>
                  ))}
                </ul>
                <div className="rounded-md overflow-hidden shadow-md mx-auto w-full h-72">
                  <img
                    src={steps[activeTab].image}
                    alt={steps[activeTab].title}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Custom styles for this component */}
      <style jsx>{`
        .arrow {
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 10px solid gray;
          position: absolute;
          transform: translateY(-50%);
        }

        .arrow::before {
          content: '';
          position: absolute;
          top: -5px;
          left: 10px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: gray;
        }

        .list-disc li {
          padding-left: 1em; /* Adjust this value to control the indent */
        }
      `}</style>
    </section>
  );
};

export default OurProcess;
