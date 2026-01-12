import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- THESE IMPORTS WERE MISSING OR INCORRECT ---
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Footer from './components/Footer'; 
import Services from './pages/Services';
import Contact from './pages/Contact';
// -----------------------------------------------

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-black text-white">
        
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;