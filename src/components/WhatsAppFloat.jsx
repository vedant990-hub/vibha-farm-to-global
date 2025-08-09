import React from 'react';
import './WhatsAppFloat.css';

const WHATSAPP_LINK =
  "https://wa.me/919833166617?text=Hi%20Vibha%20Exim%2C%20I'm%20interested%20in%20your%20products.";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    <img
      src="https://img.icons8.com/color/96/000000/whatsapp.png"
      alt="WhatsApp"
    />
  </a>
);

export default WhatsAppFloat; 