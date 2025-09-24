
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import ScrollingBannerSection from './components/ScrollingBannerSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProductSection from './components/ProductSection';
import PanelGallerySection from './components/PanelGallerySection';
import InteractiveShowcaseSection from './components/InteractiveShowcaseSection';
import ApplicationsSection from './components/ApplicationsSection';
import BenefitsSection from './components/BenefitsSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ScrollingBannerSection />
        <AboutSection />
        <ServicesSection />
        <ProductSection />
        <PanelGallerySection />
        <InteractiveShowcaseSection />
        <ApplicationsSection />
        <BenefitsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
