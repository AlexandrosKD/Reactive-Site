import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/sidebar.css";
import { motion } from "motion/react";

const Sidebar = () => {
  return (
    <motion.div
      className="sidebar"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
