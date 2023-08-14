import React from "react";
import MenuNavBtn from "./MenuNavBtn";
import "../../styles/navStyles/menunav.css";


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
          <MenuNavBtn category="Electrónico" />
        </li>
        <li>
          <MenuNavBtn category="Bijouterie" />
        </li>
      </ul>
  );
};

export default MenuNav;
