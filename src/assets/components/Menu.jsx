import React from "react";
import Icons from "./Icons";

function Menu() {
  return (
    <>
      <nav className="mainMenu">
        <section className="menuLeft">
          <Icons iconName='code'></Icons>
        </section>
        <section className="menuRight">
          <a className="menuSkills" href="#skills">
            Habilidades
          </a>
          <a className="menuAboutMe" href="#aboutMe">
            Sobre mí
          </a>
          <a className="menuProjects" href="#projects">
            Proyectos
          </a>
          <a className="menuEducation" href="#education">
            Formación
          </a>
        </section>
      </nav>
    </>
  );
}

export default Menu;
