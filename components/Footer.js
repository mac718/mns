import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="mailto:mike@mikesnaturalsoaps.com">mike@mikesnaturalsoaps.com</a>
      <a href="mailto:mikeatmikesnaturalsoaps@gmail.com">
        mikeatmikesnaturalsoaps@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
