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
          <a href="Bath Soaps.html" className={styles.link}>
            Bath Soaps
          </a>
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
          <a href="About Mike.html" className={styles.link}>
            About Mike/Contact
          </a>
        </li>
        <li className={styles["list-item"]}>
          <a href="Properties and Benefits.html" className={styles.link}>
            Properties and Benefits of Oils/Butters
          </a>
        </li>
        <li className={styles["list-item"]}>
          <a href="FAQ.html" className={styles.link}>
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
