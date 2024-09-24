import React from "react";
import Icons from "./Icons";

function Project({ img, title, content, tools, link, repository }) {
  return (
    <>
      <li className="card">
        <div className="projectsLink">
          <a className="bi bi-github" target="_blank" href={repository}></a>
          <a
            className="bi bi-box-arrow-up-right"
            href={link}
            target="_blank"
          ></a>
        </div>
        <img src={img} alt={title} className="projectPic"/>
        <div className="cardText">
          <h4>{title}</h4>
          <p>{content}</p>
          <hr />
          <p>Herramientas usadas:</p>
          <div className="projectsFigure">
            <figure>
              {tools.map((tool) => (
                <Icons key={tool} iconName={tool} />
              ))}
            </figure>
          </div>
        </div>
      </li>
    </>
  );
}

export default Project;
