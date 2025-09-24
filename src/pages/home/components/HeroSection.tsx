
import { useState, useEffect } from 'react';
import Button from '../../../components/base/Button';

const heroSlides = [
  {
    id: 1,
    title: "Beyond Your Vision",
    subtitle: "LED Display Solutions",
    description:
      "We are a company focused on high-quality LED display solutions designed to captivate, connect, and inspire. Driven by innovation and commitment to customer satisfaction.",
    image:
      "https://readdy.ai/api/search-image?query=stunning%20modern%20LED%20display%20installation%20in%20corporate%20environment%20with%20vibrant%20colors%20and%20crystal%20clear%20image%20quality%2C%20professional%20lighting%20setup%2C%20futuristic%20technology%20atmosphere%2C%20dark%20minimalist%20background%20with%20blue%20and%20green%20accent%20lighting%2C%20high-tech%20corporate%20boardroom%20or%20event%20space&width=1920&height=1080&seq=led_hero_main_1&orientation=landscape",
    cta: "Explore Products",
  },
  {
    id: 2,
    title: "Innovation & Quality",
    subtitle: "Cutting-Edge Technology",
    description:
      "Delivering cutting-edge visual technology for events, advertising, and digital experiences with personalized solutions that truly achieve your goals.",
    image:
      "https://readdy.ai/api/search-image?query=large%20outdoor%20LED%20billboard%20display%20showing%20bright%20vivid%20content%20at%20night%20with%20urban%20cityscape%20background%2C%20modern%20digital%20advertising%20technology%2C%20professional%20installation%20dark%20atmosphere%20with%20neon%20lighting%20effects&width=1920&height=1080&seq=led_hero_main_2&orientation=landscape",
    cta: "Our Services",
  },
  {
    id: 3,
    title: "Sustainable Excellence",
    subtitle: "Environmental Responsibility",
    description:
      "We embrace our responsibility to the planet by integrating energy-efficient technology and sustainable practices as part of our fight against climate change.",
    image:
      "https://readdy.ai/api/search-image?query=indoor%20LED%20video%20wall%20display%20in%20modern%20event%20venue%20showing%20dynamic%20content%2C%20sleek%20installation%20contemporary%20space%20with%20professional%20lighting%20dark%20background%20with%20green%20environmental%20themes&width=1920&height=1080&seq=led_hero_main_3&orientation=landscape",
    cta: "Learn More",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  /** Scrolls smoothly to a page section.
   *  If the element is not found the function simply returns
   *  – this avoids throwing a runtime error when called with a wrong id. */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      console.warn(`scrollToSection: No element found with id "${sectionId}"`);
      return;
    }
    element.scrollIntoView({ behavior: "smooth" });
  };

  // Auto‑play carousel
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden"
    >
      {/* Hero Slider Background */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Animated LED Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Moving particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-green-400/40 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-ping delay-1200"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl">
          {/* Logo */}
          <div className="mb-8">
            <h1
              className="text-4xl font-bold text-white mb-2 cursor-pointer hover:text-blue-400 transition-colors duration-300 font-sans"
              onClick={() => scrollToSection("hero")}
            >
              United Innovation
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full"></div>
          </div>

          {/* Dynamic Content */}
          <div className="space-y-6 min-h-[300px] flex flex-col justify-center">
            <div className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
              {heroSlides[currentSlide].subtitle}
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 animate-pulse">
                {heroSlides[currentSlide].title}
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              {heroSlides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                onClick={() => scrollToSection("products")}
                className="relative text-lg px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 border-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/40 transition-all duration-300 group whitespace-nowrap cursor-pointer"
              >
                <span className="relative z-10">{heroSlides[currentSlide].cta}</span>
                <i className="ri-arrow-right-line ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300"></i>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 opacity-0 hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg px-10 py-4 border-2 border-green-400 text-green-400 hover:bg-green-400/10 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 backdrop-blur-sm group whitespace-nowrap cursor-pointer"
              >
                Request Quote
                <i className="ri-send-plane-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
              </Button>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-32 left-8 space-y-4">
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide
                    ? "bg-blue-400 shadow-lg shadow-blue-400/40"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={togglePlayPause}
            className="w-12 h-12 flex items-center justify-center text-white hover:text-blue-400 cursor-pointer transition-all duration-300 border border-gray-600 rounded-full hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 backdrop-blur-sm"
          >
            <i className={`text-lg ${isPlaying ? "ri-pause-line" : "ri-play-line"}`}></i>
          </button>
        </div>

        {/* Enhanced Slide Navigation */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4">
          <button
            onClick={() =>
              goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)
            }
            className="w-12 h-12 flex items-center justify-center text-white hover:text-blue-400 cursor-pointer transition-all duration-300 border border-gray-600 rounded-full hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 backdrop-blur-sm"
          >
            <i className="ri-arrow-up-line text-xl"></i>
          </button>

          <div className="flex flex-col space-y-2">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`w-1 h-8 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide
                    ? "bg-gradient-to-b from-blue-400 to-green-400"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          <button
            onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
            className="w-12 h-12 flex items-center justify-center text-white hover:text-blue-400 cursor-pointer transition-all duration-300 border border-gray-600 rounded-full hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 backdrop-blur-sm"
          >
            <i className="ri-arrow-down-line text-xl"></i>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 animate-bounce border border-gray-600 rounded-full hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 backdrop-blur-sm"
        >
          <i className="ri-arrow-down-line text-xl"></i>
        </button>
      </div>
    </section>
  );
}
