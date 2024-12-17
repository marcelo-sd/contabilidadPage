import CardCaracteristicas from "./tarjetas-caracteisticas-categorias/CardCaracteristicas";
import CardCaracteristicas02 from "./tarjetas-caracteisticas-categorias/CardCaracteristicas02";
import CardCaracteristicas03 from "./tarjetas-caracteisticas-categorias/CardCaracteristicas03";
import CardCaracteristicas04 from "./tarjetas-caracteisticas-categorias/CardCaracteristicas04";
import CardCaracteristicas05 from "./tarjetas-caracteisticas-categorias/CardCaracteristicas05";
import CardCaracteristicas06 from "./tarjetas-caracteisticas-categorias/CardCaracteristicas06";
import CardCaracteristicas07 from "./tarjetas-caracteisticas-categorias/CardCaracteristicas07";
import CardCaracteristicas08 from "./tarjetas-caracteisticas-categorias/CardCaracteristicas08";
import CardCaracteristicas09 from "./tarjetas-caracteisticas-categorias/CardCaracteristicas09";

import "../index.css";

function Caracteristicas() {
  return (
    <div className=" fondo2 ">
      <section className="row py-2 ">
        <p className="col text-center h2 text-info-emphasis " style={{ "font-weight":"bold"}}>
         Principales caracteristicas de Contabilidad Market
        </p>
      </section>
      <section className="row  py-4  d-flex justify-content-center  ">
        <div className="col col-lg-3   d-flex justify-content-center mb-2">
          <CardCaracteristicas />
        </div>
        <div className="col col-lg-3  d-flex justify-content-center mb-2">
          <CardCaracteristicas02 />
        </div>
        <div className="col col-lg-3  d-flex justify-content-center mb-2">
          <CardCaracteristicas03 />
        </div>
        <div className="col col-lg-3  d-flex justify-content-center mb-2">
          <CardCaracteristicas04 />
        </div>
        <div className="col col-lg-3  d-flex justify-content-center mb-2">
          <CardCaracteristicas05 />
        </div>
        <div className="col col-lg-3  d-flex justify-content-center mb-2">
          <CardCaracteristicas06 />
        </div>
        <div className="col col-lg-3  d-flex justify-content-center mb-2">
          <CardCaracteristicas07 />
        </div>
        <div className="col col-lg-3  d-flex justify-content-center mb-2">
          <CardCaracteristicas08 />
        </div>
        <div className="col col-lg-3  d-flex justify-content-center mb-2">
          <CardCaracteristicas09 />
        </div>
      </section>
    </div>
  );
}

export default Caracteristicas;
