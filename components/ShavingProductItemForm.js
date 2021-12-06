import styles from "./ShavingProductItemForm.module.css";

const ShavingProductItemForm = (props) => {
  return (
    <form className={styles.form}>
      <input type="number" step="1" min="1" defaultValue="1" />
      <span className={styles["shaving-product-price"]}>{props.price}</span>
      <button className={styles["add-to-cart"]}>Add To Cart</button>
    </form>
  );
};

export default ShavingProductItemForm;
