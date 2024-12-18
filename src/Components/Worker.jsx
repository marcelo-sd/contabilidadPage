import React from "react";
import wr01 from "../assets/Worker/wr01.png";
import wr02 from "../assets/Worker/wr02.png";
import wr03 from "../assets/Worker/wr03.png";
import "../index.css";

function Worker() {
  return (
    <div className="fondo2">
      <div className="container ">
        <section className="row text-center">
          <h3>Este es mi Worker</h3>
        </section>
        <section className="row">
          <p>
            Este trabajador logra ejecutar las tareas mas pesadas o las que
            toman mucho tiempo EN SEGUNDO PLANO, optimizando el funcionamiento.
            De esta manera logro, que Mi Api pueda seguir recibiendo solicitudes
            que requieran muchos recursos sin nesecidad de relentizarse.{" "}
          </p>
          <p>
            {" "}
            Uso singlenton para crear una unica insatancia del servicio, ya que
            es costosa en materia de recursos y tambien nesesaria para que todas
            las tareas se encolen el la misma Coleccion (channel). aqui es como
            registro el servicio:
          </p>
        </section>
        <section className="row">
          <img src={wr01} alt="img-fluid" />
        </section>
        <section className="row">
          <p>
            Aqui estoy implementando la interfaz, tambien uso channel que es una
            coleccion especial para TASK.
          </p>
        </section>
        <section className="row">
          <img src={wr02} alt="img-fluid" />
        </section>
        <section className="row">
          <p>
            Aqui estoy encolando la tarea, y simulo una tarea que requiere un
            determinado tiempo.
          </p>
        </section>
        <section className="row pb-5">
          <img src={wr03} alt="img-fluid" />
        </section>
      </div>
    </div>
  );
}

export default Worker;
