import React, { useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import { motion } from "framer-motion";
import Projects from "./Projects";
import Skills from "./Skills";
import coding from "./coding2.jpg";
import { HashLink as Link } from "react-router-hash-link";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ ease: "easeOut", duration: 2 }}
        id="home"
      >
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
            <div className="down" id="downFirst"></div>
            <br />
            <div className="down" id="downSecond"></div>
          </Link>
        </motion.div>
      </motion.div>
      {/* <div className="py-20 text-center text-4xl font-bold" id="home">
        Home
      </div> */}
      <motion.div
        // transition={{ ease: "anticipate", duration: 1 }}
        className="text-center"
        id="about"
      >
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
