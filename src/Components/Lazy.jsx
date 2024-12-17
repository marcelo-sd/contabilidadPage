import React from "react";
import lz from "../assets/Lazy_loading/lz01.png"
import "../index.css";

function Lazy() {
  return (
      <div className="fondo3">
    <div className="container ">
      <section className="row  text-center mb-3">
        <h2>Lazy Loading</h2>
      </section>
      <section className="row text-center">
        <p className="col">
         { "  "}Uso a lazy loading para obtimizar el rendimiento, logro retrasar la carga de datos relacionados  y solo usarlo cuando los nesecite.
        </p>
      </section>
      <section className="row text-center">
        <figure className="col">
          <img src={lz} alt="" className="img-fluid" />
        </figure>
      </section>
    </div>
    </div>
  );
}

export default Lazy;
