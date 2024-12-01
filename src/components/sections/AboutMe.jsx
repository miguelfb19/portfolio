import { useState, useEffect } from "react";

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

  return (
    <div className={bgColor}>
      <section className="aboutMe" id="aboutMe">
        <h1 className="title">Sobre mí</h1>
        {text.split("\n\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </section>
    </div>
  );
}

export default AboutMe;
