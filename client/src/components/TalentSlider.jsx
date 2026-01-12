import React from 'react';

const TalentSlider = () => {
  // Placeholder data
  const talent = [
    { name: "Sanya M.", category: "Lifestyle", reach: "2.4M" },
    { name: "Rahul V.", category: "Tech", reach: "1.1M" },
    { name: "Priya K.", category: "Fashion", reach: "500K" },
    { name: "Dev A.", category: "Gaming", reach: "3.2M" },
  ];

  return (
    <div className="py-24 px-8 bg-brand-light-gray">
      <h2 className="text-4xl text-center mb-12 uppercase tracking-widest">Exclusive Roster</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {talent.map((t, index) => (
          <div key={index} className="relative group cursor-pointer overflow-hidden border border-gray-200 hover:border-brand-gold transition-all duration-500 bg-white">
            {/* Image Placeholder - Use a light gray now */}
            <div className="h-96 bg-gray-100 group-hover:bg-gray-50 flex items-center justify-center text-gray-400 font-bold tracking-widest">
              [Image: {t.name}]
            </div>
            
            {/* Overlay Info - Navy gradient for contrast */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-navy/90 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl text-brand-gold">{t.name}</h3>
              <p className="text-sm text-gray-200">{t.category} • {t.reach}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="text-brand-dark border-b-2 border-brand-gold font-bold pb-1 hover:text-brand-gold transition-colors uppercase tracking-wider text-sm">View All Creators</button>
      </div>
    </div>
  );
};

export default TalentSlider;