import Project from "../Project";
import {projects} from '../../models'

function Projects({ bgColor = "" }) {
  
  return (
    <>
      <section className={`portfolio ${bgColor}`} id="portfolio">
        <h1 className="title">Proyectos</h1>
        <ul className="projects">
          {projects.map((project) => {
            return (
              <Project
                img={project.img}
                title={project.title}
                content={project.content}
                tools={project.tools}
                key={project.title}
                link={project.link}
                repository={project.repository}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Projects;
