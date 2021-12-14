import React from "react";

const CartContext = React.createContext({
  items: [],
  total: 0,
  weight: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

export default CartContext;
