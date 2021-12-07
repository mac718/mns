import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={styles.item}>
      <div>
        <div>{props.name}</div>
        <div>{props.price}</div>
      </div>
      <div>
        <input type="number" step="1" defaultValue={props.quantity} />
        <button></button>
      </div>
    </div>
  );
};

export default CartItem;
