import styles from "./CartButton.module.css";
import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  let numberOfItems = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <div className={styles.cart} onClick={props.onClick}>
      <MdShoppingCart />
      <span className={styles.badge}>{numberOfItems}</span>
    </div>
  );
};

export default CartButton;
