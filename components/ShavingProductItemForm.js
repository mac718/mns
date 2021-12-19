import { useContext, useRef, useState } from "react";
import CartContext from "../store/cart-context";
import styles from "./ShavingProductItemForm.module.css";

const ShavingProductItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const inputRef = useRef();

  const existingItemIndex = cartCtx.items.findIndex(
    (item) => item.id === props.id
  );
  const existingItem = cartCtx.items[existingItemIndex];

  const inputChangeHandler = (e) => {
    e.preventDefault();
    setError("");
    console.log(e.target.value);
    if (existingItem) {
      console.log("instock", existingItem.quantity, e.target.value);
      if (
        Number(existingItem.quantity) + Number(e.target.value) >
        existingItem.inStock
      ) {
        setError(
          `Only ${existingItem.inStock} in stock. Please adjust quantity.`
        );
        setDisabled(true);
        return;
      }
    }
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
        disabled={disabled}
        onClick={(event) =>
          cartCtx.addItem(event, {
            id: props.id,
            name: props.name,
            price: props.price,
            quantity: cumulativeQuantity,
            weight: props.weight,
            type: props.type,
            inStock: props.inStock,
          })
        }
      >
        Add To Cart
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default ShavingProductItemForm;
