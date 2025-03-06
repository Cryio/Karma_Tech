import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">About</h2>
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 text-gray-700 text-base md:text-lg text-center" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
            <p>
              We are pleased to introduce <b>M/S.</b> <b style={{ color: 'hsl(360, 100%, 39%)' }}>MAA KARMAA</b>
              <b style={{ color: 'navy' }}> GLOBAL ENGINEERING LLP.</b>, a company comprising dynamic and experienced engineers specializing in construction and equipment technology. Our company operates in various fields of civil and mechanical construction. Our parent company is <b>M/S.</b> <b style={{ color: 'hsl(360, 100%, 39%)' }}>KARMA </b><b style={{ color: 'navy' }}>TECH</b><b>.</b>
            </p>
            
            <p>
              We are the pioneer company in INDIA to use advanced Slipform Technology for fast and safe construction of <strong>Chimney, Silo, and High Rise Structures</strong>. We are a leading manufacturer and exporter of <strong>Heavy Lifting Equipment (Hydraulic-Tank Lifting Jacks/ Tank Jacking System) and Slipform Equipment</strong>.
            </p>
            
            <p>
              The Director of the company has 27 years of experience in the Chimney and silo field, including some projects with Reliance Industries Ltd., Mangalore Refinery Petrochemicals Ltd, Essar, Adani Power, Ashoka Buildcon Ltd., and many more.
            </p>
            
            <p>
              <b>MKGEL</b> has added to its achievements some of the modern and innovative building construction in various locations in PAN INDIA. We provide contracting services for any kind of industrial construction and undertake commercial and residential ventures as well. We have worked on various industrial projects: <b style={{ textTransform: 'capitalize' }}>cement factories, float glass factories, power plants, pharmaceuticals, glassware, fertilizers, and biogas</b>, among many more. We have vast experience in handling large-scale projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 