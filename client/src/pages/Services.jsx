import React from 'react';

const Services = () => {
  const services = [
    { title: "Talent Management", desc: "360-degree career handling for top-tier creators." },
    { title: "Brand Partnerships", desc: "Strategic matchmaking between premium brands and influencers." },
    { title: "Content Strategy", desc: "Data-driven content planning to maximize reach." },
    { title: "Legal & Contracts", desc: "Ironclad protection for your intellectual property." }
  ];

  return (
    <div className="pt-20 px-8 pb-32 max-w-6xl mx-auto">
      <h1 className="text-5xl mb-16 text-center">Our Expertise</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((s, index) => (
          <div key={index} className="border border-gray-800 p-10 hover:border-brand-gold transition-colors duration-500 group">
            <h3 className="text-2xl mb-4 group-hover:text-white transition-colors">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;