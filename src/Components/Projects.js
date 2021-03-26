import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Projects = () => {
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
      initial="hidden"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      transition={{ duration: 2 }}
      className="py-1 sm:mx-28 lg:mx-56 my-20 mb-40"
    >
      <h1 className="font-advent w-56 mx-auto text-4xl p-4 border-4 my-10 tracking-widest">
        PROJECTS
      </h1>
      <div className="grid gap-2 md:grid-cols-2 sm:grid-cols-1">
        <div className="bg-white flex flex-col pt-6 mx-auto text-center space-y-4 shadow-md w-64 h-64 font-bold hover:shadow-lg transition duration-500 ease-in-out md:hover: transform md:hover:scale-110">
          Spotify Chat Application
          <div className="text-left px-4 py-2 font-medium">
            A chat application that creates chat rooms based on similar Spotify
            data between users.
            <br />
            <div className="grid sm:mx-auto gap-2 grid-cols-2 py-8">
              <a href="https://spotify-chat.netlify.app/" target="_blank">
                <div className="py-4 bg-black text-white text-xl text-bold font-advent w-16 l-16 rounded-full border-black shadow-xl mx-auto transition duration-500 ease-in-out hover: transform hover:scale-110 text-center">
                  Demo
                </div>
              </a>
              <div className="h-16 w-16 mx-auto transition duration-500 ease-in-out hover: transform hover:scale-110">
                <a
                  href="https://github.com/acollier1225/Spotify-Chat-Room"
                  target="_blank"
                >
                  <i className="fab fa-github mx-auto my-auto text-6xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col pt-6 mx-auto text-center space-y-4 shadow-md w-64 h-64 font-bold hover:shadow-lg transition duration-500 ease-in-out hover: transform md:hover:scale-110">
          Arco Clothing
          <div className="text-left px-4 py-2 font-medium">
            A mock-up e-commerce site that allows you to add clothes from a
            selection to your cart.
            <br />
            <div className="grid sm:mx-auto gap-2 grid-cols-2 py-8">
              <a href="https://arco-clothing.netlify.app/" target="_blank">
                <div className="py-4 bg-black text-white text-xl text-bold font-advent w-16 l-16  rounded-full  border-black shadow-xl mx-auto transition duration-500 ease-in-out hover: transform hover:scale-110 text-center">
                  Demo
                </div>
              </a>
              <div className="h-16 w-16 mx-auto transition duration-500 ease-in-out hover: transform hover:scale-110">
                <a
                  href="https://github.com/acollier1225/E-Commerce-Project"
                  target="_blank"
                >
                  <i className="fab fa-github mx-auto my-auto text-6xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
