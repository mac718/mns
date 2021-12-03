import styles from "./ShavingSoapFormatList.module.css";

const ShavingSoapsFormatList = (props) => {
  return <ul className={styles.formats}>{props.children}</ul>;
};

export default ShavingSoapsFormatList;
