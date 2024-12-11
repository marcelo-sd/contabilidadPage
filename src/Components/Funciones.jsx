import React from "react";
import "../Styles/funciones.css";
import a1 from "../assets/a1.png";
import CardFunciones from "./Reutilizables/CardFunciones";
import cap001 from "../assets/funciones/cap001.png";
import CardFunsion002 from "./tarjetas-items/CardFunsion002";
import CardF003 from "./tarjetas-items/CardF003";
import CardF004 from "./tarjetas-items/CardF004";
import CardF005 from "./tarjetas-items/CardF005";
import cap002 from "../assets/funciones/cap002.png";
import cap003 from "../assets/funciones/cap003.png";
import cap004 from "../assets/funciones/cap004.png";
import cap005 from "../assets/funciones/cap005.png";
import "../index.css";



function Funciones() {
  return (
    <div className="fondo2">
    <div className="container-fluid  ">
      <section className="row  text-center">
        <h1>Funciones</h1>
      </section>
      <section className="row text center">
        <p className=" text-center h2">
         Aqui te muestro como funcionan las tablas!
        </p>
      </section>

      <section className="row">
        <div className="col   py-2">
          <CardFunciones />
        </div>
      </section>

      <section className="row   py-2">
        <figure
          className="col-11 col-sm-11 col-md-11 col-lg-8 col-xl-8 col-xxl-8 mx-auto"
          style={{ maxHeight: "90%", overflow: "hidden" }}
        >
          <img src={cap001} className="img-fluid rounded " />
        </figure>
      </section>

      <section className="row">
        <div className="col   py-2">
          <CardFunsion002 />
        </div>
      </section>
      <section className="row   py-2">
        <figure
          className="col-11 col-sm-11 col-md-11 col-lg-8 col-xl-8 col-xxl-8 mx-auto"
          style={{ maxHeight: "90%", overflow: "hidden" }}
        >
          <img src={cap002} className="img-fluid rounded " />
        </figure>
      </section>
      <section className="row">
        <div className="col  py-2">
          <CardF003 />
        </div>
      </section>
      <section className="row    py-2">
        <figure
          className="col-11 col-sm-11 col-md-11 col-lg-8 col-xl-8 col-xxl-8 mx-auto"
          style={{ maxHeight: "90%", overflow: "hidden" }}
        >
          <img src={cap003} className="img-fluid rounded " />
        </figure>
      </section>
      <section className="row">
        <div className="col   py-2">
          <CardF004 />
        </div>
      </section>
      <section className="row    py-2">
        <figure
          className="col-11 col-sm-11 col-md-11 col-lg-8 col-xl-8 col-xxl-8 mx-auto"
          style={{ maxHeight: "90%", overflow: "hidden" }}
        >
          <img src={cap004} className="img-fluid rounded " />
        </figure>
      </section>
      <section className="row">
        <div className="col py-2">
          <CardF005 />
        </div>
      </section>
      <section className="row    py-2">
        <figure
          className="col-11 col-sm-11 col-md-11 col-lg-8 col-xl-8 col-xxl-8 mx-auto"
          style={{ maxHeight: "90%", overflow: "hidden" }}
        >
          <img src={cap005} className="img-fluid rounded " />
        </figure>
      </section>
    </div>
    </div>
  );
}

export default Funciones;
