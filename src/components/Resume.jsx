import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { summary, education, achievements } from "../constants";

const Resume = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Professional Summary</p>
        <h2 className={styles.sectionHeadText}>Resume</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-6 max-w-4xl rounded-3xl border border-accent/15 bg-black-200/40 px-5 py-6 sm:px-7 sm:py-7 shadow-[0_18px_60px_rgba(15,23,42,0.9)]"
      >
        <p className="text-gray-300 text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px]">
          {summary}
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        className="mt-12"
      >
        <h3 className="text-white text-[26px] font-bold mb-6 flex items-center gap-3">
          <span className="text-accent text-2xl">Profile</span>
          <span className="text-gray-300 text-[18px] font-normal">
            education & background
          </span>
        </h3>
        {education.map((edu, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            variants={fadeIn("up", "spring", i * 0.1, 0.75)}
            className="mt-5 p-6 rounded-lg border border-accent/30 hover:border-accent/60 bg-black-100 hover:bg-black-100/80 transition-all"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-white text-lg font-extrabold">
                {edu.degree}
              </h4>
              <span className="text-accent font-bold text-sm">{edu.year}</span>
            </div>
            <p className="text-accent text-[15px] font-semibold">
              {edu.institution}
            </p>
            {edu.details && (
              <p className="text-gray-400 text-[14px] mt-3">{edu.details}</p>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-12"
      >
        <h3 className="text-white text-[26px] font-bold mb-6 flex items-center gap-3">
          <span className="text-accent text-2xl">Highlights</span>
          <span className="text-gray-300 text-[18px] font-normal">
            selected achievements
          </span>
        </h3>
        <ul className="space-y-3">
          {achievements.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.02 }}
              variants={fadeIn("up", "spring", i * 0.1, 0.75)}
              className="text-gray-300 text-[15px] p-4 rounded-lg border border-accent/20 hover:border-accent/50 hover:bg-accent/5 transition-all flex items-start gap-3"
            >
              <span className="text-accent font-bold text-lg">✓</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");
