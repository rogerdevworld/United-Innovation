
export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://static.readdy.ai/image/d94af9169da28bb78096e1e51ae2b7d5/37921f7152700b18b409f83a103d05f1.png" 
                alt="United Innovation" 
                className="h-20 w-auto"
              />
              <div className="ml-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-400 rounded-full animate-pulse"></div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading the future of visual technology with cutting-edge LED display solutions. 
              Transforming spaces through innovation, quality, and exceptional service.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full cursor-pointer transition-colors duration-300 border border-gray-700 hover:border-blue-500">
                <i className="ri-linkedin-fill text-gray-300 hover:text-white"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full cursor-pointer transition-colors duration-300 border border-gray-700 hover:border-blue-500">
                <i className="ri-twitter-fill text-gray-300 hover:text-white"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-green-600 rounded-full cursor-pointer transition-colors duration-300 border border-gray-700 hover:border-green-500">
                <i className="ri-whatsapp-fill text-gray-300 hover:text-white"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-full cursor-pointer transition-colors duration-300 border border-gray-700 hover:border-red-500">
                <i className="ri-youtube-fill text-gray-300 hover:text-white"></i>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <i className="ri-links-line text-blue-400 mr-2"></i>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Products', 'solutions', 'Gallery', 'Contact'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://readdy.ai/?origin=logo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 cursor-pointer"
                >
                  Made with Readdy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <i className="ri-customer-service-line text-green-400 mr-2"></i>
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <i className="ri-phone-line text-blue-400 mr-3"></i>
                <a href="tel:404.398.2355" className="hover:text-blue-400 transition-colors duration-200">
                  404.398.2355
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="ri-mail-line text-green-400 mr-3"></i>
                <a href="mailto:support@unitedinnovationsled.com" className="hover:text-green-400 transition-colors duration-200">
                  support@unitedinnovationsled.com
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <i className="ri-map-pin-line text-purple-400 mr-3 mt-1"></i>
                <span>Atlanta, Georgia<br />United States</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-8 text-sm text-gray-500 mb-4 md:mb-0">
              <span>&copy; 2024 United Innovation. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span>Privacy Policy</span>
              <span className="hidden md:inline">|</span>
              <span>Terms of Service</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center text-green-400">
                <i className="ri-shield-check-line mr-2"></i>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center text-blue-400">
                <i className="ri-award-line mr-2"></i>
                <span>Industry Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
