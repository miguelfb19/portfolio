import Icons from "./Icons";
import { Link } from "react-scroll";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

function Menu() {
  //Creamos esta variable para corregir el scroll que se modifica debido a la animacion del DOM
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  let srollCorrection = -0.2 * vh;

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (vw > 850) {
      setOpen(true);
    }
  }, []);

  return (
    <>
      <nav className="mainMenu">
        <section className="menuLeft">
          <Icons iconName="code"></Icons>
        </section>
        <span className="spanMenu"></span>
        {vw <= 820 && (
          <div className="hamburger">
            <Hamburger
              className="hamburger"
              rounded
              color="white"
              size={vw < 500 ? 30 : 40}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        )}
        {isOpen && (
          <section className="menuRight">
            <Link
              style={{ cursor: "pointer" }}
              to="skills"
              smooth={true}
              offset={srollCorrection}
              duration={800}
            >
              Habilidades
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              to="aboutMe"
              smooth={true}
              offset={srollCorrection}
              duration={800}
            >
              Sobre mí
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              to="portfolio"
              smooth={true}
              offset={srollCorrection}
              duration={800}
            >
              Proyectos
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              to="education"
              smooth={true}
              offset={srollCorrection}
              duration={800}
            >
              Formación
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              to="contact"
              smooth={true}
              offset={srollCorrection}
              duration={800}
            >
              Contacto
            </Link>
          </section>
        )}
      </nav>
    </>
  );
}

export default Menu;
