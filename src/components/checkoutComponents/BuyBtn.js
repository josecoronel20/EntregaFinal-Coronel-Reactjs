import React, { useContext } from "react";
import { CartWidgetContext } from "../../context/CartWidgetContext";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import "../../styles/buyBtn.css"

const BuyBtn = () => {
  const [cart, setCart] = useContext(CartWidgetContext);

  const buy = () => {
    setCart([]);
    swal("Tu compra se realizó con éxito");
  };

  return (
    <Link to={"/"} className="linkBuyBtn">
    <button className="buyBtn" onClick={buy}>
      Comprar
    </button>
    </Link>
  );
};

export default BuyBtn;
