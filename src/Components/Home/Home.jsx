import React from "react";
import TextChange from "../TextChange";
import ContactForm from "../ContactForm";
import avatarImg from "../../assets/irf.jpg";
import resumeFile from "../../assets/Irfan_resume.pdf";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center px-8 lg:px-24 py-12  gap-10">
      <div className="md:w-2/4 flex flex-col gap-8 md:gap-10">

        <h1 className="text-3xl lg:text-5xl font-extrabold leading-snug tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          <TextChange />
        </h1>

        <p className="text-base lg:text-lg leading-relaxed tracking-wide text-gray-300">
          A software engineer with expertise in full-stack development and a passion for crafting efficient and user-friendly applications. I thrive on solving complex problems and delivering impactful solutions.
        </p>

        <div className="w-full md:w-3/4">
          <span className="text-xl lg:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Contact Me:
          </span>
          <ContactForm />
        </div>
      </div>


      <div className="flex flex-col justify-center items-center md:items-start relative md:w-2/4">

        <img
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full border-4 border-cyan-300 shadow-lg animate-floating 
      transition-transform duration-500 ease-in-out hover:scale-110"
          src={avatarImg}
          alt="Avatar"
        />


        <a
          href={resumeFile}
          download="Mohammed_Irfan_Resume.pdf"
          className="mt-6  custom:ml-12 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 text-center"
        >
          Download Resume
        </a>
      </div>
    </div>

  );
};

export default Home;