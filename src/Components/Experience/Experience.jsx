import React from "react";
import { FaPython } from "react-icons/fa";


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 text-white">
      
      <h1 className="text-2xl md:text-4xl font-bold mb-10 text-center md:text-left">
        Experience
      </h1>

      <div className="flex flex-wrap items-center justify-around gap-10">

        
        <div className="flex flex-col gap-6 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black bg-opacity-50 shadow-xl shadow-slate-800 rounded-lg p-6 md:w-3/5 hover:shadow-2xl hover:shadow-sky-500/40 transition-all duration-300">
          <div className="flex items-start gap-6">
            
            <span className="p-4 bg-zinc-950 rounded-xl shadow-lg shadow-slate-700">
              <FaPython color="#F24E1E" size={40} />
            </span>

            
            <div className="text-white">
              <h2 className="text-lg md:text-2xl font-semibold">
                Software Trainee, OHRC
              </h2>
              <p className="text-sm md:text-md font-light mb-4">
                October 2024 - Present
              </p>
              <ul className="text-sm md:text-md font-light list-disc list-inside">
                <li>
                  Assisted the organization in automating workflows and enhancing efficiency through software solutions.
                </li>
                <li>
                  Developed and deployed features to improve internal applications and processes.
                </li>
                <li>
                  Collaborated with senior developers to analyze, design, and implement software solutions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;