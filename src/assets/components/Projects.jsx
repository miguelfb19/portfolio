import React from "react";
import Project from "./Project";
import picCRUD from "../imagenes/projectCRUD.png";
import picBlogVue from "../imagenes/projectVue.png";
import picBlogReact from "../imagenes/projectReact.png";
import picBlogAngular from "../imagenes/projectAngular.png";
import picExpenseControl from "../imagenes/control_de_gastos.png";

function Projects() {
  const projects = [
    {
      img: picCRUD,
      title: "CRUD",
      content: "Crear, leer, actualizar, eliminar usuarios usando localStorage",
      tools: ["vue"],
      link: "https://vuecrud-nine.vercel.app",
      repository: "https://github.com/miguelfb19/vuecrud",
    },
    {
      img: picBlogVue,
      title: "BLOG VUEJS",
      content:
        "Blog creado en el curso de frameworks, peticiones http, subida de imagenes, formularios y más.",
      tools: ["vue", "mongodb", "nodejs"],
      link: "https://blog-vuejs-alpha.vercel.app",
      repository: "https://github.com/miguelfb19/blogVuejs",
    },
    {
      img: picBlogReact,
      title: "BLOG REACT",
      content:
        "Blog creado en el curso de frameworks, peticiones http, subida de imagenes, formularios y más.",
      tools: ["react", "mongodb", "nodejs"],
      link: "https://blog-react-kohl.vercel.app/",
      repository: "https://github.com/miguelfb19/blog-react",
    },
    {
      img: picBlogAngular,
      title: "BLOG ANGULAR",
      content:
        "Blog creado en el curso de frameworks, peticiones http, subida de imagenes, formularios y más.",
      tools: ["angular", "mongodb", "nodejs"],
      link: "https://blog-angular-sigma.vercel.app/",
      repository: "https://github.com/miguelfb19/blog-angular",
    },
    {
      img: picExpenseControl,
      title: 'CONTROL DE GASTOS',
      content: 'Aplicación para control de gastos con JavaScript Nativo, crear, modificar y eliminar gastos. Muestra alertas con funcion personalizable.',
      tools: ['javascript' , 'html', 'css'],
      link: 'https://miguelfb19.github.io/expenseControl/',
      repository: 'https://github.com/miguelfb19/expenseControl'
    }
  ];
  return (
    <>
      <section className="portfolio">
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
