import React from "react";
import ProjectCard from "./Project Card";
import "./Projects.css";

// 1. Add your projects here
const projectList = [
  {
    image: "img/spotify.png",
    title: "Spotify Clone",
    link: "https://github.com/GauravDevlog/Spotify-Clone",
  },
  {
    title: "Job Portal",
    image: "img/job.png",
    link: "https://github.com/GauravDevlog/Job-Portal",
  },
  {
    title: "Portfolio Website",
    image: "img/porfolio.png",
    link: "https://github.com/GauravDevlog/Portfolio",
  },
  {
    title: "Weather App",
    image: "img/weather.png",
    link: "https://github.com/GauravDevlog/Weather-APP",
  },
  // You can easily add more objects here later!
];

function Projects() {
  return (
    <section id="projects" className="projects-section
    
    rounded-xl border
    border-[#141414] hover:border-blue-500 hover:bg-[#1a1a1a] transition-all duration-300 transform hover:-translate-y-2
    ">
      {/* Section Heading */}
      <h2 className="section-title">
        My <span className="highlight text-blue-500">Projects</span>
      </h2>

      <p className="section-subtitle">
        Here are a few things I've built using React, PHP, and C++.
      </p>

      {/* Grid Container */}
      <div className="projects-grid">
        {projectList.map((item, index) => (
          <ProjectCard
            key={index} // React needs a unique key for lists
            title={item.title}
            url={item.image}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
