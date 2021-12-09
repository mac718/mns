import { useContext, useRef, useState } from "react";
import CartContext from "../store/cart-context";
import styles from "./ShavingProductItemForm.module.css";

const ShavingProductItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const inputRef = useRef();
  const existingItemIndex = cartCtx.items.findIndex(
    (item) => item.id === props.id
  );
  const existingItem = cartCtx.items[existingItemIndex];

  const inputChangeHandler = (e) => {
    e.preventDefault();
    setQuantity(Number(inputRef.current.value));
  };
  let cumulativeQuantity = existingItem
    ? quantity + existingItem.quantity
    : quantity;
  return (
    <form className={styles.form}>
      <input
        ref={inputRef}
        type="number"
        step="1"
        min="1"
        defaultValue={1}
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
            quantity: cumulativeQuantity,
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
