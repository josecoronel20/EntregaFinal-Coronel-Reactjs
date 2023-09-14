import React from "react";
import "../../styles/navStyles/numberProduct.css";
import { CartWidgetContext } from "../../context/CartWidgetContext";
import { useContext } from "react";

const NumberProducts = ({ arr }) => {
  const  [cart] = useContext(CartWidgetContext);

  const numArr = cart
    ? cart.reduce((acc, current) => {
        return acc + current.quantity;
      }, 0)
    : 0;

  return <p className="numberProducts">{numArr}</p>;
};

export default NumberProducts;
