import Icons from "./Icons";
import { Link } from "react-scroll";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

function Menu() {
  const menuItems = [
    { name: "Sobre mí", link: "aboutMe" },
    { name: "Proyectos", link: "portfolio" },
    { name: "Habilidades", link: "skills" },
    { name: "Formación", link: "education" },
    { name: "Contacto", link: "contact" },
  ];

  //Creamos esta variable para corregir el scroll que se modifica debido a la animacion del DOM
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  let srollCorrection = -0.2 * vh;

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (vw > 850) {
      setOpen(true);
    }
  }, [vw]);

  return (
    <>
      <nav className="mainMenu">
        <section className="menuLeft">
          <Icons iconName="code"></Icons>
        </section>
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
          
          <section onClick={()=>setOpen(!isOpen)} className="menuRight">
            {menuItems.map((item, index) => (
              <Link
              key={index+item.name}
              style={{ cursor: "pointer" }}
              to={item.link}
              smooth={true}
              offset={srollCorrection}
              duration={800}
              onClick={()=>setOpen(!isOpen)}
            >
              {item.name}
            </Link>
            ))}
          </section>
        )}
      </nav>
    </>
  );
}

export default Menu;
