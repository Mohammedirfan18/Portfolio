import React from "react";
import ProjectCard from "./ProjectCard";
import currencyConverterImg from '../../assets/projects/currencyconverter.png';
import miBlogUiImg from '../../assets/projects/miblogui.png';
import thoughtLensImg from '../../assets/projects/thoughtlens.png';
import todoImg from '../../assets/projects/todo.png';

const Projects = () => {
  return (
    <div id="Projects" className=" text-white p-10 md:p-24">
      
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">My Projects</h1>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          title="ThoughtLens"
          main="This is a blogging website created in ReactJS, TinyMCE, Redux Toolkit, and Appwrite. ThoughtLens offers users a seamless experience to explore and contribute various thoughts while expressing themselves effectively. Whether you're looking to read something insightful or share your own ideas, ThoughtLens is the place for you!"
          img={thoughtLensImg}
          demoLink="https://thought-lens.mohammedirfan.in/"
          sourceLink="https://github.com/Mohammedirfan18/ThoughtLens"
        />
        <ProjectCard
          title="BlogUI Clone"
          main="A BlogUI clone built using HTML, CSS, and JavaScript, replicating a modern blog's design and functionality. It features a clean, responsive layout for displaying articles, focusing on custom styling and efficient DOM manipulation for dynamic content presentation."
          img={miBlogUiImg}
          demoLink="https://miblogs.mohammedirfan.in/"
          sourceLink="https://github.com/Mohammedirfan18/MiBlogUI"
        />
        <ProjectCard
          title="Currency Converter"
          main="A dynamic currency converter built using ReactJS, featuring real-time exchange rates through API integration. It offers an intuitive interface for selecting currencies and inputting amounts, demonstrating expertise in API handling and responsive design."
          img={currencyConverterImg}
          demoLink="https://currency-converter.mohammedirfan.in/"
          sourceLink="https://github.com/Mohammedirfan18/CurrencyConverter"
        />
        <ProjectCard
          title="To-Do App"
          main="A feature-rich To-Do application developed using ReactJS and Redux Toolkit. It allows users to add, edit, delete, and mark tasks as complete. The app demonstrates effective state management, a seamless user experience, and responsive design."
          img={todoImg}
          demoLink="https://todo.mohammedirfan.in/"
          sourceLink="https://github.com/Mohammedirfan18/TodoRTK"
        />
      </div>
    </div>
  );
};

export default Projects;