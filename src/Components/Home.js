import React, { useEffect } from "react";
import About from "./About";
import Contact from "./Contact/Contact";
import { motion } from "framer-motion";
import Projects from "./Projects";
import Skills from "./Resume";
import coding from "../Images/coding.jpg";
import { HashLink as Link } from "react-router-hash-link";
import "./Home.css";
import { AnimatedDiv } from "../Animated";

const Home = () => {
  return (
    <div>
      <motion.div id="home">
        <img src={coding} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, ease: "easeOut", duration: 2 }}
          className="top tracking-widest"
        >
          WELCOME, I'M ARDEN
          <br />
          <span id="continue">CONTINUE</span>
          <Link to="#about">
            <br />
            <div className="arrows">
              <div className="down" id="downFirst"></div>
              <br />
              <div className="down" id="downSecond"></div>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div className="text-center" id="about">
        <About />
      </motion.div>
      <div className="text-center" id="projects">
        <Projects />
      </div>
      <div className="text-center" id="resume">
        <Skills />
      </div>
      <div className="text-center" id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
