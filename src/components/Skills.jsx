import Skill from "./Skill";
import { hardSkills, softSkills } from "../models";

function Skills() {
  const title = "Habilidades <SKILLS>";

  return (
    <>
      <section className="skills" id="skills">
        <h1 className="title">{title}</h1>
        <div className="hard-skills-animation-container">
          <ul className="hardSkills">
            {hardSkills.map((skill, index) => (
              <Skill key={index} skill={skill} className={`${skill}Icon`}/>
            ))}
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
