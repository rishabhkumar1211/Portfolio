import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  const getCategory = (name) => {
    const frontend = [
      "React JS",
      "Redux Toolkit",
      "Tailwind CSS",
      "TypeScript",
      "HTML 5",
      "CSS 3",
      "JavaScript",
    ];
    const backend = ["Node JS", "MongoDB"];
    const tools = ["git", "figma", "docker", "Three JS"];

    if (frontend.includes(name)) return "Frontend";
    if (backend.includes(name)) return "Backend";
    return "Tools & 3D";
  };

  const groupedTechs = technologies.reduce((acc, tech) => {
    const cat = getCategory(tech.name);
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(tech);
    return acc;
  }, {});

  const categories = ["Frontend", "Backend", "Tools & 3D"];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>High-Proficiency Stack</p>
        <h2 className={styles.sectionHeadText}>Skills & Technologies</h2>
      </motion.div>

      <div className="mt-10 sm:mt-14 rounded-3xl border border-accent/10 bg-black-200/30 px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2 sm:mb-4">
          <p className="text-gray-400 text-[13px] sm:text-[14px] max-w-2xl">
            A practical stack used in production projects across dashboards,
            internal tools, and customer‑facing applications.
          </p>
          <span className="text-[11px] sm:text-[12px] text-gray-300 border border-accent/30 rounded-full px-3 py-1 bg-black-100/60">
            {technologies.length}+ tools
          </span>
        </div>
        {categories.map((category, catIdx) => (
          <motion.div
            key={category}
            variants={fadeIn("up", "spring", catIdx * 0.2, 0.75)}
            className="mt-8 first:mt-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-accent font-bold text-[18px] sm:text-[20px] uppercase tracking-[0.15em]">
                {category}
              </h3>
              <div className="hidden sm:flex items-center gap-1 text-[11px] text-gray-400">
                <span className="h-1 w-6 rounded-full bg-accent/70" />
                <span>core tools</span>
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-8">
              {(groupedTechs[category] || []).map((technology, idx) => (
                <motion.div
                  key={technology.name}
                  variants={fadeIn("up", "spring", idx * 0.1, 0.75)}
                  className="w-24 h-24 sm:w-28 sm:h-28"
                >
                  <BallCanvas icon={technology.icon} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
