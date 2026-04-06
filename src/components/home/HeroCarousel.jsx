import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import gameVdo1 from "../../assets/gameVdo1.mp4";
import gameVdo2 from "../../assets/gameVdo2.mp4";
import gameVdo3 from "../../assets/gameVdo3.mp4";

const slides = [
  {
    id: 1,
    video: gameVdo1,
    title: "Compete. Conquer. Dominate.",
    subtitle:
      "Join EWUESPC and represent East West University in high-intensity esports battles.",
  },
  {
    id: 2,
    video: gameVdo2,
    title: "Where Gamers Become Legends.",
    subtitle:
      "From casual players to campus champions — this is where your esports journey levels up.",
  },
  {
    id: 3,
    video: gameVdo3,
    title: "Built for Passion. Powered by Community.",
    subtitle:
      "Tournaments, teamwork, hype, and unforgettable moments — all under one club.",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <video
            key={slides[currentSlide].video}
            src={slides[currentSlide].video}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex min-h-screen items-center px-4 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            key={slides[currentSlide].title}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary md:text-sm">
              East West University E-Sports Club
            </p>

            <h1 className="glow-text text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {slides[currentSlide].title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
              {slides[currentSlide].subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/events" className="btn btn-primary rounded-xl px-6">
                Explore Events
              </Link>

              <Link
                to="/about"
                className="btn glass rounded-xl border-white/15 px-6 text-white hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-primary"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 right-4 z-20 hidden gap-3 md:flex">
        <button
          onClick={handlePrev}
          className="btn btn-circle glass border-white/15 text-white hover:bg-white/10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          className="btn btn-circle glass border-white/15 text-white hover:bg-white/10"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
