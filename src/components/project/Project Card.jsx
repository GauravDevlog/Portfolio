// import React from "react";
// import "./ProjectCard.css"
// function ProjectCard(props){
//     return(
//         <>
//             <div className="card">
//                 <a href={props.link}>
//                 <img src={props.url} 
//                 alt={props.title} />
//                 <div className="sub_card">
//                     <h3>{props.title}</h3>
//                     <button >→</button>
//                 </div>
//                 </a>
//             </div>
//         </>
//     );
// }

// export default ProjectCard;
import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {/* Image Container */}
        <div className="image-container">
          <img src={props.url} alt={props.title} className="project-image" />
        </div>

        {/* Text Overlay / Content */}
        <div className="sub_card">
          <h3>{props.title}</h3>
          <button className="arrow-btn">→</button>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;