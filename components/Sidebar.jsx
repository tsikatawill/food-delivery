import { sidebarAnim, sidebarItems } from "../animations";

import { NavLink } from "./Navbar/NavLink";
import { Routes } from "./Navbar/routes";
import { motion } from "framer-motion";

export const Sidebar = ({ handleClose }) => {
  return (
    <motion.aside
      initial="closed"
      animate="open"
      exit="closed"
      variants={sidebarAnim}
      className="scrollbar-hidden fixed top-20 flex h-[calc(100vh-5rem)] w-52 flex-col items-center gap-5 overflow-x-hidden overflow-y-scroll bg-gray-50 p-5"
      onClick={handleClose}
    >
      {Routes.map((route, idx) => (
        <NavLink
          key={idx}
          {...route}
          variants={sidebarItems}
          onClick={handleClose}
        />
      ))}
    </motion.aside>
  );
};
