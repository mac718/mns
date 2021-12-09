import styles from "./Cart.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Modal from "./UI/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const onChangeQuantity = (event, item) => {
    const itemIndex = cartCtx.items.findIndex(
      (ctxItem) => ctxItem.id === item.id
    );
    console.log(cartCtx.total);
    if (item.quantity > cartCtx.items[itemIndex].quantity) {
      cartCtx.addItem(event, { ...item, quantity: 1 }); //
    } else {
      console.log("gmmmgmmg");
      cartCtx.removeItem(item);
    }
  };

  return (
    <Modal onClose={props.onClose}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            type={item.type}
            onChange={onChangeQuantity}
          />
        );
      })}
      <div className={styles["cart-footer"]}>
        <div className={styles.total}>${cartCtx.total.toFixed(2)}</div>
        <div>
          <button onClick={props.onClose} className={styles.close}>
            Close
          </button>
          <button className={styles.checkout}>Checkout</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
