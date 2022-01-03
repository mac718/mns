import { useContext, useRef, useState } from "react";
import CartContext from "../store/cart-context";
import styles from "./ShavingProductItemForm.module.css";

const ShavingProductItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const inputRef = useRef();

  const existingItemIndex = cartCtx.items.findIndex(
    (item) => item.id === props.id
  );

  const existingItem = cartCtx.items[existingItemIndex];

  const inputChangeHandler = (event) => {
    event.preventDefault();
    setError("");
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
        onClick={(event) => {
          event.preventDefault();
          if (
            (existingItem &&
              Number(existingItem.quantity) + Number(inputRef.current.value) <=
                props.inStock) ||
            (!existingItem && Number(inputRef.current.value) <= props.inStock)
          ) {
            cartCtx.addItem(event, {
              id: props.id,
              name: props.name,
              price: props.price,
              quantity: cumulativeQuantity,
              weight: props.weight,
              type: props.type,
              inStock: props.inStock,
            });
          } else {
            setError(`Only ${props.inStock} in stock. Please adjust quantity.`);
          }
        }}
      >
        Add To Cart
      </button>
      {error && <div className={styles.error}>{error}</div>}
    </form>
  );
};

export default ShavingProductItemForm;
