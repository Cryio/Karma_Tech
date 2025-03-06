import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const slides = [
    {
      image: '/img/banner/cement-silo-shun-shing-47m.png',
      title: 'Shun Shing Group',
      subtitle: 'Cement Silo',
      description: 'Cement Silo made in Bangladesh for Shun Shing Group over a span of 4 months boasting a height of 47Mtr'
    },
    {
      image: '/img/banner/clinker-silo-meghna-49m.png',
      title: 'Meghna Group of Industries',
      subtitle: 'Clinker Silo',
      description: 'Clinker Silo for Meghna Group of Industries completed over a span of 2 month boasting 49Mtr Diameter and spaning 41Mtr High'
    },
    {
      image: '/img/banner/cement-silos-pearl-construction.png',
      title: 'Pearl Construction',
      subtitle: 'Cement Silo',
      description: '3nos. Cement Silo for 7 Ring Cement with Pearl Construction for storage of OPC and PPC Cement'
    },
    {
      image: '/img/banner/bridge-piers-mopa-36m.png',
      title: 'Ashoka Buildcon Ltd',
      subtitle: 'Bridge Piers',
      description: 'Solid Rectangular Bridge Piers for Mopa Airport Link Road Project Boasting a max height of 36Mtr for over 30 Piers under Ashoka Buildcon Ltd'
    },
    {
      image: '/img/banner/slipform-jacks-6mt.png',
      title: 'Slipform Jacks',
      subtitle: 'Slipform Jacks',
      description: '6 MT Hydraulic Jacks suitable for Slipform Shuttering'
    },
    {
      image: '/img/banner/bridge-piers-mopa-36m-2.png',
      title: 'Ashoka Buildcon Ltd',
      subtitle: 'Bridge Piers',
      description: 'Solid Rectangular Bridge Piers for Mopa Airport Link Road Project Boasting a max height of 36Mtr for over 30 Piers under Ashoka Buildcon Ltd'
    },
    {
      image: '/img/banner/clinker-silo-fresh-cement-48m.png',
      title: 'Fresh Cement',
      subtitle: 'Clinker Silo',
      description: 'Clinker Silo with 1 Lakh Ton Capacity for Fresh Cement very challenging project with an Inner Dia of 48Mtr and wall thickness of 900mm'
    },
    {
      image: '/img/banner/chimney-maitree-275m.png',
      title: 'Simplex Infrastructure Ltd',
      subtitle: 'Chimney',
      description: '275Mtr High Chimney for Maitree Power Project, Bangladesh for Simplex Infrastructure Ltd'
    },
    {
      image: '/img/banner/banner8.png',
      title: 'Our Projects',
      subtitle: 'Excellence in Construction',
      description: 'Delivering high-quality construction solutions with precision and expertise'
    },
    {
      image: '/img/banner/banner9.png',
      title: 'Innovation in Action',
      subtitle: 'Modern Construction',
      description: 'Pushing boundaries with cutting-edge construction techniques'
    },
    {
      image: '/img/banner/banner10.png',
      title: 'Quality Assurance',
      subtitle: 'Built to Last',
      description: 'Ensuring durability and reliability in every project'
    },
    {
      image: '/img/banner/banner11.png',
      title: 'Expert Team',
      subtitle: 'Professional Excellence',
      description: 'Our experienced team delivering exceptional results'
    },
    {
      image: '/img/banner/banner13.png',
      title: 'Global Projects',
      subtitle: 'International Standards',
      description: 'Meeting international quality standards across borders'
    },
    {
      image: '/img/banner/banner14.png',
      title: 'Safety First',
      subtitle: 'Workplace Safety',
      description: 'Prioritizing safety in every aspect of our operations'
    },
    {
      image: '/img/banner/banner15.png',
      title: 'Sustainable Construction',
      subtitle: 'Eco-Friendly Solutions',
      description: 'Building a sustainable future with environmentally conscious practices'
    },
    {
      image: '/img/banner/banner16.png',
      title: 'Client Satisfaction',
      subtitle: 'Exceeding Expectations',
      description: 'Dedicated to delivering beyond client expectations'
    },
    {
      image: '/img/banner/banner17.png',
      title: 'Technical Excellence',
      subtitle: 'Advanced Solutions',
      description: 'Leveraging cutting-edge technology for superior results'
    },
    {
      image: '/img/banner/banner18.png',
      title: 'Project Management',
      subtitle: 'Efficient Delivery',
      description: 'Streamlined project management for timely completion'
    },
    {
      image: '/img/banner/banner19.png',
      title: 'Quality Control',
      subtitle: 'Rigorous Standards',
      description: 'Maintaining the highest quality standards in every project'
    },
    {
      image: '/img/banner/banner20.png',
      title: 'Infrastructure Development',
      subtitle: 'Building Tomorrow',
      description: 'Contributing to the development of modern infrastructure'
    },
    {
      image: '/img/banner/banner21.png',
      title: 'Team Collaboration',
      subtitle: 'Synergy in Action',
      description: 'Working together to achieve exceptional results'
    },
    {
      image: '/img/banner/banner22.png',
      title: 'Project Excellence',
      subtitle: 'Award-Winning Work',
      description: 'Recognition for our commitment to excellence'
    },
    {
      image: '/img/banner/banner23.png',
      title: 'Future Ready',
      subtitle: 'Innovation Hub',
      description: 'Preparing for tomorrow\'s construction challenges'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleClick = () => {
    navigate('/gallery');
  };

  return (
    <div 
      className="relative h-[calc(82vh)] cursor-pointer overflow-hidden" 
      onClick={handleClick}
    >
      {/* Main Slider */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-700 transform ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Error loading image: ${slide.image}`);
                e.target.src = '/img/banner/banner8.png'; // Fallback image
              }}
              loading="eager"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
            {/* Content */}
            <div className="absolute bottom-5 left-0 right-10 p-8 md:p-16 text-white max-w-6xl mx-auto">
              <div className="space-y-4 md:space-y-6">
                <h4 className="text-4xl md:text-5xl font-bold transform transition-all duration-500 delay-300 leading-tight">
                  {slide.subtitle}
                </h4>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl transform transition-all duration-500 delay-400 leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 md:p-4 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
      >
        <FaChevronRight size={24} className="md:w-7 md:h-7" />
      </button>
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 md:p-4 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
      >
        <FaChevronLeft size={24} className="md:w-7 md:h-7" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(index);
            }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-4 md:w-6' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider; 