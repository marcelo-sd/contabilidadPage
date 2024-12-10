import React from "react";
import "../../Styles/cardCaracteristicasCategorias.css";
import { useNavigate } from "react-router-dom";

function CardCaracteristicas03() {
    var navigate =useNavigate();
  return (
    <div className="cardCategoria">
      <div className="cardCategoria-info">
        <p className="title">Mensajeria</p>
       
        <p className="explorar" onClick={() => navigate("/singir")}> Explorar! </p>
      </div>
    </div>
  );
}

export default CardCaracteristicas03;
