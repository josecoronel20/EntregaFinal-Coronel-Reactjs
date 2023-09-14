import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navStyles/menunav.css";

const MenuNav = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <Link to="/">
        <button>inicio</button>
      </Link>
      <Link to="/category/masculino">
        <button>Masculino</button>
      </Link>
      <Link to="/category/femenino">
        <button>Femenino</button>
      </Link>
      <Link to="/category/formal">
        <button>Formal</button>
      </Link>
      <Link to="/category/deportivo">
        <button>Deportivo</button>
      </Link>
    </ul>
  );
};

export default MenuNav;
