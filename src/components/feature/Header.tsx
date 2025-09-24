
import { useState } from 'react';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="group cursor-pointer" onClick={() => scrollToSection('hero')}>
              <img 
                src="https://static.readdy.ai/image/d94af9169da28bb78096e1e51ae2b7d5/37921f7152700b18b409f83a103d05f1.png" 
                alt="United Innovation" 
                className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              Services
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              Products
            </button>
            <button onClick={() => scrollToSection('panel-gallery')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              Panel Gallery
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white cursor-pointer"
          >
            <i className={`text-xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
          <div className="px-4 py-2 space-y-1">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300 cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300 cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300 cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300 cursor-pointer"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg transition-all duration-300 mt-2 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
