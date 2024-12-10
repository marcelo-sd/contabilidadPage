import do01 from '../assets/Documentacion/do01.png'
import "../index.css";

function Documentacion() {
  return (
      <div className="fondo2">
    <div className="container  ">
      <section className="row text-center pt-3">
        <h2>Documentacion de Metodos</h2>
      </section>
      <section className="row">
        <p> todos los metodos esta docuementados de esta manera y no solo mejora la calidad del código y facilita el mantenimiento, sino que también apoya la automatización, la validación y la colaboración eficiente entre todos los involucrados en el desarrollo de la API.</p>
      </section>
      <section className="row pb-4">
        <img src={do01}  className="img-fluid" />
      </section>
      </div>
    </div>
  );
}

export default Documentacion;
