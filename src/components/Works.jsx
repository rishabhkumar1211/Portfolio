import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black-100 rounded-2xl w-full max-w-sm mx-auto overflow-hidden border border-accent/20 hover:border-accent/60 transition-all duration-300 shadow-lg hover:shadow-accent/20"
      >
        <div className="relative w-full h-48 sm:h-52 lg:h-56 overflow-hidden group">
          <img
            src={image}
            alt="project_image"
            loading="lazy"
            className="w-full h-full object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-300"
          />

          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 rounded-t-2xl">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent text-white font-bold rounded-lg hover:bg-accent-light transition flex items-center gap-2 text-xs sm:text-sm"
            >
              <img
                src={github}
                alt="source code"
                loading="lazy"
                className="w-4 sm:w-5 h-4 sm:h-5 object-contain invert"
              />
              View Code
            </a>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="text-white font-extrabold text-lg sm:text-xl lg:text-2xl truncate">
            {name}
          </h3>
          <p className="mt-2 text-gray-400 text-sm sm:text-base line-clamp-3 leading-relaxed">
            {description}
          </p>

          <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className="text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-accent/10 to-blue-accent/10 border border-accent/30 text-white"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Featured Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Key Projects</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 w-full max-w-5xl rounded-3xl border border-accent/10 bg-black-200/40 px-5 py-5 sm:px-7 sm:py-6 shadow-[0_18px_60px_rgba(15,23,42,0.9)]"
      >
        <p className="text-gray-300 md:text-[16px] sm:text-[14px] text-[13px] md:leading-[30px] sm:leading-[26px] leading-[22px]">
          A curated set of projects that represent how I approach product
          engineering: clear problem statements, pragmatic technical decisions,
          measurable impact, and maintainable codebases. From AI‑assisted tools
          to data‑heavy dashboards, each project highlights end‑to‑end ownership
          across the stack.
        </p>
      </motion.div>

      <div className="mt-12 sm:mt-16 w-full">
        <div className="rounded-3xl bg-black-200/25 border border-accent/10 p-5 sm:p-7 lg:p-9 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-black-100/60 px-3 py-1 text-[11px] sm:text-[12px] text-gray-200">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {projects.length} featured projects
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {projects.length ? (
              projects.map((project, index) => (
                <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  {...project}
                />
              ))
            ) : (
              <p className="text-gray-400 text-center w-full py-8">
                No projects available at the moment.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
