import React from "react";
import "../../Styles/cardCaracteristicasCategorias.css";
import { useNavigate } from "react-router-dom";

function CardCaracteristicas07() {
    var navigate =useNavigate();
  return (
    <div className="cardCategoria">
      <div className="cardCategoria-info">
        <p className="title">Funciones</p>
       
        <p className="explorar" onClick={() => navigate("/funciones")}> Explorar! </p>
      </div>
    </div>
  );
}

export default CardCaracteristicas07;
