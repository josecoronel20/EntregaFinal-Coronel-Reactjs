import React, { createContext, useState, useEffect } from "react";

export const CartWidgetContext = createContext(null);

export const CartWidgetProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (storedCart.length > 0) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartWidgetContext.Provider value={[cart, setCart]}>
      {children}
    </CartWidgetContext.Provider>
  );
};
