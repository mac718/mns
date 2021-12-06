import { useState } from "react";
import CartItem from "./CartItem";
import Modal from "./UI/Modal";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <CartItem />
      <button onClick={props.onClose}>Close</button>
    </Modal>
  );
};

export default Cart;
