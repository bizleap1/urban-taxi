import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Home } from './pages/Home';
import { MouseSpotlight } from './components/MouseSpotlight';
import { FloatingParticles } from './components/FloatingParticles';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { BookingModal } from './components/BookingModal';
import { useState } from 'react';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenBooking = () => setIsBookingModalOpen(true);
    window.addEventListener('openBooking', handleOpenBooking);
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
      window.removeEventListener('openBooking', handleOpenBooking);
    };
  }, []);

  return (
    <>
      <MouseSpotlight />
      <FloatingParticles />
      <FloatingContactButtons />
      <Home />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  );
}

export default App;
