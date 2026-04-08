import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Humne jo components banaye hain unhe yahan line-wise laga diya */}
      <Navbar />
      <Hero />
      <Categories />
      
      <footer className="bg-gray-100 py-8 text-center text-gray-600 border-t">
        <p>© 2024 Green Zone Nature Ayurveda Clone</p>
      </footer>
    </div>
  );
}

export default App;
