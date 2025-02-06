import React from "react";
import Project from "../components/Project.jsx";
import "../styles/portfolio.css";
const projects = [
    { title: "Weather Dashboard", image: "src/assets/weather app 09-servers-and-apis-homework-demo.png", url:"https://weather-dashboard-dzpc.onrender.com" },
    { title: "Employee Tracker", image: "src/assets/Employee tracker pic.png", url:"https://github.com/stevens38/Employee-Tracker" },
    { title: "Readers-Digress", image: "src/assets/Readers-Digress.png", url:"https://readers-digress.onrender.com" },
    { title: "Vacation Calculator", image: "src/assets/Vacation planner Video September 21, 2024 6_23 PM.gif", url:"https://github.com/HarrisCH258/Vacation-Budget-Calculator" },
    { title: "Social Network API", image: "src/assets/social-network-api.png", url:"https://github.com/stevens38/My-Social-Network-API" },
    { title: "React Portfolio", image: "src/assets/dogepic.webp", url:"https://github.com/stevens38/Jonathan-Stevens-Resume" },
    // Canadate Search   src/assets/Candidate Search appScreenshot 2024-11-20 193641.png   https://candidate-search-application-3f52.onrender.com
];
export default function Portfolio() {
    return (
        <div class='port'>
            <h1>Portfolio</h1>
            <div className="portfolio-container">
                {projects.map((project, index) => (
                    <Project key={index} title={project.title} image={project.image} url={project.url} />
                ))}
            </div>
        </div>
    );
}

