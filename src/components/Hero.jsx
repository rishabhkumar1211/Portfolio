import { motion } from "framer-motion";
import React, { Suspense, lazy, useEffect, useRef, useState } from "react";

import { styles } from "../styles";

const ComputersCanvas = lazy(() =>
  import("./canvas/Computers").then((mod) => ({ default: mod.default })),
);

const Hero = () => {
  const [show3D, setShow3D] = useState(false);
  const canvasWrapperRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!canvasWrapperRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setShow3D(true);
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(canvasWrapperRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-gradient-to-b from-primary to-black-100 pt-20 sm:pt-0">
      {/* Content Container */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-8 sm:py-16 gap-8 sm:gap-12 z-10 relative">
        {/* Left side - Content */}
        <div className="flex-1 flex flex-col items-start justify-center order-2 lg:order-1 w-full lg:w-auto mt-8 lg:mt-0">
          {/* Left accent line */}
          <div className="hidden lg:flex flex-col justify-center items-center absolute -left-12 h-80">
            <div className="w-5 h-5 rounded-full bg-accent animate-pulse" />
            <div
              className="w-1 h-60"
              style={{
                background:
                  "linear-gradient(180deg, #10b981 0%, rgba(16, 185, 129, 0) 100%)",
              }}
            />
          </div>

          <h1 className={`${styles.heroHeadText}`}>
            Rishabh Kumar
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${styles.heroSubText} text-gray-400 mt-4 sm:mt-6`}
          >
            Senior Full Stack Engineer (MERN) with 4+ years of experience
            <br className="hidden sm:block" />
            Designing scalable systems, data platforms, and high‑performing UI experiences
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-accent/40 text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all duration-300 text-center"
            >
              Contact
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6 sm:gap-8 mt-8 sm:mt-12 w-full"
          >
            <div>
              <p className="text-xl sm:text-2xl font-bold text-accent">4+</p>
              <p className="text-xs sm:text-sm text-gray-400">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-accent">10+</p>
              <p className="text-xs sm:text-sm text-gray-400">
                Projects Delivered
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-accent">5+</p>
              <p className="text-xs sm:text-sm text-gray-400">
                Team Members Led
              </p>
            </div>
          </motion.div>
        </div>

        <div
          ref={canvasWrapperRef}
          className="flex-1 w-full h-[260px] sm:h-[360px] lg:h-[480px] order-1 lg:order-2 relative z-0"
        >
          {show3D ? (
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center rounded-2xl border border-accent/20 bg-black-200/40">
                  <div className="text-gray-400 text-sm">Loading 3D model...</div>
                </div>
              }
            >
              <ComputersCanvas />
            </Suspense>
          ) : (
            <div className="w-full h-full flex items-center justify-center rounded-2xl border border-accent/20 bg-black-200/40">
              <p className="text-gray-400 text-xs sm:text-sm">
                Loading 3D preview...
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="w-full flex justify-center items-center py-4 sm:py-8 relative z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-accent flex justify-center items-start p-2 hover:border-accent-light transition">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-accent mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
