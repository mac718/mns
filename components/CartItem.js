import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={styles.item}>
      <div>
        <div>{props.name}Puck</div>
        <div>{props.price}12</div>
      </div>
      <div>
        <input />
      </div>
    </div>
  );
};

export default CartItem;
