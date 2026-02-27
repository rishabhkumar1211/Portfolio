import React, { useRef, useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
const EarthCanvas = lazy(() => import("./canvas/Earth"));
// CanvasLoader not needed here; use simple fallback
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { mobile, github } from "../assets"; // icons for contact links

const Contact = () => {
  return (
    <div
      className={`mt-8 sm:mt-12 flex flex-col-reverse lg:flex-row lg:gap-12 gap-8 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 lg:flex-[0.75] rounded-3xl border border-accent/15 bg-black-200/40 p-6 sm:p-8 shadow-[0_18px_60px_rgba(15,23,42,0.9)]"
      >
        <p className={styles.sectionSubText}>Contact</p>
        <h3 className={styles.sectionHeadText}>Let’s work together</h3>

        <p className="text-gray-400 md:text-[16px] sm:text-[14px] text-[13px] mt-4 sm:mt-6 mb-6 sm:mb-8 leading-relaxed">
          Open to senior full‑time roles, high‑impact freelance projects, and
          technical collaborations. If you are building a product where
          performance, UX, and reliability matter, I would be happy to connect.
        </p>

        <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10">
          <a
            href="tel:+918595346353"
            className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border border-accent/30 hover:border-accent/60 hover:bg-accent/10 transition-all group text-sm sm:text-base"
          >
            <img
              src={mobile}
              alt="phone"
              loading="lazy"
              className="w-5 sm:w-6 h-5 sm:h-6 group-hover:scale-110 transition"
            />
            <span className="text-white font-semibold truncate">
              +91-8595346353
            </span>
          </a>

          <a
            href="mailto:rishabhkumar1211@gmail.com"
            className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border border-accent/30 hover:border-accent/60 hover:bg-accent/10 transition-all group text-sm sm:text-base"
          >
            <img
              src={github}
              alt="email"
              loading="lazy"
              className="w-5 sm:w-6 h-5 sm:h-6 group-hover:scale-110 transition"
            />
            <span className="text-white font-semibold truncate">
              rishabhkumar1211@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/rishabh1299/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border border-accent/30 hover:border-accent/60 hover:bg-accent/10 transition-all group text-sm sm:text-base"
          >
            <span className="text-lg">🔗</span>
            <span className="text-white font-semibold">LinkedIn</span>
          </a>

          <a
            href="https://github.com/rishabhkumar1211"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border border-accent/30 hover:border-accent/60 hover:bg-accent/10 transition-all group text-sm sm:text-base"
          >
            <span className="text-lg">💻</span>
            <span className="text-white font-semibold">GitHub</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="mailto:rishabhkumar1211@gmail.com"
            className="flex-1 px-6 py-3 sm:py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-light transition-all shadow-lg text-center text-sm sm:text-base"
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/rishabh1299/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 sm:py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all text-center text-sm sm:text-base"
          >
            Connect
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 lg:flex-1 w-full h-[280px] sm:h-[350px] lg:h-[500px] relative z-0"
      >
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-gray-400 text-sm">Loading 3D map...</div>
            </div>
          }
        >
          <EarthCanvas />
        </Suspense>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
