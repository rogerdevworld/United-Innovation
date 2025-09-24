
export default function ApplicationsSection() {
  const applications = [
    {
      id: 1,
      title: 'Live Events & Concerts',
      description: 'Create unforgettable experiences with massive LED walls and stage displays',
      icon: 'ri-music-2-line',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Houses of Worship',
      description: 'Enhance spiritual experiences with crystal-clear displays and engaging visuals',
      icon: 'ri-building-line',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Restaurants & Hospitality',
      description: 'Transform dining experiences with ambient displays and digital menus',
      icon: 'ri-restaurant-line',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Broadcasting Studios',
      description: 'Professional-grade displays for television, film, and media production',
      icon: 'ri-camera-line',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 5,
      title: 'Virtual Production',
      description: 'Next-generation virtual sets and immersive content creation environments',
      icon: 'ri-film-line',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Corporate & Retail',
      description: 'Engage customers and employees with dynamic digital signage solutions',
      icon: 'ri-store-line',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="applications" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Applications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our LED displays transform industries with cutting-edge visual solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app) => (
            <div key={app.id} className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              <div className="relative">
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${app.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <i className={`${app.icon} text-2xl text-white`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {app.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {app.description}
                </p>
                
                <div className="mt-6 flex items-center text-green-400 group-hover:text-green-300 transition-colors duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Industries */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-900/50 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-700">
            <span className="text-gray-400 text-sm">Also serving:</span>
            <span className="text-blue-400 text-sm font-medium">Education</span>
            <span className="text-green-400 text-sm font-medium">Healthcare</span>
            <span className="text-purple-400 text-sm font-medium">Gaming</span>
            <span className="text-yellow-400 text-sm font-medium">Transportation</span>
            <span className="text-pink-400 text-sm font-medium">Sports</span>
          </div>
        </div>
      </div>
    </section>
  );
}
