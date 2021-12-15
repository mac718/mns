import React from "react";

const CartContext = React.createContext({
  items: [],
  total: 0,
  weight: 0,
  paid: false,
  addItem: (item) => {},
  removeItem: (item) => {},
  setPaid: (paid) => {},
});

export default CartContext;
