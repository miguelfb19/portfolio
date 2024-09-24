import React from "react";
import Icons from "./Icons";

function Menu() {

  const scrollTo = (sectionClass) => {
    const section = document.querySelector(sectionClass);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
    }
  };
  
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
          <a className="menuContact" href="#skills">
            Contacto
          </a>
        </section>
      </nav>
    </>
  );
}

export default Menu;
