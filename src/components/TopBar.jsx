import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200/50 font-['Inter']">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex items-center">
            <img 
              src="/img/logo.png" 
              alt="Maa Karma Logo" 
              className="h-20 w-auto"
            />
          </div>
          
          {/* Desktop Contact Info */}
          <div className="hidden md:flex w-2/3 justify-between items-center">
            <div className="flex items-center border-r pr-8">
              <FaPhone className="text-primary mr-3 text-base" />
              <div>
                <a href="tel:7909028914" className="text-gray-700 hover:text-primary transition-colors duration-200 text-sm font-medium">
                  +91 7909028914 <br />
                  +91 9967173303
                </a>
              </div>
            </div>
            <div className="flex items-center border-r px-8">
              <FaEnvelope className="text-primary mr-3 text-base" />
              <a href="mailto:info@slipformsystems.in" className="text-gray-700 hover:text-primary transition-colors duration-200 text-sm font-medium">
                info@slipformsystems.in
              </a>
            </div>
            <div className="flex items-center pl-8">
              <FaMapMarker className="text-primary mr-3 text-base" />
              <a 
                href="https://maps.app.goo.gl/AMbmFBaoS3fVLmVb7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors duration-200 text-sm font-medium max-w-[300px] truncate"
              >
                C/B/1, Malhar Sankul Apt., Agra Road, Kalyan (w) 421301, Dist. Thane, Maharashtra, India
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 