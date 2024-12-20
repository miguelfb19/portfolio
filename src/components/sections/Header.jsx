import Icons from "../Icons";
import picture from "../../assets/imagenes/fotos/portada.jpg";
import "../../assets/css/styles.css";
import presentationLetter from "../../assets/imagenes/certificados/cartaPresentacion.pdf";
import {Link} from "react-scroll";

function Header() {
  return (
    <>
      <header className="header">
        <section className="initialInfo">
          <h2 className="title">Miguel Ángel Fernández Barco</h2>
          <h3>
            Desarrollador Frontend <br />
            (Frontend Developer)
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
            <Link className="btn btnHeader1" to="portfolio" smooth={true}>Proyectos</Link>
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
