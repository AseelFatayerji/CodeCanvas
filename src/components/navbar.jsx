import { useState } from "react";
import { motion } from "framer-motion";
import { HashLink as NavLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GITHUB = "https://github.com/AseelFatayerji";

// Bordered button with a hard shadow that "presses" on hover
const linkClass =
  "shadow-[3px_3px_0_#fff] transition-[translate,box-shadow] duration-100 hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#000] active:translate-x-0.75 active:translate-y-0.75 active:shadow-none grid place-items-center px-3 py-2 border-2 border-white bg-[#141414] text-white rounded-lg";

function NavLinks({ isMobile }) {
  return (
    <>
      <NavLink to="#Hero" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="#Services" className={linkClass}>
        Services
      </NavLink>
      <NavLink to="#Projects" className={linkClass}>
        Projects
      </NavLink>
      <NavLink to="#Contact" className={linkClass}>
        Contact
      </NavLink>
      {isMobile && (
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          GitHub
        </a>
      )}
    </>
  );
}

function Navbar({ isMobile }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#141414]/40 text-white py-4 md:px-8 px-4 select-none border-b-4 border-black">
      <div className="flex justify-between items-center">
        <nav>
          <NavLink to="#Hero" className="text-2xl font-black tracking-tight text-white">
            Portfolio.
          </NavLink>
        </nav>
        <div className="flex justify-even">
          {!isMobile && (
            <nav className="hidden sm:flex gap-5 items-center">
              <NavLinks />
            </nav>
          )}
          {isMobile && (
            <label>
              <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center lg:hidden">
                <input
                  className="hidden peer"
                  type="checkbox"
                  checked={isOpen}
                  onChange={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                />
                <div className="w-[60%] h-1 bg-black rounded-sm transition-all duration-300 origin-left translate-y-2 peer-checked:-rotate-45"></div>
                <div className="w-[60%] h-1 bg-black rounded-sm transition-all duration-300 origin-center peer-checked:hidden"></div>
                <div className="w-[60%] h-1 bg-black rounded-sm transition-all duration-300 origin-left -translate-y-2 peer-checked:rotate-45"></div>
              </div>
            </label>
          )}
        </div>
        {!isMobile && (
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="shadow-[3px_3px_0_#fff] transition-[translate,box-shadow] duration-100 hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#000] active:translate-x-0.75 active:translate-y-0.75 active:shadow-none grid place-items-center size-11 border-2 border-white bg-[#141414] text-white rounded-lg"
          >
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
          </a>
        )}
      </div>
      {isOpen && (
        <motion.div
          className="absolute justify-end px-3 overflow-visible text-center right-0 top-full sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <nav className="mt-3 py-5 px-4 rounded-lg w-fit flex flex-col gap-4 items-end bg-[#C7FF2F] border-4 border-black shadow-[6px_6px_0_#fff]">
            <NavLinks isMobile={isMobile} />
          </nav>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;