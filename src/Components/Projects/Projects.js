import "./Projects.css";
import { projects } from "../../sources";
import { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import ProjectNavigation from "./ProjectNavigation/ProjectNavigation";

function  Projects() {
  const [activeProjects, setActiveProjects] = useState(projects);
  const [load,setLoad] = useState(false)

  useEffect(
    ()=>{
      setLoad(true)
      setTimeout(() => {
        setLoad(false)
      }, 600);
    }, [activeProjects]
  )
  const getTabs = () => {
    const tabs = ["All"];
    projects.map((item) => {
      if (!tabs.includes(item.category)) {
        tabs.push(item.category);
      }
    });
    return tabs;
  };
  const setProjects = (value)=>{
    if(value==='All'){
      return setActiveProjects(projects)
    }
    const new_projects = projects.filter(item => item.category===value)
    setActiveProjects(new_projects)
  }
  return (
    <section id="projects" data-aos='fade-right'>
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text">projects</span>
          </h1>
        </div>
        <ProjectNavigation tabs={getTabs()} onChange={setProjects} />
        <div className="projects-container">
          {activeProjects.map((project, index) => {
            return <ProjectsCard {...project} key={index} className={load? 'zoom': ''}/>;
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
