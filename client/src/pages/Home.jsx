import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'; // Import the new component
import TalentSlider from '../components/TalentSlider';
import Stats from '../components/Stats';
import Clients from '../components/Clients';

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. STATS BAR */}
      <div className="relative z-20 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-32 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="relative z-10 pt-4 md:pt-32">
          <Stats />
        </div>
        {/* Background extension */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-blue-50/50 to-blue-50 -z-10 block"></div>
      </div>

      {/* 3. EXCLUSIVE ROSTER */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 mb-16 md:mb-24 mt-12 md:mt-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Our <span className="text-brand-gold">Featured Creators</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Managing top-tier influencers across fashion, lifestyle, tech, and entertainment.
            </p>
          </div>
          <TalentSlider />
        </div>
      </div>

      {/* 4. VISION SECTION */}
      <section className="py-12 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-gradient-to-br from-white to-gray-50 rounded-3xl md:rounded-[40px] p-6 sm:p-10 border border-gray-100 shadow-lg">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 order-1 md:order-1">
            <div className="relative w-full aspect-square max-w-md mx-auto md:max-w-none">
               <div className="absolute inset-0 bg-brand-gold/20 rounded-3xl rotate-6 transform scale-95"></div>
               <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                   alt="Team Meeting" 
                   className="w-full h-full object-cover"
                   loading="lazy"
                 />
                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-lg text-white">
                      <p className="text-xs font-bold uppercase tracking-wider">Strategy Session</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 order-2 md:order-2">
            <h4 className="text-brand-gold uppercase tracking-widest font-bold text-xs mb-3">Our Mission</h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
              Elevating Creators,<br />Empowering Brands
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              "We don't just manage influencers—we build sustainable careers. Our agency bridges authentic creator voices with meaningful brand partnerships that drive real impact and ROI."
            </p>
            
            <div className="grid gap-6 mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-brand-navy rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Strategic Management</h4>
                  <p className="text-sm text-gray-500">Long-term career mapping & growth</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-brand-navy rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Brand Partnerships</h4>
                  <p className="text-sm text-gray-500">Negotiating high-value contracts</p>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-brand-gold pl-6 py-1">
              <p className="font-serif italic text-lg text-brand-dark">Founder & Director</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CLIENTS */}
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
        <Clients />
      </div>

      {/* 6. CTA BOTTOM */}
      <section className="py-20 md:py-32 px-4 text-center bg-brand-navy text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Build Your<br /> <span className="text-brand-gold">Creator Empire?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Whether you're a brand seeking authentic influencers or a creator looking for management—we've got you covered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto sm:max-w-none">
            <Link 
              to="/contact" 
              className="bg-brand-gold text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-2xl hover:-translate-y-1 rounded-lg w-full sm:w-auto"
            >
              Start Collaboration
            </Link>
            <Link 
              to="/talent" 
              className="bg-transparent border border-white/30 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all duration-300 rounded-lg w-full sm:w-auto"
            >
              Join Roster
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;