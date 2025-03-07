import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="p-3 rounded-md bg-white fixed w-full z-20 top-0 start-0 border-b ">
      <nav className="flex text-lg justify-between">
        <div>
          <NavLink to="/" className="">
            Portfolio.
          </NavLink>
        </div>
        <div className="flex gap-7 justify-even">
          <NavLink to="/About" className="">
            About
          </NavLink>
          <NavLink to="/Services" className="">
            Services
          </NavLink>
          <NavLink to="/Gallery" className="">
            Gallery
          </NavLink>
          <NavLink to="/Projects" className="">
            Projects
          </NavLink>
          <NavLink to="/Contact" className="">
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
