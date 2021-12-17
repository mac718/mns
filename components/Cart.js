import styles from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Modal from "./UI/Modal";
import { useRouter } from "next/router";
import Link from "next/link";
import Heading from "./Heading";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const router = useRouter();

  const onChangeQuantity = (event, item) => {
    console.log("qunat", item.quantity);
    const itemIndex = cartCtx.items.findIndex(
      (ctxItem) => ctxItem.id === item.id
    );
    console.log(cartCtx.total);
    if (item.quantity > cartCtx.items[itemIndex].quantity) {
      cartCtx.addItem(event, { ...item, quantity: item.quantity }); //
    } else if (!item.quantity) {
      return;
    } else {
      cartCtx.removeItem(item);
    }
  };

  const onBlurHandler = (event, item) => {
    if (event.target.value === "" || event.target.value === "0") {
      cartCtx.removeItem(item);
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <Heading>Your Cart</Heading>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={Math.random()}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            type={item.type}
            onChange={onChangeQuantity}
            onBlur={onBlurHandler}
          />
        );
      })}
      <div className={styles["cart-footer"]}>
        <div className={styles.total}>${cartCtx.total.toFixed(2)}</div>
        <div>
          <button onClick={props.onClose} className={styles.close}>
            Close
          </button>
          {router.pathname === "/checkout" ? null : (
            <Link href="/checkout">
              <button className={styles.checkout} onClick={props.onClose}>
                Checkout
              </button>
            </Link>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
