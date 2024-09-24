import React from "react";

function Skills() {
  const title = "Habilidades <SKILLS>";
  return (
    <>
      <section className="skills">
        <h1 className="title">{title}</h1>
        <div className="hard-skills-animation-container">
          <ul className="hardSkills">
            <li>
              <figure className="htmlIcon">
                <figcaption>Html</figcaption>
                <img src="./assets/imagenes/logos/html.svg" alt="html" />
              </figure>
            </li>
            <li>
              <figure className="cssIcon">
                <figcaption>Css</figcaption>
                <img src="./assets/imagenes/logos/css.svg" alt="css" />
              </figure>
            </li>
            <li>
              <figure className="javascriptIcon">
                <figcaption>JavaScript</figcaption>
                <img
                  src="./assets/imagenes/logos/javascript.svg"
                  alt="javascript"
                />
              </figure>
            </li>
            <li>
              <figure className="typescriptIcon">
                <figcaption>TypeScript</figcaption>
                <img
                  src="./assets/imagenes/logos/typescript.svg"
                  alt="typescript"
                />
              </figure>
            </li>
            <li>
              <figure className="figmaIcon">
                <figcaption>Figma</figcaption>
                <img src="./assets/imagenes/logos/figma.svg" alt="figma" />
              </figure>
            </li>
            <li>
              <figure className="bootstrapIcon">
                <figcaption>Bootstrap</figcaption>
                <img
                  src="./assets/imagenes/logos/bootstrap.svg"
                  alt="bootstrap"
                />
              </figure>
            </li>
            <li>
              <figure className="reactIcon">
                <figcaption>React</figcaption>
                <img src="./assets/imagenes/logos/react.svg" alt="React" />
              </figure>
            </li>
            <li>
              <figure className="vueIcon">
                <figcaption>VueJs</figcaption>
                <img src="./assets/imagenes/logos/vue.svg" alt="vue" />
              </figure>
            </li>
            <li>
              <figure className="angularIcon">
                <figcaption>Angular</figcaption>
                <img src="./assets/imagenes/logos/angular.svg" alt="angular" />
              </figure>
            </li>
            <li>
              <figure className="nodejsIcon">
                <figcaption>NodeJs</figcaption>
                <img src="./assets/imagenes/logos/nodejs.svg" alt="nodejs" />
              </figure>
            </li>
            <li>
              <figure className="mongodbIcon">
                <figcaption>MondoDB</figcaption>
                <img src="./assets/imagenes/logos/mongodb.svg" alt="mongodb" />
              </figure>
            </li>
            <li>
              <figure className="postmanIcon">
                <figcaption>Postman</figcaption>
                <img src="./assets/imagenes/logos/postman.svg" alt="postman" />
              </figure>
            </li>
            <li>
              <figure className="gitIcon">
                <figcaption>Git</figcaption>
                <img src="./assets/imagenes/logos/git.svg" alt="git" />
              </figure>
            </li>
          </ul>
        </div>
        <div className="hard-skills-animation-container">
          <ul className="softSkills">
            <li>Liderazgo</li>
            <li>Aprendizaje Activo</li>
            <li>Trabajo en equipo</li>
            <li>Creatividad e iniciativa</li>
            <li>Capacidad de adaptación</li>
            <li>Proactividad</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Skills;
