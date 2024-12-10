import React from "react";
import "../../Styles/cardCaracteristicasCategorias.css";
import { useNavigate } from "react-router-dom";

function CardCaracteristicas08() {
    var navigate =useNavigate();
  return (
    <div className="cardCategoria">
      <div className="cardCategoria-info">
        <p className="title">Redis</p>
       
        <p className="explorar" onClick={() => navigate("/redis")}> Explorar! </p>
      </div>
    </div>
  );
}

export default CardCaracteristicas08;
