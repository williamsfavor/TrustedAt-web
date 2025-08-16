import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Logo from "../assets/budy.svg";
import { useState } from "react";

export default function NavBar() {
  const [show, setShow] = useState(false);

  // Animation variants for the sidebar
  const sidebarVariants:Variants = {
    open: { x: 1, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
    closed: { x: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // Animation variants for menu items
  const itemVariants:Variants = {
    open: { opacity: 3, y: 0, transition: { duration: 0.2, delay: 0.1 } },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <div className="w-screen h-[10vh] md:h-[12vh] px-4 md:px-8 bg-white/60 backdrop-blur-md shadow sticky top-0 z-20 flex justify-between items-center">
        <div>
          <img src={Logo} className="h-10 md:h-12" alt="TrustedAt Logo" />
        </div>
        <ul className="hidden md:flex bg-primary/10 text-gray-800 py-2 px-1 rounded-full">
          <li className="mx-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-1 px-3 rounded-full text-sm font-semibold transition-colors ${
                  isActive ? "text-white bg-primary/80" : "hover:text-primary"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-1 px-3 rounded-full text-sm font-semibold transition-colors ${
                  isActive ? "text-white bg-primary/80" : "hover:text-primary"
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              to="/legal"
              className={({ isActive }) =>
                `block py-1 px-3 rounded-full text-sm font-semibold transition-colors ${
                  isActive ? "text-white bg-primary/80" : "hover:text-primary"
                }`
              }
            >
              Legal
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                `block py-1 px-3 rounded-full text-sm font-semibold transition-colors ${
                  isActive ? "text-white bg-primary/80" : "hover:text-primary"
                }`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm rounded-full bg-primary/70 text-white hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
            Get The App
          </button>
          <motion.button
            className="md:hidden p-2"
            onClick={() => setShow(!show)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {show && (
          <motion.div
            className="w-full  h-full bg-white/95 backdrop-blur-md fixed top-0 left-0 z-20 shadow-lg"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex h-[10vh] px-6 py-4 items-center justify-between border-b border-gray-200">
              <img src={Logo} className="h-10" alt="TrustedAt Logo" />
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 text-xs rounded-full bg-primary/70 text-white hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                  Get The App
                </button>
                <motion.button
                  className="text-2xl text-gray-800 p-1 py-0 rounded-full hover:bg-red-100 hover:text-red-600 transition-colors"
                  onClick={() => setShow(!show)}
                  aria-label="Close menu"
                  whileTap={{ scale: 0.9 }}
                >
                  &times;
                </motion.button>
              </div>
            </div>
            <motion.ul className="flex flex-col gap-3 py-6 px-6" variants={itemVariants} initial="closed" animate="open">
              <motion.li key="home" variants={itemVariants}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block px-4 py-3 text-lg font-semibold text-gray-800 hover:text-primary transition-colors  border-gray-100 ${
                      isActive ? "text-primary font-bold border-l-4 border-primary" : ""
                    }`
                  }
                  onClick={() => setShow(false)}
                >
                  Home
                </NavLink>
              </motion.li>
              <motion.li key="about" variants={itemVariants}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block px-4 py-3 text-lg font-semibold text-gray-800 hover:text-primary transition-colors  border-gray-100 ${
                      isActive ? "text-primary font-bold border-l-4 border-primary" : ""
                    }`
                  }
                  onClick={() => setShow(false)}
                >
                  About Us
                </NavLink>
              </motion.li>
              <motion.li key="legal" variants={itemVariants}>
                <NavLink
                  to="/legal"
                  className={({ isActive }) =>
                    `block px-4 py-3 text-lg font-semibold text-gray-800 hover:text-primary transition-colors  border-gray-100 ${
                      isActive ? "text-primary font-bold border-l-4 border-primary" : ""
                    }`
                  }
                  onClick={() => setShow(false)}
                >
                  Legal
                </NavLink>
              </motion.li>
              <motion.li key="contactus" variants={itemVariants}>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    `block px-4 py-3 text-lg font-semibold text-gray-800 hover:text-primary transition-colors s border-gray-100 ${
                      isActive ? "text-primary font-bold border-l-4 border-primary" : ""
                    }`
                  }
                  onClick={() => setShow(false)}
                >
                  Contact Us
                </NavLink>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}