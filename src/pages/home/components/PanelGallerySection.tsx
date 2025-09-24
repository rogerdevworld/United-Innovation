
import { useState } from 'react';
import { ledPanelGallery } from '../../../mocks/products';

export default function PanelGallerySection() {
  const [selectedPanel, setSelectedPanel] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Panels', icon: 'ri-grid-line' },
    { id: 'Indoor Fine Pitch', name: 'Fine Pitch', icon: 'ri-focus-3-line' },
    { id: 'Rental Grade', name: 'Rental', icon: 'ri-truck-line' },
    { id: 'Outdoor Grade', name: 'Outdoor', icon: 'ri-sun-line' },
    { id: 'Interactive Floor', name: 'Interactive', icon: 'ri-hand-finger-line' }
  ];

  const filteredPanels = activeFilter === 'all' 
    ? ledPanelGallery 
    : ledPanelGallery.filter(panel => panel.category === activeFilter);

  return (
    <section id="panel-gallery" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* LED-like grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border border-blue-400/20"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
              LED Panel Technology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Panel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our LED panel technology in stunning detail - from ultra-fine pitch to weatherproof outdoor modules
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`group relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 border backdrop-blur-sm cursor-pointer ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                  : 'bg-gray-900/50 text-gray-300 border-gray-700 hover:bg-gray-800/50 hover:border-gray-600 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-2">
                <i className={`${category.icon} text-lg group-hover:scale-110 transition-transform duration-300`}></i>
                <span>{category.name}</span>
              </div>
            </button>
          ))}
        </div>
        
        {/* Panel Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPanels.map((panel) => (
            <div 
              key={panel.id} 
              className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm"
              onClick={() => setSelectedPanel(panel)}
            >
              {/* Enhanced Glow Effects */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 relative overflow-hidden rounded-t-2xl">
                  <img 
                    src={panel.image}
                    alt={panel.title}
                    className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* High contrast overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Panel Info Overlay */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-blue-500/30">
                    <span className="text-blue-400 text-xs font-bold">{panel.pixelPitch}</span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600/90 to-green-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs font-semibold">{panel.category}</span>
                  </div>
                </div>
                
                {/* Panel Details */}
                <div className="relative p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {panel.title}
                    </h3>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-semibold text-sm">
                      Pixel Pitch: {panel.pixelPitch}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <i className="ri-focus-3-line mr-1"></i>
                      Ultra Detail
                    </div>
                  </div>
                  
                  {/* Hover Action */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-4"></div>
                    <div className="flex items-center justify-center text-blue-400 text-sm font-semibold">
                      <i className="ri-zoom-in-line mr-2"></i>
                      Click to Enlarge
                      <i className="ri-arrow-right-line ml-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Technical Specifications?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get detailed technical documentation, installation guides, and custom panel configurations for your specific project requirements.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl border-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/30 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-file-text-line mr-2"></i>
              Request Technical Docs
              <i className="ri-download-line ml-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedPanel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <div className="relative max-w-6xl mx-4 max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPanel(null)}
              className="absolute -top-16 right-0 w-12 h-12 flex items-center justify-center text-white hover:text-blue-400 cursor-pointer bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-600 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 z-10"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            
            <div className="relative rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl bg-gradient-to-br from-gray-900 to-black">
              {/* High Quality Panel Image */}
              <div className="relative">
                <img 
                  src={selectedPanel.image}
                  alt={selectedPanel.title}
                  className="w-full h-auto max-h-[70vh] object-contain bg-black"
                />
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedPanel.title}</h3>
                      <div className="flex items-center space-x-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold rounded-full">
                          {selectedPanel.category}
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white text-sm font-semibold rounded-full">
                          {selectedPanel.pixelPitch}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-blue-400 text-sm font-semibold mb-1">Ultra High Detail</div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <i className="ri-focus-3-line mr-2"></i>
                        Professional Grade
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
