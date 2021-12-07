import CartContext from "./cart-context";
import { useState } from "react";
const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItemToCartHandler = (e, item) => {
    e.preventDefault();
    console.log(item);
    setItems((prev) => [...prev, item]);
  };

  const cartContext = {
    items: items,
    total: 0,
    addItem: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
