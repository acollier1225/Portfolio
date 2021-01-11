import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import SidebarButton from "./SidebarButton";
import Backdrop from "./Backdrop";

const Sidebar = (props) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: props.isCollapsed ? 0 : 600 }}
      transition={{ ease: "easeOut", duration: 0.6 }}
      className="z-50 fixed top-0 h-full bg-gradient-to-r from-white to black left-0 tracking-widest"
    >
      <SidebarButton
        showSidebar={props.showSidebar}
        collapseSidebar={props.collapseSidebar}
      />
      <nav className="fixed top-20 flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between text-4xl">
        <motion.div
          initial={{ x: -175 }}
          animate={{ x: props.isCollapsed ? -175 : 75 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
        >
          <ul>
            <motion.li
              className="py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: props.isCollapsed ? 0 : 1 }}
              transition={{ duration: 0.7 }}
            >
              <Link onClick={() => props.collapseSidebar()} to="#home">
                HOME
              </Link>
            </motion.li>
            <motion.li
              className="py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: props.isCollapsed ? 0 : 1 }}
              transition={{ duration: 0.7 }}
            >
              <Link onClick={() => props.collapseSidebar()} to="#about">
                ABOUT
              </Link>
            </motion.li>
            <motion.li
              className="py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: props.isCollapsed ? 0 : 1 }}
              transition={{ duration: 0.7 }}
            >
              <Link onClick={() => props.collapseSidebar()} to="#projects">
                PROJECTS
              </Link>
            </motion.li>
            <motion.li
              className="py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: props.isCollapsed ? 0 : 1 }}
              transition={{ duration: 0.7 }}
            >
              <Link onClick={() => props.collapseSidebar()} to="#resume">
                RESUME
              </Link>
            </motion.li>
            <motion.li
              className="py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: props.isCollapsed ? 0 : 1 }}
              transition={{ duration: 0.7 }}
            >
              <Link onClick={() => props.collapseSidebar()} to="#contact">
                CONTACT
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
