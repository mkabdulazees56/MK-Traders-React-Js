import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactUsPage = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-lg text-gray-600">
                        We'd love to hear from you! Reach out to us using the form below or through our social media channels.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Contact Form */}
                    <div className="bg-white rounded-lg p-8 shadow-md md:col-span-3">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="mt-6 px-8 py-3 bg-gray-800 text-white rounded-[25px] font-semibold hover:bg-[#b5e5e1] hover:text-black focus:outline-none focus:bg-[#b5e5e1]"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white rounded-lg p-8 shadow-md md:col-span-2">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                        <div className="mb-4 flex items-center">
                            <FontAwesomeIcon icon={faPhone} className="text-gray-800 text-xl mr-4" />
                            <div>
                                <p className="text-gray-700">+94 777276471</p>
                                <p className="text-gray-600 text-sm">Mon - Fri, 8am - 5pm</p>
                            </div>
                        </div>
                        <div className="mb-4 flex items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="text-gray-800 text-xl mr-4" />
                            <div>
                                <p className="text-gray-700">biz@mktraders.lk</p>
                                <p className="text-gray-600 text-sm">We reply within 24 hours</p>
                            </div>
                        </div>
                        <div className="mb-4 flex items-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-800 text-xl mr-4" />
                            <div>
                                <p className="text-gray-700">No :- 83 ,Colombo Gold Centre, N.H.M.Abdul Cader Mawatha.</p>
                                <p className="text-gray-600 text-sm">Colombo 11, Sri Lanka.</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-blue-500 hover:text-blue-700">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://twitter.com" className="text-green-400 hover:text-green-600">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>
                            <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
