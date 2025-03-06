import React from 'react';

const Specialties = () => {
  const specialties = [
    {
      title: 'Clinker, Cement and Fly Ash Silo',
      items: [
        'Cement Industry Projects',
        'Glass & Melamine Projects',
        'Bridge Piers',
        'Intake Well',
        'Oil and Gas',
        'Petrochemicals Refineries',
        'Biogas and Fertilizers'
      ]
    },
    {
      title: 'RCC Chimney and Overhead Tanks',
      items: [
        'Irrigation and Dams Projects',
        'Thermal Power Plants',
        'Power Plants Industry',
        'High Rise Structure',
        'Design & Engineering Support',
        'Architectural & Structural Design',
        'Water Sanitation Project'
      ]
    }
  ];

  return (
    <section id="specialties" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">{specialty.title}</h3>
              <ul className="space-y-3 md:space-y-4">
                {specialty.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties; 