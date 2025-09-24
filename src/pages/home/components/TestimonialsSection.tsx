
export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Technical Director',
      company: 'MegaEvents Productions',
      content: 'United Innovation transformed our concert experiences. The displays are incredibly bright, reliable, and the support team is always there when we need them. Outstanding quality.',
      rating: 5
    },
    {
      id: 2,
      name: 'Rev. Michael Chen',
      title: 'Pastor',
      company: 'Grace Community Church',
      content: 'The LED wall has revolutionized our worship services. Crystal clear visuals that engage our congregation like never before. The installation was seamless and professional.',
      rating: 5
    },
    {
      id: 3,
      name: 'David Rodriguez',
      title: 'Production Manager',
      company: 'Stellar Broadcasting',
      content: 'Working with United Innovation has been exceptional. Their virtual production solutions are cutting-edge, and the color accuracy is phenomenal for our studio work.',
      rating: 5
    },
    {
      id: 4,
      name: 'Lisa Thompson',
      title: 'Marketing Director',
      company: 'RetailMax Corporation',
      content: 'Our digital signage network has never looked better. The displays are energy-efficient, vibrant, and have significantly increased customer engagement in our stores.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from industry leaders who trust United Innovation for their LED display solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/30 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${index % 2 === 0 ? 'hover:-translate-y-2' : 'md:translate-y-8 hover:translate-y-6'}`}>
              {/* Neon Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500/20 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative">
                {/* Quote Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                  <i className="ri-double-quotes-l text-xl text-white"></i>
                </div>
                
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg mr-1"></i>
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-8 h-8 border border-green-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-green-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-800/50 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-700">
            <div className="flex items-center text-green-400">
              <i className="ri-shield-check-line text-xl mr-2"></i>
              <span className="text-sm font-medium">Trusted by 500+ Companies</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center text-blue-400">
              <i className="ri-award-line text-xl mr-2"></i>
              <span className="text-sm font-medium">Industry Leader</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center text-yellow-400">
              <i className="ri-star-fill text-xl mr-2"></i>
              <span className="text-sm font-medium">5-Star Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
