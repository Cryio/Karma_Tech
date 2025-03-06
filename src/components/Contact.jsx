import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaMapMarker className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <address className="text-gray-700 not-italic">
              <a 
                href="https://maps.app.goo.gl/AMbmFBaoS3fVLmVb7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                C/B/1, Malhar Sankul Apt., <br />
                Opp.Mohinder Singh School, <br />
                Agra Road, Kalyan (w) 421301, <br />
                Dist. Thane, Maharashtra, India
              </a>
            </address>
          </div>

          <div className="text-center">
            <FaPhone className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Phone</h3>
            <div className="text-gray-700">
              <a href="tel:7909028914" className="hover:text-primary transition-colors">
                7909028914 /<br />
                +91 9967173303 /<br />
                +91 9619434360
              </a>
            </div>
          </div>

          <div className="text-center">
            <FaEnvelope className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Email</h3>
            <div className="text-gray-700 space-y-2">
              <a 
                href="mailto:info@slipformsystems.in" 
                className="block hover:text-primary transition-colors"
              >
                info@slipformsystems.in
              </a>
              <a 
                href="mailto:maakarma27@gmail.com" 
                className="block hover:text-primary transition-colors"
              >
                maakarma27@gmail.com
              </a>
              <a 
                href="mailto:karmatech27@gmail.com" 
                className="block hover:text-primary transition-colors"
              >
                karmatech27@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 