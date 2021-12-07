import { useContext, useRef, useState } from "react";
import CartContext from "../store/cart-context";
import styles from "./ShavingProductItemForm.module.css";

const ShavingProductItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const inputRef = useRef();
  const inputChangeHandler = (e) => {
    e.preventDefault();
    setQuantity(inputRef.current);
  };
  console.log(cartCtx.items);
  return (
    <form className={styles.form}>
      <input
        ref={inputRef}
        type="number"
        step="1"
        min="1"
        defaultValue="1"
        onChange={inputChangeHandler}
      />
      <span className={styles["shaving-product-price"]}>{props.price}</span>
      <button
        className={styles["add-to-cart"]}
        onClick={(e) => cartCtx.addItem(e, { id: props.id, quantity })}
      >
        Add To Cart
      </button>
    </form>
  );
};

export default ShavingProductItemForm;
