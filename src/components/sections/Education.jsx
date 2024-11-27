import React from "react";
import { certifications, experiences } from '../../models'

function Education({ bgColor = "" }) {
  
  return (
    <>
      <section className={`educationExp ${bgColor}`} id="education">
        <h1 className="title">Formación y experiencia</h1>
        <section className="edu">
          <section className="details">
            {certifications.map((certification) => {
              return (
                <details key={certification.title}>
                  <summary>{certification.title}</summary>
                  <p>{`- ${certification.content}`}</p>
                  <p>{certification.date}</p>
                  {certification.doc && <a href={certification.doc} target="_blank" rel="noreferrer"> 
                    Ver certificación
                  </a>}
                </details>
              );
            })}
          </section>
        </section>
        <section className="exp">
          {experiences.map((exp) => {
            return (
              <article key={exp.title}>
                <h2>{exp.title}</h2>
                <p>
                  Tiempo de experiencia: <b>{exp.xp}</b>
                </p>
              </article>
            );
          })}
        </section>
      </section>
    </>
  );
}

export default Education;
