import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 8/30-9/2. No shipments today
      (Labor Day). Thanks!**
    </aside>
  );
};

export default Notifications;
