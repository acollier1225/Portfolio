import React, { useEffect } from "react";
import headshot from "../Images/headshot2.jpg";
import reactLogo from "../Images/react.jpg";
import jsLogo from "../Images/javascript-logo.jpg";
import reduxLogo from "../Images/redux-logo.jpg";
import nodeLogo from "../Images/nodejs-icon.jpg";
import cSharpLogo from "../Images/csharp.jpg";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const skillIcon =
    "w-12 l-12 border-2 rounded-xl overflow-hidden border-black shadow-xl mx-auto transition duration-500 ease-in-out hover: transform hover:scale-110";

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0 }}
      variants={{
        visible: { opacity: 1 },
      }}
      transition={{ duration: 1 }}
      className="py-1 mb-60"
    >
      <div className="font-advent w-56 mx-auto text-4xl p-4 border-4 my-10 tracking-widest">
        ABOUT ME
      </div>
      <div className="mx-l-sm max-w-sm mx-auto bg-white shadow-md md:max-w-4xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="sm:h-25 md:h-50 w-full object-cover md:w-48"
              src={headshot}
              alt="Headshot"
            />
          </div>
          <div className="p-4">
            <div className="tracking-wide text-xl text-black font-bold text-left">
              Arden Collier
            </div>
            <p className="mt-2 text-gray-500 text-left">Web Developer</p>
            <p className="mt-2 text-black-500 text-left">
              Hello! I am a Full Stack Web Developer based in Jacksonville,
              Florida. I work with JavaScript, React, Node.js, C# and ASP.NET.
            </p>
            <div className="font-bold">
              <div>Skills</div>

              <div className="grid sm:mx-16 gap-2 grid-cols-5">
                <a
                  className={skillIcon}
                  href="https://reactjs.org/"
                  target="_blank"
                >
                  <img src={reactLogo} />
                </a>
                <a
                  className={skillIcon}
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                >
                  <img src={jsLogo} />
                </a>
                <a
                  className={skillIcon}
                  href="https://redux.js.org/"
                  target="_blank"
                >
                  <img src={reduxLogo} />
                </a>
                <a
                  className={skillIcon}
                  href="https://nodejs.org/en/"
                  target="_blank"
                >
                  <img src={nodeLogo} />
                </a>
                <a
                  className={skillIcon}
                  href="https://dotnet.microsoft.com/apps/aspnet"
                  target="_blank"
                >
                  <img src={cSharpLogo} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
