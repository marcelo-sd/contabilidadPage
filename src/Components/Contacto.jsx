import "../index.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrUserManager } from "react-icons/gr";
import { IoPhonePortrait } from "react-icons/io5";
import "../Styles/perfil.css";
import React, { useState } from "react";
import pe01 from '../assets/Contacto/pe01.png'

function Contacto() {
  const [apiResponse, setApiResponse] = useState("");
  const copiarCorreo = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace
    const correo = "sebamd789@gmail.com";
    navigator.clipboard
      .writeText(correo)
      .then(() => {
        setApiResponse("Correo copiado al portapapeles");
        setTimeout(() => {
          setApiResponse(""); // Elimina la notificación después de 3 segundos
        }, 3000);
      })
      .catch((err) => {
        console.error("Error al copiar el correo: ", err);
      });
  };
  return (
    <div className=" fondo">
      <section className="row text-center mb-3">
        <h2>Contactame!</h2>
      </section>
      <section className="row">
        <div className="col text-center">
          {apiResponse && (
            <div className="alert alert-success mt-3">{apiResponse}</div>
          )}
        </div>
      </section>

      <section className="row d-flex justify-content-center mb-5">
        <div className="card-client col-6 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3">
          <div className="user-picture">
            <figure>
                <img src={pe01} alt="" />
            </figure>
          {/*   <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
            </svg> */}
          </div>
          <p className="name-client">
            {" "}
            Marcelo Diaz
            <span>BackEnd Developer</span>
          </p>
          <div className="social-media">
            <a href="https://github.com/marcelo-sd">
              <FaGithub />
              <span className="tooltip-social">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/marcelo-diaz32/">
              <FaLinkedin />
              <span className="tooltip-social">LinkedIn</span>
            </a>
            <a href="https://marcelo-sd.github.io/MyPortafoliomds/">
              <GrUserManager />
              <span className="tooltip-social">Portafolio</span>
            </a>
            <a href="#" onClick={copiarCorreo}>
              <SiGmail />
              <span className="tooltip-social">Gmail</span>
            </a>
          </div>
        </div>
      </section>
     
     
    </div>
  );
}

export default Contacto;
