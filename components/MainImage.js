import styles from "./MainImage.module.css";

const MainImage = (props) => {
  return <div className={styles["main-image"]}>{props.children}</div>;
};

export default MainImage;
