import React from "react";
import Icons from "./Icons";
import picture from "../imagenes/fotos/portada.jpg";
import copy2 from "../imagenes/logos/copy2.svg";
import send from "../imagenes/logos/send.svg";
import check from "../imagenes/logos/check.svg";
import '../css/styles.css'

function Header() {
  
  const copiar = async () => {
    try {
      const correo = document.querySelector(".textEmail").textContent;
      await navigator.clipboard.writeText(correo);
      console.log("Contenido copiado al portapapeles");

      const copyImg = document.querySelector(".copyImg");
      copyImg.src = check;

      setTimeout(() => {
        copyImg.src = copy2;
      }, 1300);
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  };

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
            >
              <Icons iconName="linkedin" className="linkedin"></Icons>
            </a>
            <a href="https://github.com/miguelfb19" target="_blank">
              <Icons iconName="github" className="git"></Icons>
            </a>
          </div>
          <div id="email">
            <p className="textEmail">miguelangelfb19@utp.edu.co</p>
            <div className="buttonsMailContent">
              <a className="copy" onClick={copiar}>
                <img
                  src={copy2}
                  alt="copy"
                  className="mailButtonIcon btn copyImg"
                />
              </a>
              <a href="mailto:miguelangelfb19@utp.edu.co" className="send">
                <img src={send} alt="sendMail" className="mailButtonIcon btn" />
              </a>
            </div>
          </div>

          <div className="buttons">
            <button className="btn btnHeader1">Proyectos</button>
            <a
              href="./assets/imagenes/certificados/cartaPresentacion.pdf"
              target="_blank"
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
