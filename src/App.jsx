import "./assets/css/styles.css";
import Menu from "./assets/components/Menu";
import Header from "./assets/components/Header";
import Skills from "./assets/components/Skills";
import AboutMe from "./assets/components/AboutMe";
import Projects from "./assets/components/Projects";
import Education from "./assets/components/Education";
import Icons from "./assets/components/Icons";
import Contact from "./assets/components/Contact";

function App() {
  return (
    <>
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
          <b>Desarrollado con <Icons iconName='react' className='iconFooter'></Icons> por</b> Miguel Ángel Fernández Barco
        </span>
      </footer>
    </>
  );
}

export default App;
