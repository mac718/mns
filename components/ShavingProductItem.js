import styles from "./ShavingProductItem.module.css";

const ShavingProductItem = (props) => {
  return (
    <div className={styles["shaving-product"]}>
      <div>
        <span className={styles["shaving-product-name"]}>{props.name}</span>:{" "}
        <span>{props.description}</span>
        <span className={styles["shaving-product-price"]}>{props.price}</span>
      </div>
      <div>
        {props.inStock ? (
          props.button
        ) : (
          <span className={styles["out-of-stock"]}>Out Of Stock</span>
        )}
      </div>
    </div>
  );
};

export default ShavingProductItem;
