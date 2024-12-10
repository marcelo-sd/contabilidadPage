import React from "react";
import wr01 from "../assets/Worker/wr01.png";
import wr02 from "../assets/Worker/wr02.png";
import wr03 from "../assets/Worker/wr03.png";
import "../index.css";

function Worker() {
  return (
    <div className="fondo3">
      <div className="container ">
        <section className="row text-center">
          <h3>Este es mi Worker</h3>
        </section>
        <section className="row">
          <p>
            este trabajador logro ejecutar las tareas mas pesadas o las que
            toman mucho tiempo EN SEGUNDO PLANO, optimizando el funcionamiento.
            De esta manera logro que Mi Api pueda seguir recibiendo solicitudes
            que requieran muchos recursos sin nesecidad de relentizarse.{" "}
          </p>
          <p>
            {" "}
            uso singlenton para crear una unica insatancia del servicio, ya que
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
            aqui estoy implementando la interfaz uso channel que es una
            coleccion especial para task
          </p>
        </section>
        <section className="row">
          <img src={wr02} alt="img-fluid" />
        </section>
        <section className="row">
          <p>
            aqui estoy encolando la tarea, y simulo una tarea que requiere un
            determinado tiempo.
          </p>
        </section>
        <section className="row mb-5">
          <img src={wr03} alt="img-fluid" />
        </section>
      </div>
    </div>
  );
}

export default Worker;
