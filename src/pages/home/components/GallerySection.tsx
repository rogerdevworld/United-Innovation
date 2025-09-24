
import { useState } from 'react';
import { galleryImages } from '../../../mocks/products';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Installation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See our LED displays in action across various industries and applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative">
                <img 
                  src={image.image}
                  alt={image.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Border Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-xl transition-all duration-500"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm rounded-full border border-blue-500/50 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                    <i className="ri-eye-line text-blue-400 text-2xl"></i>
                  </div>
                  <p className="text-white font-semibold text-lg">{image.title}</p>
                </div>
              </div>
              
              {/* Bottom Title Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-center">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 backdrop-blur-sm">
          <div className="relative max-w-5xl mx-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 w-12 h-12 flex items-center justify-center text-white hover:text-blue-400 cursor-pointer bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-600 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            
            <div className="relative rounded-xl overflow-hidden border border-gray-600 shadow-2xl">
              <img 
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
