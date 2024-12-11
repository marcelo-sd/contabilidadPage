import React from "react";
import "../../Styles/cardCaracteristicasCategorias.css";
import { useNavigate } from "react-router-dom";

function CardCaracteristicas04() {
    var navigate =useNavigate();
  return (
    <div className="cardCategoria">
      <div className="cardCategoria-info">
        <p className="title">Diagramas</p>
       
        <p className="explorar" onClick={() => navigate("/contabilidadPage/diagramas")}> Explorar! </p>
      </div>
    </div>
  );
}

export default CardCaracteristicas04;
