import React, { useContext } from "react";
import { CartWidgetContext } from "../../context/CartWidgetContext";
import "../../styles/ItemDetailStyles/quantitySelector.css";

const ItemQuantitySelector = ({ productId }) => {
  const [cart, setCart] = useContext(CartWidgetContext);

  const rest = () => {
    if (cart.some((item) => item.id === productId && item.quantity > 0)) {
      setCart((currentItems) =>
        currentItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const sum = () => {
    setCart((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const quantity = cart.find((item) => item.id === productId)?.quantity || 0;

  return (
    <div className="quantitySelector">
      <button className="buttonsQuantity" onClick={rest}>
        -
      </button>
      <div className="text">
        <p>cantidad</p>
        <p>{quantity}</p>
      </div>
      <button className="buttonsQuantity" onClick={sum}>
        +
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
