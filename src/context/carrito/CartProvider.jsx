import React from "react";
import { useReducer } from "react";
import { CartContext } from "./cartContext";
import cartReducer from "./cartReducer";
import { carroTypes } from "./cartReducer";

const inicioCarrito = {
  carrito: [],
};

export const CartProvider = ({ children }) => {
  const [carrito, dispatch] = useReducer(cartReducer, inicioCarrito);

  return (
    <CartContext.Provider value={[carrito, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};
