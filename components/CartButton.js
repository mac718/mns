import styles from "./CartButton.module.css";
import { MdShoppingCart } from "react-icons/md";

const CartButton = (props) => {
  return (
    <div className={styles.cart} onClick={props.onClick}>
      <MdShoppingCart />
      <span className={styles.badge}>4</span>
    </div>
  );
};

export default CartButton;
