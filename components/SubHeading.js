import styles from "./SubHeading.module.css";

const SubHeading = (props) => {
  return <h1 className={styles["sub-heading"]}>{props.children}</h1>;
};

export default SubHeading;
