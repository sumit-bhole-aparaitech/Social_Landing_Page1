import React from 'react';

const Stats = () => {
  const stats = [
    { label: "Exclusive Influencers", value: "500+" },
    { label: "Campaigns Delivered", value: "1,200+" },
    { label: "Brands Partnered", value: "350+" },
    { label: "Total Reach", value: "500M+" },
  ];

  return (
    <div className="py-16 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="border-r border-white/20 last:border-0">
            <div className="text-4xl md:text-5xl font-serif font-bold mb-2 text-brand-gold">{stat.value}</div>
            <div className="text-sm uppercase tracking-widest font-bold opacity-80">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;