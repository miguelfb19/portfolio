import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  let name = useRef("");
  let email = useRef("");
  let message = useRef("");
  let form = useRef();

  let [alert, setAlert] = useState(false);
  let alertColor = useRef();

  const showAlert = (color, text, textColor) => {
    alertColor.current.style.backgroundColor = color;
    alertColor.current.style.color = textColor;
    alertColor.current.textContent = text;
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  const sendForm = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID_EMAILJS,
        process.env.REACT_APP_TEMPLATE_ID_EMAILJS,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY_EMAILJS,
        }
      );

      console.log("SUCCESS!");

      //resetear el form
      form.current.reset();
      name.current.focus();
      //Mostrar mensaje de éxito
      showAlert("#23c483", "¡¡¡Formulario enviado con éxito!!!", "#1b263b");
    } catch (error) {
      console.log("FAILED...", error.text);
      showAlert(
        "red",
        "Hubo un ERROR al enviar el formulario, por favor intente más tarde",
        "white"
      );
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <h1 className="title">Formulario de contacto</h1>
        <form className="form" onSubmit={sendForm} ref={form}>
          <div className="formGroup">
            <label htmlFor="inputName">Nombre completo:</label>
            <input
              type="text"
              id="inputName"
              placeholder="Nombre"
              ref={name}
              required
              name="name"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="inputMail">Correo:</label>
            <input
              type="email"
              id="inputMail"
              placeholder="ejemplo123@ejemplo.com"
              ref={email}
              required
              name="email"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="inputMessage">Mensaje:</label>
            <textarea
              id="inputMessage"
              cols="50"
              rows="4"
              placeholder="Escribe aquí tu mensaje..."
              ref={message}
              name="message"
            ></textarea>
          </div>
          <div className="buttonsContact">
            <button type="submit" className="btn">
              Enviar
            </button>
            <button type="reset" className="btn2">
              Limpiar
            </button>
          </div>
          <span
            style={{ display: alert ? "flex" : "none" }}
            className="formAlert"
            ref={alertColor}
          >
            ¡¡¡Formulario enviado con éxito!!!
          </span>
        </form>
      </section>
    </>
  );
}

export default Contact;
