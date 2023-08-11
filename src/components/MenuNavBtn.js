import React from "react";
import "../styles/menunavbtn.css";

const MenuNavBtn = ({ category }) => {
  return (
    <>
      <button className="btn">{category}</button>
    </>
  );
};

export default MenuNavBtn;
