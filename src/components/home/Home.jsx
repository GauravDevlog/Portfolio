import React from "react";
import "./Home.css"
function Home() {
  return (
    <>
    <div className="home_design">
      <div className="profile">
        <img src="../../public/img/profile.png" alt="Profile Img" />
      </div>
      <div className="heading">I do code and make content about it!</div>
      <div className="para">
        I am a seasoned full-stack software engineer with over 8 years of
        professional experience, specializing in backend development. My
        expertise lies in crafting robust and scalable SaaS-based architectures
        on the Amazon AWS platform.
      </div>
      <div className="btn"></div>
    </div>
    </>
  );
}

export default Home;
