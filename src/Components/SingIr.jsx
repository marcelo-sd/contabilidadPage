import React from "react";
import sg01 from "../assets/SingIr/sg01.png";
import sg02 from "../assets/SingIr/sg02.png";
import sg03 from "../assets/SingIr/sg03.png";
import { useNavigate } from "react-router-dom";
import "../index.css";

function SingIr() {
  var navigate = useNavigate();
  return (
    <div className="fondo2">
      <div className="container ">
        <section className="row text-center">
          <h2>Ejecutador de tareas en vivo</h2>
        </section>
        <section className="row ">
          <button
            className=" btn btn-success"
            onClick={() => navigate("/contabilidadPage/mensajeria")}
          >
            {" "}
            Probar Comunicacion en tiempo real!
          </button>
        </section>
        <section className="row">
          <p>
            {" "}
            Uso SingIr para comunicarme en tiempo real con los clientes
            conectados, de esta manera puedo enviar mensajes a mis usuarios
            conectados{" "}
          </p>
        </section>
        <section className="row">
          <img src={sg01} alt="img-fluid" />
        </section>
        <section className="row">
          <p>
            Aqui mapeo mi hub(centro de comunicaciones) de esta manera
            establesco una ruta especifica para que los clientes se conecten y
            tambien para que las solicitudes sean reconocidas y dirigidas
            correctamente.
          </p>
        </section>
        <section className="row">
          <img src={sg02} alt="img-fluid" />
        </section>
        <section className="row">
          <p>
            Aprovechando mi Worker, uso mi clase NotificacionSingIr para
            notificar a los usuarios cuando su tarea se ha realizado. El metodo
            NotificacionACliente envia un mensaje al usuario que solicito la
            tarea, uso el callback para asegurarme que la tarea se ha realizado.
          </p>
        </section>
        <section className="row">
          <img src={sg03} alt="img-fluid" />
        </section>
        <section className="row py-5">
          <button
            className=" btn btn-success"
            onClick={() => navigate("/mensajeria")}
          >
            {" "}
            Probar Comunicacion en tiempo real!
          </button>
        </section>
      </div>
    </div>
  );
}

export default SingIr;
