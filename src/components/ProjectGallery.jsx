import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';

const ProjectGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (selectedImage) {
      setIsModalOpen(true);
    }
  }, [selectedImage]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const projects = [
    // Silos Section
    '/img/projects/clinker-grain-silos.png',
    '/img/projects/cement-silos.png',
    '/img/projects/silo-construction.png',
    
    // Chimneys Section
    '/img/projects/rcc-chimney-90m.png',
    '/img/projects/chimney-construction.png',
    
    // Bridge Piers Section
    '/img/projects/bridge-piers-mopa-airport.png',
    '/img/projects/bridge-piers-construction.png',
    
    // Water Management Section
    '/img/projects/500KL capacity ESR.png',
    '/img/projects/esr-cwr-pump-house.png',
    '/img/projects/underground-surge-pool.png',
    '/img/projects/water-management.png',
    '/img/projects/water-treatment.png',
    
    // Industrial Infrastructure Section
    '/img/projects/industrial-facility.png',
    '/img/projects/industrial-construction.png',
    '/img/projects/industrial-development.png',
    '/img/projects/industrial-complex.png',
    '/img/projects/infrastructure-development.png',
    '/img/projects/infrastructure-project.png',
    
    // Power Plant Section
    '/img/projects/power-plant-project.png',
    '/img/projects/power-plant-facility.png',
    
    // Other Projects
    '/img/projects/cement-factory-project.png',
    '/img/projects/cement-plant.png',
    '/img/projects/fertilizer-manufacturing.png',
    '/img/projects/fertilizer-plant.png',
    '/img/projects/glass-factory-project.png',
    '/img/projects/glass-manufacturing.png',
    '/img/projects/pharmaceutical-facility.png',
    '/img/projects/pharmaceutical-project.png',
    '/img/projects/commercial-construction.png',
    '/img/projects/commercial-development.png',
    '/img/projects/residential-development.png',
    '/img/projects/residential-project.png',
    '/img/projects/biogas-plant.png'
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center text-gray-700 hover:text-primary transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((image, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 md:h-72">
                <img
                  src={image}
                  alt="Project"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <div 
        className={`fixed inset-0 bg-black z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
          isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleCloseModal}
      >
        <div 
          className={`relative max-w-7xl w-full transform transition-all duration-300 ${
            isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <button
            onClick={handleCloseModal}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          >
            <FaTimes size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Project"
            className="w-full h-auto max-h-[90vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery; 