import React from "react";
import "./Header.css"
export default function Header(){

    return(
        <>
        <div className="header">
            <div className="sign">
                {/* <img src="../../public/img/gaurav.png" alt="" /> */}
                Gaurav Mishra
            </div>
            <ul className="header-list">
                <li>Home</li>
                <li>Projects</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </div>
        </>
    );
};