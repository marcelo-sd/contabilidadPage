import React from "react";
import re01 from "../assets/Redis/re01.png";
import re02 from "../assets/Redis/re02.png";
import "../index.css";

function Redis() {
  return (
    <div className="fondo2">
      <div className="container ">
        <section className="row text-center">
          <h2>Almacenamiento cache</h2>
        </section>
        <section className="row ">
          <p>
            Para Optimizar el tiempo de respuesta y el rendimiento de mi api,
            uso Redis el las solicitudes mas requeridas
          </p>
        </section>
        <section className="row mb-3">
          <img src={re01} alt="" className="img-fluid" />
        </section>
        <section className="row">
          <p>
            Estoy usando un servicio localHost, utilizando un contenedor docker.
            Es a modo demostracion por eso se expone el Password.{" "}
          </p>
          <p>
            Aqui te muestro como lo uso en un metodo Get, para obetener la lista
            de usuarios .
          </p>
        </section>
        <section className="row pb-3">
          <img src={re02} alt="" className="img-fluid" />
        </section>
      </div>
    </div>
  );
}

export default Redis;
