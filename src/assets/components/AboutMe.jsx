import React from "react";

function AboutMe() {
  return (
    <>
      <section className="aboutMe">
        <h1 className="title">Sobre mí</h1>
        <p>
          Soy un desarrollador de FrontEnd, técnico en sistemas y computación.
          Me apasiona desarrollar mis habilidades y aprendizajes. He realizado
          diferentes cursos y proyectos con tecnologías como React, VueJs,
          NodeJs y demás herramientas de Front, también me desenvuelvo en
          herramientas propias del desarrollo de software como bases de datos
          (MongoDB), postman, Bootstrap, Git, Github y demás herramientas web
          para desarrolladores. Soy una persona muy proactiva y me gusta mucho
          aprender y desarrollar cada vez más mis habilidades, no me molestan
          los retos y siempre busco realizar mi trabajo de la mejor manera con
          buenas prácticas, responsive design, código limpio y más.
        </p>
        <a
          className="btn2"
          href="./assets/imagenes/certificados/cartaPresentacion.pdf"
          target="_blank"
        >
          Presentación
        </a>
      </section>
    </>
  );
}

export default AboutMe;
