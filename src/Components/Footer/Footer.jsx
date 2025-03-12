import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-6 md:p-12 items-center shadow-xl shadow-slate-700 rounded-xl"
    >
      <div className="mb-6 md:mb-0 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold mb-2">Contact</h1>
        <h3 className="text-lg md:text-2xl font-normal mt-2">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl flex flex-col gap-4 md:gap-6">
        <li className="flex gap-2 items-center p-4 bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-sky-500/40 transition-all duration-300">
          <FiPhone size={24} />
          <a href="tel:+918367551341" className="hover:underline">
            +91 8367551341
          </a>
        </li>
        <li className="flex gap-2 items-center p-4 bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-sky-500/40 transition-all duration-300">
          <MdOutlineEmail size={24} />
          <a href="mailto:irfancodes1@gmail.com" className="hover:underline">
            irfancodes1@gmail.com
          </a>
        </li>
        <li className="flex gap-2 items-center p-4 bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-sky-500/40 transition-all duration-300">
          <CiLinkedin size={24} />
          <a
            href="https://www.linkedin.com/in/irfancodes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            www.linkedin.com/in/irfancodes
          </a>
        </li>
        <li className="flex gap-2 items-center p-4 bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-sky-500/40 transition-all duration-300">
          <FaGithub size={24} />
          <a
            href="https://github.com/Mohammedirfan18/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            https://github.com/Mohammedirfan18/
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;