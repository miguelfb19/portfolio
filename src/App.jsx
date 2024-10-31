import "./assets/css/styles.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Icons from "./components/Icons";
import Contact from "./components/Contact";
import ButtonToTop from "./components/ButtonToTop";

function App() {
  return (
    <>
      <ButtonToTop></ButtonToTop>
      <Menu></Menu>
      <Header></Header>
      <Skills></Skills>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Education></Education>
      <Contact>x</Contact>
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
