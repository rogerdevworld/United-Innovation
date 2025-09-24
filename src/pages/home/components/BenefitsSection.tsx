
export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: 'Unmatched Reliability',
      description: 'Enterprise-grade components ensure 99.9% uptime with robust performance monitoring and predictive maintenance.',
      icon: 'ri-shield-check-line',
      features: ['99.9% Uptime Guarantee', 'Redundant Systems', 'Real-time Monitoring', 'Predictive Analytics']
    },
    {
      id: 2,
      title: 'Complete Customization',
      description: 'Tailor every aspect to your unique requirements with modular designs and flexible configurations.',
      icon: 'ri-settings-3-line',
      features: ['Modular Architecture', 'Custom Resolutions', 'Flexible Mounting', 'Scalable Solutions']
    },
    {
      id: 3,
      title: '24/7 Expert Support',
      description: 'Round-the-clock technical assistance from certified engineers ensures seamless operation.',
      icon: 'ri-customer-service-2-line',
      features: ['24/7 Availability', 'Remote Diagnostics', 'On-site Service', 'Expert Engineers']
    },
    {
      id: 4,
      title: 'Built to Last',
      description: 'Industrial-grade construction withstands extreme conditions with extended warranty coverage.',
      icon: 'ri-time-line',
      features: ['5-Year Warranty', 'Weather Resistant', 'Thermal Management', 'Quality Certified']
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">United Innovation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference with our commitment to excellence, innovation, and customer success
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={benefit.id} className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${index % 2 === 0 ? 'hover:-translate-y-2' : 'lg:translate-y-8 hover:translate-y-6'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-500 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                    <i className={`${benefit.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {benefit.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-2">500+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2">99.9%</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-2">24/7</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Expert Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2">15+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
