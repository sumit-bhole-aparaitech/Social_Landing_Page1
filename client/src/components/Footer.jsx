import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 text-center bg-brand-navy text-white">
      <h2 className="text-3xl mb-6 text-brand-gold font-serif tracking-widest">Unknown</h2>
      
      <div className="flex justify-center space-x-8 mb-8">
        <a href="#" className="text-gray-300 hover:text-brand-gold uppercase text-xs tracking-widest transition-colors">Instagram</a>
        <a href="#" className="text-gray-300 hover:text-brand-gold uppercase text-xs tracking-widest transition-colors">LinkedIn</a>
        <a href="#" className="text-gray-300 hover:text-brand-gold uppercase text-xs tracking-widest transition-colors">Twitter</a>
      </div>

      <p className="text-gray-400 text-sm">© 2026 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;