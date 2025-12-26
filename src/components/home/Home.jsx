import React from "react";
import {Link} from "react-router-dom";
import ProjectCard from "../project/Project Card";
import "./Home.css";
import Skills from "../Skills";

import Experience from "../Experience";
import Contact from "../contact/Contact";

function Home() {
  return (
    <>
      <div className="home_design">
        <div className="profile1">
          <img
            src="../../public/img/profile1.png"
            alt="Profile Img"
            className="profile"
          />
          <h1
          className="text-center text-4xl font-bold"
          >Gaurav <span className="text-blue-500">Mishra</span> </h1>
        </div>
        <div className="heading text-4xl font-bold mb-12">
          I build <span className="text-blue-500">web applications</span> <br />
          and <span className="text-blue-500">solve problems</span>
        </div>
        <div className="para">
          "I am a passionate developer with a strong logical foundation in Data
          Structures & Algorithms using C and C++. I apply this problem-solving
          mindset to build responsive front-ends with React and robust back-end
          systems using PHP. Currently seeking opportunities to apply my skills
          and grow as a software engineer."
        </div>
        <div className="btn">
          <button className="btn-get-in-touch"><a href="#contact">Get In Touch</a></button>
          <button className="btn-download-cv"><a href="https://drive.google.com/file/d/1R-2JJGi9k1AmOHup-Lh1fklDxOmdn0eo/view?usp=sharing">Download CV</a></button>
        </div>
      </div>
      <div>
        <Skills />
      </div>

      <section
      className="
       rounded-xl border
    border-[#141414] hover:border-blue-500 hover:bg-[#1a1a1a] transition-all duration-300 transform hover:-translate-y-2
      "
      >

      <div className="project_cards ">
        <h3
        className="text-4xl font-bold mb-40"
        >Pro<span className="text-blue-500">jects</span> </h3>
        <div className="project_card">
          <ProjectCard
            url="../../public/img/spotify.png"
            title="Spotify Clone"
            link="https://github.com/GauravDevlog/Spotify-Clone"
            />
          <ProjectCard
            url="../../public/img/restaurant.png"
            title="Restaurant"
            link="https://github.com/GauravDevlog/Restaurant"
            />
        </div>
        <Link to="/projects">
        <button 
        className="more_projects pointer-coarse:"
        >More</button>
        </Link>
      </div>
            </section>
      <Experience />
      {/* <Contact/> */}
    </>
  );
}

export default Home;
