import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen md:min-h-[calc(100vh-100px)] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 pt-8 pb-12 md:py-0 bg-white">
        
      {/* Desktop Background Graphic */}
      <div className="hidden md:block absolute top-0 right-0 w-[55%] h-[120%] bg-gradient-to-br from-brand-gold/5 via-white to-brand-light-gray/30 -z-10 [clip-path:polygon(15%_0%,_100%_0,_100%_100%,_0%_100%)]"></div>

      {/* Mobile Background Gradient */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-white via-white to-brand-gold/5 -z-10"></div>

      {/* --- LEFT SIDE: TEXT CONTENT --- */}
      <div className="w-full md:w-[45%] lg:w-1/2 z-10 flex flex-col justify-center order-2 md:order-1 mt-8 md:mt-0">
        
        {/* Tagline */}
        <div className="flex items-center mb-3 sm:mb-4">
          <span className="w-8 h-[2px] bg-brand-gold mr-3 sm:mr-4"></span>
          <p className="text-brand-gold uppercase tracking-[0.2em] font-bold text-xs sm:text-sm">
            Premier Influencer Talent Agency
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-6 leading-[1.1] text-brand-dark font-extrabold">
          Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-500">Influencers</span><br />
          Meet <span className="italic font-serif font-light">Iconic Brands</span>
        </h1>
        
        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 font-light mb-6 md:mb-8 max-w-lg leading-relaxed border-l-4 border-brand-gold pl-4 sm:pl-6">
          We're the bridge between digital creators and global brands. 
          <span className="font-semibold text-brand-navy block mt-2">
            Expert management, strategic partnerships, and authentic storytelling.
          </span>
        </p>
        
        {/* Benefit Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-8 max-w-md">
          {['Talent Management', 'Brand Collaborations', 'Content Strategy', 'Growth Analytics'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            to="/contact" 
            className="bg-brand-gold text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-brand-navy transition-all duration-300 shadow-xl hover:-translate-y-1 text-sm text-center rounded-lg w-full sm:w-auto"
          >
            Start Collaboration
          </Link>
          <Link 
            to="/services" 
            className="group flex items-center justify-center gap-3 text-brand-dark font-bold uppercase tracking-wider hover:text-brand-gold transition-colors text-sm border-2 border-gray-100 px-8 py-4 rounded-lg hover:border-brand-gold/30 w-full sm:w-auto"
          >
            Explore Services
            <span className="text-xl group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* --- RIGHT SIDE: IMAGE --- */}
      <div className="w-full md:w-[55%] lg:w-1/2 relative z-10 flex justify-center md:justify-end items-center order-1 md:order-2 mb-8 md:mb-0">
        <div className="relative w-full max-w-[500px] md:max-w-none md:w-full aspect-[4/5] md:aspect-auto md:h-[600px]">
          
          {/* Brand Deal Card */}
          <div className="absolute -top-4 right-0 md:-top-6 md:-right-6 z-20 bg-white p-3 md:p-4 rounded-xl shadow-2xl border border-brand-gold/20 w-[140px] md:w-[180px] animate-[float_4s_ease-in-out_infinite]">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-brand-gold to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs md:text-sm">✓</span>
              </div>
              <span className="text-xs font-bold text-brand-dark">Brand Deal</span>
            </div>
            <p className="text-[10px] md:text-xs text-gray-600 truncate">Luxury fashion collab</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-xs font-bold text-brand-gold">$25K+</span>
              <span className="text-[10px] text-gray-500">Sponsored</span>
            </div>
          </div>
          
          {/* Gold Shadow */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/40 to-transparent translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 -z-10 [clip-path:polygon(5%_0,_100%_0%,_95%_100%,_0%_100%)] opacity-60 rounded-2xl"></div>
          
          {/* Main Image Container */}
          <div className="h-full w-full [clip-path:polygon(5%_0,_100%_0%,_95%_100%,_0%_100%)] bg-gradient-to-br from-brand-navy via-purple-900 to-brand-dark shadow-2xl overflow-hidden rounded-2xl group relative">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
              alt="Professional influencer" 
              className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-in-out"
              loading="lazy"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Stats Overlay inside Image */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 flex justify-between items-end">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs md:text-sm font-medium">Verified Creator</span>
                </div>
                <h3 className="text-lg md:text-2xl font-bold leading-tight">Alexandra Chen</h3>
                <p className="text-xs md:text-sm text-white/80">Lifestyle & Fashion</p>
              </div>
              <div className="text-right text-white">
                <div className="text-xl md:text-3xl font-bold">2.4M</div>
                <div className="text-[10px] md:text-xs opacity-80">Followers</div>
              </div>
            </div>
          </div>

          {/* Engagement Metrics Card */}
          <div className="absolute bottom-8 -left-2 md:-bottom-6 md:-left-6 z-20 bg-white p-3 md:p-4 rounded-xl shadow-2xl border border-brand-gold/20 w-[100px] md:w-[150px]">
            <div className="text-center">
              <div className="text-lg md:text-xl font-bold text-brand-dark">4.8%</div>
              <div className="text-[10px] md:text-xs text-gray-600">Engagement</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;