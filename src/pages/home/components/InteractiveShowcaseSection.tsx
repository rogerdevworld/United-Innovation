
import { useState } from 'react';
import Button from '../../../components/base/Button';

interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  icon: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 'innovation',
    title: 'LED Innovation Excellence',
    subtitle: 'Cutting-Edge Technology',
    description: 'Experience the future of display technology with our advanced LED solutions that deliver unmatched visual performance and reliability.',
    image: 'https://readdy.ai/api/search-image?query=modern%20LED%20display%20control%20room%20with%20multiple%20screens%20showing%20data%20visualization%2C%20high-tech%20professional%20environment%2C%20blue%20ambient%20lighting%2C%20futuristic%20technology%20center&width=1200&height=800&seq=led_showcase_1&orientation=landscape',
    features: ['4K/8K Resolution Support', 'HDR10+ Technology', 'Ultra-Wide Color Gamut', 'Advanced Calibration'],
    icon: 'ri-lightbulb-flash-line'
  },
  {
    id: 'performance',
    title: 'Unmatched Performance',
    subtitle: 'Professional Grade Quality',
    description: 'Our displays are engineered for 24/7 operation with superior brightness, contrast, and color accuracy that exceeds industry standards.',
    image: 'https://readdy.ai/api/search-image?query=professional%20outdoor%20LED%20billboard%20display%20at%20night%20showing%20bright%20vivid%20advertisements%20in%20urban%20environment%2C%20high%20brightness%20commercial%20display%20technology&width=1200&height=800&seq=led_showcase_2&orientation=landscape',
    features: ['10,000+ Hours Lifespan', '6000+ Nits Brightness', '10-bit Color Processing', 'IP65 Weather Rating'],
    icon: 'ri-rocket-line'
  },
  {
    id: 'integration',
    title: 'Seamless Integration',
    subtitle: 'Smart Connectivity',
    description: 'Advanced control systems and connectivity options make installation and management effortless for any professional environment.',
    image: 'https://readdy.ai/api/search-image?query=LED%20video%20wall%20installation%20in%20modern%20corporate%20boardroom%20with%20seamless%20tiled%20displays%20showing%20presentation%20content%2C%20professional%20meeting%20environment&width=1200&height=800&seq=led_showcase_3&orientation=landscape',
    features: ['Cloud Management', 'Remote Monitoring', 'Multi-Source Input', 'Real-time Diagnostics'],
    icon: 'ri-plug-line'
  },
  {
    id: 'support',
    title: '24/7 Professional Support',
    subtitle: 'Complete Peace of Mind',
    description: 'Comprehensive support services including installation, training, maintenance, and round-the-clock technical assistance.',
    image: 'https://readdy.ai/api/search-image?query=professional%20technician%20installing%20large%20LED%20display%20panel%20in%20modern%20facility%2C%20technical%20service%20and%20maintenance%2C%20professional%20installation%20process&width=1200&height=800&seq=led_showcase_4&orientation=landscape',
    features: ['Expert Installation', 'Comprehensive Training', 'Preventive Maintenance', 'Emergency Response'],
    icon: 'ri-customer-service-2-line'
  }
];

export default function InteractiveShowcaseSection() {
  const [activeItem, setActiveItem] = useState(showcaseItems[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleItemClick = (item: ShowcaseItem) => {
    if (item.id === activeItem.id) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveItem(item);
      setIsTransitioning(false);
    }, 300);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="showcase" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
              Why Choose United Innovation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what sets our LED display solutions apart in the professional market
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Interactive Menu */}
          <div className="lg:col-span-4 space-y-4">
            {showcaseItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`group relative p-6 rounded-xl cursor-pointer transition-all duration-500 border backdrop-blur-sm ${
                  activeItem.id === item.id
                    ? 'bg-gradient-to-r from-blue-600/20 to-green-600/20 border-blue-500/50 shadow-lg shadow-blue-500/10'
                    : 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 hover:border-gray-600'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeItem.id === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-400 group-hover:bg-gray-600 group-hover:text-white'
                  }`}>
                    <i className={`${item.icon} text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                      activeItem.id === item.id ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      activeItem.id === item.id ? 'text-blue-200' : 'text-gray-500 group-hover:text-gray-400'
                    }`}>
                      {item.subtitle}
                    </p>
                    <p className={`text-sm mt-3 transition-colors duration-300 ${
                      activeItem.id === item.id ? 'text-gray-300' : 'text-gray-600 group-hover:text-gray-400'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {activeItem.id === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:col-span-8">
            <div className={`relative rounded-2xl overflow-hidden border border-gray-700 bg-gray-800/50 transition-all duration-500 ${
              isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}>
              {/* Hero Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600/90 to-green-600/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                      {activeItem.subtitle}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{activeItem.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{activeItem.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="font-semibold text-green-400 mb-4 text-sm uppercase tracking-wide flex items-center">
                  <i className="ri-star-line mr-2"></i>
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {activeItem.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-blue-500/50 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => scrollToSection('products')}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 border-0 shadow-lg shadow-blue-500/20"
                  >
                    <i className="ri-eye-line mr-2"></i>
                    View Products
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection('contact')}
                    className="flex-1 border-green-400 text-green-400 hover:bg-green-400/10 hover:border-green-300"
                  >
                    <i className="ri-message-line mr-2"></i>
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
