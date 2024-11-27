// ________________________________
// SECTIONS
// ________________________________

import {Header, AboutMe, Contact, Projects, Skills, Education} from "./components/sections";

// ________________________________
// COMPONENTS
// ________________________________

import "./assets/css/styles.css";
import Menu from "./components/Menu";
import Icons from "./components/Icons";
import ButtonToTop from "./components/ButtonToTop";

function App() {
  return (
    <>
      <ButtonToTop></ButtonToTop>
      <Menu />
      <Header />
      <AboutMe bgColor="bg-blue-1"/>
      <Projects />
      <Skills bgColor="bg-blue-1"/>
      <Education />
      <Contact bgColor="bg-blue-1"/>
      <footer>
        <span className="copyright">
          &copy; Todos los derechos reservados
          <br />
          <b>
            Desarrollado con{" "}
            <Icons iconName="react" className="iconFooter"></Icons> por
          </b>{" "}
          Miguel Ángel Fernández Barco
        </span>
      </footer>
    </>
  );
}

export default App;
