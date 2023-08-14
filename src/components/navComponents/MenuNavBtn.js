import React from "react";
import "../../styles/navStyles/menunavbtn.css";

const MenuNavBtn = ({ category }) => {
  return (
    <>
      <button className="btn">{category}</button>
    </>
  );
};

export default MenuNavBtn;
