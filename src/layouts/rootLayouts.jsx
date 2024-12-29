import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "motion/react";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";
import Sidebar from "../components/sidebar";
import "../styles/components/layout.css";

const RootLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  const [isDark, setIsDark] = useState(false);

  const toggleOn = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <div className="taskbar">
        <ul>
          <li>
            <motion.button
              onClick={toggleSidebar}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="hmbgrBtn"
            >
              <GiHamburgerMenu size={24} />
            </motion.button>
            <div className="layoutMenu">{isSidebarOpen && <Sidebar />}</div>
          </li>
          <li>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hmbgrBtn"
              onClick={toggleOn}
            >
              {isDark ? <BsSun size={24} /> : <BsFillMoonStarsFill size={24} />}
            </motion.button>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default RootLayout;
