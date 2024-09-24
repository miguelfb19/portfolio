import React from "react";
import presentationLetter from "../imagenes/certificados/cartaPresentacion.pdf";

function AboutMe() {
  const info = {
    paragraph:
      "Soy un desarrollador de FrontEnd, técnico en sistemas y computación. Me apasiona desarrollar mis habilidades y aprendizajes. He realizado diferentes cursos y proyectos con tecnologías como React, VueJs, NodeJs y demás herramientas de Front, también me desenvuelvo en herramientas propias del desarrollo de software como bases de datos (MongoDB), postman, Bootstrap, Git, Github y demás herramientas web para desarrolladores. Soy una persona muy proactiva y me gusta mucho aprender y desarrollar cada vez más mis habilidades, no me molestan los retos y siempre busco realizar mi trabajo de la mejor manera con buenas prácticas, responsive design, código limpio y más.",
    title: "Sobre mí",
  };
  return (
    <>
      <section className="aboutMe">
        <h1 className="title">{info.title}</h1>
        <p>{info.paragraph}</p>
        <a
          className="btn2"
          href={presentationLetter}
          target="_blank"
          rel="noreferrer"
        >
          Presentación
        </a>
      </section>
    </>
  );
}

export default AboutMe;
