import "../Styles/nabvar.css";
import a02 from "../assets/a02.jpg";
import DropdownMenu from "./DropdownMenu.jsx";
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="container-navbar">
      <section className="contenedor-img-nabvar">
        <figure className="figure-contedor-img">
          <img className="img-menu" src={a02} alt="" />
        </figure>
        <h1 className="titulo-img-navbar">Cotabilidad Market Api</h1>
      </section>
      <section className="contenedor-menu">
        <nav className="contenedor-nav">
         
          <ul className="menu">
           
            <li>
             
              <Link to="/home">Home</Link>
            </li>
         
            <li>
             
              <Link to="/caracteristicas">Características</Link>
            </li>
            <li>
             
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="menu-desplegable">
        <DropdownMenu />
      </section>
    </div>
  );
}

export default NavBar;
