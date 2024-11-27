import { useState, useEffect } from "react";
import presentationLetter from "../../assets/imagenes/certificados/cartaPresentacion.pdf";

function AboutMe({ bgColor = "" }) {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/aboutMe.txt")
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        setText(text);
      });
  }, []);

  // console.log(text.split('/\r?\n/'));

  return (
    <div className={bgColor}>
      <section className="aboutMe" id="aboutMe">
        <h1 className="title">Sobre mí</h1>
        {text.split("\n\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <a
          className="btn2"
          href={presentationLetter}
          target="_blank"
          rel="noreferrer"
        >
          Presentación
        </a>
      </section>
    </div>
  );
}

export default AboutMe;
