import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import "../../styles/itemListStyles/card.css";

const Card = ({ src, name, description, price, styleCard }) => {
  return (
    <div className={styleCard}>
      <img src={src} alt="imagen de producto" />
      <div className="textContainer">
        <h2>{name}</h2>
        <p className="description">{description}</p>
      </div>
      <p className="price">${price}</p>
      <AddToCartBtn />
    </div>
  );
};

export default Card;
