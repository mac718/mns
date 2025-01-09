import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 1/9-1/9. No shipments today
      (1/8) - USPS is closed in onbservance of Jimmy Carter&apos;s death.
      Thanks!!**
    </aside>
  );
};

export default Notifications;
