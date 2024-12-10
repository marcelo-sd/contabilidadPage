import "../../Styles/cardPresentacion.css";
import { useNavigate } from 'react-router-dom'

import React from "react";

function CardPresentacion() {

  const navigate = useNavigate();

  return (
    <div className="card-pre ">
      <div className=" w-75 d-flex flex-column justify-content-center align-items-center 
      ">
        <p className="text-center">
          Esta Api registra operaciones de ventas y carga de datos asi como
          manejo de Administradores, permitiendo registrar ventas, controlar
          stock de productos, registro de actividad del los venderes, y mas!
        </p>
        <button className="btn-m" onClick={() => navigate("/caracteristicas")}> Explorar! </button>
      </div>
    </div>
  );
}

export default CardPresentacion;
