import React from 'react';
import { Link } from 'react-router-dom';
import TalentSlider from '../components/TalentSlider';
import Stats from '../components/Stats';
import Clients from '../components/Clients';

const Home = () => {
  return (
    <div className="min-h-screen">
      
      {/* 1. HERO SECTION - Bright and Clean */}
      <section className="h-[85vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-white">
        {/* Subtle background pattern or gradient could go here */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-100 to-white opacity-70 z-0"></div>
        
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl md:text-8xl mb-6 leading-tight text-brand-dark">
            Amplify Your <span className="text-brand-gold italic">Voice.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
             Partner with our award-winning digital talent management agency to achieve massive growth now.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-brand-gold text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-brand-navy transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Collaboration
            </Link>
            <Link to="/services" className="border-2 border-brand-dark text-brand-dark px-10 py-4 font-bold uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-all duration-300">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR (Navy contrast block) */}
      <Stats />

      {/* 3. EXCLUSIVE ROSTER (Light gray bg) */}
      <TalentSlider />

      {/* 4. VISION SECTION (White bg) */}
      <section className="py-24 px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 bg-white">
        <div className="md:w-1/2">
          <div className="w-full h-[500px] bg-gray-100 border border-gray-200 relative p-4">
             <div className="absolute inset-4 border-2 border-brand-gold/20"></div>
             <p className="flex items-center justify-center h-full text-gray-400 font-serif italic text-2xl">[Visionary Image]</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <h4 className="text-brand-gold uppercase tracking-widest mb-4 font-bold text-sm">The Vision</h4>
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight">Bridging Local Talent with Global Impact.</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            "We don't just chase trends; we set them. Our mission is to empower the next generation of digital storytellers while providing brands with authentic, high-conversion narratives."
          </p>
          <p className="font-serif text-xl italic text-brand-dark">— Founder & Director</p>
        </div>
      </section>

      {/* 5. CLIENTS */}
      <Clients />

      {/* 6. CTA BOTTOM */}
      <section className="py-32 text-center bg-brand-light-gray">
        <h2 className="text-4xl md:text-5xl mb-8">Ready to dominate your niche?</h2>
        <Link to="/contact" className="inline-block border-b-2 border-brand-gold text-2xl pb-2 font-serif hover:text-brand-gold transition-colors">
          Let's Start a Project &rarr;
        </Link>
      </section>

    </div>
  );
};

export default Home;