import { AnimatePresence, useCycle } from "framer-motion";
import { Container, Sidebar } from "..";

import Image from "next/image";
import { NavLink } from "./NavLink";
import { Routes } from "./routes";
import { motion } from "framer-motion";
import { popUp } from "../../animations";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleSidebarClose = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-20 flex h-20 flex-shrink-0 flex-grow-0 items-center bg-slate-900 shadow-md shadow-slate-900">
        <Container>
          <div className="flex h-full w-full items-center justify-between py-2">
            <Image
              className="h-full w-auto"
              src="/images/logo.svg"
              width={206}
              height={100}
              alt="logo.svg"
            />

            <motion.ul className="hidden list-none justify-between gap-10 text-black sm:flex">
              {Routes.map((route, idx) => (
                <AnimatePresence key={idx}>
                  <motion.li
                    className="border-b-2 border-b-transparent"
                    initial={{ opacity: 0, translateX: 100 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    exit={{ opacity: 0, translateX: 100 }}
                    key={idx}
                  >
                    <NavLink {...route} />
                  </motion.li>
                </AnimatePresence>
              ))}
            </motion.ul>

            <button
              className="block cursor-pointer p-2 sm:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                "X"
              ) : (
                <Image
                  src="/images/bars.svg"
                  className="h-full w-auto"
                  height={20}
                  width={20}
                  alt="menu toggle"
                />
              )}
            </button>
          </div>
        </Container>
      </nav>

      <AnimatePresence>
        {open && <Sidebar handleClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
};
