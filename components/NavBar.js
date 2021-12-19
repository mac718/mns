import styles from "./NavBar.module.css";
import Link from "next/link";
import CartButton from "./CartButton";

const NavBar = (props) => {
  return (
    <nav>
      <CartButton onClick={props.showCart} />
      <ul className={styles.list}>
        <li className={styles["list-item"]}>
          <a href="index.html" className={styles.link}>
            Welcome
          </a>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/bath_soaps" className={styles.link}>
            Bath Soaps
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/shampoo_bar" className={styles.link}>
            Shampoo Bars
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/shaving_soaps" className={styles.link}>
            Shaving Soaps
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/about_mike" className={styles.link}>
            About Mike/Contact
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/properties" className={styles.link}>
            Properties and Benefits of Oils/Butters
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/faq" className={styles.link}>
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
