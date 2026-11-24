import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, Clock, ShieldCheck, ArrowRight, Play, X, Users, Briefcase, Snowflake, Phone } from 'lucide-react';

const serviceDetails = {
  urbania: {
    title: 'Force Urbania Service',
    category: '16+1 Luxury Minibus',
    image: '/force-urbania.avif',
    tagline: 'The Ultimate Group Travel Experience',
    description: 'Experience airplane-like comfort for large families, corporate outings, and wedding groups with panoramic views and standing-height cabin.',
    capacity: '16+1 Seater',
    luggage: '15 Bags',
    features: [
      'Standing Height Cabin & Wide Aisle',
      'Individual AC Vents & USB Ports',
      'Panoramic UV-Cut Windows',
      'Premium Reclining Captain Seats',
      'Roof Luggage Carrier & Boot Space'
    ],
    pricing: {
      local: '₹8,400 (8 hrs & 80 kms)',
      outstation: '₹9,713 / day (250 kms)'
    }
  },
  crysta: {
    title: 'Toyota Innova Crysta Service',
    category: '6+1 Premium SUV',
    image: '/white-innova.png',
    tagline: 'The Gold Standard in Chauffeur Travel',
    description: 'The preferred choice for corporate leaders, airport transfers, and VIP travel. Renowned for its silent cabin and supreme ride comfort.',
    capacity: '6+1 Seater',
    luggage: '4 Bags',
    features: [
      'Plush Captain Seats with Armrests',
      'Whisper-Quiet Insulated Cabin',
      'Dual-Zone Automatic Climate Control',
      'Smooth Highway Performance',
      'Dedicated Chauffeur & Sanitized Interior'
    ],
    pricing: {
      local: '₹2,414 (4 hrs & 40 kms)',
      outstation: '₹6,405 / day (300 kms)'
    }
  }
};

