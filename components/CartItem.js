import { useRef } from "react";
import styles from "./CartItem.module.css";
import { TiDelete } from "react-icons/ti";

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
              type: props.type,
              price: props.price,
              quantity: Number(inputRef.current.value),
            })
          }
          onBlur={(event) =>
            props.onBlur(event, {
              id: props.id,
              type: props.type,
              price: props.price,
              quantity: Number(inputRef.current.value),
            })
          }
        />
        <div className={styles["delete-icon"]}>
          <div className={styles.tooltip}>
            <span className={styles.tooltiptext}>Remove item from cart</span>
            <TiDelete
              onClick={() =>
                props.onRemove({
                  id: props.id,
                  type: props.type,
                  price: props.price,
                  quantity: 0,
                })
              }
            />
          </div>
        </div>
        {props.error && props.errorId === props.id && (
          <div className={styles.error}>{props.error}</div>
        )}
        <div>${(Number(props.price) * Number(props.quantity)).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartItem;
