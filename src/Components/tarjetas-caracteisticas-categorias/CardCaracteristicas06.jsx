import React from "react";
import "../../Styles/cardCaracteristicasCategorias.css";
import { useNavigate } from "react-router-dom";

function CardCaracteristicas06() {
    var navigate =useNavigate();
  return (
    <div className="cardCategoria">
      <div className="cardCategoria-info">
        <p className="title">Seguridad</p>
       
        <p className="explorar" onClick={() => navigate("/contabilidadPage/seguridad")}> Explorar! </p>
      </div>
    </div>
  );
}

export default CardCaracteristicas06;
