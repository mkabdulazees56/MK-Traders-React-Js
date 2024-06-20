import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactUsPage = () => {
    const form = useRef();
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
    const [formErrors, setFormErrors] = useState({ user_name: '', user_email: '', message: '' });

    useEffect(() => {
        let timer;
        if (popupVisible) {
            timer = setTimeout(() => {
                setPopupVisible(false);
                setPopupMessage('');
            }, 3000); // Close popup after 3 seconds
        }
        return () => clearTimeout(timer);
    }, [popupVisible]);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.user_name) {
            errors.user_name = 'Name is required';
        }
        if (!formData.user_email) {
            errors.user_email = 'Email is required';
        } else if (!isValidEmail(formData.user_email)) {
            errors.user_email = 'Invalid email address';
        }
        if (!formData.message) {
            errors.message = 'Message is required';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (validateForm()) {
            emailjs.sendForm('service_9ujz86j', 'template_c049073', form.current, 'XlOnUKELNJmFtSAU3')
                .then(
                    () => {
                        setPopupMessage('Message sent successfully!');
                        setPopupVisible(true);
                        setFormData({ user_name: '', user_email: '', message: '' });
                    },
                    (error) => {
                        setPopupMessage('Failed to send message: ' + error.text);
                        setPopupVisible(true);
                    }
                );
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="bg-gray-100 py-16 relative" id="contact">
            {popupVisible && (
                <>
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white p-20 rounded shadow-lg text-center relative z-10">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-5xl mb-4" />
                            <p className="mb-4">{popupMessage}</p>
                        </div>
                    </div>
                </>
            )}
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
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">Name</label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.user_name ? 'border-red-500' : ''}`}
                                    placeholder="Your Name"
                                />
                                {formErrors.user_name && <p className="text-red-500 text-xs italic">{formErrors.user_name}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">Email</label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.user_email ? 'border-red-500' : ''}`}
                                    placeholder="Your Email"
                                />
                                {formErrors.user_email && <p className="text-red-500 text-xs italic">{formErrors.user_email}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.message ? 'border-red-500' : ''}`}
                                    placeholder="Your Message"
                                ></textarea>
                                {formErrors.message && <p className="text-red-500 text-xs italic">{formErrors.message}</p>}
                            </div>
                            <button
                                type="submit"
                                value="Send"
                                className="mt-6 px-8 py-3 bg-gray-800 text-white rounded-[25px] font-semibold hover:bg-[#b5e5e1] hover:text-black transform hover:scale-110 transition-transform duration-300"
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
                                <p className="text-gray-600 text-sm">We reply within 12 hours</p>
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
                            <a href="https://www.facebook.com/share/HnmWzUNj8FrZSBiD/?mibextid=LQQJ4d" target="_blank"
                                rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href={`https://wa.me/${+94777276471}?text=Hello!%20This%20is%20a%20dummy%20message.`} className="text-green-400 hover:text-green-600" target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>
                            <a href="home" className="text-pink-500 hover:text-pink-700">
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
