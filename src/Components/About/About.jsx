import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className="bg-black text-white py-16 px-6 md:px-20 max-w-screen-xl mx-auto"
    >
      
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-8 text-cyan-500">
        About Me
      </h2>

      
      <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-center mb-10 max-w-3xl mx-auto">
        Hi, I'm <span className="text-cyan-500 font-semibold">Mohammed Irfan</span>, a passionate
        <span className="text-cyan-500 font-semibold"> full-stack developer</span> who thrives on solving
        complex problems and creating innovative solutions. With expertise in
        <span className="text-cyan-500 font-semibold"> Java, Spring Boot, and ReactJS</span>, I deliver
        robust backend systems and intuitive user interfaces.
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-500 mb-4">Frontend Development</h3>
          <p className="text-lg md:text-xl text-gray-300">
            Creating responsive, visually appealing applications using ReactJS, HTML, CSS, and JavaScript.
          </p>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-500 mb-4">Backend Development</h3>
          <p className="text-lg md:text-xl text-gray-300">
            Building secure and scalable backend services with Spring Boot, Node.js, and Python.
          </p>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-500 mb-4">Database Design</h3>
          <p className="text-lg md:text-xl text-gray-300">
            Crafting efficient database solutions with MySQL for optimized data management.
          </p>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-500 mb-4">Automation</h3>
          <p className="text-lg md:text-xl text-gray-300">
            Streamlining workflows and automating data processes using Python and various libraries.
          </p>
        </div>
      </div>

      
      <h3 className="text-2xl md:text-3xl font-semibold text-center mt-16 mb-8 text-cyan-500">
        Notable Projects
      </h3>
      <div className="space-y-8 max-w-4xl mx-auto">
        <div>
          <p className="text-lg md:text-xl text-gray-300">
            <a
              href="https://thought-lens.mohammedirfan.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 font-semibold hover:underline"
            >
              ThoughtLens:
            </a>{" "}
            A blogging platform built with ReactJS to share insights and stories.
          </p>
        </div>

        <div>
          <p className="text-lg md:text-xl text-gray-300">
            <a
              href="https://currency-converter.mohammedirfan.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 font-semibold hover:underline"
            >
              Currency Converter:
            </a>{" "}
            A real-time exchange tool with API integration for seamless user experience.
          </p>
        </div>

        <div>
          <p className="text-lg md:text-xl text-gray-300">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 font-semibold hover:underline"
            >
              Property Share Calculator:
            </a>{" "}
            A web application for accurate Sharia-based property calculations.
          </p>
        </div>

        <div>
          <p className="text-lg md:text-xl text-gray-300">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 font-semibold hover:underline"
            >
              Excel Data Processor:
            </a>{" "}
            A tool to efficiently process Excel files and store data in MySQL with data validation.
          </p>
        </div>
      </div>

      
      <h3 className="text-2xl md:text-3xl font-semibold text-center mt-16 mb-8 text-cyan-500">
        Beyond Coding
      </h3>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto">
        I'm also a dedicated <span className="text-cyan-500 font-semibold">cricket player</span>. Cricket has
        taught me the importance of teamwork, discipline, and adaptability—qualities I bring to my coding career.
      </p>
    </div>
  );
};

export default About;