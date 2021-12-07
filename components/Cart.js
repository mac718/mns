import styles from "./Cart.module.css";
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
            type={item.type}
          />
        );
      })}
      <button onClick={props.onClose} className={styles.close}>
        Close
      </button>
    </Modal>
  );
};

export default Cart;
