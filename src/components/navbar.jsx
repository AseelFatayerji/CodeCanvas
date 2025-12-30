import { useState } from "react";
import { motion } from "framer-motion";
import { HashLink as NavLink } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";

function NavLinks() {
  return (
    <>
      <NavLink to="#Hero" className={`text-xl font-bold transition-colors `}>
        Home
      </NavLink>
      <NavLink to="#About" className={`text-xl font-bold transition-colors`}>
        About
      </NavLink>
      <NavLink to="#Services" className={`text-xl font-bold transition-colors`}>
        Services
      </NavLink>
      <NavLink to="#Projects" className={`text-xl font-bold transition-colors`}>
        Projects
      </NavLink>
      <NavLink to="#Contact" className={`text-xl font-bold transition-colors`}>
        Contact
      </NavLink>
    </>
  );
}
function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="py-3 px-8  bg-white/20 backdrop-blur-xs rounded-b-xl fixed w-full z-20 index-x-0 select-none">
      <div className="flex justify-between ">
        <nav>
          <NavLink to="#Hero" className="text-xl font-bold transition-colors">
            Portfolio.
          </NavLink>
        </nav>
        <div className="flex justify-even">
          {!isMobile && (
            <nav className="hidden sm:flex gap-7 justify-even">
              <NavLinks margin={0} />
            </nav>
          )}
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
              <div className="w-[50%] h-0.5 bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-45"></div>
            </div>
          </label>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="absolute justify-end px-3 overflow-hidden text-center right-0 sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5 w-fit flex flex-col gap-3  items-end ">
            <NavLinks />
          </nav>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
