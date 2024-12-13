import "./Projects.css";
import { projects } from "../../sources";
import { useState } from "react";
import ProjectsCard from "./ProjectsCard/ProjectsCard";

function Projects() {
  const [activeProjects, setActiveProjects] = useState(projects);
  return (
    <section id="projects">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text">projects</span>
          </h1>
        </div>
        <div className="projects-container">
          {activeProjects.map((project, index) => {
            return <ProjectsCard {...project} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
