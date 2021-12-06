import { useState } from "react";
import Modal from "./UI/Modal";

const Cart = (props) => {
  return (
    <Modal>
      <button onClick={props.onClose}>Close</button>
    </Modal>
  );
};

export default Cart;
