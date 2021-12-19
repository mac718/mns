import styles from "./ShavingProductItem.module.css";
import ShavingProductItemForm from "./ShavingProductItemForm";

const ShavingProductItem = (props) => {
  return (
    <div className={styles["shaving-product"]}>
      <div>
        <span className={styles["shaving-product-name"]}>{props.name}</span>:{" "}
        <span>{props.description}</span>
      </div>
      <div>
        {props.inStock ? (
          //props.button
          <ShavingProductItemForm
            name={props.name}
            weight={props.weight}
            price={props.price}
            id={props.id}
            type={props.type}
            inStock={props.inStock}
          />
        ) : (
          <span className={styles["out-of-stock"]}>Out Of Stock</span>
        )}
      </div>
    </div>
  );
};

export default ShavingProductItem;
