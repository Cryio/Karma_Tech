import React from 'react';

const Clientele = () => {
  const clients = [
    { name: 'UltraTech', logo: '/img/clientele/UtlraTech.png' },
    { name: 'Welspun', logo: '/img/clientele/Welspun.png' },
    { name: 'Zetwerk', logo: '/img/clientele/Zetwerk.png' },
    { name: 'SK', logo: '/img/clientele/SK.png' },
    { name: 'Ashoka Buildcon', logo: '/img/clientele/ASHOKA_com.png' },
    { name: 'Meghna Group', logo: '/img/clientele/Meghna Group of Industries.png' },
    { name: 'MEIL', logo: '/img/clientele/meil.png' },
    { name: 'Nasir Group', logo: '/img/clientele/Nasir Group of industries.png' },
    { name: 'Pearl Construction', logo: '/img/clientele/PEARL CONSTRUCTION.png' },
    { name: 'ATPL', logo: '/img/clientele/ATPL.png' },
    { name: 'SSG', logo: '/img/clientele/SSG.png' },
    { name: 'Brothers Group', logo: '/img/clientele/BrothesrGroup.png' }
  ];

  return (
    <section id="clientele" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Clientele</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            We are proud to have served some of the most prestigious companies in the industry
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-[3/2] flex items-center justify-center p-8 md:p-10">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                  style={{ maxHeight: '120px', width: 'auto' }}
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-sm md:text-base font-medium text-gray-700 text-center">{client.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clientele; 