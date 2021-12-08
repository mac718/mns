import { useContext, useRef, useState } from "react";
import CartContext from "../store/cart-context";
import styles from "./ShavingProductItemForm.module.css";

const ShavingProductItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const inputRef = useRef();
  const inputChangeHandler = (e) => {
    e.preventDefault();
    setQuantity(inputRef.current.value);
  };
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
      <span className={styles["shaving-product-price"]}>
        ${props.price.toFixed(2)}
      </span>
      <button
        className={styles["add-to-cart"]}
        onClick={(event) =>
          cartCtx.addItem(event, {
            id: props.id,
            name: props.name,
            price: props.price,
            quantity,
            type: props.type,
          })
        }
      >
        Add To Cart
      </button>
    </form>
  );
};

export default ShavingProductItemForm;
