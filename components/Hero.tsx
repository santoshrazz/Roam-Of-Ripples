"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Dubai Tour Package",
    subtitle: "Amazing Places",
    image: "/dubai-skyline-with-burj-khalifa-at-sunset.jpg",
  },
  {
    title: "Amazing Singapore",
    subtitle: "Explore Garden City",
    image: "/singapore-home.jpg",
  },
  {
    title: "Thailand Fun Fiesta",
    subtitle: "Discover Thailand",
    image: "/thailand-home.jpg",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16 md:pt-20">
      {/* Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1,
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{ pointerEvents: currentSlide === index ? "auto" : "none" }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/30 z-10" />
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-teal-400 text-lg md:text-xl font-medium mb-4"
              >
                {slide.subtitle}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance"
              >
                {slide.title}
              </motion.h1>
              <Link href={"/contact"}>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="px-8 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all font-medium text-lg hover:scale-105"
                >
                  Book Now
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index ? "w-8 bg-teal-600" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
