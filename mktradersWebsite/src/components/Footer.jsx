import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4 lg:px-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-4">MK Traders</h2>
                        <p className="text-gray-400">
                            At MK Traders, we pride ourselves on being a leading importer of high-quality agro products sourced from the finest farms of India, Pakistan, and China.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4 lg:px-0 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <div className="flex flex-col items-center md:flex-row md:items-start mb-4">
                            <FontAwesomeIcon icon={faPhone} className="text-green-500 text-xl md:mr-4" />
                            <p className="text-gray-400">+94 777276471</p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row md:items-start mb-4">
                            <FontAwesomeIcon icon={faEnvelope} className="text-green-500 text-xl md:mr-4" />
                            <p className="text-gray-400">biz@mktraders.lk</p>
                        </div>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://facebook.com" className="text-blue-500 hover:text-blue-700">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://whatsapp.com" className="text-green-500 hover:text-green-700">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>
                            <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4 lg:px-0 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-4">Website Links</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2">
                                <a href="#" className="hover:text-white">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white">Products</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4 lg:px-0 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-4">Our Location</h3>
                        <div className="flex flex-col items-center md:flex-row md:items-start mb-4">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-500 text-xl md:mr-4" />
                            <p className="text-gray-400">
                                No :- 83, Colombo Gold Centre, N.H.M.Abdul Cader Mawatha.
                            </p>
                        </div>
                        <div className="mb-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.583664663414!2d79.84860606973572!3d6.940257802867981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2592e1b3872af%3A0x11c5b415a4dc65e6!2sM.K.%20TRADERS%20(PVT)%20LTD!5e0!3m2!1sen!2sin!4v1718799594236!5m2!1sen!2sin"
                                width="100%"
                                height="150"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    
                </div>
                <div className="text-center text-gray-400 mt-8">
                    © 2024 All rights reserved. Development with <span className="text-pink-500">❤</span> by DevZee.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

