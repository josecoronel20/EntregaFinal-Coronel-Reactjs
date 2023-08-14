import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import "../../styles/catalogStyles/card.css";

const Card = ({ src, name, description, price }) => {
  return (
    <div className="card">
      <img src={src} />
      <h2>{name}</h2>
        <p className="description">{description}</p>
      <p className="price">${price}</p>
      <AddToCartBtn />
    </div>
  );
};

export default Card;
