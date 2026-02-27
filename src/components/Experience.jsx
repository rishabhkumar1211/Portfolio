import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          "radial-gradient(circle at top left, rgba(16,185,129,0.18), rgba(17,24,39,0.98))",
        color: "#f9fafb",
        border: "1px solid rgba(16,185,129,0.4)",
        borderRadius: "16px",
        boxShadow:
          "0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,0.9)",
        padding: "20px 24px",
      }}
      contentArrowStyle={{ borderRight: "8px solid rgba(16,185,129,0.6)" }}
      position={index % 2 === 0 ? "left" : "right"}
      date={
        <span className="text-accent font-bold text-sm">{experience.date}</span>
      }
      iconStyle={{
        background: experience.iconBg,
        color: "#fff",
        boxShadow:
          "0 0 0 3px rgba(15,23,42,1), 0 0 0 6px rgba(16,185,129,0.55)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-white md:text-[22px] sm:text-[18px] text-[16px] font-extrabold">
          {experience.title}
        </h3>
        <p
          className="text-accent md:text-[15px] sm:text-[13px] text-[12px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <div className="mt-1 inline-flex items-center gap-2 text-[11px] sm:text-[12px] text-gray-400">
          <span className="px-2 py-0.5 rounded-full border border-accent/40 bg-black-100/60 uppercase tracking-wide">
            {experience.title.includes("Senior") ? "Senior" : "Mid-level"}
          </span>
          <span className="h-1 w-1 rounded-full bg-accent/60" />
          <span>Full-time · MERN</span>
        </div>
      </div>

      <ul className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2.5">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="relative pl-5 text-gray-300 md:text-[14px] sm:text-[13px] text-[12px] leading-relaxed"
          >
            <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent/70" />
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Professional Journey</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
      </motion.div>

      <div className="mt-10 sm:mt-14 lg:mt-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-black-200/30 border border-accent/10 px-3 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-gray-400 text-[13px] sm:text-[14px] max-w-2xl">
              Roles focused on building and scaling production systems, owning
              end‑to‑end delivery, and collaborating with cross‑functional teams
              in fast‑paced product environments.
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-black-100/60 px-3 py-1 text-[11px] sm:text-[12px] text-gray-200">
              <span className="h-2 w-2 rounded-full bg-accent" />
              2 companies · 4+ years
            </span>
          </div>
          <VerticalTimeline lineColor="#10b981" layout="2-columns">
            {experiences.map((experience, index) => (
              <motion.div
                variants={fadeIn("right", "spring", index * 0.25, 0.75)}
                whileHover={{ scale: 1.01 }}
                key={`experience-${index}`}
              >
                <ExperienceCard experience={experience} index={index} />
              </motion.div>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
