import React from "react";
import "../../Styles/cardCaracteristicasCategorias.css";
import { useNavigate } from "react-router-dom";

function CardCaracteristicas09() {
    var navigate =useNavigate();
  return (
    <div className="cardCategoria">
      <div className="cardCategoria-info">
        <p className="title">Endpoints</p>
       
        <p className="explorar" onClick={() => navigate("/contabilidadPage/token")}> Explorar! </p>
      </div>
    </div>
  );
}

export default CardCaracteristicas09;
