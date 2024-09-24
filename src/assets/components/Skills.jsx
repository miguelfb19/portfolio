import React from "react";
import Skill from "./Skill";

function Skills() {
  const title = "Habilidades <SKILLS>";

  const softSkills = [
    "Aprendizaje Activo",
    "Trabajo en equipo",
    "Creatividad e iniciativa",
    "Capacidad de adaptación",
    "Proactividad",
    "Liderazgo",
    "Comunicación acertiva",
    "Resolución de problemas",
  ];
  return (
    <>
      <section className="skills">
        <h1 className="title">{title}</h1>
        <div className="hard-skills-animation-container">
          <ul className="hardSkills">
            <Skill skill="html" className="htmlIcon"></Skill>
            <Skill skill="css" className="cssIcon"></Skill>
            <Skill skill="javascript" className="javascriptIcon"></Skill>
            <Skill skill="typescript" className="typescriptIcon"></Skill>
            <Skill skill="figma" className="figmaIcon"></Skill>
            <Skill skill="bootstrap" className="bootstrapIcon"></Skill>
            <Skill skill="react" className="reactIcon"></Skill>
            <Skill skill="vue" className="vueIcon"></Skill>
            <Skill skill="angular" className="angularIcon"></Skill>
            <Skill skill="nodejs" className="nodejsIcon"></Skill>
            <Skill skill="mongodb" className="mongodbIcon"></Skill>
            <Skill skill="postman" className="postmanIcon"></Skill>
            <Skill skill="git" className="gitIcon"></Skill>
          </ul>
        </div>
        <div className="hard-skills-animation-container">
          <ul className="softSkills">
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Skills;
