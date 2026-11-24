import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { FleetSection } from '../components/FleetSection';
import { GallerySection } from '../components/GallerySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="bg-primary text-textMain">
      <Navbar />
      <HeroSection />
      <FleetSection />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
