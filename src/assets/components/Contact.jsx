import React from "react";

function Contact() {
  return (
    <>
      <section className="contact">
        <h1 className="title">Formulario de contacto</h1>
        <form className="form">
          <div className="formGroup">
            <label htmlFor="inputName">Nombre:</label>
            <input type="text" id="inputName" placeholder="Nombre" required/>
          </div>
          <div className="formGroup">
            <label htmlFor="inputMail">Correo:</label>
            <input
              type="email"
              id="inputMail"
              placeholder="ejemplo123@ejemplo.com"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="inputMessage">Mensaje:</label>
            <textarea
              id="inputMessage"
              cols="50"
              rows="4"
              placeholder="Escribe aquí tu mensaje..."
            ></textarea>
          </div>
          <div className="buttonsContact">
            <button type="submit" className="btn">Enviar</button>
            <button type="reset" className="btn2">Limpiar</button>
          </div>
          <span className="formAlert">Formulairo enviado con exito</span>
        </form>
      </section>
    </>
  );
}

export default Contact;
