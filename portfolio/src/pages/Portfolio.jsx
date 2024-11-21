import React from "react";
import Project from "../components/Project.jsx";
import "../styles/portfolio.css";
const projects = [
    { title: "Weather Dashboard", image: "src/assets/weather app 09-servers-and-apis-homework-demo.png", url:"https://weather-dashboard-dzpc.onrender.com" },
    { title: "Employee Tracker", image: "src/assets/dogepic.webp", url:"" },
    { title: "README Generator", image: "src/assets/dogepic.webp", url:"" },
    { title: "Vacation Calculator", image: "src/assets/dogepic.webp", url:"" },
    { title: "Vehicle Builder", image: "src/assets/dogepic.webp", url:"" },
    { title: "React Portfolio", image: "src/assets/dogepic.webp", url:"" },
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
