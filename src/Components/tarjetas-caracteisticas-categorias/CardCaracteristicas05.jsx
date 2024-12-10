import React from "react";
import "../../Styles/cardCaracteristicasCategorias.css";
import { useNavigate } from "react-router-dom";

function CardCaracteristicas05() {
    var navigate =useNavigate();
  return (
    <div className="cardCategoria">
      <div className="cardCategoria-info">
        <p className="title">Documentacion</p>
       
        <p className="explorar" onClick={() => navigate("/documentacion")}> Explorar! </p>
      </div>
    </div>
  );
}

export default CardCaracteristicas05;
