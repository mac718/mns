import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 12/16-12/18. The USPS shipping
      deadline for a pre-Christmas delivery is 12/18 - Get your Christmas orders
      in by then! Thanks!**
    </aside>
  );
};

export default Notifications;
