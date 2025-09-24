
export default function ScrollingBannerSection() {
  const bannerItems = [
    "Experience Professional LED Innovation",
    "Transform Your Vision Into Reality", 
    "Cutting-Edge Display Technology",
    "24/7 Professional Support Available",
    "Custom Solutions for Every Application",
    "Industry-Leading Quality Standards"
  ];

  return (
    <section className="py-6 bg-gradient-to-r from-gray-800 to-gray-900 border-y border-gray-700 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
      </div>

      {/* Scrolling Content */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set */}
          {bannerItems.map((item, index) => (
            <div key={`first-${index}`} className="flex items-center whitespace-nowrap">
              <span className="text-white text-lg font-medium mx-8">{item}</span>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mx-8"></div>
            </div>
          ))}
          {/* Second set for seamless loop */}
          {bannerItems.map((item, index) => (
            <div key={`second-${index}`} className="flex items-center whitespace-nowrap">
              <span className="text-white text-lg font-medium mx-8">{item}</span>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mx-8"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
