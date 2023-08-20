import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navStyles/menunav.css";

const MenuNav = ({ style }) => {
  return (
    <ul className={style}>
      <Link to="/">
        <button>inicio</button>
      </Link>
      <Link to="/category/men's clothing">
        <button>Hombre</button>
      </Link>
      <Link to="/category/women's clothing">
        <button>Mujer</button>
      </Link>
      <Link to="/category/electronics">
        <button>Electronica</button>
      </Link>
      <Link to="/category/jewelery">
        <button>Bijouterie</button>
      </Link>
    </ul>
  );
};

export default MenuNav;
