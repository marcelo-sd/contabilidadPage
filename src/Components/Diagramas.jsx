import di01 from "../assets/Diagramas/di01.png";
import "../index.css";
function Diagramas() {
  return (
    <div className="fondo2">
      <div className="container ">
        <section className="row text-center pt-3">
          <h2>Digrama de Bases de datos</h2>
        </section>
        <section className="row">
          <p className="h4 ">
            <small>
              Este diagrama de base de datos demuestra la eficiencia en la
              gestión de productos, usuarios, pedidos y roles. Las relaciones
              entre las tablas aseguran una integridad de datos robusta y
              consultas rápidas.
            </small>
          </p>
        </section>
        <section className="row">
          <img src={di01} className="img-fluid" />
        </section>
        <section className="row ">
          <p className="h5">
            Integridad de Datos:
            <small className="h5">
              {" "}
              Relaciones bien definidas que previenen duplicaciones y aseguran
              consistencia.
            </small>
          </p>
        </section>
        <section className="row pb-4 ">
          <p className="h5">
            Consultas Rápidas:
            <small className="h5">
              {" "}
              Estructura clara que permite optimización de consultas, mejorando
              el rendimiento.
            </small>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Diagramas;
