import { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Modal from "./UI/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <Modal onClose={props.onClose}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
      <button onClick={props.onClose}>Close</button>
    </Modal>
  );
};

export default Cart;
