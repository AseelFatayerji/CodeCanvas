import { useState } from "react";
import { motion } from "framer-motion";
import { HashLink as NavLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function NavLinks() {
  return (
    <>
      <NavLink to="#Hero" className={`text-lg font-bold transition-colors `}>
        Home
      </NavLink>
      <NavLink to="#Services" className={`text-lg font-bold transition-colors`}>
        Services
      </NavLink>
      <NavLink to="#Projects" className={`text-lg font-bold transition-colors`}>
        Projects
      </NavLink>
      <NavLink to="#Contact" className={`text-lg font-bold transition-colors`}>
        Contact
      </NavLink>
    </>
  );
}
4;
function Navbar({ isMobile }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#141414]/70 py-3 md:px-8 px-4 select-none border-b-2 border-b-white/20 ">
      <div className="flex justify-between ">
        <nav>
          <NavLink to="#Hero" className="text-lg font-bold transition-colors">
            Portfolio.
          </NavLink>
        </nav>
        <div className="flex justify-even">
          {!isMobile && (
            <nav className="hidden sm:flex gap-7 justify-even">
              <NavLinks margin={0} />
            </nav>
          )}
          {isMobile && (
            <label>
              <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center lg:hidden sm:not-[hidden]:">
                <input
                  className="hidden peer"
                  type="checkbox"
                  checked={isOpen}
                  onChange={() => setIsOpen(!isOpen)}
                />
                <div className="w-[50%] h-0.5 bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:-rotate-45"></div>
                <div className="w-[50%] h-0.5 bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
                <div className="w-[50%] h-0.5 bg-white rounded-md transition-all duration-300 origin-left translate-y-[-0.45rem] peer-checked:rotate-45"></div>
              </div>
            </label>
          )}
        </div>
        <NavLink
          to="https://github.com/AseelFatayerji"
          className="text-xl font-bold"
        >
          <FontAwesomeIcon icon={faGithub} className="text-4xl" />
        </NavLink>
      </div>
      {isOpen && (
        <motion.div
          className="absolute justify-end px-3 overflow-hidden text-center right-0 sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <nav className="py-5  w-fit flex flex-col gap-3  items-end ">
            <NavLinks />
          </nav>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
