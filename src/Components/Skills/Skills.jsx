import React from 'react';
import { FaJava, FaJs, FaReact, FaHtml5, FaCss3,FaPython } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import { GiArtificialHive } from 'react-icons/gi'; 

const Skills = () => {
  const skills = [
    { icon: <FaJava color="#f7df1e" size={30} />, name: 'Java' },
    {icon : <FaPython color="#f7df1e" size={30} />, name: 'Python'},
    { icon: <FaJs color="#f7df1e" size={30} />, name: 'JavaScript' },
    { icon: <FaReact color="#f7df1e" size={30} />, name: 'ReactJS' },
    { icon: <GiArtificialHive color="#f7df1e" size={30} />, name: 'Data Structures' },
    { icon: <GiArtificialHive color="#f7df1e" size={30} />, name: 'Algorithms' },
    { icon: <FaHtml5 color="#f7df1e" size={30} />, name: 'HTML' },
    { icon: <FaCss3 color="#f7df1e" size={30} />, name: 'CSS' },
    { icon: <SiSpringboot color="#f7df1e" size={30} />, name: 'Spring Boot' },
    { icon: <SiMysql color="#f7df1e" size={30} />, name: 'MySQL' },
  ];

  return (
    <div id="Skills" className="p-10 md:p-24 text-white">
      
      <h1 className="text-2xl md:text-4xl font-bold mb-8">Skills</h1>
      
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 justify-center items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-3 bg-black bg-opacity-30 border border-black rounded-2xl text-white 
            shadow-xl shadow-black/50 hover:shadow-lg hover:shadow-sky-500/30 
            transition-all duration-300 ease-in-out hover:scale-105 hover:bg-black hover:bg-opacity-50"
          >
            
            <div className="p-3 bg-black bg-opacity-0 rounded-full shadow-md shadow-black">
              {skill.icon}
            </div>
            
           
            <span className="text-lg font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;