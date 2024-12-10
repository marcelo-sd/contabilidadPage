import React from "react";
import "../../Styles/cardCaracteristicasCategorias.css";
import { useNavigate } from "react-router-dom";

function CardCaracteristicas() {
    var navigate =useNavigate();
  return (
    <div className="cardCategoria">
      <div className="cardCategoria-info">
        <p className="title">Worker</p>
       
        <p className="explorar" onClick={() => navigate("/worker")}> Explorar! </p>
      </div>
    </div>
  );
}

export default CardCaracteristicas;
