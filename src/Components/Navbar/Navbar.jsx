import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-around items-center text-white px-6 md:px-20 py-4 shadow-lg bg-black bg-opacity-40 sticky top-0 z-50">
      
      <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        Irfan's Portfolio
      </span>

      
      <ul
        className={`${
          menu ? "flex flex-col" : "hidden"
        } md:flex md:flex-row gap-6 font-semibold transition-all duration-300 bg-black md:bg-transparent bg-opacity-30 p-4 md:p-0 rounded-xl shadow-inner md:shadow-none`}
      >
        <li>
          <a
            href="#Home"
            className="text-md md:text-lg transition-all duration-300 p-1 hover:text-cyan-500"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#About"
            className="text-md md:text-lg transition-all duration-300 p-1 hover:text-cyan-500"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Skills"
            className="text-md md:text-lg transition-all duration-300 p-1 hover:text-cyan-500"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className="text-md md:text-lg transition-all duration-300 p-1 hover:text-cyan-500"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Experience"
            className="text-md md:text-lg transition-all duration-300 p-1 hover:text-cyan-500"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#Footer"
            className="text-md md:text-lg transition-all duration-300 p-1 hover:text-cyan-500"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <button
        onClick={() => setMenu(!menu)}
        className="md:hidden p-2 rounded-full shadow-md bg-black bg-opacity-30 focus:outline-none hover:bg-opacity-50 transition-all duration-300"
      >
        {menu ? (
          <RiCloseLine size={30} className="text-cyan-500" />
        ) : (
          <RiMenu2Line size={30} className="text-cyan-500" />
        )}
      </button>
    </nav>
  );
};





export default Navbar;
