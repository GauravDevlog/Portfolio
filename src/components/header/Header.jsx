import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
export default function Header(){

    return(
        <>
        <div className="header">
            <div className="sign">
                Gaurav Mishra
            </div>
            <ul className="header-list">
                <li>
                    <Link to="/">
                    Home
                    </Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        </>
    );
};