import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full sm:w-[280px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      whileHover={{ y: -10 }}
      className="w-full h-full p-[2px] rounded-2xl"
      style={{
        background: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
      }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black-100 rounded-2xl py-4 sm:py-6 px-6 sm:px-8 min-h-[240px] flex justify-evenly items-center flex-col shadow-lg hover:shadow-xl transition-all"
      >
        <img
          src={icon}
          alt={title}
          loading="lazy"
          className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
        />

        <h3 className="text-white md:text-[22px] sm:text-[18px] text-[16px] font-bold text-center mt-3 sm:mt-4">
          {title}
        </h3>
        <p className="text-gray-400 md:text-[13px] sm:text-[12px] text-[11px] text-center mt-2">
          Expert-level proficiency with proven production experience
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 max-w-4xl rounded-3xl border border-accent/15 bg-black-200/40 px-5 py-6 sm:px-7 sm:py-7 shadow-[0_18px_60px_rgba(15,23,42,0.9)]"
      >
        <p className="text-gray-300 md:text-[16px] sm:text-[14px] text-[13px] md:leading-[30px] sm:leading-[26px] leading-[22px]">
          <span className="font-bold text-accent">Full Stack MERN Engineer</span>{" "}
          with 4+ years of experience delivering production web applications and
          internal platforms. I focus on building scalable, maintainable systems
          using React, Node.js, TypeScript, and MongoDB.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <p className="text-gray-400 text-[13px] sm:text-[14px] leading-relaxed">
            I partner closely with product, design, and data teams to translate
            business problems into robust technical solutions and to set
            engineering standards the team can rely on.
          </p>
          <p className="text-gray-400 text-[13px] sm:text-[14px] leading-relaxed">
            Recent work includes leading small squads, improving performance and
            reliability, and rolling out CI/CD, testing, and monitoring so
            teams can ship faster with confidence.
          </p>
        </div>
      </motion.div>

      <div className="mt-12 sm:mt-16 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="text-white font-bold md:text-[28px] sm:text-[24px] text-[20px] mb-6 sm:mb-8">
            Core Expertise
          </h3>
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>

        {/* Key Strengths */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="mt-4 sm:mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            {
              title: "Frontend Architecture",
              desc: "React, Next.js, TypeScript, Performance Optimization",
            },
            {
              title: "Backend Development",
              desc: "Node.js, Express, MongoDB, REST APIs",
            },
            {
              title: "DevOps & CI/CD",
              desc: "Docker, GitHub Actions, Deployment Pipelines",
            },
            {
              title: "Team Leadership",
              desc: "Mentoring, Code Reviews, Technical Strategy",
            },
            {
              title: "AI/LLM Integration",
              desc: "Groq, OpenAI, Llama, Production Integration",
            },
            {
              title: "Real-time Systems",
              desc: "WebSockets, Real-time Sync, Scalability",
            },
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", "spring", idx * 0.1, 0.75)}
              className="p-3 sm:p-4 bg-black-100 border border-accent/30 rounded-lg hover:border-accent/60 transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <h4 className="text-accent font-bold md:text-[15px] sm:text-[13px] text-[12px] mb-2 uppercase tracking-wide">
                {skill.title}
              </h4>
              <p className="text-gray-400 md:text-[13px] sm:text-[12px] text-[11px]">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
