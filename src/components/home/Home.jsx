import React from "react";
import ProjectCard from "../project/Project Card"
import "./Home.css"
import Skills from "../Skills";
function Home() {
  return (
    <>
    <div className="home_design">
      <div className="profile1">
        <img src="../../public/img/profile1.png" alt="Profile Img" className="profile"/>
      </div>
      <div className="heading">I build web applications and solve problems</div>
      <div className="para">
        "I am a passionate developer with a strong logical foundation in Data Structures & Algorithms using C and C++. I apply this problem-solving mindset to build responsive front-ends with React and robust back-end systems using PHP. Currently seeking opportunities to apply my skills and grow as a software engineer."
      </div>
      <div className="btn">
        <button className="btn-get-in-touch">Get In Touch</button>
        <button className="btn-download-cv">Download CV</button>
      </div>
    </div>
    <div>
      <Skills/>
    </div>
    <div className="project_cards">
      <h3>Projects</h3>
      <div className="project_card">
        <ProjectCard 
      url="../../public/img/profile1.png"
      title = "Restaurant Website"
      link="https://www.freepik.com/free-vector/realistic-credit-card-design_19058367.htm"
      />
      <ProjectCard 
      url="../../public/img/profile1.png"
      title = "Restaurant Website"
      link="https://www.freepik.com/free-vector/realistic-credit-card-design_19058367.htm"
      />
      </div>
    </div>
    </>
  );
}

export default Home;
