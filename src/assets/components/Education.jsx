import React from "react";

function Education() {
  return (
    <>
      <section className="educationExp">
        <h1 className="title">Formación y experiencia</h1>
        <section className="edu">
          <section className="details">
            <details>
              <summary>ESPECIALIZACION EN DESARROLLO WEB</summary>
              <p>
                Cursos NETZUN <br />
                Actualmente
              </p>
              <a
                href="./assets/imagenes/certificados/ESPECIALIZACION EN PROGRAMACION WEB.png"
                target="_blank"
              >
                Ver certificación
              </a>
            </details>
            <details>
              <summary>GIT Y GITHUB PROFESIONAL</summary>
              <p>
                Cursos NETZUN <br />
                20 de Junio de 2024
              </p>
              <a
                href="./assets/imagenes/certificados/git y github profesional.pdf"
                target="_blank"
              >
                Ver certificación
              </a>
            </details>
            <details>
              <summary>MASTER EN FRAMEWORKS DE JAVASCRIPT</summary>
              <p>
                Curso - UDEMY <br />
                Enero 2024
              </p>
              <a
                href="./assets/imagenes/certificados/master framworkJS.jpg"
                target="_blank"
              >
                Ver certificación
              </a>
            </details>
            <details>
              <summary>TÉCNICO SOPORTE SISTEMAS E INFORMÁTICA</summary>
              <p>Centro educativo nacional CENAL 2023</p>
              <a
                href="./assets/imagenes/certificados/tecnico sistemas.jpg"
                target="_blank"
              >
                Ver certificación
              </a>
            </details>
            <details>
              <summary>
                BACHILLER TÉCNICO EN MANTENIMIENTO DE COMPUTADORES
              </summary>
              <p>
                Instituto Técnico Superior de Pereira <br />
                Pereira- Risaralda <br />
                2011
              </p>
              <a
                href="./assets/imagenes/certificados/diploma ITS.jpg"
                target="_blank"
              >
                Ver certificación
              </a>
            </details>
            <details>
              <summary>
                PROFESIONAL CIENCIAS DEL DEPORTE Y LA RECREACIÓN
              </summary>
              <p>
                Universidad Tecnológica de Pereira <br />
                Pereira- Risaralda <br />
                2021
              </p>
              <a
                href="./assets/imagenes/certificados/Diploma UTP-CDR.jpg"
                target="_blank"
              >
                Ver certificación
              </a>
            </details>
          </section>
        </section>
        <section className="exp">
          <article>
            <h2>Desarrollador FrontEnd Freelance</h2>
            <p>
              Tiempo de experiencia: <b>1 año</b>
            </p>
          </article>
          <article>
            <h2>
              Coordinador general de proyectos y manejo de procesos logísticos
            </h2>
            <p>
              FUNDACIÓN CATÓLICA COMUNIDAD MARÍA MEDIADORA <br />
              Tiempo de experiencia: <b>5 años</b>
            </p>
          </article>
        </section>
      </section>
    </>
  );
}

export default Education;
