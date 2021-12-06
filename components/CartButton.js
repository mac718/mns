import styles from "./CartButton.module.css";
import { MdShoppingCart } from "react-icons/md";

const CartButton = () => {
  return (
    <div className={styles.cart}>
      <MdShoppingCart />
      <span className={styles.badge}>4</span>
    </div>
  );
};

export default CartButton;
