
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">United Innovation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4">Beyond Your Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At United Innovations, we believe in going Beyond Your Vision. We are a company focused on high-quality LED display solutions designed to captivate, connect, and inspire. Driven by innovation and a strong commitment to customer satisfaction, we deliver cutting-edge visual technology for events, advertising, and digital experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our team works hand in hand with every client to develop personalized solutions that truly achieve their goals—whether to increase brand visibility or to create unforgettable live productions. We also embrace our responsibility to the planet by integrating energy-efficient technology and sustainable practices as part of our fight against climate change.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-500 rounded-full mr-4">
                  <i className="ri-user-star-line text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Joel Silva</h4>
                  <p className="text-gray-400 text-sm">Founder & Leader</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "We don't just light up screens—we light up possibilities."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 rounded-full mx-auto mb-4">
                  <i className="ri-eye-line text-xl text-white"></i>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Vision</h4>
                <p className="text-gray-400 text-sm">Become a leading national and international brand in LED solutions, recognized for innovation, quality, and commitment.</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 rounded-full mx-auto mb-4">
                  <i className="ri-target-line text-xl text-white"></i>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Mission</h4>
                <p className="text-gray-400 text-sm">Drive modernization through innovative, efficient, and sustainable LED solutions with quality and environmental responsibility.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20LED%20technology%20team%20in%20modern%20facility%20with%20Joel%20Silva%20as%20leader%2C%20engineers%20working%20on%20advanced%20display%20panels%2C%20dark%20contemporary%20workspace%20with%20blue%20neon%20lighting%2C%20high-tech%20equipment%2C%20minimalist%20design%2C%20innovative%20atmosphere%2C%20cutting-edge%20LED%20manufacturing%20environment&width=600&height=400&seq=about_joel&orientation=landscape"
                alt="United Innovation Team"
                className="w-full h-96 object-cover object-top rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
              <div className="absolute inset-0 border border-blue-500/20 rounded-lg"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-gray-900 border border-blue-500/30 rounded-lg p-6 shadow-2xl backdrop-blur-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">500+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-gray-900 border border-green-500/30 rounded-lg p-6 shadow-2xl backdrop-blur-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">15+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
