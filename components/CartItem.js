import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={styles.item}>
      <div>
        <div>{props.name}Puck</div>
        <div>{props.price}12</div>
      </div>
      <div>
        <input type="number" step="1" />
        <button></button>
      </div>
    </div>
  );
};

export default CartItem;
