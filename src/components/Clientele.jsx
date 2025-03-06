import React from 'react';

const Clientele = () => {
  const clientCategories = [
    {
      title: "Industrial & Infrastructure Clients",
      clients: [
        { name: "Reliance Industries Ltd.", projectImage: "/img/projects/industrial-facility.png" },
        { name: "Mangalore Refinery Petrochemicals Ltd.", projectImage: "/img/projects/industrial-complex.png" },
        { name: "Essar", projectImage: "/img/projects/industrial-development.png" },
        { name: "Adani Power", projectImage: "/img/projects/power-plant-project.png" },
        { name: "Ashoka Buildcon Ltd. (Mopa Airport Link Road - NH 166S)", logo: "/img/clientele/ASHOKA_com.png", projectImage: "/img/banner/bridge-piers-mopa-36m.png" },
        { name: "ITD Cementation", projectImage: "/img/projects/infrastructure-project.png" },
        { name: "Balco (Bharat Aluminium Company Limited)", projectImage: "/img/projects/industrial-construction.png" },
        { name: "Welspun Enterprises Limited", logo: "/img/clientele/Welspun.png", projectImage: "/img/projects/commercial-construction.png" },
        { name: "J.K. Paper Mill", projectImage: "/img/projects/industrial-facility.png" },
        { name: "Thyssenkrupp (Talcher Fertilizer Plant)", projectImage: "/img/projects/fertilizer-plant.png" },
        { name: "Zetwerk Manufacturing Business Pvt. Ltd.", logo: "/img/clientele/Zetwerk.png", projectImage: "/img/projects/industrial-development.png" },
        { name: "ANS Construction", projectImage: "/img/projects/infrastructure-development.png" },
        { name: "SD Mulani (PWD Bridge Projects)", projectImage: "/img/projects/bridge-piers-construction.png" },
        { name: "M.E.I.L (Megha Engineering & Infrastructure Ltd.)", logo: "/img/clientele/meil.png", projectImage: "/img/projects/infrastructure-project.png" },
        { name: "UltraTech", logo: "/img/clientele/UtlraTech.png", projectImage: "/img/projects/cement-plant.png" },
        { name: "SSIP", logo: "/img/clientele/SSIP.png", projectImage: "/img/projects/industrial-facility.png" },
        { name: "SSG", logo: "/img/clientele/SSG.png", projectImage: "/img/projects/industrial-development.png" },
        { name: "SK", logo: "/img/clientele/SK.png", projectImage: "/img/projects/industrial-construction.png" },
        { name: "ATPL", logo: "/img/clientele/ATPL.png", projectImage: "/img/projects/commercial-development.png" },
        { name: "VKGA Brahma Putra Tribeni", logo: "/img/clientele/VKGA-BRAHMAPUTRA-TRIBENI.png", projectImage: "/img/projects/infrastructure-development.png" }
      ]
    },
    {
      title: "International Clients (Bangladesh Projects)",
      clients: [
        { name: "Pearl Construction", logo: "/img/clientele/PEARL CONSTRUCTION.png", projectImage: "/img/banner/cement-silos-pearl-construction.png" },
        { name: "Seven Circle (BD) Ltd.", projectImage: "/img/projects/industrial-facility.png" },
        { name: "Meghna Group of Industries", logo: "/img/clientele/Meghna Group of Industries.png", projectImage: "/img/banner/clinker-silo-meghna-49m.png" },
        { name: "Nasir Group of Industries", logo: "/img/clientele/Nasir Group of industries.png", projectImage: "/img/projects/industrial-development.png" },
        { name: "Brothers Group", logo: "/img/clientele/BrothesrGroup.png", projectImage: "/img/projects/industrial-construction.png" }
      ]
    },
    {
      title: "Cement, Glass, and Fertilizer Industry Clients",
      clients: [
        { name: "Aditya Cement Plant (Chittorgarh, Rajasthan)", projectImage: "/img/projects/cement-factory-project.png" },
        { name: "Vasuki Cement Pvt. Ltd.", projectImage: "/img/projects/cement-silos.png" },
        { name: "Float Glass Factories", projectImage: "/img/projects/glass-manufacturing.png" },
        { name: "Pharmaceutical and Fertilizer Plants", projectImage: "/img/projects/pharmaceutical-project.png" }
      ]
    }
  ];

  return (
    <section id="clientele" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">Our Clientele</h2>
        <div className="max-w-7xl mx-auto">
          {clientCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">{category.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.clients.map((client, clientIndex) => (
                  <div 
                    key={clientIndex} 
                    className="group relative bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      {client.logo ? (
                        <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
                          <img 
                            src={client.logo} 
                            alt={client.name}
                            className="max-h-24 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <div className="mb-4 h-24 flex items-center justify-center">
                          <div className="text-gray-400 text-2xl font-bold">
                            {client.name.charAt(0)}
                          </div>
                        </div>
                      )}
                      <div className="text-gray-700 text-sm text-center group-hover:text-gray-900 transition-colors duration-300">
                        {client.name}
                      </div>
                      {client.projectImage && (
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-300">
                          <img 
                            src={client.projectImage} 
                            alt={`${client.name} Project`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/0 to-gray-900/0 group-hover:from-gray-900/5 group-hover:to-gray-900/0 transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="mt-8 text-center text-gray-700 italic">
            MKGEL has successfully executed <b>critical infrastructure projects</b>, <b>high-rise structures</b>, <b>slipform construction</b>, and <b>heavy lifting solutions</b> for these clients, demonstrating excellence in <b>engineering</b>, <b>quality control</b>, and <b>project execution</b>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clientele; 