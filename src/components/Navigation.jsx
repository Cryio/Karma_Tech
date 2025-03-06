import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isGalleryPage = location.pathname === '/gallery';

  const menuItems = [
    { id: 'projects', label: 'Projects', path: '/gallery' },
    { id: 'specialties', label: 'Specialties' },
    { id: 'clientele', label: 'Clientele' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const visibleMenuItems = isGalleryPage
    ? menuItems.filter(item => item.id !== 'projects')
    : menuItems;

  const handleClick = (e) => {
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`bg-white/60 backdrop-blur-md sticky top-0 z-50 border-t border-gray-200/50 font-['Inter'] ${!isGalleryPage ? 'shadow-md' : 'hidden'}`}>
      <div className="container mx-auto px-4">
        {/* Mobile Menu Button and Logo */}
        <div className="md:hidden flex justify-between items-center py-3">
          <img 
            src="/img/logo.png" 
            alt="Maa Karma Logo" 
            className="h-16 w-auto"
          />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-primary transition-colors"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex md:justify-center md:space-x-24 md:py-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          {/* Main Navigation Items */}
          <div className="md:hidden space-y-6 py-4">
            {visibleMenuItems.map((item) => (
              <div key={item.id} className="relative group">
                {item.path ? (
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-primary font-medium transition-all duration-300 text-base tracking-wide block py-1"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={`#${item.id}`}
                    onClick={handleClick}
                    className="text-gray-700 hover:text-primary font-medium transition-all duration-300 text-base tracking-wide block py-1"
                  >
                    {item.label}
                  </a>
                )}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left delay-75"></div>
              </div>
            ))}
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex space-x-32">
            {visibleMenuItems.map((item) => (
              <div key={item.id} className="relative group">
                {item.path ? (
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-primary font-medium transition-all duration-300 text-base tracking-wide"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={`#${item.id}`}
                    onClick={handleClick}
                    className="text-gray-700 hover:text-primary font-medium transition-all duration-300 text-base tracking-wide"
                  >
                    {item.label}
                  </a>
                )}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left delay-75"></div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="md:hidden mt-6 pt-4 border-t border-gray-200 p-4">
            <div className="flex items-center">
              <FaEnvelope className="text-primary mr-3 text-base" />
              <a href="mailto:info@slipformsystems.in" className="text-gray-700 hover:text-primary transition-colors duration-200 text-sm">
                info@slipformsystems.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 