import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 1/12-1/16. No shipments today
      (inclement weather). Thanks!**
    </aside>
  );
};

export default Notifications;
