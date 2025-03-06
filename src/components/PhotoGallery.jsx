import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PhotoGallery = ({ showThumbnails = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/img/banner/banner1.png',
      title: 'Shun Shing Group',
      subtitle: 'Cement Silo',
      description: 'Cement Silo made in Bangladesh for Shun Shing Group over a span of 4 months boasting a height of 47Mtr'
    },
    {
      image: '/img/banner/banner2.png',
      title: 'Meghna Group of Industries',
      subtitle: 'Clinker Silo',
      description: 'Clinker Silo for Meghna Group of Industries completed over a span of 2 month boasting 49Mtr Diameter and spaning 41Mtr High'
    },
    {
      image: '/img/banner/banner3.png',
      title: 'Pearl Construction',
      subtitle: 'Cement Silo',
      description: '3nos. Cement Silo for 7 Ring Cement with Pearl Construction for storage of OPC and PPC Cement'
    },
    {
      image: '/img/banner/banner4.png',
      title: 'Ashoka Buildcon Ltd',
      subtitle: 'Bridge Piers',
      description: 'Solid Rectangular Bridge Piers for Mopa Airport Link Road Project Boasting a max height of 36Mtr for over 30 Piers under Ashoka Buildcon Ltd'
    },
    {
      image: '/img/banner/banner5.png',
      title: 'Slipform Jacks',
      subtitle: 'Slipform Jacks',
      description: '6 MT Hydraulic Jacks suitable for Slipform Shuttering'
    },
    {
      image: '/img/banner/banner6.png',
      title: 'Ashoka Buildcon Ltd',
      subtitle: 'Bridge Piers',
      description: 'Solid Rectangular Bridge Piers for Mopa Airport Link Road Project Boasting a max height of 36Mtr for over 30 Piers under Ashoka Buildcon Ltd'
    },
    {
      image: '/img/banner/banner7.png',
      title: 'Fresh Cement',
      subtitle: 'Clinker Silo',
      description: 'Clinker Silo with 1 Lakh Ton Capacity for Fresh Cement very challenging project with an Inner Dia of 48Mtr and wall thickness of 900mm'
    },
    {
      image: '/img/banner/banner12.png',
      title: 'Simplex Infrastructure Ltd',
      subtitle: 'Chimney',
      description: '275Mtr High Chimney for Maitree Power Project, Bangladesh for Simplex Infrastructure Ltd'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Main Slider */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
              <h3 className="text-xl font-semibold">{slide.title}</h3>
              <h4 className="text-2xl font-bold mb-2">{slide.subtitle}</h4>
              <p className="text-gray-200">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Thumbnails - Only shown if showThumbnails prop is true */}
      {showThumbnails && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentSlide ? 'border-primary' : 'border-transparent'
              }`}
            >
              <img
                src={slide.image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery; 