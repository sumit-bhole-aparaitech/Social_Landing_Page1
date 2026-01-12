import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <h1 className="text-4xl mb-2 text-center">Get in Touch</h1>
        <p className="text-gray-400 text-center mb-10">Ready to scale? Let's talk business.</p>

        <form className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Name</label>
            <input type="text" className="w-full bg-transparent border-b border-gray-700 p-3 focus:outline-none focus:border-brand-gold text-white transition-colors" />
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Email</label>
            <input type="email" className="w-full bg-transparent border-b border-gray-700 p-3 focus:outline-none focus:border-brand-gold text-white transition-colors" />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Message</label>
            <textarea rows="4" className="w-full bg-transparent border-b border-gray-700 p-3 focus:outline-none focus:border-brand-gold text-white transition-colors"></textarea>
          </div>

          <button className="w-full bg-white text-brand-black font-bold uppercase py-4 tracking-widest hover:bg-brand-gold transition-colors duration-300 mt-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;