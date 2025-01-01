import React from "react";

const ProjectCard = ({ title, main, img, demoLink, sourceLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] bg-opacity-50 shadow-xl shadow-slate-900 rounded-2xl hover:shadow-2xl hover:shadow-[#465697]/40 transition-all duration-300">
      <img className="p-4 rounded-lg shadow-md shadow-slate-600" src={img} alt="title" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white mt-4">{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 text-slate-300">{main}</p>
      
      <div className="flex justify-center gap-4 mt-4">
        
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] shadow-md shadow-[#465697]/30 hover:shadow-[#465697]/50">
            Demo
          </button>
        </a>

        
        <a href={sourceLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] shadow-md shadow-[#465697]/30 hover:shadow-[#465697]/50">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;