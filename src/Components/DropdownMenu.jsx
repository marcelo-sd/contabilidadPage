import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import "../Styles/menu-desplegable.css";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container d-lg-none">
      <button className="dropdown-icon" onClick={toggleMenu}>
        <IoMenuSharp size={50} />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/contabilidadPage/home" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contabilidadPage/caracteristicas" onClick={closeMenu}>
              Caracteristicas
            </Link>
          </li>

          <li>
            <Link to="/contabilidadPage/contacto" onClick={closeMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
