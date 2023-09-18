import React, { useContext, useState } from "react";
import { CartWidgetContext } from "../../context/CartWidgetContext";
import "../../styles/ItemDetailStyles/quantitySelector.css";

const ItemQuantitySelector = ({ productId }) => {
  const [cart, setCart] = useContext(CartWidgetContext);

  const [quantity, setQuantity] = useState(0);

  const handlerSum = () => {
    setQuantity(quantity + 1);
  };

  const handlerRest = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handlerAddToCart = () => {

    const updateCart = [...cart];
    updateCart

    // if (quantity > 0) {
    //   const updateCart = [...cart];
    //   const product = cart.find((product) => product.id === productId);
    //   product.quantity = quantity;
    //   updateCart.push(product);
    //   setCart(updateCart);
    // }
  };

  return (
    <div>
      <div className="quantitySelector">
        <button className="buttonsQuantity" onClick={handlerRest}>
          -
        </button>
        <div className="text">
          <p>cantidad</p>
          <p>{quantity}</p>
        </div>
        <button className="buttonsQuantity" onClick={handlerSum}>
          +
        </button>
      </div>
      <button className="addToCartBtn" onClick={handlerAddToCart}>
        + Add to cart
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
