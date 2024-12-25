import "../styles/pages/home.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "motion/react";
import { useState } from "react";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";

const Sidebar = () => {};

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleOn = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="taskbar">
      <ul>
        <li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="hmbgrBtn"
          >
            <GiHamburgerMenu size={24} />
          </motion.button>
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
  );
}
