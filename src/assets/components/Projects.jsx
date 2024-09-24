import React from "react";

function Projects() {
  return (
    <>
      <section className="portfolio">
        <h1 className="title">Proyectos</h1>
        <ul className="projects">
          <li className="card">
            <div className="projectsLink">
              <a
                className="bi bi-github"
                target="_blank"
                href="https://github.com/miguelfb19/vuecrud"
              ></a>
              <a
                className="bi bi-box-arrow-up-right"
                href="https://vuecrud-nine.vercel.app"
                target="_blank"
              ></a>
            </div>
            <img src="./assets/imagenes/projectCRUD.png" alt="CRUD Básico" />
            <div className="cardText">
              <h4>CRUD</h4>
              <p>
                Crear, leer, actualizar, eliminar usuarios usando localStorage
              </p>
              <hr />
              <p>Herramientas usadas:</p>
              <div className="projectsFigure">
                <figure className="vueIcon">
                  <img src="./assets/imagenes/logos/vue.svg" alt="vue" />
                </figure>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="projectsLink">
              <a
                className="bi bi-github"
                target="_blank"
                href="https://github.com/miguelfb19/blogVuejs"
              ></a>
              <a
                className="bi bi-box-arrow-up-right"
                href="https://blog-vuejs-alpha.vercel.app"
                target="_blank"
              ></a>
            </div>
            <img src="./assets/imagenes/projectVue.png" alt="Proyecto Vuejs" />
            <div className="cardText">
              <h4>BLOG VUEJS</h4>
              <p>
                Blog creado en el curso de frameworks, peticiones http, subida
                de imagenes, formularios y más.
              </p>
              <hr />
              <p>Herramientas usadas:</p>
              <div className="projectsFigure">
                <figure className="vueIcon">
                  <img src="./assets/imagenes/logos/vue.svg" alt="vue" />
                </figure>
                <figure className="mongodbIcon">
                  <img src="./assets/imagenes/logos/mongodb.svg" alt="vue" />
                </figure>
                <figure className="nodejsIcon">
                  <img src="./assets/imagenes/logos/nodejs.svg" alt="vue" />
                </figure>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="projectsLink">
              <a
                className="bi bi-github"
                target="_blank"
                href="https://github.com/miguelfb19/blog-angular"
              ></a>
              <a
                className="bi bi-box-arrow-up-right"
                href="https://blog-angular-sigma.vercel.app/"
                target="_blank"
              ></a>
            </div>
            <img
              src="./assets/imagenes/projectAngular.png"
              alt="Proyecto Angular"
            />
            <div className="cardText">
              <h4>BLOG ANGULAR</h4>
              <p>
                Blog creado en el curso de frameworks, peticiones http, subida
                de imagenes, formularios y más.
              </p>
              <hr />
              <p>Herramientas usadas:</p>
              <div className="projectsFigure">
                <figure className="angularIcon">
                  <img src="./assets/imagenes/logos/angular.svg" alt="vue" />
                </figure>
                <figure className="mongodbIcon">
                  <img src="./assets/imagenes/logos/mongodb.svg" alt="vue" />
                </figure>
                <figure className="nodejsIcon">
                  <img src="./assets/imagenes/logos/nodejs.svg" alt="vue" />
                </figure>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="projectsLink">
              <a
                className="bi bi-github"
                target="_blank"
                href="https://github.com/miguelfb19/blog-react"
              ></a>
              <a
                className="bi bi-box-arrow-up-right"
                href="https://blog-react-kohl.vercel.app/"
                target="_blank"
              ></a>
            </div>
            <img
              src="./assets/imagenes/projectReact.png"
              alt="Proyecto React"
            />
            <div className="cardText">
              <h4>BLOG REACT</h4>
              <p>
                Blog creado en el curso de frameworks, peticiones http, subida
                de imagenes, formularios y más.
              </p>
              <hr />
              <p>Herramientas usadas:</p>
              <div className="projectsFigure">
                <figure className="reactIcon">
                  <img src="./assets/imagenes/logos/react.svg" alt="vue" />
                </figure>
                <figure className="mongodbIcon">
                  <img src="./assets/imagenes/logos/mongodb.svg" alt="vue" />
                </figure>
                <figure className="nodejsIcon">
                  <img src="./assets/imagenes/logos/nodejs.svg" alt="vue" />
                </figure>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Projects;
