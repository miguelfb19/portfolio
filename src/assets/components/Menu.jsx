import React from "react";
import Icons from "./Icons";

function Menu() {

  const scroll = (target, btn)=>{
    btn.addEventListener('click', ()=>{
      target.scrollIntoView({block: 'start', behavior:'smooth', inline: 'nearest'})
    })
  }
  
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
