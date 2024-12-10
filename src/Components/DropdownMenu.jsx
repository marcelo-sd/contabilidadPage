import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import "../Styles/menu-desplegable.css";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container d-lg-none">  {/* Mostrar solo en pantallas pequeñas */}
      <button className="dropdown-icon" onClick={toggleMenu}>
        <IoMenuSharp size={24} />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/home" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/caracteristicas" onClick={closeMenu}>
              Caracteristicas
            </Link>
          </li>

          <li>
            <Link to="/contacto" onClick={closeMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
