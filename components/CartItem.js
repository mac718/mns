import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={styles.item}>
      {props.name} {props.type}
      <div>
        <input
          type="number"
          step="1"
          defaultValue={props.quantity}
          className={styles.input}
        />
        <div>${(props.price * Number(props.quantity)).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartItem;
