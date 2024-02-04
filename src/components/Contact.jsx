import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">
            Mobile No: 8595346353
          </span>
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">
            Email :{" "}
            <a
              style={{ color: "#ADD8E6" }}
              href="mailto:rishabhkumar1211@gmail.com"
            >
              rishabhkumar1211@gmail.com
            </a>
          </span>
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">
            LinkedIn:{" "}
            <a
              style={{ color: "#ADD8E6" }}
              href="https://www.linkedin.com/in/rishabh1299/"
            >
              My LinkedIn Profile
            </a>
          </span>
        </label>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
