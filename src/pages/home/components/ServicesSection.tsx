
export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Equipment Sales",
      description: "Comprehensive LED display solutions with cutting-edge technology for permanent installations and professional applications.",
      icon: "ri-shopping-cart-line",
      features: [
        "Indoor & Outdoor LED Screens",
        "Custom Size Configurations",
        "Professional Installation",
        "Technical Training",
        "Ongoing Support"
      ],
      gradient: "from-blue-600 to-blue-500"
    },
    {
      id: 2,
      title: "Equipment Rental",
      description: "Flexible rental solutions for events, exhibitions, and temporary installations with full technical support.",
      icon: "ri-calendar-event-line",
      features: [
        "Event Display Rental",
        "Setup & Breakdown Service",
        "On-site Technical Support",
        "Backup Equipment",
        "Content Management"
      ],
      gradient: "from-green-600 to-green-500"
    },
    {
      id: 3,
      title: "Extended Warranty",
      description: "Comprehensive warranty extensions to protect your investment with peace of mind and reliable coverage.",
      icon: "ri-shield-check-line",
      features: [
        "Extended Coverage Plans",
        "Priority Technical Support",
        "Rapid Response Service",
        "Replacement Guarantee",
        "Preventive Maintenance"
      ],
      gradient: "from-purple-600 to-purple-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-sm font-semibold text-green-400 uppercase tracking-wider">
              Professional Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive LED display solutions tailored to your specific needs with professional support at every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${service.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-400 mb-4 text-sm uppercase tracking-wide flex items-center">
                    <i className="ri-check-line mr-2"></i>
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start group/item hover:text-blue-300 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-green-400 transition-colors duration-300"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-gray-700/50">
                  <button 
                    onClick={scrollToContact}
                    className={`w-full py-3 px-6 bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 text-white font-medium rounded-lg group/btn cursor-pointer whitespace-nowrap`}
                  >
                    <span className="flex items-center justify-center">
                      <i className="ri-arrow-right-circle-line mr-2 group-hover/btn:rotate-90 transition-transform duration-300"></i>
                      Learn More
                      <i className="ri-arrow-right-line ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team specializes in creating tailored LED display solutions for unique requirements. 
              Let's discuss how we can bring your vision to life.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-500 hover:to-green-400 px-8 py-4 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-customer-service-line mr-2"></i>
              Contact Our Experts
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
