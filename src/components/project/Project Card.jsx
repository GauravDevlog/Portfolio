import React from "react";
import "./ProjectCard.css"
function ProjectCard(props){
    return(
        <>
            <div className="card">
                <a href={props.link}>
                <img src={props.url} 
                alt={props.title} />
                <div className="sub_card">
                    <h3>{props.title}</h3>
                    <button >→</button>
                </div>
                </a>
            </div>
        </>
    );
}

export default ProjectCard;