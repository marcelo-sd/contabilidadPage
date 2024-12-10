import se01 from "../assets/Seguridad/se01.png";
import se02 from "../assets/Seguridad/se02.png";
import se03 from "../assets/Seguridad/se03.png";
import "../index.css";

function Seguridad() {
  return (
    <div className="fondo2">
      <div className="container ">
        <section className="row text-center">
          <h2>Seguridad</h2>
        </section>
        <section className="row">
          <p>
            Para la seguridad uso JWT, la propia api genera los token, que luego
            se podran usar para acceder a los recursos, los mismo a modo de
            prueba solo tienen 30 minutos de validez.{" "}
          </p>
        </section>
        <section className="row mb-3">
          <img src={se01} alt="" className="img-fluid" />
        </section>
        <section className="row">
          <p>
            Para manejar los roles de manera que solo el administrador pueda
            modificar ciertas tamblas de suma importancia, uso politicas usando
            el RodId que todos los usuarios tinen
          </p>
        </section>
        <section className="row mb-3">
          <img src={se02} alt="" className="img-fluid" />
        </section>
        <section className="row">
          <p>
            Asi de esta manera por ejemplo solo un usuario administrador puede
            modificar la tabla Usarios
          </p>
        </section>
        <section className="row pb-5">
          <img src={se03} alt="" className="img-fluid" />
        </section>
      </div>
    </div>
  );
}

export default Seguridad;
