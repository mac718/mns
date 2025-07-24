import styles from "./SaleBanner.module.css";

const SaleBanner = ({ text }) => {
  return <div className={styles.banner}>{text}</div>;
};

export default SaleBanner;
