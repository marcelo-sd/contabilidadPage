import React from "react";
import "../../Styles/cardCaracteristicasCategorias.css";
import { useNavigate } from "react-router-dom";

function CardCaracteristicas() {
    var navigate =useNavigate();
  return (
    <div className="cardCategoria">
      <div className="cardCategoria-info">
        <p className="title">Lazy Loading</p>
       
        <p className="explorar" onClick={() => navigate("/contabilidadPage/lazy")}> Explorar! </p>
      </div>
    </div>
  );
}

export default CardCaracteristicas;
