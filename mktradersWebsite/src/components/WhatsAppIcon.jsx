import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppIcon = ({ phoneNumber }) => {
  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className="fixed bottom-10 right-10 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 cursor-pointer shadow-lg animate-pulse"
      onClick={openWhatsApp}
      title="Open WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="h-8 w-8" />
    </div>
  );
};

export default WhatsAppIcon;
