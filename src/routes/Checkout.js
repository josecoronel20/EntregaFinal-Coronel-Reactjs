import React from "react";
import { CartWidgetContext } from "../context/CartWidgetContext";
import { useContext } from "react";
import "../styles/checkout.css";
import BuyBtn from "../components/checkoutComponents/BuyBtn";

const Checkout = () => {
  const [cart, setCart] = useContext(CartWidgetContext);

  const handleDelete = (e) => {
    const deleteProductId = e.target.id;

    const updateCart = cart.filter((product) => product.id !== deleteProductId);

    setCart(updateCart);
  };

  const total = Math.floor(cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  ));
  return (
    <div className="checkoutContainer">
      <div className="checkout">
        {cart.length !== 0 ? (
          cart.map((product) => (
            <div key={product.id} className="cardCheckout">
              <img src={product.src} alt="imagen de producto" />
              <h3>{product.name}</h3>
              <p className="quantity">cantidad: {product.quantity}</p>
              <p className="price">${product.price}</p>
              <div>
                <svg
                  className="x"
                  onClick={handleDelete}
                  id={product.id}
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
                  />
                </svg>
              </div>
            </div>
          ))
        ) : (
          <p>el carrito está vacío</p>
        )}
        <p>TOTAL: ${total}</p>
        <BuyBtn/>
      </div>
    </div>
  );
};

export default Checkout;
