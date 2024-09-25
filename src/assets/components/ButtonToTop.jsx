import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

function ButtonToTop() {

    
    
  //Hacemos el scrollToTop con una funcion debido a que los parametros como 'duration'
  //no los agarra directamente en el JSX
  let scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };
  const [showBtn, setShowBtn] = useState(true);

  let vh = window.innerHeight;
  
  //Funcion para mostrar o quitar el boton de Scroll Top
  const handleButton = () => {
    if (window.scrollY > vh) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  //escuchamos el evento scroll de la ventana del navegador
  window.addEventListener("scroll", handleButton);

  //Ejecutamos el handle en cuando se renderiza el componente para que lo quite en la pantalla inicial
  useEffect(() => {
    handleButton();
  }, []);

  return (
    <span
      style={{ display: showBtn ? 'flex' : 'none' }}
      className="btnTop bi bi-chevron-up"
      onClick={scrollToTop}
    ></span>
  );
}

export default ButtonToTop;
