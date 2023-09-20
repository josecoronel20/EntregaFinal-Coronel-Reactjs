import React, { useContext, useState } from "react";
import { CartWidgetContext } from "../../context/CartWidgetContext";
import "../../styles/ItemDetailStyles/quantitySelector.css";
import { ProductsFirebaseContext } from "../../context/ProductsFirebaseContext";

const ItemQuantitySelector = ({ productId }) => {
  const [products] = useContext(ProductsFirebaseContext);
  const [cart, setCart] = useContext(CartWidgetContext);
  const [quantity, setQuantity] = useState(0);

  const handlerSum = () => {
    setQuantity(quantity + 1);
  };

  const handlerRest = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handlerAddToCart = () => {
    const productToAdd = products.find((product) => product.id === productId);
    productToAdd.quantity = quantity;
    const cartUpdate = [...cart];
    const isProductInCart = cart.find((product) => product.id === productId);

    if (isProductInCart) {
      const productIndex = cart.findIndex(
        (product) => product.id === productId
      );
      isProductInCart.quantity = quantity;
      cartUpdate[productIndex] = isProductInCart;
      setCart(cartUpdate);
    } else {
      if (quantity !== 0) {
        const product = products.find((product) => product.id === productId);
        product.quantity = quantity;
        cartUpdate.push(product);
        setCart(cartUpdate);
      } else {
        const product = products.find((product) => product.id === productId);
        setQuantity(1);
        product.quantity = quantity;
        cartUpdate.push(product);
        setCart(cartUpdate);
      }
    }
    console.log(cart);
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
