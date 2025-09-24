
import { useState, useRef, useEffect } from 'react';
import { products } from '../../../mocks/products';
import Button from '../../../components/base/Button';
import Modal from '../../../components/base/Modal';

export default function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products', icon: 'ri-grid-line' },
    { id: 'indoor', name: 'Indoor Displays', icon: 'ri-home-line' },
    { id: 'outdoor', name: 'Outdoor Displays', icon: 'ri-roadster-line' },
    { id: 'interactive', name: 'Interactive', icon: 'ri-hand-finger-line' },
    { id: 'rental', name: 'Rental Solutions', icon: 'ri-truck-line' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => 
        product.applications.some(app => 
          app.toLowerCase().includes(activeCategory) || 
          (activeCategory === 'indoor' && (app.toLowerCase().includes('retail') || app.toLowerCase().includes('corporate'))) ||
          (activeCategory === 'outdoor' && app.toLowerCase().includes('outdoor')) ||
          (activeCategory === 'interactive' && app.toLowerCase().includes('interactive')) ||
          (activeCategory === 'rental' && app.toLowerCase().includes('rental'))
        )
      );

  const handleRequestInfo = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const scrollToContact = () => {
    setIsModalOpen(false);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Interactive particles */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400/20 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-green-400/30 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
              LED Display Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Catalog</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of LED display solutions designed for every application
          </p>
        </div>

        {/* Interactive Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 border backdrop-blur-sm cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-700/50 hover:border-gray-600 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-2">
                <i className={`${category.icon} text-lg group-hover:scale-110 transition-transform duration-300`}></i>
                <span>{category.name}</span>
              </div>
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-xl opacity-50"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Enhanced Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-product-shop>
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Enhanced Dual Image Display */}
              <div className="relative aspect-w-16 aspect-h-12">
                {/* Main Product Image */}
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Panel Detail Overlay - Shows on Hover */}
                {product.panelImage && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <img 
                      src={product.panelImage}
                      alt={`${product.name} Panel Detail`}
                      className="w-full h-64 object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600/90 to-green-600/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-white text-xs font-bold">Panel Detail</span>
                    </div>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                
                {/* Hover overlay with quick specs */}
                <div className="absolute inset-0 bg-gray-900/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center space-y-3 p-6">
                    <h4 className="text-white font-semibold text-lg">Quick Specs</h4>
                    <div className="space-y-1">
                      {product.specifications.slice(0, 3).map((spec, index) => (
                        <p key={index} className="text-gray-300 text-sm">{spec}</p>
                      ))}
                    </div>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 border-0"
                      onClick={() => handleRequestInfo(product)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="relative p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{product.name}</h3>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
                
                {/* Enhanced Panel Detail Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-400 text-xs font-semibold uppercase tracking-wide">
                    Professional Grade
                  </span>
                  <div className="flex items-center text-blue-400 text-xs">
                    <i className="ri-focus-3-line mr-1"></i>
                    Panel Detail Available
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-400 mb-3 text-sm uppercase tracking-wide flex items-center">
                    <i className="ri-settings-3-line mr-2"></i>
                    Key Specifications
                  </h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {product.specifications.slice(0, 3).map((spec, index) => (
                      <li key={index} className="flex items-start group/item hover:text-blue-300 transition-colors duration-300">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-green-400 transition-colors duration-300"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-400 mb-3 text-sm uppercase tracking-wide flex items-center">
                    <i className="ri-apps-line mr-2"></i>
                    Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.slice(0, 3).map((app, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-700/80 border border-gray-600 text-gray-300 text-xs rounded-full hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300 cursor-default">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-700/50">
                  <Button 
                    variant="primary"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-400/30 transition-all duration-300 group/btn"
                    onClick={() => handleRequestInfo(product)}
                  >
                    <span className="flex items-center justify-center">
                      <i className="ri-information-line mr-2 group-hover/btn:rotate-12 transition-transform duration-300"></i>
                      Request Information
                      <i className="ri-arrow-right-line ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Can't find the perfect solution? We create custom LED displays for any application.</p>
          <Button 
            size="lg"
            onClick={() => scrollToContact()}
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 border-0 shadow-lg shadow-green-500/25 hover:shadow-green-400/30 transition-all duration-300"
          >
            <i className="ri-customer-service-line mr-2"></i>
            Discuss Custom Solutions
            <i className="ri-arrow-right-line ml-2"></i>
          </Button>
        </div>
      </div>

      {/* Enhanced Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedProduct ? `${selectedProduct.name} - Product Details` : ''}
      >
        {selectedProduct && (
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover object-top rounded-lg border border-gray-600"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600/90 to-green-600/90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-white text-xs font-semibold">Professional Grade</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-400 mb-3 text-sm uppercase tracking-wide flex items-center">
                  <i className="ri-settings-3-line mr-2"></i>
                  Complete Specifications
                </h4>
                <ul className="text-sm text-gray-300 space-y-2 mb-4">
                  {selectedProduct.specifications.map((spec: string, index: number) => (
                    <li key={index} className="flex items-start hover:text-blue-300 transition-colors duration-300">
                      <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-400 mb-3 text-sm uppercase tracking-wide flex items-center">
                  <i className="ri-apps-line mr-2"></i>
                  Perfect Applications
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProduct.applications.map((app: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 border border-gray-600 text-gray-300 text-xs rounded-full hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-4 border border-gray-600">
              <div className="flex items-center text-blue-400 mb-2">
                <i className="ri-award-line mr-2"></i>
                <span className="font-semibold">Professional Benefits</span>
              </div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 24/7 Technical Support & Maintenance</li>
                <li>• Custom Installation & Configuration</li>
                <li>• 3-Year Comprehensive Warranty</li>
                <li>• Professional Training & Documentation</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact} 
                className="flex-1 bg-gradient-to-r from-green-600 to-green-5

0 hover:from-green-500 hover:to-green-400 border-0 shadow-lg shadow-green-500/20"
              >
                <i className="ri-mail-send-line mr-2"></i>
                Get Quote Now
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setIsModalOpen(false)} 
                className="flex-1 border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800"
              >
                <i className="ri-close-line mr-2"></i>
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