export function HeroSection() {
  const [activeService, setActiveService] = useState<'urbania' | 'crysta' | null>(null);
  const modalBodyRef = useRef<HTMLDivElement>(null);
  const isUserInteractingRef = useRef<boolean>(false);
  const interactionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      (window as any).lenis?.stop();
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      (window as any).lenis?.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      (window as any).lenis?.start();
    };
  }, [activeService]);

  // Auto-scroll popup modal body smoothly when open
  useEffect(() => {
    if (!activeService) return;

    let animationFrameId: number;
    let isPaused = false;
    let pauseTimer: ReturnType<typeof setTimeout> | null = null;

    // Reset scroll to top on open
    if (modalBodyRef.current) {
      modalBodyRef.current.scrollTop = 0;
    }

    // Delay auto-scrolling briefly so the user can look at the top section first
    const initialDelay = setTimeout(() => {
      let lastTime = performance.now();

      const step = (time: number) => {
        const delta = time - lastTime;
        lastTime = time;

        const el = modalBodyRef.current;
        if (el && !isPaused && !isUserInteractingRef.current) {
          const maxScroll = el.scrollHeight - el.clientHeight;
          if (maxScroll > 10) {
            // Scroll down at ~38px per second
            el.scrollTop += (38 * delta) / 1000;

            if (el.scrollTop >= maxScroll - 2) {
              isPaused = true;
              // Hold at bottom for 2.5s so user can read pricing and book buttons
              pauseTimer = setTimeout(() => {
                if (modalBodyRef.current) {
                  modalBodyRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                }
                // Pause at top for 1.5s before scrolling again
                pauseTimer = setTimeout(() => {
                  isPaused = false;
                }, 1500);
              }, 2500);
            }
          }
        }

        animationFrameId = requestAnimationFrame(step);
      };

      animationFrameId = requestAnimationFrame(step);
    }, 1200);

    return () => {
      clearTimeout(initialDelay);
      if (pauseTimer) clearTimeout(pauseTimer);
      cancelAnimationFrame(animationFrameId);
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    };
  }, [activeService]);

  const handleUserInteraction = () => {
    isUserInteractingRef.current = true;
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = setTimeout(() => {
      isUserInteractingRef.current = false;
    }, 2500);
  };

  return (
    <section className="relative min-h-[100svh] md:min-h-screen flex items-center pt-20 pb-28 sm:pt-24 sm:pb-20 md:py-16 lg:py-20 overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-bg.png"
          alt="Luxury Urban Taxi"
          className="w-full h-full object-cover object-[95%_center] md:object-left scale-110 lg:scale-[1.15] origin-center transition-transform duration-1000"
        />
        {/* Subtle gradient overlay to ensure text readability but keep the mountain visible */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/60 to-black/30 md:from-black/50 md:via-black/10 md:to-transparent" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-between h-full min-h-[calc(100svh-5rem)] md:min-h-[calc(100vh-5rem)]">

        <div className="flex-1 flex items-center my-auto">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[360px] sm:max-w-md md:max-w-xl xl:max-w-2xl relative z-20 flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0 py-2 sm:py-6 md:py-0"
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3 mb-2 sm:mb-4 w-full">
              <div className="hidden md:block w-6 h-[1px] bg-accent"></div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white drop-shadow-md md:drop-shadow-none md:text-gray-300 font-bold md:font-medium">
                Premium Urbania & Innova Crysta Rentals
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading text-white mb-2 sm:mb-3 md:mb-4 leading-[1.15] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Travel Together.
            </h1>

            {/* Tagline */}
            <div className="mb-4 sm:mb-6 md:mb-8 flex flex-col items-center md:items-start w-full">
              <h3 className="text-sm sm:text-base md:text-xl text-accent font-heading tracking-wider italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-[320px] sm:max-w-sm md:max-w-md leading-relaxed">
                "Anywhere from Nagpur. Everywhere with Comfort."
              </h3>
            </div>

            {/* Vehicle Rates & CTA - Two self-contained vertical cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full mb-5 sm:mb-6 md:mb-8">
              {/* Force Urbania Card */}
              <div className="bg-black/60 backdrop-blur-md border border-accent/25 hover:border-accent/40 rounded-2xl p-4 sm:p-5 shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.08)] transition-all duration-300 flex flex-col justify-between text-left">
                <div>
                  <h4 className="text-accent text-sm sm:text-base font-heading font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
                    Force Urbania
                  </h4>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-300 font-light">Local: </span>
                      <strong className="text-accent font-sans font-bold text-sm sm:text-base">₹8,400</strong>
                      <span className="text-gray-400 font-light text-xs ml-1">(8h / 80km)</span>
                    </div>
                    <div>
                      <span className="text-gray-300 font-light">Outstation: </span>
                      <strong className="text-accent font-sans font-bold text-sm sm:text-base">₹9,713</strong>
                      <span className="text-gray-400 font-light text-xs">/day</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveService('urbania')}
                  className="w-full mt-4 sm:mt-5 py-2.5 sm:py-3 px-4 bg-accent text-primary font-bold uppercase tracking-widest text-[11px] sm:text-xs hover:bg-white transition-all flex items-center justify-center space-x-2 rounded-lg shadow-md cursor-pointer"
                >
                  <span>Book Urbania</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>

              {/* Innova Crysta Card */}
              <div className="bg-black/60 backdrop-blur-md border border-accent/25 hover:border-accent/40 rounded-2xl p-4 sm:p-5 shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.08)] transition-all duration-300 flex flex-col justify-between text-left">
                <div>
                  <h4 className="text-accent text-sm sm:text-base font-heading font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
                    Innova Crysta
                  </h4>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-300 font-light">Local: </span>
                      <strong className="text-accent font-sans font-bold text-sm sm:text-base">₹2,414</strong>
                      <span className="text-gray-400 font-light text-xs ml-1">(4h / 40km)</span>
                    </div>
                    <div>
                      <span className="text-gray-300 font-light">Outstation: </span>
                      <strong className="text-accent font-sans font-bold text-sm sm:text-base">₹6,405</strong>
                      <span className="text-gray-400 font-light text-xs">/day</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveService('crysta')}
                  className="w-full mt-4 sm:mt-5 py-2.5 sm:py-3 px-4 bg-accent text-primary font-bold uppercase tracking-widest text-[11px] sm:text-xs hover:bg-white transition-all flex items-center justify-center space-x-2 rounded-lg shadow-md cursor-pointer"
                >
                  <span>Book Crysta</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            {/* Stats Row - 2x2 grid on mobile, 4-col on tablet/desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 w-full mb-4 sm:mb-5 md:mb-6">
              <div className="bg-black/50 backdrop-blur-sm sm:bg-transparent border border-white/10 sm:border-0 rounded-xl p-2.5 sm:p-0 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center space-x-1.5 text-accent mb-0.5 sm:mb-1">
                  <Star className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" />
                  <span className="text-sm sm:text-base md:text-base font-bold text-white">4.9</span>
                </div>
                <p className="text-[10px] md:text-[10px] text-gray-400">Customer Rating</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm sm:bg-transparent border border-white/10 sm:border-0 rounded-xl p-2.5 sm:p-0 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center space-x-1.5 text-accent mb-0.5 sm:mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="text-sm sm:text-base md:text-base font-bold text-white">5000+</span>
                </div>
                <p className="text-[10px] md:text-[10px] text-gray-400">Successful Trips</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm sm:bg-transparent border border-white/10 sm:border-0 rounded-xl p-2.5 sm:p-0 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center space-x-1.5 text-accent mb-0.5 sm:mb-1">
                  <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="text-sm sm:text-base md:text-base font-bold text-white">24/7</span>
                </div>
                <p className="text-[10px] md:text-[10px] text-gray-400">Customer Support</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm sm:bg-transparent border border-white/10 sm:border-0 rounded-xl p-2.5 sm:p-0 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center space-x-1.5 text-accent mb-0.5 sm:mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="text-sm sm:text-base md:text-base font-bold text-white">100%</span>
                </div>
                <p className="text-[10px] md:text-[10px] text-gray-400">Sanitized Vehicles</p>
              </div>
            </div>

            {/* Contact Numbers - Centered luxury pills */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 w-full">
              <a
                href="tel:+919823959770"
                className="inline-flex items-center space-x-2 bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-accent/30 hover:border-accent py-1.5 sm:py-2 px-3 sm:px-4 rounded-full group transition-all shadow-md"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center group-hover:bg-accent/30 transition-colors shrink-0">
                  <Phone size={11} className="text-accent" />
                </div>
                <span className="text-white text-[11px] sm:text-xs md:text-sm font-medium tracking-wide group-hover:text-accent transition-colors">
                  +91 98239 59770
                </span>
              </a>
              <a
                href="tel:+919811612383"
                className="inline-flex items-center space-x-2 bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-accent/30 hover:border-accent py-1.5 sm:py-2 px-3 sm:px-4 rounded-full group transition-all shadow-md"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center group-hover:bg-accent/30 transition-colors shrink-0">
                  <Phone size={11} className="text-accent" />
                </div>
                <span className="text-white text-[11px] sm:text-xs md:text-sm font-medium tracking-wide group-hover:text-accent transition-colors">
                  +91 98116 12383
                </span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom Elements */}
        <div className="flex items-end justify-end mt-8 hidden lg:flex">
          <a
            href="#gallery"
            className="flex items-center space-x-3 text-white hover:text-accent transition-colors group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
              <Play size={14} className="ml-1" fill="currentColor" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Watch Experience</span>
          </a>
        </div>

      </div>

      {/* Services Popup Modal in Center */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
            data-lenis-prevent
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-4 overscroll-contain"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="bg-[#111111] border border-accent/30 rounded-2xl max-w-xl w-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative max-h-[90vh] flex flex-col overscroll-contain"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-1.5 sm:p-2 bg-black/70 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer border border-white/20 shadow-lg"
                aria-label="Close modal"
              >
                <X size={16} className="sm:hidden" />
                <X size={18} className="hidden sm:block" />
              </button>

              {/* Vehicle Image Header */}
              <div className="relative h-36 sm:h-44 md:h-52 w-full shrink-0 overflow-hidden bg-black/40">
                <img
                  src={serviceDetails[activeService].image}
                  alt={serviceDetails[activeService].title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="bg-accent text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full shadow-lg">
                    {serviceDetails[activeService].category}
                  </span>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div
                ref={modalBodyRef}
                data-lenis-prevent
                onWheel={handleUserInteraction}
                onTouchStart={handleUserInteraction}
                onMouseEnter={() => { isUserInteractingRef.current = true; }}
                onMouseLeave={() => {
                  if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
                  interactionTimeoutRef.current = setTimeout(() => {
                    isUserInteractingRef.current = false;
                  }, 1200);
                }}
                className="p-4 sm:p-5 md:p-7 overflow-y-auto flex-1 overscroll-contain no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading text-white mb-1">
                  {serviceDetails[activeService].title}
                </h3>
                <p className="text-accent text-[11px] sm:text-xs font-medium tracking-wider mb-2 sm:mb-3">
                  {serviceDetails[activeService].tagline}
                </p>
                <p className="text-textSecondary text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                  {serviceDetails[activeService].description}
                </p>

                {/* Specs Pill row */}
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-2 sm:p-2.5 text-center">
                    <Users size={14} className="text-accent mx-auto mb-0.5 sm:mb-1" />
                    <span className="text-[10px] sm:text-[11px] font-medium text-white block">{serviceDetails[activeService].capacity}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-2 sm:p-2.5 text-center">
                    <Briefcase size={14} className="text-accent mx-auto mb-0.5 sm:mb-1" />
                    <span className="text-[10px] sm:text-[11px] font-medium text-white block">{serviceDetails[activeService].luggage}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-2 sm:p-2.5 text-center">
                    <Snowflake size={14} className="text-accent mx-auto mb-0.5 sm:mb-1" />
                    <span className="text-[10px] sm:text-[11px] font-medium text-white block">Dual AC</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-2 sm:p-2.5 text-center">
                    <ShieldCheck size={14} className="text-accent mx-auto mb-0.5 sm:mb-1" />
                    <span className="text-[10px] sm:text-[11px] font-medium text-white block">Verified</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-4 sm:mb-5 bg-white/[0.03] border border-white/10 rounded-xl p-3 sm:p-4">
                  <h4 className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-2 sm:mb-3">
                    Service Highlights & Amenities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                    {serviceDetails[activeService].features.map((feat) => (
                      <div key={feat} className="flex items-center space-x-2 text-textSecondary text-[11px] sm:text-xs">
                        <CheckCircle2 size={12} className="text-accent shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Snapshot */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-accent/10 border border-accent/20 rounded-xl p-3 sm:p-3.5 mb-5 sm:mb-6 gap-1.5 sm:gap-2">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-gray-400 block">Starting Rates</span>
                    <span className="text-[11px] sm:text-xs text-white">Local: <strong className="text-accent font-sans">{serviceDetails[activeService].pricing.local}</strong></span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[11px] sm:text-xs text-white">Outstation: <strong className="text-accent font-sans">{serviceDetails[activeService].pricing.outstation}</strong></span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={() => {
                      setActiveService(null);
                      window.dispatchEvent(new CustomEvent('openBooking'));
                    }}
                    className="flex-1 py-2.5 sm:py-3 px-4 bg-accent text-primary hover:bg-white transition-colors text-[11px] sm:text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 rounded-sm shadow-md cursor-pointer"
                  >
                    <span>Book {activeService === 'urbania' ? 'Urbania' : 'Crysta'}</span>
                    <ArrowRight size={14} />
                  </button>
                  <a
                    href="tel:+919823959770"
                    className="flex-1 py-2.5 sm:py-3 px-4 border border-accent/60 text-accent hover:bg-accent/10 transition-colors text-[11px] sm:text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 rounded-sm cursor-pointer"
                  >
                    <Phone size={14} />
                    <span>Call to Book</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
