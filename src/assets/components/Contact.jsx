import { useRef, useState } from "react";

function Contact() {

  let name = useRef("");
  let email = useRef("");
  let message = useRef("");

  let [alert, setAlert] = useState(false)

  const showAlert = () => {
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 3000);
  }
  
  const sendForm = (e) => {
    e.preventDefault();

    //resetear el form
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
    showAlert()
  };

  return (
    <>
      <section className="contact" id="contact">
        <h1 className="title">Formulario de contacto</h1>
        <form className="form" onSubmit={sendForm}>
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
          <span style={{display: alert ? 'flex' : 'none'}} className="formAlert">¡¡¡Formulario enviado con éxito!!!</span>
        </form>
      </section>
    </>
  );
}

export default Contact;
