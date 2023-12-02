import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const value = {
    cart,
    setCart,
  };

  return <CartContext.Provider value={value}>{children} </CartContext.Provider>;
};
