import React from "react";
import MenuNavBtn from "./MenuNavBtn";
import "../styles/menunav.css";


const MenuNav = () => {
  return (
      <ul className="navbarBot">
        <li>
          <MenuNavBtn category="Inicio" />
        </li>
        <li>
          <MenuNavBtn category="Hombre" />
        </li>
        <li>
          <MenuNavBtn category="Mujer" />
        </li>
        <li>
          <MenuNavBtn category="Niño" />
        </li>
        <li>
          <MenuNavBtn category="Accesorios" />
        </li>
        <li>
          <MenuNavBtn category="Contacto" />
        </li>
      </ul>
  );
};

export default MenuNav;
