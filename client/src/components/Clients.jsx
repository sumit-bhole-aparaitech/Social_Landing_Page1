import React from 'react';

const Clients = () => {
  const brands = ["Bella Vita", "Upstox", "MamaEarth", "Boat", "Lenskart", "Myntra"];

  return (
    <div className="py-20 bg-white">
      <h3 className="text-center text-gray-400 uppercase text-xs tracking-[0.3em] mb-12">Trusted By Industry Leaders</h3>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-300">
        {brands.map((brand, i) => (
          <span key={i} className="text-2xl font-serif text-gray-800 hover:text-brand-gold transition-colors duration-300 cursor-default">
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Clients;