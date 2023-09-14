import React, { createContext, useState } from "react";

export const CartWidgetContext = createContext(null);

export const CartWidgetProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartWidgetContext.Provider value={[cart, setCart]}>
      {children}
    </CartWidgetContext.Provider>
  );
};
