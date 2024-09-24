import React from "react";
import Icons from "./Icons";
import picture from "../imagenes/fotos/portada.jpg";
import "../css/styles.css";
import presentationLetter from "../imagenes/certificados/cartaPresentacion.pdf";

function Header() {
  return (
    <>
      <header className="header">
        <section className="initialInfo">
          <h2 className="title">Miguel Ángel Fernández Barco</h2>
          <h3>
            Desarrollador FrontEnd <br />
            (FrontEnd Developer)
          </h3>
          <div id="redes">
            <a
              href="https://www.linkedin.com/in/miguel-angel-fernandez-barco-7b802429b"
              target="_blank"
              rel="noreferrer"
            >
              <Icons iconName="linkedin" className="linkedin"></Icons>
            </a>
            <a href="https://github.com/miguelfb19" target="_blank" rel="noreferrer">
              <Icons iconName="github" className="git"></Icons>
            </a>
          </div>
          <div className="buttons">
            <button className="btn btnHeader1">Proyectos</button>
            <a
              href={presentationLetter}
              target="_blank"
              rel="noreferrer"
              className="btn2 btnHeader2"
            >
              Presentación
            </a>
          </div>
        </section>
        <section className="ppal-img">
          <img src={picture} alt="foto miguel" className="ppalPicture" />
        </section>
      </header>
    </>
  );
}

export default Header;
