import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-serif font-bold tracking-widest text-brand-gold">
        <Link to="/">AGENCY_NAME</Link>
      </div>

      {/* Links */}
      <div className="space-x-8 hidden md:block">
        <Link to="/" className="text-xs uppercase tracking-widest text-brand-dark hover:text-brand-gold transition-colors">Home</Link>
        <Link to="/services" className="text-xs uppercase tracking-widest text-brand-dark hover:text-brand-gold transition-colors">Services</Link>
        <Link to="/influencers" className="text-xs uppercase tracking-widest text-brand-dark hover:text-brand-gold transition-colors">Exclusive Influencers</Link>
        <Link to="/contact" className="text-xs uppercase tracking-widest text-brand-dark hover:text-brand-gold transition-colors">Contact</Link>
      </div>

      {/* CTA */}
      <Link to="/contact" className="bg-brand-gold text-white px-6 py-2 text-xs uppercase tracking-widest font-bold hover:bg-brand-navy transition-all">
        Get In Touch
      </Link>
    </nav>
  );
};

export default Navbar;