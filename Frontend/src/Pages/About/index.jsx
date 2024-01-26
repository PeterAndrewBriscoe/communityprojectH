import React from "react";

import './About.css'

function About(){ 

    return <>
        <div className="about-container">
            <div className="about-img-block">
                <img src="https://picsum.photos/500/120" alt="img"/>
            </div>
            <div>
                <h1>About</h1>
            </div>
        </div>
        <div className="about-container">
            <div className="about-text">
                <h2>Purpose of the App</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="about-img-block">
                <img src="https://picsum.photos/250/250" alt="img"/>
            </div>
        </div>
        <div className="about-container">
            <div className="about-img-block">
                <img src="https://picsum.photos/250/250" alt="img"/>
            </div>
            <div className="about-text">
                <h2>Devotion to sustainability</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            </div>
        </div>
    </>
}

export default About;