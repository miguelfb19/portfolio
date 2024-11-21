import { LoadingSpinner } from "./LoadingSpinner";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  let name = useRef("");
  let email = useRef("");
  let message = useRef("");
  let form = useRef();
  const [loading, setLoading] = useState(false)

  const submitAlert = (message, icon) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: icon,
      title: message,
    });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID_EMAILJS,
        process.env.REACT_APP_TEMPLATE_ID_EMAILJS,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY_EMAILJS,
        }
      );
      //resetear el form
      form.current.reset();
      name.current.focus();
      setLoading(false)
      //Mostrar mensaje de éxito
      submitAlert("¡¡¡Mensaje enviado con éxito!!!", "success");
    } catch (error) {
      console.log("FAILED...", error.text);
      submitAlert("No se pudo enviar el mensaje", "error");
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <h1 className="title">Formulario de contacto</h1>
        <form className="form" onSubmit={sendForm} ref={form}>
          <div className="containerForm" style={loading ? {opacity: .1} : {}}>
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
          </div>
          {loading && <div className="loadingContainer">
            <LoadingSpinner size={50}/>
            <span className="loadingText">Enviando...</span>
          </div>}
        </form>
      </section>
    </>
  );
}

export default Contact;
