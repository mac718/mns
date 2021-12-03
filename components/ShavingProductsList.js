import styles from "./ShavingProductsList.module.css";

const ShavingProductsList = (props) => {
  return <ul className={styles["shaving-products-list"]}>{props.children}</ul>;
};

export default ShavingProductsList;
