import { useRef } from "react";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const inputRef = useRef();
  return (
    <div className={styles.item}>
      {props.name} {props.type}
      <div>
        <input
          ref={inputRef}
          type="number"
          step="1"
          min="1"
          defaultValue={props.quantity}
          className={styles.input}
          onChange={(event) =>
            props.onChange(event, {
              id: props.id,
              price: props.price,
              quantity: Number(inputRef.current.value),
            })
          }
          onBlur={(event) =>
            props.onBlur(event, {
              id: props.id,
              price: props.price,
              quantity: Number(inputRef.current.value),
            })
          }
        />
        <div>${(Number(props.price) * Number(props.quantity)).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartItem;
